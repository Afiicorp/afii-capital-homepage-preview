/* AFII_EXPERTISE_V24 */
"use client";
import { useEffect, useState, type ReactNode } from "react";
import { Header, Footer, ContactModal, Arrow } from "@/components/about-experience";
import { transactions, type Deal } from "@/data/transactions";
import { transactionImage,transactionFallbackImage } from "@/components/transaction-media";
import { industries } from "@/data/industries-v20";

export function ExpertiseFrame({children}:{children:ReactNode}){
 const [contact,setContact]=useState(false);
 useEffect(()=>{
  const targets=Array.from(document.querySelectorAll<HTMLElement>(".afi-exp-reveal"));
  if(!("IntersectionObserver" in window)){targets.forEach(t=>t.classList.add("is-visible"));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.09,rootMargin:"0px 0px -30px 0px"});
  targets.forEach(t=>io.observe(t));return ()=>io.disconnect();
 },[]);
 return <><Header onContact={()=>setContact(true)}/><main className="afi-exp-root">{children}<section className="afi-exp-cta"><div className="af-container afi-exp-cta-grid"><div><span className="afi-exp-eyebrow">Start With The Mandate</span><h2>Tell Us About The<br/><em>Business Behind It.</em></h2></div><div><p>Whether the discussion concerns a project, operating company or investment structure, we begin with what the business needs to achieve and what information is available.</p><button onClick={()=>setContact(true)} className="afi-exp-button afi-exp-button--light">Discuss A Mandate <Arrow diagonal size={17}/></button></div></div></section></main><Footer onContact={()=>setContact(true)}/><ContactModal open={contact} onClose={()=>setContact(false)}/></>
}
export function ExpertiseCrumb({items}:{items:{label:string;href?:string}[]}){return <nav className="afi-exp-crumb" aria-label="Breadcrumb"><a href="/">Home</a>{items.map((x,i)=><span key={`${x.label}-${i}`} className="afi-exp-crumb-part"><span aria-hidden="true">/</span>{x.href?<a href={x.href}>{x.label}</a>:<span>{x.label}</span>}</span>)}</nav>}
export function TxReferences({ids,title="Selected Published References"}:{ids:number[];title?:string}){
 const data=ids.map(id=>transactions.find(t=>t.id===id)).filter((x):x is Deal=>Boolean(x)).slice(0,6);
 if(!data.length)return null;
 return <section className="afi-exp-references"><div className="af-container"><div className="afi-exp-references-top"><div><span className="afi-exp-eyebrow">From The Published Directory</span><h2>{title}</h2></div><a className="afi-exp-text-link" href="/transactions">All Transactions <Arrow diagonal size={17}/></a></div><div className="afi-exp-tx-grid">{data.map(d=><a href={`/transactions/${d.slug}`} className="afi-exp-tx" key={d.id}><div className="afi-exp-tx-photo"><img src={transactionImage(d)} alt={`Illustrative image: ${d.sector}`} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=transactionFallbackImage(d)}}/><span>{d.sector}</span></div><div className="afi-exp-tx-body"><h3>{d.title}</h3><p>{d.partner!=="Confidential"?d.partner:"Counterparty not published"}</p><div className="afi-exp-tx-meta"><span>{d.country}</span><span aria-hidden="true">↗</span></div></div></a>)}</div><p className="afi-exp-disclaimer">References are drawn from AFII’s published transaction directory. Some entries describe historical, proposed or confidential assignments; inclusion does not establish that every project reached financial close. Photographs are editorial illustrations, not authenticated project images.</p></div></section>
}
export function IndustryReferences({slugs}:{slugs:string[]}){const items=industries.filter(x=>slugs.includes(x.slug));if(!items.length)return null;return <section className="afi-exp-industry-links"><div className="af-container"><span className="afi-exp-eyebrow">Where This Work Applies</span><h2>Connected Industries.</h2><div className="afi-exp-industries-grid">{items.map(x=><a key={x.slug} href={`/industries/${x.slug}`}><strong>{x.title}</strong><span aria-hidden="true">↗</span></a>)}</div></div></section>}
