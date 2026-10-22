import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredStaticPages = [
  'pages/index.tsx',
  'pages/about.tsx',
  'pages/services.tsx',
  'pages/services/[slug].tsx',
  'pages/projects.tsx',
  'pages/projects/[slug].tsx',
  'pages/articles.tsx',
  'pages/articles/[slug].tsx',
  'pages/contact.tsx',
  'pages/github.tsx',
  'pages/privacy.tsx',
  'pages/tools/project-brief.tsx',
  'pages/settings.tsx',
  'pages/404.tsx',
];

const requiredDataFiles = [
  'data/site.ts',
  'data/services.ts',
  'data/projects.ts',
  'data/articles.ts',
];

const requiredPublicFiles = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt',
];

const requiredFiles = [...requiredStaticPages, ...requiredDataFiles, ...requiredPublicFiles];
const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const extractSlugs = (source) =>
  [...source.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);

const duplicateValues = (values) =>
  [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];

const serviceSlugs = extractSlugs(read('data/services.ts'));
const projectSlugs = extractSlugs(read('data/projects.ts'));
const articleSlugs = extractSlugs(read('data/articles.ts'));

const slugGroups = [
  ['service', serviceSlugs],
  ['project', projectSlugs],
  ['article', articleSlugs],
];

let failed = false;

if (missing.length) {
  console.error('Missing required files:', missing.join(', '));
  failed = true;
}

for (const [type, slugs] of slugGroups) {
  const duplicates = duplicateValues(slugs);
  const invalid = slugs.filter((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));

  if (duplicates.length) {
    console.error(`Duplicate ${type} slugs:`, duplicates.join(', '));
    failed = true;
  }

  if (invalid.length) {
    console.error(`Invalid ${type} slugs:`, invalid.join(', '));
    failed = true;
  }
}

if (!missing.includes('public/sitemap.xml')) {
  const sitemap = read('public/sitemap.xml');
  const expectedUrls = [
    ...serviceSlugs.map((slug) => `https://evgeni-georgiev.com/services/${slug}`),
    ...projectSlugs.map((slug) => `https://evgeni-georgiev.com/projects/${slug}`),
    ...articleSlugs.map((slug) => `https://evgeni-georgiev.com/articles/${slug}`),
  ];

  const missingFromSitemap = expectedUrls.filter((url) => !sitemap.includes(`<loc>${url}</loc>`));

  if (missingFromSitemap.length) {
    console.error('Missing dynamic URLs from sitemap:', missingFromSitemap.join(', '));
    failed = true;
  }
}

if (failed) process.exit(1);

console.log(
  [
    'Route verification passed:',
    `${requiredStaticPages.length} route files`,
    `${serviceSlugs.length} services`,
    `${projectSlugs.length} projects`,
    `${articleSlugs.length} articles`,
    'sitemap coverage OK',
  ].join(' ')
);
