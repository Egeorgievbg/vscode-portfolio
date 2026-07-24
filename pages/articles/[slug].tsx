import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { articles, PortfolioArticle } from '@/data/articles';
import styles from '@/styles/AboutPage.module.css';

const ArticlePage = ({ article }: { article: PortfolioArticle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/articles">← Всички статии</Link>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.subtitle}>{article.category}</div>
        <p className={styles.paragraph}>{article.description}</p>

        <div className={styles.aboutContent}>
          {article.sections.map((section) => (
            <section className={styles.section} key={section.heading}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>
              <p className={styles.paragraph}>{section.body}</p>
              {section.bullets && (
                <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              )}
            </section>
          ))}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Искаш да приложим това за твоя бизнес?</h2>
            <p className={styles.paragraph}>Мога да помогна със сайт, SEO структура, AI агент, автоматизация или дигитална поддръжка.</p>
            <Link href="/contact">Изпрати запитване →</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: articles.map((article) => ({ params: { slug: article.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find((item) => item.slug === params?.slug);
  if (!article) return { notFound: true };
  return { props: { title: article.title, article } };
};

export default ArticlePage;
