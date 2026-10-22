import Head from 'next/head';
import { useRouter } from 'next/router';

type JsonLd = Record<string, unknown>;

interface CustomHeadProps {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: JsonLd | JsonLd[];
}

const SITE_URL = 'https://evgeni-georgiev.com';

const CustomHead = ({
  title,
  description = 'Евгени Георгиев изгражда бизнес сайтове, e-commerce структури, Python автоматизации, ERP/API интеграции и дигитални процеси за малък и среден бизнес.',
  canonical,
  noindex = false,
  schema,
}: CustomHeadProps) => {
  const router = useRouter();
  const path = router.asPath.split('?')[0].split('#')[0] || '/';
  const canonicalUrl = canonical || `${SITE_URL}${path}`;

  const baseGraph: JsonLd[] = [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Евгени Георгиев',
      url: SITE_URL,
      email: 'mailto:dev@evgeni-georgiev.com',
      sameAs: ['https://github.com/Egeorgievbg'],
      jobTitle: 'Web Developer, Automation Specialist and Digital Project Partner',
      description,
      knowsAbout: [
        'Web Development',
        'Python Automation',
        'ERP Integrations',
        'API Integrations',
        'E-commerce',
        'Technical SEO',
        'CRO',
        'Digital Project Management',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Евгени Георгиев — Digital Project Partner',
      inLanguage: 'bg-BG',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ];

  const extraSchema = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [...baseGraph, ...extraSchema],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex,follow'
            : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
        }
      />
      <meta name="theme-color" content="#05070b" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="bg-BG" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Евгени Георгиев" />
      <meta property="og:locale" content="bg_BG" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {!noindex && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
};

export default CustomHead;
