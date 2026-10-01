import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import styles from '@/styles/V2Page.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SystemCanvas = dynamic(() => import('@/components/v2/SystemCanvas'), {
  ssr: false,
  loading: () => <div className={styles.canvasLoading} aria-hidden="true" />,
});

export default function V2Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.from(section.querySelectorAll('[data-v2-reveal]'), {
        y: 42,
        opacity: 0,
        duration: 1.05,
        stagger: 0.1,
        ease: 'power4.out',
      });

      if (coreRef.current) {
        gsap.fromTo(
          coreRef.current,
          { scale: 0.82, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.35, ease: 'power3.out', delay: 0.18 },
        );

        gsap.to(coreRef.current, {
          scale: 1.12,
          yPercent: 11,
          rotation: 2.2,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div data-v2-reveal className={styles.eyebrow}>
            <span className={styles.liveDot} />
            DIGITAL SYSTEMS / AUTOMATION / INFRASTRUCTURE
          </div>

          <h1 data-v2-reveal className={styles.heroTitle}>
            DIGITAL SYSTEMS
            <span>THAT MOVE</span>
            BUSINESS.
          </h1>

          <p data-v2-reveal className={styles.heroLead}>
            Създавам сайтове, автоматизации и интегрирани системи, които
            свързват web, ERP, API, AI и оперативните процеси на бизнеса.
          </p>

          <div data-v2-reveal className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              START A PROJECT <span>↗</span>
            </Link>
            <a href="#system" className={styles.secondaryButton}>
              EXPLORE THE SYSTEM ↓
            </a>
          </div>

          <div data-v2-reveal className={styles.heroMeta}>
            <span>SOFIA / BULGARIA</span>
            <span>WEB · ERP/API · PYTHON · AI</span>
            <span>AVAILABLE FOR SELECTED PROJECTS</span>
          </div>
        </div>

        <div ref={coreRef} className={styles.coreShell} aria-label="Interactive digital system visualization">
          <SystemCanvas />
          <div className={styles.coreScan} aria-hidden="true" />
          <div className={styles.coreCaption} aria-hidden="true">
            <span>SYSTEM CORE</span>
            <span>LIVE / 06 NODES</span>
          </div>
        </div>
      </div>

      <div className={styles.heroBottom}>
        <span>SCROLL TO DECOMPOSE THE SYSTEM</span>
        <span>01 / 06</span>
      </div>
    </section>
  );
}
