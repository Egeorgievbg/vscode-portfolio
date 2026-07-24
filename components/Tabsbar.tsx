import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/js_icon.svg" filename="services.js" path="/services" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/logos/json_icon.svg" filename="blog.json" path="/articles" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
