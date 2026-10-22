import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { services, Service } from '@/data/services';
import styles from '@/styles/DetailPage.module.css';

const process = [
  ['01','Discovery','Цел, потребители, ограничения, текущи системи и критерий за успех.'],
  ['02','Scope','Обхват, зависимости, приоритети, acceptance criteria и рискове.'],
  ['03','Build & QA','Реализация, responsive проверка, сигурност и технически тестове.'],
  ['04','Handover','Достъпи, документация, следващи стъпки и измерване.'],
];

export default function ServicePage({ service }: { service: Service }) {
  return <article className={styles.page}>
    <Link href="/services" className={styles.back}>← Всички услуги</Link>
    <p className={styles.eyebrow}>SERVICE / {service.price}</p>
    <h1 className={styles.title}>{service.title}</h1>
    <p className={styles.lead}>{service.summary}</p>
    <section className={styles.summary}><strong>Подходящо за</strong><p>{service.forWho}</p></section>
    <section className={styles.section}><h2>Какво включва</h2><ul>{service.includes.map((item)=><li key={item}>{item}</li>)}</ul></section>
    <section className={styles.section}><h2>Очакван бизнес ефект</h2><ul>{service.outcomes.map((item)=><li key={item}>{item}</li>)}</ul></section>
    <section className={styles.section}><h2>Начин на работа</h2><ul>{process.map(([n,t,d])=><li key={n}><strong>{n} / {t}:</strong> {d}</li>)}</ul></section>
    <section className={styles.section}><h2>Какво не обещавам</h2><p>Не обещавам фиксиран бизнес резултат без данни и контрол върху целия процес. Бюджетът, срокът и техническият подход се уточняват след кратък discovery и проверка на зависимостите.</p></section>
    <section className={styles.cta}><h2>Имаш подобна задача?</h2><p>Опиши целта, текущия процес и най-голямото ограничение. Ще подредим следващата разумна стъпка.</p><Link href="/contact">Обсъди проекта →</Link></section>
  </article>;
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: services.map((service)=>({params:{slug:service.slug}})), fallback:false });

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services.find((item)=>item.slug===params?.slug);
  if(!service) return { notFound:true };
  const canonical='https://evgeni-georgiev.com/services/'+service.slug;
  return { props:{ title:service.title, description:service.summary, canonical, service, schema:{'@type':'Service',name:service.title,description:service.summary,url:canonical,areaServed:'BG',provider:{'@id':'https://evgeni-georgiev.com/#person'}} } };
};