import type { V2Language } from '@/data/v2/copy';

export type CaseStudyMetric = {
  value: string;
  label: Record<V2Language, string>;
  note?: Record<V2Language, string>;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  copy: Record<
    V2Language,
    {
      summary: string;
      challenge: string;
      solution: string;
      outcome: string;
    }
  >;
  metrics: CaseStudyMetric[];
  stack: string[];
  architecture: string[];
  status: 'PRODUCTION' | 'RELEASE CANDIDATE' | 'PROTOTYPE' | 'PROOF OF WORK';
  liveUrl?: string;
  repositoryUrl?: string;
};

export const v2CaseStudies: CaseStudy[] = [
  {
    slug: 'erp-pricing-bridge',
    index: '01',
    title: 'ERP PRICING BRIDGE',
    eyebrow: 'LEGACY ERP / REAL-TIME COMMERCE',
    copy: {
      bg: {
        summary:
          'Python middleware, който изолира бавната legacy ERP pricing логика зад устойчив и конфигурируем HTTP слой за modern cart flows.',
        challenge:
          'ERP ценовите заявки са бавни, специфични за конкретната система и рискови за директно изпълнение в клиентския cart request.',
        solution:
          'Flask pricing engine с ThreadPoolExecutor concurrency, конфигурируем field mapping, throttling, timeouts, структурирани грешки и Docker-ready deployment.',
        outcome:
          'Pricing layer-ът може да се използва с различни ERP schemas, без да се пренаписва concurrency engine-ът, а storefront кодът получава предвидим JSON contract.',
      },
      en: {
        summary:
          'Python middleware that isolates slow legacy ERP pricing behind a resilient, configurable HTTP boundary for modern cart flows.',
        challenge:
          'Legacy pricing calls were slow, ERP-specific and risky to place directly in a customer-facing cart request.',
        solution:
          'A Flask pricing engine with ThreadPoolExecutor concurrency, configurable field mapping, throttling, timeouts, structured errors and Docker-ready deployment.',
        outcome:
          'The pricing layer can be reused across ERP schemas without rewriting the concurrency engine, while cart-facing code receives a predictable JSON contract.',
      },
    },
    metrics: [
      {
        value: '90%',
        label: {
          bg: 'repo-reported намаление на времето за изчисляване на цени',
          en: 'repo-reported reduction in pricing calculation time',
        },
        note: {
          bg: 'Описание на repository-то',
          en: 'Repository description',
        },
      },
      {
        value: '8',
        label: {
          bg: 'default concurrent workers',
          en: 'default concurrent workers',
        },
      },
      {
        value: '5s',
        label: {
          bg: 'default ERP request timeout',
          en: 'default ERP request timeout',
        },
      },
    ],
    stack: ['Python', 'Flask', 'ThreadPoolExecutor', 'REST', 'Docker', 'Django integration'],
    architecture: ['CART', 'BRIDGE', 'MAPPER', 'ERP', 'RESPONSE'],
    status: 'PROOF OF WORK',
    repositoryUrl: 'https://github.com/Egeorgievbg/ERP-Pricing-Bridge',
  },
  {
    slug: 'gstroy-print-server',
    index: '02',
    title: 'INDUSTRIAL PRINT SERVER',
    eyebrow: 'WINDOWS / ZPL / PDF / OPERATIONS',
    copy: {
      bg: {
        summary:
          'Production-oriented print service, който обединява synchronous ZPL label printing и asynchronous Windows PDF printing зад едно authenticated HTTP API.',
        challenge:
          'Оперативният печат смесва raw TCP labels, Windows queues, Ghostscript, driver context и service-account ограничения.',
        solution:
          'Flask API с printer health, request correlation, bounded async job queue, единна Ghostscript execution граница и Windows service deployment чрез NSSM.',
        outcome:
          'Print path-ът става наблюдаем и диагностируем, вместо да остава скрит в workstation-specific scripts.',
      },
      en: {
        summary:
          'Production-oriented print service that unifies synchronous ZPL label printing and asynchronous Windows PDF printing behind one authenticated HTTP API.',
        challenge:
          'Operational printing mixed raw TCP labels, Windows queues, Ghostscript, driver context and service-account constraints.',
        solution:
          'A Flask API with explicit printer health, request correlation, a bounded async job queue, a single Ghostscript execution boundary and Windows service deployment via NSSM.',
        outcome:
          'The print path becomes observable and diagnosable instead of being hidden inside workstation-specific scripts.',
      },
    },
    metrics: [
      {
        value: '200',
        label: {
          bg: 'максимален брой pending PDF jobs',
          en: 'maximum pending PDF jobs',
        },
      },
      {
        value: '4',
        label: {
          bg: 'configured job workers',
          en: 'configured job workers',
        },
      },
      {
        value: '120s',
        label: {
          bg: 'document print timeout',
          en: 'document print timeout',
        },
      },
    ],
    stack: ['Python', 'Flask', 'ZPL', 'TCP 9100', 'Ghostscript', 'Windows Service'],
    architecture: ['CLIENT', 'HTTP API', 'QUEUE', 'BACKEND', 'GS', 'PRINTER'],
    status: 'PRODUCTION',
  },
  {
    slug: 'revita-sales-os',
    index: '03',
    title: 'REVITA SALES OS',
    eyebrow: 'FIELD SALES / CRM / AI / DATA',
    copy: {
      bg: {
        summary:
          'Mobile-first B2B field-sales operating system за аптечна територия, със защитени CRM contracts, product intelligence и AI слой с confirmation gate.',
        challenge:
          'Field workflow-ът изисква маршрути, история на аптеките, follow-up задачи, продуктови данни и AI помощ, без да се компрометират реалните CRM факти.',
        solution:
          'React/TypeScript field UX със стабилен CRM persistence contract, отделен IndexedDB product cache, progressive resumable sync и server-side AI endpoint, който предлага действия, но не пише директно в CRM.',
        outcome:
          'Архитектурата разделя facts, product catalog state и AI suggestions, като запазва rollback и data-integrity границите.',
      },
      en: {
        summary:
          'Mobile-first B2B field-sales operating system for pharmacy territory work, with protected CRM contracts, product intelligence and a confirmation-gated AI layer.',
        challenge:
          'Field activity requires route planning, pharmacy history, follow-up tasks, product data and AI assistance without corrupting real CRM facts.',
        solution:
          'React/TypeScript field UX with stable CRM persistence, isolated IndexedDB product cache, progressive resumable sync and a server-side AI endpoint that proposes actions but cannot mutate CRM directly.',
        outcome:
          'The architecture separates facts, product catalog state and AI suggestions while preserving rollback and data-integrity boundaries.',
      },
    },
    metrics: [
      {
        value: '747',
        label: {
          bg: 'аптечни обекта в repository scope',
          en: 'pharmacy territory records in repository scope',
        },
        note: {
          bg: 'Описание на repository-то',
          en: 'Repository description',
        },
      },
      {
        value: '0',
        label: {
          bg: 'direct AI CRM writes в текущия release contract',
          en: 'direct AI CRM writes in current release contract',
        },
      },
      {
        value: '3',
        label: {
          bg: 'отделени state слоя: CRM / products / AI',
          en: 'separated state layers: CRM / products / AI',
        },
      },
    ],
    stack: ['React 19', 'TypeScript', 'TanStack Router', 'Zustand', 'IndexedDB', 'OpenAI'],
    architecture: ['TERRITORY', 'CRM', 'PRODUCTS', 'SYNC', 'AI', 'CONFIRM'],
    status: 'RELEASE CANDIDATE',
    liveUrl: 'https://sladurana.vercel.app',
  },
  {
    slug: 'gptsboxes',
    index: '04',
    title: 'GPTSBOXES 3D CONFIGURATOR',
    eyebrow: 'THREE.JS / PACKAGING / ARTWORK',
    copy: {
      bg: {
        summary:
          'Local-first packaging configurator prototype с Three.js product viewer, структурирана finish/industry asset библиотека и multi-format export workflow.',
        challenge:
          'Packaging workflow-ът има нужда от един интерфейс за structure choice, visual finishes, artwork context и production-oriented exports без CDN dependency.',
        solution:
          'Self-contained local frontend с Three.js 0.185.1, responsive UI, curated asset library и verified export paths за GLB, JSON, PDF, PNG и SVG.',
        outcome:
          'Prototype-ът демонстрира reusable product-configuration workflow и repeatable asset pipeline, които могат да се развият към production commerce backend.',
      },
      en: {
        summary:
          'Local-first packaging configurator prototype with a Three.js product viewer, structured finish/industry asset library and multi-format export workflow.',
        challenge:
          'Packaging needs one interface for structure choice, visual finish exploration, artwork context and production-oriented exports without relying on a CDN.',
        solution:
          'A self-contained local frontend with Three.js 0.185.1, responsive UI, curated asset library and verified export paths for GLB, JSON, PDF, PNG and SVG.',
        outcome:
          'The prototype demonstrates a reusable product-configuration workflow and a repeatable asset pipeline that can evolve into a production commerce backend.',
      },
    },
    metrics: [
      {
        value: '100',
        label: {
          bg: 'curated source assets',
          en: 'curated source assets',
        },
      },
      {
        value: '500',
        label: {
          bg: 'генерирани image variants',
          en: 'generated image variants',
        },
      },
      {
        value: '6',
        label: {
          bg: 'verified export actions',
          en: 'verified export actions',
        },
      },
    ],
    stack: ['Three.js', 'JavaScript', 'GLB', 'SVG', 'PDF', 'Asset pipeline'],
    architecture: ['STRUCTURE', 'MATERIAL', 'ARTWORK', '3D', 'EXPORT', 'QUOTE'],
    status: 'PROTOTYPE',
    liveUrl: 'https://gptsboxes.com',
  },
];
