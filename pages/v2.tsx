import type { GetStaticProps } from 'next';

import SmoothScroll from '@/components/v2/SmoothScroll';
import V2Hero from '@/components/v2/V2Hero';
import styles from '@/styles/V2Page.module.css';

const capabilities = [
  {
    n: '01',
    title: 'BUILD',
    items: 'Websites · E-commerce · UX/CRO',
  },
  {
    n: '02',
    title: 'CONNECT',
    items: 'ERP · API · PIM · Data',
  },
  {
    n: '03',
    title: 'AUTOMATE',
    items: 'Python · AI · Internal tools',
  },
  {
    n: '04',
    title: 'GROW',
    items: 'Tracking · CRO · Digital operations',
  },
];

const projects = [
  ['ENTERPRISE B2B COMMERCE', 'PIM / ERP / PRODUCT DATA / SCALE'],
  ['ERP PRICING BRIDGE', 'PYTHON / API / CONCURRENCY / BUSINESS LOGIC'],
  ['REVITA SALES OS', 'FIELD SALES / CRM / DATA / AI'],
  ['GPTSBOXES', 'THREE.JS / PRODUCT CONFIGURATOR / COMMERCE'],
];

export default function V2PrototypePage() {
  return (
    <main className={styles.page}>
      <SmoothScroll />
      <V2Hero />

      <section id="system" className={styles.manifesto}>
        <p className={styles.sectionIndex}>02 / SYSTEM THINKING</p>
        <h2>
          Повечето бизнеси нямат проблем с липсата на софтуер.
          <span>Имат твърде много несвързани инструменти.</span>
        </h2>
        <p>
          Сайтът, ERP, складът, рекламата и вътрешните операции не трябва да
          живеят като отделни острови. Архитектурата започва от бизнес процеса,
          а кодът идва след това.
        </p>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>03 / CAPABILITIES</p>
          <h2>FROM FRAGMENTED TO CONNECTED.</h2>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((item) => (
            <article key={item.n} className={styles.capability}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.work}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>04 / SELECTED SYSTEMS</p>
          <h2>BUILT FOR REAL OPERATIONS.</h2>
        </div>

        <div className={styles.projectList}>
          {projects.map(([title, meta], index) => (
            <div key={title} className={styles.projectRow}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{meta}</p>
              <strong>↗</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.prototypeCta}>
        <p className={styles.sectionIndex}>05 / NEXT</p>
        <h2>LET&apos;S BUILD THE SYSTEM.</h2>
        <p>
          Това е първият технически прототип на новия визуален език — без
          промяна по production сайта.
        </p>
        <a href="/contact">START A PROJECT ↗</a>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'V2 Prototype',
    description: 'Private redesign prototype for evgeni-georgiev.com.',
    canonical: 'https://evgeni-georgiev.com/v2',
    noindex: true,
  },
});
