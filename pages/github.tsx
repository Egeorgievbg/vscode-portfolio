import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Egeorgievbg';
const FALLBACK_USER: User = {
  login: GITHUB_USERNAME,
  avatar_url: 'https://avatars.githubusercontent.com/u/153922151?v=4',
  public_repos: 0,
  followers: 0,
};

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub proof-of-work</h1>
        <p className={styles.pageSubtitle}>
          Публични проекти, които показват опит с web development, Android,
          ERP/API логика, Python автоматизации и технически прототипи.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url || FALLBACK_USER.avatar_url}
              className={styles.avatar}
              alt={user.login || GITHUB_USERNAME}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login || GITHUB_USERNAME}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos || repos.length} публични repository проекта</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers || 0} последователи</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Последно обновени repository проекти</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={GITHUB_USERNAME}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let user: User = FALLBACK_USER;
  let repos: Repo[] = [];

  try {
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (userRes.ok) user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=8`
    );
    if (repoRes.ok) {
      const repoData = await repoRes.json();
      repos = Array.isArray(repoData) ? repoData : [];
    }
  } catch {
    user = FALLBACK_USER;
    repos = [];
  }

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 600,
  };
}

export default GithubPage;
