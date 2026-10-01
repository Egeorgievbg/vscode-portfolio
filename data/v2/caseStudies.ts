export type CaseStudyMetric = {
  value: string;
  label: string;
  note?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
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
    summary:
      'Python middleware that isolates slow legacy ERP pricing behind a resilient, configurable HTTP boundary for modern cart flows.',
    challenge:
      'Legacy pricing calls were slow, ERP-specific and risky to place directly in a customer-facing cart request.',
    solution:
      'A Flask pricing engine with ThreadPoolExecutor concurrency, configurable field mapping, throttling, timeouts, structured errors and Docker-ready deployment.',
    outcome:
      'The pricing layer can be reused across ERP schemas without rewriting the concurrency engine, while cart-facing code receives a predictable JSON contract.',
    metrics: [
      {
        value: '90%',
        label: 'repo-reported reduction in pricing calculation time',
        note: 'Repository description',
      },
      {
        value: '8',
        label: 'default concurrent workers',
      },
      {
        value: '5s',
        label: 'default ERP request timeout',
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
    summary:
      'Production-oriented print service that unifies synchronous ZPL label printing and asynchronous Windows PDF printing behind one authenticated HTTP API.',
    challenge:
      'Operational printing mixed raw TCP labels, Windows queues, Ghostscript, driver context and service-account constraints.',
    solution:
      'A Flask API with explicit printer health, request correlation, a bounded async job queue, a single Ghostscript execution boundary and Windows service deployment via NSSM.',
    outcome:
      'The print path becomes observable and diagnosable instead of being hidden inside workstation-specific scripts.',
    metrics: [
      {
        value: '200',
        label: 'maximum pending PDF jobs',
      },
      {
        value: '4',
        label: 'configured job workers',
      },
      {
        value: '120s',
        label: 'document print timeout',
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
    summary:
      'Mobile-first B2B field-sales operating system for pharmacy territory work, with protected CRM contracts, product intelligence and a confirmation-gated AI layer.',
    challenge:
      'Field activity requires route planning, pharmacy history, follow-up tasks, product data and AI assistance without corrupting real CRM facts.',
    solution:
      'React/TypeScript field UX with stable CRM persistence, isolated IndexedDB product cache, progressive resumable sync and a server-side AI endpoint that proposes actions but cannot mutate CRM directly.',
    outcome:
      'The architecture separates facts, product catalog state and AI suggestions while preserving rollback and data-integrity boundaries.',
    metrics: [
      {
        value: '747',
        label: 'pharmacy territory records in repository scope',
        note: 'Repository description',
      },
      {
        value: '0',
        label: 'direct AI CRM writes in current release contract',
      },
      {
        value: '3',
        label: 'separated state layers: CRM / products / AI',
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
    summary:
      'Local-first packaging configurator prototype with a Three.js product viewer, structured finish/industry asset library and multi-format export workflow.',
    challenge:
      'Packaging needs one interface for structure choice, visual finish exploration, artwork context and production-oriented exports without relying on a CDN.',
    solution:
      'A self-contained local frontend with Three.js 0.185.1, responsive UI, curated asset library and verified export paths for GLB, JSON, PDF, PNG and SVG.',
    outcome:
      'The prototype demonstrates a reusable product-configuration workflow and a repeatable asset pipeline that can evolve into a production commerce backend.',
    metrics: [
      {
        value: '100',
        label: 'curated source assets',
      },
      {
        value: '500',
        label: 'generated image variants',
      },
      {
        value: '6',
        label: 'verified export actions',
      },
    ],
    stack: ['Three.js', 'JavaScript', 'GLB', 'SVG', 'PDF', 'Asset pipeline'],
    architecture: ['STRUCTURE', 'MATERIAL', 'ARTWORK', '3D', 'EXPORT', 'QUOTE'],
    status: 'PROTOTYPE',
    liveUrl: 'https://gptsboxes.com',
  },
];
