import type { GetStaticProps } from 'next';

import ArchitectureStory from '@/components/v2/ArchitectureStory';
import CaseStudyShowcase from '@/components/v2/CaseStudyShowcase';
import ProjectShowcase from '@/components/v2/ProjectShowcase';
import SmoothScroll from '@/components/v2/SmoothScroll';
import V2Chrome from '@/components/v2/V2Chrome';
import V2Hero from '@/components/v2/V2Hero';
import {
  V2LanguageProvider,
  useV2Language,
} from '@/components/v2/V2Language';
import styles from '@/styles/V2Page.module.css';

const capabilityCopy = {
  bg: [
    { n: '01', title: 'BUILD', items: 'Сайтове · E-commerce · UX/CRO' },
    { n: '02', title: 'CONNECT', items: 'ERP · API · PIM · Данни' },
    { n: '03', title: 'AUTOMATE', items: 'Python · AI · Вътрешни инструменти' },
    { n: '04', title: 'GROW', items: 'Tracking · CRO · Дигитални операции' },
  ],
  en: [
    { n: '01', title: 'BUILD', items: 'Websites · E-commerce · UX/CRO' },
    { n: '02', title: 'CONNECT', items: 'ERP · API · PIM · Data' },
    { n: '03', title: 'AUTOMATE', items: 'Python · AI · Internal tools' },
    { n: '04', title: 'GROW', items: 'Tracking · CRO · Digital operations' },
  ],
};

function V2PrototypeContent() {
  const { lang, copy } = useV2Language();
  const capabilities = capabilityCopy[lang];

  return (
    <main className={styles.page}>
      <SmoothScroll />
      <V2Chrome />
      <V2Hero />

      <section className={styles.manifesto}>
        <p className={styles.sectionIndex}>{copy.manifesto.label}</p>
        <h2>
          {copy.manifesto.lead}
          <span>{copy.manifesto.ghost}</span>
        </h2>
        <div className={styles.manifestoBody}>
          <span>BUSINESS LOGIC FIRST</span>
          <p>{copy.manifesto.body}</p>
        </div>
      </section>

      <ArchitectureStory />

      <section className={styles.capabilities}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>04 / CAPABILITIES</p>
          <h2>{lang === 'bg' ? 'ОТ ФРАГМЕНТИ КЪМ ЕДНА СИСТЕМА.' : 'FROM FRAGMENTED TO CONNECTED.'}</h2>
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

      <ProjectShowcase />
      <CaseStudyShowcase />

      <section id="v2-contact" className={styles.prototypeCta}>
        <p className={styles.sectionIndex}>{copy.cta.label}</p>
        <h2>{copy.cta.title}</h2>
        <div className={styles.prototypeCtaRow}>
          <p>{copy.cta.body}</p>
          <a href="mailto:dev@evgeni-georgiev.com">{copy.cta.button} ↗</a>
        </div>
        <div className={styles.v2FooterLine}>
          <span>EVGENI GEORGIEV</span>
          <span>DIGITAL SYSTEMS / AUTOMATION / INFRASTRUCTURE</span>
          <span>SOFIA · 2026</span>
        </div>
      </section>
    </main>
  );
}

export default function V2PrototypePage() {
  return (
    <V2LanguageProvider>
      <V2PrototypeContent />
    </V2LanguageProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'V2 Prototype',
    description: 'Bilingual BG/EN redesign prototype for evgeni-georgiev.com.',
    canonical: 'https://evgeni-georgiev.com/v2',
    noindex: true,
  },
});
