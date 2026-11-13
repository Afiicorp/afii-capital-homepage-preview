"use client";
import AfiiContactForm from "@/components/afii-contact-form";
import TrustVdrNavigation from "@/components/afii-trust-nav";
import IndustryNavigation from "@/components/industry-navigation";
import ExpertiseNavigation from "@/components/expertise-navigation";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { media } from "@/data/site";
import { practices, people } from "@/data/home-v14";
import { aboutFacts, aboutMilestones, aboutValues, aboutFootprint } from "@/data/about-v16";

const CONTACT_EMAIL = "reachus@afii.eu";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Expertise", href: "/expertise" },
  { label: "Leadership & Offices", href: "/leadership-offices" },
  { label: "Transactions", href: "/transactions" },
  { label: "Trust & VDR", href: "/trust" },
  { label: "Careers", href: "/careers" },
];

export function Arrow({ diagonal = false, size = 20 }: { diagonal?: boolean; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M5 19 19 5M8 5h11v11" /> : <path d="M3 12h18m-7-7 7 7-7 7" />}
    </svg>
  );
}

export function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5A1.44 1.44 0 1 1 6.94 5.62 1.44 1.44 0 0 1 6.94 8.5ZM5.68 9.62h2.52V18H5.68V9.62Zm3.96 0h2.41v1.15h.03c.34-.64 1.16-1.32 2.39-1.32 2.55 0 3.02 1.68 3.02 3.86V18h-2.51v-4.14c0-.99-.02-2.27-1.38-2.27-1.38 0-1.59 1.08-1.59 2.2V18H9.64V9.62Z" />
    </svg>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  const [source, setSource] = useState("/afii-logo.jpg");
  const [fallback, setFallback] = useState(false);

  return (
    <a href="/" aria-label="AFII — home" className={`af-brand ${footer ? "af-brand--footer" : ""}`}>
      {fallback ? (
        <span className="af-brand-fallback">afii</span>
      ) : (
        <img
          alt="AFII"
          src={source}
          onError={() => {
            if (source.endsWith(".jpg")) setSource("/afii-logo.png");
            else setFallback(true);
          }}
        />
      )}
    </a>
  );
}

export function Header({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 55);
    listener();
    window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    document.body.classList.toggle("af-menu-open", open);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.classList.remove("af-menu-open");
    };
  }, [open]);

  return (
    <>
      <header className={`af-header ${scrolled ? "af-header--scrolled" : ""}`}>
        <div className="af-header-inner">
          <Brand />
          <nav className="af-desktop-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              item.label === "Expertise" ? (
                <ExpertiseNavigation key={item.href} />
              ) : item.label === "Industries" ? (
                <IndustryNavigation key={item.href} />
              ) : item.label === "Trust & VDR" ? (
                <TrustVdrNavigation key={item.href} />
              ) : (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              )
            ))}
          </nav>
          <div className="af-header-actions">
            <a
              className="af-employee-login"
              href="https://erp.afii.biz"
              aria-label="Employee Login - AFII HRMS"
              title="AFII Employee Login"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              <span className="af-employee-login-full">Employee Login</span>
              <span className="af-employee-login-short">Login</span>
            </a>
            <button className="af-contact-trigger" type="button" onClick={onContact} aria-label="Contact AFII">
              <MailIcon size={23} />
            </button>
            <button
              type="button"
              className="af-mobile-trigger"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`af-mobile-menu ${open ? "af-mobile-menu--open" : ""}`} aria-hidden={!open} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {item.label}
              <Arrow diagonal />
            </a>
          ))}
          <a className="af-mobile-vdr-link" href="/trust#virtual-data-room" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Virtual Data Room <Arrow diagonal /></a>
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => {
              setOpen(false);
              onContact();
            }}
          >
            Contact AFII
            <Arrow diagonal />
          </button>
        </nav>
      </div>
    </>
  );
}

function Lotus({ side = "right", className = "" }: { side?: "left" | "right"; className?: string }) {
  const petals = [-78, -60, -41, -21, 0, 21, 41, 60, 78];

  return (
    <div className={`af-lotus af-lotus--${side} ${className}`} aria-hidden="true" data-lotus>
      <svg viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <circle className="af-orbit af-orbit--outer" cx="0" cy="360" r="353" pathLength="100" strokeDasharray="22 12 24 42" />
        <circle className="af-orbit af-orbit--inner" cx="0" cy="360" r="282" pathLength="100" strokeDasharray="28 14 18 40" />
        <g className="af-lotus-flower">
          {petals.map((angle, index) => (
            <path
              key={angle}
              className={`af-petal af-petal-${index}`}
              style={{ "--petal-rotation": `${angle}deg`, "--petal-delay": `${index * 70}ms` } as CSSProperties}
              d="M0 360 C66 310 145 290 251 360 C145 430 66 410 0 360Z"
            />
          ))}
          <path className="af-lotus-root" d="M0 348 Q24 360 0 372" />
        </g>
      </svg>
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div data-reveal className={className} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

function Breadcrumb({ trail }: { trail: string }) {
  return (
    <div className="af-breadcrumb">
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
      <span>{trail}</span>
    </div>
  );
}

function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (current !== media.heroFallback) setCurrent(media.heroFallback);
      }}
    />
  );
}

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <AfiiContactForm open={open} onClose={onClose} />;
}

