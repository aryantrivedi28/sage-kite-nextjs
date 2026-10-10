import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/keap";

export const metadata: Metadata = {
  title: "Keap CRM Consulting & Automation Services | Sage Kite",
  description: "Keap consulting from Sage Kite: contact cleanup, automation, sales pipeline, appointments, payments and reporting, built around how your business sells.",
  keywords: ["Keap consultant", "Keap automation expert", "Keap CRM setup", "Infusionsoft consultant", "Keap Campaign Builder", "Keap migration"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Keap CRM consulting and automation services | Sage Kite",
    description: "Sage Kite sets up Keap around how you sell: clean contacts and tags, follow-up automation, sales pipeline, appointments, quotes, payments and reporting.",
  },
  twitter: {
    card: "summary",
    title: "Keap CRM consulting and automation services | Sage Kite",
    description: "Keap setup and cleanup for small businesses: tags, automations, pipeline, appointments, payments, reporting and training.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Contacts, tags and fields", color: "var(--sage)", offered: true, tags: ["Contacts", "Tags", "Custom fields"], text: "Contacts, companies, tags and custom fields structured once and written down, so every automation and report works from the same clean data." },
  { title: "Lead capture", color: "var(--coral)", offered: true, tags: ["Forms", "Landing pages", "Funnels"], text: "Forms, landing pages and multi-page funnels built in Keap's builder with your existing brand, so every enquiry is tagged and followed up." },
  { title: "Lead scoring and segments", color: "var(--butter)", offered: true, tags: ["Lead scoring", "Segments"], text: "Lead scoring and saved segments that show who is ready for a conversation, and who should stay in a nurture sequence for now." },
  { title: "Automations", color: "var(--sky)", offered: true, tags: ["Advanced Automations", "Easy Automations", "Campaign Builder"], text: "Follow-up, nurture and onboarding sequences built with Advanced Automations, Easy Automations or Campaign Builder in older accounts, mapped and tested before they go live." },
  { title: "Sales pipeline", color: "var(--ink)", offered: true, tags: ["Stages", "Tasks", "Deal automation"], text: "Pipeline stages that match how deals really move, with tasks and automations that fire as an opportunity changes stage." },
  { title: "Appointments", color: "var(--coral)", offered: true, tags: ["Scheduler", "Reminders"], text: "Keap's appointment scheduler connected to your calendar, with confirmations and reminders by email or text, so fewer calls are missed." },
  { title: "Quotes, invoices and payments", color: "var(--butter)", offered: true, tags: ["Quotes", "Invoices", "Checkout", "Keap Pay"], text: "Quotes, invoices and checkout forms, with Keap Pay or your existing processor, and follow-up that starts as soon as someone pays." },
  { title: "Email and text marketing", color: "var(--sage)", offered: true, tags: ["Broadcasts", "SMS", "Templates"], text: "Email broadcasts, templates and text messages sent from the same database. Text messaging is a paid add-on in Keap." },
  { title: "Integrations and reporting", color: "var(--ink)", offered: true, tags: ["Zapier", "Webhooks", "Reports"], text: "Zapier, API or webhook connections where Keap has no native link, and reports on leads, pipeline, revenue and campaign performance." },
  { title: "Keap's required implementation", color: "var(--light-sage)", offered: false, tags: ["Sold by Keap"], text: "New Keap subscriptions include a required implementation package from Keap. We do not replace it. We work alongside it or after it." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Keap consulting",
    items: [
      { q: "What does a Keap consultant do?", a: "A Keap consultant designs how Keap should run your sales and follow-up, then builds it: clean contacts and tags, lead capture, automations, a sales pipeline, appointments, payments and reporting. Sage Kite starts by mapping how a lead becomes a customer, then configures Keap to match, tests it and trains your team." },
      { q: "Doesn't Keap require its own implementation?", a: "Yes. Keap requires an implementation package with new subscriptions, which can include business mapping, done-for-you automations and data import. We do not replace it. We help you decide what to ask for, build what the package does not cover, and improve the account after go-live." },
      { q: "Can you clean up an old Keap or Infusionsoft account?", a: "Yes. Many accounts date back to Infusionsoft and carry years of unused tags, old campaigns nobody dares switch off, and a pipeline no one uses. We audit what is there, retire what is dead, rebuild the automations that matter and document how the account works." },
      { q: "How long does a Keap project take?", a: "It depends on how much data you have, how many automations need building or fixing, and whether payments and appointments are in scope. A focused cleanup is a much smaller project than a full rebuild with a migration. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and automation",
    items: [
      { q: "Can you migrate our contacts to Keap?", a: "Usually. We move contacts, tags and history from spreadsheets, email tools or another CRM, clean and de-duplicate them on the way in, and map them to the tags and fields your automations need. We confirm what your current system can export during discovery." },
      { q: "Can you build Keap automations?", a: "Yes. We build follow-up, nurture, appointment and onboarding sequences with Advanced Automations or Easy Automations, or Campaign Builder in older accounts. Every path is mapped first and tested with real contacts before it goes live." },
      { q: "Can Keap take payments and send invoices?", a: "Yes. Keap includes quotes, invoices and checkout forms, and takes payments through Keap Pay or a third-party processor. We set these up so that a payment can trigger the next step, such as an onboarding sequence or a task for your team." },
      { q: "How much does Keap cost?", a: "At the time of writing, Keap sells one plan with the full platform, starting at $299 a month billed annually with two users, plus a required implementation package. The price rises with contacts and extra users, and text messaging is an add-on. Check Keap's pricing page for current figures." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Keap right for my business?", a: "Keap suits small businesses that sell through follow-up, conversations and repeat work, and want contacts, automation, appointments and payments in one place. If you mainly need email marketing, a lighter tool may do. If you sell courses, or work in real estate, a specialist platform usually fits better. Discovery is where we tell you honestly which way we would go." },
      { q: "Is Sage Kite a Keap Certified Partner?", a: "No. Sage Kite is an independent consultant. Keap is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Keap or Thryv. We work on your behalf and are paid by you, not by Keap." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training and documentation of your tags, automations and pipeline. Where it helps, Sage Kite offers maintenance with a defined support scope, and a CRM and automation VA to keep data clean and automations running." },
      { q: "Is Sage Kite only a Keap consultant?", a: "No. Sage Kite is a business growth consultancy. Keap is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Keap runs your follow-up and sales; the broader work decides what to change and brings in the leads." },
    ],
  },
];

// Hero diagram: one illustrative lead journey. `human` marks the step kept with a person.
const journey = [
  { step: "Lead captured on a form", tool: "Form", color: "var(--sky)" },
  { step: "Tagged and scored", tool: "Tag", color: "var(--sky)" },
  { step: "Follow-up sequence starts", tool: "Automation", color: "var(--sky)" },
  { step: "Appointment booked", tool: "Scheduler", color: "var(--sky)" },
  { step: "Sales conversation", tool: "You", color: "var(--butter)", human: true },
  { step: "Quote, invoice or checkout", tool: "Payment", color: "var(--coral)" },
  { step: "Onboarding and repeat sales", tool: "Pipeline", color: "var(--sage)" },
];

// Keap's required implementation compared with Sage Kite's work. From keap.com/pricing, September 2026.
const onboarding = [
  { row: "Starts from", keap: "Keap's templates and your goals", sagekite: "Your sales process and team routines" },
  { row: "Mainly", keap: "Business mapping, done-for-you automations and data import", sagekite: "Cleanup, automation, pipeline and reporting tied to your growth plan" },
  { row: "When", keap: "When you subscribe, required by Keap", sagekite: "Before you buy, alongside it, or years after go-live" },
  { row: "Beyond Keap", keap: "Focused on the Keap product", sagekite: "Connected to consultancy, marketing and staffing" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function KeapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.sagekite.com/#organization",
        "name": "Sage Kite",
        "url": "https://www.sagekite.com/"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.sagekite.com/platforms/keap/#webpage",
        "url": PAGE_URL,
        "name": "Keap CRM consulting and automation services | Sage Kite",
        "description": "Sage Kite sets up Keap for small businesses: contacts, tags and fields, lead capture, lead scoring, automations, sales pipeline, appointments, quotes, invoices and payments, email and text, integrations and reporting.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/keap/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/keap/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/keap/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Keap" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/keap/#service",
        "name": "Keap CRM consulting and automation services",
        "serviceType": "Keap setup, configuration and automation",
        "description": "Sales process mapping, Keap contacts, tags and custom fields, lead capture, lead scoring, Advanced Automations and Easy Automations, sales pipeline, appointments, quotes, invoices and payments, email and text marketing, integrations, reporting, data migration, account cleanup, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Small businesses" },
          { "@type": "Audience", "audienceType": "Service businesses" },
          { "@type": "Audience", "audienceType": "Coaches and consultants" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Keap",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/keap/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/keap/#service" },
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
          /* Keap page additions, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .pl-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .pl-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .pl-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .pl-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          .journey-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .journey-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .jsteps li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:12px;align-items:center;padding:9px 0;position:relative;font-size:.925rem;color:var(--ink);font-weight:600;line-height:1.3}
          .jsteps li:not(:last-child)::after{content:"";position:absolute;left:6.5px;top:28px;height:calc(100% - 20px);width:1px;background:var(--light-sage)}
          .jsteps .dot{width:14px;height:14px;border:2px solid var(--c);background:var(--warm-white)}
          .jsteps li.human .dot{background:var(--butter-soft)}
          .jsteps small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .journey-fig .key{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:10px;padding-top:12px;border-top:1px dashed var(--light-sage);font-size:.75rem;color:var(--sage);font-weight:600}
          .journey-fig .key span{display:inline-flex;align-items:center;gap:6px}
          .journey-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          .starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
          .start h3{font-size:1.45rem;margin-bottom:10px}
          .start > p{font-size:.95rem;line-height:1.5}
          .start ul{margin-top:16px}
          .start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}
          .cap-row.muted h3,.cap-row.muted p{color:var(--sage)}

          /* Onboarding comparison: two cards whose rows line up (subgrid) */
          .vs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 16px;margin-top:clamp(36px,4vw,52px)}
          .vs-col{display:grid;grid-row:span 6;grid-template-rows:subgrid;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:clamp(22px,3vw,32px);padding-bottom:8px}
          .vs-col.them{background:transparent}
          .vs-col.us{background:var(--warm-white)}
          .vs-k{font-size:.8125rem;font-weight:600;color:var(--sage)}
          .vs-col h3{font-size:1.45rem;margin:2px 0 14px}
          .vs-row{margin:0;border-top:1px solid var(--light-sage);padding:14px 0 16px}
          .vs-row dt{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:4px}
          .vs-row dd{margin:0;font-size:1rem;line-height:1.5;color:var(--dark-sage)}
          .vs-col.us .vs-row dd{color:var(--ink)}
          .compare-note{margin-top:20px;max-width:72ch}

          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          .two-col,.fit2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}
          .fit2 .panel p{font-size:.95rem;line-height:1.55;margin-top:14px}

          .proof-ph{border:1px dashed var(--sage);border-radius:var(--r);padding:clamp(24px,3vw,36px);background:var(--warm-white);box-shadow:10px 10px 0 var(--butter-soft);display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(24px,4vw,56px);align-items:start}
          .proof-ph h2{font-size:clamp(1.6rem,2.6vw,2.1rem)}
          .proof-ph ul li{padding:8px 0;border-top:1px solid var(--light-sage);font-size:.925rem}

          .conn{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
          .conn a{display:flex;flex-direction:column;gap:6px;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:20px 20px 22px;background:var(--warm-white);text-decoration:none;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease)}
          .conn a:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
          .conn strong{font-size:1.15rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.25}
          .conn span{font-size:.875rem;line-height:1.45}

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
            .pl-hero .hero-grid{grid-template-columns:1fr}
            .symptoms,.starts{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .proof-ph,.faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .journey-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.starts,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .flow6{grid-template-columns:1fr 1fr}
            .vs{grid-template-columns:1fr;gap:16px}
            .vs-col{display:block;grid-row:auto}
          }
        ` }} />

        {/* Hero */}
        <section className="pl-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Platforms / Keap</p>
              <h1 id="hero-title">Keap CRM consulting and automation services</h1>
              <p className="sub">
                Sage Kite sets up Keap around how your business actually sells. We map how a lead becomes a customer, then build the contacts, automations, pipeline, appointments and payments to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Keap setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Infusionsoft cleanups</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A lead&apos;s journey in Keap</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Keap</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with a person</span>
                </p>
              </div>
              <figcaption>Illustrative. Your journey is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Keap can automate most of your follow-up. Most accounts automate very little of it.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Tags nobody trusts</strong><p>Hundreds of tags from years of campaigns, and no one knows which ones still matter.</p></li>
              <li><strong>Old campaigns still running</strong><p>Sequences built years ago keep sending, and nobody dares switch them off.</p></li>
              <li><strong>A pipeline nobody uses</strong><p>Deals tracked in heads and spreadsheets while the Keap pipeline sits empty.</p></li>
              <li><strong>Leads that wait</strong><p>Form fills arrive untagged, so follow-up depends on someone noticing them.</p></li>
              <li><strong>Payments without a next step</strong><p>Invoices get paid, but nothing starts onboarding or tells the team.</p></li>
              <li><strong>Automation bought, email used</strong><p>Keap is paid for as an automation platform and used as a newsletter tool.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from building Keap one campaign at a time, without a map of how the business sells.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new Keap account, one that needs fixing, or a move to Keap.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Keap setup</h3>
                <p>You have bought Keap, or are about to, and want it built around how you sell.</p>
                <ul>
                  <li>Sales process mapped from enquiry to repeat sale</li>
                  <li>Tags, fields and pipeline stages agreed first</li>
                  <li>Follow-up automations built and tested</li>
                  <li>Appointments and payments connected</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Keap or Infusionsoft cleanup</h3>
                <p>Your account has grown for years and nobody is sure what it does any more.</p>
                <ul>
                  <li>Audit of tags, automations and pipeline</li>
                  <li>Dead tags and campaigns retired safely</li>
                  <li>Key automations rebuilt and documented</li>
                  <li>Reports the team actually uses</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Migration to Keap</h3>
                <p>You are moving from spreadsheets, an email tool or another CRM.</p>
                <ul>
                  <li>Export and field mapping confirmed in discovery</li>
                  <li>Contacts cleaned and de-duplicated</li>
                  <li>Tags mapped to the automations that use them</li>
                  <li>Old tools retired once Keap is live</li>
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
              <h2 id="impl-title">What Keap setup covers.</h2>
              <p className="sub">Keap sells one plan with the full platform. Text messaging and extra contacts cost more, so we confirm what your account includes during discovery.</p>
            </div>
            <div className="cap-list">
              {capabilities.map((cap) => (
                <div key={cap.title} className={cap.offered ? 'cap-row' : 'cap-row muted'} style={c(cap.color)}>
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

        {/* Keap implementation vs Sage Kite */}
        <section className="pale sec" id="onboarding" aria-labelledby="onb-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Keap&apos;s implementation or Sage Kite?</p>
              <h2 id="onb-title">Keap&apos;s implementation gets you started. We build around how you sell.</h2>
              <p className="sub">Keap requires an implementation package with new subscriptions. It is useful. Our work sits around it, and often starts long after it ends.</p>
            </div>
            <div className="vs">
              <div className="vs-col them" style={c('var(--light-sage)')}>
                <p className="vs-k">Required by Keap</p>
                <h3>Keap implementation</h3>
                {onboarding.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.keap}</dd></dl>
                ))}
              </div>
              <div className="vs-col us" style={c('var(--coral)')}>
                <p className="vs-k">Around it</p>
                <h3>Sage Kite</h3>
                {onboarding.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.sagekite}</dd></dl>
                ))}
              </div>
            </div>
            <p className="compare-note note">
              What Keap&apos;s implementation package includes depends on the option you choose, so confirm it with Keap. Current plans and prices are on <a className="link" href="https://keap.com/pricing" target="_blank" rel="noopener noreferrer">Keap&apos;s pricing page</a>.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Keap project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your sales process, current account, data and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Process map</h3><p>Tags, fields, pipeline stages and automation paths agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Cleanup, automations, pipeline, appointments and payments.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test contacts and payments run through every path.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training, documentation and optional maintenance.</p></li>
            </ol>
          </div>
        </section>

        {/* Access and deliverables */}
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your Keap account, or your plan details</li>
                  <li><Check size={15} aria-hidden="true" />Exports from any tools you are moving from</li>
                  <li><Check size={15} aria-hidden="true" />Your offers, prices and how you take payment</li>
                  <li><Check size={15} aria-hidden="true" />Existing email and text templates you want to keep</li>
                  <li><Check size={15} aria-hidden="true" />One person who signs off the sales process</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Clean contacts with a documented tag scheme</li>
                  <li><Check size={15} aria-hidden="true" />Lead capture connected to follow-up</li>
                  <li><Check size={15} aria-hidden="true" />Automations mapped, built and tested</li>
                  <li><Check size={15} aria-hidden="true" />A pipeline that matches how deals move</li>
                  <li><Check size={15} aria-hidden="true" />Appointments and payments that trigger next steps</li>
                  <li><Check size={15} aria-hidden="true" />Training and written documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Keap right for you?</p>
              <h2 id="fit-title">Keap suits small businesses that sell through follow-up.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Service businesses, coaches, consultants and small B2B teams that win work through conversations and repeat business, and want contacts, automation, appointments and payments in one place.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>Keap is priced as a full platform, so check it earns its cost. If you mainly need email marketing, <Link className="link" href="/platforms/activecampaign">ActiveCampaign</Link> may be enough. Real estate teams are usually better served by <Link className="link" href="/platforms/lofty">Lofty</Link>, and course businesses by <Link className="link" href="/platforms/kajabi">Kajabi</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist experience: placeholder until approved, attributed examples exist */}
        <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="proof-title">
          <div className="wrap">
            <div className="proof-ph">
              <div>
                <p className="label">Specialist experience</p>
                <h2 id="proof-title">Previous Keap work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: '10px' }}>Examples are being prepared. We publish only approved, attributed work. Each example will show:</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with client details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where Keap sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Keap sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Keap runs your follow-up and sales. The work around it decides what to change and keeps new leads arriving.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Decide what your sales process should be before you automate it.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media and email that fill the pipeline you built.</span></Link>
              <Link href="/services/specialist-staffing#crm-automation-va" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to keep contacts clean and automations running.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Keap builds for your clients, delivered under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Keap consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Keap is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Keap or Thryv.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Leads</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Keap</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Build Keap around how you sell.</h2>
              <p className="sub">A discovery call looks at your current account or plan, how you win customers today, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                <Link href="/platforms" className="link">See other platforms we implement</Link>
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
