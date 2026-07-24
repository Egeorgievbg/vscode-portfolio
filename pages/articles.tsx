import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from '@/styles/ArticlesPage.module.css';

const ArticlesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Блог за сайтове, AI и автоматизации</h1>
      <p className={styles.pageSubtitle}>
        Практически статии за малък и среден бизнес, базирани на реални проекти,
        технически опит и конкретни бизнес задачи.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <article key={article.slug} style={{ padding: 22, border: '1px solid var(--border-color)', borderRadius: 12 }}>
            <p>{article.category}</p>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.keywords.map((keyword) => `#${keyword}`).join(' ')}</p>
            <Link href={`/articles/${article.slug}`}>Прочети статията →</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { title: 'Блог' } };
}

export default ArticlesPage;
