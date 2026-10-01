import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import { PLATFORMS, PLATFORM_GROUPS } from '@/content/platforms';

const PAGE_URL = "https://www.sagekite.com/platforms";

export const metadata: Metadata = {
  title: "CRM & Business Platforms We Implement | Sage Kite",
  description: "Sage Kite implements CRM and business platforms for SMEs, including HubSpot, Keap, Follow Up Boss, ServiceTitan, Kajabi, Clio Grow and Bloomerang.",
  keywords: ["CRM implementation services", "CRM consultant", "CRM setup services", "industry CRM", "CRM platforms for small business"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM and business platforms we implement | Sage Kite",
    description: "The CRM, marketing and industry platforms Sage Kite implements, grouped by industry, each set up around how your business actually sells.",
  },
  twitter: {
    card: "summary",
    title: "CRM and business platforms we implement | Sage Kite",
    description: "HubSpot, Keap, Follow Up Boss, Lofty, ServiceTitan, Housecall Pro, Jobber, Kajabi, Clio Grow, Dubsado, HoneyBook, Mindbody, Bloomerang and more.",
  },
};

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing a platform",
    items: [
      { q: "Which platforms does Sage Kite implement?", a: "Sage Kite implements GoHighLevel, Keap, HubSpot and ActiveCampaign across industries, Follow Up Boss and Lofty for real estate, ServiceTitan, Housecall Pro and Jobber for home services, Kajabi for coaches and course businesses, Clio Grow for law firms, Dubsado and HoneyBook for service businesses, Mindbody for fitness and wellness, and Bloomerang for nonprofits. We also build custom CRMs when no platform fits." },
      { q: "What is CRM implementation?", a: "CRM implementation is the work of setting up a CRM around how a business actually sells: mapping the process, structuring the data, building pipelines and automation, connecting other tools, migrating records, testing and training the team. It is the difference between a CRM that is switched on and one the team relies on." },
      { q: "Do we need an industry platform or a general CRM?", a: "It depends on how your business runs. Industry platforms such as ServiceTitan, Clio Grow or Mindbody come with workflows built for that industry, which saves setup time. General CRMs such as HubSpot or Keap are more flexible, which suits businesses whose sales process does not fit an industry template. Some businesses use both, with a general CRM for sales and an industry platform for delivery." },
      { q: "Should we switch CRM or fix the one we have?", a: "Usually fix first. Most problems come from how a platform was set up, not from the platform itself, and switching brings migration cost and retraining. We recommend switching only when the platform cannot support how you sell, or costs far more than it returns." },
      { q: "Can you help us choose a CRM?", a: "Yes. We start with how your business wins and keeps customers, then recommend the platform and plan that fit, including the option of staying on the system you already have. We are independent and do not resell licences, so the recommendation is based on fit, not commission." },
    ],
  },
  {
    label: "Projects and data",
    items: [
      { q: "How long does a CRM implementation take?", a: "It depends on the platform, the amount of data, the number of automations and integrations, and how many people need training. A focused cleanup is a much smaller project than a new setup with a migration. Your proposal sets out the milestones and dates before work starts." },
      { q: "Can you migrate our data from one platform to another?", a: "Usually. We move contacts, history and records between platforms, cleaning and de-duplicating them on the way. Some platforms run their own data conversion during onboarding; where they do, we prepare the data beforehand and check it afterwards. Feasibility depends on what your current system can export, which we confirm in discovery." },
      { q: "Can you connect our CRM to our other tools?", a: "Yes, where the platforms support it. We connect website forms, phone and call tracking, scheduling, payments and accounting, using native integrations first and tools such as Zapier or webhooks where needed, so the CRM stays the single record of each customer." },
      { q: "Do you work on accounts that are already set up?", a: "Yes. Many projects start with an existing account that has drifted: messy data, automations nobody maintains, pipelines that do not match the sales process and reports nobody trusts. We audit what is there, fix what matters and document how the team should use it." },
      { q: "How are platform projects priced?", a: "Every project starts with a discovery call. The proposal then sets out deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Will you train our team?", a: "Yes. Every project ends with training for the people who use the platform day to day, and written documentation of how it is set up and how to change it." },
      { q: "Do you offer support after go-live?", a: "Yes. Maintenance with a defined support scope is available after handover. Sage Kite can also provide a CRM and automation VA to keep data clean and automations running." },
      { q: "What if our platform is not listed?", a: "Talk to us anyway. If your platform is outside the list, we will tell you honestly whether we can help. Where no existing platform fits how you sell, we can build a custom CRM around your sales process and reporting needs." },
    ],
  },
];

