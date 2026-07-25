import { useEffect } from 'react';
import type { AppProps } from 'next/app';

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
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

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
