import Link from 'next/link';
import { useRouter } from 'next/router';
import { VscGithubAlt } from 'react-icons/vsc';

import styles from '@/styles/Titlebar.module.css';

const navigation = [
  { href: '/services', label: 'Услуги' },
  { href: '/projects', label: 'Проекти' },
  { href: '/articles', label: 'Insights' },
  { href: '/tools/project-brief', label: 'Project Brief' },
  { href: '/about', label: 'За мен' },
];

const Titlebar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Евгени Георгиев — начало">
        <span className={styles.mark}>e/g</span>
        <span className={styles.brandText}>
          <strong>Евгени Георгиев</strong>
          <small>Web • Automation • ERP/API</small>
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Основна навигация">
        {navigation.map((item) => {
          const active =
            router.pathname === item.href ||
            (item.href !== '/' && router.pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? styles.active : undefined}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.actions}>
        <a
          className={styles.github}
          href="https://github.com/Egeorgievbg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub профил на Евгени Георгиев"
        >
          <VscGithubAlt />
          <span>GitHub</span>
        </a>
        <Link href="/contact" className={styles.cta}>
          Обсъди проект
        </Link>
      </div>
    </header>
  );
};

export default Titlebar;
