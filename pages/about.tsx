import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Евгени Георгиев</h1>
        <div className={styles.subtitle}>
          Дигитален проектен партньор • Web Developer • Python Automation
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Работя на пресечната точка между бизнес нужди, техническо
              изпълнение и дигитален маркетинг. Помагам на малки и средни
              бизнеси да изграждат сайтове, продуктови платформи, вътрешни
              системи и автоматизации, които имат реална бизнес стойност.
            </p>
            <p className={styles.paragraph}>
              Подхождам към всеки проект не само като разработчик, а като
              технически координатор — анализирам целта, структурирам
              съдържанието, подреждам потребителския път, комуникирам
              изискванията и мисля за резултата след публикуването.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Фокус</h2>
            <p className={styles.paragraph}>
              Основният ми фокус е изграждането на уеб сайтове, landing pages,
              e-commerce структури, Python автоматизации, ERP/API интеграции и
              вътрешни инструменти, които намаляват ръчната работа и подобряват
              контрола върху процесите.
            </p>
            <p className={styles.paragraph}>
              Комбинирам практически опит с <span className={styles.highlight}>Next.js</span>,{' '}
              <span className={styles.highlight}>React</span>,{' '}
              <span className={styles.highlight}>Python</span>,{' '}
              <span className={styles.highlight}>Flask</span>,{' '}
              <span className={styles.highlight}>WordPress/WooCommerce</span>,{' '}
              <span className={styles.highlight}>OpenCart</span>, рекламна подготовка,
              SEO структура и AI съдържание.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Проектен подход</h2>
            <p className={styles.paragraph}>
              Вярвам, че добрият дигитален проект започва с яснота: какъв
              проблем решаваме, за кого го решаваме, какъв резултат очакваме и
              как ще измерим успеха. Затова работя с конкретни задачи, ясни
              приоритети, реалистични срокове и постоянна комуникация.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Каква стойност давам</h2>
            <p className={styles.paragraph}>
              Помагам на бизнесите да получат повече от красив сайт — по-добро
              онлайн представяне, повече запитвания, по-ясна структура,
              по-добра рекламна готовност и по-малко технически хаос между
              собственици, програмисти, дизайнери и маркетинг изпълнители.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'За мен' },
  };
}

export default AboutPage;
