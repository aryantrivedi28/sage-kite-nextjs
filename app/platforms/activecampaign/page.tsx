import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ActiveCampaign Implementation Services | Sage Kite",
  description: "ActiveCampaign implementation from Sage Kite: we map your customer journey, then build contacts, segments, email, automations and sales CRM around it.",
  alternates: {
    canonical: "https://www.sagekite.com/platforms/activecampaign",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/platforms/activecampaign",
    title: "ActiveCampaign Implementation & Automation Services | Sage Kite",
    description: "ActiveCampaign implementation from Sage Kite: we map your customer journey, then build contacts, segments, email, automations and sales CRM around it.",
  },
  twitter: {
    card: "summary",
    title: "ActiveCampaign Implementation & Automation Services | Sage Kite",
    description: "ActiveCampaign implementation from Sage Kite: we map your customer journey, then build contacts, segments, email, automations and sales CRM around it.",
  },
};

export default function ActiveCampaignPage() {
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
      "@id": "https://www.sagekite.com/platforms/activecampaign/#webpage",
      "url": "https://www.sagekite.com/platforms/activecampaign",
      "name": "ActiveCampaign implementation and automation services | Sage Kite",
      "description": "Sage Kite implements ActiveCampaign around your customer journey: contacts and segmentation, email marketing, automations, sales CRM, deliverability and integrations, tested and handed over.",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/activecampaign/#service"
      },
      "breadcrumb": {
        "@id": "https://www.sagekite.com/platforms/activecampaign/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sagekite.com/platforms/activecampaign/#breadcrumb",
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
          "name": "ActiveCampaign"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.sagekite.com/platforms/activecampaign/#service",
      "name": "ActiveCampaign implementation and automation services",
      "serviceType": "ActiveCampaign implementation and automation",
      "description": "Customer journey mapping, ActiveCampaign account configuration, contact structure, tags, custom fields and segmentation, email marketing and campaigns, automations and customer journeys, lead nurturing and scoring, sales CRM and pipelines, deliverability foundations, migration and integrations, testing, training and handover.",
      "provider": {
        "@id": "https://www.sagekite.com/#organization"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "Canada"
        },
        {
          "@type": "Place",
          "name": "Europe"
        },
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "Country",
          "name": "New Zealand"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "What we implement in ActiveCampaign",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Account setup and data structure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tagging and segmentation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email marketing and campaigns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automations and customer journeys"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead nurturing and scoring"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sales CRM and pipelines"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Forms and lead capture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deliverability, migration and integrations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Testing, training and handover"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sagekite.com/platforms/activecampaign/#faq",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/activecampaign/#service"
      },
      "inLanguage": "en",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ActiveCampaign implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ActiveCampaign implementation is the work of designing and configuring ActiveCampaign around how your business actually markets and sells: contact data structure, tags and segmentation, email marketing, automations and customer journeys, the sales CRM and pipelines, deliverability, reporting and any migration or integrations. Sage Kite maps the journey first, then builds the platform to fit it rather than shaping your process around default settings."
          }
        },
        {
          "@type": "Question",
          "name": "What does an ActiveCampaign consultant do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ActiveCampaign consultant decides how the platform should be structured for your business, then configures it and builds the automations that run it: a clean contact and tagging model, segments that mean something, nurture and sales automations, pipelines, reporting and training so the team can own it. The aim is a system that markets and follows up on its own where it should, not just an account full of unused features."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sage Kite set up a new ActiveCampaign account from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A new implementation starts by mapping how a contact moves from first touch to customer and beyond, then structuring contacts, tags and custom fields, building segments, email templates, forms, automations and pipelines to match, setting up deliverability, and testing it before you rely on it."
          }
        },
        {
          "@type": "Question",
          "name": "Can you fix or optimise an existing ActiveCampaign account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many engagements are existing accounts that grew without a plan: inconsistent tags, tangled automations, no real segmentation and deliverability that has slipped. We audit what is there, clean the data and tagging, rebuild the automations and segments that matter, and document it so it stays maintainable."
          }
        },
        {
          "@type": "Question",
          "name": "Do you migrate from another email tool or CRM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually. ActiveCampaign will migrate your contacts and email content for free, and that covers moving the data across. The work worth doing is what happens next: rebuilding your automations, segmentation and CRM around your process rather than copying the limitations of the old tool. We confirm what can move, and how, during discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build ActiveCampaign automations and customer journeys?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ActiveCampaign's visual automation builder handles branching, conditions and goals, so a journey can adapt to what each contact does. We design the journey first, then build the automations for onboarding, nurture, sales follow-up, re-engagement and internal alerts, and test each path before it goes live."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up the CRM and sales pipelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ActiveCampaign includes a sales CRM with deals, pipelines and sales automation on the relevant plans. We structure pipelines and deal stages around how you actually sell, connect them to the marketing automation so hand-offs happen automatically, and confirm what your plan supports in discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up email marketing, segmentation and lead nurturing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. That is ActiveCampaign's core: campaigns and broadcasts, reusable templates, meaningful segments built from tags, custom fields and behaviour, and nurture sequences that send based on what a contact does rather than to everyone at once. Lead scoring is set up where it earns its place."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with deliverability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the foundations: email authentication such as SPF, DKIM and DMARC, list hygiene, and sender warm-up where a domain or list is new. Deliverability is an ongoing discipline rather than a one-off fix, but getting the foundations right is part of a proper setup."
          }
        },
        {
          "@type": "Question",
          "name": "Can you configure integrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, where they are supported. ActiveCampaign connects to over a thousand tools, including Shopify, WooCommerce, Salesforce and many others, natively or through connectors, and to others through custom integrations where feasible. We confirm what your stack allows in discovery so ActiveCampaign stays connected to the rest of your systems."
          }
        },
        {
          "@type": "Question",
          "name": "Which ActiveCampaign plan do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on how much automation, and whether you need the sales CRM. ActiveCampaign runs from a Starter plan up through Plus, Professional and Enterprise, with sales CRM capability on the higher plans or as an add-on, and pricing that scales with your contact count. We advise on the smallest plan that does the job; we are independent and do not resell ActiveCampaign, so the recommendation is based on fit."
          }
        },
        {
          "@type": "Question",
          "name": "Is ActiveCampaign right for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ActiveCampaign fits businesses that have outgrown a basic email tool and want serious automation and a connected CRM without the cost and breadth of a full platform. If you only need simple newsletters, it is more than you need; if you want a broader all-in-one customer platform, HubSpot may fit better, and we implement that too. Discovery is where we tell you honestly which way we would go."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sage Kite an ActiveCampaign partner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sage Kite is an independent implementation partner. ActiveCampaign is a trademark of its owner; Sage Kite is not an ActiveCampaign Certified Partner or Agency Partner and is not affiliated with or certified by ActiveCampaign. We implement the platform on your behalf and are paid by you, not by ActiveCampaign."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You own the account and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your marketing and sales grow, and the wider consultancy, marketing and staffing that turn a well-built platform into growth."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sage Kite only an ActiveCampaign agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sage Kite is a business growth consultancy. ActiveCampaign is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform runs your marketing and follow-up; the broader work decides what to change and creates the demand that flows through it."
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <style dangerouslySetInnerHTML={{ __html: `
/* Page-specific styles only. Brand tokens: app/brand.css. Shared styles: app/globals.css. */
.rule{border-top:1px solid var(--light-sage)}
.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(40px,5vw,72px);align-items:center}
.ui{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:18px 20px;box-shadow:8px 8px 0 var(--light-sage)}
.ui-title{display:flex;justify-content:space-between;align-items:baseline;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:12px}
.ui-title b{font-weight:600;color:var(--ink);font-size:.95rem}
.crumbs{padding:18px 0 0;font-size:.85rem}
.crumbs ol{display:flex;flex-wrap:wrap;gap:8px;align-items:center;color:var(--sage)}
.crumbs a{text-decoration:none;font-weight:500}
.crumbs a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
.crumbs li:not(:last-child)::after{content:"/";margin-left:8px;color:var(--light-sage)}
.crumbs [aria-current]{color:var(--ink);font-weight:600}
.plat-hero{padding:clamp(40px,5vw,72px) 0 clamp(72px,9vw,112px)}
.plat-hero h1{font-size:clamp(2.5rem,5vw,4.1rem);line-height:1.02;letter-spacing:-.025em;max-width:15ch}
.plat-hero .sub{margin:24px 0 34px;max-width:52ch}
.checklist{background:var(--pale-sage);border-radius:var(--r);padding:clamp(24px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
.checklist .ui{box-shadow:8px 8px 0 var(--light-sage)}
.check li{display:flex;gap:10px;align-items:flex-start;padding:9px 0;font-size:.925rem;color:var(--ink);border-bottom:1px solid var(--pale-sage)}
.check li:last-child{border-bottom:0}
.check svg{flex:0 0 auto;margin-top:3px;color:var(--sage)}
.check span{font-size:.8125rem;color:var(--sage);margin-left:auto;white-space:nowrap}
.checklist figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}
.fit-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(36px,4vw,52px)}
.fit{border:1px solid var(--light-sage);border-left:5px solid var(--c);border-radius:var(--r);padding:20px 22px;background:var(--warm-white)}
.fit strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.2rem;color:var(--ink);line-height:1.25;margin-bottom:4px}
.fit p{font-size:.9rem;line-height:1.45}
.symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
.symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;font-size:.95rem;color:var(--ink);line-height:1.4}
.after-line{margin-top:26px;max-width:66ch;font-size:1.05rem}
.journey{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);margin-top:clamp(36px,4vw,52px)}
.track{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;position:relative}
.track::before{content:"";position:absolute;left:9%;right:9%;top:15px;height:1px;background:var(--sage)}
.track li{text-align:center;position:relative}
.track .d{display:block;width:12px;height:12px;border-radius:50%;background:var(--warm-white);border:1px solid var(--sage);margin:9px auto 12px}
.track li.auto .d{background:var(--sky-soft);border-color:var(--sky)}
.track li.human .d{background:var(--butter-soft);border-color:var(--butter)}
.track strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.05rem;color:var(--ink);line-height:1.2}
.track small{display:block;font-size:.75rem;color:var(--sage);margin-top:3px}
.key{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:26px;padding-top:18px;border-top:1px dashed var(--light-sage);font-size:.85rem}
.key span{display:inline-flex;align-items:center;gap:8px}
.impl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:clamp(36px,4vw,52px)}
.impl{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 22px 24px;background:var(--warm-white);transition:transform var(--t) var(--ease)}
.impl:hover{transform:translateY(-3px)}
.impl h3{font-size:1.3rem;margin-bottom:8px}
.impl p{font-size:.9rem;line-height:1.5}
.paths{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
.path-card{border:1px solid var(--light-sage);border-radius:var(--r);padding:28px 28px 30px;background:var(--warm-white)}
.path-card h3{font-size:1.6rem;margin-bottom:10px}
.path-card ul{margin-top:14px}
.path-card li{padding:8px 0 8px 20px;position:relative;font-size:.925rem;line-height:1.45;border-top:1px solid var(--light-sage)}
.path-card li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}
.why-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
.why-list li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;padding:16px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.5}
.why-list b{font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.15rem;color:var(--sage)}
.why-list strong{color:var(--ink);font-weight:600}
.partner{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,4fr);gap:clamp(28px,5vw,64px);align-items:center;border:1px solid var(--light-sage);border-left:6px solid var(--sage);border-radius:var(--r);padding:clamp(28px,4vw,48px)}
.partner h2{font-size:clamp(1.8rem,3vw,2.5rem)}
.partner .sub{margin-top:14px;font-size:1rem}
.deliver{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,4vw,64px);margin-top:clamp(32px,4vw,44px)}
.deliver li{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.45}
.deliver svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}
.stack{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;margin-top:clamp(32px,4vw,48px);align-items:stretch}
.stack li{background:var(--warm-white);border:1px solid var(--light-sage);border-top:4px solid var(--c);border-radius:var(--r);padding:16px 14px;text-align:center;font-size:.9rem;font-weight:600;color:var(--ink);display:flex;align-items:center;justify-content:center;line-height:1.3}
.stack li a{text-decoration:none}
.stack li a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
.stack-note{margin-top:22px;max-width:70ch;font-size:.975rem}
.related{display:flex;flex-wrap:wrap;gap:10px 14px;margin-top:22px}
.mid-cta{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px;margin-top:clamp(32px,4vw,44px)}
.trust-note{margin-top:28px;font-size:.85rem;color:var(--sage);max-width:70ch}
@media (max-width:1040px){
  .hero-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
  .fit-grid,.symptoms,.impl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .track{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:22px}
  .track::before{display:none}
  .why-grid,.partner{grid-template-columns:1fr}
  .stack{grid-template-columns:repeat(3,minmax(0,1fr))}
  .plat-hero .hero-grid{gap:40px}
}
@media (max-width:680px){
  .steps{grid-template-columns:1fr 1fr}
  .fit-grid,.symptoms,.impl-grid,.paths,.deliver{grid-template-columns:1fr}
  .track{grid-template-columns:repeat(2,minmax(0,1fr))}
  .stack{grid-template-columns:repeat(2,minmax(0,1fr))}
  .checklist{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
  .mid-cta .btn{width:100%}
}
`}} />
      
      <main id="main">

{/*  HERO  */}
<section className="plat-hero" aria-labelledby="hero-title">
  <div className="wrap hero-grid">
    <div className="hero-copy">
      <div className="ribbon" aria-hidden="true"><span style={{ background: 'var(--coral)' } as React.CSSProperties}></span><span style={{ background: 'var(--butter)' } as React.CSSProperties}></span><span style={{ background: 'var(--sky)' } as React.CSSProperties}></span></div>
      <p className="label">Platforms / ActiveCampaign</p>
      <h1 id="hero-title">ActiveCampaign implementation and automation services</h1>
      <p className="sub">Sage Kite implements ActiveCampaign around the way your business actually markets and sells: contacts and segmentation, email marketing, automations, the sales CRM and deliverability &mdash; mapped to your customer journey, tested and handed over.</p>
      <div className="cta-row">
        <Link className="btn" href="/contact">Book a discovery call</Link>
        <Link className="link" href="#implement">See what's included</Link>
      </div>
    </div>

    <figure className="checklist" aria-labelledby="chk-title">
      <div className="ui">
        <p className="ui-title"><b id="chk-title">Configured ActiveCampaign account</b><span>Example scope</span></p>
        <ul className="check">
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Contacts, tags and custom fields structured<span>Data</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Segments that reflect how you sell<span>Segments</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Email templates and signup forms<span>Email</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Deal pipeline connected to marketing<span>CRM</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Automations built, tested and handed over<span>Automation</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Deliverability foundations in place<span>Sending</span></li>
        </ul>
      </div>
      <figcaption>Illustrative scope. Final scope is agreed in your proposal.</figcaption>
    </figure>
  </div>
</section>

{/*  WHO IT'S FOR  */}
<section className="rule" id="who" aria-labelledby="who-title">
  <div className="wrap">
    <div className="head">
      <p className="label">Who it's for</p>
      <h2 id="who-title">ActiveCampaign suits businesses ready for serious automation.</h2>
      <p className="sub">We implement ActiveCampaign for ecommerce stores, B2B and professional-services firms, coaches and course businesses, agencies and SaaS teams &mdash; built around how each one attracts, nurtures and keeps customers.</p>
    </div>
    <div className="fit-grid">
      <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><strong>Ecommerce</strong><p>Behaviour-based email and automations around browsing and purchase, connected to Shopify, WooCommerce or your store.</p></div>
      <div className="fit" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><strong>B2B & professional services</strong><p>Lead nurture and sales follow-up in one place, with a pipeline connected to the marketing that feeds it.</p></div>
      <div className="fit" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><strong>Coaches & course businesses</strong><p>Enrolment journeys, onboarding sequences and re-engagement, automated around a smaller team's capacity.</p></div>
      <div className="fit" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><strong>Marketing & creative agencies</strong><p>Running their own nurture and, with Sage Kite, delivering ActiveCampaign for clients under their own brand.</p></div>
      <div className="fit" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><strong>SaaS & online-first</strong><p>Trial, onboarding and lifecycle automations tied to product behaviour and site tracking.</p></div>
      <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><strong>Outgrowing a basic email tool</strong><p>Teams that have pushed Mailchimp or similar as far as it goes and need real automation and a CRM.</p></div>
    </div>
    <p className="note" style={{ marginTop: '24px' } as React.CSSProperties}>ActiveCampaign sits between simple newsletter tools and full platforms. If you only need basic newsletters it is more than you need; if you want a broader all-in-one customer platform, <Link className="link" href="/platforms/hubspot/">HubSpot</Link> may fit better &mdash; and we implement that too. Discovery is where we tell you honestly which way we would go.</p>
  </div>
</section>

{/*  THE PROBLEM  */}
<section className="pale" id="problem" aria-labelledby="problem-title">
  <div className="wrap">
    <div className="head">
      <p className="label">The problem</p>
      <h2 id="problem-title">When the account grew faster than the plan behind it.</h2>
    </div>
    <ul className="symptoms">
      <li>Contacts are messy and tags were added ad hoc, so segments cannot be trusted.</li>
      <li>Automations were built one at a time and now overlap, conflict or stall.</li>
      <li>Every campaign goes to the whole list because real segmentation was never set up.</li>
      <li>Marketing and the sales pipeline live in the same tool but do not talk to each other.</li>
      <li>Deliverability has slipped and more email is landing in spam than inboxes.</li>
      <li>The account mostly sends broadcasts &mdash; the automation it is paid for goes unused.</li>
    </ul>
    <p className="after-line">None of this means ActiveCampaign is the wrong platform. It usually means it was built feature by feature instead of around your customer journey.</p>
  </div>
</section>

{/*  OUR APPROACH  */}
<section id="approach" aria-labelledby="approach-title">
  <div className="wrap">
    <div className="head">
      <p className="label">Our approach</p>
      <h2 id="approach-title">We build the system around the business, not the other way around.</h2>
      <p className="sub">The automation is only as good as the journey behind it. We map how a contact moves from first touch to customer and beyond &mdash; what should happen, when, and what stays with a person &mdash; then build the tags, segments, automations and pipeline to fit, rather than wiring up features in isolation.</p>
    </div>

    <figure className="journey" aria-labelledby="journey-title">
      <p className="ui-title"><b id="journey-title">A typical customer journey in ActiveCampaign</b><span>Mapped before anything is built</span></p>
      <ol className="track">
        <li className="auto"><span className="d"></span><strong>Lead</strong><small>Form</small></li>
        <li className="auto"><span className="d"></span><strong>Tag</strong><small>Segment</small></li>
        <li className="auto"><span className="d"></span><strong>Nurture</strong><small>Automation</small></li>
        <li className="auto"><span className="d"></span><strong>Score</strong><small>Lead scoring</small></li>
        <li className="human"><span className="d"></span><strong>Sales</strong><small>Deal / pipeline</small></li>
        <li className="auto"><span className="d"></span><strong>Follow-up</strong><small>Sequence</small></li>
        <li className="human"><span className="d"></span><strong>Won</strong><small>Your team</small></li>
        <li className="auto"><span className="d"></span><strong>Onboard</strong><small>Journey</small></li>
        <li className="auto"><span className="d"></span><strong>Re-engage</strong><small>Behaviour</small></li>
      </ol>
      <p className="key">
        <span><span className="dot" style={{ '--c': 'var(--sky-soft)', border: '1px solid var(--sky)' } as React.CSSProperties}></span>Automated where it should be</span>
        <span><span className="dot" style={{ '--c': 'var(--butter-soft)', border: '1px solid var(--butter)' } as React.CSSProperties}></span>Kept with your team</span>
      </p>
    </figure>
    <p className="after-line">We configure ActiveCampaign so the nurture, follow-up and re-engagement run on their own, and leave the selling and the relationships with your people.</p>
  </div>
</section>

{/*  WHAT WE IMPLEMENT  */}
<section className="rule" id="implement" aria-labelledby="impl-title">
  <div className="wrap">
    <div className="head">
      <p className="label">What we implement</p>
      <h2 id="impl-title">What ActiveCampaign implementation services cover.</h2>
    </div>
    <div className="impl-grid">
      <article className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><h3>Account & data structure</h3><p>A clean contact model with the tags and custom fields you actually use, so segmentation and automation can be trusted.</p></article>
      <article className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>Tagging & segmentation</h3><p>A consistent tagging strategy and segments built from behaviour, fields and lifecycle, so the right people get the right message.</p></article>
      <article className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>Email marketing & campaigns</h3><p>Reusable branded templates, signup forms and campaigns, set up to send to segments rather than the whole list.</p></article>
      <article className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><h3>Automations & journeys</h3><p>Visual automations with branching and conditions for onboarding, nurture, follow-up, re-engagement and internal alerts.</p></article>
      <article className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><h3>Lead nurturing & scoring</h3><p>Nurture sequences that respond to behaviour, and lead scoring where it helps sales focus on the right contacts.</p></article>
      <article className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>Sales CRM & pipelines</h3><p>Deals, pipelines and sales automation on the relevant plans, connected to the marketing so hand-offs are automatic.</p></article>
      <article className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>Forms & lead capture</h3><p>Forms and lead capture that tag and route each contact into the right journey from the first submission.</p></article>
      <article className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><h3>Deliverability & integrations</h3><p>Authentication, list hygiene and warm-up, data migrated where feasible, and the tools you use connected to ActiveCampaign.</p></article>
      <article className="impl" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><h3>Testing & handover</h3><p>Automations tested against real scenarios, corrected, then training and documentation for the team who will run it.</p></article>
    </div>
    <div className="mid-cta">
      <Link className="btn" href="/contact">Talk to an ActiveCampaign specialist</Link>
      <span className="note">Scope, exclusions and a fixed project price are agreed before any build starts.</span>
    </div>
  </div>
</section>

{/*  NEW VS EXISTING  */}
<section className="pale" id="paths" aria-labelledby="paths-title">
  <div className="wrap">
    <div className="head">
      <p className="label">Two starting points</p>
      <h2 id="paths-title">A new ActiveCampaign build, or fixing an existing account.</h2>
    </div>
    <div className="paths">
      <article className="path-card" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
        <h3>New ActiveCampaign implementation</h3>
        <p>We map your customer journey, structure the account, then build the segments, automations and pipeline around it.</p>
        <ul>
          <li>Customer journey mapped from first touch to customer</li>
          <li>Contacts, tags, custom fields and segments built</li>
          <li>Email, forms, automations and pipeline created and tested</li>
          <li>Deliverability, migration, training and handover</li>
        </ul>
      </article>
      <article className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
        <h3>Existing account audit & optimisation</h3>
        <p>We review what is already there, find where the setup and the real process have drifted apart, and rebuild the parts holding you back.</p>
        <ul>
          <li>Audit of tags, segments, automations and data quality</li>
          <li>Tagging cleaned up and made consistent</li>
          <li>Tangled or conflicting automations rebuilt</li>
          <li>Deliverability and reporting corrected</li>
        </ul>
      </article>
    </div>
  </div>
</section>

{/*  WHY HIRE A SPECIALIST  */}
<section id="why" aria-labelledby="why-title">
  <div className="wrap why-grid">
    <div>
      <p className="label">Doing it yourself, or not</p>
      <h2 id="why-title">Why hire an ActiveCampaign specialist?</h2>
      <p className="sub">ActiveCampaign is powerful, and that is exactly why it is easy to get into a mess. Tags multiply, automations overlap, and the account ends up complex without being effective. The cost of learning it live is usually a rebuild later.</p>
    </div>
    <ul className="why-list">
      <li><b>01</b><span><strong>Journey design first.</strong> The mapping decides whether the automation helps; it is the part most self-builds skip.</span></li>
      <li><b>02</b><span><strong>Fewer automation mistakes.</strong> Tags, segments, triggers and timings interact in specific ways; knowing them avoids journeys that misfire or contradict each other.</span></li>
      <li><b>03</b><span><strong>Clean data and deliverability.</strong> Consistent tagging, list hygiene and authentication, so segments are trustworthy and email reaches the inbox.</span></li>
      <li><b>04</b><span><strong>Marketing and sales connected.</strong> The nurture and the pipeline work from the same data, so leads are handed over, not dropped.</span></li>
      <li><b>05</b><span><strong>Reporting that reflects the business.</strong> The numbers track what you actually care about, not just opens and clicks.</span></li>
      <li><b>06</b><span><strong>Handover and adoption.</strong> Your team is trained on what was built and how to change it, with the structure documented.</span></li>
    </ul>
  </div>
</section>

{/*  SERVICE PARTNER  */}
<section className="rule" id="partner" aria-labelledby="partner-title">
  <div className="wrap">
    <div className="partner">
      <div>
        <p className="label">Hire ActiveCampaign experts</p>
        <h2 id="partner-title">An ActiveCampaign implementation partner, not a one-off setup.</h2>
        <p className="sub">If you already know ActiveCampaign is the right platform, Sage Kite can handle the implementation: journey mapping, account and data structure, automations, the sales CRM, deliverability and handover &mdash; and stay on to refine it as your marketing grows.</p>
      </div>
      <div className="cta-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' } as React.CSSProperties}>
        <Link className="btn" href="/contact">Discuss your ActiveCampaign setup</Link>
        <Link className="link" href="/services/crm-implementation">See all CRM implementation services</Link>
      </div>
    </div>
    <p className="trust-note">Sage Kite is an independent implementation partner. ActiveCampaign is a trademark of its owner; Sage Kite is not an ActiveCampaign Certified Partner or Agency Partner and is not affiliated with or certified by ActiveCampaign.</p>
  </div>
</section>

{/*  PROCESS  */}
<section className="pale" id="process" aria-labelledby="process-title">
  <div className="wrap">
    <div className="head">
      <p className="label">How it works</p>
      <h2 id="process-title">How an ActiveCampaign implementation runs.</h2>
    </div>
    <ol className="steps">
      <li className="step" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">01</span><h3>Discovery</h3><p>Your marketing and sales process, list, current tools and constraints, and whether ActiveCampaign is the right fit.</p></li>
      <li className="step" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">02</span><h3>Journey mapping</h3><p>The path from first touch to customer, written down and agreed before anything is built.</p></li>
      <li className="step" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">03</span><h3>Account & data</h3><p>Contacts, tags, custom fields, segments, templates, forms and pipeline structure.</p></li>
      <li className="step" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">04</span><h3>Automate</h3><p>Automations and customer journeys built around the agreed map, with branching and conditions.</p></li>
      <li className="step" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">05</span><h3>Deliver & connect</h3><p>Deliverability foundations, migration where feasible, and integrations to the rest of your stack.</p></li>
      <li className="step" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">06</span><h3>Test & handover</h3><p>Journeys tested against real scenarios, then team training and documentation.</p></li>
      <li className="step" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><div className="bar"></div><span className="num" aria-hidden="true">07</span><h3>Ongoing support</h3><p>Maintenance and further automation as your marketing and sales evolve.</p></li>
    </ol>
  </div>
</section>

{/*  WHAT YOU RECEIVE  */}
<section id="deliverables" aria-labelledby="deliver-title">
  <div className="wrap">
    <div className="head">
      <p className="label">What you receive</p>
      <h2 id="deliver-title">At handover.</h2>
    </div>
    <ul className="deliver">
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>A configured ActiveCampaign account, matched to your journey</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>A clean contact, tag and custom-field structure</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Segments built for how you actually market and sell</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Email templates, forms and campaigns</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Automations and customer journeys, tested end to end</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Sales pipeline connected to the marketing, where in scope</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Deliverability foundations and any migrated data</li>
      <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Training, documentation and optional ongoing support</li>
    </ul>
  </div>
</section>

{/*  BROADER SYSTEM  */}
<section className="pale" id="system" aria-labelledby="system-title">
  <div className="wrap">
    <div className="head">
      <p className="label">Where ActiveCampaign sits</p>
      <h2 id="system-title">The platform is one part of the growth system.</h2>
    </div>
    <ul className="stack">
      <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}><Link href="/services/consultancy">Consultancy</Link></li>
      <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>ActiveCampaign and CRM</li>
      <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}><Link href="/services/marketing">Marketing</Link></li>
      <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
      <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}><Link href="/services/recruitment-staffing">People</Link></li>
      <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>Execution</li>
      <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
    </ul>
    <p className="stack-note">Sage Kite is a business growth consultancy. ActiveCampaign is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing that creates demand and the people who keep it running. On its own, ActiveCampaign runs your marketing and follow-up; connected to the rest, it becomes part of how the business grows.</p>
    <p className="related">
      <Link className="link" href="/services/crm-implementation">CRM implementation services</Link>
      <Link className="link" href="/services/marketing">Marketing and email marketing</Link>
      <Link className="link" href="/services/consultancy">Business growth consulting</Link>
      <Link className="link" href="/platforms/hubspot/">HubSpot implementation</Link>
      <Link className="link" href="/platforms">All platforms</Link>
    </p>
  </div>
