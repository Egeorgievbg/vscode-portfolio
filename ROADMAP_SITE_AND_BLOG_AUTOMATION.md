# ROADMAP: Evgeni Georgiev Portfolio + SEO Blog Automation

## Цел

Да превърнем `vscode-portfolio` template-а в завършен професионален сайт за Евгени Георгиев, който:

1. Представя Евгени като дигитален проектен партньор, web developer и automation specialist.
2. Показва реални проекти и технически proof-of-work.
3. Продава конкретни услуги с ясни пакети.
4. Създава SEO blog engine за регулярно публикуване на качествени статии.
5. Поддържа безопасна AI-assisted content workflow система, без spam/scaled low-value content.

---

## Текущо състояние

### Налична техническа база

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- react-icons
- react-github-calendar

### Вече персонализирано

- Начална страница с Евгени Георгиев.
- About страница с професионален профил.
- Projects страница с реални проекти.
- `data/projects.ts` с първи списък от проекти.

### Основни липси

- Няма services страница.
- Няма contact/lead страница.
- Няма blog система.
- Няма MDX/Markdown article pipeline.
- Няма SEO metadata компонент.
- Няма sitemap/robots strategy.
- Няма structured data.
- ProjectCard е твърде базов.
- Няма case study pages.
- Няма автоматизация за блог статии.

---

## Позициониране

### Основно послание

Евгени Георгиев помага на малки и средни бизнеси да изграждат сайтове, автоматизации и дигитални процеси, които носят повече заявки, по-добра организация и по-малко технически хаос.

### Роля

- Digital Project Partner
- Web Developer
- Python Automation Specialist
- ERP/API Integration Consultant
- UX/CRO & SEO-oriented Builder

---

## Phase 1: Content Architecture

### 1.1 Създай централни data файлове

Да се добавят:

```txt
/data/site.ts
/data/services.ts
/data/projects.ts
/data/skills.ts
/data/testimonials.ts
/data/blogCategories.ts
/data/seoPages.ts
```

### 1.2 `site.ts`

Да съдържа:

- име;
- роля;
- tagline;
- email;
- телефон, ако ще се показва;
- основни услуги;
- social links;
- canonical domain.

### 1.3 `services.ts`

Основни услуги:

1. Business Website
2. Growth Website
3. Automation Sprint
4. Monthly Digital Partner
5. AI Marketing Launch
6. E-commerce Structure
7. ERP/API Integrations
8. SEO & Ads Preparation

---

## Phase 2: Portfolio Upgrade

### 2.1 Нов Project interface

```ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  category: string;
  industry: string;
  status: 'Завършен' | 'В развитие' | 'Собствен проект' | 'Technical proof-of-work';
  businessGoal: string;
  myRole: string[];
  technologies: string[];
  results: string[];
  logo: string;
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}
```

### 2.2 Проекти

Да се опишат като case studies:

1. ThinkMove.bg
2. Summertime.bg
3. GPTS 360
4. GPTSBOXES.com
5. GPTS Print Shop
6. Автошкола Ватони Плевен
7. stg.ezd.bf
8. ERP Pricing Bridge
9. Internal Printer Server
10. E-Commerce Android
11. GSTROY_INTERNAL_FLASK
12. Google Ads Python experiments

### 2.3 ProjectCard v2

Да показва:

- категория;
- индустрия;
- статус;
- кратко описание;
- бизнес цел;
- 3–5 технологии;
- бутон “Виж case study”;
- външен линк, ако има.

---

## Phase 3: Services & Offers

### 3.1 `/services`

Страница с услуги и пакети.

### 3.2 Пакети

#### Business Website

Цена: от 1 200 EUR

Включва:

- сайт 5–10 страници;
- UX структура;
- текстове;
- SEO основа;
- мобилна версия;
- контактна форма;
- подготовка за реклама.

#### Growth Website

Цена: от 2 500 EUR

Включва:

- всичко от Business Website;
- CRO структура;
- analytics;
- landing секции;
- campaign readiness;
- conversion tracking.

#### Automation Sprint

Цена: от 800 EUR

Включва:

- анализ на процес;
- Python/API automation;
- import/export логика;
- CSV/Excel workflows;
- документация;
- тестове.

#### Monthly Digital Partner

Цена: от 400 EUR/месец

Включва:

- промени по сайт;
- съдържание;
- SEO improvements;
- техническа координация;
- малки автоматизации;
- месечен отчет.

---

## Phase 4: Blog Engine

### 4.1 Цел

Да се създаде blog система, която позволява регулярни SEO статии за теми, по които Евгени има реална експертиза.

Важно: не се създава масов AI spam. Статиите трябва да са people-first, практически, базирани на реален опит, case studies, чеклисти и конкретни бизнес казуси.

### 4.2 Технически вариант

Препоръка: Markdown/MDX blog.

Да се добавят:

```txt
/content/blog/
/lib/blog.ts
/pages/blog/index.tsx
/pages/blog/[slug].tsx
/components/BlogCard.tsx
/components/BlogLayout.tsx
```

### 4.3 Структура на статия

Frontmatter:

```md
---
title: "..."
slug: "..."
description: "..."
date: "2026-05-09"
updated: "2026-05-09"
category: "Web Development"
tags: ["SEO", "сайт", "малък бизнес"]
keywords: ["изработка на сайт", "сайт за бизнес"]
featured: false
---
```

### 4.4 SEO изисквания

Всяка статия да има:

- ясна search intent цел;
- уникален title;
- meta description;
- H1 само веднъж;
- H2/H3 структура;
- вътрешни линкове към услуги;
- вътрешни линкове към case studies;
- FAQ секция;
- авторски практически опит;
- CTA към контакт или услуга.

