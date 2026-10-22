export interface PortfolioArticle {
  title: string;
  slug: string;
  description: string;
  category: string;
  keywords: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
}

export const articles: PortfolioArticle[] = [
  {
    title: 'Изработка на сайт за малък бизнес: какво реално трябва да включва?',
    slug: 'izrabotka-na-sait-za-malak-biznes',
    description: 'Практическа структура за бизнес сайт, който изгражда доверие и носи запитвания.',
    category: 'Web Development',
    keywords: ['изработка на сайт', 'бизнес сайт', 'SEO', 'CRO'],
    sections: [
      { heading: 'Защо много сайтове не работят', body: 'Много сайтове изглеждат прилично, но не водят към действие, защото са създадени като визитка, а не като инструмент за продажби.' },
      { heading: 'Минимална структура', body: 'Добрият сайт трябва бързо да обясни какво предлагате, защо да ви се доверят и как клиентът да направи следващата стъпка.', bullets: ['ясно hero послание', 'услуги и ползи', 'доказателства', 'FAQ', 'силни CTA бутони', 'мобилна версия', 'SEO основа'] },
      { heading: 'Бизнес стойност', body: 'Когато UX, съдържанието и измерването са подредени, сайтът може да носи реални заявки, а не само посещения.' },
    ],
  },
  {
    title: 'Сайт за автошкола: структура, локално SEO и повече курсисти',
    slug: 'sait-za-avtoshkola',
    description: 'Какво трябва да има сайтът на автошкола, за да изгражда доверие и да генерира запитвания.',
    category: 'Local SEO',
    keywords: ['сайт за автошкола', 'локално SEO', 'автошкола Плевен'],
    sections: [
      { heading: 'Какво търси бъдещият курсист', body: 'Кандидатът иска бързо да разбере категориите, процеса, локацията, доверието и как да се запише.' },
      { heading: 'Задължителни секции', body: 'Информацията трябва да бъде достъпна особено лесно от телефон.', bullets: ['категории и курсове', 'процес на записване', 'инструктори и доверие', 'FAQ', 'обаждане с един клик', 'Google Maps', 'форма за запитване'] },
      { heading: 'Локално SEO', body: 'Страниците трябва да таргетират града, района и конкретните услуги, а Google Business Profile да е синхронизиран със сайта.' },
    ],
  },
  {
    title: 'AI асистент за сайт: как да събира повече запитвания?',
    slug: 'ai-asistent-za-sait',
    description: 'Как AI lead agent може да даде първи отговор, да квалифицира клиента и да предаде запитването към човек.',
    category: 'AI Agents',
    keywords: ['AI асистент', 'AI chatbot', 'lead generation'],
    sections: [
      { heading: 'Проблемът', body: 'Бизнесите изпускат клиенти, когато отговорят късно или когато едни и същи въпроси се обработват ръчно.' },
      { heading: 'Какво трябва да прави агентът', body: 'AI агентът трябва ясно да се представя като AI, да отговаря само по проверена информация и винаги да предлага human handoff.', bullets: ['FAQ отговори', 'име и телефон', 'квалификация', 'CRM или имейл известие', 'human handoff'] },
      { heading: 'За кого е подходящ', body: 'Автошколи, къщи за гости, школи, сервизи, e-commerce и услуги с много повтарящи се въпроси.' },
    ],
  },
  {
    title: 'Python автоматизация за бизнес: 7 процеса с бърза възвръщаемост',
    slug: 'python-avtomatizacia-za-biznes',
    description: 'Практически примери за намаляване на ръчната работа чрез Python, API и файлови workflows.',
    category: 'Automation',
    keywords: ['Python автоматизация', 'ERP интеграции', 'Excel automation'],
    sections: [
      { heading: 'Кога има смисъл', body: 'Когато една операция се повтаря често, отнема време и създава риск от грешки.' },
      { heading: 'Подходящи процеси', body: 'Започва се с малък и измерим процес.', bullets: ['Excel/CSV обработка', 'импорт на продукти', 'синхронизация на цени', 'генериране на етикети', 'автоматични отчети', 'обработка на заявки', 'връзка сайт–ERP'] },
      { heading: 'Резултат', body: 'Добрата автоматизация намалява грешките, ускорява работата и освобождава капацитет за по-важни задачи.' },
    ],
  },
  {
    title: 'Защо сайтът има посещения, но няма запитвания?',
    slug: 'zashto-saitat-nqma-zapitvania',
    description: 'Основните CRO проблеми, които спират посетителя да се превърне в реален клиент.',
    category: 'CRO',
    keywords: ['CRO', 'повече запитвания', 'UX'],
    sections: [
      { heading: 'Трафикът не е достатъчен', body: 'Ако офертата, доверието и CTA логиката са слаби, допълнителният трафик само увеличава загубата.' },
      { heading: 'Най-чести причини', body: 'Проверете първо най-важните точки по клиентския път.', bullets: ['неясно заглавие', 'липса на конкретна оферта', 'слаби снимки', 'липса на доказателства', 'скрити контакти', 'дълга форма', 'бавен mobile сайт'] },
      { heading: 'Следваща стъпка', body: 'Одитирайте първия екран, CTA бутоните, мобилното изживяване и формата за запитване.' },
    ],
  },,
  {
    title: 'Website Launch Checklist 2026: 42 проверки преди публикуване',
    slug: 'website-launch-checklist-2026',
    description: 'Практичен pre-launch checklist за съдържание, SEO, UX, сигурност, форми, analytics и rollback.',
    category: 'Website QA',
    keywords: ['website launch checklist', 'QA', 'SEO', 'security'],
    sections: [
      { heading: 'Съдържание и доверие', body: 'Преди release проверете дали имената, контактите, проектните статуси, цените и твърденията са актуални и доказуеми.', bullets: ['един ясен H1', 'без placeholder текст', 'реални контакти', 'актуални legal страници', 'смислен alt текст', 'без непотвърдени резултати'] },
      { heading: 'SEO и индексиране', body: 'Проверете какво ще види търсачката след публикуването.', bullets: ['title и description', 'canonical', 'robots directives', 'sitemap', '301 redirects', '404 поведение', 'structured data без измислени стойности'] },
      { heading: 'Функционалност и сигурност', body: 'Тествайте позитивните и негативните сценарии, а не само happy path.', bullets: ['контактна форма', 'server-side validation', 'error state', 'spam защита', 'липса на secrets в client bundle', 'security headers', 'backup и rollback'] },
      { heading: 'Release gate', body: 'Не публикувайте, ако основен път е счупен или ключова конверсия не може да бъде потвърдена. След release проверете реалния домейн, не само staging.' },
    ],
  },
  {
    title: 'E-commerce CRO checklist: 35 проверки преди повече реклама',
    slug: 'ecommerce-cro-checklist',
    description: 'Какво да проверите в онлайн магазин преди да увеличите рекламния бюджет: product pages, checkout, доверие и измерване.',
    category: 'E-commerce',
    keywords: ['ecommerce CRO', 'WooCommerce', 'checkout', 'conversion'],
    sections: [
      { heading: 'Product page', body: 'Страницата трябва да отговори на основните въпроси преди клиентът да добави продукта.', bullets: ['ясно име и вариант', 'реални снимки', 'наличност', 'цена', 'доставка', 'връщане', 'характеристики', 'ясен Add to cart'] },
      { heading: 'Cart и checkout', body: 'Премахнете ненужните полета и изненадите в последния момент.', bullets: ['guest checkout', 'видима крайна сума', 'реални методи за доставка', 'ясни грешки', 'mobile-friendly inputs'] },
      { heading: 'Доверие', body: 'Използвайте истински политики, контакти, фирмена информация и проверими отзиви. Избягвайте измислен urgency и броячи.' },
      { heading: 'Измерване', body: 'Следете product view, add_to_cart, begin_checkout, purchase и error сценарии. Данните трябва да се свързват с реалните поръчки.' },
    ],
  },
  {
    title: 'Core Web Vitals на бизнес език: LCP, INP и CLS',
    slug: 'core-web-vitals-business',
    description: 'Как да подредите performance работата без да гоните само Lighthouse точки.',
    category: 'Performance',
    keywords: ['Core Web Vitals', 'LCP', 'INP', 'CLS'],
    sections: [
      { heading: 'LCP', body: 'Largest Contentful Paint показва кога основното видимо съдържание се появява. Чести проблеми са тежък hero image, бавен server response и блокиращи ресурси.' },
      { heading: 'INP', body: 'Interaction to Next Paint показва колко бързо интерфейсът реагира. Тежък JavaScript и дълги main-thread задачи могат да направят сайта усещано бавен.' },
      { heading: 'CLS', body: 'Cumulative Layout Shift измерва неочакваното местене на елементи. Запазвайте размери за изображения и не вкарвайте съдържание над вече видимото.' },
      { heading: 'Практичен ред', body: 'Гледайте реални данни, приоритизирайте страниците с бизнес стойност, поправете bottleneck-а и измерете отново.' },
    ],
  },
  {
    title: 'Lead tracking: от клик в сайта до квалифициран контакт в CRM',
    slug: 'lead-tracking-website-crm',
    description: 'Измервателна архитектура за forms, calls, CRM статути и revenue attribution без PII в analytics.',
    category: 'Analytics',
    keywords: ['lead tracking', 'GA4', 'CRM', 'conversion tracking'],
    sections: [
      { heading: 'Фунията', body: 'Минималната фуния може да бъде page view → CTA click → form start → accepted lead → qualified lead → offer → won.' },
      { heading: 'Събития', body: 'Analytics параметрите не трябва да съдържат email, телефон или свободен текст.', bullets: ['service_id', 'page_type', 'cta_location', 'form_name', 'lead_status без PII', 'campaign identifiers'] },
      { heading: 'CRM връзка', body: 'Когато lead-ът бъде квалифициран или спечелен, пазете източника и кампанията, за да оценявате каналите по качество и приход.' },
      { heading: 'QA', body: 'Тествайте duplicate submits, ad blockers, consent сценарии и server-side приемането. Не маркирайте success, ако backend-ът не е потвърдил заявката.' },
    ],
  },
  {
    title: 'API Integration Playbook: retries, idempotency и reconciliation',
    slug: 'api-integration-production-checklist',
    description: 'Production checklist за API интеграции между ERP, e-commerce и вътрешни системи.',
    category: 'ERP/API',
    keywords: ['API integration', 'ERP', 'idempotency', 'retry'],
    sections: [
      { heading: 'Договорът между системите', body: 'Преди код уточнете source of truth, идентификатори, задължителни полета и какво означава успешна операция.' },
      { heading: 'Надеждност', body: 'Планирайте поведението при 429, 5xx, timeout и частичен успех.', bullets: ['bounded retries с backoff', 'idempotency key при write операции', 'error queue', 'timeout policy', 'manual replay процедура'] },
      { heading: 'Reconciliation', body: 'Периодична проверка между системите открива пропуснати или различни записи, особено при цени, наличности, плащания и поръчки.' },
      { heading: 'Observability и сигурност', body: 'Използвайте correlation id, структурирани логове и alert. Secrets стоят само на сървъра и се ротират без промяна на client code.' },
    ],
  },
  {
    title: 'AI content workflow с човешки QA: от research до publish',
    slug: 'ai-content-workflow-human-qa',
    description: 'Практичен workflow за AI съдържание без масово публикуване на слаб или непроверен текст.',
    category: 'AI Marketing',
    keywords: ['AI content', 'content workflow', 'human QA', 'SEO'],
    sections: [
      { heading: 'Research и brief', body: 'Започнете от реалния въпрос на клиента и източниците. Определете цел, аудитория, доказателства и действие след прочита.' },
      { heading: 'Draft', body: 'AI е полезен за структура и варианти, но не трябва да измисля статистики, клиенти, цитати или технически възможности.' },
      { heading: 'Human QA', body: 'Проверете факти, тон, claims, screenshots, линкове и дали материалът действително помага.', bullets: ['fact check', 'source check', 'brand voice', 'internal links', 'CTA', 'metadata'] },
      { heading: 'След публикуване', body: 'Следете impressions, engaged sessions, leads и въпросите, които хората продължават да задават. Обновявайте материала при промяна.' },
    ],
  },
  {
    title: 'AI Search Visibility: полезно за хора, търсачки и AI',
    slug: 'ai-search-visibility',
    description: 'Практична discoverability стратегия: crawlability, ясно авторство, собствен опит и структурирано съдържание.',
    category: 'SEO + AI',
    keywords: ['AI search', 'SEO', 'AI visibility', 'structured data'],
    sections: [
      { heading: 'Техническа достъпност', body: 'Основното съдържание трябва да е на стабилен URL, да не е блокирано от robots/noindex и да има ясни canonical сигнали.' },
      { heading: 'Entity и авторство', body: 'Последователното име, профил, GitHub, case studies и биография помагат да се разбере кой стои зад съдържанието и каква експертиза има.' },
      { heading: 'Собствен опит', body: 'Силните материали съдържат реални решения, screenshots, ограничения, грешки и критерии за приемане. Общ текст без опит е лесно заменим.' },
      { heading: 'Измерване', body: 'Следете Search Console, referral traffic и квалифицирани запитвания. AI споменаване само по себе си не е бизнес резултат.' },
    ],
  },
  {
    title: 'Web Security Checklist: 25 проверки за бизнес сайт',
    slug: 'web-security-checklist',
    description: 'Практичен checklist за достъпи, headers, форми, зависимости, backups, secrets и recovery.',
    category: 'Security',
    keywords: ['web security', 'CSP', 'backups', 'secrets'],
    sections: [
      { heading: 'Достъпи', body: 'Използвайте отделни акаунти, MFA, минимални права и документиран owner за домейна, DNS, хостинга и администраторските профили.' },
      { heading: 'Application security', body: 'Валидацията в браузъра е UX функция, не security boundary.', bullets: ['server-side validation', 'rate limiting', 'spam защита', 'safe error messages', 'dependency updates', 'security headers'] },
      { heading: 'Secrets', body: 'API ключове и credentials трябва да са в server environment или secret manager. При изтичане ключът се ротира; изтриването му от последния commit не е достатъчно.' },
      { heading: 'Backup и recovery', body: 'Backup без тествано възстановяване не е достатъчен. Пазете независимо копие и периодично проверявайте recovery процедурата.' },
    ],
  }
];
