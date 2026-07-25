import Link from 'next/link';
import { VscArrowRight, VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/data/projects';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.meta}>
          <span>{project.category}</span>
          <span className={styles.status}>{project.status}</span>
        </div>
        <span className={styles.index}>/{project.slug.slice(0, 2).toUpperCase()}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.industry}>{project.industry}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.goal}>
          <span>Business objective</span>
          <p>{project.businessGoal}</p>
        </div>

        <div className={styles.tags}>
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Link href={`/projects/${project.slug}`} className={styles.caseStudy}>
          Case study <VscArrowRight />
        </Link>
        <div className={styles.externalLinks}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Отвори ${project.title}`}>
              <VscLinkExternal />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${project.title}`}>
              <VscGithubAlt />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
