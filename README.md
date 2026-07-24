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
- `/github` — технически proof-of-work.

## Технологии

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- GitHub Calendar

## Стартиране

```bash
npm install
npm run content:validate
npm run dev
```

Production проверка:

```bash
npm run build
npm run start
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

Проверката валидира задължителните portfolio и content файлове:

```bash
npm run content:validate
```

AI не публикува автоматично директно в production. Процесът е:

```text
Topic → Search intent → Brief → Draft → Human review → SEO check → Commit → Deploy
```

## Environment variables

```env
NEXT_PUBLIC_GITHUB_USERNAME=Egeorgievbg
```

При липса на променливата сайтът използва `Egeorgievbg` като безопасна стойност по подразбиране.

## Deployment

Проектът може да бъде публикуван във Vercel или друга Next.js съвместима среда. Домейнът е:

```text
https://evgeni-georgiev.com
```

## Security

- не commit-вай API ключове;
- използвай environment variables;
- проверявай клиентските данни преди публикуване;
- AI-generated съдържанието трябва да минава човешки review;
- не публикувай чувствителни вътрешни системи или клиентска информация.
