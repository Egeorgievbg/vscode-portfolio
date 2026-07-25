import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <div className={styles.subtitle}>Страницата не е намерена</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Адресът може да е променен, съдържанието да е преместено или
              връзката да е въведена неправилно.
            </p>
            <p className={styles.paragraph}>
              <Link href="/">Към началната страница →</Link>
            </p>
            <p className={styles.paragraph}>
              <Link href="/projects">Виж проектите →</Link>
            </p>
            <p className={styles.paragraph}>
              <Link href="/contact">Изпрати запитване →</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: '404 — Страницата не е намерена',
      noindex: true,
    },
  };
}

export default NotFoundPage;
