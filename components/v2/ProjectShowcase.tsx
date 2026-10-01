import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import styles from '@/styles/V2Page.module.css';

type ProjectItem = {
  index: string;
  title: string;
  meta: string;
  metric: string;
  architecture: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    index: '01',
    title: 'ENTERPRISE B2B COMMERCE',
    meta: 'PIM / ERP / PRODUCT DATA / SCALE',
    metric: '50K+ PRODUCTS',
    architecture: ['PIM', 'ERP', 'API', 'B2B'],
  },
  {
    index: '02',
    title: 'ERP PRICING BRIDGE',
    meta: 'PYTHON / API / CONCURRENCY / BUSINESS LOGIC',
    metric: 'REAL-TIME PRICING',
    architecture: ['SHOP', 'QUEUE', 'ERP', 'PRICE'],
  },
  {
    index: '03',
    title: 'REVITA SALES OS',
    meta: 'FIELD SALES / CRM / DATA / AI',
    metric: 'FIELD OPERATIONS',
    architecture: ['CRM', 'ROUTES', 'DATA', 'AI'],
  },
  {
    index: '04',
    title: 'GPTSBOXES',
    meta: 'THREE.JS / CONFIGURATOR / COMMERCE',
    metric: '3D PRODUCT ENGINE',
    architecture: ['3D', 'ARTWORK', 'QUOTE', 'ORDER'],
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const moveX = useRef<((value: number) => void) | null>(null);
  const moveY = useRef<((value: number) => void) | null>(null);

  useGSAP(
    () => {
      if (!previewRef.current) return;

      moveX.current = gsap.quickTo(previewRef.current, 'x', {
        duration: 0.9,
        ease: 'power3.out',
      });
      moveY.current = gsap.quickTo(previewRef.current, 'y', {
        duration: 1.15,
        ease: 'power3.out',
      });

      gsap.from(sectionRef.current?.querySelectorAll('[data-project-row]') || [], {
        y: 54,
        opacity: 0,
        stagger: 0.09,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
        },
      });
    },
    { scope: sectionRef },
  );

  const showPreview = (index: number) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setActive(index);
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.24,
      ease: 'power2.out',
    });
  };

  const hidePreview = () => {
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.94,
      rotate: -1.5,
      duration: 0.22,
      ease: 'power2.inOut',
    });
  };

  const followPointer = (event: React.MouseEvent<HTMLElement>) => {
    moveX.current?.(event.clientX + 26);
    moveY.current?.(event.clientY - 170);
  };

  const current = PROJECTS[active];

  return (
    <section
      ref={sectionRef}
      className={styles.work}
      onMouseMove={followPointer}
      onMouseLeave={hidePreview}
    >
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>05 / SELECTED SYSTEMS</p>
        <h2>BUILT FOR REAL OPERATIONS.</h2>
      </div>

      <div className={styles.projectList}>
        {PROJECTS.map((project, index) => (
          <a
            key={project.title}
            data-project-row
            className={styles.projectRow}
            href="/projects"
            onMouseEnter={() => showPreview(index)}
            onFocus={() => setActive(index)}
          >
            <span>{project.index}</span>
            <h3>{project.title}</h3>
            <p>{project.meta}</p>
            <strong>↗</strong>
          </a>
        ))}
      </div>

      <div ref={previewRef} className={styles.projectPreview} aria-hidden="true">
        <div className={styles.previewTop}>
          <span>{current.index} / SYSTEM</span>
          <span>LIVE CASE</span>
        </div>
        <div className={styles.previewMetric}>{current.metric}</div>
        <div className={styles.previewArchitecture}>
          {current.architecture.map((item, index) => (
            <div key={item} className={styles.previewNode}>
              <span>{item}</span>
              {index < current.architecture.length - 1 && <i>→</i>}
            </div>
          ))}
        </div>
        <div className={styles.previewGrid} />
        <div className={styles.previewGlow} />
      </div>
    </section>
  );
}
