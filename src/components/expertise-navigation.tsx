/* AFII_EXPERTISE_V24 */
"use client";
import { expertise } from "@/data/expertise";
import ExpertiseIcon from "@/components/expertise-icon";
/** Mouse, touchpad and keyboard navigation; mobile uses the existing full menu and expertise directory. */
export default function ExpertiseNavigation(){return <div className="afi-exp-nav">
  <a href="/expertise" className="afi-exp-nav-link" aria-haspopup="true">Expertise</a>
  <div className="afi-exp-flyout">
    <div className="afi-exp-flyout-top"><span>How AFII Works</span><a href="/expertise">View All Expertise <span aria-hidden="true">↗</span></a></div>
    <div className="afi-exp-flyout-grid">
      {expertise.map((d)=><div className="afi-exp-flyout-group" key={d.slug}>
        <a className="afi-exp-flyout-heading" href={`/expertise/${d.slug}`}><span className="afi-exp-flyout-icon"><ExpertiseIcon type={d.icon} size={25}/></span><strong>{d.shortTitle}</strong><span aria-hidden="true">↗</span></a>
        <div className="afi-exp-flyout-services">{(d.slug==="investment-banking-capital-raising" ? ["project-finance","aviation-asset-finance","equipment-finance-leasing","export-credit-eca-finance"].map(slug=>d.services.find(s=>s.slug===slug)!).filter(Boolean) : d.services.slice(0,3)).map(s=><a key={s.slug} href={`/expertise/${d.slug}/${s.slug}`}>{s.title}</a>)}</div>
      </div>)}
    </div>
    <div className="afi-exp-flyout-note">Five connected practices, each with specialist services and relevant published references.</div>
  </div>
</div>}
