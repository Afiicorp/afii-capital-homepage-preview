"use client";

import { useState } from "react";
import { Header, Footer, ContactModal, Arrow } from "@/components/about-experience";
import { industries, type Industry } from "@/data/industries-v20";
import IndustryIcon from "@/components/industry-icons";

export default function IndustryDetailExperience({ industry }: { industry: Industry }) {
  const [contactOpen, setContactOpen] = useState(false);
  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  return <>
    <Header onContact={()=>setContactOpen(true)} />
    <main className="afi-ind-page afi-ind-detail-page">
      <section className="afi-ind-detail-hero">
        <img src={industry.image} alt={industry.imageAlt} className="afi-ind-detail-hero-photo" />
        <div className="afi-ind-detail-hero-overlay" />
        <div className="af-container afi-ind-detail-hero-inner"><nav className="afi-ind-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/industries">Industries</a><span>/</span><span>{industry.title}</span></nav><span className="afi-ind-detail-label">AFII / Industry Perspective</span><h1>{industry.title}</h1><p>{industry.short}</p></div>
      </section>
      <section className="afi-ind-detail-introduction afi-ind-section"><div className="af-container afi-ind-detail-intro-grid"><div className="afi-ind-detail-intro-title"><span className="afi-ind-overline">A Closer Perspective</span><h2>{industry.pullQuote}</h2></div><div className="afi-ind-prose"><p>{industry.introduction}</p><p>{industry.scope}</p></div></div></section>
      <section className="afi-ind-detail-considerations afi-ind-section"><div className="af-container"><div className="afi-ind-detail-topline"><div className="afi-ind-detail-icon"><IndustryIcon type={industry.icon} size={42}/></div><span className="afi-ind-overline">Commercial Considerations</span></div><div className="afi-ind-detail-considerations-head"><h2>What Makes This<br/>Sector Different.</h2><p>Good advice begins with understanding the constraints and choices specific to the underlying business or asset.</p></div><div className="afi-ind-detail-essay-grid">{industry.matters.map((part)=><article key={part.title} className="afi-ind-detail-essay"><h3>{part.title}</h3><p>{part.text}</p></article>)}</div></div></section>
      <section className="afi-ind-detail-approach afi-ind-section"><div className="af-container afi-ind-detail-approach-grid"><div className="afi-ind-detail-approach-left"><span className="afi-ind-overline">Our Advisory Perspective</span><h2>Structure Should<br/>Follow Substance.</h2><p>{industry.finalThought}</p><a href="/expertise" className="afi-ind-outline-link">Explore Our Expertise <Arrow diagonal size={17}/></a></div><div className="afi-ind-detail-approach-list">{industry.approach.map((part)=><article key={part.title}><h3>{part.title}</h3><p>{part.text}</p></article>)}</div></div></section>
      <section className="afi-ind-detail-quote"><div className="af-container afi-ind-detail-quote-inner"><span>AFII</span><p>Every mandate has its own commercial reality. The best starting point is to understand that reality properly.</p></div></section>
      <section className="afi-ind-detail-related afi-ind-section"><div className="af-container"><div className="afi-ind-related-heading"><span className="afi-ind-overline">Continue Exploring</span><h2>Connected Perspectives.</h2></div><div className="afi-ind-related-grid">{related.map((item)=><a key={item.slug} href={`/industries/${item.slug}`} className="afi-ind-related-link"><span className="afi-ind-related-icon"><IndustryIcon type={item.icon} size={31}/></span><strong>{item.title}</strong><span aria-hidden="true">↗</span></a>)}</div></div></section>
      <section className="afi-ind-conversation"><div className="af-container afi-ind-conversation-grid"><div><span className="afi-ind-overline">Talk To AFII</span><h2>Have A Project<br/>In This Sector?</h2></div><div><p>Share the commercial context and the kind of advisory support you are looking for. We can begin with a focused conversation.</p><button type="button" className="afi-ind-pill" onClick={()=>setContactOpen(true)}>Discuss A Mandate <Arrow diagonal size={17}/></button></div></div></section>
    </main>
    <Footer onContact={()=>setContactOpen(true)}/>
    <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
  </>;
}
