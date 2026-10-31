"use client";

import { useState } from "react";
import type { MapPlace } from "@/data/leadership-v17";
import { Header, Footer, ContactModal } from "@/components/about-experience";

export default function LocationDetailExperience({ place }: { place: MapPlace }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const isOffice = place.kind === "office";
  const title = (place.region === "India" || place.region === "Germany")
    ? `${place.city}, ${place.region}` : place.region;
  const enquirySubject = encodeURIComponent(`AFII — ${place.city} enquiry`);
  return <>
    <Header onContact={() => setContactOpen(true)} />
    <main className="af-place-page">
      <section className="af-place-hero" aria-labelledby="af-place-title">
        {!imageFailed && place.image && <img src={place.image} alt={`Illustrative view of ${place.region}; not an AFII office photograph`} onError={() => setImageFailed(true)} />}
        <div className="af-place-hero-shade" />
        <div className="af-place-hero-content">
          <nav className="af-place-crumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <a href="/leadership-offices">Leadership &amp; Offices</a><span aria-hidden="true">/</span>
            <span>{place.city}</span>
          </nav>
          <div className="af-place-eyebrow">{place.category}</div>
          <h1 id="af-place-title">{title}</h1>
          <p className="af-place-hero-summary">{place.label}</p>
        </div>
      </section>
      <section className="af-place-intro">
        <div className="af-place-columns">
          <div>
            <span className="af-place-section-kicker">{isOffice ? "AFII Presence" : "Professional Network"}</span>
            <h2>{isOffice ? "Local Presence. International Perspective." : "Connections Across Markets."}</h2>
            <p>{place.description}</p>
            {place.detail && <p>{place.detail}</p>}
            {!isOffice && <p>This location is included as a partner-network reference rather than a registered AFII office. Any engagement or introduction depends on the relevant parties and mandate.</p>}
            <p className="af-place-disclaimer">Location and contact information are based on AFII’s published directory. Please confirm arrangements before visiting or relying on an address.</p>
          </div>
          <dl className="af-place-facts">
            <div className="af-place-fact"><dt>Location</dt><dd>{place.city}, {place.region}</dd></div>
            <div className="af-place-fact"><dt>Classification</dt><dd>{place.category}</dd></div>
            <div className="af-place-fact"><dt>{isOffice ? "Published Entity / Practice" : "Network Description"}</dt><dd>{place.label}</dd></div>
            <div className="af-place-fact"><dt>Published Address / Area</dt><dd><address>{place.address}</address></dd></div>
          </dl>
        </div>
      </section>
      <section className="af-place-contact">
        <div className="af-place-columns">
          <div><span className="af-place-section-kicker">Contact AFII</span><h2>Discuss Your Requirement.</h2><p>Share the nature of your mandate, sector and preferred region. We will help direct your enquiry to the appropriate contact.</p></div>
          <div className="af-place-actions">
            <a className="af-place-cta" href={`mailto:reachus@afii.eu?subject=${enquirySubject}`}>Email AFII <span aria-hidden="true">↗</span></a>
            <a className="af-place-cta af-place-cta--outline" href="/leadership-offices#offices-directory">All Locations <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
    <Footer onContact={() => setContactOpen(true)} />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
  </>;
}
