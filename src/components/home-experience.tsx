"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  capabilities,
  email,
  focusThemes,
  industries,
  media,
} from "@/data/site";

type IconProps = { size?: number; strokeWidth?: number; className?: string };

function ArrowUpRight({ size = 20, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

function ArrowDown({ size = 18, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
      <path d="M12 4v16m-7-7 7 7 7-7" />
    </svg>
  );
}

function ArrowRight({ size = 20, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
      <path d="M4 12h16m-7-7 7 7-7 7" />
    </svg>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span className={`menu-glyph ${open ? "menu-glyph--open" : ""}`} aria-hidden="true">
      <span /><span />
    </span>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  // Keep the real AFII file intact; a text fallback is shown if no file is supplied.
  const [logo, setLogo] = useState("/afii-logo.jpg");
  const [showFallback, setShowFallback] = useState(false);
  const tryNextLogo = () => {
    if (logo === "/afii-logo.jpg") setLogo("/afii-logo.png");
    else setShowFallback(true);
  };
  return (
    <a className={`wordmark wordmark--official ${light ? "wordmark--light" : ""}`} href="#top" aria-label="AFII Capital — back to top">
      {showFallback ? (
        <span className="official-brand-fallback"><strong>afii</strong><small>CAPITAL</small></span>
      ) : (
        <img className="official-brand-image" src={logo} alt="AFII Capital" onError={tryNextLogo} />
      )}
    </a>
  );
}

function MediaImage({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [current, setCurrent] = useState(src);
  return <img className={className} src={current} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : undefined} onError={() => { if (current !== media.heroFallback) setCurrent(media.heroFallback); }} />;
}

function Header({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", open);
    const keyHandler = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", keyHandler);
    return () => { document.body.classList.remove("menu-is-open"); window.removeEventListener("keydown", keyHandler); };
  }, [open]);

  const closeMenu = () => setOpen(false);
  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${open ? "site-header--open" : ""}`}>
        <div className="header-inner page-shell">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#expertise">Expertise</a>
            <a href="#industries">Industries</a>
            <a href="#approach">Our approach</a>
            <a href="#perspectives">Perspectives</a>
          </nav>
          <div className="header-actions">
            <button className="header-contact" type="button" onClick={onOpenContact}>Discuss a mandate <ArrowUpRight size={15} /></button>
            <button type="button" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-site-menu" onClick={() => setOpen(!open)}><MenuGlyph open={open} /></button>
          </div>
        </div>
      </header>
      <div id="mobile-site-menu" className={`menu-panel ${open ? "menu-panel--open" : ""}`} aria-hidden={!open}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {[
            ["Our expertise", "#expertise"],
            ["Industries", "#industries"],
            ["Our approach", "#approach"],
            ["Perspectives", "#perspectives"],
            ["Contact", "#contact"],
          ].map(([name, href]) => (
            <a tabIndex={open ? 0 : -1} href={href} onClick={closeMenu} key={name}><span>{name}</span><ArrowUpRight size={24}/></a>
          ))}
        </nav>
        <div className="mobile-menu-bottom"><span>STRUCTURED FINANCE & INFRASTRUCTURE ADVISORY</span><span>AFII CAPITAL</span></div>
      </div>
    </>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) { if (event.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title">
        <div className="dialog-top"><span className="dialog-heading">Start a conversation</span><button className="dialog-close" onClick={onClose} type="button" aria-label="Close contact dialog">×</button></div>
        <h2 id="contact-dialog-title">Every project begins with a conversation.</h2>
        <p>Tell us a little about your project, financing requirement or transaction. Our team can assess the appropriate next discussion.</p>
        <a className="button-dark" href={`mailto:${email}?subject=AFII%20Capital%20%E2%80%94%20Mandate%20enquiry`}>Write to {email} <ArrowUpRight size={18} /></a>
        <span className="dialog-note">Your email application will open with a new message.</span>
      </section>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); cancelAnimationFrame(raf); };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}

function FilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const video = videoRef.current;
    if (!video || mediaQuery.matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        video.pause(); setIsPlaying(false);
      }
    }, { threshold: 0.28 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    else { video.pause(); setIsPlaying(false); }
  };

  return (
    <section className="film-section" aria-label="The infrastructure behind the economy">
        <div className="film-marquee" aria-label="AFII Capital — project finance, trade finance, equipment finance and advisory">
          <div className="film-marquee-track" aria-hidden="true">
            {[0, 1].map((repeat) => (
              <div className="film-marquee-set" key={repeat}>
                {["Project finance", "Trade finance", "Infrastructure advisory", "Equipment finance", "Cross-border transactions", "Capital structuring"].map((title) => (
                  <span className="film-marquee-item" key={`${repeat}-${title}`}><span className="film-marquee-dot" />{title}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      <div className="film-media">
        <MediaImage src={media.filmPoster} alt="Major city and infrastructure seen in the evening" className="film-poster" />
        {isAvailable && <video ref={videoRef} className="film-video" src={media.filmVideo} playsInline muted loop preload="none" aria-label="Moving city infrastructure footage" onError={() => setIsAvailable(false)} />}
        <div className="film-vignette" />
      </div>
      <div className="film-content page-shell">
        <div className="film-top-spacer" aria-hidden="true" />
        <h2 data-reveal="up">The real economy<br /><em>doesn&apos;t stand still.</em></h2>
        <div className="film-bottom"><p>Capital decisions shape the assets, systems and industries people rely on. The structure behind them matters.</p>
          {isAvailable && !reducedMotion && <button className="film-control" type="button" onClick={toggle} aria-label={isPlaying ? "Pause background video" : "Play background video"}><span>{isPlaying ? "Ⅱ" : "▶"}</span>{isPlaying ? "Pause film" : "Play film"}</button>}
        </div>
      </div>
    </section>
  );
}

export default function HomeExperience() {
  const [selected, setSelected] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const closeContact = useCallback(() => setContactOpen(false), []);

  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return () => { document.documentElement.classList.remove("js-ready"); };
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -9% 0px", threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => { observer.disconnect(); document.documentElement.classList.remove("js-ready"); };
  }, []);

  const capability = capabilities[selected];
  const navigateFromIndustry = (index: number) => {
    setSelected(index);
    document.getElementById("expertise")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <ScrollProgress />
      <Header onOpenContact={() => setContactOpen(true)} />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-top page-shell">
            <div className="hero-kicker hero-entrance hero-entrance--one"><span className="kicker-dot" /> STRUCTURED FINANCE <span className="hero-kicker-divider">/</span> INFRASTRUCTURE ADVISORY</div>
            <div className="hero-main">
              <div className="hero-headline"><h1 id="hero-title"><span className="hero-entrance hero-entrance--two">Financing what</span><span className="hero-entrance hero-entrance--three"><em>comes next.</em></span></h1></div>
              <div className="hero-side hero-entrance hero-entrance--four"><p>Financial thinking for infrastructure, industry and international trade — grounded in the realities of each project.</p><a className="text-link" href="#expertise"><span>Explore our expertise</span><ArrowUpRight size={18} /></a></div>
            </div>
          </div>
          <div className="hero-media hero-entrance hero-entrance--five">
            <MediaImage src={media.hero} eager alt="International marine logistics and infrastructure" className="hero-image" />
            <div className="hero-image-scrim" />
            <div className="hero-image-bottom page-shell"><div className="hero-photo-caption"><span className="small-plus">+</span><span>CAPITAL. PROJECTS. PERSPECTIVE.</span></div><a className="hero-scroll" href="#introduction"><span>Scroll to discover</span><ArrowDown size={17} /></a></div>
          </div>
        </section>

        <section id="introduction" className="intro section-pad page-shell" aria-labelledby="intro-title">
          <div className="intro-body"><h2 id="intro-title" className="display-heading" data-reveal="up">Good finance<br />starts with <em>understanding.</em></h2><div className="intro-copy" data-reveal="up"><p>Every project has its own commercial logic. Its own risks, relationships and long-term obligations. Financing it well begins by understanding those realities — not by reaching for a standard formula.</p><p>AFII Capital works across structured finance and infrastructure advisory, helping businesses and project sponsors consider the capital structures and counterparties suited to their ambitions.</p><a className="underlined-link" href="#approach">How we approach a mandate <ArrowUpRight size={18}/></a></div></div>
        </section>

        <section id="expertise" className="expertise" aria-labelledby="expertise-title">
          <div className="page-shell"><div className="expertise-title-row" data-reveal="up"><h2 id="expertise-title" className="display-heading">Finance, shaped<br /><em>around the project.</em></h2><p>Choose an area to see the kind of financing questions we help clients work through.</p></div></div>
          <div className="expertise-layout page-shell">
            <div className="expertise-list" role="group" aria-label="Select an area of expertise">
              {capabilities.map((item, i) => (
                <div className="expertise-bubble-reveal" key={item.title} data-reveal="bubble" style={{ transitionDelay: `${i * 70}ms` }}>
                  <button type="button" className={`expertise-item ${selected === i ? "expertise-item--active" : ""}`} aria-pressed={selected === i} onMouseEnter={() => setSelected(i)} onFocus={() => setSelected(i)} onClick={() => setSelected(i)}>
                    <span className="exp-text"><span className="exp-title">{item.title}</span><span className="exp-short">{item.short}</span></span>
                    <span className="exp-arrow"><ArrowUpRight size={23}/></span>
                  </button>
                </div>
              ))}
            </div>
            <div className="expertise-detail" aria-live="polite"><div className="expertise-image-wrap"><MediaImage key={capability.image} src={capability.image} alt={`${capability.title} — representative infrastructure and business imagery`} className="expertise-image" /></div><div className="expertise-description"><p>{capability.description}</p></div></div>
          </div>
        </section>

        <section id="industries" className="industries section-pad" aria-labelledby="industries-title">
          <div className="page-shell industries-heading"><div data-reveal="up"><h2 id="industries-title" className="display-heading">Real assets.<br /><em>Lasting purpose.</em></h2></div><p data-reveal="up">From essential infrastructure to the assets that keep economies moving, our work crosses industries and geographies.</p></div>
          <div className="industries-editorial page-shell">
            {industries.map((industry, index) => <button className={`industry-tile industry-tile--${index + 1}`} onClick={() => navigateFromIndustry(industry.capabilityIndex)} key={industry.title} type="button" aria-label={`Explore finance related to ${industry.title}`} data-reveal="up"><MediaImage src={industry.image} alt={`Representative photography of ${industry.title}`} className="industry-image" /><span className="industry-shade" /><span className="industry-top"><ArrowUpRight size={22}/></span><span className="industry-bottom"><strong>{industry.title}</strong><small>{industry.label}</small></span></button>)}
          </div>
          <p className="industries-foot page-shell">Select an industry to explore related expertise.</p>
        </section>

        <FilmSection />

        <section id="approach" className="approach section-pad page-shell" aria-labelledby="approach-title">
          <div className="approach-head" data-reveal="up"><h2 id="approach-title" className="display-heading">Beyond the<br /><em>term sheet.</em></h2></div>
          <div className="approach-layout"><div className="approach-photo" data-reveal="image"><MediaImage src={media.bridge} alt="Monumental modern architecture illustrating complex long-term projects" /></div><div className="approach-story" data-reveal="up"><p className="approach-lead">The quality of a financing decision can shape a project for years.</p><p>Our approach begins with listening. We look at how a project is built, what makes it commercially viable and where risks sit between sponsors, investors, lenders and other stakeholders.</p><p>Only then does a financing structure become meaningful. The objective is not complexity for its own sake, but a credible path from commercial ambition to execution.</p><div className="approach-steps" aria-label="Our advisory process"><div data-reveal="bubble"><strong>Understand the project</strong><ArrowUpRight size={17}/></div><div data-reveal="bubble"><strong>Consider the options</strong><ArrowUpRight size={17}/></div><div data-reveal="bubble"><strong>Structure the way forward</strong><ArrowUpRight size={17}/></div></div></div></div>
        </section>

        <section className="perspective-quote" aria-label="Cross-border perspective"><div className="page-shell"><div className="quote-top" aria-hidden="true" /><p className="quote-statement" data-reveal="up">Capital crosses borders.<br />Good judgement needs<br /><em>more than one perspective.</em></p><div className="quote-bottom" data-reveal="up"><p>Cross-border financing brings together different markets, counterparties and commercial expectations. Clear judgement helps connect them.</p></div></div></section>

        <section id="perspectives" className="themes section-pad page-shell" aria-labelledby="themes-title"><div className="themes-left" data-reveal="up"><h2 id="themes-title" className="display-heading">A considered<br /><em>point of view.</em></h2><p>Good advice is less about having a standard answer and more about asking the right questions.</p></div><div className="themes-right">{focusThemes.map((theme, index) => <article className={`theme-row theme-row--${index + 1}`} key={theme.title} data-reveal="bubble" style={{ transitionDelay: `${index * 95}ms` }}><div className="theme-orb"><ArrowUpRight size={21}/></div><div><h3>{theme.title}</h3><p>{theme.description}</p></div></article>)}</div></section>

        <section id="contact" className="contact-section"><div className="page-shell"><div className="contact-top" aria-hidden="true" /><div className="contact-main" data-reveal="up"><h2>Let's find the<br /><em>right way forward.</em></h2><button onClick={() => setContactOpen(true)} aria-label="Contact AFII Capital" className="contact-round" type="button"><ArrowUpRight size={34}/></button></div><div className="contact-detail"><p>Have a project or financing requirement to discuss? We would welcome an initial conversation.</p><a className="contact-mail" href={`mailto:${email}`}>{email}<ArrowUpRight size={19}/></a></div></div></section>
      </main>
      <footer className="footer"><div className="page-shell"><div className="footer-main"><Wordmark light /><div className="footer-links"><a href="#expertise">Expertise</a><a href="#industries">Industries</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AFII Capital. All rights reserved.</span><span>Structured Finance & Infrastructure Advisory</span><a href="#top">Back to top ↑</a></div></div></footer>
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
