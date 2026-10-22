import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'data/site.ts',
  'data/services.ts',
  'data/projects.ts',
  'data/articles.ts',
  'pages/services.tsx',
  'pages/services/[slug].tsx',
  'pages/projects/[slug].tsx',
  'pages/articles/[slug].tsx',
  'pages/tools/project-brief.tsx',
  'pages/privacy.tsx',
];

let failed = false;

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}

if (fs.existsSync(path.join(root, 'data/services.ts'))) {
  const source = read('data/services.ts');
  for (const field of ['title', 'slug', 'summary', 'forWho', 'includes', 'outcomes']) {
    if (!source.includes(`${field}:`)) {
      console.error(`Service data appears to be missing field: ${field}`);
      failed = true;
    }
  }
}

if (fs.existsSync(path.join(root, 'data/projects.ts'))) {
  const source = read('data/projects.ts');
  if (source.includes('stg.ezd.bf')) {
    console.error('Legacy typo stg.ezd.bf is still present in project data.');
    failed = true;
  }
}

const articlePlanPath = path.join(root, 'content/article-plan.json');
if (fs.existsSync(articlePlanPath)) {
  const articles = JSON.parse(fs.readFileSync(articlePlanPath, 'utf8'));
  const slugs = new Set();

  for (const article of articles) {
    for (const field of ['title', 'slug', 'category', 'intent', 'service']) {
      if (!article[field]) {
        console.error(`Article plan entry missing ${field}`);
        failed = true;
      }
    }

    if (slugs.has(article.slug)) {
      console.error(`Duplicate article-plan slug: ${article.slug}`);
      failed = true;
    }
    slugs.add(article.slug);
  }
}

if (failed) process.exit(1);
console.log('Content validation passed.');
