"use client";

import { useState } from "react";
import { Header, Footer, ContactModal, MailIcon, LinkedInIcon, Arrow } from "@/components/about-experience";
import { leadershipPeople, offices, networkLocations, type MapPlace } from "@/data/leadership-v17";

const locations: MapPlace[] = [...offices, ...networkLocations];

function GeoMap() {
  const [selected, setSelected] = useState("germany");
  const place = locations.find((p) => p.id === selected) || offices[0];
  return (
    <section className="af-geography" id="global-map" aria-labelledby="af-map-heading">
      <div className="af-container af-map-heading-row">
        <div>
          <p className="af-kicker-light">Offices &amp; Regional Contacts</p>
          <h2 id="af-map-heading">Connected Across Markets.</h2>
          <p>Explore Our Published Offices, AGENOVA Engineering Presence And Partner-Network Locations. Each Marker Is Linked To Its Corresponding Directory Entry.</p>
        </div>
        <div className="af-map-legend"><span><i className="af-dot-office"/>Office / Group Entity</span><span><i className="af-dot-network"/>Partner Network</span></div>
      </div>
      <div className="af-map-viewport" aria-label="World map: office and partner location markers; horizontally scrollable on small screens" tabIndex={0}>
        <div className="af-map-canvas">
          <img src="/afii-world-land.svg" alt="" aria-hidden="true" />
          {locations.map((p) => (
            <button key={p.id} type="button"
              className={`af-map-pin ${p.kind === "office" ? "af-map-pin-office":"af-map-pin-network"} ${selected === p.id ? "af-map-pin-selected":""}`}
              style={{left:`${(p.lng+180)/360*100}%`,top:`${(85-p.lat)/145*100}%`}}
              onClick={()=>setSelected(p.id)}
              aria-label={`View ${p.region}: ${p.category}`}
              aria-pressed={selected===p.id} title={`${p.region} — ${p.category}`}>
              <svg viewBox="0 0 30 37" aria-hidden="true"><path d="M15 1C7.3 1 1.5 6.8 1.5 14.5 1.5 23 15 35.5 15 35.5S28.5 23 28.5 14.5C28.5 6.8 22.7 1 15 1Z"/><circle cx="15" cy="14" r="5.3"/></svg>
            </button>
          ))}
        </div>
      </div>
      <div className="af-container af-map-detail-wrap">
        <div className="af-map-detail" aria-live="polite">
          <div>
            <span className="af-map-detail-type">{place.category} · {place.region}</span>
            <h3>{place.city}</h3>
            <p><strong>{place.label}</strong></p>
            <p className="af-map-address">{place.address}</p>
          </div>
          <a href={`mailto:reachus@afii.eu?subject=${encodeURIComponent('AFII '+place.region+' enquiry')}`}>Enquire About This Location <Arrow diagonal size={16}/></a>
        </div>
        <p className="af-map-disclaimer">Markers Use Approximate Geographic Positions. Partner-Network Contacts Are Not Presented As Registered Offices; Romania Is Shown At Country Level.</p>
      </div>
    </section>
  );
}

