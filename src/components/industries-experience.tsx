"use client";

import { useState } from "react";
import { Header, Footer, ContactModal, Arrow } from "@/components/about-experience";
import { industries, type Industry } from "@/data/industries-v20";
import IndustryIcon from "@/components/industry-icons";

function IndustryTile({ item, onActivate, isSelected, position }: { item: Industry; onActivate: () => void; isSelected: boolean; position: number }) {
  return (
    <article className={`afi-ind-tile afi-ind-tile--${position % 3} ${isSelected ? "afi-ind-tile--selected" : ""}`}>
      <button type="button" className="afi-ind-tile-button" onClick={onActivate} aria-expanded={isSelected} aria-controls="afi-ind-expanded" aria-label={`Explore ${item.title}`}>
        <img src={item.image} alt={item.imageAlt} loading="lazy" />
        <span className="afi-ind-tile-shade" />
        <span className="afi-ind-tile-icon"><IndustryIcon type={item.icon} size={32}/></span>
        <span className="afi-ind-tile-meta">{item.eyebrow}</span>
        <span className="afi-ind-tile-bottom"><strong>{item.title}</strong><span>{item.short}</span><span className="afi-ind-tile-plus" aria-hidden="true">{isSelected ? "−" : "+"}</span></span>
        <span className="afi-ind-tile-hover" aria-hidden="true">Explore This Industry <span>↗</span></span>
      </button>
    </article>
  );
}

export default function IndustriesExperience() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = industries.find((item) => item.slug === activeSlug);
  const toggle = (slug: string) => setActiveSlug((current) => current === slug ? null : slug);
  return <>
    <Header onContact={() => setContactOpen(true)}/>
    <main className="afi-ind-page">
      <section className="afi-ind-hero" aria-labelledby="afi-ind-title">
        <img className="afi-ind-hero-photo" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=88" alt="Contemporary workspace with city outlook" />
        <div className="afi-ind-hero-overlay" />
        <div className="af-container afi-ind-hero-copy">
          <nav aria-label="Breadcrumb" className="afi-ind-crumb"><a href="/">Home</a><span>/</span><span>Industries</span></nav>
          <h1 id="afi-ind-title">Understanding The Sectors<br/>Behind The Capital.</h1>
          <p>AFII Group works in capital-intensive sectors where procurement, operating performance and long-term contractual obligations shape the financing or delivery decision.</p>
        </div>
      </section>

      <section className="afi-ind-opening afi-ind-section">
        <div className="af-container afi-ind-opening-grid">
          <div><span className="afi-ind-overline">Sector Perspective</span><h2>Each Industry Has Its<br/><em>Own Financial Logic.</em></h2></div>
          <div className="afi-ind-prose"><p>AFII Group’s five specialist practices address different stages of corporate finance, public infrastructure development, enterprise credit, investment platforms and principal participation.</p><p>A property development, industrial expansion and public transport programme differ in their asset lives, counterparties and cash-flow profiles. Financing and commercial structures must follow those specific conditions.</p></div>
        </div>
      </section>

      <section className="afi-ind-showcase afi-ind-section" id="industry-directory">
        <div className="af-container">
          <div className="afi-ind-section-heading"><div><span className="afi-ind-overline">Industries We Work Across</span><h2>A Focused View Of<br/>The Real Economy.</h2></div><p>Explore AFII’s sector experience and the principal financial and commercial considerations within each industry.</p></div>
          <div className="afi-ind-tile-grid">
            {industries.map((item, index) => <IndustryTile key={item.slug} item={item} position={index} isSelected={activeSlug === item.slug} onActivate={() => toggle(item.slug)}/>) }
          </div>
          <div className={`afi-ind-expansion ${active ? "afi-ind-expansion--open" : ""}`} id="afi-ind-expanded" aria-live="polite">
            {active && <div className="afi-ind-expansion-inner">
              <div className="afi-ind-expansion-art" style={{background:active.tint}}><IndustryIcon type={active.icon} size={104}/></div>
              <div className="afi-ind-expansion-text"><span className="afi-ind-overline">Inside The Industry</span><h3>{active.title}</h3><p>{active.introduction}</p><div className="afi-ind-expansion-controls"><a href={`/industries/${active.slug}`} className="afi-ind-pill">Read The Full Perspective <Arrow diagonal size={18}/></a><button type="button" className="afi-ind-close" onClick={()=>setActiveSlug(null)}>Close <span aria-hidden="true">×</span></button></div></div>
            </div>}
          </div>
        </div>
      </section>

      <section className="afi-ind-philosophy afi-ind-section">
        <div className="afi-ind-philosophy-rings" aria-hidden="true"><span/><span/><span/></div>
        <div className="af-container afi-ind-philosophy-grid"><div><span className="afi-ind-overline">A Commercial Starting Point</span><h2>First Understand<br/>The Asset.<br/><em>Then The Funding.</em></h2></div><div><p>The economic case may depend on land rights, contracted revenues, equipment performance, public procurement or a business’s cash-conversion cycle.</p><p>For each mandate we examine the responsible counterparties, allocation of risk and source of repayment before developing the financial approach.</p><a href="/expertise" className="afi-ind-outline-link">Explore AFII Expertise <Arrow diagonal size={17}/></a></div></div>
      </section>

      <section className="afi-ind-crossroads afi-ind-section"><div className="af-container afi-ind-crossroads-grid"><div><span className="afi-ind-overline">Beyond A Single Sector</span><h2>Projects Often Cross<br/>Industry Boundaries.</h2></div><div><p>An industrial facility may require land, imported equipment and long-term financing. An infrastructure programme may involve public bodies, utilities and specialised operating assets. A transaction can rarely be understood through a sector label alone.</p><p>The sector informs the structure; the specific project contracts, cash flows and institutional requirements determine the mandate.</p></div></div></section>

      <section className="afi-ind-conversation"><div className="af-container afi-ind-conversation-grid"><div><span className="afi-ind-overline">Talk To AFII</span><h2>Discuss The Project<br/>Behind The Numbers.</h2></div><div><p>Tell us about the asset, business or financing requirement. We can help identify the right starting point for a more detailed discussion.</p><button type="button" className="afi-ind-pill" onClick={()=>setContactOpen(true)}>Start A Conversation <Arrow diagonal size={17}/></button></div></div></section>
    </main>
    <Footer onContact={()=>setContactOpen(true)}/>
    <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
  </>;
}
