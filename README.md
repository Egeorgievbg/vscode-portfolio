# Evgeni Georgiev — VS Code Portfolio

Професионален portfolio и sales сайт за **Евгени Георгиев** — web developer, Python automation specialist и digital project partner.

## Основни цели

- представяне на реални клиентски и технически проекти;
- продажба на Business Website, Growth Website и Automation Sprint услуги;
- позициониране за Monthly Digital Partner договори;
- собствен SEO блог за сайтове, AI, ERP/API и автоматизации;
- устойчив път към 5 000+ € месечен оборот.

## Основни страници

- `/` — позициониране и основни CTA;
- `/about` — професионален профил;
- `/services` — услуги и ориентировъчни цени;
- `/projects` — portfolio;
- `/projects/[slug]` — case studies;
- `/articles` — собствен SEO блог;
- `/articles/[slug]` — статии;
- `/contact` — бизнес контакт;
- `/github` — технически proof-of-work;
- `/settings` — визуални теми, изключена от индексиране;
- `/404` — branded recovery page.

## Технологии

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- GitHub Calendar

## Чиста инсталация

Проектът използва Node.js 20 и npm 10. Старият lock файл беше премахнат, защото беше от предишна версия на template-а.

```bash
nvm use
rm -rf node_modules .next
npm install
npm run verify
```

`npm install` ще генерира нов `package-lock.json`. След успешна проверка той трябва да бъде commit-нат, за да се получат повторяеми production builds.

Стартиране за разработка:

```bash
npm run dev
```

Production:

```bash
npm run build
npm run start
```

## Verification pipeline

```bash
npm run content:validate
npm run routes:verify
npm run lint
npm run typecheck
npm run build
```

Всички проверки наведнъж:

```bash
npm run verify
```

## Content automation

Приоритетните SEO теми са в:

```text
content/article-plan.json
```

Генериране на структурирани article briefs:

```bash
npm run content:briefs
```

AI не публикува директно в production. Процесът е:

```text
Topic → Search intent → Brief → Draft → Human review → SEO check → Commit → Deploy
```

## Environment variables

```env
NEXT_PUBLIC_GITHUB_USERNAME=Egeorgievbg
```

При липса на променливата сайтът използва `Egeorgievbg` като безопасна стойност по подразбиране.

## Deployment

Проектът може да бъде публикуван във Vercel или друга Next.js съвместима среда.

```text
https://evgeni-georgiev.com
```

След deployment трябва да се проверят всички основни и динамични routes, Search Console, sitemap и contact conversion tracking.

## Security

- не commit-вай API ключове;
- използвай environment variables;
- проверявай клиентските данни преди публикуване;
- AI-generated съдържанието трябва да минава човешки review;
- не публикувай чувствителни вътрешни системи или клиентска информация;
- поддържай security headers в `next.config.ts`;
- формите трябва да имат server-side validation, rate limiting и GDPR съгласие.
