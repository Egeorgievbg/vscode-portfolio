import Link from 'next/link';
import {
  VscArrowRight,
  VscCheck,
  VscGithubAlt,
  VscGraph,
  VscMail,
  VscRocket,
  VscTerminal,
} from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

const capabilities = [
  'Business websites',
  'Python automation',
  'ERP/API integrations',
  'SEO & CRO',
  'AI workflows',
  'Digital project management',
];

const proof = [
  { value: '10+', label: 'реални проекта' },
  { value: '5', label: 'пакетирани услуги' },
  { value: 'B2B', label: 'технически фокус' },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.availability}>
            <span className={styles.statusDot} /> Приемам нови проекти
          </div>

          <p className={styles.kicker}>WEB • AUTOMATION • AI • ERP/API</p>
          <h1 className={styles.title}>
            Дигитални системи,
            <span> които движат бизнеса.</span>
          </h1>
          <p className={styles.lead}>
            Аз съм Евгени Георгиев. Превръщам разпилени идеи и ръчни процеси в
            ясни сайтове, автоматизации и интеграции, които носят заявки, контрол
            и измерима бизнес стойност.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryAction}>
              <VscRocket /> Обсъди проект <VscArrowRight />
            </Link>
            <Link href="/projects" className={styles.secondaryAction}>
              Виж case studies
            </Link>
          </div>

          <div className={styles.proofGrid}>
            {proof.map((item) => (
              <div className={styles.proofItem} key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.commandCenter}>
          <div className={styles.windowTop}>
            <div className={styles.windowDots}><span /><span /><span /></div>
            <span>growth-system.ts</span>
            <VscTerminal />
          </div>
          <div className={styles.codeBody}>
            <div><span className={styles.purple}>const</span> partner = {'{'}</div>
            <div>&nbsp;&nbsp;name: <span className={styles.orange}>'Евгени Георгиев'</span>,</div>
            <div>&nbsp;&nbsp;role: <span className={styles.orange}>'Digital Project Partner'</span>,</div>
            <div>&nbsp;&nbsp;system: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.orange}>'strategy'</span>, <span className={styles.orange}>'build'</span>, <span className={styles.orange}>'measure'</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.orange}>'automate'</span>, <span className={styles.orange}>'optimize'</span></div>
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;result: <span className={styles.green}>'more revenue, less chaos'</span></div>
            <div>{'}'};</div>
            <div className={styles.codeBlank} />
            <div><span className={styles.blue}>deploy</span>(partner).<span className={styles.blue}>scale</span>();</div>
          </div>
          <div className={styles.terminalOutput}>
            <div><VscCheck /> SYSTEM READY</div>
            <div><VscGraph /> KPI TRACKING ENABLED</div>
            <div><VscCheck /> BUSINESS LOGIC CONNECTED</div>
          </div>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHeading}>
          <span>01 / CAPABILITIES</span>
          <h2>Една точка на отговорност за целия дигитален проект.</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map((item, index) => (
            <div className={styles.capabilityCard} key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Стратегия, техническо изпълнение и бизнес логика в една система.</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div>
          <span>READY TO BUILD?</span>
          <h2>Нека превърнем следващата ти идея в работещ актив.</h2>
        </div>
        <div className={styles.ctaLinks}>
          <Link href="/contact"><VscMail /> Изпрати запитване</Link>
          <a href="https://github.com/Egeorgievbg" target="_blank" rel="noopener noreferrer">
            <VscGithubAlt /> GitHub proof-of-work
          </a>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { title: 'Дигитален проектен партньор' } };
}
