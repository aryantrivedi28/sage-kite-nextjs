import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/kajabi";

export const metadata: Metadata = {
  title: "Kajabi Setup & Implementation Services | Sage Kite",
  description: "Kajabi setup from Sage Kite: offers, checkout, funnels, email, automations and migrations, built around how coaches and course businesses enrol students.",
  keywords: ["Kajabi expert", "Kajabi setup services", "Kajabi migration", "Kajabi automation", "Kajabi funnels", "Kajabi for coaches"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Kajabi setup and implementation services | Sage Kite",
    description: "Sage Kite sets up Kajabi around the enquiry, enrolment and student journey: offers, checkout, funnels, tags, email automations and migrations.",
  },
  twitter: {
    card: "summary",
    title: "Kajabi setup and implementation services | Sage Kite",
    description: "Kajabi setup for coaches and course businesses: offers, checkout, funnels, tags, email automations, student onboarding and migrations.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Products and access", color: "var(--sage)", offered: true, tags: ["Courses", "Coaching", "Communities", "Memberships"], text: "Courses, coaching programmes, communities and memberships structured so each student gets exactly the access they paid for, and nothing breaks when you add a new product." },
  { title: "Offers and checkout", color: "var(--coral)", offered: true, tags: ["Offers", "Payment plans", "Upsells", "Kajabi Payments"], text: "Offers, pricing, payment plans and subscriptions, with coupons, upsells and order bumps where they suit the offer. Kajabi Payments or your existing processor set up and tested." },
  { title: "Funnels and pages", color: "var(--butter)", offered: true, tags: ["Opt-in pages", "Sales pages", "Funnels"], text: "Opt-in, sales, checkout and thank-you pages built in Kajabi's page builder with your existing brand, connected into funnels you can reuse for each launch." },
  { title: "Contacts, tags and segments", color: "var(--ink)", offered: true, tags: ["Tags", "Segments", "Forms"], text: "A tagging scheme designed once and written down, and segments you can trust, so the right people get the right email and nobody is emailed by accident." },
  { title: "Email and automations", color: "var(--sky)", offered: true, tags: ["Sequences", "Broadcasts", "Automations"], text: "Welcome, nurture, launch and re-engagement sequences, with automations triggered by forms, purchases and progress. Advanced automations need a Growth or Pro plan." },
  { title: "Coaching enquiry journey", color: "var(--coral)", offered: true, tags: ["Applications", "Call booking", "Follow-up"], text: "Application forms, call booking and follow-up for coaching sold through conversations, connected to a CRM where the sales process needs one." },
  { title: "Student onboarding and retention", color: "var(--sage)", offered: true, tags: ["Onboarding", "Progress", "Renewals"], text: "The first login, welcome emails, progress nudges and community setup that help students finish, and renewal or next-offer journeys when they do." },
  { title: "Kajabi AI tools", color: "var(--sky)", offered: true, tags: ["AI review", "Guardrails"], text: "A review of where Kajabi's AI tools, such as Cofounder and Expert Agents, would help your business, and set-up with sensible limits where they do." },
  { title: "Integrations and reporting", color: "var(--ink)", offered: true, tags: ["Tracking", "Zapier", "Reporting"], text: "Analytics and ad tracking, plus Zapier or webhooks where Kajabi has no native connection, and reporting on revenue, subscribers and engagement." },
  { title: "Custom website and brand design", color: "var(--light-sage)", offered: false, tags: ["Uses your brand"], text: "Not offered at present. We build pages within Kajabi's page builder using the brand you already have." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Kajabi setup services",
    items: [
      { q: "What does a Kajabi expert do?", a: "A Kajabi expert designs how Kajabi should run your business, then builds it: products and access, offers and checkout, funnels and pages, a tagging scheme, email sequences and automations, and the onboarding that helps students finish. Sage Kite starts by mapping the journey from first enquiry to renewal, so the setup follows how you actually sell." },
      { q: "Can you set up Kajabi from scratch?", a: "Yes. A new setup starts with your offers and the journey a student takes to buy them. We then build the products, offers, checkout, funnels, tags and automations, and test every path with real sign-ups and purchases before launch." },
      { q: "Can you fix an existing Kajabi account?", a: "Yes. Many accounts have grown one launch at a time: too many tags, tangled offers, and funnels rebuilt for every launch. We audit what is there, consolidate tags and segments, make funnels and sequences reusable, and add the onboarding and renewal journeys that are usually missing." },
      { q: "How long does a Kajabi setup take?", a: "It depends on the number of products and offers, how much content and data needs to move, and how many automations the journey needs. A single course with one funnel is a much smaller project than a full migration with coaching and a community. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and migration",
    items: [
      { q: "Can you migrate my courses and students to Kajabi?", a: "Usually. We move course content, contacts and tags from other course platforms, websites and email tools, and recreate student access in the right Kajabi products. We confirm what your current platform can export during discovery." },
      { q: "Can active subscriptions and payment plans be moved?", a: "Sometimes. Moving recurring payments depends on your current payment processor and how the subscriptions were set up. It needs care, because a mistake can mean a missed or double charge, so we confirm what is feasible in discovery before it is included in scope." },
      { q: "Do you build Kajabi sales pages and websites?", a: "We build opt-in, sales, checkout and thank-you pages in Kajabi's page builder using your existing brand, as part of your funnels. We do not currently offer custom website or brand design." },
      { q: "Which Kajabi plan do I need?", a: "It depends on how many products you sell, how many contacts you have and how much automation your journey needs. Advanced automations need a Growth or Pro plan, and removing Kajabi branding or a branded mobile app needs Pro. We recommend the smallest plan that runs your journey properly." },
      { q: "Can Kajabi handle high-ticket coaching sold on calls?", a: "Kajabi handles applications, scheduling and payment well. It is not designed as a sales CRM for tracking many conversations through a pipeline. If most of your revenue comes from sales calls, we assess whether a CRM such as GoHighLevel or Keap should sit alongside Kajabi." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Sage Kite a Kajabi partner?", a: "Sage Kite is an independent implementation partner. Kajabi is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Kajabi. We set up the platform on your behalf and are paid by you, not by Kajabi." },
      { q: "What happens after the setup?", a: "You own the account and can run it. Handover includes training and a documented tagging scheme. Where it helps, Sage Kite offers maintenance with a defined support scope, launch support, and the marketing and specialist staffing that keep new students arriving." },
      { q: "Is Sage Kite only a Kajabi agency?", a: "No. Sage Kite is a business growth consultancy. Kajabi is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Kajabi runs enrolment and delivery; the broader work decides what to sell and brings in the students." },
    ],
  },
];

// Hero diagram: one illustrative student journey. `human` marks the step kept with a person.
const journey = [
  { step: "Opt-in or application", tool: "Form", color: "var(--sky)" },
  { step: "Tagged and nurtured", tool: "Automation", color: "var(--sky)" },
  { step: "Sales page, or a call booked", tool: "Funnel", color: "var(--sky)" },
  { step: "Conversation, for high-ticket offers", tool: "You", color: "var(--butter)", human: true },
  { step: "Checkout and payment plan", tool: "Offer", color: "var(--coral)" },
  { step: "Access and welcome sequence", tool: "Product", color: "var(--sky)" },
  { step: "Renewal or next offer", tool: "Segment", color: "var(--sage)" },
];

// From Kajabi's published pricing, September 2026 (kajabi.com/pricing). Recheck when editing.
const plans = [
  { row: "Products", basic: "5", growth: "50", pro: "Unlimited" },
  { row: "Contacts", basic: "2,500", growth: "25,000", pro: "100,000" },
  { row: "Advanced automations", basic: "Not included", growth: "Included", pro: "Included" },
  { row: "Remove Kajabi branding", basic: "Not included", growth: "Not included", pro: "Included" },
  { row: "Branded mobile app", basic: "Not included", growth: "Not included", pro: "Included" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function KajabiPage() {
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
        "@id": "https://www.sagekite.com/platforms/kajabi/#webpage",
        "url": PAGE_URL,
        "name": "Kajabi setup and implementation services | Sage Kite",
        "description": "Sage Kite sets up Kajabi for coaches and course businesses: products, offers and checkout, funnels, contacts and tags, email automations, student onboarding, migrations, testing and handover.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/kajabi/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/kajabi/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/kajabi/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Kajabi" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/kajabi/#service",
        "name": "Kajabi setup and implementation services",
        "serviceType": "Kajabi setup, configuration and implementation",
        "description": "Enrolment journey mapping, Kajabi product structure, offers and checkout, funnels and pages, contacts, tags and segments, email sequences and automations, coaching enquiry journeys, student onboarding, integrations, migration, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Coaches" },
          { "@type": "Audience", "audienceType": "Online course businesses" },
          { "@type": "Audience", "audienceType": "Membership and community businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Kajabi",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/kajabi/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/kajabi/#service" },
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
          /* Kajabi page additions, built from the approved homepage system */
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

          .compare{width:100%;border-collapse:collapse;margin-top:clamp(36px,4vw,52px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;font-size:.975rem}
          .compare th,.compare td{padding:16px 20px;border-bottom:1px solid var(--light-sage);vertical-align:top;line-height:1.5;text-align:center}
          .compare thead th{background:var(--pale-sage);color:var(--ink);font-weight:700;font-size:1rem}
          .compare thead th:first-child,.compare tbody th{text-align:left}
          .compare tbody th{font-weight:600;color:var(--sage);font-size:.875rem;width:30%}
          .compare tbody tr:last-child th,.compare tbody tr:last-child td{border-bottom:0}
          .compare .yes{color:var(--ink);font-weight:600}
          .compare .no{color:var(--sage)}
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
            .compare,.compare tbody{display:block;width:100%}
            .compare thead{display:none}
            .compare tr{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
            .compare tbody th{grid-column:1/-1;width:auto;padding:10px 14px;border-bottom:0;background:var(--pale-sage)}
            .compare td{padding:10px 14px;font-size:.9rem;text-align:left}
            .compare td::before{content:attr(data-h);display:block;font-size:.75rem;font-weight:700;color:var(--sage);margin-bottom:2px}
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
              <p className="label">Platforms / Kajabi</p>
              <h1 id="hero-title">Kajabi setup and implementation services</h1>
              <p className="sub">
                Sage Kite sets up Kajabi around how coaches and course businesses actually enrol and keep their students. We map the journey from first enquiry to renewal, then build the offers, checkout, funnels, tags, email automations and member onboarding to match it.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Kajabi setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Migrations to Kajabi</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A student journey in Kajabi</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Kajabi</span>
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
              <h2 id="problems-title">Kajabi can run the whole business. Most accounts only run part of it.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Tags nobody understands</strong><p>Years of launches leave dozens of tags, and no one is sure which segment is safe to email.</p></li>
              <li><strong>Offers and products tangled</strong><p>One course sold through several offers, each granting slightly different access.</p></li>
              <li><strong>Every launch built by hand</strong><p>Funnels, emails and deadlines recreated from scratch instead of reused.</p></li>
              <li><strong>Buyers left to find their way</strong><p>No welcome sequence, so students pay, log in once and quietly stop.</p></li>
              <li><strong>Applications sit in an inbox</strong><p>High-ticket enquiries arrive, but call booking and follow-up happen from memory.</p></li>
              <li><strong>Too many tools stitched together</strong><p>An old email platform, a scheduler and a chain of Zaps doing what Kajabi could do natively.</p></li>
            </ul>
            <p className="after-line">These are rarely platform problems. They come from building Kajabi one launch at a time, without a map of the journey it is meant to run.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new Kajabi account, one that needs fixing, or a move to Kajabi.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Kajabi setup</h3>
                <p>You are launching on Kajabi and want the structure right before students arrive.</p>
                <ul>
                  <li>Offers, products and access mapped first</li>
                  <li>Checkout, payment plans and funnels built</li>
                  <li>Tagging scheme and email automations set up</li>
                  <li>Tested with real purchases before launch</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Kajabi account cleanup</h3>
                <p>You have run Kajabi for a while and it has grown messy with each launch.</p>
                <ul>
                  <li>Audit of offers, products, tags and automations</li>
                  <li>Tags consolidated and segments rebuilt</li>
                  <li>Funnels and sequences made reusable</li>
                  <li>Onboarding and renewal journeys added</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Migration to Kajabi</h3>
                <p>You are moving from another course platform, website or email tool.</p>
                <ul>
                  <li>Content, contacts and tags moved and mapped</li>
                  <li>Student access recreated in the right products</li>
                  <li>Recurring payments assessed in discovery</li>
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
              <h2 id="impl-title">What Kajabi setup covers.</h2>
              <p className="sub">Some features depend on your Kajabi plan. We confirm what yours supports during discovery.</p>
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

        {/* Plans */}
        <section className="pale sec" id="plans" aria-labelledby="plans-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Which Kajabi plan?</p>
              <h2 id="plans-title">The plan decides what can be automated.</h2>
              <p className="sub">We recommend the smallest plan that runs your journey properly. We do not earn commission on your subscription.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">What changes the setup</span></th>
                  <th scope="col">Basic</th>
                  <th scope="col">Growth</th>
                  <th scope="col">Pro</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.row}>
                    <th scope="row">{p.row}</th>
                    {([['Basic', p.basic], ['Growth', p.growth], ['Pro', p.pro]] as const).map(([plan, value]) => (
                      <td key={plan} data-h={plan} className={value === 'Not included' ? 'no' : value === 'Included' ? 'yes' : undefined}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note note">
              Based on Kajabi&apos;s published pricing, September 2026. Kajabi may change its plans, so check <a className="link" href="https://www.kajabi.com/pricing" target="_blank" rel="noopener noreferrer">Kajabi&apos;s pricing page</a> before you buy.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Kajabi setup runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your offers, audience, current tools, plan and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Journey map</h3><p>Offers, access, tags and emails agreed from enquiry to renewal.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Products, checkout, funnels and automations, then any migration.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test purchases and sign-ups run through every path before launch.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training, a documented tag scheme and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your Kajabi account, or your plan choice</li>
                  <li><Check size={15} aria-hidden="true" />Your offers, prices and what each one includes</li>
                  <li><Check size={15} aria-hidden="true" />Course content, or access to your current platform</li>
                  <li><Check size={15} aria-hidden="true" />Contact exports from any email or course tools</li>
                  <li><Check size={15} aria-hidden="true" />Brand assets and copy for pages and emails</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Products, offers and checkout configured</li>
                  <li><Check size={15} aria-hidden="true" />Funnels and pages ready to launch</li>
                  <li><Check size={15} aria-hidden="true" />A documented tagging and segment scheme</li>
                  <li><Check size={15} aria-hidden="true" />Email sequences and automations, tested</li>
                  <li><Check size={15} aria-hidden="true" />Student onboarding from first login</li>
                  <li><Check size={15} aria-hidden="true" />Training for you and your team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Kajabi right for you?</p>
              <h2 id="fit-title">Kajabi suits businesses that sell knowledge, access and community.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Coaches, course creators, membership and community businesses, and experts selling programmes online. It works best when you want courses, email, checkout and community in one place rather than five separate tools.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>If most revenue comes from high-ticket programmes sold on sales calls, you may need sales-pipeline tracking that Kajabi is not built for, so we assess whether a CRM such as GoHighLevel or Keap should sit alongside it. Service businesses that mainly send proposals and contracts are often better served by <Link className="link" href="/platforms/dubsado">Dubsado</Link> or <Link className="link" href="/platforms/honeybook">HoneyBook</Link>.</p>
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
                <h2 id="proof-title">Previous Kajabi work by a Sage Kite delivery specialist</h2>
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

        {/* Where Kajabi sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Kajabi sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Kajabi runs enrolment and delivery. The work around it decides what to sell and keeps new students arriving. See how this fits <Link className="link" href="/industries/coaching">coaches and course businesses</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Offer structure, pricing and launch plans before anything is built.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Email marketing, Meta Ads and SEO that fill your funnels.</span></Link>
              <Link href="/services/specialist-staffing#email-marketing-va" style={c('var(--ink)')}><strong>Email and social media VAs</strong><span>Someone to run broadcasts, launches and community day to day.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Kajabi builds for your clients, delivered under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Kajabi setup FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent implementation partner. Kajabi is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Kajabi.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Offers</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Kajabi</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Students</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Build Kajabi around how you enrol students.</h2>
              <p className="sub">A discovery call looks at your offers, your current setup or plan, and what a fixed-scope project would cover.</p>
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
