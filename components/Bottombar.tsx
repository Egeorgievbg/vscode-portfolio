import { VscSourceControl, VscShield } from 'react-icons/vsc';
import { SiNextdotjs } from 'react-icons/si';
import styles from '@/styles/Bottombar.module.css';

const Bottombar = () => (
  <footer className={styles.bottomBar}>
    <div className={styles.container}>
      <a href="https://github.com/Egeorgievbg/vscode-portfolio" target="_blank" rel="noreferrer noopener" className={styles.section}>
        <VscSourceControl className={styles.icon} /><p>vscode-portfolio</p>
      </a>
    </div>
    <div className={styles.container}>
      <div className={styles.section}><SiNextdotjs className={styles.icon} /><p>Next.js • Python • ERP/API</p></div>
      <div className={styles.section}><VscShield className={styles.icon} /><p>Security-aware build</p></div>
    </div>
  </footer>
);
export default Bottombar;