// "Three kinds of platform". Examples are platform names from content/platforms.ts.
const kinds = [
  { title: "General CRM", color: "var(--sage)", text: "A flexible CRM you shape around your own sales process, pipeline and follow-up.", fits: "Usually fits when you sell through enquiries, conversations and quotes.", examples: ["HubSpot", "Keap", "GoHighLevel"] },
  { title: "Industry platform", color: "var(--coral)", text: "Built for one industry, with its workflows in place: dispatch for trades, intake for law firms, memberships for studios.", fits: "Usually fits when your industry has a standard way of working.", examples: ["ServiceTitan", "Follow Up Boss", "Clio Grow", "Mindbody"] },
  { title: "Marketing and client workflow", color: "var(--sky)", text: "Email, funnels, proposals and onboarding for businesses where marketing and client experience drive revenue.", fits: "Usually fits when you sell online or run a client-based service.", examples: ["ActiveCampaign", "Kajabi", "Dubsado", "HoneyBook"] },
];

// "Five questions to answer before you choose a platform".
const questions = [
  { q: "How do customers buy from you?", a: "Calls and quotes, online checkout, booked appointments or memberships each point to a different kind of platform." },
  { q: "Who will use it every day?", a: "A system the team does not use is worse than none. Count the people in the office and the field, and how they work." },
  { q: "What does it need to connect to?", a: "Website forms, phones, scheduling, payments and accounting. Check the integrations before you commit, not after." },
  { q: "What do you need to report on?", a: "Lead sources, conversion, revenue by service, retention. Make sure the platform can show the numbers you run the business on." },
  { q: "What will it cost to run?", a: "Licences, add-ons, setup and the time it takes to keep clean. The cheapest subscription is not always the cheapest platform." },
];

// "Signs your platform setup needs work".
const signs = [
  { title: "Leads with no owner", text: "Enquiries arrive, but nobody is sure who should follow up or when." },
  { title: "Data nobody trusts", text: "Duplicates, empty fields and old tags, so every list needs checking by hand." },
  { title: "Automations nobody understands", text: "Sequences built years ago are still sending, and nobody dares switch them off." },
  { title: "Reports built in spreadsheets", text: "Numbers are exported and reworked every month because dashboards were never set up." },
  { title: "Features paid for, not used", text: "Add-ons and higher plans bought for features that were never configured." },
  { title: "Tools that do not talk", text: "The same customer typed into the CRM, the website and accounting separately." },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);
const slugFor = (name: string) => PLATFORMS.find((p) => p.name === name)?.slug;

// Links "GHL Scale Up" in a summary. Only used on cards that are not links themselves.
const withGhlLink = (text: string) => {
  const [before, after] = text.split('GHL Scale Up');
  if (after === undefined) return text;
  return <>{before}<a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer" className="link">GHL Scale Up</a>{after}</>;
};

