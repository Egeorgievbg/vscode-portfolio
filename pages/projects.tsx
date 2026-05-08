import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Избрани дигитални проекти</h1>
      <p className={styles.pageSubtitle}>
        Уеб сайтове, продуктови платформи, вътрешни системи и автоматизации,
        разработени с фокус върху реална бизнес стойност — повече запитвания,
        по-добра организация, по-ясна комуникация и по-малко ръчна работа.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Проекти' },
  };
}

export default ProjectsPage;
