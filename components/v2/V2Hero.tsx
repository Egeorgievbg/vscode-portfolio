import dynamic from 'next/dynamic';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useV2Language } from '@/components/v2/V2Language';
import { setSystemProgress } from '@/lib/v2/systemMotion';
import styles from '@/styles/V2Page.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SystemCanvas = dynamic(() => import('@/components/v2/SystemCanvas'), {
  ssr: false,
  loading: () => <div className={styles.canvasLoading} aria-hidden="true" />,
});

export default function V2Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const { copy } = useV2Language();

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
          {
            scale: 1,
            opacity: 1,
            duration: 1.35,
            ease: 'power3.out',
            delay: 0.18,
          },
        );
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.65,
          invalidateOnRefresh: true,
          onUpdate: (self) => setSystemProgress(self.progress),
          onRefresh: (self) => setSystemProgress(self.progress),
        },
      });

      if (copyRef.current) {
        timeline.to(
          copyRef.current,
          {
            yPercent: -18,
            opacity: 0.12,
            filter: 'blur(7px)',
            ease: 'none',
          },
          0.28,
        );
      }

      if (coreRef.current) {
        timeline.to(
          coreRef.current,
          {
            xPercent: -17,
            scale: 1.22,
            ease: 'none',
          },
          0.18,
        );
      }

      if (storyRef.current) {
        timeline.fromTo(
          storyRef.current,
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, ease: 'none' },
          0.48,
        );
      }

      return () => {
        setSystemProgress(0);
      };
    },
    { scope: sectionRef },
  );

  return (
    <section id="v2-top" ref={sectionRef} className={styles.hero}>
      <div className={styles.heroStage}>
        <div className={styles.heroGrid}>
          <div ref={copyRef} className={styles.heroCopy}>
            <div data-v2-reveal className={styles.eyebrow}>
              <span className={styles.liveDot} />
              {copy.hero.eyebrow}
            </div>

            <h1 data-v2-reveal className={styles.heroTitle}>
              <span>{copy.hero.line1}</span>
              <span>{copy.hero.line2}</span>
              <span>{copy.hero.line3}</span>
            </h1>

            <p data-v2-reveal className={styles.heroLead}>
              {copy.hero.lead}
            </p>

            <div data-v2-reveal className={styles.heroActions}>
              <a href="#v2-cases" className={styles.primaryButton}>
                {copy.hero.primary} <span>↓</span>
              </a>
              <a href="#system" className={styles.secondaryButton}>
                {copy.hero.secondary} <span>↗</span>
              </a>
            </div>

            <div data-v2-reveal className={styles.heroMeta}>
              <span>SOFIA / BULGARIA</span>
              <span>WEB · ERP/API · PYTHON · AI</span>
              <span>{copy.hero.availability}</span>
            </div>
          </div>

          <div
            ref={coreRef}
            className={styles.coreShell}
            aria-label="Interactive digital system visualization"
          >
            <SystemCanvas />
            <div className={styles.coreScan} aria-hidden="true" />
            <div className={styles.coreCaption} aria-hidden="true">
              <span>SYSTEM CORE</span>
              <span>LIVE / 06 NODES</span>
            </div>
          </div>

          <div ref={storyRef} className={styles.heroStory} aria-hidden="true">
            <span>DECOMPOSITION</span>
            <strong>CORE → NETWORK → OPERATING SYSTEM</strong>
            <p>
              Scroll transforms one abstract system into explicit business
              architecture.
            </p>
          </div>
        </div>

        <div className={styles.heroTimeline} aria-hidden="true">
          <span>01</span>
          <i />
          <span>CORE</span>
          <i />
          <span>CONNECT</span>
          <i />
          <span>RESOLVE</span>
        </div>
      </div>

      <div className={styles.heroBottom}>
        <span>SCROLL / SYSTEM DECOMPOSITION</span>
        <span>01 / 07</span>
      </div>
    </section>
  );
}
