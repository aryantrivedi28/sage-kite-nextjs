import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HubSpot Implementation & Consulting Services | Sage Kite",
  description: "HubSpot implementation and consulting from Sage Kite: we map your sales and marketing process, then build the CRM, pipelines, workflows, reporting and integrations around it.",
  alternates: {
    canonical: "https://www.sagekite.com/platforms/hubspot/",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/platforms/hubspot/",
    title: "HubSpot implementation and consulting services | Sage Kite",
    description: "Sage Kite implements HubSpot around your sales and marketing process: CRM architecture, pipelines, workflows, reporting, migration and integrations.",
  },
  twitter: {
    card: "summary",
    title: "HubSpot implementation and consulting services | Sage Kite",
    description: "Process-first HubSpot implementation: CRM architecture, pipelines, workflows, reporting, migration and integrations, tested and handed over.",
  },
};

export default function HubspotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.sagekite.com/platforms/hubspot/#webpage",
        "url": "https://www.sagekite.com/platforms/hubspot/",
        "name": "HubSpot implementation and consulting services | Sage Kite",
        "description": "Sage Kite implements HubSpot around your sales and marketing process: CRM architecture, pipelines, lifecycle stages, workflows, reporting, migration and integrations, tested and handed over.",
        "isPartOf": {
          "@id": "https://www.sagekite.com/#website"
        },
        "about": {
          "@id": "https://www.sagekite.com/platforms/hubspot/#service"
        },
        "breadcrumb": {
          "@id": "https://www.sagekite.com/platforms/hubspot/#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/hubspot/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.sagekite.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Platforms",
            "item": "https://www.sagekite.com/platforms"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "HubSpot"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/hubspot/#service",
        "name": "HubSpot implementation and consulting services",
        "serviceType": "HubSpot implementation and consulting",
        "description": "Business process discovery, HubSpot CRM architecture and account configuration, deal pipelines, lifecycle stages and lead management, forms, workflows and automation, reporting and dashboards, data cleanup, migration and integrations, testing, team training and handover.",
        "provider": {
          "@id": "https://www.sagekite.com/#organization"
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in HubSpot",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM architecture and data model" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Account setup and permissions" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deal pipelines and stages" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lifecycle stages and lead management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Forms and lead capture" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflows and automation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reporting and dashboards" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migration, data cleanup and integrations" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Testing, training and handover" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/hubspot/#faq",
        "isPartOf": {
          "@id": "https://www.sagekite.com/#website"
        },
        "about": {
          "@id": "https://www.sagekite.com/platforms/hubspot/#service"
        },
        "inLanguage": "en",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is HubSpot implementation?",
            "acceptedAnswer": { "@type": "Answer", "text": "HubSpot implementation is the work of designing and configuring HubSpot around how your business actually sells and serves customers. It goes beyond switching the account on: CRM architecture, contact and company data structure, deal pipelines, lifecycle stages, lead management, workflows, reporting and any migration or integrations. Sage Kite maps the process first, then builds the platform to fit it." }
          },
          {
            "@type": "Question",
            "name": "What does a HubSpot consultant do?",
            "acceptedAnswer": { "@type": "Answer", "text": "A HubSpot consultant helps decide how HubSpot should be structured for your business, then configures it and builds the automation that runs it. That means the CRM data model, pipelines and lifecycle stages, workflows for routing and follow-up, reporting that reflects how you measure the business, and training so the team adopts it. The aim is a system that supports the business, not just an account that is switched on." }
          },
          {
            "@type": "Question",
            "name": "Is this the same as HubSpot's own onboarding?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. HubSpot's onboarding gets your account set up and your team started on the basics. Implementation goes further: designing the CRM architecture, sales and marketing process, automation, reporting, migration and integrations around your business. The two are complementary; if you have already been through HubSpot onboarding and it stopped short of a working system, implementation is usually what is missing." }
          },
          {
            "@type": "Question",
            "name": "Can Sage Kite set up a new HubSpot account from scratch?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A new implementation starts by mapping how leads become customers, then structuring the CRM, building pipelines, lifecycle stages, forms, workflows and reporting to match, connecting the tools you already use, and testing it before your team relies on it." }
          },
          {
            "@type": "Question",
            "name": "Can you audit and improve an existing HubSpot portal?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many engagements are existing portals that grew without a plan: duplicated or inconsistent data, pipelines that do not match the real sales process, workflows that misfire and reporting no one trusts. We audit what is there, fix the data and structure, rebuild the parts holding you back, and document it." }
          },
          {
            "@type": "Question",
            "name": "What does HubSpot CRM setup include?",
            "acceptedAnswer": { "@type": "Answer", "text": "Typically: account settings and user permissions, a contact and company data model with the properties you actually use, deal pipelines and stages that match your sales process, lifecycle stages and lead status, lead capture forms and routing, core workflows, and dashboards for the metrics you run on. Exact scope is agreed in the proposal." }
          },
          {
            "@type": "Question",
            "name": "Can you build HubSpot workflows and automation?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. HubSpot workflows automate the repetitive steps: routing and assigning leads, sending follow-up, updating properties and lifecycle stages, creating tasks and internal alerts. We build them around the process we mapped and test each path so the right action happens at the right time." }
          },
          {
            "@type": "Question",
            "name": "Can you migrate data from another CRM into HubSpot?",
            "acceptedAnswer": { "@type": "Answer", "text": "Usually. Migrations from tools like Salesforce, Pipedrive, Zoho or a spreadsheet are common, and HubSpot has strong import tools. Feasibility depends on what the current system can export and how the data is structured, so we confirm what is realistic and how records will map during discovery, then clean and de-duplicate as part of the move." }
          },
          {
            "@type": "Question",
            "name": "Can you set up reporting and dashboards?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build dashboards and reports around the questions the business actually asks — pipeline and forecast, source and conversion, activity and service — so the numbers reflect how you run, rather than the default reports every portal ships with." }
          },
          {
            "@type": "Question",
            "name": "Can you configure integrations?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, where they are supported. HubSpot connects to many tools through its app marketplace, and to others through custom integrations where feasible. We confirm what your stack allows in discovery so the CRM stays the single source of truth rather than one more disconnected tool." }
          },
          {
            "@type": "Question",
            "name": "Which HubSpot edition and Hubs do I need?",
            "acceptedAnswer": { "@type": "Answer", "text": "It depends on how you sell and market, and it is worth getting right because the paid tiers are a real cost. HubSpot runs from a free CRM up through Starter, Professional and Enterprise, with Marketing, Sales, Service, Content and Data Hubs. We advise on the smallest configuration that does the job; we are independent and do not resell HubSpot licences, so the recommendation is based on fit, not commission." }
          },
          {
            "@type": "Question",
            "name": "Is HubSpot right for my business?",
            "acceptedAnswer": { "@type": "Answer", "text": "HubSpot suits businesses with a real sales and marketing process to run and room to grow into it. If you are a solo or small service business that mainly needs to book, contract and invoice clients, a lighter tool such as Dubsado or HoneyBook is often a better fit, and we implement those too. Discovery is where we tell you honestly which way we would go." }
          },
          {
            "@type": "Question",
            "name": "Is Sage Kite a HubSpot partner?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner; Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot. We implement the platform on your behalf and are paid by you, not by HubSpot." }
          },
          {
            "@type": "Question",
            "name": "What happens after implementation?",
            "acceptedAnswer": { "@type": "Answer", "text": "You own the portal and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as you add Hubs or processes, and the wider marketing, automation and staffing that turn a well-built CRM into growth." }
          },
          {
            "@type": "Question",
            "name": "Is Sage Kite only a HubSpot agency?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Sage Kite is a business growth consultancy. HubSpot is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you win and keep customers; the broader work decides what to change and creates the demand that flows through it." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..700&display=swap');
          /* HubSpot page additions */
          .crumbs{padding:18px 0 0;font-size:.85rem}
          .crumbs ol{display:flex;flex-wrap:wrap;gap:8px;align-items:center;color:var(--sage)}
          .crumbs a{text-decoration:none;font-weight:500}
          .crumbs a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
          .crumbs li:not(:last-child)::after{content:"/";margin-left:8px;color:var(--light-sage)}
          .crumbs [aria-current]{color:var(--ink);font-weight:600}

          .plat-hero{padding:clamp(16px,3vw,32px) 0 clamp(72px,9vw,112px)}
          .plat-hero h1{font-family:'Newsreader', serif; font-weight:500; font-size:clamp(2.5rem,5vw,4.1rem);line-height:1.02;letter-spacing:-.025em;max-width:15ch}
          .plat-hero .sub{margin:24px 0 34px;max-width:52ch}

          .checklist{background:var(--pale-sage);border-radius:var(--r);padding:clamp(24px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%);align-self:start}
          .checklist .ui{box-shadow:8px 8px 0 var(--light-sage); background:var(--warm-white); border:1px solid var(--light-sage); border-radius:var(--r); padding:18px 20px;}
          .ui-title{display:flex;justify-content:space-between;align-items:baseline;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:12px}
          .ui-title b{font-weight:600;color:var(--ink);font-size:.95rem}
          .check{list-style:none;margin:0;padding:0;}
          .check li{display:flex;gap:10px;align-items:flex-start;padding:9px 0;font-size:.925rem;color:var(--ink);border-bottom:1px solid var(--pale-sage)}
          .check li:last-child{border-bottom:0}
          .check svg{flex:0 0 auto;margin-top:3px;color:var(--sage)}
          .check span{font-size:.8125rem;color:var(--sage);margin-left:auto;white-space:nowrap}
          .checklist figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          .fit-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(36px,4vw,52px)}
          .fit{border:1px solid var(--light-sage);border-left:5px solid var(--c);border-radius:var(--r);padding:20px 22px;background:var(--warm-white)}
          .fit strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.05rem;color:var(--ink);line-height:1.25;margin-bottom:0}

          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage);list-style:none;padding:0;}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;font-size:.95rem;color:var(--ink);line-height:1.4}
          .after-line{margin-top:26px;max-width:66ch;font-size:1.05rem}

          .journey{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);margin-top:clamp(36px,4vw,52px)}
          .track{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;position:relative;list-style:none;padding:0;margin:0;}
          .track::before{content:"";position:absolute;left:9%;right:9%;top:15px;height:1px;background:var(--sage)}
          .track li{text-align:center;position:relative}
          .track .d{display:block;width:12px;height:12px;border-radius:50%;background:var(--warm-white);border:1px solid var(--sage);margin:9px auto 12px}
          .track li.auto .d{background:var(--sky-soft);border-color:var(--sky)}
          .track li.human .d{background:var(--butter-soft);border-color:var(--butter)}
          .track strong{display:block;font-family:'Newsreader', serif;font-weight:600;letter-spacing:-.01em;font-size:1.15rem;color:var(--ink);line-height:1.2}
          .track small{display:block;font-size:.75rem;color:var(--sage);margin-top:3px}
          .key{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:26px;padding-top:18px;border-top:1px dashed var(--light-sage);font-size:.85rem}
          .key span{display:inline-flex;align-items:center;gap:8px}

          .impl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:clamp(36px,4vw,52px)}
          .impl{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 22px 24px;background:var(--warm-white);transition:transform var(--t) var(--ease)}
          .impl:hover{transform:translateY(-3px)}
          .impl h3{font-family:'Newsreader', serif;font-weight:500;font-size:1.45rem;letter-spacing:-.01em;margin-bottom:8px;color:var(--ink)}
          .impl p{font-size:.9rem;line-height:1.5}

          .paths{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .path-card{border:1px solid var(--light-sage);border-radius:var(--r);padding:28px 28px 30px;background:var(--warm-white)}
          .path-card h3{font-family:'Newsreader', serif;font-weight:500;font-size:1.75rem;letter-spacing:-.01em;margin-bottom:12px;color:var(--ink)}
          .path-card ul{margin-top:14px;list-style:none;padding:0;}
          .path-card li{padding:8px 0 8px 20px;position:relative;font-size:.925rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .path-card li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          .why-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .why-list{list-style:none;padding:0;margin:0;}
          .why-list li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;padding:16px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.5}
          .why-list b{font-family:var(--sans);font-weight:700;font-size:1.15rem;color:var(--sage)}
          .why-list strong{color:var(--ink);font-weight:600}

          .partner{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,4fr);gap:clamp(28px,5vw,64px);align-items:center;border:1px solid var(--light-sage);border-left:6px solid var(--sage);border-radius:var(--r);padding:clamp(28px,4vw,48px)}
          .partner h2{font-size:clamp(1.8rem,3vw,2.5rem)}
          .partner .sub{margin-top:14px;font-size:1rem}

          .deliver{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,4vw,64px);margin-top:clamp(32px,4vw,44px);list-style:none;padding:0;}
          .deliver li{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.45}
          .deliver svg{flex:0 0 auto;margin-top:4px}

          .stack{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;margin-top:clamp(32px,4vw,48px);align-items:stretch;list-style:none;padding:0;}
          .stack li{background:var(--warm-white);border:1px solid var(--light-sage);border-top:4px solid var(--c);border-radius:var(--r);padding:16px 14px;text-align:center;font-size:.9rem;font-weight:600;color:var(--ink);display:flex;align-items:center;justify-content:center;line-height:1.3}
          .stack li a{text-decoration:none}
          .stack li a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
          .stack-note{margin-top:22px;max-width:70ch;font-size:.975rem}

          .related{display:flex;flex-wrap:wrap;gap:10px 14px;margin-top:22px}
          .mid-cta{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px;margin-top:clamp(32px,4vw,44px)}
          .trust-note{margin-top:28px;font-size:.85rem;color:var(--sage);max-width:70ch}

          .faq-group { display: grid; grid-template-columns: 280px 1fr; gap: 40px; padding: 48px 0; border-top: 1px solid var(--light-sage); }
          .faq-group .label { margin: 0; color: var(--ink); font-weight: 500; font-size: 0.85rem; }
          .faq-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px 40px; }
          .faq-grid > div h3 { font-size: 0.95rem; font-weight: 700; color: var(--ink); margin-bottom: 12px; font-family: var(--sans); line-height: 1.4; }
          .faq-grid > div p { font-size: 0.85rem; line-height: 1.55; color: var(--ink); }

          .runs-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:40px 24px;margin-top:clamp(36px,4vw,52px)}
          .run-step{display:flex;flex-direction:column}
          .run-bar{height:4px;background:var(--light-sage);margin-bottom:20px;display:flex}
          .run-bar::before{content:"";width:35%;height:100%;background:var(--c)}
          .run-step .num{font-family:var(--sans);font-size:2.4rem;color:var(--sage);line-height:1;margin-bottom:12px;font-weight:700;letter-spacing:-.02em}
          .run-step h3{font-family:var(--sans);font-size:1.35rem;color:var(--ink);margin-bottom:10px;font-weight:700;letter-spacing:-.01em}
          .run-step p{font-size:.925rem;line-height:1.45}

          @media (max-width:1040px){
            .fit-grid,.symptoms,.impl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
            .track{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:22px}
            .track::before{display:none}
            .why-grid,.partner{grid-template-columns:1fr}
            .stack{grid-template-columns:repeat(3,minmax(0,1fr))}
            .plat-hero .hero-grid{gap:40px}
            .runs-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
            .faq-group { grid-template-columns: 1fr; padding: 32px 0; gap: 24px; }
            .faq-grid { grid-template-columns: 1fr; gap: 32px; }
          }
          @media (max-width:680px){
            .fit-grid,.symptoms,.impl-grid,.paths,.deliver,.runs-grid{grid-template-columns:1fr}
            .track{grid-template-columns:repeat(2,minmax(0,1fr))}
            .stack{grid-template-columns:repeat(2,minmax(0,1fr))}
            .mid-cta .btn{width:100%}
          }
        ` }} />

        {/* Hero */}
        <section className="plat-hero">
          <div className="wrap">
            <div className="brand-dashes" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--coral)' }}></div>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--butter)' }}></div>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--sky)' }}></div>
            </div>

            
            <div className="hero-grid" style={{ marginTop: '24px' }}>
              <div className="hero-copy">
                <h1>HubSpot implementation and consulting services</h1>
                <p className="sub">
                  Sage Kite implements HubSpot around the way your business actually sells and serves customers: CRM architecture, pipelines, lifecycle stages, workflows, reporting and integrations — mapped to your process, migrated, tested and handed over.
                </p>
                <div className="cta-row" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Book a discovery call</Link>
                  <Link href="#included" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See what's included</Link>
                </div>
              </div>
              
              <div className="checklist">
                 <div className="ui">
                    <div className="ui-title"><b>Configured HubSpot portal</b> <span>Example scope</span></div>
                    <ul className="check">
                       <li><Check size={16} /> CRM data model and properties structured <span>Setup</span></li>
                       <li><Check size={16} /> Lifecycle stages and lead status defined <span>Lifecycle</span></li>
                       <li><Check size={16} /> Deal pipeline that matches your sales process <span>Pipelines</span></li>
                       <li><Check size={16} /> Lead capture forms and routing <span>Lead mgmt</span></li>
                       <li><Check size={16} /> Workflows built, tested and handed over <span>Automation</span></li>
                       <li><Check size={16} /> Dashboards for the metrics you run on <span>Reporting</span></li>
                    </ul>
                 </div>
                 <figcaption>Illustrative scope. Final scope is agreed in your proposal.</figcaption>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Who it's for */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className="head">
            <div className="label">Who it's for</div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '22ch', lineHeight: 1.05, marginBottom: '24px' }}>HubSpot suits businesses with a sales and marketing process to run.</h2>
            <p className="sub" style={{ maxWidth: '54ch', fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)' }}>
              We implement HubSpot CRM for B2B and professional-services firms, agencies, SaaS and technology businesses, and consultancies — built around how each one wins, converts and keeps customers.
            </p>
          </div>
          <div className="fit-grid">
             <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>B2B & professional services</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Longer sales cycles that need pipeline visibility, consistent follow-up and reporting that reflects how deals really progress.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <strong>Marketing & creative agencies</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Managing their own pipeline and their clients' — and, with Sage Kite, delivering HubSpot for clients under their own brand.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <strong>SaaS & technology</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Connecting marketing, sales and customer success in one CRM so lifecycle, retention and revenue are visible end to end.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <strong>Consultants & advisory firms</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Structured lead management and follow-up for a smaller number of higher-value relationships.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <strong>Sales-led teams</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Businesses aligning sales and marketing around one source of truth, rather than a CRM and a marketing tool that disagree.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Outgrowing a basic CRM</strong>
                <p style={{ marginTop: '8px', fontSize: '0.925rem', lineHeight: 1.45, color: 'var(--ink)' }}>Teams on spreadsheets or a starter tool that has run out of room and needs a platform built to scale.</p>
             </div>
          </div>
          <p className="after-line" style={{ maxWidth: '100%', fontSize: '0.85rem' }}>
            HubSpot earns its cost when there is a real sales and marketing motion to support. If you are a solo or small service business that mainly needs to book, contract and invoice clients, a lighter tool such as <Link href="/platforms/dubsado" className="link" style={{ fontSize: 'inherit' }}>Dubsado</Link> or <Link href="/platforms/honeybook" className="link" style={{ fontSize: 'inherit' }}>HoneyBook</Link> is often a better fit — and we implement those too. Discovery is where we tell you honestly which way we would go.
          </p>
        </section>

        {/* The Problem */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className="wrap">
            <div className="head">
              <div className="label">The problem</div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '24ch', lineHeight: 1.05, marginBottom: '32px' }}>When the portal was switched on but never built around the business.</h2>
            </div>
            <ul className="symptoms">
               <li>HubSpot was set up quickly and never structured around a real process.</li>
               <li>Sales and marketing work in the same tool but from different playbooks.</li>
               <li>Contact and company data is duplicated, patchy or full of unused properties.</li>
               <li>Pipelines and lifecycle stages do not match how deals actually progress.</li>
               <li>Follow-up and lead routing still depend on someone remembering.</li>
               <li>The default reports do not answer the questions the business runs on.</li>
            </ul>
            <p style={{ marginTop: '28px', maxWidth: '75ch', fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)' }}>
              None of this means HubSpot is the wrong platform. It usually means it was configured around its features instead of around your revenue process.
            </p>
          </div>
        </section>

        {/* Our approach */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
              <div className="label">Our approach</div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '24ch', lineHeight: 1.05, marginBottom: '24px' }}>We build the system around the business, not the other way around.</h2>
              <p className="sub" style={{ maxWidth: '54ch', fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)' }}>
                HubSpot's own onboarding gets an account started. Implementation is the part that decides whether it works: we map how a lead becomes a customer — and stays one — then structure the CRM, automation and reporting to fit that, rather than reshaping the business around default settings.
              </p>
           </div>
           
           <div className="journey">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)' }}>
                 <span>A typical revenue process in HubSpot</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 500 }}>Mapped before anything is built</span>
              </div>
              <ul className="track" style={{ rowGap: '44px' }}>
                 <li className="auto"><span className="d"></span><strong>Lead</strong><small>Form</small></li>
                 <li className="auto"><span className="d"></span><strong>Lifecycle</strong><small>Property</small></li>
                 <li className="auto"><span className="d"></span><strong>Route</strong><small>Workflow</small></li>
                 <li className="human"><span className="d"></span><strong>Qualify</strong><small>Sales team</small></li>
                 <li className="auto"><span className="d"></span><strong>Deal</strong><small>Pipeline</small></li>
                 
                 <li className="auto"><span className="d"></span><strong>Quote</strong><small>Sales Hub</small></li>
                 <li className="human"><span className="d"></span><strong>Won</strong><small>Handoff</small></li>
                 <li className="auto"><span className="d"></span><strong>Onboard</strong><small>Service Hub</small></li>
                 <li className="auto"><span className="d"></span><strong>Report</strong><small>Dashboard</small></li>
              </ul>
              <div className="key">
                 <span><span className="d" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--sky)', background: 'var(--sky-soft)' }}></span> Automated where it should be</span>
                 <span><span className="d" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--butter)', background: 'var(--butter-soft)' }}></span> Kept with your team</span>
              </div>
           </div>
           
           <p style={{ marginTop: '36px', maxWidth: '64ch', fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)' }}>
             We configure HubSpot so the predictable steps happen on their own and the numbers stay accurate, and leave qualification, closing and service — the parts that need judgement — with your people.
           </p>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* What we implement */}
        <section className="wrap" id="included" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
             <div className="label">What we implement</div>
             <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '18ch', lineHeight: 1.05 }}>What HubSpot implementation services cover.</h2>
           </div>
           <div className="impl-grid">
             <div className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>CRM architecture</h3>
                <p>A contact, company and deal data model with the properties you actually use, so the CRM stays the single source of truth.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Account setup & permissions</h3>
                <p>Account settings, teams and user permissions structured for how your business is organised and who should see what.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Pipelines & deal stages</h3>
                <p>Sales pipelines and deal stages that match how deals really move, with the exit criteria that keep the forecast honest.</p>
             </div>
             
             <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Lifecycle & lead management</h3>
                <p>Lifecycle stages, lead status and routing, so every enquiry has an owner and a next step from the moment it arrives.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>
                <h3>Forms & lead capture</h3>
                <p>Forms and lead capture connected to the CRM, routing each enquiry into the right pipeline and workflow.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Workflows & automation</h3>
                <p>Workflows for routing, follow-up, property and stage updates, tasks and internal alerts — built and tested around the mapped process.</p>
             </div>
             
             <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Reporting & dashboards</h3>
                <p>Dashboards and reports built around the questions you run on: pipeline, forecast, source, conversion and activity.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Migration & integrations</h3>
                <p>Data migrated and cleaned from your previous tool where feasible, and the apps you rely on connected to HubSpot.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <h3>Testing & handover</h3>
                <p>The build tested against real scenarios, corrected, then training and documentation for the team who will run it.</p>
             </div>
           </div>
           <div className="mid-cta" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: 'clamp(32px,4vw,44px)' }}>
             <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Talk to a HubSpot specialist</Link>
             <span style={{ fontSize: '0.85rem', color: 'var(--sage)' }}>Scope, exclusions and a fixed project price are agreed before any build starts.</span>
           </div>
        </section>

        {/* Two starting points (paths) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">Two starting points</div>
               <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '24ch', lineHeight: 1.05 }}>A new HubSpot build, or fixing an existing portal.</h2>
             </div>
             
             <div className="paths">
               <div className="path-card" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                 <h3>New HubSpot implementation</h3>
                 <p style={{ fontSize: '0.975rem', lineHeight: 1.5, color: 'var(--ink)', marginBottom: '18px' }}>We map your revenue process, design the CRM architecture, then build the pipelines, automation and reporting around it.</p>
                 <ul>
                   <li>Revenue process mapped from lead to customer</li>
                   <li>CRM, pipelines, lifecycle stages and forms built</li>
                   <li>Workflows created and tested before launch</li>
                   <li>Migration, training and handover for your team</li>
                 </ul>
               </div>
               
               <div className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                 <h3>Existing portal audit & optimisation</h3>
                 <p style={{ fontSize: '0.975rem', lineHeight: 1.5, color: 'var(--ink)', marginBottom: '18px' }}>We review what is already there, find where the setup and the real process have drifted apart, and rebuild the parts holding you back.</p>
                 <ul>
                   <li>Audit of data, properties, pipelines and workflows</li>
                   <li>Duplicate and unused data cleaned or consolidated</li>
                   <li>Pipelines, automation and reporting corrected</li>
                   <li>Underused Hubs and features introduced where they earn it</li>
                 </ul>
               </div>
             </div>
           </div>
        </section>

        {/* Why hire a specialist */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="why-grid">
             <div className="why-copy">
               <div className="label">Doing it yourself, or not</div>
               <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '12ch', lineHeight: 1.05 }}>Why hire a HubSpot specialist?</h2>
               <p style={{ marginTop: '24px', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '38ch', color: 'var(--ink)' }}>
                 HubSpot is usable out of the box, and many teams start themselves. The cost is usually a portal shaped by default settings, the manual work that follows, and the rebuild once the structure no longer matches how the business runs.
               </p>
             </div>
             
             <ul className="why-list">
               <li><b>01</b><div><strong>Architecture first.</strong> The data model, pipelines and lifecycle stages are the decisions that everything else depends on, and the hardest to change later.</div></li>
               <li><b>02</b><div><strong>Fewer configuration mistakes.</strong> Properties, lifecycle logic and workflow timings behave in specific ways; knowing them avoids automation that fires at the wrong moment.</div></li>
               <li><b>03</b><div><strong>Data done properly.</strong> Migration, de-duplication and clean properties, so reporting can be trusted from the start.</div></li>
               <li><b>04</b><div><strong>Sales and marketing aligned.</strong> One source of truth, so both work from the same pipeline and the same definitions.</div></li>
               <li><b>05</b><div><strong>Reporting that reflects the business.</strong> Dashboards built around your metrics rather than the defaults every portal ships with.</div></li>
               <li><b>06</b><div><strong>Handover and adoption.</strong> The team is trained on what was built and how to change it, with the structure documented.</div></li>
             </ul>
           </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Partner Block */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="partner">
             <div>
               <h2 style={{ maxWidth: '20ch', marginBottom: '24px' }}>A HubSpot implementation partner, not a one-off setup.</h2>
               <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                 If you already know HubSpot is the right platform, Sage Kite can handle the implementation: process mapping, configuration, workflow automation, testing and handover. And because Sage Kite is a business growth consultancy, the same team can help with what sits around the platform.
               </p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
               <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Discuss your HubSpot setup</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See all CRM implementation services</Link>
             </div>
           </div>
           
           <p className="trust-note">
             Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner; Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot.
           </p>
        </section>

        {/* How it works (Runs) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">How it works</div>
               <h2 style={{ maxWidth: '30ch' }}>How a HubSpot implementation runs.</h2>
             </div>
             
             <div className="runs-grid">
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--butter)' } as React.CSSProperties}></div>
                 <div className="num">01</div>
                 <h3>Discovery</h3>
                 <p>Your services, current process, team and constraints, and whether we are the right fit.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}></div>
                 <div className="num">02</div>
                 <h3>Process mapping</h3>
                 <p>The journey from enquiry to completion, written down service by service.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div>
                 <div className="num">03</div>
                 <h3>Architecture & setup</h3>
                 <p>CRM data model, account settings, pipelines and stages configured.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></div>
                 <div className="num">04</div>
                 <h3>Automate</h3>
                 <p>Workflows built around the agreed process, with triggers and actions set deliberately.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--ink)' } as React.CSSProperties}></div>
                 <div className="num">05</div>
                 <h3>Data & integrations</h3>
                 <p>Migration of records from your old tools and connecting your tech stack.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}></div>
                 <div className="num">06</div>
                 <h3>Test & handover</h3>
                 <p>Representative client journeys run end to end, then training and documentation.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div>
                 <div className="num">07</div>
                 <h3>Ongoing support</h3>
                 <p>Maintenance and further implementation as your services change.</p>
               </div>
             </div>
           </div>
        </section>

        {/* At handover (Deliverables) */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
             <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>At handover.</h2>
           </div>
           
           <ul className="deliver">
             <li><Check size={18} color="var(--sage)" /> <span>A configured HubSpot portal, matched to your process</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>A CRM data model and properties you will actually use</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Deal pipelines and lifecycle stages</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Lead capture forms and routing</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Workflows, tested end to end</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Dashboards and reports for your key metrics</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Migrated and cleaned data where applicable</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Training, documentation and optional ongoing support</span></li>
           </ul>
        </section>

        {/* Where HubSpot sits */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">Where HubSpot sits</div>
               <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem,5vw,3.1rem)', maxWidth: '18ch', lineHeight: 1.05 }}>The platform is one part of the growth system.</h2>
             </div>
             
             <ul className="stack">
               <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}>Consultancy</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>HubSpot and CRM</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Marketing</li>
               <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
               <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}>People</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>Execution</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
             </ul>
             
             <p className="stack-note" style={{ marginTop: '22px', maxWidth: '75ch', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)' }}>
               Sage Kite is a business growth consultancy. HubSpot is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing that creates demand and the people who keep it running. On its own, HubSpot organises how you win and keep customers; connected to the rest, it becomes part of how the business grows.
             </p>
             
             <div className="related">
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>CRM implementation services</Link>
               <Link href="/consulting" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Business growth consulting</Link>
               <Link href="/marketing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Marketing services</Link>
               <Link href="/white-label" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>White-label delivery for agencies</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>All platforms</Link>
             </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="wrap brief">
           <div className="head" style={{ marginBottom: 0 }}>
             <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem, 4vw, 3rem)' }}>Frequently asked questions</h2>
           </div>
           
           <div className="faq-group" style={{ marginTop: '32px' }}>
              <div className="label">HubSpot implementation</div>
              <div className="faq-grid">
                 <div>
                   <h3>What is HubSpot implementation?</h3>
                   <p>HubSpot implementation is the work of designing and configuring HubSpot around how your business actually sells and serves customers. It goes beyond switching the account on: CRM architecture, contact and company data structure, deal pipelines, lifecycle stages, lead management, workflows, reporting and any migration or integrations. Sage Kite maps the process first, then builds the platform to fit it.</p>
                 </div>
                 <div>
                   <h3>What does a HubSpot consultant do?</h3>
                   <p>A HubSpot consultant helps decide how HubSpot should be structured for your business, then configures it and builds the automation that runs it. That means the CRM data model, pipelines and lifecycle stages, workflows for routing and follow-up, reporting that reflects how you measure the business, and training so the team adopts it. The aim is a system that supports the business, not just an account that is switched on.</p>
                 </div>
                 <div>
                   <h3>Is this the same as HubSpot's own onboarding?</h3>
                   <p>No. HubSpot's onboarding gets your account set up and your team started on the basics. Implementation goes further: designing the CRM architecture, sales and marketing process, automation, reporting, migration and integrations around your business. The two are complementary; if you have already been through HubSpot onboarding and it stopped short of a working system, implementation is usually what is missing.</p>
                 </div>
                 <div>
                   <h3>Can Sage Kite set up a new HubSpot account from scratch?</h3>
                   <p>Yes. A new implementation starts by mapping how leads become customers, then structuring the CRM, building pipelines, lifecycle stages, forms, workflows and reporting to match, connecting the tools you already use, and testing it before your team relies on it.</p>
                 </div>
                 <div>
                   <h3>Can you audit and improve an existing HubSpot portal?</h3>
                   <p>Yes. Many engagements are existing portals that grew without a plan: duplicated or inconsistent data, pipelines that do not match the real sales process, workflows that misfire and reporting no one trusts. We audit what is there, fix the data and structure, rebuild the parts holding you back, and document it.</p>
                 </div>
              </div>
           </div>
           
           <div className="faq-group">
              <div className="label">Scope and configuration</div>
              <div className="faq-grid">
                 <div>
                   <h3>What does HubSpot CRM setup include?</h3>
                   <p>Typically: account settings and user permissions, a contact and company data model with the properties you actually use, deal pipelines and stages that match your sales process, lifecycle stages and lead status, lead capture forms and routing, core workflows, and dashboards for the metrics you run on. Exact scope is agreed in the proposal.</p>
                 </div>
                 <div>
                   <h3>Can you build HubSpot workflows and automation?</h3>
                   <p>Yes. HubSpot workflows automate the repetitive steps: routing and assigning leads, sending follow-up, updating properties and lifecycle stages, creating tasks and internal alerts. We build them around the process we mapped and test each path so the right action happens at the right time.</p>
                 </div>
                 <div>
                   <h3>Can you migrate data from another CRM into HubSpot?</h3>
                   <p>Usually. Migrations from tools like Salesforce, Pipedrive, Zoho or a spreadsheet are common, and HubSpot has strong import tools. Feasibility depends on what the current system can export and how the data is structured, so we confirm what is realistic and how records will map during discovery, then clean and de-duplicate as part of the move.</p>
                 </div>
                 <div>
                   <h3>Can you set up reporting and dashboards?</h3>
                   <p>Yes. We build dashboards and reports around the questions the business actually asks — pipeline and forecast, source and conversion, activity and service — so the numbers reflect how you run, rather than the default reports every portal ships with.</p>
                 </div>
                 <div>
                   <h3>Can you configure integrations?</h3>
                   <p>Yes, where they are supported. HubSpot connects to many tools through its app marketplace, and to others through custom integrations where feasible. We confirm what your stack allows in discovery so the CRM stays the single source of truth rather than one more disconnected tool.</p>
                 </div>
              </div>
           </div>
           
           <div className="faq-group">
              <div className="label">Working with Sage Kite</div>
              <div className="faq-grid">
                 <div>
                   <h3>Which HubSpot edition and Hubs do I need?</h3>
                   <p>It depends on how you sell and market, and it is worth getting right because the paid tiers are a real cost. HubSpot runs from a free CRM up through Starter, Professional and Enterprise, with Marketing, Sales, Service, Content and Data Hubs. We advise on the smallest configuration that does the job; we are independent and do not resell HubSpot licences, so the recommendation is based on fit, not commission.</p>
                 </div>
                 <div>
                   <h3>Is HubSpot right for my business?</h3>
                   <p>HubSpot suits businesses with a real sales and marketing process to run and room to grow into it. If you are a solo or small service business that mainly needs to book, contract and invoice clients, a lighter tool such as Dubsado or HoneyBook is often a better fit, and we implement those too. Discovery is where we tell you honestly which way we would go.</p>
                 </div>
                 <div>
                   <h3>Is Sage Kite a HubSpot partner?</h3>
                   <p>Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner; Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot. We implement the platform on your behalf and are paid by you, not by HubSpot.</p>
                 </div>
                 <div>
                   <h3>What happens after implementation?</h3>
                   <p>You own the portal and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as you add Hubs or processes, and the wider marketing, automation and staffing that turn a well-built CRM into growth.</p>
                 </div>
                 <div>
                   <h3>Is Sage Kite only a HubSpot agency?</h3>
                   <p>No. Sage Kite is a business growth consultancy. HubSpot is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you win and keep customers; the broader work decides what to change and creates the demand that flows through it.</p>
                 </div>
              </div>
           </div>
        </section>
        
        {/* Final CTA */}
        <section className="pale" style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}>
           <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.925rem', color: 'var(--ink)', marginBottom: '28px', flexWrap: 'wrap', fontWeight: 600 }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot" style={{ background: 'var(--sage)' }}></span> Map</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot" style={{ background: 'var(--sky)' }}></span> Build</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot" style={{ background: 'var(--butter)' }}></span> Automate</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot" style={{ background: 'var(--coral)' }}></span> Report</span>
             </div>
             
             <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '20ch' }}>Get HubSpot built around your process.</h2>
             <p className="sub" style={{ maxWidth: '60ch', margin: '20px auto 34px' }}>
               Tell us how you win and keep customers today, and what is not working in HubSpot. We will tell you what we would map first, what the build would involve, and whether HubSpot is the right fit for your business.
             </p>
             
             <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '24px', alignItems: 'center' }}>
               <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Book a discovery call</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See other platforms we implement</Link>
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
