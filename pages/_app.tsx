import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

interface PortfolioPageProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  [key: string]: unknown;
}

function MyApp({ Component, pageProps }: AppProps<PortfolioPageProps>) {
  const router = useRouter();
  const isV2Prototype = router.pathname === '/v2';

  useEffect(() => {
    if (isV2Prototype) return;

    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [isV2Prototype]);

  if (isV2Prototype) {
    return (
      <>
        <Head
          title={`Евгени Георгиев | ${pageProps.title || 'V2 Prototype'}`}
          description={pageProps.description}
          canonical={pageProps.canonical}
          noindex
        />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <Layout>
      <Head
        title={`Евгени Георгиев | ${pageProps.title || 'Дигитален проектен партньор'}`}
        description={pageProps.description}
        canonical={pageProps.canonical}
        noindex={pageProps.noindex}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
