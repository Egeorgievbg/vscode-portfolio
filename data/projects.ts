export interface Project {
  title: string;
  slug: string;
  description: string;
  category: string;
  industry: string;
  status: 'Завършен' | 'В развитие' | 'Собствен проект' | 'Технически proof-of-work';
  businessGoal: string;
  myRole: string[];
  technologies: string[];
  results: string[];
  logo: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'ThinkMove.bg',
    slug: 'thinkmove-bg',
    category: 'Образователен сайт',
    industry: 'Шах академия / онлайн обучение',
    status: 'Завършен',
    description:
      'Уеб сайт за шах академия, насочена към деца, начинаещи и родители, които търсят структурирано обучение по шах.',
    businessGoal:
      'Да представи академията професионално, да изгради доверие и да улесни записването за първи урок.',
    myRole: ['структура на сайта', 'UX логика', 'съдържателно позициониране', 'SEO основа'],
    technologies: ['Web', 'UX', 'SEO', 'Content'],
    results: ['ясно представяне', 'по-добър клиентски път', 'готовност за реклама'],
    logo: '/logos/vsc.svg',
    link: 'https://thinkmove.bg',
    featured: true,
  },
  {
    title: 'Summertime.bg',
    slug: 'summertime-bg',
    category: 'Туристически сайт',
    industry: 'Туризъм / директни резервации',
    status: 'В развитие',
    description:
      'Сайт за ваканционни обекти с фокус върху директни резервации, доверие, реални снимки и ясни CTA действия.',
    businessGoal:
      'Да увеличи директните запитвания и да намали зависимостта от външни платформи.',
    myRole: ['UX/CRO оптимизация', 'Google Ads подготовка', 'SEO структура', 'описания и CTA'],
    technologies: ['Web', 'CRO', 'SEO', 'Google Ads'],
    results: ['по-ясно представяне', 'по-добър reservation funnel', 'рекламна готовност'],
    logo: '/logos/vsc.svg',
    link: 'https://summertime.bg',
    featured: true,
  },
  {
    title: 'GPTS 360',
    slug: 'gpts-360',
    category: 'Landing page',
    industry: 'Събития / 360° видео',
    status: 'В развитие',
    description:
      'Landing page за 360° видео платформа и премиум събитийна услуга за партита и корпоративни събития.',
    businessGoal:
      'Да превърне физическата услуга в ясно онлайн предложение, което може да се рекламира и продава.',
    myRole: ['оферта', 'landing структура', 'визуално позициониране', 'CTA логика'],
    technologies: ['Landing Page', 'Marketing', 'Content'],
    results: ['по-ясна услуга', 'по-силен WOW ефект', 'подготовка за кампании'],
    logo: '/logos/vsc.svg',
    link: 'https://360.gptsprintshop.com',
    featured: true,
  },
  {
    title: 'GPTSBOXES.com',
    slug: 'gptsboxes',
    category: 'E-commerce',
    industry: 'Луксозни кутии / B2B продукти',
    status: 'Собствен проект',
    description:
      'Продуктово ориентиран проект за луксозни кутии, персонализирани артикули и бъдеща B2B търговска структура.',
    businessGoal:
      'Да изгради онлайн канал за продуктово представяне, запитвания и бъдещи продажби.',
    myRole: ['продуктова структура', 'визуално представяне', 'съдържание', 'бранд позициониране'],
    technologies: ['E-commerce', 'Product Content', 'Branding', 'SEO'],
    results: ['основа за собствен продукт', 'ясна продуктова структура', 'възможност за B2B кампании'],
    logo: '/logos/vsc.svg',
    link: 'https://gptsboxes.com',
    featured: true,
  },
  {
    title: 'GPTS Print Shop',
    slug: 'gpts-print-shop',
    category: 'Продуктов сайт',
    industry: 'Печат / персонализация',
    status: 'Собствен проект',
    description:
      'Онлайн представяне на печатни услуги, персонализиран печат, флаери, брошури, менюта и продуктови категории.',
    businessGoal:
      'Да създаде продаващо продуктово представяне за печатни услуги и персонализирани продукти.',
    myRole: ['категории', 'описания', 'визуални решения', 'маркетинг послания'],
    technologies: ['Web', 'E-commerce', 'Content', 'AI visuals'],
    results: ['по-ясно портфолио', 'по-добра рекламна готовност', 'по-силен бранд'],
    logo: '/logos/vsc.svg',
    link: 'https://gptsprintshop.com',
  },
  {
    title: 'Автошкола Ватони Плевен',
    slug: 'avtoshkola-vatoni-pleven',
    category: 'Локален бизнес сайт',
    industry: 'Автошкола / обучение',
    status: 'В развитие',
    description:
      'Сайт за автошкола с фокус върху доверие, записвания, мобилна използваемост и локално SEO за Плевен.',
    businessGoal:
      'Да генерира повече запитвания от бъдещи курсисти и да направи записването по-ясно.',
    myRole: ['локално SEO', 'структура на услугите', 'мобилен UX', 'контактна логика'],
    technologies: ['Web', 'Local SEO', 'Lead Generation', 'Content'],
    results: ['по-ясно присъствие', 'бърз контакт', 'подготовка за Google Ads'],
    logo: '/logos/vsc.svg',
    featured: true,
  },
  {
    title: 'stg.ezd.bf',
    slug: 'stg-ezd-bf',
    category: 'Клиентски уеб проект',
    industry: 'Web development',
    status: 'Завършен',
    description:
      'Завършен клиентски уеб проект на стойност 2 000 €, включващ техническо изпълнение, координация и финално предаване.',
    businessGoal:
      'Да бъде доставен работещ клиентски проект според задание, срокове и реален бюджет.',
    myRole: ['техническо изпълнение', 'координация', 'финализиране', 'предаване'],
    technologies: ['Web Development', 'Project Delivery'],
    results: ['реализиран платен проект', 'професионално предаване', 'доказан delivery'],
    logo: '/logos/vsc.svg',
    link: 'https://stg.ezd.bf',
  },
  {
    title: 'ERP Pricing Bridge',
    slug: 'erp-pricing-bridge',
    category: 'Automation / Integration',
    industry: 'ERP / продуктови данни',
    status: 'Технически proof-of-work',
    description:
      'Проект за pricing логика, продуктови данни и интеграционен подход между бизнес системи.',
    businessGoal:
      'Да демонстрира възможност за автоматизация на ценови и продуктови процеси.',
    myRole: ['Python/API логика', 'бизнес процес', 'интеграционна архитектура'],
    technologies: ['Python', 'ERP', 'API', 'Automation'],
    results: ['техническо доказателство', 'B2B приложимост', 'backend мислене'],
    logo: '/logos/vsc.svg',
    github: 'https://github.com/Egeorgievbg/ERP-Pricing-Bridge',
  },
  {
    title: 'Internal Printer Server',
    slug: 'internal-printer-server',
    category: 'Internal Tool',
    industry: 'Принтери / етикети / операции',
    status: 'Технически proof-of-work',
    description:
      'Вътрешна система за управление на печатни процеси, етикети и принтерна инфраструктура.',
    businessGoal:
      'Да намали ръчната работа и грешките при принтиране на етикети и оперативни документи.',
    myRole: ['архитектура', 'оперативна логика', 'интеграция с хардуер'],
    technologies: ['Python', 'Printers', 'Labels', 'Automation'],
    results: ['по-бърз процес', 'по-малко ръчни действия', 'техническа дълбочина'],
    logo: '/logos/vsc.svg',
    github: 'https://github.com/Egeorgievbg/INTERNAL-PRINTER-SERVER',
  },
  {
    title: 'E-Commerce Android',
    slug: 'e-commerce-android',
    category: 'Mobile / E-commerce',
    industry: 'Онлайн търговия',
    status: 'Технически proof-of-work',
    description:
      'Android e-commerce проект, демонстриращ мобилна логика, продуктово представяне и потребителски поток.',
    businessGoal:
      'Да покаже разбиране на мобилен e-commerce процес и продуктова навигация.',
    myRole: ['мобилна структура', 'e-commerce логика', 'UX flow'],
    technologies: ['Android', 'E-commerce', 'Mobile UX'],
    results: ['мобилен proof-of-work', 'продуктов flow', 'разширяване отвъд web'],
    logo: '/logos/vsc.svg',
    github: 'https://github.com/Egeorgievbg/E-Commerce-Android',
  },
];
