import { FormEvent, useMemo, useState } from 'react';
import styles from '@/styles/ProjectBrief.module.css';

const templates: Record<string,string[]> = {
  website:['цел и основна конверсия','аудитория и оферта','страници и съдържание','доверие и доказателства','SEO/analytics','handover'],
  ecommerce:['каталог и варианти','плащане и доставка','checkout','ERP/склад','tracking','CRO'],
  automation:['текущ ръчен процес','входни/изходни данни','правила и изключения','error handling','логове','rollback'],
  integration:['source of truth','API договор','идентификатори','idempotency/retry','reconciliation','monitoring'],
  marketing:['оферта','аудитория','landing','creative assets','measurement','human QA'],
};

export default function ProjectBriefPage(){
  const [type,setType]=useState('website');
  const [goal,setGoal]=useState('');
  const [current,setCurrent]=useState('');
  const [constraints,setConstraints]=useState('');
  const [result,setResult]=useState('');
  const checklist=useMemo(()=>templates[type]||templates.website,[type]);
  const submit=(event:FormEvent)=>{
    event.preventDefault();
    const lines=['# PROJECT BRIEF','','Тип: '+type,'Бизнес цел: '+(goal||'не е описана'),'Текущо състояние: '+(current||'не е описано'),'Ограничения: '+(constraints||'не са описани'),'','## Discovery checklist',...checklist.map((item,index)=>(index+1)+'. '+item),'','## Acceptance criteria','- ясно дефинирана основна конверсия или operational outcome','- потвърдени owners, достъпи и зависимости','- позитивни и негативни QA сценарии','- security и privacy проверка','- измерване след release','- документиран handover и rollback','','## Следваща стъпка','Изпрати този brief заедно с линкове, screenshots и налични API/ERP ограничения.'];
    setResult(lines.join('\n'));
  };
  return <div className={styles.page}><header className={styles.header}><p>LOCAL / PRIVACY-FIRST TOOL</p><h1>Project Brief Builder</h1><p>Подреди задачата преди оферта. Информацията остава в браузъра и не се изпраща към външен AI доставчик.</p></header><div className={styles.grid}><form className={styles.panel+' '+styles.form} onSubmit={submit}><div className={styles.field}><label htmlFor="type">Тип проект</label><select id="type" value={type} onChange={(e)=>setType(e.target.value)}><option value="website">Business Website</option><option value="ecommerce">E-commerce</option><option value="automation">Automation</option><option value="integration">ERP/API Integration</option><option value="marketing">AI Marketing</option></select></div><div className={styles.field}><label htmlFor="goal">Бизнес цел</label><textarea id="goal" value={goal} onChange={(e)=>setGoal(e.target.value)} /></div><div className={styles.field}><label htmlFor="current">Текущо състояние</label><textarea id="current" value={current} onChange={(e)=>setCurrent(e.target.value)} /></div><div className={styles.field}><label htmlFor="constraints">Ограничения / системи / срокове</label><textarea id="constraints" value={constraints} onChange={(e)=>setConstraints(e.target.value)} /></div><button className={styles.button} type="submit">Генерирай brief</button><p className={styles.note}>Не въвеждай пароли, API ключове, лични данни или друга чувствителна информация.</p></form><section className={styles.panel} aria-live="polite"><pre className={styles.output}>{result||'Попълни полетата и генерирай структуриран brief.'}</pre></section></div></div>;
}

export async function getStaticProps(){return{props:{title:'Project Brief Builder',description:'Безплатен локален Project Brief Builder за сайтове, e-commerce, автоматизации и ERP/API интеграции.',canonical:'https://evgeni-georgiev.com/tools/project-brief',schema:{'@type':'WebApplication',name:'Project Brief Builder',url:'https://evgeni-georgiev.com/tools/project-brief',applicationCategory:'BusinessApplication',operatingSystem:'Web browser',offers:{'@type':'Offer',price:'0',priceCurrency:'EUR'}}}}}