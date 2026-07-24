export interface Service {
  title: string;
  slug: string;
  price: string;
  summary: string;
  forWho: string;
  includes: string[];
  outcomes: string[];
}

export const services: Service[] = [
  {
    title: 'Business Website',
    slug: 'business-website',
    price: 'от 1 200 €',
    summary:
      'Професионален сайт за малък и среден бизнес с ясна структура, мобилна версия, SEO основа и подготовка за реклама.',
    forWho:
      'Автошколи, къщи за гости, школи, локални услуги, сервизи, магазини и професионални услуги.',
    includes: [
      '5–10 ключови страници',
      'UX структура и клиентски път',
      'Текстове и CTA послания',
      'Мобилна оптимизация',
      'SEO основа',
      'Контактна форма',
      'Подготовка за реклама',
    ],
    outcomes: ['по-ясно онлайн представяне', 'повече доверие', 'повече запитвания'],
  },
  {
    title: 'Growth Website',
    slug: 'growth-website',
    price: 'от 2 500 €',
    summary:
      'Сайт или редизайн с фокус върху конверсии, tracking, landing секции и рекламна готовност.',
    forWho:
      'Бизнеси с трафик или реклама, които не получават достатъчно заявки от сайта си.',
    includes: [
      'анализ на текущия сайт',
      'CRO структура',
      'analytics и conversion tracking',
      'landing секции',
      'lead capture логика',
      'FAQ и доверителни блокове',
    ],
    outcomes: ['по-висока конверсия', 'по-добър sales funnel', 'ясно измерване'],
  },
  {
    title: 'Automation Sprint',
    slug: 'automation-sprint',
    price: 'от 800 €',
    summary:
      'Автоматизация на ръчни процеси чрез Python, API, CSV/Excel workflows и вътрешни инструменти.',
    forWho:
      'Фирми с продуктови данни, цени, ERP/PIM процеси, принтери, етикети и повтаряеми операции.',
    includes: [
      'анализ на процеса',
      'технически план',
      'Python/API автоматизация',
      'CSV/Excel обработка',
      'документация',
      'тестове',
    ],
    outcomes: ['по-малко ръчна работа', 'по-малко грешки', 'по-бързи процеси'],
  },
  {
    title: 'Monthly Digital Partner',
    slug: 'monthly-digital-partner',
    price: 'от 400 € / месец',
    summary:
      'Месечна дигитална поддръжка за сайт, съдържание, технически задачи, SEO, кампании и координация.',
    forWho:
      'Бизнеси без вътрешен IT/marketing екип, които искат постоянна поддръжка и развитие.',
    includes: [
      'промени по сайта',
      'съдържание и SEO подобрения',
      'техническа координация',
      'малки автоматизации',
      'campaign support',
      'месечен отчет',
    ],
    outcomes: ['постоянно развитие', 'по-малко хаос', 'ясни приоритети'],
  },
  {
    title: 'AI Marketing Launch',
    slug: 'ai-marketing-launch',
    price: 'от 250 €',
    summary:
      'Пакет за рекламни послания, landing текстове, продуктови описания и AI визуални концепции.',
    forWho: 'Малки бизнеси, които искат бързо да стартират оферта, продукт или кампания.',
    includes: [
      'рекламни заглавия',
      'landing секции',
      'Google Ads идеи',
      'Meta Ads послания',
      'AI prompts за визии',
      'продуктови описания',
    ],
    outcomes: ['по-бърз launch', 'по-ясна оферта', 'по-професионално съдържание'],
  },
];
