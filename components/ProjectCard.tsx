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
      <div className={styles.content}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.status}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <p className={styles.description}>
          <strong>Бизнес цел:</strong> {project.businessGoal}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '16px 0' }}>
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>#{technology}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href={`/projects/${project.slug}`}>
            Виж case study <VscArrowRight />
          </Link>
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
