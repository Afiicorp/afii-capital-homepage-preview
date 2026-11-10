"use client";

import { useState } from "react";
import { Header, Footer, ContactModal } from "@/components/about-experience";
import "./trust-v38.css";

const framework = [
  {
    number: "01",
    title: "AFII’s Role in PPC: Not a Contractor, Not a Controller",
    body: [
      "AFII positions itself as a strategic integrator and institutional finance partner rather than an EPC contractor, vendor or procurement vehicle. The purpose is to help structure, align and support infrastructure delivery without taking over construction or supply-chain control.",
      "In practice, the project framework can be organised through a Joint Project Company, with public-sector leadership and clearly documented responsibilities agreed before capital deployment."
    ]
  },
  {
    number: "02",
    title: "Separation of Roles: Structuring vs. Investment",
    body: [
      "Structuring work, partnership coordination and early-stage design can be commissioned by the host public authority or undertaken by AFII during pre-investment assessment. That role is distinct from any equity participation.",
      "AFII Ventures may participate as a minority capital partner on separately negotiated terms, while the public side remains the centre of governance and decision-making."
    ]
  },
  {
    number: "03",
    title: "Joint Project Company (JPC): Governance Matters",
    body: [
      "The JPC serves as the institutional vehicle for delivery. The model emphasises majority public ownership, public-sector board representation, defined reserved matters and formal accountability mechanisms.",
      "AFII contributes structured capital and execution discipline, but not political leverage or control over sovereign policy."
    ]
  },
  {
    number: "04",
    title: "Transparency in Partner and Contractor Selection",
    body: [
      "Contractors, suppliers and specialist partners should be selected through open, untied and competitive processes. AFII may support benchmarking, market sounding or prequalification, but final public procurement authority should remain with the responsible institution.",
      "This preserves competitive access for local firms, international EPCs and technical specialists on equal terms."
    ]
  },
  {
    number: "05",
    title: "Revenue Sharing and Investment Returns: Aligned and Limited",
    body: [
      "The framework anticipates clearly explained compensation such as a structuring fee where applicable, dividends from minority equity participation and an agreed capital exit formula.",
      "The approach is intended to avoid opaque procurement-linked markups, privileged access to operating revenue or return expectations that undermine public affordability."
    ]
  },
  {
    number: "06",
    title: "Exit Is Built In",
    body: [
      "AFII’s investment case is not based on permanent ownership. The structure can include a documented route for buyback, secondary transfer to institutional investors or an appropriate capital-markets path once the project reaches maturity.",
      "The objective is to provide early-stage capital and structuring support while allowing long-term public or institutional stewardship to emerge over time."
    ]
  },
  {
    number: "07",
    title: "Use of Public Assets and Land: Transparent Valorization",
    body: [
      "Where land value or development rights form part of the funding framework, the model keeps public land in public ownership and treats development permissions as time-bound and purpose-bound.",
      "Commercial proceeds should be transparently allocated toward project debt service, reinvestment or the agreed public-purpose funding strategy."
    ]
  },
  {
    number: "08",
    title: "Auditability and Oversight",
    body: [
      "Projects should remain auditable through open-book style financial records, independent statutory audits and information rights appropriate to public agencies, lenders and development institutions.",
      "The intention is to make capital flows, approvals and infrastructure performance capable of credible third-party review."
    ]
  },
  {
    number: "09",
    title: "Geographic Discretion and Sovereign Protocol",
    body: [
      "AFII does not treat sovereign discussions as promotional material. Where country-level discussions are ongoing, names and details should remain confidential unless formally authorised for disclosure.",
      "Once agreements are signed and publication is permitted, the institutional relationship can be presented openly and with the appropriate context."
    ]
  },
  {
    number: "10",
    title: "Why This Matters",
    body: [
      "The PPC approach is presented as a public-first alternative for transactions that require transparent governance, balanced risk allocation and infrastructure-grade discipline rather than short-horizon financial engineering.",
      "For governments, it is a model for control without isolation. For citizens, it aims at better infrastructure without distorted incentives. For partners, it offers a framework for credible long-term participation."
    ]
  }
];

