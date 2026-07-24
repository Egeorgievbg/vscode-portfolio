import Head from 'next/head';

interface CustomHeadProps {
  title: string;
  description?: string;
  canonical?: string;
}

const CustomHead = ({
  title,
  description = 'Евгени Георгиев изгражда бизнес сайтове, e-commerce структури, Python автоматизации, ERP/API интеграции и дигитални процеси за малък и среден бизнес.',
  canonical = 'https://evgeni-georgiev.com',
}: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Евгени Георгиев, изработка на сайт, Python автоматизация, ERP интеграции, API интеграции, дигитален проектен партньор, SEO, CRO, e-commerce"
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Евгени Георгиев" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;
