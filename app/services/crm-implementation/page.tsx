import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';
import { PLATFORMS, PLATFORM_GROUPS } from '@/content/platforms';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services/crm-implementation`;

export const metadata: Metadata = {
  title: "CRM Implementation Services | Sage Kite",
  description: "CRM implementation services from Sage Kite: setup, pipeline design, data cleanup and migration, automation, training and handover, built around how you sell.",
  keywords: ["CRM implementation services", "CRM implementation consultant", "CRM setup services", "CRM migration", "CRM optimisation", "custom CRM development"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM implementation services | Sage Kite",
    description: "A CRM your team uses, where every lead has an owner and a next step. Setup, cleanup, migration, automation, training and handover.",
  },
  twitter: {
    card: "summary",
    title: "CRM implementation services | Sage Kite",
    description: "A CRM your team uses, where every lead has an owner and a next step. Setup, cleanup, migration, automation, training and handover.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we implement". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Process mapping and CRM design", color: "var(--butter)", text: "How you win and keep customers, mapped before anything is configured, then turned into the records, fields and stages the CRM needs.", tags: ["Process map", "Data model"] },
  { title: "Pipeline design", color: "var(--sage)", text: "Stages that match how deals actually move, with clear ownership and a defined next step at every stage.", tags: ["Stages", "Ownership"] },
  { title: "Data cleanup and migration", color: "var(--sky)", text: "Contacts and history cleaned, de-duplicated and moved from spreadsheets or another platform, where your current system allows it.", tags: ["De-duplication", "Mapping", "Import"] },
  { title: "Workflows and automation", color: "var(--coral)", text: "Lead routing, follow-up, reminders and tasks built with the platform's own tools, so nothing depends on memory.", tags: ["Routing", "Follow-up", "Tasks"] },
  { title: "Integrations", color: "var(--ink)", text: "Website forms, phones, scheduling, payments and accounting connected, using native integrations first.", tags: ["Forms", "Calendar", "Payments"] },
  { title: "Reporting and dashboards", color: "var(--sage)", text: "The numbers you run the business on, from lead source to revenue, visible without exporting to a spreadsheet.", tags: ["Lead source", "Conversion"] },
  { title: "Testing, training and handover", color: "var(--butter)", text: "Every path tested before go-live, your team trained by role, and the setup documented so you own it.", tags: ["Testing", "Training", "Docs"] },
  { title: "Custom CRM development", color: "var(--sky)", text: "A CRM built around your sales process and reporting when no existing platform fits, scoped like any other project.", tags: ["Where appropriate"] },
];

const symptoms = [
  { title: "Leads with no owner", text: "Enquiries arrive from several places, and nobody is sure who should respond or by when." },
  { title: "Follow-up from memory", text: "The next call or email happens only if someone remembers, so warm leads go quiet." },
  { title: "A pipeline that does not fit", text: "Stages were copied from a template and no longer match how deals actually move." },
  { title: "Data nobody trusts", text: "Duplicates, empty fields and old tags mean every list has to be checked by hand." },
  { title: "Reports built in spreadsheets", text: "Numbers are exported and reworked every month because the dashboards were never set up." },
  { title: "A half-finished setup", text: "An implementation started, stalled, and left the team working around it." },
];

// "Why CRM implementations fail" and what Sage Kite does instead.
const failures = [
  { cause: "No clear goal", fix: "We start with how you sell and the decisions the CRM must support, then configure only what serves them." },
  { cause: "The team does not use it", fix: "The CRM is built around the team's daily work, and each role is trained on what it needs to do." },
  { cause: "Bad data moved across", fix: "Records are cleaned and de-duplicated before migration, not after the team has lost trust in them." },
  { cause: "Too much, too soon", fix: "We build what the process needs now, document it, and leave room to add more once it is working." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Understanding CRM implementation",
    items: [
      { q: "What is included in a CRM implementation?", a: "A Sage Kite CRM implementation covers process mapping, CRM design, pipeline setup, data cleanup and migration where feasible, workflows and automation, integrations with your other tools, reporting, testing, training and handover. Your proposal lists exactly which of these your project includes." },
      { q: "What does a CRM implementation consultant do?", a: "A CRM implementation consultant works out how your business sells, designs the CRM around that process, configures the platform, moves your data, connects your other tools and trains the team. The aim is a CRM the team relies on every day, not one that is simply switched on." },
      { q: "Why do CRM implementations fail?", a: "Most fail for the same few reasons: no clear goal, a team that was never shown why or how to use the system, poor data moved across from the old system, and too much built too soon. Sage Kite starts with your sales process, cleans data before migration, trains each role and keeps the first build focused." },
      { q: "Which CRM platforms does Sage Kite implement?", a: "GoHighLevel, Keap, HubSpot and ActiveCampaign across industries, plus industry platforms including Follow Up Boss, Lofty, ServiceTitan, Housecall Pro, Jobber, Kajabi, Clio Grow, Dubsado, HoneyBook, Mindbody and Bloomerang. Where no platform fits, Sage Kite can build a custom CRM." },
      { q: "Should we use an existing CRM platform or build a custom one?", a: "Usually an existing platform. Configuring one is faster and cheaper, and it comes with support and updates. A custom CRM makes sense when your sales process or reporting cannot be handled by any platform without heavy workarounds. Discovery tells you which applies." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "Can you fix a CRM that has already been set up?", a: "Yes. Many projects start with an existing account that has drifted from how the business works. We audit the setup, fix the pipeline, data and automations that matter, and document how the team should use it, often without switching platforms." },
      { q: "Can you move our data from spreadsheets or another CRM?", a: "Usually. We map, clean and de-duplicate contacts and history before importing them. What can be moved depends on what your current system can export, which we confirm during discovery before the migration is scoped." },
      { q: "How long does a CRM implementation take?", a: "It depends on the platform, the amount of data, the number of automations and integrations, and how many people need training. A focused cleanup is much smaller than a new setup with a migration. Your proposal sets out the milestones before work starts." },
      { q: "How is CRM implementation priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
      { q: "What happens after the CRM goes live?", a: "Your team is trained and the setup is documented at handover. Optional maintenance is available with a defined support scope, and Sage Kite can provide a CRM and automation VA to keep data clean and workflows running." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function CrmImplementationPage() {
  const groups = PLATFORM_GROUPS
    .map((g) => ({ ...g, platforms: PLATFORMS.filter((p) => p.group === g.id) }))
    .filter((g) => g.platforms.length > 0);

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
        "name": "CRM implementation services | Sage Kite",
        "description": "CRM implementation services from Sage Kite: setup, pipeline design, data cleanup and migration, automation, training and handover, built around how you sell.",
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
          { "@type": "ListItem", "position": 3, "name": "CRM implementation" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "CRM implementation services",
        "serviceType": "CRM implementation",
        "description": "CRM setup, pipeline design, data cleanup and migration, workflows and automation, integrations, reporting, testing, training and handover, plus custom CRM development where no platform fits.",
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
          "name": "CRM implementation services",
          "itemListElement": capabilities.map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title, "description": cap.text }
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
          /* CRM implementation service page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .crm-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .crm-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .crm-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .crm-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: a lead moving through a well-set-up CRM */
          .lead-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .lead-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .lsteps li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:12px;align-items:center;padding:9px 0;position:relative;font-size:.925rem;color:var(--ink);font-weight:600;line-height:1.3}
          .lsteps li:not(:last-child)::after{content:"";position:absolute;left:6.5px;top:28px;height:calc(100% - 20px);width:1px;background:var(--light-sage)}
          .lsteps .dot{width:14px;height:14px;border:2px solid var(--c);background:var(--warm-white)}
          .lsteps small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .lead-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* Three starting points */
          .starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
          .start h3{font-size:1.45rem;margin-bottom:10px}
          .start > p{font-size:.95rem;line-height:1.5}
          .start ul{margin-top:16px}
          .start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          /* What we implement */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start;scroll-margin-top:110px}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}

          /* Why implementations fail */
          .fails{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .fails li{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:24px;padding:22px 0;border-bottom:1px solid var(--light-sage);align-items:baseline}
          .fails .cause{display:flex;align-items:baseline;gap:14px;font-size:1.2rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3}
          .fails .n{font-size:.875rem;font-weight:700;color:var(--coral)}
          .fails p{font-size:1rem;line-height:1.55}

          /* Platforms */
          .plat-groups{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px 24px;margin-top:clamp(36px,4vw,52px)}
          .pg h3{display:flex;align-items:center;gap:10px;font-size:1rem;font-weight:700;margin-bottom:10px}
          .pg h3::before{content:"";width:5px;height:18px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .pg ul{display:flex;flex-wrap:wrap;gap:6px}
          .pg a,.pg span{font-size:.875rem;font-weight:500;padding:5px 10px;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:4px;color:var(--ink);text-decoration:none;transition:border-color var(--t) var(--ease)}
          .pg a:hover{border-color:var(--sage)}
          .plat-note{margin-top:28px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

          /* Process */
          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          /* Before and after */
          .two-col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}

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
          .trust-note{margin-top:32px;font-size:.85rem;color:var(--sage);max-width:72ch}

          @media (max-width:1040px){
            .crm-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .starts{grid-template-columns:1fr}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .plat-groups{grid-template-columns:repeat(2,minmax(0,1fr))}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .lead-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.conn,.plat-groups{grid-template-columns:1fr}
            .fails li{grid-template-columns:1fr;gap:6px}
            .flow6{grid-template-columns:1fr 1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="crm-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services / CRM implementation</p>
              <h1 id="hero-title">CRM implementation services, built around how you sell</h1>
              <p className="sub">
                Sage Kite sets up CRMs that teams actually use. We map how you win and keep customers, then build the pipeline, data, automation and reporting to match, so every lead has an owner and a next step.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your CRM</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>{PLATFORMS.length} platforms, or custom</span>
                <span><span className="dot" style={c('var(--sky)')}></span>New, existing or migrating</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">A new lead in a well-set-up CRM</b><span>Example</span></p>
                <ol className="lsteps">
                  <li style={c('var(--butter)')}><span className="dot"></span>Enquiry captured<small>Form</small></li>
                  <li style={c('var(--sage)')}><span className="dot"></span>Owner assigned<small>Routing</small></li>
                  <li style={c('var(--sky)')}><span className="dot"></span>Follow-up starts<small>Automation</small></li>
                  <li style={c('var(--coral)')}><span className="dot"></span>Call booked and held<small>Your team</small></li>
                  <li style={c('var(--ink)')}><span className="dot"></span>Deal moves stage<small>Pipeline</small></li>
                  <li style={c('var(--sage)')}><span className="dot"></span>Source to revenue reported<small>Dashboard</small></li>
                </ol>
              </div>
              <figcaption>Illustrative. Your process is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Most CRM problems are setup problems.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">The platform is rarely the cause. These come from a CRM set up without a map of how the business actually sells, and they can usually be fixed without switching.</p>
          </div>
        </section>

        {/* Three starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new CRM, one that needs fixing, or a move to a new one.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New CRM setup</h3>
                <p>You are choosing or starting a CRM and want it right before the team relies on it.</p>
                <ul>
                  <li>Platform recommendation, if you have not chosen</li>
                  <li>Process mapped before configuration</li>
                  <li>Pipeline, automation and reporting built</li>
                  <li>Tested and trained before go-live</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>CRM cleanup and optimisation</h3>
                <p>You have a CRM, but it has drifted away from how the business works.</p>
                <ul>
                  <li>Audit of data, pipeline and automations</li>
                  <li>Duplicates, fields and tags cleaned up</li>
                  <li>Pipeline and workflows rebuilt to fit</li>
                  <li>Reporting the team can trust</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>CRM migration</h3>
                <p>You are moving from spreadsheets or another platform.</p>
                <ul>
                  <li>Export options confirmed in discovery</li>
                  <li>Data mapped, cleaned and de-duplicated</li>
                  <li>Workflows rebuilt, not just copied</li>
                  <li>Old tools retired once the new setup is live</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we implement */}
        <section className="rule sec" id="what-we-implement" aria-labelledby="impl-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we implement</p>
              <h2 id="impl-title">What CRM implementation covers.</h2>
              <p className="sub">Your proposal lists which of these your project includes. What is possible depends on the platform and plan, which we confirm in discovery.</p>
            </div>
            <div className="cap-list">
              {capabilities.map((cap) => (
                <div key={cap.title} className="cap-row" style={c(cap.color)} id={cap.title.startsWith('Custom') ? 'custom-crm' : undefined}>
                  <h3>{cap.title}</h3>
                  <p>{cap.text}</p>
                  <div className="tags">
                    {cap.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why implementations fail */}
        <section className="pale sec" id="why-crms-fail" aria-labelledby="fail-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Getting it right</p>
              <h2 id="fail-title">Why CRM implementations fail, and what we do instead.</h2>
              <p className="sub">The same few causes come up again and again. None of them is about the software.</p>
            </div>
            <ol className="fails">
              {failures.map((f, i) => (
                <li key={f.cause}>
                  <span className="cause"><span className="n">{String(i + 1).padStart(2, '0')}</span>{f.cause}</span>
                  <p>{f.fix}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Platforms */}
        <section className="sec" id="platforms" aria-labelledby="platforms-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Platforms</p>
              <h2 id="platforms-title">The platforms we implement.</h2>
              <p className="sub">General CRMs and industry platforms, each set up around your process. Each platform page explains the work in detail.</p>
            </div>
            <div className="plat-groups">
              {groups.map((g) => (
                <div key={g.id} className="pg" style={c(g.color)}>
                  <h3>{g.label}</h3>
                  <ul>
                    {g.platforms.map((p) => (
                      <li key={p.name}>
                        {p.slug ? <Link href={`/platforms/${p.slug}`}>{p.name}</Link> : <span>{p.name}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="plat-note">Not sure which platform fits? <Link className="link" href="/platforms">Compare the platforms we implement</Link>. If none fits how you sell, we can build a <a className="link" href="#custom-crm">custom CRM</a>.</p>
          </div>
        </section>

        {/* Process */}
        <section className="rule sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a CRM implementation runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How you sell, your current tools and data, access and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Process map</h3><p>Stages, ownership, fields and automations agreed before building.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Configuration, data migration, workflows and integrations.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Every path run end to end with test leads before go-live.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training by role, documentation and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your CRM, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Time with the people who sell and follow up</li>
                  <li><Check size={15} aria-hidden="true" />Exports from spreadsheets or your current system</li>
                  <li><Check size={15} aria-hidden="true" />Access to forms, calendars and tools to connect</li>
                  <li><Check size={15} aria-hidden="true" />A decision maker for sign-off</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A configured, tested CRM</li>
                  <li><Check size={15} aria-hidden="true" />Clean, migrated data</li>
                  <li><Check size={15} aria-hidden="true" />Pipelines and automations that match your process</li>
                  <li><Check size={15} aria-hidden="true" />Dashboards for the numbers you run on</li>
                  <li><Check size={15} aria-hidden="true" />Documentation and training by role</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where the CRM sits</p>
              <h2 id="conn-title">The CRM is one part of the growth system.</h2>
              <p className="sub">It records and routes every lead. The work around it decides what to sell, brings demand in and keeps the system running.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Decide what the CRM must support before anything is built.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media and email that bring leads into the CRM.</span></Link>
              <Link href="/services/specialist-staffing#crm-automation-va" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to keep data clean and workflows running.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>CRM builds for your clients, delivered under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">CRM implementation FAQs</h2>
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
              <p className="trust-note">Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>GHL Scale Up</a>.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Process</span>
                <span><span className="dot" style={c('var(--sage)')}></span>CRM</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Build a CRM your team relies on.</h2>
              <p className="sub">A discovery call looks at how you sell today, the system you have or are considering, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/platforms" className="link">See the platforms we implement</Link>
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