export default function TrustPage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Header onContact={() => setContactOpen(true)} />
      <main className="af-trust-v38">
        <section className="af-trust-v38-hero">
          <div className="af-container af-trust-v38-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="af-trust-v38-breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <span>Trust &amp; VDR</span>
              </nav>
              <p className="af-trust-v38-eyebrow">TRUST, TRANSPARENCY AND ETHICAL GOVERNANCE</p>
              <h1>Trust Before <em>Transaction.</em></h1>
              <p className="af-trust-v38-lede">
                AFII’s Public-Public Cooperation (PPC) framework is built around public accountability,
                clear role separation and disciplined capital participation in infrastructure projects.
              </p>
              <div className="af-trust-v38-actions">
                <a href="#trust-framework">Explore trust framework <span aria-hidden="true">↗</span></a>
                <a href="#virtual-data-room">Virtual Data Room <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <aside className="af-trust-v38-hero-aside">
              <p>A statement from AFII Group</p>
              <strong>Public-first safeguards.<br />Transparent institutional roles.<br />Capital with accountability.</strong>
              <span>Responsible infrastructure financing begins with the governance structure, not only the funding package.</span>
            </aside>
          </div>
        </section>

        <section className="af-trust-v38-intro" id="trust-framework">
          <div className="af-container af-trust-v38-intro-grid">
            <div>
              <p className="af-trust-v38-eyebrow">INTRODUCTION</p>
              <h2>Trust, Transparency, and Ethical Governance in <em>PPC Structures.</em></h2>
            </div>
            <div>
              <p>In public infrastructure, trust is not an afterthought. It is the condition that makes long-term cooperation between governments, institutions, lenders and implementation partners possible.</p>
              <p>AFII’s trust statement is designed to address the core questions that governments, development banks and oversight bodies ask: who controls the structure, how capital participates, how procurement remains open, and how accountability survives well beyond financial close.</p>
            </div>
          </div>
        </section>

        <section className="af-trust-v38-framework">
          <div className="af-container">
            <div className="af-trust-v38-heading">
              <div>
                <p className="af-trust-v38-eyebrow">THE AFII TRUST FRAMEWORK</p>
                <h2>Ten Principles for <em>Responsible Cooperation.</em></h2>
              </div>
              <p>Presented in the same institutional sequence as AFII Capital’s published Trust and VDR material, but redesigned to match this website’s editorial structure.</p>
            </div>
            <div className="af-trust-v38-list">
              {framework.map((item) => (
                <article key={item.number} className="af-trust-v38-item">
                  <div className="af-trust-v38-number">{item.number}</div>
                  <div>
                    <h3>{item.title}</h3>
                    {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="af-trust-v38-ventures">
          <div className="af-container af-trust-v38-ventures-grid">
            <div className="af-trust-v38-venture-card">
              <div className="af-trust-v38-venture-badge">AFII GROUP · DISTINCT INVESTMENT ROLE</div>
              <div className="af-trust-v38-venture-lockup">
                <img src="/afii-ventures-crest.png" alt="AFII Ventures crest" />
                <div>
                  <span>Minority capital platform</span>
                  <strong>AFII Ventures</strong>
                </div>
              </div>
            </div>
            <div>
              <p className="af-trust-v38-eyebrow">STRUCTURING VS. INVESTMENT</p>
              <h2>Capital With <em>Defined Responsibilities.</em></h2>
              <p>AFII Ventures is the investment arm referenced within AFII’s governance approach. Its role is distinct from advisory and structuring work, and any participation is subject to separately negotiated terms, public-sector approvals and the agreed governance framework.</p>
            </div>
          </div>
        </section>

        <section className="af-trust-v38-vdr" id="virtual-data-room">
          <div className="af-container af-trust-v38-vdr-grid">
            <div>
              <p className="af-trust-v38-eyebrow">VDR</p>
              <h2>AFII Capital Virtual Data Room <em>Confidential Document Upload.</em></h2>
              <p>This section supports secure submission of documents related to capital raising, infrastructure appraisals and strategic mandates with AFII.</p>
              <p>Please use the confidential project reference code provided separately by the AFII team before entering the upload form.</p>
              <div className="af-trust-v38-vdr-actions">
                <a className="af-trust-v38-primary" href="https://forms.gle/9VY2KYRjXZiLDUhb9" target="_blank" rel="noopener noreferrer">Submit Confidential Documents <span aria-hidden="true">↗</span></a>
                <a href="mailto:deals@afiicapital.com?subject=AFII%20VDR%20access%20request">deals@afiicapital.com <span aria-hidden="true">↗</span></a>
              </div>
              <p className="af-trust-v38-note">The upload form is hosted externally. Review your organisation’s disclosure permissions and privacy requirements before submitting confidential files.</p>
            </div>
            <aside className="af-trust-v38-vdr-aside">
              <div className="af-trust-v38-vdr-brand"><span>afii</span><strong>VDR</strong></div>
              <div><span>Use case</span><strong>Capital raising, appraisals and strategic mandates</strong></div>
              <div><span>Requirement</span><strong>Confidential project reference code</strong></div>
              <div><span>Support</span><a href="mailto:deals@afiicapital.com">deals@afiicapital.com</a></div>
            </aside>
          </div>
        </section>

        <section className="af-trust-v38-trademark">
          <div className="af-container af-trust-v38-trademark-grid">
            <div>
              <p className="af-trust-v38-eyebrow">TRADEMARK NOTICE</p>
              <h2>Corporate identity with <em>documented authorisation.</em></h2>
            </div>
            <div>
              <p>The trademark “AFII Corporate Finance” is owned by Mr. Mahesh Pal Singh Gandhi. It was registered under Registration No. 1380011 in Class 42 on 29 October 2008 and has been renewed with validity stated through 25 August 2035.</p>
              <p>Global usage rights for the trademark have been granted to AFII Capital Partners Limited, including the right to authorise its use by partners, affiliated entities, associated organisations and other permitted entities in accordance with the relevant authorisation.</p>
            </div>
          </div>
        </section>

        <section className="af-trust-v38-last">
          <div className="af-container af-trust-v38-last-grid">
            <div>
              <p className="af-trust-v38-eyebrow">FURTHER CLARIFICATION</p>
              <h2>Discuss the governance <em>behind the capital.</em></h2>
            </div>
            <div>
              <p>For government-level dialogue, PPC clarification or institutional governance questions, contact AFII directly.</p>
              <a href="mailto:governance@afiicapital.com?subject=PPC%20governance%20enquiry">governance@afiicapital.com <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer onContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
