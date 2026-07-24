import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight, VscMail, VscGithubAlt } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

const skills = [
  'Next.js',
  'Python',
  'Flask',
  'ERP/API',
  'WooCommerce',
  'SEO/CRO',
  'AI Automation',
  'Project Management',
];

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const digitalPartner = {', type: 'function' },
    { code: "  name: 'Евгени Георгиев',", type: 'array-item' },
    { code: "  role: 'Web Developer & Digital Project Partner',", type: 'array-item' },
    { code: "  focus: ['websites', 'automation', 'ERP/API', 'AI'],", type: 'array-item' },
    { code: "  clients: 'small and medium business',", type: 'array-item' },
    { code: "  mission: 'more leads, less chaos, better systems',", type: 'array-item' },
    { code: "  revenueGoal: '5 000+ EUR monthly'", type: 'array-item' },
    { code: '};', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: 'function buildDigitalSystem(client) {', type: 'nested-function' },
    { code: "  const goal = 'leads, sales and operational control';", type: 'variable' },
    { code: '  return audit(client)', type: 'return' },
    { code: '    .then(strategy)', type: 'object-method' },
    { code: '    .then(build)', type: 'object-method' },
    { code: '    .then(measure)', type: 'object-method' },
    { code: '    .then(optimize);', type: 'object-method' },
    { code: '}', type: 'close' },
    { code: '', type: 'blank' },
    { code: 'export default digitalPartner;', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Евгени <span className={styles.accentText}>Георгиев</span>
          </h1>

          <div className={styles.developerRole}>
            Web Development • Python Automation • Digital Project Partner
          </div>

          <p className={styles.bio}>
            Изграждам сайтове, e-commerce структури, автоматизации и интеграции,
            които помагат на бизнеса да получава повече заявки, да работи по-ефективно
            и да намалява техническия хаос.
          </p>

          <div className={styles.skillTags}>
            {skills.map((skill) => (
              <span className={styles.skillTag} key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.actionLinks}>
            <Link href="/contact" className={styles.primaryLink}>
              <VscMail /> Изпрати проект <VscArrowRight />
            </Link>
            <Link href="/services" className={styles.secondaryLink}>
              Услуги и пакети
            </Link>
            <Link href="/projects" className={styles.secondaryLink}>
              Портфолио
            </Link>
            <a
              href="https://github.com/Egeorgievbg"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <VscGithubAlt /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Дигитален проектен партньор' },
  };
}
