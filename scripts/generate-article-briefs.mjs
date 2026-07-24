import fs from 'fs';
import path from 'path';

const planPath = path.join(process.cwd(), 'content/article-plan.json');
const outputDir = path.join(process.cwd(), 'content/drafts');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));

for (const article of plan) {
  const filePath = path.join(outputDir, `${article.slug}.md`);
  if (fs.existsSync(filePath)) continue;

  const brief = `# ${article.title}\n\n## Search intent\n${article.intent}\n\n## Свързана услуга\n${article.service}\n\n## Основен бизнес проблем\nОпиши конкретна ситуация, в която бизнесът губи пари, време или заявки.\n\n## Структура\n1. Контекст и проблем\n2. Причини\n3. Практически стъпки\n4. Реален пример или case study\n5. Рискове и сигурност\n6. FAQ\n7. CTA към ${article.service}\n\n## Quality gate\n- People-first съдържание\n- Без обещание за гарантирано класиране\n- Без копиране на чужди текстове\n- Минимум един реален практически пример\n- Вътрешни линкове към услуга, case study и контакт\n`;

  fs.writeFileSync(filePath, brief, 'utf8');
  console.log(`Created: ${filePath}`);
}
