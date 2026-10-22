import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';
import SiteFooter from '@/components/SiteFooter';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) main.scrollTop = 0;
  }, [router.pathname]);

  return (
    <>
      <a className={styles.skipLink} href="#main-editor">Към основното съдържание</a>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div className={styles.editor}>
          <Tabsbar />
          <main id="main-editor" className={styles.content} tabIndex={-1}>
            {children}
            <SiteFooter />
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
