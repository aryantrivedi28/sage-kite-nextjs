import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services/specialist-staffing`;

export const metadata: Metadata = {
  title: "Specialist Staffing: CRM, Marketing & Sales VAs | Sage Kite",
  description: "Specialist staffing from Sage Kite: Tier 1 virtual assistants for CRM and automation, marketing operations, email, social media and lead generation.",
  keywords: ["specialist staffing", "virtual assistant services", "CRM virtual assistant", "marketing operations VA", "email marketing VA", "lead generation VA"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Specialist staffing: CRM, marketing and sales VAs | Sage Kite",
    description: "Tier 1 virtual assistants who run your CRM, campaigns and follow-up day to day, inside your systems, to a scope agreed before they start.",
  },
  twitter: {
    card: "summary",
    title: "Specialist staffing: CRM, marketing and sales VAs | Sage Kite",
    description: "Tier 1 virtual assistants who run your CRM, campaigns and follow-up day to day, inside your systems, to a scope agreed before they start.",
  },
};

type Role = { id: string; title: string; color: string; text: string; tags: string[] };

// "The roles". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match. Same five roles as app/services/page.tsx and the homepage.
const roles: Role[] = [
  { id: "crm-automation-va", title: "CRM and automation VA", color: "var(--sage)", text: "CRM upkeep, contact hygiene, workflow monitoring and reporting, so the system stays accurate and the automation keeps running.", tags: ["Data hygiene", "Workflows", "Reports"] },
  { id: "marketing-operations-va", title: "Marketing operations VA", color: "var(--coral)", text: "Campaign coordination, task tracking, reporting and process support, so the marketing plan turns into work that goes out on time.", tags: ["Coordination", "Tracking", "Reporting"] },
  { id: "email-marketing-va", title: "Email marketing VA", color: "var(--butter)", text: "Campaign setup, segmentation, scheduling and performance reporting inside your email platform.", tags: ["Campaigns", "Segments", "Scheduling"] },
  { id: "social-media-va", title: "Social media VA", color: "var(--sky)", text: "Content coordination, scheduling and routine channel management, so your channels stay consistent.", tags: ["Scheduling", "Coordination", "Channels"] },
  { id: "lead-generation-va", title: "Lead generation and sales support VA", color: "var(--ink)", text: "Prospect research, CRM updates, appointment coordination and follow-up, so your sales team spends more of its time selling.", tags: ["Research", "Appointments", "Follow-up"] },
];

const symptoms = [
  { title: "A CRM going stale", text: "Duplicates, empty fields and old stages build up because nobody has time to tidy them." },
  { title: "Automation nobody checks", text: "Workflows were built once, and nobody notices when one stops working." },
  { title: "Campaigns that slip", text: "Emails and posts go out late, or not at all, whenever the team gets busy." },
  { title: "Leads waiting for follow-up", text: "Enquiries sit in the CRM without the next call, message or appointment being booked." },
  { title: "The founder does the admin", text: "Senior time goes on data entry, scheduling and reports that someone else could own." },
  { title: "Not ready for a full-time hire", text: "There is real, regular work to do, but not yet enough to justify a permanent role." },
];

// "What makes it work": how a specialist role is set up.
const principles = [
  { title: "Scope agreed up front", color: "var(--butter)", text: "The tasks, tools and limits of the role are written into the proposal before anyone starts, so nothing is assumed." },
  { title: "Inside your systems", color: "var(--sage)", text: "Work happens in your CRM, email platform and channels, following your processes, so the data and history stay with you." },
  { title: "One owner on your side", color: "var(--sky)", text: "A named contact sets priorities and approves work, so direction comes from one place rather than several." },
];

// "VA, freelancer or full-time hire?"
const compare = [
  { row: "What you get", va: "A Tier 1 VA matched to a defined growth role", freelancer: "Someone you find, vet and brief yourself", hire: "An employee dedicated to your business" },
  { row: "How it is set up", va: "Role scope and price agreed in a proposal", freelancer: "Per task or per project", hire: "Salary, benefits and a long-term commitment" },
  { row: "Who directs the work", va: "Your named contact, within the agreed scope", freelancer: "You, task by task", hire: "You, as their employer" },
  { row: "Best when", va: "Your systems work and need regular, reliable upkeep", freelancer: "You need a one-off task done", hire: "The role is full time and permanent" },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Understanding specialist staffing",
    items: [
      { q: "What is specialist staffing?", a: "Specialist staffing provides Tier 1 virtual assistants for growth and automation work. They operate and maintain the systems a business has invested in, such as the CRM, email platform and social channels, so those systems stay in use after they are built." },
      { q: "Which roles can a Sage Kite VA fill?", a: "Five roles: CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support. Each VA is matched to one defined role, and the scope of that role is agreed before anyone starts." },
      { q: "What does a CRM and automation VA do?", a: "They keep the CRM accurate and the automation working: updating records, merging duplicates, keeping tags and fields consistent, checking that workflows run as intended, flagging problems and preparing routine reports." },
      { q: "How is a specialist VA different from a freelancer or a full-time hire?", a: "A freelancer is usually found, briefed and managed by you, task by task. A full-time hire is a long-term commitment with salary and benefits. A Sage Kite VA is matched to a defined role in growth and automation work, with the scope agreed in a proposal before work starts." },
      { q: "Will the VA work in our tools and follow our processes?", a: "Yes. They work inside your CRM, email platform and other tools, following your processes. If those processes are not written down yet, we will say so during discovery, because a documented process makes the role easier to hand over and check." },
    ],
  },
  {
    label: "Working together",
    items: [
      { q: "How is specialist staffing priced?", a: "Every engagement starts with a discovery call. The proposal then sets out the role, scope and price before anyone starts. Platform subscriptions and advertising spend are separate from our fee." },
      { q: "Who manages the VA day to day?", a: "You name a contact on your side who sets priorities and approves work. The scope, and how work is reported and reviewed, are agreed in the proposal, so both sides know what the role covers." },
      { q: "Do we need a CRM project before bringing in a VA?", a: "Not if your systems already work. A VA keeps a working system running; they are not a substitute for setting it up. If the CRM or automation needs fixing first, we will recommend CRM implementation before the role starts." },
      { q: "Can a VA support our in-house team or agency?", a: "Yes. A VA can take routine work off your team or agency, such as CRM upkeep, scheduling or reporting, so the people who plan, market and sell can spend their time on that." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function SpecialistStaffingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Sage Kite",
        "url": `${SITE_URL}/`
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        "url": PAGE_URL,
        "name": "Specialist staffing: CRM, marketing and sales VAs | Sage Kite",
        "description": "Specialist staffing from Sage Kite: Tier 1 virtual assistants for CRM and automation, marketing operations, email, social media and lead generation.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${PAGE_URL}/#service` },
        "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": "Specialist staffing" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Specialist staffing",
        "serviceType": "Virtual assistant staffing",
        "description": "Tier 1 virtual assistants for CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support, working inside the client's systems to an agreed role scope.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": { "@type": "BusinessAudience", "audienceType": "Small and medium-sized businesses" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Specialist staffing roles",
          "itemListElement": roles.map((r) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": r.title, "description": r.text, "url": `${PAGE_URL}#${r.id}` }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${PAGE_URL}/#service` },
        "inLanguage": "en",
        "mainEntity": faqGroups.flatMap((g) => g.items).map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Header />

      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          /* Specialist staffing service page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .ss-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .ss-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .ss-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .ss-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: an example week for one role */
          .wk-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .wk-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 12px}
          .wrows li{display:grid;grid-template-columns:5px minmax(0,1fr) auto;gap:14px;align-items:center;padding:11px 0;border-top:1px solid var(--pale-sage);font-size:.925rem;font-weight:600;color:var(--ink);line-height:1.3}
          .wrows .rail{align-self:stretch;border-radius:3px;background:var(--c)}
          .wrows small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .wk-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* Roles */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start;scroll-margin-top:110px}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}

          /* What makes it work */
          .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .three .panel h3{font-size:1.3rem;margin-bottom:8px}
          .three .panel p{font-size:.95rem;line-height:1.55}
          .three-note{margin-top:26px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

          /* VA, freelancer or full-time hire */
          .compare{width:100%;border-collapse:collapse;margin-top:clamp(36px,4vw,52px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;font-size:.975rem}
          .compare th,.compare td{padding:16px 20px;border-bottom:1px solid var(--light-sage);vertical-align:top;line-height:1.5;text-align:left}
          .compare thead th{background:var(--pale-sage);color:var(--ink);font-weight:700;font-size:1rem}
          .compare tbody th{font-weight:600;color:var(--sage);font-size:.875rem;width:19%}
          .compare tbody td{color:var(--ink);width:27%}
          .compare tbody tr:last-child th,.compare tbody tr:last-child td{border-bottom:0}

          /* Process */
          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          /* Panels: before and after, fit */
          .two-col,.fit2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}
          .fit2 .panel p{font-size:.95rem;line-height:1.55;margin-top:14px}

          /* Connected services */
          .conn{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
          .conn a{display:flex;flex-direction:column;gap:6px;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:20px 20px 22px;background:var(--warm-white);text-decoration:none;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease)}
          .conn a:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
          .conn strong{font-size:1.15rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.25}
          .conn span{font-size:.875rem;line-height:1.45}

          /* FAQ */
          .faq-wrap{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,72px);align-items:start}
          .faq-wrap h2{font-size:clamp(1.8rem,3vw,2.4rem)}
          .faq-grp + .faq-grp{margin-top:36px}
          .faq-grp > .label{margin-bottom:6px}
          .qa{border-top:1px solid var(--light-sage)}
          .faq-grp .qa:last-child{border-bottom:1px solid var(--light-sage)}
          .qa summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:18px 0;font-weight:700;font-size:1.075rem;color:var(--ink);letter-spacing:-.01em;line-height:1.35}
          .qa summary::-webkit-details-marker{display:none}
          .qa summary::after{content:"+";flex:0 0 auto;font-weight:400;font-size:1.5rem;color:var(--sage);line-height:1}
          .qa[open] summary::after{content:"\\2212"}
          .qa p{padding:0 0 20px;max-width:68ch;font-size:1rem}

          @media (max-width:1040px){
            .ss-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .three{grid-template-columns:1fr}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .wk-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .wrows li{grid-template-columns:5px minmax(0,1fr)}
            .wrows small{grid-column:2;justify-self:start}
            .symptoms,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .flow6{grid-template-columns:1fr 1fr}
            /* Comparison table becomes one card per row */
            .compare,.compare tbody,.compare tr{display:block;width:100%}
            .compare thead{display:none}
            .compare tbody th{display:block;width:auto;padding:10px 16px;border-bottom:0;background:var(--pale-sage)}
            .compare tbody td{display:block;width:auto;padding:10px 16px;font-size:.95rem}
            .compare td::before{content:attr(data-h);display:block;font-size:.75rem;font-weight:700;color:var(--sage);margin-bottom:2px}
            .compare tbody tr:last-child td{border-bottom:1px solid var(--light-sage)}
            .compare tbody tr:last-child td:last-child{border-bottom:0}
          }
        ` }} />

        {/* Hero */}
        <section className="ss-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services / Specialist staffing</p>
              <h1 id="hero-title">Specialist staff who keep your growth systems running</h1>
              <p className="sub">
                Sage Kite provides Tier 1 virtual assistants for CRM and automation, marketing operations, email, social media, and lead generation and sales support. They work inside your systems and processes, to a role scope agreed before anyone starts.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss a specialist</Link>
                <Link href="#roles" className="link">See the roles</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--ink)')}></span>Five specialist roles</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Inside your systems</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Scope agreed up front</span>
              </p>
            </div>

            <figure className="wk-fig" aria-labelledby="wk-title">
              <div className="ui">
                <p className="ui-title"><b id="wk-title">CRM and automation VA</b><span>Example week</span></p>
                <ul className="wrows">
                  <li style={c('var(--sage)')}><span className="rail"></span>New leads checked and assigned<small>Daily</small></li>
                  <li style={c('var(--coral)')}><span className="rail"></span>Workflow errors flagged<small>Daily</small></li>
                  <li style={c('var(--butter)')}><span className="rail"></span>Overdue tasks raised with owners<small>Daily</small></li>
                  <li style={c('var(--sky)')}><span className="rail"></span>Duplicates merged, fields tidied<small>Weekly</small></li>
                  <li style={c('var(--ink)')}><span className="rail"></span>Pipeline report sent to you<small>Weekly</small></li>
                </ul>
              </div>
              <figcaption>Illustrative. Each role&apos;s tasks are agreed before anyone starts.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">When the system is built but nobody has time to run it.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">A new tool rarely fixes these. Someone with the time and the skills to run the system every week usually does.</p>
          </div>
        </section>

        {/* Roles */}
        <section className="sec" id="roles" aria-labelledby="roles-title">
          <div className="wrap">
            <div className="head">
              <p className="label">The roles</p>
              <h2 id="roles-title">Five specialist roles for growth work.</h2>
              <p className="sub">Each VA is matched to one defined role. Start with the role where work is piling up, and add others as the need becomes clear.</p>
            </div>
            <div className="cap-list">
              {roles.map((r) => (
                <div key={r.id} id={r.id} className="cap-row" style={c(r.color)}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <div className="tags">
                    {r.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What makes it work */}
        <section className="pale sec" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What makes it work</p>
              <h2 id="how-title">A defined role, not an open-ended inbox.</h2>
              <p className="sub">A VA is most useful when everyone knows what the role covers. That is settled before anyone starts.</p>
            </div>
            <div className="three">
              {principles.map((x) => (
                <div key={x.title} className="panel" style={c(x.color)}>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
            <p className="three-note">Processes not written down yet? <Link className="link" href="/services/crm-implementation">CRM implementation</Link> sets up and documents the system a specialist will run.</p>
          </div>
        </section>

        {/* VA, freelancer or full-time hire */}
        <section className="sec" id="compare" aria-labelledby="compare-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Which kind of help?</p>
              <h2 id="compare-title">Specialist VA, freelancer or full-time hire.</h2>
              <p className="sub">Each suits a different kind of work. Knowing which you need saves paying for the wrong one.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">Compare</span></th>
                  <th scope="col">Sage Kite specialist VA</th>
                  <th scope="col">Freelancer</th>
                  <th scope="col">Full-time hire</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.row}>
                    <th scope="row">{r.row}</th>
                    <td data-h="Sage Kite specialist VA">{r.va}</td>
                    <td data-h="Freelancer">{r.freelancer}</td>
                    <td data-h="Full-time hire">{r.hire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Process */}
        <section className="rule sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a specialist role is set up.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>The work piling up, the systems it lives in and who will manage it.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Role, scope and price, agreed in writing.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Matching</h3><p>A Tier 1 VA matched to the role and your tools.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Onboarding</h3><p>Access, processes and priorities handed over.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Day to day</h3><p>Routine work done inside your systems, to the agreed scope.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Review</h3><p>The role reviewed and adjusted as your needs change.</p></li>
            </ol>
          </div>
        </section>

        {/* Before and after */}
        <section className="tint sec" id="handover" aria-labelledby="handover-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Before and after</p>
              <h2 id="handover-title">What we need from you, and what you receive.</h2>
            </div>
            <div className="two-col">
              <div className="panel" style={c('var(--butter)')}>
                <h3>What we need</h3>
                <p className="panel-k">Confirmed during discovery</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />The work you want the role to take on</li>
                  <li><Check size={15} aria-hidden="true" />Access to your CRM, email platform and other tools</li>
                  <li><Check size={15} aria-hidden="true" />Your processes, or time to walk us through them</li>
                  <li><Check size={15} aria-hidden="true" />A named contact who sets priorities</li>
                  <li><Check size={15} aria-hidden="true" />How you want work reported</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>What you receive</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A Tier 1 VA matched to the role</li>
                  <li><Check size={15} aria-hidden="true" />A written role scope agreed before work starts</li>
                  <li><Check size={15} aria-hidden="true" />Routine work done inside your systems</li>
                  <li><Check size={15} aria-hidden="true" />Reporting on the work, as agreed in the proposal</li>
                  <li><Check size={15} aria-hidden="true" />The scope reviewed as your needs change</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is this right for you?</p>
              <h2 id="fit-title">A specialist runs a system. It does not replace one.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Businesses that have invested in a CRM, email platform or marketing plan and need regular, reliable hands to keep it running, without the cost and commitment of a full-time hire.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Fix this first</h3>
                <p>If the CRM or automation does not work yet, a VA will spend their time working around it. Start with <Link className="link" href="/services/crm-implementation">CRM implementation</Link>, or with <Link className="link" href="/services/consultancy">consultancy</Link> if you are not sure which work matters most.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where staffing sits</p>
              <h2 id="conn-title">Specialists keep the growth system running.</h2>
              <p className="sub">They operate what the other services decide, build and launch, so the work keeps paying off after handover.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Decide which work matters before handing it over.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>A working, documented system for a specialist to run.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media, social and email that bring in demand.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label delivery</strong><span>Delivery capacity for agencies, under their brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Specialist staffing FAQs</h2>
            </div>
            <div>
              {faqGroups.map((group) => (
                <div className="faq-grp" key={group.label}>
                  <p className="label">{group.label}</p>
                  {group.items.map((f) => (
                    <details className="qa" key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--sage)')}></span>CRM</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Marketing ops</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Email</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Social</span>
                <span><span className="dot" style={c('var(--ink)')}></span>Sales support</span>
              </p>
              <h2 id="final-title">Keep the systems you built in use.</h2>
              <p className="sub">A discovery call looks at the work piling up, the systems it lives in, who would manage it, and what a scoped specialist role would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/services" className="link">See all services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
