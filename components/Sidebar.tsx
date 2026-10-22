import Link from 'next/link';
import { useRouter } from 'next/router';
import { VscAccount, VscSettings, VscMail, VscGithubAlt, VscCode, VscFiles, VscEdit, VscChecklist } from 'react-icons/vsc';
import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/', label: 'Начало' },
  { Icon: VscCode, path: '/services', label: 'Услуги' },
  { Icon: VscCode, path: '/projects', label: 'Проекти' },
  { Icon: VscEdit, path: '/articles', label: 'Insights' },
  { Icon: VscChecklist, path: '/tools/project-brief', label: 'Project Brief' },
  { Icon: VscGithubAlt, path: '/github', label: 'GitHub' },
  { Icon: VscMail, path: '/contact', label: 'Контакт' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about', label: 'За мен' },
  { Icon: VscSettings, path: '/settings', label: 'Настройки' },
];

const Sidebar = () => {
  const router = useRouter();
  const isActive = (path: string) =>
    path === '/' ? router.pathname === '/' : router.pathname === path || router.pathname.startsWith(path + '/');

  const renderItem = ({ Icon, path, label }: (typeof sidebarTopItems)[number]) => {
    const active = isActive(path);
    return (
      <Link href={path} key={path} aria-label={label} title={label}>
        <div className={`${styles.iconContainer} ${active ? styles.active : ''}`}>
          <Icon
            fill={active ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
            className={styles.icon}
          />
        </div>
      </Link>
    );
  };

  return (
    <aside className={styles.sidebar} aria-label="Бърза навигация">
      <div className={styles.sidebarTop}>{sidebarTopItems.map(renderItem)}</div>
      <div className={styles.sidebarBottom}>{sidebarBottomItems.map(renderItem)}</div>
    </aside>
  );
};

export default Sidebar;
