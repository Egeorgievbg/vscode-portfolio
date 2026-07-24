import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'evgeni-georgiev.com',
    href: 'https://evgeni-georgiev.com',
  },
  {
    social: 'email',
    link: 'dev@evgeni-georgiev.com',
    href: 'mailto:dev@evgeni-georgiev.com',
  },
  {
    social: 'github',
    link: 'Egeorgievbg',
    href: 'https://github.com/Egeorgievbg',
  },
  {
    social: 'service',
    link: 'Business Website',
    href: '/services',
  },
  {
    social: 'service',
    link: 'Automation Sprint',
    href: '/services',
  },
  {
    social: 'service',
    link: 'Monthly Digital Partner',
    href: '/services',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.businessContact</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={`${item.social}-${index}`}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
