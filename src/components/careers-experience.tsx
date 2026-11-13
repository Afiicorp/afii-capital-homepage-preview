"use client";
import { Arrow, Footer, ContactModal } from "@/components/about-experience";
import {useState} from "react";

const VALUES = [
  {
    title: "Global Exposure",
    text: "Cross-border advisory, infrastructure finance and institutional relationships sit at the core of the way AFII works. Teams are expected to think commercially, communicate clearly and understand how decisions in one market affect execution in another.",
  },
  {
    title: "Detailed Work",
    text: "Whether the task is project analysis, transaction support, industry research or leadership preparation, the standard is thoughtful work with clean presentation. Precision in writing, coordination and follow-through matters.",
  },
  {
    title: "Responsibility Early",
    text: "AFII teams are built around ownership. People are expected to take responsibility for preparation, communication and output quality rather than waiting to be directed at every step.",
  },
];

const PATHS = [
  {
    title: "Corporate Advisory & Structured Finance",
    text: "Exposure to project finance, structured capital, industry analysis, financial modelling support and execution preparation across transport, energy, industry and public infrastructure.",
  },
  {
    title: "Research, Content & Leadership Support",
    text: "High-quality documentation, transaction note preparation, market mapping, investor materials and executive support for the group leadership and business teams.",
  },
  {
    title: "Operations, Design & Digital Platforms",
    text: "Roles that strengthen internal systems, digital presence, content design, communication assets and the operating rhythm behind a professional advisory platform.",
  },
];

const BENEFITS = [
  "Work with teams active in financial advisory, infrastructure development and international projects.",
  "Client-facing work is prepared and reviewed with the discipline expected in corporate and institutional advisory.",
  "Meaningful written and analytical work that contributes directly to live business activity.",
  "Exposure to global business communication, institutional content and sector-facing execution material.",
];

export default function CareersExperience() {
  const [contactOpen,setContactOpen]=useState(false);
  return (
    <>
    <main className="afi-careers-root">
      <section className="afi-careers-hero">
        <video
          className="afi-careers-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-working-in-a-board-room-29090-large.mp4" type="video/mp4" />
        </video>
        <div className="afi-careers-overlay" />
        <div className="af-container afi-careers-hero-inner">
          <nav className="afi-careers-crumb" aria-label="Breadcrumb"><a href="/" className="afi-careers-crumb-logo" aria-label="AFII homepage"><img src="/afii-logo.jpg" alt="AFII" /></a><a href="/">Home</a><span>/</span><span>Careers</span></nav>
          <span className="afi-careers-eyebrow">Careers At AFII</span>
          <h1>Build Work That Looks<br/><em>Global, Precise And Credible.</em></h1>
          <p>
            AFII is building teams across advisory, finance, research, operations and digital execution.
            We value disciplined thinking, strong communication and the ability to turn detail into
            professional output.
          </p>
          <div className="afi-careers-hero-actions">
            <a href="mailto:reachus@afii.eu?subject=Careers%20at%20AFII" className="afi-careers-button">
              Share Your Profile <Arrow diagonal size={18} />
            </a>
            <a href="#career-paths" className="afi-careers-link">Explore career paths</a>
          </div>
        </div>
      </section>

      <section className="afi-careers-intro">
        <div className="af-container afi-careers-split">
          <div>
            <span className="afi-careers-eyebrow">Why AFII</span>
            <h2>A Corporate Environment
              <br /><em>Designed For Serious Growth.</em>
            </h2>
          </div>
          <div>
            <p>
              AFII's work spans structured finance, infrastructure, public-sector advisory, industry-facing
              corporate work and cross-border business development. That requires teams who can think in a
              detailed way, write well, move with discipline and present work at a standard appropriate for
              institutional conversations.
            </p>
            <p>
              The organisation continues to expand its operating platform, leadership support and specialist
              capabilities. Recruitment is coordinated centrally, while business functions and project needs
              continue to evolve across the group.
            </p>
          </div>
        </div>
      </section>

      <section className="afi-careers-values">
        <div className="af-container">
          <div className="afi-careers-section-head">
            <div>
              <span className="afi-careers-eyebrow">Working Principles</span>
              <h2>The Kind Of Team
                <br /><em>We Are Building.</em>
              </h2>
            </div>
          </div>
          <div className="afi-careers-grid">
            {VALUES.map((item) => (
              <article key={item.title} className="afi-careers-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="afi-careers-dark" id="career-paths">
        <div className="af-container afi-careers-split afi-careers-split--dark">
          <div>
            <span className="afi-careers-eyebrow afi-careers-eyebrow--gold">Career Paths</span>
            <h2>Different Functions.
              <br /><em>One Quality Standard.</em>
            </h2>
          </div>
          <div>
            <p>
              Roles may differ in subject matter, but the common expectation is clear: strong judgement,
              clean execution and the ability to produce work that stands up in front of clients,
              leadership teams and institutional counterparties.
            </p>
          </div>
        </div>
        <div className="af-container afi-careers-path-grid">
          {PATHS.map((item) => (
            <article key={item.title} className="afi-careers-path-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="afi-careers-benefits">
        <div className="af-container afi-careers-split">
          <div>
            <span className="afi-careers-eyebrow">What Candidates Value</span>
            <h2>Professional Exposure.
              <br /><em>Real Responsibility.</em>
            </h2>
          </div>
          <div className="afi-careers-benefit-list">
            {BENEFITS.map((item) => (
              <div key={item} className="afi-careers-benefit-item">
                <span>+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="afi-careers-cta">
        <div className="af-container afi-careers-cta-grid">
          <div>
            <span className="afi-careers-eyebrow afi-careers-eyebrow--gold">Applications</span>
            <h2>Share Your Background.
              <br /><em>We Will Review It Carefully.</em>
            </h2>
          </div>
          <div>
            <p>
              For current career opportunities, executive support roles, internships or specialist business
              functions, send your profile and area of interest to the AFII team. The recruitment process is
              coordinated directly and may include writing tests, work samples, interviews and role-specific
              evaluation.
            </p>
            <div className="afi-careers-hero-actions">
              <a href="mailto:reachus@afii.eu?subject=AFII%20Careers%20Application" className="afi-careers-button afi-careers-button--light">
                Contact Careers <Arrow diagonal size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer onContact={()=>setContactOpen(true)}/>
    <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
    </>
  );
}
