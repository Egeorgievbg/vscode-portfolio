import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { articles } from '@/data/articles';
import styles from '@/styles/ProjectsPage.module.css';

const ArticlesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Практически знания за сайтове, AI и автоматизации.</h1>
      <p className={styles.pageSubtitle}>
        Съдържание, изградено върху реални бизнес проблеми, технически решения и конкретни стъпки за растеж.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <article key={article.slug} className={styles.articleCard}>
            <p className={styles.cardEyebrow}>{article.category}</p>
            <h2 className={styles.cardTitle}>{article.title}</h2>
            <p className={styles.cardText}>{article.description}</p>
            <div className={styles.keywordRow}>
              {article.keywords.slice(0, 5).map((keyword) => <span key={keyword}>#{keyword}</span>)}
            </div>
            <Link href={`/articles/${article.slug}`} className={styles.cardLink}>
              Прочети статията <VscArrowRight />
            </Link>
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