</section>

{/*  FAQ  */}
<section className="brief rule" id="faq" aria-labelledby="faq-title">
  <div className="wrap">
    <h2 id="faq-title" style={{ fontSize: 'clamp(1.6rem,2.6vw,2.1rem)' } as React.CSSProperties}>Frequently asked questions</h2>
    <div className="faq-group">
      <p className="label">ActiveCampaign implementation</p>
      <div className="brief-grid faq-grid">
        <div><h3>What is ActiveCampaign implementation?</h3><p>ActiveCampaign implementation is the work of designing and configuring ActiveCampaign around how your business actually markets and sells: contact data structure, tags and segmentation, email marketing, automations and customer journeys, the sales CRM and pipelines, deliverability, reporting and any migration or integrations. Sage Kite maps the journey first, then builds the platform to fit it rather than shaping your process around default settings.</p></div><div><h3>What does an ActiveCampaign consultant do?</h3><p>An ActiveCampaign consultant decides how the platform should be structured for your business, then configures it and builds the automations that run it: a clean contact and tagging model, segments that mean something, nurture and sales automations, pipelines, reporting and training so the team can own it. The aim is a system that markets and follows up on its own where it should, not just an account full of unused features.</p></div><div><h3>Can Sage Kite set up a new ActiveCampaign account from scratch?</h3><p>Yes. A new implementation starts by mapping how a contact moves from first touch to customer and beyond, then structuring contacts, tags and custom fields, building segments, email templates, forms, automations and pipelines to match, setting up deliverability, and testing it before you rely on it.</p></div><div><h3>Can you fix or optimise an existing ActiveCampaign account?</h3><p>Yes. Many engagements are existing accounts that grew without a plan: inconsistent tags, tangled automations, no real segmentation and deliverability that has slipped. We audit what is there, clean the data and tagging, rebuild the automations and segments that matter, and document it so it stays maintainable.</p></div><div><h3>Do you migrate from another email tool or CRM?</h3><p>Usually. ActiveCampaign will migrate your contacts and email content for free, and that covers moving the data across. The work worth doing is what happens next: rebuilding your automations, segmentation and CRM around your process rather than copying the limitations of the old tool. We confirm what can move, and how, during discovery.</p></div>
      </div>
    </div>
    <div className="faq-group">
      <p className="label">Scope and configuration</p>
      <div className="brief-grid faq-grid">
        <div><h3>Can you build ActiveCampaign automations and customer journeys?</h3><p>Yes. ActiveCampaign's visual automation builder handles branching, conditions and goals, so a journey can adapt to what each contact does. We design the journey first, then build the automations for onboarding, nurture, sales follow-up, re-engagement and internal alerts, and test each path before it goes live.</p></div><div><h3>Can you set up the CRM and sales pipelines?</h3><p>Yes. ActiveCampaign includes a sales CRM with deals, pipelines and sales automation on the relevant plans. We structure pipelines and deal stages around how you actually sell, connect them to the marketing automation so hand-offs happen automatically, and confirm what your plan supports in discovery.</p></div><div><h3>Can you set up email marketing, segmentation and lead nurturing?</h3><p>Yes. That is ActiveCampaign's core: campaigns and broadcasts, reusable templates, meaningful segments built from tags, custom fields and behaviour, and nurture sequences that send based on what a contact does rather than to everyone at once. Lead scoring is set up where it earns its place.</p></div><div><h3>Can you help with deliverability?</h3><p>Yes, the foundations: email authentication such as SPF, DKIM and DMARC, list hygiene, and sender warm-up where a domain or list is new. Deliverability is an ongoing discipline rather than a one-off fix, but getting the foundations right is part of a proper setup.</p></div><div><h3>Can you configure integrations?</h3><p>Yes, where they are supported. ActiveCampaign connects to over a thousand tools, including Shopify, WooCommerce, Salesforce and many others, natively or through connectors, and to others through custom integrations where feasible. We confirm what your stack allows in discovery so ActiveCampaign stays connected to the rest of your systems.</p></div>
      </div>
    </div>
    <div className="faq-group">
      <p className="label">Working with Sage Kite</p>
      <div className="brief-grid faq-grid">
        <div><h3>Which ActiveCampaign plan do I need?</h3><p>It depends on how much automation, and whether you need the sales CRM. ActiveCampaign runs from a Starter plan up through Plus, Professional and Enterprise, with sales CRM capability on the higher plans or as an add-on, and pricing that scales with your contact count. We advise on the smallest plan that does the job; we are independent and do not resell ActiveCampaign, so the recommendation is based on fit.</p></div><div><h3>Is ActiveCampaign right for my business?</h3><p>ActiveCampaign fits businesses that have outgrown a basic email tool and want serious automation and a connected CRM without the cost and breadth of a full platform. If you only need simple newsletters, it is more than you need; if you want a broader all-in-one customer platform, HubSpot may fit better, and we implement that too. Discovery is where we tell you honestly which way we would go.</p></div><div><h3>Is Sage Kite an ActiveCampaign partner?</h3><p>Sage Kite is an independent implementation partner. ActiveCampaign is a trademark of its owner; Sage Kite is not an ActiveCampaign Certified Partner or Agency Partner and is not affiliated with or certified by ActiveCampaign. We implement the platform on your behalf and are paid by you, not by ActiveCampaign.</p></div><div><h3>What happens after implementation?</h3><p>You own the account and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your marketing and sales grow, and the wider consultancy, marketing and staffing that turn a well-built platform into growth.</p></div><div><h3>Is Sage Kite only an ActiveCampaign agency?</h3><p>No. Sage Kite is a business growth consultancy. ActiveCampaign is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform runs your marketing and follow-up; the broader work decides what to change and creates the demand that flows through it.</p></div>
      </div>
    </div>
  </div>
</section>

{/*  FINAL CTA  */}
<section className="final pale" id="contact" aria-labelledby="final-title">
  <div className="wrap final-inner">
    <p className="final-words" aria-hidden="true"><span><span className="dot" style={{ '--c': 'var(--sage)' } as React.CSSProperties}></span>Map</span><span><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span>Build</span><span><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span>Automate</span><span><span className="dot" style={{ '--c': 'var(--butter)' } as React.CSSProperties}></span>Nurture</span></p>
    <h2 id="final-title">Get ActiveCampaign built around your journey.</h2>
    <p className="sub">Tell us how you attract and follow up with customers today, and what is not working in ActiveCampaign. We will tell you what we would map first, what the build would involve, and whether ActiveCampaign is the right fit.</p>
    <div className="cta-row">
      <Link className="btn" href="/contact">Book a discovery call</Link>
      <Link className="link" href="/platforms">See other platforms we implement</Link>
    </div>
  </div>
</section>

</main>

      <Footer />
    </>
  );
}
