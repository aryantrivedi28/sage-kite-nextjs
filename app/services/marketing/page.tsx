import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services/marketing`;

export const metadata: Metadata = {
  title: "Marketing Services: SEO, AI SEO, Ads & Email | Sage Kite",
  description: "Sage Kite marketing services: SEO, AI SEO, Google, Meta and LinkedIn Ads, social media and email, connected to your CRM so you see what each channel returns.",
  keywords: ["marketing services", "SEO services", "AI SEO", "Google Ads management", "Meta Ads management", "email marketing services"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Marketing services: SEO, AI SEO, ads and email | Sage Kite",
    description: "SEO, AI SEO, paid media, social and email marketing, planned around your priorities and connected to your CRM.",
  },
  twitter: {
    card: "summary",
    title: "Marketing services: SEO, AI SEO, ads and email | Sage Kite",
    description: "SEO, AI SEO, paid media, social and email marketing, planned around your priorities and connected to your CRM.",
  },
};

type Channel = { title: string; color: string; text: string; tags: string[] };

// "The channels". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match. Colours follow the brand guide: sky for search,
// coral for paid media, butter for social, sage for email.
const channels: Channel[] = [
  { title: "SEO", color: "var(--sky)", text: "Being found by people already searching for what you offer, through technical fixes, useful content and local search.", tags: ["Technical", "Content", "Local"] },
  { title: "AI SEO", color: "var(--sky)", text: "Making your business easy for AI answers in search engines and assistants to find, understand and cite accurately.", tags: ["AI answers", "Entities", "Structure"] },
  { title: "Google Ads", color: "var(--coral)", text: "Search and other Google campaigns that reach people at the moment they are looking for a solution.", tags: ["Search", "Intent"] },
  { title: "Meta Ads", color: "var(--coral)", text: "Facebook and Instagram campaigns that create demand by reaching the right audience before they start searching.", tags: ["Facebook", "Instagram"] },
  { title: "LinkedIn Ads", color: "var(--coral)", text: "Campaigns targeted by role, industry and company, for businesses that sell to other businesses.", tags: ["B2B", "Targeting"] },
  { title: "Social media management", color: "var(--butter)", text: "Planning, publishing and routine channel management, so your channels stay consistent and useful.", tags: ["Planning", "Publishing"] },
  { title: "Email marketing", color: "var(--sage)", text: "Campaigns, segmentation and automated sequences that turn enquiries into customers and customers into repeat buyers.", tags: ["Campaigns", "Sequences", "Segments"] },
];

const symptoms = [
  { title: "Spend without a clear return", text: "Money goes into ads and content, but nobody can say which of it brings in customers." },
  { title: "Activity without a plan", text: "Posts, campaigns and emails go out, but not as part of one plan with one goal." },
  { title: "Hard to find", text: "Competitors show up in search results and AI answers, and you do not." },
  { title: "Leads from ads go cold", text: "Campaigns bring in enquiries, then follow-up is slow or never happens." },
  { title: "An email list nobody uses", text: "Years of contacts sit in a list that has not been emailed with purpose in months." },
  { title: "No one to run it", text: "Marketing happens in bursts, whenever someone has spare time." },
];

// "Connected to your CRM": what changes when marketing and the CRM work together.
const connected = [
  { title: "Every enquiry keeps its source", color: "var(--sky)", text: "Forms and campaigns pass the channel into the CRM, so you know where each lead came from." },
  { title: "Follow-up starts straight away", color: "var(--coral)", text: "New leads are routed and followed up automatically, so the spend that brought them in is not wasted." },
  { title: "Reports show customers, not clicks", color: "var(--sage)", text: "Where the CRM is connected, reporting shows which channels produce customers and revenue." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing channels",
    items: [
      { q: "Which marketing channels should a small business use?", a: "It depends on where your buyers look and how they buy. Search suits people already looking for what you offer. Paid social creates demand among people who are not searching yet. LinkedIn suits business-to-business sales. Email nurtures enquiries and brings customers back. Most businesses do better with two or three channels run well than with every channel run thinly." },
      { q: "What is the difference between SEO and AI SEO?", a: "SEO helps your pages rank in search results. AI SEO helps AI answers in search engines and assistants find, understand and accurately cite your business. They overlap heavily, since both reward clear, accurate and well-structured content, so Sage Kite plans them together." },
      { q: "Should we use Google Ads, Meta Ads or LinkedIn Ads?", a: "Google Ads reaches people actively searching, so it suits businesses with existing demand. Meta Ads reaches people by interest and audience before they search, which suits creating demand. LinkedIn Ads targets by job role and company, which suits business-to-business sales, and usually costs more per click. Many businesses use one as the main channel and test a second." },
      { q: "Why connect marketing to the CRM?", a: "So every enquiry keeps its source, follow-up starts straight away and reports can show which channels produce customers rather than just clicks. Without that connection, marketing is judged on traffic and leads, and spend cannot be traced to revenue." },
      { q: "Can we use your marketing services without a CRM project?", a: "Yes. We check tracking and follow-up before campaigns start. If enquiries would be lost because follow-up is not in place, we will say so and recommend fixing that first, since more leads into a broken process wastes budget." },
    ],
  },
  {
    label: "Working together",
    items: [
      { q: "How is a marketing plan built?", a: "It starts with a discovery call about your priorities, buyers, budget, current channels and what your team can follow up. We then recommend the channels and activity that fit, and the proposal sets out the plan, scope and reporting before work begins." },
      { q: "How are marketing services priced?", a: "Every engagement starts with a discovery call. The proposal then sets out the channels, scope, reporting and price before work starts. Advertising spend is separate from our fee." },
      { q: "How soon will we see results?", a: "It varies by channel. Paid media can bring traffic once campaigns are live, while SEO and AI SEO build over months. Email depends on the size and health of your list. We do not promise rankings or results that depend on factors outside anyone's control." },
      { q: "How do you report on marketing?", a: "Reporting is agreed in the proposal. It covers spend, activity and enquiries by channel and, where the CRM is connected, the customers and revenue each channel produces. Results are reviewed on an agreed schedule and the plan is adjusted." },
      { q: "Can you work alongside our existing team or agency?", a: "Yes. Sage Kite can run specific channels while your team or another agency runs others, set the plan for others to deliver, or provide email and social media VAs to support your team." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function MarketingPage() {
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
        "name": "Marketing services: SEO, AI SEO, ads and email | Sage Kite",
        "description": "Sage Kite marketing services: SEO, AI SEO, Google, Meta and LinkedIn Ads, social media and email, connected to your CRM so you see what each channel returns.",
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
          { "@type": "ListItem", "position": 3, "name": "Marketing" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Marketing services",
        "serviceType": "Digital marketing",
        "description": "SEO, AI SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing, planned around the client's priorities and connected to the CRM.",
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
          "name": "Marketing services",
          "itemListElement": channels.map((ch) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": ch.title, "description": ch.text }
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
          /* Marketing service page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .mk-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .mk-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .mk-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .mk-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: from channel to customer */
          .path-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .path-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .psteps li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:12px;align-items:center;padding:9px 0;position:relative;font-size:.925rem;color:var(--ink);font-weight:600;line-height:1.3}
          .psteps li:not(:last-child)::after{content:"";position:absolute;left:6.5px;top:28px;height:calc(100% - 20px);width:1px;background:var(--light-sage)}
          .psteps .dot{width:14px;height:14px;border:2px solid var(--c);background:var(--warm-white)}
          .psteps small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .path-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* Channels */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}
          .ch-key{display:flex;flex-wrap:wrap;gap:6px 20px;margin-top:20px;font-size:.8125rem;color:var(--sage);font-weight:600}
          .ch-key span{display:inline-flex;align-items:center;gap:8px}

          /* Connected to your CRM */
          .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .three .panel h3{font-size:1.3rem;margin-bottom:8px}
          .three .panel p{font-size:.95rem;line-height:1.55}
          .three-note{margin-top:26px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

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
          .trust-note{margin-top:32px;font-size:.85rem;color:var(--sage);max-width:72ch}

          @media (max-width:1040px){
            .mk-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .three{grid-template-columns:1fr}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .path-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .flow6{grid-template-columns:1fr 1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="mk-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services / Marketing</p>
              <h1 id="hero-title">Marketing services connected to how you sell</h1>
              <p className="sub">
                Sage Kite plans and runs SEO, AI SEO, paid media, social and email marketing around your priorities, and connects it to your CRM, so you can see which channels bring in customers, not just clicks.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your marketing</Link>
                <Link href="#channels" className="link">See the channels</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sky)')}></span>Search, ads, social and email</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Connected to your CRM</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Built around your priorities</span>
              </p>
            </div>

            <figure className="path-fig" aria-labelledby="path-title">
              <div className="ui">
                <p className="ui-title"><b id="path-title">From channel to customer</b><span>Example</span></p>
                <ol className="psteps">
                  <li style={c('var(--sky)')}><span className="dot"></span>Found in search or an AI answer<small>SEO</small></li>
                  <li style={c('var(--coral)')}><span className="dot"></span>Clicks a campaign<small>Paid media</small></li>
                  <li style={c('var(--sage)')}><span className="dot"></span>Enquiry saved with its source<small>CRM</small></li>
                  <li style={c('var(--butter)')}><span className="dot"></span>Follow-up sequence starts<small>Email</small></li>
                  <li style={c('var(--ink)')}><span className="dot"></span>Becomes a customer<small>Your team</small></li>
                  <li style={c('var(--sage)')}><span className="dot"></span>Revenue reported by channel<small>Dashboard</small></li>
                </ol>
              </div>
              <figcaption>Illustrative. Your channels are chosen in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">When marketing is busy but not clearly working.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">More activity rarely fixes these. A plan, the right channels and a connection to the sales system usually do.</p>
          </div>
        </section>

        {/* Channels */}
        <section className="sec" id="channels" aria-labelledby="channels-title">
          <div className="wrap">
            <div className="head">
              <p className="label">The channels</p>
              <h2 id="channels-title">What our marketing services cover.</h2>
              <p className="sub">We recommend the channels that fit your buyers and budget. Most plans use two or three, run well, rather than all seven.</p>
            </div>
            <div className="cap-list">
              {channels.map((ch) => (
                <div key={ch.title} className="cap-row" style={c(ch.color)}>
                  <h3>{ch.title}</h3>
                  <p>{ch.text}</p>
                  <div className="tags">
                    {ch.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="ch-key" aria-hidden="true">
              <span><span className="dot" style={c('var(--sky)')}></span>Search</span>
              <span><span className="dot" style={c('var(--coral)')}></span>Paid media</span>
              <span><span className="dot" style={c('var(--butter)')}></span>Social</span>
              <span><span className="dot" style={c('var(--sage)')}></span>Email</span>
            </p>
          </div>
        </section>

        {/* Connected to your CRM */}
        <section className="pale sec" id="connected" aria-labelledby="connected-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Why it is different</p>
              <h2 id="connected-title">Marketing that does not stop at the enquiry.</h2>
              <p className="sub">Growth often breaks between interest and revenue. Connecting marketing to your CRM closes that gap.</p>
            </div>
            <div className="three">
              {connected.map((x) => (
                <div key={x.title} className="panel" style={c(x.color)}>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
            <p className="three-note">No CRM, or one that needs work? <Link className="link" href="/services/crm-implementation">CRM implementation</Link> sets up the routing, follow-up and reporting that marketing relies on.</p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a marketing engagement runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your priorities, buyers, budget, channels and follow-up.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Channels, scope, reporting and price, agreed in writing.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Audit and plan</h3><p>What exists, what works, and the plan for each channel.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Set up</h3><p>Accounts, tracking and CRM connection checked before launch.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Run</h3><p>Campaigns, content and emails delivered to the plan.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Review</h3><p>Results reviewed on an agreed schedule and the plan adjusted.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Your priorities, budget and target customers</li>
                  <li><Check size={15} aria-hidden="true" />Access to ad accounts, analytics and your website</li>
                  <li><Check size={15} aria-hidden="true" />Access to your CRM or email platform</li>
                  <li><Check size={15} aria-hidden="true" />Brand assets, past campaigns and results</li>
                  <li><Check size={15} aria-hidden="true" />A contact for approvals</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>What you receive</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A marketing plan built around your priorities</li>
                  <li><Check size={15} aria-hidden="true" />Channels set up with tracking in place</li>
                  <li><Check size={15} aria-hidden="true" />Campaigns, content and emails delivered</li>
                  <li><Check size={15} aria-hidden="true" />Reporting connected to your pipeline</li>
                  <li><Check size={15} aria-hidden="true" />Regular reviews and plan adjustments</li>
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
              <h2 id="fit-title">Marketing works best on a system that can follow up.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Businesses with a working sales process that need more, better-qualified demand. It is often the next stage after a CRM project, once enquiries are captured and followed up reliably.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Fix this first</h3>
                <p>If enquiries already go unanswered, more marketing makes the problem bigger. Start with <Link className="link" href="/services/crm-implementation">CRM implementation</Link>, or with <Link className="link" href="/services/consultancy">consultancy</Link> if you are not sure where to focus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where marketing sits</p>
              <h2 id="conn-title">Marketing is one part of the growth system.</h2>
              <p className="sub">It brings demand in. The work around it decides where to focus, captures every lead and keeps the channels running.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>GTM strategy and fractional CMO support to set direction.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Routing, follow-up and reporting for every lead.</span></Link>
              <Link href="/services/specialist-staffing#roles" style={c('var(--ink)')}><strong>Email and social media VAs</strong><span>Day-to-day help to keep campaigns and channels running.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Marketing delivery for your clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Marketing FAQs</h2>
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
              <p className="trust-note">Google, Meta and LinkedIn are trademarks of their owners. Sage Kite is independent and is not affiliated with, endorsed by or certified by these platforms.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--sky)')}></span>Search</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Ads</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Social</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Email</span>
              </p>
              <h2 id="final-title">Marketing you can trace to revenue.</h2>
              <p className="sub">A discovery call looks at your priorities, the channels you use today, how enquiries are followed up, and what a scoped marketing plan would cover.</p>
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
