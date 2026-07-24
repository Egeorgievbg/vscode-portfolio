import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Нека обсъдим проекта</h1>
      <p className={styles.pageSubtitle}>
        Изпрати линк към сайта или кратко описание на проблема. Посочи каква е целта —
        повече заявки, нов сайт, e-commerce, автоматизация, ERP/API интеграция или
        месечна дигитална поддръжка.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { title: 'Контакт' } };
}

export default ContactPage;
