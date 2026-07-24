import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { projects, Project } from '@/data/projects';
import styles from '@/styles/AboutPage.module.css';

const ProjectCaseStudy = ({ project }: { project: Project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/projects">← Всички проекти</Link>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.subtitle}>{project.category} • {project.industry} • {project.status}</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Контекст</h2>
            <p className={styles.paragraph}>{project.description}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Бизнес цел</h2>
            <p className={styles.paragraph}>{project.businessGoal}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Моята роля</h2>
            <ul>{project.myRole.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Технологии и компетенции</h2>
            <p className={styles.paragraph}>{project.technologies.join(' • ')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Резултати и стойност</h2>
            <ul>{project.results.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Имаш подобен проект?</h2>
            <p className={styles.paragraph}>Мога да помогна със структура, сайт, автоматизация или техническа координация.</p>
            <Link href="/contact">Изпрати запитване →</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((item) => item.slug === params?.slug);
  if (!project) return { notFound: true };
  return { props: { title: project.title, project } };
};

export default ProjectCaseStudy;
