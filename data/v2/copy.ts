export type V2Language = 'bg' | 'en';

export type V2Copy = {
  nav: {
    architecture: string;
    systems: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    lead: string;
    primary: string;
    secondary: string;
    availability: string;
  };
  manifesto: {
    label: string;
    lead: string;
    ghost: string;
    body: string;
  };
  architecture: {
    label: string;
    title: string;
    steps: Array<{
      title: string;
      body: string;
      phase: string;
    }>;
  };
  projects: {
    label: string;
    title: string;
  };
  cases: {
    label: string;
    title: string;
    intro: string;
    challenge: string;
    system: string;
    outcome: string;
    live: string;
    source: string;
  };
  cta: {
    label: string;
    title: string;
    body: string;
    button: string;
  };
};

export const v2Copy: Record<V2Language, V2Copy> = {
  bg: {
    nav: {
      architecture: 'Архитектура',
      systems: 'Системи',
      contact: 'Запитване',
    },
    hero: {
      eyebrow: 'ДИГИТАЛНИ СИСТЕМИ / АВТОМАТИЗАЦИЯ / ИНФРАСТРУКТУРА',
      line1: 'СИСТЕМИ,',
      line2: 'КОИТО ДВИЖАТ',
      line3: 'БИЗНЕСА.',
      lead:
        'Проектирам и изграждам сайтове, автоматизации и интегрирани системи, които свързват web, ERP, API, AI и реалните оперативни процеси на бизнеса.',
      primary: 'РАЗГЛЕДАЙ СИСТЕМИТЕ',
      secondary: 'ВИЖ АРХИТЕКТУРАТА',
      availability: 'Приемам избрани проекти',
    },
    manifesto: {
      label: '02 / СИСТЕМНО МИСЛЕНЕ',
      lead: 'ПОВЕЧЕТО БИЗНЕСИ НЯМАТ ПРОБЛЕМ С ЛИПСАТА НА СОФТУЕР.',
      ghost: 'ИМАТ ТВЪРДЕ МНОГО НЕСВЪРЗАНИ ИНСТРУМЕНТИ.',
      body:
        'Сайтът, ERP, складът, рекламата и вътрешните операции не трябва да живеят като отделни острови. Архитектурата започва от бизнес процеса, а кодът идва след това.',
    },
    architecture: {
      label: '03 / СИСТЕМНА АРХИТЕКТУРА',
      title: 'ОТ ОТДЕЛНИ ИНСТРУМЕНТИ ДО ЕДНА РАБОТЕЩА СИСТЕМА.',
      steps: [
        {
          title: 'СВЪРЗВАМЕ FRONT LAYER-А.',
          body:
            'Сайтът, e-commerce каналите и клиентските точки влизат в една обща оперативна логика.',
          phase: 'FRONT LAYER',
        },
        {
          title: 'ПРЕМЕСТВАМЕ БИЗНЕС ЛОГИКАТА.',
          body:
            'ERP, цени, продуктови данни и вътрешни API-та стават ясни, контролируеми компоненти.',
          phase: 'BUSINESS LOGIC',
        },
        {
          title: 'АВТОМАТИЗИРАМЕ ОПЕРАЦИИТЕ.',
          body:
            'Python и AI премахват повтаряемата работа, без да губим контрол върху реалните действия и данни.',
          phase: 'AUTOMATION',
        },
      ],
    },
    projects: {
      label: '05 / ИЗБРАНИ СИСТЕМИ',
      title: 'ИЗГРАДЕНИ ЗА РЕАЛНИ ОПЕРАЦИИ.',
    },
    cases: {
      label: '06 / CASE STUDIES',
      title: 'АРХИТЕКТУРА С РЕАЛЕН ОПЕРАТИВЕН ЕФЕКТ.',
      intro:
        'Не показвам технологии заради самите технологии. Всеки проект е организиран около конкретен operational problem, ясни contracts и проверими граници.',
      challenge: 'ПРОБЛЕМ',
      system: 'СИСТЕМА',
      outcome: 'РЕЗУЛТАТ',
      live: 'LIVE СИСТЕМА',
      source: 'SOURCE',
    },
    cta: {
      label: '07 / СЛЕДВАЩА СТЪПКА',
      title: 'ДА ИЗГРАДИМ СИСТЕМАТА.',
      body:
        'Ако имаш процес, сайт или комбинация от инструменти, които не работят като една система, започваме от архитектурата и бизнес логиката.',
      button: 'ОБСЪДИ ПРОЕКТ',
    },
  },
  en: {
    nav: {
      architecture: 'Architecture',
      systems: 'Systems',
      contact: 'Start a project',
    },
    hero: {
      eyebrow: 'DIGITAL SYSTEMS / AUTOMATION / INFRASTRUCTURE',
      line1: 'SYSTEMS',
      line2: 'THAT MOVE',
      line3: 'BUSINESS.',
      lead:
        'I design and build websites, automation and integrated systems that connect web, ERP, APIs, AI and the real operational processes behind the business.',
      primary: 'EXPLORE SYSTEMS',
      secondary: 'VIEW ARCHITECTURE',
      availability: 'Available for selected projects',
    },
    manifesto: {
      label: '02 / SYSTEM THINKING',
      lead: 'MOST BUSINESSES DO NOT HAVE A SOFTWARE SHORTAGE.',
      ghost: 'THEY HAVE TOO MANY DISCONNECTED TOOLS.',
      body:
        'The website, ERP, warehouse, marketing and internal operations should not live as separate islands. Architecture starts with the business process; code comes after.',
    },
    architecture: {
      label: '03 / SYSTEM ARCHITECTURE',
      title: 'FROM DISCONNECTED TOOLS TO ONE OPERATING SYSTEM.',
      steps: [
        {
          title: 'CONNECT THE FRONT LAYER.',
          body:
            'Websites, commerce and customer touchpoints feed one shared operational layer.',
          phase: 'FRONT LAYER',
        },
        {
          title: 'MOVE THE BUSINESS LOGIC.',
          body:
            'ERP, pricing, product data and internal APIs become explicit, controllable system components.',
          phase: 'BUSINESS LOGIC',
        },
        {
          title: 'AUTOMATE THE OPERATIONS.',
          body:
            'Python and AI remove repetitive work while keeping real actions and data behind deterministic boundaries.',
          phase: 'AUTOMATION',
        },
      ],
    },
    projects: {
      label: '05 / SELECTED SYSTEMS',
      title: 'BUILT FOR REAL OPERATIONS.',
    },
    cases: {
      label: '06 / CASE STUDIES',
      title: 'ARCHITECTURE WITH REAL OPERATIONAL CONSEQUENCES.',
      intro:
        'Technology is not the product. Each system is organized around a concrete operational problem, explicit contracts and verifiable boundaries.',
      challenge: 'CHALLENGE',
      system: 'SYSTEM',
      outcome: 'OUTCOME',
      live: 'LIVE SYSTEM',
      source: 'SOURCE',
    },
    cta: {
      label: '07 / NEXT',
      title: "LET'S BUILD THE SYSTEM.",
      body:
        'If your process, website or tool stack does not operate as one system, we start with architecture and business logic.',
      button: 'START A PROJECT',
    },
  },
};