export function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="af-footer">
      <div className="af-container">
        <div className="af-footer-top">
          <div>
            <Brand footer />
            <p>
              Financial advisory, infrastructure development and investment-related businesses.
              <br />
              Specialist capabilities connected through AFII Group.
            </p>
          </div>
          <div className="af-footer-right">
            <button type="button" onClick={onContact}>
              Start a conversation
              <Arrow diagonal />
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="af-footer-social" aria-label="AFII social media">
          <a href="https://www.linkedin.com/company/afii-corporate-advisors-ltd-/" target="_blank" rel="noopener noreferrer" aria-label="AFII CORP on LinkedIn" title="AFII CORP on LinkedIn">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M5.75 8.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4.2 9.8h3.1v9.1H4.2zm5.08 0h2.98v1.24h.04c.43-.78 1.47-1.45 3.06-1.45 3.28 0 3.89 2.08 3.89 4.8v4.51h-3.1v-4.0c0-.95-.02-2.16-1.4-2.16-1.41 0-1.63 1.07-1.63 2.09v4.07H9.28z"/></svg>
          </a>
          <a href="https://www.facebook.com/afiicapitalgmbh/" target="_blank" rel="noopener noreferrer" aria-label="AFII Capital on Facebook" title="AFII Capital on Facebook">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M13.7 20v-7.2h2.45l.37-2.82H13.7V8.18c0-.82.22-1.37 1.41-1.37h1.51V4.28c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v1.97H8.14v2.82h2.5V20z"/></svg>
          </a>
        </div>
        <div className="af-footer-line" />
        <div className="af-footer-bottom">
          <span>© {new Date().getFullYear()} AFII</span>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/legal-notice">Legal Notice</a>
            <a href="/cookies">Cookies</a>
            <button type="button" className="af-footer-cookie-button" onClick={() => window.dispatchEvent(new Event("afii:manage-cookies"))}>Cookie Preferences</button>
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MiniIcon({ kind }: { kind: string }) {
  switch (kind) {
    case "calendar":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>;
    case "compass":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="m9 15 2-6 6-2-2 6-6 2Z"/></svg>;
    case "network":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8 11l7.8-4M8 13l7.8 4"/></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 5 6v5c0 5 3.4 8.2 7 10 3.6-1.8 7-5 7-10V6l-7-3Z"/><path d="m9.4 12 1.8 1.8 3.6-3.9"/></svg>;
    default:
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></svg>;
  }
}


