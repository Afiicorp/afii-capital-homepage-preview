"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const CONTACT_EMAIL = "reachus@afii.eu";
const ENQUIRY_TYPES = [
  "Project finance & capital raising",
  "Infrastructure & government advisory",
  "International trade & export finance",
  "Corporate & SME finance",
  "Investment / asset management",
  "Corporate / general enquiry",
];

export default function AfiiContactForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState(ENQUIRY_TYPES[0]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!open) return;
    const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = before;
      document.removeEventListener("keydown", handleKey);
      active?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      setNotice("Please acknowledge the privacy information before continuing.");
      return;
    }
    const subject = `AFII website enquiry — ${category} — ${company.trim() || name.trim()}`;
    const body = [
      `Contact: ${name.trim()}`,
      `Work email: ${email.trim()}`,
      `Organisation: ${company.trim() || "Not specified"}`,
      `Country / region: ${country.trim() || "Not specified"}`,
      `Topic: ${category}`,
      "",
      "Project / enquiry details:",
      message.trim(),
    ].join("\r\n");
    setNotice("A draft will open in your configured email application. Review it and press Send to contact AFII.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <div className="af-modal-backdrop af-enquiry-overlay" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
    <section className="af-enquiry-dialog af-enquiry-dialog--v37" role="dialog" aria-modal="true" aria-labelledby="af-enquiry-title" aria-describedby="af-enquiry-description">
      <button ref={closeRef} className="af-enquiry-close" type="button" aria-label="Close enquiry form" onClick={onClose}>×</button>
      <div className="af-enquiry-aside">
        <img src="/afii-logo.jpg" alt="AFII" />
        <p className="af-enquiry-kicker">AFII · ENQUIRIES</p>
        <h2>Every project begins with a conversation.</h2>
        <p>Tell us about the commercial context. We can then direct your enquiry towards the appropriate finance or advisory specialists.</p>
        <a href={`mailto:${CONTACT_EMAIL}?subject=AFII%20enquiry`}>Write directly to {CONTACT_EMAIL} ↗</a>
      </div>
      <div className="af-enquiry-content">
        <p className="af-enquiry-kicker">START A CONVERSATION</p>
        <h3 id="af-enquiry-title">Discuss a mandate.</h3>
        <p id="af-enquiry-description">Share a few details and prepare an email to the AFII team. No account is required.</p>
        <form className="af-enquiry-grid" onSubmit={prepareEmail}>
          <label>Full name <input required value={name} maxLength={120} autoComplete="name" placeholder="Your full name" onChange={event => setName(event.target.value)} /></label>
          <label>Work email <input required type="email" value={email} maxLength={160} autoComplete="email" placeholder="name@organisation.com" onChange={event => setEmail(event.target.value)} /></label>
          <label>Organisation <input value={company} maxLength={140} autoComplete="organization" placeholder="Company or institution" onChange={event => setCompany(event.target.value)} /></label>
          <label>Country / region <input value={country} maxLength={120} autoComplete="country-name" placeholder="Your region" onChange={event => setCountry(event.target.value)} /></label>
          <label className="af-enquiry-wide">Area of interest <select value={category} onChange={event => setCategory(event.target.value)}>{ENQUIRY_TYPES.map(type => <option key={type}>{type}</option>)}</select></label>
          <label className="af-enquiry-wide">Project or enquiry details <textarea required value={message} maxLength={2400} rows={4} placeholder="Outline the project, capital requirements, schedule or scope of advisory work. Avoid sending confidential documents here." onChange={event => setMessage(event.target.value)} /></label>
          <label className="af-enquiry-wide af-enquiry-consent"><input required type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} /><span>I have reviewed AFII's <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and understand that this action prepares an email draft on my device.</span></label>
          <div className="af-enquiry-wide af-enquiry-actions"><button type="submit" className="af-enquiry-submit">Prepare enquiry email ↗</button></div>
        </form>
        {notice && <p className="af-enquiry-notice" role="status">{notice}</p>}
        <p className="af-enquiry-disclosure">The website does not send or store these details. Your configured email application opens the message; you must send it there. For confidential document submissions, use the <a href="/trust#virtual-data-room">AFII VDR</a>.</p>
      </div>
    </section>
  </div>;
}
