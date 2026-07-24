import Head from 'next/head';
import { useRouter } from 'next/router';

interface CustomHeadProps {
  title: string;
  description?: string;
  canonical?: string;
}

const CustomHead = ({
  title,
  description = 'Евгени Георгиев изгражда бизнес сайтове, e-commerce структури, Python автоматизации, ERP/API интеграции и дигитални процеси за малък и среден бизнес.',
  canonical,
}: CustomHeadProps) => {
  const router = useRouter();
  const canonicalUrl = canonical || `https://evgeni-georgiev.com${router.asPath.split('?')[0]}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'ProfessionalService'],
    name: 'Евгени Георгиев',
    url: 'https://evgeni-georgiev.com',
    email: 'mailto:dev@evgeni-georgiev.com',
    sameAs: ['https://github.com/Egeorgievbg'],
    jobTitle: 'Web Developer, Python Automation Specialist and Digital Project Partner',
    description,
    areaServed: 'Bulgaria',
    knowsAbout: [
      'Web Development',
      'Python Automation',
      'ERP Integrations',
      'API Integrations',
      'E-commerce',
      'SEO',
      'CRO',
      'Digital Project Management',
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Евгени Георгиев, изработка на сайт, Python автоматизация, ERP интеграции, API интеграции, дигитален проектен партньор, SEO, CRO, e-commerce"
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Евгени Георгиев" />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default CustomHead;