export default function AboutExperience() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activePerson, setActivePerson] = useState<number | null>(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-lotus]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("af-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("af-visible");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activePerson === null) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(".af-person")) setActivePerson(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [activePerson]);


  const togglePerson = (index: number) => {
    setActivePerson((current) => (current === index ? null : index));
  };

  return (
    <>
      <Header onContact={() => setContactOpen(true)} />
      <main id="top">
        <section className="af-about-hero af-container" aria-labelledby="af-about-heading">
          <div className="af-about-hero-breadcrumb">
            <Breadcrumb trail="About" />
          </div>
          <div className="af-about-hero-grid">
            <Reveal className="af-about-hero-copy">
              <p className="af-about-kicker">About AFII</p>
              <h1 id="af-about-heading">Built Around Projects. Structured For Long-Term Outcomes.</h1>
              <p className="af-about-lead">AFII Group brings together specialist advisory, infrastructure-development and investment-related businesses. Its corporate advisory heritage dates to 1996.</p>
              <div className="af-about-links">
                <a href="#afii-story" className="af-inline-link">Read our story <Arrow diagonal size={17} /></a>
              </div>
            </Reveal>
            <Reveal className="af-about-anniversary-wrap" delay={120}>
              <img
                className="af-about-anniversary-image"
                src="/afii-anniversary-30.png"
                width={1774}
                height={887}
                alt="AFII — 30 plus years anniversary, since 1996"
                decoding="async"
              />
            </Reveal>
          </div>
          <div className="af-about-fact-grid">
            {aboutFacts.map((item, index) => (
              <Reveal key={item.label} delay={100 + index * 70} className="af-about-fact-card">
                <div className="af-about-fact-icon"><MiniIcon kind={item.icon} /></div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.note}</small>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="af-about-story af-section" id="afii-story">
          <Lotus side="right" className="af-about-page-lotus" />
          <div className="af-container af-about-story-grid">
            <Reveal className="af-about-story-media">
              <ResponsiveImage src={media.finance} alt="AFII advisory and capital markets context" />
            </Reveal>
            <Reveal className="af-about-story-copy" delay={90}>
              <p className="af-about-kicker">How the firm evolved</p>
              <h2>From Proprietary Investments To A Broader Advisory Platform.</h2>
              <p>AFII’s corporate advisory origins date to 1996, with an expansion into infrastructure and real estate financial advisory in 2001. The work developed across structured capital, project finance and international commercial transactions.</p>
              <p>Under the leadership of Dr. Mahesh P. S. Gandhi, Chairman of the Group, AFII also developed and managed structured trade finance products for State Bank of India, advised infrastructure companies on complex equity and debt structuring and supported capital raising for promoter-led positions through global mezzanine finance.</p>
              <p>Over time, AFII expanded its focus to infrastructure incubation, public-enterprise collaboration, enterprise finance and the development of investment-platform strategies. Today these activities sit within specialist practices with distinct responsibilities.</p>
            </Reveal>
          </div>
        </section>

        <section className="af-about-timeline af-section">
          <Lotus side="left" className="af-about-timeline-lotus" />
          <div className="af-container">
            <Reveal className="af-about-section-head">
              <div>
                <p className="af-about-kicker">A continuing timeline</p>
                <h2>Key Steps In The AFII Story.</h2>
              </div>
              <p>The timeline traces AFII’s advisory heritage and the development of its financial, infrastructure and investment-related practices.</p>
            </Reveal>
            <div className="af-about-milestones">
              {aboutMilestones.map((item, index) => (
                <Reveal className={`af-about-milestone af-about-milestone--${index % 2 === 0 ? "left" : "right"}`} key={item.year} delay={index * 90}>
                  <div className="af-about-milestone-year">{item.year}</div>
                  <div className="af-about-milestone-card">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="af-about-values af-section">
          <div className="af-container af-about-values-grid">
            <Reveal>
              <p className="af-about-kicker">What shapes the approach</p>
              <h2>Practical Thinking. Institutional Discipline. Project Responsibility.</h2>
            </Reveal>
            <div className="af-about-values-list">
              {aboutValues.map((item, index) => (
                <Reveal key={item.title} delay={index * 80} className="af-about-value-card">
                  <div className="af-about-value-icon"><MiniIcon kind={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="af-about-practices af-section">
          <div className="af-container">
            <Reveal className="af-about-section-head">
              <div>
                <p className="af-about-kicker">Business lines</p>
                <h2>How The Work Is Organized.</h2>
              </div>
              <p>AFII Group organises its activities into five specialist practices. Financial advisory, infrastructure origination, SME finance, investment-platform development and principal investment retain distinct responsibilities.</p>
            </Reveal>
            <div className="af-about-practice-grid">
              {practices.map((item, index) => (
                <Reveal key={item.name} delay={index * 75} className="af-about-practice-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="af-about-practice-links">
                    <a href={index < 3 ? "/expertise" : "/industries"}>{index < 3 ? "Explore expertise" : "View related sectors"}</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="af-about-footprint af-section">
          <div className="af-container af-about-footprint-grid">
            <Reveal className="af-about-footprint-copy">
              <p className="af-about-kicker">Markets & execution</p>
              <h2>A Cross-Border Network With Defined Responsibilities.</h2>
              <p>AFII’s constituent businesses and professional relationships connect Europe, India, the Middle East and Southeast Asia. Local advisers and specialist partners support mandates in the relevant markets.</p>
              <div className="af-about-footprint-tags">
                {aboutFootprint.map((location) => (
                  <span key={location}>{location}</span>
                ))}
              </div>
            </Reveal>
            <Reveal className="af-about-footprint-media" delay={120}>
              <div className="af-about-footprint-stack">
                <ResponsiveImage src={media.trade} alt="Urban business district and cross-border trade" />
                <ResponsiveImage src={media.bridge} alt="Infrastructure and long-horizon assets" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="af-leadership af-section" id="leadership">
          <div className="af-container">
            <div className="af-leadership-heading">
              <Reveal>
                <Breadcrumb trail="Leadership & Offices" />
                <h2>
                  The People Behind <span>The Work.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p>AFII works with specialists in financing, infrastructure and international partnerships, selected according to the requirements of the engagement.</p>
              </Reveal>
            </div>
                {/* AFII_PRODUCTION_POLISH_V3_0: keep the full portrait gallery in the leadership directory. */}
            <div className="af-leadership-editorial">
              <div><p className="af-leadership-editorial-kicker">Our People</p><h3>Advice Shaped By Experience.</h3></div>
              <div><p>The leadership and advisory network covers capital structuring, infrastructure development, investment strategy and cross-border commercial work.</p><a className="af-inline-link" href="/leadership-offices">Explore Leadership &amp; Offices <Arrow diagonal size={18}/></a></div>
            </div>
            <div className="af-leadership-directory-link"><a href="/leadership-offices" className="af-inline-link">Meet Our Full Leadership And Office Network <Arrow diagonal size={17} /></a></div>
          </div>
        </section>

        <section className="af-cta" id="contact">
          <div className="af-container af-cta-grid">
            <Reveal>
              <h2>
                Let&apos;s discuss what
                <br />
                <span>you&apos;re working on.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="af-cta-right">
              <p>Share the nature of your project or financing requirement and the relevant jurisdiction. The appropriate AFII practice will review your enquiry.</p>
              <button type="button" onClick={() => setContactOpen(true)} className="af-pill-link">
                Start a conversation
                <Arrow diagonal size={18} />
              </button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer onContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
