import Link from 'next/link';
import styles from '@/styles/SiteFooter.module.css';

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.pitch}>
          <span className={styles.eyebrow}>BUILD • CONNECT • IMPROVE</span>
          <h2>Имаш бизнес проблем. Нека го превърнем в работеща система.</h2>
          <p>
            Сайтове, e-commerce, Python автоматизации и ERP/API интеграции с ясен
            обхват, контрол върху достъпите и измерими следващи стъпки.
          </p>
          <Link href="/contact" className={styles.cta}>Обсъди проект →</Link>
        </div>

        <div className={styles.links}>
          <div>
            <strong>Работа</strong>
            <Link href="/services">Услуги</Link>
            <Link href="/projects">Проекти</Link>
            <Link href="/tools/project-brief">Project Brief</Link>
          </div>
          <div>
            <strong>Знания</strong>
            <Link href="/articles">Insights</Link>
            <Link href="/articles/api-integration-production-checklist">API playbook</Link>
            <Link href="/articles/web-security-checklist">Web security</Link>
          </div>
          <div>
            <strong>Контакт</strong>
            <a href="mailto:dev@evgeni-georgiev.com">dev@evgeni-georgiev.com</a>
            <a href="https://github.com/Egeorgievbg" target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link href="/privacy">Поверителност</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Евгени Георгиев</span>
        <span>Web • Automation • ERP/API • SEO/CRO</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
