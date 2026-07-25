import { VscCheck, VscCommentDiscussion, VscRocket } from 'react-icons/vsc';
import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        <p>START A PROJECT</p>
        <h1 className={styles.pageTitle}>Нека изградим нещо, което реално работи.</h1>
        <p className={styles.pageSubtitle}>
          Изпрати линк, идея или проблем. Ще получиш ясна следваща стъпка — без общи приказки и без излишна техническа мъгла.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.panelLabel}><VscCommentDiscussion /> DIRECT CONTACT</div>
          <ContactCode />
        </div>

        <aside className={styles.processPanel}>
          <div className={styles.panelLabel}><VscRocket /> WHAT HAPPENS NEXT</div>
          <ol>
            <li><span>01</span><div><strong>Кратък анализ</strong><p>Преглеждам целта, сайта и основния проблем.</p></div></li>
            <li><span>02</span><div><strong>Конкретен план</strong><p>Получаваш обхват, приоритети и реалистичен бюджет.</p></div></li>
            <li><span>03</span><div><strong>Изпълнение</strong><p>Работим по ясни етапи с видим напредък и контрол.</p></div></li>
          </ol>
          <div className={styles.promise}><VscCheck /> Отговор с конкретна следваща стъпка.</div>
        </aside>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { title: 'Контакт' } };
}

export default ContactPage;