function PersonCard({person}:{person:typeof leadershipPeople[number]}) {
  const [open,setOpen] = useState(false);
  return (
    <article className={`af-directory-person ${open ? "af-directory-person--open":""}`}>
      <div className="af-directory-portrait">
        <button type="button" onClick={()=>setOpen((v)=>!v)} aria-expanded={open} aria-label={`${open?'Hide':'Show'} contact options for ${person.name}`}>
          <span className="af-directory-monogram">{person.initials}</span>
          <span className="af-directory-portrait-note">Profile Photo To Follow</span>
        </button>
        <div className="af-directory-socials" aria-hidden={!open}>
          <a href={`mailto:reachus@afii.eu?subject=${encodeURIComponent('Enquiry for '+person.name)}`} aria-label={`Contact AFII about ${person.name}`} tabIndex={open?0:-1}><MailIcon size={18}/></a>
          {person.linkedin && <a href={person.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={open?0:-1} aria-label={`${person.name} on LinkedIn`}><LinkedInIcon size={18}/></a>}
        </div>
      </div>
      <div className="af-directory-person-body"><h3>{person.name}</h3><p>{person.role}</p><span>{person.city||'AFII Group'}</span></div>
    </article>
  );
}

function LocationCard({place}:{place:MapPlace}) {
  const [imageFailed,setImageFailed] = useState(false);
  return (
    <article className={`af-location-card af-location-card--${place.kind}`}>
      <a className="af-location-card-primary-link" href={`/leadership-offices/${place.id}`} aria-label={`View details for ${place.city}, ${place.region}`} />
      <div className="af-location-card-media">
        {!imageFailed && place.image ? <img src={place.image} loading="lazy" alt={`Representative city view of ${place.region}`} onError={()=>setImageFailed(true)}/> : <span className="af-location-media-fallback" aria-hidden="true">{place.region}</span>}
      </div>
      <div className="af-location-card-body">
        <span className="af-location-card-category">{place.category}</span>
        <h3>{place.region === "India" || place.region === "Germany" ? `${place.city}, ${place.region}` : place.region}</h3>
        <p className="af-location-entity">{place.label}</p>
        <address>{place.address}</address>
        <p>{place.description}</p>
        {place.detail && <p className="af-location-extra">{place.detail}</p>}
        <span className="af-location-card-view" aria-hidden="true">View Location <Arrow diagonal size={15}/></span>
        <a href={`mailto:reachus@afii.eu?subject=${encodeURIComponent('AFII '+place.region+' enquiry')}`}>Enquire <Arrow diagonal size={15}/></a>
      </div>
    </article>
  );
}

export default function LeadershipOfficesExperience(){
  const [contactOpen,setContactOpen]=useState(false);
  return (<>
    <Header onContact={()=>setContactOpen(true)}/>
    <main>
      <section className="af-lead-hero" aria-labelledby="af-lead-title">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=88&auto=format&fit=crop" alt="Illustrative professional team meeting; not an AFII staff photograph"/>
        <div className="af-lead-hero-tint"/>
        <div className="af-container af-lead-hero-content">
          <div className="af-breadcrumb af-lead-breadcrumb"><a href="/">Home</a><span>/</span><span>Leadership &amp; Offices</span></div>
          <h1 id="af-lead-title">People, Perspective<br/>And Presence.</h1>
          <p>Experienced Professionals In Finance, Infrastructure And Cross-Border Advisory.</p>
        </div>
      </section>
      <section className="af-directory-intro af-section">
        <div className="af-container af-directory-intro-grid">
          <div><p className="af-about-kicker">Leadership &amp; Advisory</p><h2>People Behind The Mandates.</h2></div>
          <div><p>The AFII Network Draws On Senior Partners, Directors And Specialists Across Markets. Team Selection Depends On The Sector, Location And Individual Requirements Of Each Mandate.</p><a className="af-inline-link" href="mailto:reachus@afii.eu">Contact The Team <Arrow diagonal size={17}/></a></div>
        </div>
        <div className="af-container af-directory-grid">
          {leadershipPeople.map((person)=><PersonCard key={person.name} person={person}/>)}
        </div>
        <p className="af-container af-directory-note">Names And Roles Are Drawn From Published AFII Information And Require Business Verification Before Final Publication. Images Remain Placeholders Until Approved Portraits Are Supplied.</p>
      </section>
      <GeoMap />
      <section className="af-offices-directory af-section" id="offices-directory">
        <div className="af-container">
          <div className="af-directory-intro-grid"><div><p className="af-about-kicker">AFII Presence</p><h2>Offices &amp; Group Entities.</h2></div><p>Published AFII Entity And Contact Locations. Germany Is Identified As The Group Headquarters; London Is The UK Registered Office. Please Confirm Details Before Arranging A Visit.</p></div>
          <div className="af-offices-directory-grid">
            {offices.map((p)=><LocationCard key={p.id} place={p}/>)}
          </div>
          <div className="af-network-directory-intro"><p className="af-about-kicker">Wider Network</p><h2>Partner Locations.</h2><p>These Listings Describe Partner And Mandate Coverage. They Are Not Additional AFII Registered Offices.</p></div>
          <div className="af-offices-directory-grid af-offices-network-grid">
            {networkLocations.map((p)=><LocationCard key={p.id} place={p}/>)}
          </div>
        </div>
      </section>
      <section className="af-cta"><div className="af-container af-cta-grid"><h2>Let’s Start A<br/><span>Conversation.</span></h2><div className="af-cta-right"><p>Tell Us About Your Project, Region And Advisory Requirement So We Can Direct Your Enquiry.</p><button type="button" className="af-pill-link" onClick={()=>setContactOpen(true)}>Contact AFII <Arrow diagonal size={17}/></button></div></div></section>
    </main>
    <Footer onContact={()=>setContactOpen(true)}/>
    <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)}/>
  </>);
}
