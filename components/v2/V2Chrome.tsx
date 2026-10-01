import { useEffect, useRef } from 'react';

import { useV2Language } from '@/components/v2/V2Language';
import styles from '@/styles/V2Page.module.css';

export default function V2Chrome() {
  const progressRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, copy } = useV2Language();

  useEffect(() => {
    const update = () => {
      if (!progressRef.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();

    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.scrollProgress} aria-hidden="true">
        <div ref={progressRef} />
      </div>

      <nav className={styles.v2Nav}>
        <a href="#v2-top" className={styles.v2Brand} aria-label="Evgeni Georgiev">
          <span>EG</span>
          <i />
          <b>SYSTEMS ARCHITECT</b>
        </a>

        <div className={styles.v2NavLinks}>
          <a href="#system">{copy.nav.architecture}</a>
          <a href="#v2-cases">{copy.nav.systems}</a>
        </div>

        <div className={styles.v2NavActions}>
          <div className={styles.languageSwitch} aria-label="Language switch">
            <button
              type="button"
              data-active={lang === 'bg'}
              onClick={() => setLang('bg')}
            >
              BG
            </button>
            <span>/</span>
            <button
              type="button"
              data-active={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <a href="#v2-contact" className={styles.v2NavCta}>
            {copy.nav.contact} ↗
          </a>
        </div>
      </nav>
    </>
  );
}
