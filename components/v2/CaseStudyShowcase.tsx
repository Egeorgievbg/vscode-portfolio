import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { v2CaseStudies } from '@/data/v2/caseStudies';
import styles from '@/styles/V2Page.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SystemDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className={styles.caseDiagram} aria-hidden="true">
      <div className={styles.caseDiagramGrid} />
      <div className={styles.caseDiagramFlow}>
        {nodes.map((node, index) => (
          <div className={styles.caseDiagramSegment} key={node}>
            <span>{node}</span>
            {index < nodes.length - 1 && <i>→</i>}
          </div>
        ))}
      </div>
      <div className={styles.caseDiagramPulse} />
      <div className={styles.caseDiagramMeta}>
        <span>SYSTEM FLOW</span>
        <span>{String(nodes.length).padStart(2, '0')} NODES</span>
      </div>
    </div>
  );
}

export default function CaseStudyShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const cases = Array.from(
        root.querySelectorAll<HTMLElement>('[data-case-study]'),
      );

      cases.forEach((caseEl) => {
        const copy = caseEl.querySelector('[data-case-copy]');
        const visual = caseEl.querySelector('[data-case-visual]');
        const metrics = caseEl.querySelectorAll('[data-case-metric]');

        gsap.from(copy, {
          y: 52,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: caseEl,
            start: 'top 72%',
          },
        });

        gsap.from(visual, {
          scale: 0.91,
          opacity: 0,
          rotate: 1.5,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: caseEl,
            start: 'top 68%',
          },
        });

        gsap.from(metrics, {
          y: 28,
          opacity: 0,
          stagger: 0.08,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: caseEl,
            start: 'top 58%',
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className={styles.caseStudies}>
      <div className={styles.caseStudiesHeader}>
        <p className={styles.sectionIndex}>06 / CASE STUDIES</p>
        <h2>ARCHITECTURE WITH CONSEQUENCES.</h2>
        <p>
          Не показвам „технологии заради технологиите“. Всеки проект е организиран
          около конкретен operational problem, ясни contracts и проверими граници.
        </p>
      </div>

      <div className={styles.caseStudyList}>
        {v2CaseStudies.map((item, caseIndex) => (
          <article
            key={item.slug}
            data-case-study
            className={styles.caseStudy}
            data-reverse={caseIndex % 2 === 1}
          >
            <div data-case-copy className={styles.caseCopy}>
              <div className={styles.caseTopline}>
                <span>{item.index}</span>
                <span>{item.eyebrow}</span>
                <span>{item.status}</span>
              </div>

              <h3>{item.title}</h3>
              <p className={styles.caseSummary}>{item.summary}</p>

              <div className={styles.caseNarrative}>
                <div>
                  <span>CHALLENGE</span>
                  <p>{item.challenge}</p>
                </div>
                <div>
                  <span>SYSTEM</span>
                  <p>{item.solution}</p>
                </div>
                <div>
                  <span>OUTCOME</span>
                  <p>{item.outcome}</p>
                </div>
              </div>

              <div className={styles.caseStack}>
                {item.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className={styles.caseLinks}>
                {item.liveUrl && (
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    LIVE SYSTEM ↗
                  </a>
                )}
                {item.repositoryUrl && (
                  <a href={item.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    SOURCE ↗
                  </a>
                )}
              </div>
            </div>

            <div data-case-visual className={styles.caseVisual}>
              <SystemDiagram nodes={item.architecture} />

              <div className={styles.caseMetrics}>
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    data-case-metric
                    className={styles.caseMetric}
                  >
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    {metric.note && <small>{metric.note}</small>}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
