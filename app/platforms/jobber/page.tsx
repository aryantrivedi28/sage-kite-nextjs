import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jobber CRM Services & Setup | Sage Kite",
  description: "Jobber setup from Sage Kite: we map how your home-service business works, then set up requests, quotes, scheduling, jobs, invoicing and recurring work.",
  alternates: {
    canonical: "https://www.sagekite.com/platforms/jobber",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/platforms/jobber",
    title: "Jobber CRM Services & Setup | Sage Kite",
    description: "Jobber setup from Sage Kite: we map how your home-service business works, then set up requests, quotes, scheduling, jobs, invoicing and recurring work.",
  },
  twitter: {
    card: "summary",
    title: "Jobber CRM Services & Setup | Sage Kite",
    description: "Jobber setup from Sage Kite: we map how your home-service business works, then set up requests, quotes, scheduling, jobs, invoicing and recurring work.",
  },
};

export default function JobberPage() {
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
      "@id": "https://www.sagekite.com/platforms/jobber/#webpage",
      "url": "https://www.sagekite.com/platforms/jobber",
      "name": "Jobber CRM services and setup | Sage Kite",
      "description": "Sage Kite implements Jobber around how home-service businesses actually work: requests, quoting, scheduling and dispatch, jobs, client communication, invoicing, payments and recurring work.",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/jobber/#service"
      },
      "breadcrumb": {
        "@id": "https://www.sagekite.com/platforms/jobber/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sagekite.com/platforms/jobber/#breadcrumb",
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
          "name": "Jobber"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.sagekite.com/platforms/jobber/#service",
      "name": "Jobber CRM services and setup",
      "serviceType": "Jobber setup, configuration and implementation",
      "description": "Business process mapping, Jobber account and team setup, client management and CRM structure, requests and online booking, quoting, scheduling and dispatch, jobs and job forms, client communication, invoicing and payments, recurring work, automations, optimisation, testing, team training and handover for home-service businesses.",
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
        "name": "What we implement in Jobber",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Account and team setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Client management and CRM structure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Requests and online booking"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Quoting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scheduling and dispatch"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Jobs and field workflows"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Client communication"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Invoicing and payments"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automations, optimisation and handover"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sagekite.com/platforms/jobber/#faq",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/jobber/#service"
      },
      "inLanguage": "en",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Jobber CRM services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jobber is field-service management software for home-service businesses, with client management built in. Jobber CRM services cover configuring that platform around how your business runs: client records, tags and job history, requests and online booking, quoting, scheduling and dispatch, jobs and job forms, client communication, invoicing and payments, recurring work and automations. Sage Kite maps how you actually operate first, then sets Jobber up to match, tests it and hands it over."
          }
        },
        {
          "@type": "Question",
          "name": "What does a Jobber specialist do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Jobber specialist designs how the platform should reflect your operation, then configures it and sets up the automations that reduce office admin. That means quote templates that match how you price, a schedule and dispatch flow that fits your crews, recurring work set up properly, automated reminders and follow-ups, and invoicing and payments that run themselves — plus training so the office and field teams use it consistently."
          }
        },
        {
          "@type": "Question",
          "name": "Isn't Jobber easy enough to set up myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a solo operator, often yes — Jobber is built to work quickly, and it includes onboarding and data import. The value of a specialist shows up as you grow: when quoting needs to be consistent across a team, when several crews need dispatching, when recurring work and automations have to be reliable, or when an account set up in a hurry has become messy. We are honest about this in discovery rather than selling a setup you do not need."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sage Kite set up a new Jobber account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A new setup starts by mapping your operation from request to payment and repeat work, then configuring client records, request forms, quote and invoice templates, scheduling and dispatch, job forms, client communication and automations to match — and testing the flow before your team relies on it."
          }
        },
        {
          "@type": "Question",
          "name": "Can you audit and improve an existing Jobber account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many businesses start on Jobber themselves and outgrow the original setup: inconsistent quoting, scheduling that does not fit the crews, recurring work half-configured, automations that were never finished. We audit what is there, clean it up, rebuild the parts holding you back, and document it so the team can keep it running."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up quoting, scheduling and dispatch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. That covers quote templates with optional line items, approval through the client hub and automated follow-up on unapproved quotes; and a scheduling and dispatch flow — drag-and-drop calendar, crew assignment and routing — that matches how your teams actually work in the field."
          }
        },
        {
          "@type": "Question",
          "name": "Can you configure jobs, job forms and field workflows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Jobs can carry the details, checklists and job forms your crews need on site, captured through the mobile app along with photos, notes, times and signatures. We set these up so the field team records the right information and the office sees it without chasing."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up recurring work and automations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Recurring jobs and visits are one of Jobber's strengths for services like lawn care, cleaning and pest control, and we set them up so the schedule and invoices generate on their own. Automations handle appointment reminders, on-my-way texts, follow-ups and review requests around them."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up invoicing and payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Invoice templates generated from completed jobs, payment collection through Jobber Payments and the client hub, automated payment reminders, and syncing to accounting through the QuickBooks or Xero integrations where you use them."
          }
        },
        {
          "@type": "Question",
          "name": "Can you connect Jobber to the tools I already use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where they are supported. Jobber connects to tools like QuickBooks and Xero and others through its app marketplace and open API. We confirm what your stack allows in discovery so the systems stay in sync rather than needing double entry."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The home and field-service trades Jobber is built for: lawn care and landscaping, cleaning, HVAC, plumbing, electrical, roofing, painting and exterior work, pest control, and other businesses whose work happens at a customer's property. Each has a slightly different flow, and the setup is tailored to it rather than generic."
          }
        },
        {
          "@type": "Question",
          "name": "Is Jobber right for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jobber fits businesses whose work takes a team to a customer's property — quoting, scheduling, dispatching crews, and getting paid. If your work is office-based or online — professional services, or client work done at a desk — a different platform such as HubSpot or Dubsado usually fits better, and we implement those too. Discovery is where we tell you honestly which way we would go."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sage Kite a Jobber partner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sage Kite is an independent implementation partner. Jobber is a trademark of its owner; Sage Kite is not a Jobber reseller or listed partner and is not affiliated with or certified by Jobber. We implement the platform on your behalf and are paid by you, not by Jobber."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You own the account and can run it. Handover includes training for the office and field teams and documentation of how it is set up. Where it helps, Sage Kite offers maintenance with a defined support scope, further work as you add crews or services, and the wider marketing, automation and staffing that turn a well-run operation into growth."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sage Kite only a Jobber agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sage Kite is a business growth consultancy. Jobber is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Jobber runs the day-to-day operation; the broader work decides what to change and creates the demand that keeps the schedule full."
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <Header />
      
            <style dangerouslySetInnerHTML={{ __html: `

:root{
  --warm-white:#F7F5EE; --sage:#596B57; --dark-sage:#344033; --ink:#243746;
  --coral:#D96F4F; --sky:#4F82A3; --butter:#EFC75E; --pale-sage:#E9EEE7;
  --coral-soft:#F5D6CA; --sky-soft:#C9E0EB; --butter-soft:#F7E6A8; --light-sage:#D5DDD2;
  --sans:"Manrope", Arial, Helvetica, sans-serif;
  --wrap:1200px; --gutter:clamp(20px,5vw,56px);
  --r:6px; --ease:cubic-bezier(.2,.7,.2,1); --t:200ms;
}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;background:var(--warm-white);color:var(--dark-sage);font-family:var(--sans);font-size:1.0625rem;line-height:1.65}
img{display:block;max-width:100%}
a{color:inherit}
p{margin:0}
figure{margin:0}
ul,ol{list-style:none;margin:0;padding:0}
h1,h2,h3{font-family:var(--sans);font-weight:800;color:var(--ink);margin:0;letter-spacing:-.03em;text-wrap:balance}
h2{font-size:clamp(2.1rem,4vw,3.3rem);line-height:1.05}
h3{font-size:1.35rem;line-height:1.2}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 var(--gutter)}
section{padding:clamp(80px,11vw,140px) 0}
.label{font-weight:600;font-size:.875rem;color:var(--sage);margin-bottom:14px}
.sub{font-size:clamp(1.1rem,1.4vw,1.25rem);line-height:1.55;max-width:48ch;margin-top:20px}
.head{max-width:760px}
.head.center{margin:0 auto;text-align:center}
.head.center .sub{margin-left:auto;margin-right:auto}
.pale{background:var(--pale-sage)}
.rule{border-top:1px solid var(--light-sage)}
.note{font-size:.8125rem;color:var(--sage)}
.ph{color:var(--sage);border-bottom:1px dashed var(--sage)}
.skip{position:absolute;left:12px;top:-60px;background:var(--ink);color:var(--warm-white);padding:10px 16px;border-radius:var(--r);z-index:100;text-decoration:none;font-weight:600}
.skip:focus{top:12px}
:focus-visible{outline:3px solid var(--ink);outline-offset:3px;border-radius:2px}
.dark :focus-visible{outline-color:var(--butter)}

.link{font-weight:600;color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:5px;transition:text-decoration-color var(--t) var(--ease)}
.link:hover{text-decoration-color:var(--coral)}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:12px 26px;border-radius:var(--r);background:var(--coral);color:var(--ink);font-weight:700;font-size:1.1875rem;line-height:1.2;text-decoration:none;transition:background-color var(--t) var(--ease),color var(--t) var(--ease),transform var(--t) var(--ease)}
.btn:hover{background:color-mix(in srgb,var(--coral) 80%,var(--ink));color:#fff;transform:translateY(-2px)}
.btn-s{min-height:44px;padding:8px 18px}

/* Chips and dots */
.chip{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border:1px solid var(--light-sage);border-radius:4px;background:var(--warm-white);font-size:.875rem;font-weight:500;color:var(--ink);line-height:1.3;white-space:nowrap}
.dot{width:8px;height:8px;border-radius:50%;background:var(--c,var(--sage));flex:0 0 auto}


/* 01 Hero */
.hero{padding:clamp(56px,7vw,96px) 0 clamp(80px,9vw,120px)}
.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(40px,5vw,72px);align-items:center}
.ribbon{display:flex;gap:6px;margin-bottom:22px}
.ribbon span{width:28px;height:6px;border-radius:3px}
.hero h1{font-size:clamp(2.8rem,5.8vw,4.9rem);line-height:1;letter-spacing:-.025em;max-width:13ch}
.u{text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:.11em;text-underline-offset:.12em;text-decoration-skip-ink:none}
.hero .sub{margin:26px 0 36px;max-width:44ch}
.cta-row{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px}

.hero-visual{position:relative;min-height:690px;background:var(--pale-sage);border-radius:var(--r);clip-path:polygon(0 0,calc(100% - 56px) 0,100% 56px,100% 100%,0 100%)}
.ui{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:18px 20px;box-shadow:8px 8px 0 var(--light-sage)}
.ui-title{display:flex;justify-content:space-between;align-items:baseline;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:12px}
.ui-title b{font-weight:600;color:var(--ink);font-size:.95rem}
.hv-pipeline{position:absolute;top:40px;left:36px;width:min(320px,62%)}
.bar-row{display:grid;grid-template-columns:92px 1fr 34px;gap:10px;align-items:center;font-size:.8125rem;padding:5px 0}
.bar-row .track{height:8px;background:var(--pale-sage);border-radius:4px;overflow:hidden}
.bar-row .fill{display:block;height:100%;width:var(--w);background:var(--sage);border-radius:4px}
.bar-row.won .fill{background:var(--coral)}
.bar-row b{text-align:right;color:var(--ink);font-weight:600}
.hv-flow{position:absolute;top:226px;right:28px;width:min(290px,58%)}
.flow{display:flex;flex-direction:column;gap:0}
.flow li{display:flex;align-items:center;gap:10px;font-size:.875rem;color:var(--ink);padding:6px 0;position:relative}
.flow li:not(:last-child)::after{content:"";position:absolute;left:3.5px;top:22px;height:14px;width:1px;background:var(--sky)}
.flow .dot{--c:var(--sky)}
.flow li:last-child .dot{--c:var(--coral)}
.hv-revenue{position:absolute;bottom:48px;left:36px;width:min(230px,44%)}
.hv-revenue svg{width:100%;height:auto;display:block}
.hv-caption{position:absolute;right:24px;bottom:16px;font-size:.75rem;color:var(--sage)}

/* 02 Problem */
.fragments{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:clamp(48px,6vw,72px);position:relative}
.frag{padding:28px 26px 30px;border:1px solid var(--light-sage);background:var(--warm-white);position:relative}
.frag + .frag{border-left:0}
.frag:not(:last-child)::after{content:"";position:absolute;right:-9px;top:50%;width:16px;height:16px;transform:translateY(-50%) rotate(45deg);background:var(--warm-white);border:1px dashed var(--coral);z-index:1}
.frag-k{font-size:.8125rem;font-weight:600;color:var(--sage)}
.frag h3{font-size:1.9rem;margin:6px 0 10px}
.frag p{font-size:.95rem;line-height:1.5}
.frag-note{margin-top:22px;text-align:center}

/* 03 Growth operations */
.ops-grid{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(40px,5vw,72px);align-items:end;margin-bottom:clamp(40px,5vw,64px)}
.definition{border-left:3px solid var(--butter);padding-left:20px;font-size:1rem;max-width:48ch}
.definition strong{color:var(--ink);font-weight:600}
.ops{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:clamp(24px,3vw,40px)}
.stages{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;position:relative}
.stages::before{content:"";position:absolute;left:8%;right:8%;top:19px;height:1px;background:var(--sage)}
.stage{position:relative;text-align:center}
.stage .n{display:flex;align-items:center;justify-content:center;width:38px;height:38px;margin:0 auto 10px;border-radius:50%;background:var(--warm-white);border:1px solid var(--sage);font-size:.8125rem;font-weight:600;color:var(--ink)}
.stage.rev .n{background:var(--coral);border-color:var(--coral)}
.stage strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.2rem;color:var(--ink);line-height:1.2}
.stage span{font-size:.8125rem;line-height:1.35;display:block;margin-top:3px}
.support{margin-top:32px;padding-top:24px;border-top:1px dashed var(--light-sage);display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;row-gap:10px;align-items:stretch}
.support-label{grid-column:1/-1;font-size:.8125rem;font-weight:600;color:var(--sage)}
.sys-bar{display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:4px;font-size:.875rem;font-weight:600;color:var(--ink);background:var(--bg)}
.sys-bar small{font-weight:500;color:var(--dark-sage);margin-left:auto;font-size:.8125rem}

/* 04 Systems that scale */
.dark{background:var(--dark-sage);color:var(--warm-white)}
.dark h2,.dark h3{color:var(--warm-white)}
.dark .label{color:var(--butter)}
.dark .link{color:var(--warm-white)}
.arch{max-width:980px;margin:clamp(48px,6vw,80px) auto 0}
.node{background:var(--warm-white);color:var(--ink);border-radius:var(--r);padding:16px 22px;text-align:center}
.node small{display:block;font-size:.8125rem;color:var(--sage);font-weight:600}
.node strong{font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.6rem;line-height:1.15}
.node-rev{max-width:300px;margin:0 auto;border-top:6px solid var(--coral)}
.node-ops{max-width:620px;margin:0 auto;background:var(--pale-sage)}
.vline{width:1px;height:34px;margin:0 auto;background:var(--light-sage)}
.systems{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;position:relative;padding:34px 0}
.systems::before,.systems::after{content:"";position:absolute;left:12.5%;right:12.5%;height:1px;background:var(--light-sage)}
.systems::before{top:0}.systems::after{bottom:0}
.sys{position:relative;background:var(--warm-white);color:var(--dark-sage);border-radius:var(--r);padding:20px;border-top:5px solid var(--c)}
.sys::before,.sys::after{content:"";position:absolute;left:50%;width:1px;height:34px;background:var(--light-sage)}
.sys::before{top:-39px}.sys::after{bottom:-34px}
.sys h3{color:var(--ink);font-size:1.45rem;margin-bottom:6px}
.sys p{font-size:.9rem;line-height:1.45}
.node-exec{background:transparent;border:1px solid var(--light-sage);color:var(--warm-white)}
.node-exec strong{color:var(--warm-white)}
.node-exec small{color:var(--butter)}
.traits{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:clamp(48px,6vw,72px);border-top:1px solid rgba(213,221,210,.35);padding-top:28px}
.traits strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.5rem;color:var(--warm-white)}
.traits p{font-size:.95rem;color:var(--pale-sage)}

/* 05 Services */
.svc-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;margin-top:clamp(40px,5vw,64px)}
.svc{grid-column:span 2;display:flex;flex-direction:column;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);transition:transform var(--t) var(--ease),border-color var(--t) var(--ease);text-decoration:none}
.svc:nth-child(4),.svc:nth-child(5){grid-column:span 3}
.svc:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
.svc-k{font-size:.8125rem;font-weight:600;color:var(--sage)}
.svc h3{font-size:1.7rem;margin:4px 0 16px}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px}
.tag{font-size:.8125rem;font-weight:500;padding:4px 10px;background:var(--pale-sage);border-radius:4px;color:var(--ink)}
.svc .more{margin-top:auto;font-weight:600;font-size:.95rem;color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:5px}

/* 06 How it works */
.steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:64px 0;margin-top:clamp(40px,5vw,64px);counter-reset:s}
.step{position:relative;padding:0 18px 0 0}
.step .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
.step .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
.step .num{font-family:var(--sans);font-weight:700;letter-spacing:-.02em;font-size:2.6rem;line-height:1;color:var(--sage)}
.step h3{font-size:1.5rem;margin:8px 0 6px}
.step p{font-size:.9rem;line-height:1.45}

/* 07 Specialist capability */
.cap{padding:clamp(56px,7vw,88px) 0}
.cap-band{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(28px,5vw,72px);align-items:center}
.cap-band h2{font-size:clamp(1.7rem,2.8vw,2.3rem)}
.cap-band .sub{font-size:1rem;margin-top:12px}
.cap-tags{display:flex;flex-wrap:wrap;gap:10px}
.cap-tags .chip .dot{--c:var(--ink)}
.cap-link{margin-top:18px;display:inline-block}

/* 08 Marketing engine */
.engine{display:grid;grid-template-columns:minmax(0,4fr) 60px minmax(0,3fr) 60px minmax(0,3fr);align-items:center;margin-top:clamp(40px,5vw,64px)}
.channels{display:grid;gap:8px}
.channels .chip{justify-content:flex-start;padding:12px 16px;font-size:.95rem;white-space:normal}
.connector{height:1px;background:var(--sage);position:relative}
.connector::after{content:"";position:absolute;right:-1px;top:-4px;border-left:8px solid var(--sage);border-top:4.5px solid transparent;border-bottom:4.5px solid transparent}
.engine .node{border:1px solid var(--light-sage)}
.engine .node-rev{max-width:none;margin:0}
.engine-note{margin-top:28px}

/* 09 Platforms + 10 Industries */
.two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(40px,6vw,88px)}
.plat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage);margin-top:28px}
.plat-grid li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:18px 14px;text-align:center;font-family:var(--sans);font-weight:600;font-size:1.15rem;color:var(--ink);line-height:1.25;display:flex;align-items:center;justify-content:center;min-height:72px}
.ind-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:28px}
.ind-grid a{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:72px;padding:14px 18px;border:1px solid var(--light-sage);border-radius:var(--r);background:var(--warm-white);text-decoration:none;font-family:var(--sans);font-weight:600;font-size:1.2rem;color:var(--ink);line-height:1.2;transition:border-color var(--t) var(--ease),transform var(--t) var(--ease)}
.ind-grid a:hover{border-color:var(--sage);transform:translateY(-2px)}
.ind-grid a svg{flex:0 0 auto}
.two .foot{margin-top:18px;font-size:.9rem}

/* 11 Work */
.work{padding:clamp(64px,8vw,104px) 0}
.work-grid{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,72px);align-items:start}
.work-list li{display:grid;grid-template-columns:130px minmax(0,1fr) auto;gap:20px;align-items:center;padding:20px 0;border-top:1px solid var(--light-sage)}
.work-list li:last-child{border-bottom:1px solid var(--light-sage)}
.work-list .tag{justify-self:start;background:var(--bg)}
.work-list strong{font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.2rem;color:var(--ink)}

/* Founder's Thoughts */
.founder{padding:clamp(64px,8vw,104px) 0}
.founder-grid{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:center}
.founder-photo{aspect-ratio:4/5;max-width:240px;width:100%;background:var(--pale-sage);border:1px dashed var(--sage);border-radius:var(--r);box-shadow:12px 12px 0 var(--butter-soft);display:flex;align-items:flex-end;padding:16px}
.founder-photo span{font-size:.8125rem;font-weight:600;color:var(--sage)}
.founder h2{font-size:clamp(1.8rem,3vw,2.5rem)}
.founder-intro{font-family:var(--sans);font-weight:500;letter-spacing:-.01em;font-size:clamp(1.25rem,1.8vw,1.5rem);line-height:1.4;color:var(--ink);max-width:40ch;margin-top:14px}
.founder .sub{margin-top:12px}
.founder-latest{margin:20px 0 16px;padding-top:16px;border-top:1px solid var(--light-sage);max-width:48ch}

/* 12 Library */
.library{background:var(--ink);color:var(--warm-white)}
.library h2{color:var(--warm-white)}
.library .label{color:var(--butter)}
.lib-top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:24px}
.streams{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(40px,5vw,56px)}
.stream{display:block;background:var(--warm-white);color:var(--ink);border-radius:var(--r);padding:24px 24px 26px;border-top:6px solid var(--c);text-decoration:none;transition:transform var(--t) var(--ease)}
.stream:hover{transform:translateY(-3px)}
.stream h3{font-size:1.55rem}
.stream p{font-size:.9rem;color:var(--dark-sage);margin-top:6px;line-height:1.45}
.library .link{color:var(--warm-white)}

/* 13 Agencies */
.agency{padding:clamp(64px,8vw,104px) 0}
.agency-card{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,4fr);gap:clamp(28px,5vw,64px);align-items:center;border:1px solid var(--light-sage);border-left:6px solid var(--sage);border-radius:var(--r);padding:clamp(28px,4vw,52px)}
.agency-card h2{font-size:clamp(2rem,3.4vw,2.8rem)}
.agency-card .sub{font-size:1rem;margin-top:14px}
.agency-card .cta-col{display:flex;flex-direction:column;align-items:flex-start;gap:14px}

/* In brief */
.brief{padding:clamp(56px,7vw,88px) 0}
.brief-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;margin-top:28px}
.brief-grid div{border-top:1px solid var(--light-sage);padding-top:16px}
.brief-grid h3{font-family:var(--sans);font-weight:600;font-size:.95rem;color:var(--ink);letter-spacing:0;margin-bottom:6px}
.brief-grid p{font-size:.9rem;line-height:1.5}
.faq-group{display:grid;grid-template-columns:220px minmax(0,1fr);gap:24px 40px;padding:28px 0 8px;border-top:1px solid var(--light-sage);margin-top:28px}
.faq-group + .faq-group{margin-top:0}
.faq-group .label{margin:16px 0 0}
.faq-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 36px;margin-top:0}
.faq-grid div{padding-bottom:22px}

/* 14 Final */
.final-inner{text-align:center;max-width:820px;margin:0 auto}
.final h2{font-size:clamp(2.4rem,5vw,4rem)}
.final-words{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 18px;margin-bottom:22px;font-weight:600;font-size:.9rem;color:var(--sage)}
.final-words span{display:inline-flex;align-items:center;gap:8px}
.final .sub{margin:20px auto 34px}
.final .cta-row{justify-content:center}

.legal{margin-top:44px;padding-top:20px;border-top:1px solid var(--light-sage);display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;font-size:.85rem}

/* Motion: one quiet hero moment */
@media (prefers-reduced-motion:no-preference){
  .hero-copy{animation:lift 600ms var(--ease) both}
  .hv-pipeline,.hv-flow,.hv-revenue{animation:lift 600ms var(--ease) both}
  .hv-pipeline{animation-delay:150ms}.hv-flow{animation-delay:280ms}.hv-revenue{animation-delay:410ms}
  .fill{animation:grow 900ms var(--ease) 500ms both}
  @keyframes lift{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  @keyframes grow{from{width:0}}
}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

/* Responsive */
@media (max-width:1040px){
  .hero-grid,.ops-grid,.cap-band,.two,.work-grid,.agency-card{grid-template-columns:1fr}
  .hero h1{max-width:16ch}
  .fragments{grid-template-columns:repeat(2,minmax(0,1fr))}
  .frag + .frag{border-left:1px solid var(--light-sage)}
  .frag:nth-child(even){border-left:0}
  .frag:nth-child(n+3){border-top:0}
  .frag:nth-child(2)::after{display:none}
  .stages{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:28px}
  .stages::before{display:none}
  .support{grid-template-columns:1fr}
  .support .sys-bar{grid-column:auto!important}
  .svc-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .svc,.svc:nth-child(4),.svc:nth-child(5){grid-column:span 1}
  .svc:nth-child(5){grid-column:1/-1}
  .steps{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
  .engine{grid-template-columns:minmax(0,1fr);gap:0}
  .engine .connector{width:1px;height:36px;margin:0 auto}
  .engine .connector::after{right:auto;left:-4px;top:auto;bottom:-1px;border-left:4.5px solid transparent;border-right:4.5px solid transparent;border-top:8px solid var(--sage);border-bottom:0}
  .channels{grid-template-columns:repeat(3,minmax(0,1fr))}
  .brief-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .faq-group{grid-template-columns:1fr;gap:8px}
  .faq-group .label{margin:0}
  .foot-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .foot-brand{grid-column:1/-1}
}
@media (max-width:680px){
  body{font-size:1rem}
  .cta-row{flex-direction:column;align-items:stretch}
  .cta-row .link{align-self:flex-start}
  .final .cta-row .link{align-self:center}
  .hero-visual{min-height:0;padding:28px 18px 44px;display:grid;gap:18px;clip-path:polygon(0 0,calc(100% - 36px) 0,100% 36px,100% 100%,0 100%)}
  .hv-pipeline,.hv-flow,.hv-revenue{position:static;width:auto}
  .hv-caption{right:18px;bottom:14px}
  .fragments{grid-template-columns:1fr}
  .frag{border-left:1px solid var(--light-sage)!important;border-top:0}
  .frag:first-child{border-top:1px solid var(--light-sage)}
  .fragments .frag:not(:last-child)::after{display:block;right:auto;left:50%;top:auto;bottom:-9px;transform:translateX(-50%) rotate(45deg)}
  .stages{grid-template-columns:repeat(2,minmax(0,1fr))}
  .systems{grid-template-columns:1fr 1fr;padding:20px 0}
  .systems::before,.systems::after,.sys::before,.sys::after{display:none}
  .vline{height:20px}
  .traits{grid-template-columns:1fr;gap:18px}
  .svc-grid{grid-template-columns:1fr}
  .svc:nth-child(5){grid-column:auto}
  .steps{grid-template-columns:1fr 1fr}
  .channels{grid-template-columns:1fr 1fr}
  .plat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .ind-grid{grid-template-columns:1fr}
  .work-list li{grid-template-columns:1fr;gap:6px}
  .streams{grid-template-columns:1fr}
  .brief-grid{grid-template-columns:1fr;gap:18px}
  .faq-grid{display:grid;grid-template-columns:1fr;gap:0}
  .founder-grid{grid-template-columns:1fr}
  .founder-photo{max-width:220px}
  .final .btn{width:100%}
  .foot-grid{grid-template-columns:1fr 1fr}
}


/* Dubsado page additions, built from the approved homepage system */
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
.check svg{flex:0 0 auto;margin-top:3px}
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
.deliver svg{flex:0 0 auto;margin-top:4px}

.stack{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;margin-top:clamp(32px,4vw,48px);align-items:stretch}
.stack li{background:var(--warm-white);border:1px solid var(--light-sage);border-top:4px solid var(--c);border-radius:var(--r);padding:16px 14px;text-align:center;font-size:.9rem;font-weight:600;color:var(--ink);display:flex;align-items:center;justify-content:center;line-height:1.3}
.stack li a{text-decoration:none}
.stack li a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
.stack-note{margin-top:22px;max-width:70ch;font-size:.975rem}

.related{display:flex;flex-wrap:wrap;gap:10px 14px;margin-top:22px}
.mid-cta{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px;margin-top:clamp(32px,4vw,44px)}
.trust-note{margin-top:28px;font-size:.85rem;color:var(--sage);max-width:70ch}

@media (max-width:1040px){
  .fit-grid,.symptoms,.impl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .track{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:22px}
  .track::before{display:none}
  .why-grid,.partner{grid-template-columns:1fr}
  .stack{grid-template-columns:repeat(3,minmax(0,1fr))}
  .plat-hero .hero-grid{gap:40px}
}
@media (max-width:680px){
  .fit-grid,.symptoms,.impl-grid,.paths,.deliver{grid-template-columns:1fr}
  .track{grid-template-columns:repeat(2,minmax(0,1fr))}
  .stack{grid-template-columns:repeat(2,minmax(0,1fr))}
  .checklist{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
  .mid-cta .btn{width:100%}
}

      `}} />

      
      <main>
    <section className="plat-hero" aria-labelledby="hero-title">
  <div className="wrap hero-grid">
    <div className="hero-copy">
      <div className="ribbon" aria-hidden="true"><span style={{ background: 'var(--coral)' } as React.CSSProperties}></span><span style={{ background: 'var(--butter)' } as React.CSSProperties}></span><span style={{ background: 'var(--sky)' } as React.CSSProperties}></span></div>
      <p className="label">Platforms / Jobber</p>
      <h1 id="hero-title">Jobber CRM services and setup</h1>
      <p className="sub">Sage Kite is a business growth consultancy that implements Jobber — the field-service platform for home-service businesses — around how your team actually wins work, schedules crews and gets paid: requests, quotes, scheduling, jobs, invoicing and recurring work.</p>
      <div className="cta-row">
        <Link href="/contact" className="btn">Book a discovery call</Link>
        <Link href="#impl" className="link">See what's included</Link>
      </div>
    </div>

    <figure className="checklist" aria-labelledby="chk-title">
      <div className="ui">
        <p className="ui-title"><b id="chk-title">Configured Jobber account</b><span>Example scope</span></p>
        <ul className="check">
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Client records, tags and job history<span>Clients</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Online request form and booking<span>Requests</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Quote templates with approval and follow-up<span>Quoting</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Scheduling, dispatch and recurring visits<span>Scheduling</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Automated reminders and on-my-way texts<span>Comms</span></li>
          <li><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M2 8l4 4 7-9" fill="none" stroke="#596B57" strokeWidth="2"/></svg>Invoicing and payments via client hub<span>Payments</span></li>
        </ul>
      </div>
      <figcaption>Illustrative scope. Final scope is agreed in your proposal.</figcaption>
    </figure>
  </div>
</section>

    <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

    {/*  02 Who it's for  */}
    <section aria-labelledby="fit-title">
        <div className="wrap">
            <div className="head">
                <p className="label">Who it's for</p>
                <h2 id="fit-title">Jobber is built for home and field-service businesses.</h2>
                <p className="sub">If your work takes a team to a customer's property, Jobber fits. We set it up for lawn care and landscaping, cleaning, HVAC, plumbing, electrical, roofing, painting and pest control businesses — around the way each one quotes, schedules and gets paid.</p>
            </div>

            <div className="fit-grid">
                <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <strong>Lawn care &amp; landscaping</strong>
                    <p>Recurring, seasonal visits and route-based crews, with schedules and invoices that generate on their own.</p>
                </div>
                <div className="fit" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <strong>Cleaning services</strong>
                    <p>Recurring bookings, per-property details and checklists, so every clean is consistent whoever turns up.</p>
                </div>
                <div className="fit" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                    <strong>HVAC, plumbing &amp; electrical</strong>
                    <p>Requests and assessments, quotes that convert to jobs, and a mix of booked work, callouts and maintenance plans.</p>
                </div>
                <div className="fit" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                    <strong>Roofing, painting &amp; exterior</strong>
                    <p>Larger quotes and assessments, multi-day jobs, deposits and progress payments tracked to completion.</p>
                </div>
                <div className="fit" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                    <strong>Pest control &amp; recurring services</strong>
                    <p>Recurring treatment schedules, automated reminders and follow-ups that keep contracts running.</p>
                </div>
                <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <strong>Multi-crew operations</strong>
                    <p>Dispatching several teams, routing and real-time tracking as the business grows past one or two people.</p>
                </div>
            </div>

            <p className="note" style={{ marginTop: '24px' } as React.CSSProperties}>If your work is office-based or done online rather than at a customer's property — professional services or client work at a desk — Jobber is the wrong tool, and we would point you to something like <Link href="/platforms/hubspot/" className="link">HubSpot</Link> or <Link href="/platforms/dubsado/" className="link">Dubsado</Link> instead. See also our <Link href="/services/home-services" className="link">home services</Link> work.</p>
        </div>
    </section>

    {/*  03 The problem  */}
    <section className="pale" aria-labelledby="prob-title">
        <div className="wrap">
            <div className="head">
                <p className="label">The problem</p>
                <h2 id="prob-title">When the operation runs on phone notes, texts and memory.</h2>
            </div>
            
            <ul className="symptoms">
                <li>Requests come in by phone and text and get written on whatever is nearby.</li>
                <li>Every quote is built from scratch, so pricing and wording drift between jobs.</li>
                <li>The schedule lives in one person's head, and double-bookings happen.</li>
                <li>Crews turn up without the details, and the office fields "where are they?" calls.</li>
                <li>Invoices go out late, and some jobs are finished but never billed.</li>
                <li>Jobber is paid for but only lightly used — recurring work and automations were never set up.</li>
            </ul>

            <div className="after-line" style={{ marginTop: '32px' } as React.CSSProperties}>
                <p>Jobber is designed to be easy to start, so the issue is rarely the software. It is usually that the account was switched on without the operation being designed around it.</p>
            </div>
        </div>
    </section>

    {/*  04 Our approach  */}
    <section aria-labelledby="app-title">
        <div className="wrap">
            <div className="head">
                <p className="label">Our approach</p>
                <h2 id="app-title">We build the system around the operation, not the other way around.</h2>
                <p className="sub" style={{ maxWidth: '60ch' } as React.CSSProperties}>We map how your business handles a job from the first request to payment and repeat work — what happens in the office, what happens in the field, and what should happen on its own — then configure Jobber to fit, rather than reshaping the way your crews work to suit default settings.</p>
            </div>

            <div className="journey">
                <div className="ui-title"><b>A typical job in Jobber</b><span>Mapped before anything is built</span></div>
                
                {/* Top track */}
                <ul className="track" style={{ marginTop: '24px' } as React.CSSProperties}>
                    <li className="auto"><span className="d"></span><strong>Request</strong><small>Online / phone</small></li>
                    <li className="human"><span className="d"></span><strong>Assess</strong><small>On site</small></li>
                    <li className="auto"><span className="d"></span><strong>Quote</strong><small>Client hub</small></li>
                    <li className="auto"><span className="d"></span><strong>Schedule</strong><small>Dispatch</small></li>
                    <li className="human"><span className="d"></span><strong>Job</strong><small>Field crew</small></li>
                    
                    {/* Bottom track (CSS Grid auto-placement) */}
                    <li className="auto"><span className="d"></span><strong>Update</strong><small>On-my-way text</small></li>
                    <li className="auto"><span className="d"></span><strong>Invoice</strong><small>From the job</small></li>
                    <li className="auto"><span className="d"></span><strong>Payment</strong><small>Client hub</small></li>
                    <li className="auto"><span className="d"></span><strong>Recurring</strong><small>Auto-schedule</small></li>
                </ul>

                <div className="key">
                    <span><span className="d" style={{ display:'block', width:'12px', height:'12px', borderRadius:'50%', background:'var(--sky-soft)', border:'1px solid var(--sky)' } as React.CSSProperties}></span> Automated where it should be</span>
                    <span><span className="d" style={{ display:'block', width:'12px', height:'12px', borderRadius:'50%', background:'var(--butter-soft)', border:'1px solid var(--butter)' } as React.CSSProperties}></span> Done by your team</span>
                </div>
            </div>

            <p className="note" style={{ marginTop: '32px', maxWidth: '70ch', fontSize: '1.05rem', color: 'var(--ink)' } as React.CSSProperties}>We set Jobber up so the requests, reminders, invoicing and follow-up run on their own, and the assessment and the work itself stay with the people doing them.</p>

        </div>
    </section>

    <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

    {/*  05 What we implement  */}
    <section id="impl" aria-labelledby="impl-title">
        <div className="wrap">
            <div className="head">
                <p className="label">What we implement</p>
                <h2 id="impl-title">What Jobber CRM services cover.</h2>
            </div>

            <div className="impl-grid">
                <div className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <h3>Account &amp; team setup</h3>
                    <p>Business details, users, roles and permissions, and crews, so the office and field teams see the right things.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <h3>Client management &amp; CRM</h3>
                    <p>Client records, tags, leads and requests tracked separately, and job history so anyone can pick up a client's context fast.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                    <h3>Requests &amp; online booking</h3>
                    <p>Request forms for your website, social and client hub, routed so each enquiry lands ready to assess or quote.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                    <h3>Quoting</h3>
                    <p>Quote templates and line items that match how you price, client-hub approval, and automated follow-up on quotes not yet approved.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <h3>Scheduling &amp; dispatch</h3>
                    <p>A drag-and-drop calendar, crew assignment, routing and recurring visits set up around how your teams actually move.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <h3>Jobs &amp; field workflows</h3>
                    <p>Job details, forms and checklists captured on the mobile app with photos, times and signatures from the field.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                    <h3>Client communication</h3>
                    <p>Automated appointment reminders, on-my-way texts, two-way texting and follow-ups that cut the status calls.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                    <h3>Invoicing &amp; payments</h3>
                    <p>Invoices generated from completed jobs, payments through the client hub, reminders, and accounting sync where you use it.</p>
                </div>
                <div className="impl" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                    <h3>Automation &amp; handover</h3>
                    <p>Recurring work and follow-up automations, existing-account cleanup where needed, testing, then team training and documentation.</p>
                </div>
            </div>

            <div className="mid-cta">
                <Link href="/contact" className="btn">Talk to a Jobber specialist</Link>
                <p className="note">Scope, exclusions and a fixed project price are agreed before any build starts.</p>
            </div>
        </div>
    </section>

    {/*  06 Paths  */}
    <section className="pale" aria-labelledby="paths-title">
        <div className="wrap">
            <div className="head">
                <p className="label">Two starting points</p>
                <h2 id="paths-title">A new Jobber setup, or<br/>fixing an existing account.</h2>
            </div>
            <div className="paths">
                <div className="path-card" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <h3>New Jobber setup</h3>
                    <p>We map your operation, then configure the account, quoting, scheduling, jobs and automations around it.</p>
                    <ul>
                        <li>Operation mapped from request to payment and repeat work</li>
                        <li>Clients, requests, quotes, jobs and templates built</li>
                        <li>Scheduling, recurring work and automations set up and tested</li>
                        <li>Office and field-team training and handover</li>
                    </ul>
                </div>
                <div className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <h3>Existing account audit &amp; optimisation</h3>
                    <p>We review what is already there, find where the setup and the real operation have drifted apart, and rebuild the parts holding you back.</p>
                    <ul>
                        <li>Audit of quoting, scheduling, jobs and automations</li>
                        <li>Inconsistent templates and pricing standardised</li>
                        <li>Recurring work and follow-ups finished properly</li>
                        <li>Underused features introduced where they earn their place</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/*  07 Why a specialist  */}
    <section aria-labelledby="why-title">
        <div className="wrap why-grid">
            <div>
                <p className="label">Doing it yourself, or not</p>
                <h2 id="why-title">Why hire Jobber experts?</h2>
                <p className="sub">Jobber is deliberately easy to start, so a solo operator can often set it up alone. The value of a specialist shows as you grow — consistent quoting across a team, several crews to dispatch, recurring work to automate, and an account that has outgrown its first setup.</p>
            </div>
            <ul className="why-list">
                <li><b>01</b><span><strong>Process design first.</strong> The operation is mapped before anything is configured, so Jobber reflects how you actually work.</span></li>
                <li><b>02</b><span><strong>Consistent quoting.</strong> Templates and pricing built once, so every quote looks the same and nothing is missed.</span></li>
                <li><b>03</b><span><strong>Scheduling that fits the crews.</strong> Dispatch, routing and recurring visits set up around how your teams move, not a generic calendar.</span></li>
                <li><b>04</b><span><strong>Less office admin.</strong> Reminders, on-my-way texts, invoicing and follow-up run through the system instead of a person.</span></li>
                <li><b>05</b><span><strong>The whole team adopts it.</strong> Office and field crews are trained on the parts they use, so it actually gets used.</span></li>
                <li><b>06</b><span><strong>Clean handover.</strong> The setup is documented and yours to run, with support available when you want it.</span></li>
            </ul>
        </div>
    </section>

    <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

    {/*  08 Partner block  */}
    <section aria-labelledby="partner-title">
        <div className="wrap">
            <div className="partner">
                <div>
                    <p className="label">Hire Jobber specialists</p>
                    <h2 id="partner-title">A Jobber implementation partner, not a one-off setup.</h2>
                    <p className="sub">If you already know Jobber is the right platform, Sage Kite can handle the implementation: process mapping, account and team setup, quoting, scheduling, jobs, automations and handover — and stay on to adjust it as you add crews and services.</p>
                </div>
                <div>
                    <Link href="/contact" className="btn">Discuss your Jobber setup</Link>
                    <div style={{ marginTop: '20px' } as React.CSSProperties}>
                        <Link href="/services/home-services" className="link">See all CRM implementation services</Link>
                    </div>
                </div>
            </div>
            <p className="note" style={{ marginTop: '20px', maxWidth: '85ch' } as React.CSSProperties}>Sage Kite is an independent implementation partner. Jobber is a trademark of its owner; Sage Kite is not a Jobber reseller or listed partner and is not affiliated with or certified by Jobber.</p>
        </div>
    </section>

    {/*  09 Process  */}
    <section className="pale" aria-labelledby="proc-title">
        <div className="wrap">
            <div className="head">
                <p className="label">How it works</p>
                <h2 id="proc-title">How a Jobber<br/>implementation runs.</h2>
            </div>
            <div className="steps">
                <div className="step" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">01</span>
                    <h3>Discovery</h3>
                    <p>Your services, crews, current process and tools, and whether Jobber is the right fit.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">02</span>
                    <h3>Process mapping</h3>
                    <p>The journey from request to payment and repeat work, agreed before anything is configured.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">03</span>
                    <h3>Configuration</h3>
                    <p>Account, team, clients, requests, quote and invoice templates, scheduling and job forms.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">04</span>
                    <h3>Automate</h3>
                    <p>Recurring work, reminders, on-my-way texts and follow-ups built around the agreed flow.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">05</span>
                    <h3>Test</h3>
                    <p>The full flow run against real jobs and corrected before your crews rely on it.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">06</span>
                    <h3>Train &amp; handover</h3>
                    <p>Office and field-team training, and documentation of how it is set up.</p>
                </div>
                <div className="step" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                    <div className="bar"></div>
                    <span className="num">07</span>
                    <h3>Optimise</h3>
                    <p>Refinements and further setup as you add crews, services or locations.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  10 Deliverables  */}
    <section aria-labelledby="del-title">
        <div className="wrap">
            <p className="label">What you receive</p>
            <h2 id="del-title">At handover.</h2>
            
            <ul className="deliver" style={{ marginTop: '40px' } as React.CSSProperties}>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>A configured Jobber account, matched to your operation</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Client records, tags and request handling set up</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Quote and invoice templates that match how you price</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Scheduling, dispatch and recurring work configured</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Job forms and field workflows for your crews</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Reminders, follow-ups and payment automations, tested</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Training for the office and field teams</li>
                <li><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 10l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Documentation of the setup, and optional ongoing support</li>
            </ul>

            <div className="mid-cta" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '48px', flexWrap: 'wrap' } as React.CSSProperties}>
                <Link href="/contact" className="btn">Review your Jobber setup</Link>
                <p className="note" style={{ margin: 0 } as React.CSSProperties}>New account or existing — we start by understanding how you work.</p>
            </div>
        </div>
    </section>

    {/*  11 System architecture  */}
    <section className="pale" aria-labelledby="arch-title">
        <div className="wrap">
            <div className="head">
                <p className="label">Where Jobber sits</p>
                <h2 id="arch-title">The platform is one part<br/>of the growth system.</h2>
            </div>

            <ul className="stack">
                <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}>Consultancy</li>
                <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>Jobber and CRM</li>
                <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Marketing</li>
                <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
                <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}>People</li>
                <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>Execution</li>
                <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
            </ul>

            <p className="note" style={{ marginTop: '40px', maxWidth: '80ch', fontSize: '1rem', color: 'var(--ink)' } as React.CSSProperties}>Sage Kite is a business growth consultancy. Jobber is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing that keeps the schedule full and the people who keep it running. On its own, Jobber runs your day-to-day operation; connected to the rest, it becomes part of how the business grows.</p>

            <div className="related-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '32px' } as React.CSSProperties}>
                <Link href="/services/crm-implementation" className="link">CRM implementation services</Link>
                <Link href="/services/marketing" className="link">Marketing services</Link>
                <Link href="/services/home-services" className="link">Home services</Link>
                <Link href="/platforms/housecall-pro" className="link">Housecall Pro</Link>
                <Link href="/platforms/servicetitan" className="link">ServiceTitan</Link>
                <Link href="/platforms" className="link">All platforms</Link>
            </div>
        </div>
    </section>

    {/*  12 FAQs  */}
    <section aria-labelledby="faq-title">
        <div className="wrap">
            <h2 id="faq-title">Frequently asked questions</h2>
            
            <div className="faq-group">
                <p className="label">Jobber CRM services</p>
                <div className="faq-grid">
                    <div>
                        <h3>What are Jobber CRM services?</h3>
                        <p>Jobber is field-service management software for home-service businesses, with client management built in. Jobber CRM services cover configuring that platform around how your business runs: client records, tags and job history, requests and online booking, quoting, scheduling and dispatch, jobs and job forms, client communication, invoicing and payments, recurring work and automations. Sage Kite maps how you actually operate first, then sets Jobber up to match, tests it and hands it over.</p>
                    </div>
                    <div>
                        <h3>What does a Jobber specialist do?</h3>
                        <p>A Jobber specialist designs how the platform should reflect your operation, then configures it and sets up the automations that reduce office admin. That means quote templates that match how you price, a schedule and dispatch flow that fits your crews, recurring work set up properly, automated reminders and follow-ups, and invoicing and payments that run themselves — plus training so the office and field teams use it consistently.</p>
                    </div>
                    <div>
                        <h3>Isn't Jobber easy enough to set up myself?</h3>
                        <p>For a solo operator, often yes — Jobber is built to work quickly, and it includes onboarding and data import. The value of a specialist shows up as you grow: when quoting needs to be consistent across a team, when several crews need dispatching, when recurring work and automations have to be reliable, or when an account set up in a hurry has become messy. We are honest about this in discovery rather than selling a setup you do not need.</p>
                    </div>
                    <div>
                        <h3>Can Sage Kite set up a new Jobber account?</h3>
                        <p>Yes. A new setup starts by mapping your operation from request to payment and repeat work, then configuring client records, request forms, quote and invoice templates, scheduling and dispatch, job forms, client communication and automations to match — and testing the flow before your team relies on it.</p>
                    </div>
                    <div>
                        <h3>Can you audit and improve an existing Jobber account?</h3>
                        <p>Yes. Many businesses start on Jobber themselves and outgrow the original setup: inconsistent quoting, scheduling that does not fit the crews, recurring work half-configured, automations that were never finished. We audit what is there, clean it up, rebuild the parts holding you back, and document it so the team can keep it running.</p>
                    </div>
                </div>
            </div>

            <div className="faq-group">
                <p className="label">Scope and configuration</p>
                <div className="faq-grid">
                    <div>
                        <h3>Can you set up quoting, scheduling and dispatch?</h3>
                        <p>Yes. That covers quote templates with optional line items, approval through the client hub and automated follow-up on unapproved quotes; and a scheduling and dispatch flow — drag-and-drop calendar, crew assignment and routing — that matches how your teams actually work in the field.</p>
                    </div>
                    <div>
                        <h3>Can you configure jobs, job forms and field workflows?</h3>
                        <p>Yes. Jobs can carry the details, checklists and job forms your crews need on site, captured through the mobile app along with photos, notes, times and signatures. We set these up so the field team records the right information and the office sees it without chasing.</p>
                    </div>
                    <div>
                        <h3>Can you set up recurring work and automations?</h3>
                        <p>Yes. Recurring jobs and visits are one of Jobber's strengths for services like lawn care, cleaning and pest control, and we set them up so the schedule and invoices generate on their own. Automations handle appointment reminders, on-my-way texts, follow-ups and review requests around them.</p>
                    </div>
                    <div>
                        <h3>Can you set up invoicing and payments?</h3>
                        <p>Yes. Invoice templates generated from completed jobs, payment collection through Jobber Payments and the client hub, automated payment reminders, and syncing to accounting through the QuickBooks or Xero integrations where you use them.</p>
                    </div>
                    <div>
                        <h3>Can you connect Jobber to the tools I already use?</h3>
                        <p>Where they are supported. Jobber connects to tools like QuickBooks and Xero and others through its app marketplace and open API. We confirm what your stack allows in discovery so the systems stay in sync rather than needing double entry.</p>
                    </div>
                </div>
            </div>

            <div className="faq-group">
                <p className="label">Working with Sage Kite</p>
                <div className="faq-grid">
                    <div>
                        <h3>Which industries do you work with?</h3>
                        <p>The home and field-service trades Jobber is built for: lawn care and landscaping, cleaning, HVAC, plumbing, electrical, roofing, painting and exterior work, pest control, and other businesses whose work happens at a customer's property. Each has a slightly different flow, and the setup is tailored to it rather than generic.</p>
                    </div>
                    <div>
                        <h3>Is Jobber right for my business?</h3>
                        <p>Jobber fits businesses whose work takes a team to a customer's property — quoting, scheduling, dispatching crews, and getting paid. If your work is office-based or online — professional services, or client work done at a desk — a different platform such as <Link href="/platforms/hubspot/" className="link">HubSpot</Link> or <Link href="/platforms/dubsado/" className="link">Dubsado</Link> usually fits better, and we implement those too. Discovery is where we tell you honestly which way we would go.</p>
                    </div>
                    <div>
                        <h3>Is Sage Kite a Jobber partner?</h3>
                        <p>Sage Kite is an independent implementation partner. Jobber is a trademark of its owner; Sage Kite is not a Jobber reseller or listed partner and is not affiliated with or certified by Jobber. We implement the platform on your behalf and are paid by you, not by Jobber.</p>
                    </div>
                    <div>
                        <h3>What happens after setup?</h3>
                        <p>You own the account and can run it. Handover includes training for the office and field teams and documentation of how it is set up. Where it helps, Sage Kite offers maintenance with a defined support scope, further work as you add crews or services, and the wider marketing, automation and staffing that turn a well-run operation into growth.</p>
                    </div>
                    <div>
                        <h3>Is Sage Kite only a Jobber agency?</h3>
                        <p>No. Sage Kite is a business growth consultancy. Jobber is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Jobber runs the day-to-day operation; the broader work decides what to change and creates the demand that keeps the schedule full.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  13 Final CTA  */}
    <section className="pale final" aria-labelledby="final-title">
        <div className="wrap final-inner">
            <h2 id="final-title">Get Jobber built around how you work.</h2>
            <p className="sub">Stop managing spreadsheets and text messages. We configure Jobber to handle the scheduling, dispatch, communication and payments so your team can focus on the work.</p>
            <div className="final-words">
                <span><span className="dot" style={{ '--c': 'var(--sage)' } as React.CSSProperties}></span> Map</span>
                <span><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span> Configure</span>
                <span><span className="dot" style={{ '--c': 'var(--butter)' } as React.CSSProperties}></span> Automate</span>
                <span><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span> Train</span>
            </div>
            <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/services" className="link">Explore all services</Link>
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