export default function PlatformsPage() {
  const groups = PLATFORM_GROUPS
    .map((g) => ({ ...g, platforms: PLATFORMS.filter((p) => p.group === g.id) }))
    .filter((g) => g.platforms.length > 0);
  const withPages = PLATFORMS.filter((p) => p.slug);

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
        "@type": "CollectionPage",
        "@id": "https://www.sagekite.com/platforms/#webpage",
        "url": PAGE_URL,
        "name": "CRM and business platforms we implement | Sage Kite",
        "description": "The CRM, marketing and industry platforms Sage Kite implements for small and medium-sized businesses, grouped by industry.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/#organization" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/#breadcrumb" },
        "mainEntity": { "@id": "https://www.sagekite.com/platforms/#list" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.sagekite.com/platforms/#list",
        "name": "Platform implementation services",
        "itemListElement": withPages.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p.name,
          "url": `https://www.sagekite.com/platforms/${p.slug}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
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
          /* Platforms directory, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .pl-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(48px,6vw,80px)}
          .pl-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .pl-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .pl-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero index: industries with platform counts */
          .ind-index{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .ind-index .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 10px}
          .ind-index li a{display:grid;grid-template-columns:5px minmax(0,1fr) auto;gap:14px;align-items:center;padding:10px 0;border-top:1px solid var(--pale-sage);text-decoration:none;color:var(--ink);font-weight:600;font-size:.95rem;line-height:1.3;transition:padding var(--t) var(--ease)}
          .ind-index li a:hover{padding-left:6px}
          .ind-index .rail{align-self:stretch;border-radius:3px;background:var(--c)}
          .ind-index .count{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .ind-index figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Directory: industry on the left (stays in view), its platforms on the right */
          #directory.sec{padding-top:clamp(56px,6vw,80px)}
          .group{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(20px,4vw,56px);align-items:start;padding:clamp(32px,4vw,48px) 0;border-top:1px solid var(--light-sage);scroll-margin-top:110px}
          .head + .group{border-top:0;padding-top:0}
          .group-head{position:sticky;top:120px}
          .group-head h3{display:flex;gap:12px;font-size:clamp(1.4rem,2vw,1.7rem);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin-bottom:12px}
          .group-head h3::before{content:"";width:6px;min-height:24px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .group-head p{font-size:.975rem;line-height:1.55;max-width:38ch;margin:0 0 14px 18px}
          .group-count{display:inline-block;margin-left:18px;font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px}
          .plat-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
          .pcard{display:flex;flex-direction:column;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 22px 20px;background:var(--warm-white);text-decoration:none;color:inherit;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease),box-shadow var(--t) var(--ease)}
          a.pcard:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c);box-shadow:6px 6px 0 var(--light-sage)}
          .pcard h4{font-size:1.3rem;font-weight:700;letter-spacing:-.01em;line-height:1.15;color:var(--ink);margin:0 0 8px}
          .pcard p{font-size:.95rem;line-height:1.5;margin-bottom:18px}
          .pcard .more{margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:.925rem;color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:5px}
          .pcard .more svg{transition:transform var(--t) var(--ease)}
          a.pcard:hover .more svg{transform:translateX(3px)}
          /* No dedicated page yet: dashed sides so it reads differently from linked cards */
          .pcard.no-page{background:transparent;border-style:dashed;border-top-style:solid}

          /* Three kinds of platform */
          .kinds{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .kind{display:flex;flex-direction:column;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white)}
          .kind h3{font-size:1.45rem;margin-bottom:10px}
          .kind > p{font-size:.975rem;line-height:1.55}
          .kind .fits{margin-top:14px;padding-top:14px;border-top:1px solid var(--light-sage);font-size:.9rem;font-weight:600;color:var(--ink)}
          .kind .ex{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:18px}
          .kind .ex a,.kind .ex span{font-size:.8125rem;font-weight:500;padding:4px 10px;background:var(--pale-sage);border-radius:4px;color:var(--ink);text-decoration:none;transition:background-color var(--t) var(--ease)}
          .kind .ex a:hover{background:var(--light-sage)}

          /* Five questions */
          .qs-grid{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,72px);align-items:start}
          .qs-grid h2{font-size:clamp(1.8rem,3vw,2.4rem)}
          .qs-grid .sub{font-size:1.05rem}
          .qs-list{border-top:1px solid var(--light-sage)}
          .qs-list li{display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:20px 0;border-bottom:1px solid var(--light-sage)}
          .qs-list .n{font-weight:700;letter-spacing:-.02em;font-size:1.6rem;line-height:1.1;color:var(--sage)}
          .qs-list h3{font-size:1.2rem;margin-bottom:4px}
          .qs-list p{font-size:.975rem;line-height:1.55}

          /* Signs your setup needs work */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* How we work in any platform */
          .principles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .principles li{padding:22px 22px 0 0}
          .principles .num{font-weight:700;letter-spacing:-.02em;font-size:2.2rem;line-height:1;color:var(--sage)}
          .principles h3{font-size:1.25rem;margin:10px 0 6px}
          .principles p{font-size:.95rem;line-height:1.5}

          /* Not on the list */
          .two-col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px);display:flex;flex-direction:column;align-items:flex-start}
          .panel h3{font-size:1.45rem;margin-bottom:10px}
          .panel p{font-size:.975rem;line-height:1.55;margin-bottom:20px}
          .panel .link{margin-top:auto}

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
            .pl-hero .hero-grid{grid-template-columns:1fr}
            .group,.faq-wrap,.qs-grid{grid-template-columns:1fr}
            .kinds,.symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .group{gap:20px}
            .group-head{position:static}
            .principles{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:12px}
          }
          @media (max-width:680px){
            .ind-index{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .plat-cards,.two-col,.principles,.kinds,.symptoms{grid-template-columns:1fr}
            .group-head p,.group-count{margin-left:0}
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
              <p className="label">Platforms</p>
              <h1 id="hero-title">CRM and business platforms we implement</h1>
              <p className="sub">
                The platform is the tool, not the strategy. Sage Kite maps how your business wins and keeps customers, then sets up the right platform to match, whether it is a CRM, an industry system or marketing automation.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="#directory" className="link">Find your platform</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>{PLATFORMS.length} platforms</span>
                <span><span className="dot" style={c('var(--sky)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="ind-index" aria-labelledby="index-title">
              <div className="ui">
                <p className="ui-title"><b id="index-title">Platforms by industry</b><span>Jump to</span></p>
                <ul>
                  {groups.map((g) => (
                    <li key={g.id}>
                      <a href={`#${g.id}`} style={c(g.color)}>
                        <span className="rail"></span>
                        <span>{g.label}</span>
                        <span className="count">{g.platforms.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption>Groupings show where each platform is most often used, not a limit.</figcaption>
            </figure>
          </div>
        </section>

        {/* Directory */}
        <section className="rule sec" id="directory" aria-labelledby="directory-title">
          <div className="wrap">
            <div className="head" style={{ marginBottom: 'clamp(36px,4vw,52px)' }}>
              <p className="label">Directory</p>
              <h2 id="directory-title">Choose your platform.</h2>
              <p className="sub">Each page explains who the platform suits, what we set up and how a project runs.</p>
            </div>

            {groups.map((g) => (
              <div key={g.id} className="group" id={g.id} style={c(g.color)}>
                <div className="group-head">
                  <h3>{g.label}</h3>
                  <p>{g.description}</p>
                  <span className="group-count">{g.platforms.length} {g.platforms.length === 1 ? 'platform' : 'platforms'}</span>
                </div>
                <div className="plat-cards">
                  {g.platforms.map((p) =>
                    p.slug ? (
                      <Link key={p.name} href={`/platforms/${p.slug}`} className="pcard" style={c(g.color)}>
                        <h4>{p.name}</h4>
                        <p>{p.summary}</p>
                        <span className="more">{p.name} services <ArrowRight size={15} aria-hidden="true" /></span>
                      </Link>
                    ) : (
                      <div key={p.name} className="pcard no-page" style={c(g.color)}>
                        <h4>{p.name}</h4>
                        <p>{withGhlLink(p.summary)}</p>
                        <Link href="/contact" className="more">Ask about {p.name} <ArrowRight size={15} aria-hidden="true" /></Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Three kinds of platform */}
        <section className="pale sec" id="platform-types" aria-labelledby="types-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Types of platform</p>
              <h2 id="types-title">Three kinds of platform, and when each fits.</h2>
              <p className="sub">Most businesses need one of three kinds. Knowing which narrows the choice before you compare features.</p>
            </div>
            <div className="kinds">
              {kinds.map((k) => (
                <div key={k.title} className="kind" style={c(k.color)}>
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                  <p className="fits">{k.fits}</p>
                  <div className="ex">
                    {k.examples.map((name) => {
                      const slug = slugFor(name);
                      return slug
                        ? <Link key={name} href={`/platforms/${slug}`}>{name}</Link>
                        : <span key={name}>{name}</span>;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Five questions */}
        <section className="sec" id="how-to-choose" aria-labelledby="choose-title">
          <div className="wrap qs-grid">
            <div className="head">
              <p className="label">How to choose</p>
              <h2 id="choose-title">Five questions to answer before you choose a platform.</h2>
              <p className="sub">We work through these in discovery. Answering them first avoids buying a platform you outgrow or never fully use.</p>
            </div>
            <ol className="qs-list">
              {questions.map((x, i) => (
                <li key={x.q}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3>{x.q}</h3><p>{x.a}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Signs your setup needs work */}
        <section className="pale sec" id="signs" aria-labelledby="signs-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Already on a platform?</p>
              <h2 id="signs-title">Signs your platform setup needs work.</h2>
            </div>
            <ul className="symptoms">
              {signs.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Most of these can be fixed without switching platforms. A review of the setup you have is usually the right first step.</p>
          </div>
        </section>

        {/* How we work in any platform */}
        <section className="rule sec" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How we work</p>
              <h2 id="approach-title">The same approach, whichever platform you use.</h2>
            </div>
            <ol className="principles">
              <li><div className="num">01</div><h3>Process first</h3><p>We map how you sell and serve customers before configuring anything.</p></li>
              <li><div className="num">02</div><h3>Independent</h3><p>We do not resell licences or earn commission, so advice is based on fit.</p></li>
              <li><div className="num">03</div><h3>Fixed price</h3><p>Deliverables, exclusions and a fixed project price agreed in a proposal.</p></li>
              <li><div className="num">04</div><h3>You own it</h3><p>Training, documentation and handover, with optional maintenance after.</p></li>
            </ol>
          </div>
        </section>

        {/* Not on the list */}
        <section className="pale sec" id="not-listed" aria-labelledby="not-listed-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Not on the list?</p>
              <h2 id="not-listed-title">When no platform fits, or yours is not here.</h2>
            </div>
            <div className="two-col">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Custom CRM development</h3>
                <p>When no existing platform fits how you sell, we build a CRM around your sales process and reporting needs, scoped and priced like any other project.</p>
                <Link href="/contact" className="link">Discuss a custom CRM</Link>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Another platform</h3>
                <p>Using a system that is not listed? Talk to us anyway. We will tell you honestly whether we can help, and recommend someone who can if we are not the right fit.</p>
                <Link href="/contact" className="link">Tell us what you use</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Platform FAQs</h2>
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
                <span><span className="dot" style={c('var(--sky)')}></span>Platform</span>
                <span><span className="dot" style={c('var(--sage)')}></span>People</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Not sure which platform fits?</h2>
              <p className="sub">A discovery call looks at how you sell today, the system you have or are considering, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/services" className="link">Explore our services</Link>
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
