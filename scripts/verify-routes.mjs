import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredStaticPages = [
  'pages/index.tsx',
  'pages/about.tsx',
  'pages/services.tsx',
  'pages/projects.tsx',
  'pages/projects/[slug].tsx',
  'pages/articles.tsx',
  'pages/articles/[slug].tsx',
  'pages/contact.tsx',
  'pages/github.tsx',
  'pages/settings.tsx',
  'pages/404.tsx',
];

const requiredDataFiles = [
  'data/site.ts',
  'data/services.ts',
  'data/projects.ts',
  'data/articles.ts',
];

const requiredFiles = [...requiredStaticPages, ...requiredDataFiles];
const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

const projectSource = fs.readFileSync(path.join(root, 'data/projects.ts'), 'utf8');
const articleSource = fs.readFileSync(path.join(root, 'data/articles.ts'), 'utf8');

const extractSlugs = (source) =>
  [...source.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
const duplicateValues = (values) =>
  values.filter((value, index) => values.indexOf(value) !== index);

const projectSlugs = extractSlugs(projectSource);
const articleSlugs = extractSlugs(articleSource);
const duplicateProjectSlugs = [...new Set(duplicateValues(projectSlugs))];
const duplicateArticleSlugs = [...new Set(duplicateValues(articleSlugs))];
const invalidSlugs = [...projectSlugs, ...articleSlugs].filter(
  (slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
);

if (
  missing.length ||
  duplicateProjectSlugs.length ||
  duplicateArticleSlugs.length ||
  invalidSlugs.length
) {
  if (missing.length) console.error('Missing required files:', missing.join(', '));
  if (duplicateProjectSlugs.length)
    console.error('Duplicate project slugs:', duplicateProjectSlugs.join(', '));
  if (duplicateArticleSlugs.length)
    console.error('Duplicate article slugs:', duplicateArticleSlugs.join(', '));
  if (invalidSlugs.length) console.error('Invalid slugs:', invalidSlugs.join(', '));
  process.exit(1);
}

console.log(
  `Route verification passed: ${requiredStaticPages.length} route files, ${projectSlugs.length} projects, ${articleSlugs.length} articles.`
);
