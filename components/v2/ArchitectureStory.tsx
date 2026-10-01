import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useV2Language } from '@/components/v2/V2Language';
import styles from '@/styles/V2Page.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ArchitectureStory() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { copy } = useV2Language();

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-arch-step]'));

      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 58%',
          end: 'bottom 42%',
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });

      const visual = root.querySelector('[data-arch-visual]');
      if (visual) {
        gsap.from(visual, {
          opacity: 0,
          scale: 0.94,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 76%',
          },
        });
      }
    },
    { scope: rootRef },
  );

  const phase = copy.architecture.steps[active]?.phase || 'SYSTEM';

  return (
    <section id="system" ref={rootRef} className={styles.architectureStory}>
      <div className={styles.architectureIntro}>
        <p className={styles.sectionIndex}>{copy.architecture.label}</p>
        <h2>{copy.architecture.title}</h2>
      </div>

      <div className={styles.architectureLayout}>
        <div className={styles.architectureSteps}>
          {copy.architecture.steps.map((step, index) => (
            <article
              key={step.title}
              data-arch-step
              className={styles.architectureStep}
              data-active={index === active}
              tabIndex={0}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <div className={styles.architectureStepTop}>
                <span>0{index + 1}</span>
                <b>{step.phase}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <i className={styles.architectureStepLine} aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className={styles.architectureSticky}>
          <div
            data-arch-visual
            className={styles.architectureVisual}
            data-phase={active}
            aria-label="System architecture map"
          >
            <div className={styles.architectureOrb} aria-hidden="true" />

            <div className={styles.archNode} data-node="web">WEB</div>
            <div className={styles.archNode} data-node="api">API</div>
            <div className={styles.archNode} data-node="core">CORE</div>
            <div className={styles.archNode} data-node="erp">ERP</div>
            <div className={styles.archNode} data-node="warehouse">WAREHOUSE</div>
            <div className={styles.archNode} data-node="data">DATA</div>
            <div className={styles.archNode} data-node="ai">AI</div>
            <div className={styles.archNode} data-node="automation">AUTOMATION</div>

            <span className={styles.archLine} data-line="web-api" />
            <span className={styles.archLine} data-line="api-core" />
            <span className={styles.archLine} data-line="core-erp" />
            <span className={styles.archLine} data-line="erp-warehouse" />
            <span className={styles.archLine} data-line="core-data" />
            <span className={styles.archLine} data-line="data-ai" />
            <span className={styles.archLine} data-line="ai-automation" />

            <div className={styles.architectureStatus}>
              <span>PHASE 0{active + 1}</span>
              <span>{phase}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
