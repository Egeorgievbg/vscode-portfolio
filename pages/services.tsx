import Link from 'next/link';
import { services } from '@/data/services';
import styles from '@/styles/ProjectsPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Услуги за дигитален растеж</h1>
      <p className={styles.pageSubtitle}>
        Сайтове, автоматизации и дигитални процеси с ясна бизнес цел: повече заявки,
        по-добра организация и по-малко ръчна работа.
      </p>

      <div className={styles.container}>
        {services.map((service) => (
          <article key={service.slug} style={{ padding: 24, border: '1px solid var(--border-color)', borderRadius: 12 }}>
            <p><strong>{service.price}</strong></p>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <p><strong>Подходящо за:</strong> {service.forWho}</p>
            <ul>
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href="/contact">Изпрати запитване →</Link>
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
