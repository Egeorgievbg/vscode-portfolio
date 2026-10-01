import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import styles from '@/styles/V2Page.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    index: '01',
    title: 'CONNECT THE FRONT.',
    body: 'Website, commerce and customer touchpoints feed one shared operational layer instead of becoming isolated tools.',
  },
  {
    index: '02',
    title: 'MOVE BUSINESS LOGIC.',
    body: 'ERP, pricing, product data and internal APIs become explicit system components with predictable data flow.',
  },
  {
    index: '03',
    title: 'AUTOMATE THE OPERATIONS.',
    body: 'Python, AI and workflow automation remove repetitive manual work and create traceable execution paths.',
  },
];

export default function ArchitectureStory() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

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

      gsap.from(root.querySelector('[data-arch-visual]'), {
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top 76%',
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className={styles.architectureStory}>
      <div className={styles.architectureIntro}>
        <p className={styles.sectionIndex}>03 / SYSTEM ARCHITECTURE</p>
        <h2>FROM TOOLS TO ONE OPERATING SYSTEM.</h2>
      </div>

      <div className={styles.architectureLayout}>
        <div className={styles.architectureSteps}>
          {STEPS.map((step, index) => (
            <article
              key={step.index}
              data-arch-step
              className={styles.architectureStep}
              data-active={index === active}
            >
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
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
              <span>{active === 0 ? 'FRONT LAYER' : active === 1 ? 'BUSINESS LOGIC' : 'AUTOMATION'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
