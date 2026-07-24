import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'data/site.ts',
  'data/services.ts',
  'data/projects.ts',
  'data/articles.ts',
  'pages/services.tsx',
  'pages/projects/[slug].tsx',
  'pages/articles/[slug].tsx',
];

let failed = false;

for (const file of requiredFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}

const articlePlanPath = path.join(process.cwd(), 'content/article-plan.json');
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
      console.error(`Duplicate article slug: ${article.slug}`);
      failed = true;
    }
    slugs.add(article.slug);
  }
}

if (failed) process.exit(1);
console.log('Content validation passed.');
