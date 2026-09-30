import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/mindbody";

export const metadata: Metadata = {
  title: "Mindbody Setup & Consulting Services | Sage Kite",
  description: "Mindbody consulting from Sage Kite: pricing options, intro offer follow-up, lead management, automated campaigns and retention for fitness and wellness.",
  keywords: ["Mindbody consultant", "Mindbody setup", "Mindbody marketing automation", "Mindbody lead management", "Mindbody for studios", "fitness studio CRM"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Mindbody setup and consulting services | Sage Kite",
    description: "Sage Kite sets up Mindbody around how studios turn first visits into members who stay: pricing, intro offers, leads, campaigns and retention.",
  },
  twitter: {
    card: "summary",
    title: "Mindbody setup and consulting services | Sage Kite",
    description: "Mindbody setup for fitness and wellness businesses: pricing options, intro offer follow-up, lead management, campaigns and retention reporting.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Services, pricing options and contracts", color: "var(--sage)", offered: true, tags: ["Classes", "Pricing options", "Contracts"], text: "Classes, appointments, pricing options, intro offers and membership contracts structured so clients can buy the right thing and nothing old is left on sale." },
  { title: "Online booking", color: "var(--sky)", offered: true, tags: ["Booking widgets", "Mindbody app", "Branded app"], text: "Booking on your website, your listing on the Mindbody app and, where you use it, your branded app, set up so clients can book and pay in a few taps." },
  { title: "Lead management", color: "var(--coral)", offered: true, tags: ["Lead capture", "Pipeline", "Tasks"], text: "Enquiries from your website and social channels captured in Mindbody's lead pipeline, with follow-up tasks so every lead gets a reply." },
  { title: "Intro offer conversion", color: "var(--butter)", offered: true, tags: ["Welcome", "Check-ins", "Offers"], text: "A journey for new clients, with welcome messages, staff check-ins and a membership offer at the right moment, so trials turn into members." },
  { title: "Automated campaigns", color: "var(--sky)", offered: true, tags: ["Email", "Text", "Segments"], text: "Automated email and text campaigns for welcome, birthdays, milestones and inactive clients, sent to segments built from real attendance." },
  { title: "Retention and win-back", color: "var(--ink)", offered: true, tags: ["Attendance drops", "Expiring memberships", "Win-back"], text: "Alerts and campaigns for members whose visits drop off or whose memberships are ending, so the team can step in before they leave." },
  { title: "Messenger[ai] front desk", color: "var(--coral)", offered: true, tags: ["AI front desk", "Booking rules", "Guardrails"], text: "Mindbody's AI front desk set up with your answers, booking rules and limits where you use it, so it books and replies the way your team would." },
  { title: "Payments and memberships billing", color: "var(--sage)", offered: true, tags: ["Autopay", "Cancellation policy", "Retail"], text: "Mindbody Payments, autopays, cancellation and late-cancel policies and retail set up so billing runs on time and policies are applied consistently." },
  { title: "Reporting and staff training", color: "var(--ink)", offered: true, tags: ["Conversion", "Retention", "Training"], text: "Reports on intro offer conversion, retention, attendance and revenue, and training so front desk staff and instructors use Mindbody the same way." },
  { title: "Custom website and brand design", color: "var(--light-sage)", offered: false, tags: ["Connected, not built"], text: "We connect Mindbody booking to your existing website. We do not design websites or branding." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Mindbody consulting",
    items: [
      { q: "What does a Mindbody consultant do?", a: "A Mindbody consultant helps a fitness or wellness business set up and run Mindbody around how it actually wins and keeps clients: pricing options and contracts, online booking, lead management, intro offer follow-up, automated campaigns, retention and reporting. Sage Kite starts by mapping the path from first visit to renewal, then configures Mindbody to match." },
      { q: "Doesn't Mindbody include onboarding?", a: "Yes. Mindbody includes one-on-one onboarding and training on every plan, with no setup fee. That help focuses on using the product. We focus on your process: how intro offers convert, how leads are followed up, how pricing is structured, how members are kept and how you measure it." },
      { q: "Can you clean up an existing Mindbody account?", a: "Yes. Common issues are years of old pricing options still on sale, intro offers with no follow-up, leads that never reach Mindbody, campaigns nobody set up and reports nobody reads. We audit the account, retire what is out of date, rebuild the follow-up and document how the front desk should use it." },
      { q: "How long does a Mindbody project take?", a: "It depends on the number of locations, services and pricing options, and how much follow-up and reporting you need. Tightening one studio's setup is a much smaller project than a multi-location rebuild with a data move. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and setup",
    items: [
      { q: "Can you move our clients and memberships to Mindbody?", a: "We clean and prepare client, membership and pricing data for import, and check the records afterwards. Moving active autopays depends on your current payment processor, so we confirm what is feasible in discovery before it is included in scope." },
      { q: "Can you set up intro offer follow-up in Mindbody?", a: "Yes. We set up a journey for new clients, with welcome messages, reminders, staff check-in tasks and a timed membership offer, so trial clients are followed up consistently instead of when someone remembers." },
      { q: "Can you set up lead management in Mindbody?", a: "Yes. We connect your enquiry forms to Mindbody's lead pipeline and set up follow-up tasks and stages, so the team can see every lead and what happens next. Mindbody lists the lead management dashboard as part of its Ultimate plan." },
      { q: "Can you set up Messenger[ai]?", a: "Yes, where your plan includes it. Mindbody lists its AI front desk as included on Ultimate and as an add-on on Accelerate. We set it up with your answers, booking rules and limits, and review how it replies before clients rely on it." },
      { q: "Which Mindbody plan do we need?", a: "Mindbody's Starter plan starts at $99 a month per location, and Accelerate, Ultimate and Enterprise are priced on request. Automated email and text campaigns and lead management come with Ultimate. We recommend the smallest plan that covers how you sell and keep members." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Mindbody part of ClassPass?", a: "Mindbody and ClassPass are both part of Playlist. Many Mindbody businesses also list on ClassPass. We can set up how ClassPass fits your schedule and pricing, so it fills spare spots without undercutting your own members." },
      { q: "Is Sage Kite a Mindbody partner?", a: "Sage Kite is an independent consultant. Mindbody is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Mindbody or Playlist. We work on your behalf and are paid by you, not by Mindbody." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training for the front desk and managers, and documentation of your pricing, follow-up and campaigns. Where it helps, Sage Kite offers maintenance with a defined support scope, and a marketing operations or social media VA to keep campaigns running." },
      { q: "Is Sage Kite only a Mindbody consultant?", a: "No. Sage Kite is a business growth consultancy. Mindbody is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Mindbody runs bookings and memberships; the broader work decides what to change and brings in new clients." },
    ],
  },
];

// Hero diagram: one illustrative member journey. `human` marks the step kept with a person.
const journey = [
  { step: "Intro offer booked online", tool: "Booking", color: "var(--sky)" },
  { step: "Lead added to pipeline", tool: "Leads", color: "var(--sky)" },
  { step: "Welcome texts and emails", tool: "Campaign", color: "var(--sky)" },
  { step: "First visit, met by staff", tool: "You", color: "var(--butter)", human: true },
  { step: "Membership sold", tool: "Contract", color: "var(--coral)" },
  { step: "Missed visits flagged", tool: "Automation", color: "var(--sky)" },
  { step: "Win-back or renewal", tool: "Campaign", color: "var(--sage)" },
];

// From Mindbody's published plan comparison, September 2026 (mindbodyonline.com/business/pricing). Recheck when editing.
const plans = [
  { row: "Price per location", starter: "From $99/month", accelerate: "On request", ultimate: "On request" },
  { row: "Automated email and text campaigns", starter: "Not included", accelerate: "Not included", ultimate: "Included" },
  { row: "Lead management", starter: "Not included", accelerate: "Not included", ultimate: "Included" },
  { row: "Messenger[ai] front desk", starter: "Not included", accelerate: "Add-on", ultimate: "Included" },
  { row: "Branded app", starter: "Not included", accelerate: "Add-on", ultimate: "Add-on" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function MindbodyPage() {
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
        "@id": "https://www.sagekite.com/platforms/mindbody/#webpage",
        "url": PAGE_URL,
        "name": "Mindbody setup and consulting services | Sage Kite",
        "description": "Sage Kite sets up Mindbody for fitness and wellness businesses: pricing options and contracts, online booking, lead management, intro offer conversion, automated campaigns, retention, Messenger[ai], payments and reporting.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/mindbody/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/mindbody/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/mindbody/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Mindbody" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/mindbody/#service",
        "name": "Mindbody setup and consulting services",
        "serviceType": "Mindbody setup, configuration and consulting",
        "description": "Member journey mapping, Mindbody services, pricing options and contracts, online booking, lead management, intro offer conversion, automated email and text campaigns, retention and win-back, Messenger[ai] setup, payments and memberships billing, reporting, data preparation, testing, staff training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Fitness studios and gyms" },
          { "@type": "Audience", "audienceType": "Yoga and pilates studios" },
          { "@type": "Audience", "audienceType": "Spas and wellness centres" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Mindbody",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/mindbody/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/mindbody/#service" },
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
          /* Mindbody page additions, built from the approved homepage system */
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
              <p className="label">Platforms / Mindbody</p>
              <h1 id="hero-title">Mindbody setup and consulting services</h1>
              <p className="sub">
                Sage Kite sets up Mindbody around how your studio turns first visits into members who stay. We map the path from intro offer to renewal, then build the pricing, follow-up, campaigns and reporting to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Mindbody setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Studios and gyms</span>
                <span><span className="dot" style={c('var(--sky)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A member journey in Mindbody</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Mindbody</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with your team</span>
                </p>
              </div>
              <figcaption>Illustrative. Your member journey is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Mindbody fills the schedule. Keeping clients is where most accounts fall short.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Intro offers that do not convert</strong><p>Trial clients come once or twice, then leave without anyone following up.</p></li>
              <li><strong>Leads that never reach Mindbody</strong><p>Enquiries sit in inboxes and social messages, so nobody can see or chase them.</p></li>
              <li><strong>Pricing options everywhere</strong><p>Years of old offers and contracts are still on sale, confusing clients and staff.</p></li>
              <li><strong>Members who leave quietly</strong><p>Nothing flags when attendance drops, so cancellations come as a surprise.</p></li>
              <li><strong>Marketing is one newsletter</strong><p>No automated welcome, milestone or win-back messages, just an occasional blast.</p></li>
              <li><strong>Reports nobody reads</strong><p>You cannot see intro offer conversion or retention, so decisions are guesses.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from setting Mindbody up to take bookings and not to keep the clients who make them.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new account, one that needs tidying, or a move to Mindbody.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Mindbody setup</h3>
                <p>You are opening on Mindbody and want pricing and follow-up right from the first class.</p>
                <ul>
                  <li>Services, pricing options and contracts planned</li>
                  <li>Online booking connected to your site</li>
                  <li>Intro offer follow-up and welcome journey</li>
                  <li>Front desk trained on the daily routine</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Account tidy-up</h3>
                <p>You have run Mindbody for years and the setup has grown messy.</p>
                <ul>
                  <li>Audit of pricing, contracts and campaigns</li>
                  <li>Old pricing options retired safely</li>
                  <li>Lead follow-up and retention journeys built</li>
                  <li>Reports on conversion and retention</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Move to Mindbody</h3>
                <p>You are leaving another booking system or spreadsheets.</p>
                <ul>
                  <li>Client and membership data cleaned first</li>
                  <li>Pricing mapped to Mindbody pricing options</li>
                  <li>Autopay transfer assessed in discovery</li>
                  <li>Records checked after import</li>
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
              <h2 id="impl-title">What Mindbody setup covers.</h2>
              <p className="sub">Some features depend on your Mindbody plan or are add-ons. We confirm what yours includes during discovery.</p>
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
              <p className="label">Which Mindbody plan?</p>
              <h2 id="plans-title">The plan decides how much follow-up you can automate.</h2>
              <p className="sub">We recommend the smallest plan that covers how you sell and keep members. We do not earn commission on your subscription.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">What changes the setup</span></th>
                  <th scope="col">Starter</th>
                  <th scope="col">Accelerate</th>
                  <th scope="col">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.row}>
                    <th scope="row">{p.row}</th>
                    {([['Starter', p.starter], ['Accelerate', p.accelerate], ['Ultimate', p.ultimate]] as const).map(([plan, value]) => (
                      <td key={plan} data-h={plan} className={value === 'Not included' ? 'no' : value === 'Included' ? 'yes' : undefined}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note note">
              Based on Mindbody&apos;s published plan comparison, September 2026. Mindbody also offers an Enterprise plan, and onboarding is included on every plan with no setup fee. Check <a className="link" href="https://www.mindbodyonline.com/business/pricing" target="_blank" rel="noopener noreferrer">Mindbody&apos;s pricing page</a> before you buy.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Mindbody project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your services, locations, current account, plan and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Journey map</h3><p>Pricing, intro offer, lead and retention rules agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Pricing, booking, lead follow-up, campaigns and reports.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test bookings, purchases and campaigns run end to end.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Front desk and manager training, documentation and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Owner or admin access to Mindbody, or your plan choice</li>
                  <li><Check size={15} aria-hidden="true" />Your services, prices, intro offers and membership terms</li>
                  <li><Check size={15} aria-hidden="true" />Exports from any booking system you are moving from</li>
                  <li><Check size={15} aria-hidden="true" />Your current welcome and follow-up messages</li>
                  <li><Check size={15} aria-hidden="true" />One person who signs off how the front desk works</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A clean set of pricing options and contracts</li>
                  <li><Check size={15} aria-hidden="true" />Online booking that works on your site</li>
                  <li><Check size={15} aria-hidden="true" />Lead capture and follow-up in one pipeline</li>
                  <li><Check size={15} aria-hidden="true" />Intro offer, retention and win-back campaigns</li>
                  <li><Check size={15} aria-hidden="true" />Reports on conversion, retention and revenue</li>
                  <li><Check size={15} aria-hidden="true" />Training for the front desk and managers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Mindbody right for you?</p>
              <h2 id="fit-title">Mindbody suits businesses that sell classes, appointments and memberships.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Fitness studios, gyms, yoga and pilates studios, martial arts schools, spas and wellness centres, from single locations to growing groups, that want booking, payments, memberships and marketing in one place and value being listed on the Mindbody app.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>If you mainly sell online programmes, courses or coaching rather than in-person visits, <Link className="link" href="/platforms/kajabi">Kajabi</Link> may fit better, and we implement that too. Small teams should check that the plan with the features they need earns its cost. Discovery is where we tell you honestly which way we would go.</p>
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
                <h2 id="proof-title">Previous Mindbody work by a Sage Kite delivery specialist</h2>
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

        {/* Where Mindbody sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Mindbody sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Mindbody runs bookings and memberships. The work around it decides what to change and brings in new clients. See how this fits <Link className="link" href="/industries/fitness-wellness">fitness and wellness</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Pricing, intro offers and which members to grow first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Local SEO, Meta Ads and email that bring in new clients.</span></Link>
              <Link href="/services/recruitment-staffing" style={c('var(--ink)')}><strong>Social media and marketing VAs</strong><span>Someone to run campaigns, social channels and follow-up.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Mindbody work for your studio clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Mindbody consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Mindbody is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Mindbody or Playlist.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>First visits</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Mindbody</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Members</span>
              </p>
              <h2 id="final-title">Build Mindbody around how you keep members.</h2>
              <p className="sub">A discovery call looks at your current account or plan, where clients drop off today, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
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
