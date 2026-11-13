"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { LeaderProfile } from "@/data/leadership-profiles-v53";
import styles from "./leader-biography-modal-v531.module.css";

type Person = {
  name: string;
  initials: string;
  role: string;
  city: string;
  image: string;
  linkedin: string | null;
};

/** A real body-level dialog, not another page section. */
export default function LeaderBiographyModal({ person, profile, open, onClose }: {
  person: Person;
  profile: LeaderProfile;
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const contentId = useId();

  useEffect(() => setMounted(true), []);
  useEffect(() => setImageFailed(false), [person.image]);

  useEffect(() => {
    if (!open) return;
    const focusBefore = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const candidates = Array.from(panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(node => node.getClientRects().length > 0);
      if (!candidates.length) { event.preventDefault(); return; }
      const first = candidates[0];
      const last = candidates[candidates.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      focusBefore?.focus();
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;
  const subject = encodeURIComponent(`AFII enquiry regarding ${person.name}`);

  return createPortal(
    <div
      className={styles.backdrop}
      style={{ position: "fixed", inset: 0, zIndex: 2147483000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(6, 25, 35, .75)", padding: "clamp(12px, 3vw, 34px)" }}
      onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}
    >
      <section
        ref={panelRef}
        className={styles.dialog}
        style={{ position: "relative", width: "min(780px, 100%)", maxHeight: "calc(100dvh - 28px)", overflowY: "auto", backgroundColor: "#fff", borderRadius: 18, boxShadow: "0 30px 95px rgba(0,0,0,.33)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        tabIndex={-1}
      >
        <div className={styles.photoArea}>
          {imageFailed ? (
            <div className={styles.photoFallback} aria-label={`${person.name}, portrait not available`} role="img">{person.initials}</div>
          ) : (
            <img src={person.image} alt={`Portrait of ${person.name}`} onError={() => setImageFailed(true)} />
          )}
          <div className={styles.photoShade} aria-hidden="true" />
          <span className={styles.photoCaption}>AFII · Leadership &amp; Advisory</span>
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label={`Close biography of ${person.name}`}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>

        <div className={styles.content} id={contentId}>
          <h2 id={titleId}>{person.name}</h2>
          <p className={styles.role}>{person.role}</p>
          <p className={styles.place}>{person.city}</p>
          <div className={styles.rule} />
          <h3 className={styles.sectionTitle}>Professional Biography</h3>
          <div className={styles.bio}>
            {profile.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>

          {profile.milestones && profile.milestones.length > 0 && (
            <section className={styles.milestones} aria-label={`${person.name} selected career milestones`}>
              <h3 className={styles.sectionTitle}>Selected Career Milestones</h3>
              <ol className={styles.timeline}>
                {profile.milestones.map((item, i) => (
                  <li key={`${item.period}-${i}`}>
                    <span className={styles.year}>{item.period}</span>
                    <div><h4>{item.heading}</h4><p>{item.description}</p></div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className={styles.contacts} aria-label="Public professional contact details">
            <h3 className={styles.sectionTitle}>Professional Contact</h3>
            <div className={styles.links}>
              {profile.publicEmail && <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail} <span aria-hidden="true">↗</span></a>}
              {person.linkedin && <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile <span aria-hidden="true">↗</span></a>}
              {profile.reference && profile.reference.url !== person.linkedin && <a href={profile.reference.url} target="_blank" rel="noopener noreferrer">{profile.reference.label} <span aria-hidden="true">↗</span></a>}
              {profile.extraReference && <a href={profile.extraReference.url} target="_blank" rel="noopener noreferrer">{profile.extraReference.label} <span aria-hidden="true">↗</span></a>}
              <a className={styles.enquire} href={`mailto:reachus@afii.eu?subject=${subject}`}>Contact via AFII <span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.contactNote}>Only publicly available professional contact channels are listed. Unverified direct details are omitted.</p>
          </section>
        </div>
      </section>
    </div>,
    document.body
  );
}