---

## Phase 5: Blog Automation Workflow

### 5.1 Необходим workflow

Да се създаде AI-assisted процес, който не публикува директно без review.

```txt
Topic idea -> Keyword intent -> Brief -> Draft -> Human review -> SEO check -> Commit -> Deploy
```

### 5.2 GitHub automation вариант

Да се добави папка:

```txt
/content/blog/drafts/
/content/blog/published/
/scripts/generate-blog-draft.ts
/scripts/validate-blog-frontmatter.ts
/scripts/create-blog-index.ts
```

### 5.3 Безопасен процес

AI може да генерира чернова, но:

- не публикува автоматично без human approval;
- не копира чуждо съдържание;
- не създава 100 статии наведнъж;
- не генерира статии извън реалната експертиза на Евгени;
- не обещава класиране;
- не използва измамни SEO техники.

### 5.4 Команди

```json
{
  "scripts": {
    "blog:new": "tsx scripts/generate-blog-draft.ts",
    "blog:validate": "tsx scripts/validate-blog-frontmatter.ts",
    "blog:index": "tsx scripts/create-blog-index.ts"
  }
}
```

---

## Phase 6: Първи SEO Content Clusters

### Cluster 1: Изработка на сайтове

Цел: клиенти за Business Website и Growth Website.

Статии:

1. Колко струва изработка на сайт за малък бизнес през 2026?
2. Какво трябва да има един бизнес сайт, за да носи запитвания?
3. Защо красивият сайт не продава, ако няма UX и CTA структура?
4. Сайт за автошкола: какво трябва да има, за да носи курсисти?
5. Сайт за къща за гости: как да получавате директни резервации?
6. Сайт за школа: как да убедите родители и ученици да се запишат?

### Cluster 2: AI агенти за бизнес

Цел: AI Lead Agent услуги.

Статии:

1. Как AI асистент може да събира запитвания от сайта ви?
2. AI chatbot за автошкола: реални ползи и ограничения.
3. AI асистент за къща за гости: как да не изпускате резервации?
4. AI lead agent срещу обикновена контактна форма.
5. Как да внедрите AI в малък бизнес без хаос и риск?

### Cluster 3: Python автоматизации

Цел: Automation Sprint и ERP/API клиенти.

Статии:

1. Как Python автоматизация спестява време на малък бизнес?
2. Автоматизация на Excel/CSV процеси: кога има смисъл?
3. ERP интеграции за e-commerce: основни проблеми и решения.
4. Автоматизация на етикети и принтери в складови процеси.
5. Как да свържете сайт, продукти, цени и ERP система?

### Cluster 4: E-commerce и продуктови каталози

Цел: e-commerce структура, GPTSBOXES proof, продуктови клиенти.

Статии:

1. Как да структурирате продуктов каталог за повече продажби?
2. Защо продуктовите описания са критични за SEO и конверсии?
3. Как да подготвите e-commerce сайт за Google Ads?
4. Какво трябва да има B2B продуктова страница?
5. Как да намалите ръчната работа при управление на продукти?

---

## Phase 7: Първи 10 статии за публикуване

Приоритетен списък:

1. Изработка на сайт за малък бизнес: какво реално трябва да включва?
2. Сайт за автошкола: структура, SEO и запитвания.
3. Сайт за къща за гости: директни резервации без посредници.
4. AI асистент за сайт: как събира повече запитвания?
5. Python автоматизация за бизнес: 7 процеса, които може да автоматизирате.
6. ERP интеграции: как да свържете продукти, цени и сайт?
7. Защо сайтът ви има посещения, но няма запитвания?
8. Какво е CRO и защо е важно за малкия бизнес?
9. AI съдържание за бизнес: как да го използвате без да изглежда евтино?
10. Monthly Digital Partner: защо бизнесът има нужда от дигитален човек всеки месец?

---

## Phase 8: SEO техническа основа

Да се добавят:

- SEO component;
- canonical URLs;
- Open Graph metadata;
- Twitter cards;
- sitemap.xml;
- robots.txt;
- structured data JSON-LD;
- Breadcrumb schema;
- Article schema;
- Person schema;
- ProfessionalService schema;
- FAQ schema за selected pages.

---

## Phase 9: Internal Linking Strategy

Всяка статия да линква към:

- `/services`
- конкретна услуга;
- поне 1 case study;
- контактна страница;
- 1–2 related blog posts.

Пример:

Статия за автошкола -> линк към:

- проект Автошкола Ватони;
- услуга Business Website;
- статия за AI асистент;
- contact CTA.

---

## Phase 10: QA и сигурност

Преди deploy:

```bash
npm install
npm run lint
npm run build
```

Да се провери:

- няма счупени линкове;
- няма placeholder съдържание;
- няма чувствителни данни;
- няма API keys;
- няма клиентски confidential данни;
- формите имат validation;
- AI generated съдържанието е прегледано;
- няма duplicate titles/descriptions.

---

## Definition of Done

Сайтът се счита за завършен първа production версия, когато:

- началната страница продава ясно позициониране;
- има услуги и пакети;
- има богато портфолио;
- има case study pages;
- има blog index;
- има поне 10 качествени статии;
- има SEO metadata;
- има sitemap и robots;
- build-ът минава;
- няма placeholder съдържание;
- има ясен CTA към запитване;
- съдържанието е полезно, не spam.

---

## Приоритетен ред за изпълнение

1. Services page.
2. Contact page.
3. ProjectCard v2.
4. Rich project data.
5. Case study pages.
6. Blog engine.
7. SEO metadata.
8. Първи 10 blog статии.
9. Blog automation scripts.
10. Sitemap/robots/structured data.
11. QA/build.
12. Deploy.
