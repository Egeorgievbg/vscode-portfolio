import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { services } from '@/data/services';
import styles from '@/styles/ProjectsPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Услуги, които превръщат дигиталното присъствие в бизнес актив.</h1>
      <p className={styles.pageSubtitle}>
        Ясни пакети, конкретен обхват и фокус върху приходи, ефективност и контрол — не просто дизайн и код.
      </p>

      <div className={styles.container}>
        {services.map((service) => (
          <article key={service.slug} className={styles.serviceCard}>
            <p className={styles.cardEyebrow}>{service.price}</p>
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <p className={styles.cardText}>{service.summary}</p>
            <p className={styles.cardText}><strong>Подходящо за:</strong> {service.forWho}</p>
            <ul className={styles.cardList}>
              {service.includes.slice(0, 6).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href="/contact" className={styles.cardLink}>
              Обсъди услугата <VscArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { title: 'Услуги' } };
}

export default ServicesPage;
