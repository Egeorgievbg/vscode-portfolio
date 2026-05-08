import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const digitalPartner = {', type: 'function' },
    { code: "  name: 'Евгени Георгиев',", type: 'array-item' },
    {
      code: "  role: 'Web Developer & Digital Project Partner',",
      type: 'array-item',
    },
    {
      code: "  focus: 'websites, automation, integrations',",
      type: 'array-item',
    },
    {
      code: "  stack: ['Next.js', 'Python', 'Flask', 'ERP', 'AI'],",
      type: 'array-item',
    },
    {
      code: "  mission: 'less chaos, more business value'",
      type: 'array-item',
    },
    { code: '};', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: 'function buildDigitalSystem(client) {', type: 'nested-function' },
    {
      code: "  const goal = 'more leads, sales and control';",
      type: 'variable',
    },
    {
      code: "  return roadmap(client.business, goal);",
      type: 'return',
    },
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
            Web Development • Python Automation • Digital Project Management
          </div>

          <p className={styles.bio}>
            Създавам сайтове, автоматизации и дигитални системи за бизнеси,
            които искат повече заявки, по-добра организация и по-малко
            технически хаос.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              Виж проектите <VscArrowRight />
            </Link>
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
    props: { title: 'Евгени Георгиев' },
  };
}
