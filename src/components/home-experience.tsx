"use client";
import { GeoMap } from "@/components/leadership-offices-experience";
import AfiiContactForm from "@/components/afii-contact-form";
import TrustVdrNavigation from "@/components/afii-trust-nav";
import IndustryNavigation from "@/components/industry-navigation";
import ExpertiseNavigation from "@/components/expertise-navigation";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { media } from "@/data/site";
import { practices, sectors, people } from "@/data/home-v14";

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

const PRINCIPLES = [
  {
    head: "Understand the business",
    desc: "Start with the asset, the cash flows and the stakeholders—not a ready-made product.",
  },
  {
    head: "Shape the structure",
    desc: "Consider a financing route in light of risk, time horizon and commercial feasibility.",
  },
  {
    head: "Keep the long view",
    desc: "Good terms should make sense through the life of a project, not only at signing.",
  },
];

function Arrow({ diagonal = false, size = 20 }: { diagonal?: boolean; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? <path d="M5 19 19 5M8 5h11v11" /> : <path d="M3 12h18m-7-7 7 7-7 7" />}
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5A1.44 1.44 0 1 1 6.94 5.62 1.44 1.44 0 0 1 6.94 8.5ZM5.68 9.62h2.52V18H5.68V9.62Zm3.96 0h2.41v1.15h.03c.34-.64 1.16-1.32 2.39-1.32 2.55 0 3.02 1.68 3.02 3.86V18h-2.51v-4.14c0-.99-.02-2.27-1.38-2.27-1.38 0-1.59 1.08-1.59 2.2V18H9.64V9.62Z" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
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

function Header({ onContact }: { onContact: () => void }) {
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

// AFII_PRODUCTION_POLISH_V3_0: concentric partial-arc disc, not a lotus.
function OrbitDisk({ side = "right", className = "" }: { side?: "left" | "right"; className?: string }) {
  return (
    <div className={"af-orbit-disc af-orbit-disc--" + side + " " + className} aria-hidden="true">
      <svg viewBox="0 0 300 300" fill="none" focusable="false">
        <circle className="af-orbit-ring af-orbit-ring--outer" cx="150" cy="150" r="141"/>
        <circle className="af-orbit-ring af-orbit-ring--inner" cx="150" cy="150" r="112"/>
        <circle className="af-orbit-center" cx="150" cy="150" r="74"/>
        <circle className="af-orbit-core" cx="150" cy="150" r="42"/>
      </svg>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.28 },
    );
    obs.observe(video);
    return () => {
      obs.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section className="af-film" aria-label="Infrastructure in motion">
      <div className="af-marquee" aria-label="AFII expertise in project finance and international infrastructure">
        <div className="af-marquee-track" aria-hidden="true">
          {[0, 1].map((key) => (
            <div className="af-marquee-set" key={key}>
              {["PROJECT FINANCE", "INTERNATIONAL TRADE", "INFRASTRUCTURE", "EQUIPMENT FINANCE", "CAPITAL ADVISORY"].map((text) => (
                <span key={text}>
                  {text}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="af-film-screen">
        {available ? (
          <video
            ref={ref}
            muted
            loop
            playsInline
            preload="metadata"
            poster=""
            src={media.filmVideo}
            onError={() => setAvailable(false)}
            aria-label="Urban infrastructure footage"
          />
        ) : (
          <ResponsiveImage src={media.filmPoster} alt="Urban infrastructure" />
        )}
        <div className="af-film-tools">
          <span>Finance for the real economy.</span>
          {available && (
            <button
              type="button"
              onClick={() => {
                const video = ref.current;
                if (!video) return;
                if (video.paused) {
                  void video.play().then(() => setPlaying(true)).catch(() => {});
                } else {
                  video.pause();
                  setPlaying(false);
                }
              }}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? "Pause" : "Play"}
              <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <AfiiContactForm open={open} onClose={onClose} />;
}

function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="af-footer">
      <div className="af-container">
        <div className="af-footer-top">
          <div>
            <Brand footer />
            <p>
              Structured finance and infrastructure advisory.
              <br />
              A practical perspective on capital and the projects behind it.
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

export default function HomeExperience() {
  const [selected, setSelected] = useState(0);
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
      { rootMargin: "0px 0px -5% 0px", threshold: 0.08 },
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
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePerson(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    window.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      window.removeEventListener("keydown", onEscape);
    };
  }, [activePerson]);

  const togglePerson = (index: number) => {
    setActivePerson((current) => (current === index ? null : index));
  };

  const active = practices[selected];

  return (
    <>
      <Header onContact={() => setContactOpen(true)} />
      <main id="top">
        <section className="af-hero af-container" aria-labelledby="af-hero-heading">
          <div className="af-hero-breadcrumb">
            <Breadcrumb trail="AFII" />
          </div>
          <div className="af-hero-grid">
            <Reveal className="af-hero-title">
              <h1 id="af-hero-heading">
                Finance For <span>What Comes Next.</span>
              </h1>
            </Reveal>
            <Reveal className="af-hero-summary" delay={130}>
              <p>Structured finance and advisory for infrastructure, business and international trade. We begin with the commercial realities of each project.</p>
              <a href="#expertise" className="af-inline-link">
                Explore our expertise
                <Arrow diagonal size={18} />
              </a>
            </Reveal>
          </div>
          <Reveal className="af-hero-photo" delay={210}>
            <ResponsiveImage src={media.hero} alt="Illustrative executive boardroom overlooking a financial district" />
            <div className="af-hero-caption">AFII <span>·</span> Structured Finance & Infrastructure Investments</div>
          </Reveal>
        </section>

        <section className="af-introduction af-section" id="about">
          <div className="af-container af-intro-grid">
            <Reveal>
              <h2>
                Good Finance Begins With <span>Understanding.</span>
              </h2>
            </Reveal>
            <Reveal className="af-intro-text" delay={110}>
              <p>A new project, an established business and a cross-border transaction each call for a different approach to capital. The first task is to understand how the business works, where the risks sit and what the financing needs to achieve.</p>
              <p>AFII advises on structured funding and related commercial arrangements for companies, sponsors and institutions working across sectors and borders.</p>
              <a href="/about" className="af-inline-link">
                About AFII
                <Arrow diagonal size={18} />
              </a>
            </Reveal>
            <OrbitDisk side="right" />
          </div>
        </section>

        <section className="af-expertise af-section" id="expertise">
          <div className="af-container">
            <Reveal className="af-section-header">
              <div>
                <h2>
                  Different mandates.
                  <br />
                  <span>Different ways forward.</span>
                </h2>
              </div>
              <p>Our work extends across five connected practice areas. Each brings a different set of considerations to the table.</p>
            </Reveal>
            <div className="af-practice-layout">
              <div className="af-practice-grid" role="group" aria-label="AFII areas of expertise">
                {practices.map((item, index) => (
                  <Reveal className="af-practice-reveal" key={item.name} delay={index * 80}>
                    <button
                      className={`af-practice-pill ${selected === index ? "af-practice-pill--active" : ""}`}
                      type="button"
                      onClick={() => setSelected(index)}
                      onMouseEnter={() => setSelected(index)}
                      onFocus={() => setSelected(index)}
                      aria-pressed={selected === index}
                    >
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                      <i>
                        <Arrow diagonal size={19} />
                      </i>
                    </button>
                  </Reveal>
                ))}
              </div>
              <Reveal className="af-practice-detail" delay={180}>
                <div className="af-practice-detail-panel" key={`${selected}-${active.name}`}>
                  <div className="af-practice-image">
                    <ResponsiveImage src={active.image} alt={`Representative photograph for ${active.name}`} />
                  </div>
                  <h3>{active.name}</h3>
                  <p>{active.description}</p>
                  <a href="/expertise" className="af-inline-link">
                    Explore expertise
                    <Arrow diagonal size={18} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="af-industries af-section" id="industries">
          <div className="af-container">
            <div className="af-industry-head">
              <Reveal>
                <h2>
                  The work behind
                  <br />
                  <span>the economy.</span>
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p>From essential energy systems to transport networks and manufacturing, each industry brings its own financing needs.</p>
              </Reveal>
            </div>
            <div className="af-industry-grid">
              {sectors.map((sector, index) => (
                <Reveal key={sector.title} delay={index * 110}>
                  <a className="af-industry-card" href="/industries">
                    <div className="af-industry-image">
                      <ResponsiveImage src={sector.src} alt={sector.title} />
                    </div>
                    <div className="af-industry-caption">
                      <div>
                        <h3>{sector.title}</h3>
                        <p>{sector.copy}</p>
                      </div>
                      <Arrow diagonal size={23} />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <OrbitDisk side="left" className="af-industry-orbit" />
        </section>

        <VideoSection />

        <section className="af-approach af-section" id="approach">
          <div className="af-container">
            <Reveal>
              <h2>
                Beyond the <span>term sheet.</span>
              </h2>
            </Reveal>
            <div className="af-approach-grid">
              <Reveal className="af-approach-image">
                <ResponsiveImage src={media.bridge} alt="Architecture and infrastructure project" />
              </Reveal>
              <Reveal className="af-approach-copy" delay={100}>
                <h3>Sound decisions start with the right questions.</h3>
                <p>What will the capital fund? How will the asset operate? What obligations will remain after the financing closes?</p>
                <p>We look at the full commercial picture, working through the structure, counterparties and practical constraints before recommending a way forward.</p>
                <a href="/about" className="af-inline-link">
                  Our approach
                  <Arrow diagonal size={18} />
                </a>
              </Reveal>
            </div>
          </div>
          <OrbitDisk side="right" className="af-approach-orbit" />
        </section>

        <section className="af-principles af-section">
          <div className="af-container af-principles-grid">
            <Reveal>
              <h2>
                Clarity is part of <span>the work.</span>
              </h2>
              <p>Complex finance becomes easier to discuss when the decisions, responsibilities and trade-offs are made clear.</p>
            </Reveal>
            <div className="af-principles-list">
              {PRINCIPLES.map((principle, index) => (
                <Reveal
                  key={principle.head}
                  delay={index * 90}
                  className={`af-principle af-principle--${index % 2 === 0 ? "left" : "right"}`}
                >
                  <h3>{principle.head}</h3>
                  <p>{principle.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Lotus side="left" />
        </section>

        <section className="af-leadership af-section" id="leadership">
          <div className="af-container">
            <div className="af-leadership-heading">
              <Reveal>
                <Breadcrumb trail="Leadership & Offices" />
                <h2>
                  People behind <span>the perspective.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p>Leadership across financial structuring, infrastructure and international markets brings specialist perspectives to each mandate.</p>
              </Reveal>
            </div>
                {/* AFII_PRODUCTION_POLISH_V3_0: full leadership directory holds the portraits; homepage is typographic. */}
            <div className="af-leadership-editorial">
              <div>
                <p className="af-leadership-editorial-kicker">People &amp; Perspective</p>
                <h3>Experience In Finance. Perspective Across Markets.</h3>
              </div>
              <div>
                <p>AFII works through senior leadership, sector specialists and international partners. Advisory teams are assembled around the particular financing, institutional and execution requirements of each mandate.</p>
                <a className="af-inline-link" href="/leadership-offices">Meet AFII Leadership <Arrow diagonal size={18}/></a>
              </div>
            </div>
            <Reveal className="af-people-link">
              <a href="/leadership-offices" className="af-inline-link">
                Leadership & offices
                <Arrow diagonal size={18} />
              </a>
            </Reveal>
                        {/* AFII_HOME_OFFICE_MAP_V4_0_3: exact Leadership & Offices map, compact presentation only. */}
            <div className="af-home-office-map-clone">
              <GeoMap />
              <a className="af-home-office-map-link" href="/leadership-offices#global-map">Explore all offices <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="af-transaction af-section">
          <div className="af-container af-transaction-grid">
            <Reveal>
              <h2>
                Experience across <span>transactions and sectors.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p>AFII’s published work spans infrastructure, finance and industrial activity. Individual transaction details are presented only where disclosure is appropriate.</p>
              <a href="/transactions" className="af-inline-link">
                Transactions
                <Arrow diagonal size={18} />
              </a>
            </Reveal>
          </div>
          <OrbitDisk side="right" />
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
              <p>For a project, financing requirement or advisory conversation, write to the team and we’ll direct your enquiry appropriately.</p>
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
