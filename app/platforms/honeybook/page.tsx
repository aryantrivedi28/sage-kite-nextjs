import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import styles from './honeybook.module.css';

export const metadata: Metadata = {
  title: "HoneyBook Setup & Implementation Services | Sage Kite",
  description: "HoneyBook setup from Sage Kite: we map your clientflow, then configure lead capture, Smart Files, contracts, payments, scheduling and automations.",
  alternates: {
    canonical: "https://www.sagekite.com/platforms/honeybook",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/platforms/honeybook",
    title: "HoneyBook setup and implementation services | Sage Kite",
    description: "Sage Kite maps your clientflow, then configures HoneyBook around it: Smart Files, contracts, payments, scheduling and automations.",
  },
  twitter: {
    card: "summary",
    title: "HoneyBook setup and implementation services | Sage Kite",
    description: "Process-first HoneyBook implementation: Smart Files, contracts, payments, scheduling and automations, tested and handed over.",
  },
};

export default function HoneyBookPage() {
  return (
    <>
      <Header />
      
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
      "@id": "https://www.sagekite.com/platforms/honeybook/#webpage",
      "url": "https://www.sagekite.com/platforms/honeybook",
      "name": "HoneyBook setup and implementation services | Sage Kite",
      "description": "Sage Kite configures HoneyBook around your client process: lead capture, Smart Files, contracts, payments, scheduling and automated workflows, tested and handed over.",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/honeybook/#service"
      },
      "breadcrumb": {
        "@id": "https://www.sagekite.com/platforms/honeybook/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sagekite.com/platforms/honeybook/#breadcrumb",
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
          "name": "HoneyBook"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.sagekite.com/platforms/honeybook/#service",
      "name": "HoneyBook setup and implementation services",
      "serviceType": "HoneyBook setup and implementation",
      "description": "Clientflow mapping, HoneyBook account configuration, lead capture forms, Smart Files, proposals and contracts, invoicing and payments, scheduling, questionnaires and templates, workflow automation, testing, team training and handover.",
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
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "Australia"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "What we implement in HoneyBook",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Account setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead capture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Files and proposals"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Contracts"
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
              "name": "Scheduling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Questionnaires and templates"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Workflows and automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Testing and handover"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sagekite.com/platforms/honeybook/#faq",
      "isPartOf": {
        "@id": "https://www.sagekite.com/#website"
      },
      "about": {
        "@id": "https://www.sagekite.com/platforms/honeybook/#service"
      },
      "inLanguage": "en",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are HoneyBook setup services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HoneyBook setup services configure HoneyBook around your client process: account settings and branding, lead capture forms, Smart Files, proposals, contracts, invoices and payments, the scheduler, questionnaires, email templates and automated workflows. Sage Kite maps how your business actually books and serves clients first, then builds the account to match, tests it and hands it over."
          }
        },
        {
          "@type": "Question",
          "name": "What does a HoneyBook specialist do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A HoneyBook specialist designs the client process, configures the account to match it and builds the automations that handle the repetitive steps. The aim is a system that sends the right file or email at the right moment, keeps payments on schedule and gives every client the same professional experience, rather than a set of features left for you to assemble."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sage Kite set up HoneyBook from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A new setup starts by mapping your clientflow from first enquiry to final payment and follow-up, then building the Smart Files, forms, templates and emails that process needs, configuring payments and scheduling, and creating the automations. Everything is tested with sample client journeys before your team or clients see it."
          }
        },
        {
          "@type": "Question",
          "name": "Can you fix or improve an existing HoneyBook account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We review the Smart Files, forms, templates and automations already in use, find where the setup and your real process have drifted apart, remove duplicated or unused content, and rebuild the parts that are holding you back. This is a common request from businesses that set HoneyBook up quickly and never finished it."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sage Kite build HoneyBook automations and workflows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HoneyBook automations are sequences of actions — sending a Smart File or email, creating a task, moving a project stage — triggered by events and, where useful, by conditions such as whether a client has replied. We build these around the process we mapped, then test each path so the wrong email never sends at the wrong time."
          }
        },
        {
          "@type": "Question",
          "name": "Can you configure Smart Files, proposals and contracts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Smart Files let a client select services, sign a contract and pay from one interactive document. We build the packages, proposals, brochures and contract templates with electronic signatures, connected so a booking can move from selection to payment without manual steps in between."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up invoices, payments and the scheduler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. That covers invoice templates, payment schedules, reminders and automatic late fees with HoneyBook payments connected, plus schedulers and appointment types linked to your calendar with confirmations and reminders. What is available depends on your HoneyBook plan, which we confirm during discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Which parts stay manual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whatever genuinely needs a person. Consultations, the actual delivery of your work and difficult conversations stay with your team. Automation handles the predictable steps around them — capturing the enquiry, sending the proposal, chasing the payment, starting onboarding — so the admin stops depending on someone remembering."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sage Kite help migrate from another tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. HoneyBook can import contacts, and moving templates and content across is usually a rebuild rather than a direct transfer. Feasibility depends on what your current system can export and what HoneyBook can accept, so we confirm what is realistic in discovery before anything is scoped."
          }
        },
        {
          "@type": "Question",
          "name": "Is HoneyBook available in my country?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HoneyBook currently supports businesses based in the United States, Canada, the United Kingdom and Australia. Businesses in other regions, including the EU and New Zealand, cannot yet open a HoneyBook account. If HoneyBook is not available where your business is based, we can recommend and implement a platform that is — that is part of the consultancy."
          }
        },
        {
          "@type": "Question",
          "name": "How does a HoneyBook implementation work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seven stages: discovery, clientflow mapping, build, automation, testing, handover, and ongoing support where it is wanted. Scope, exclusions, milestones and a fixed project price are agreed in the proposal before any build begins."
          }
        },
        {
          "@type": "Question",
          "name": "Who should hire a HoneyBook specialist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses that have chosen HoneyBook but do not have the time to learn it properly, owners whose account no longer matches how they work, and small teams that want the booking and onboarding process to run the same way whoever handles it. If you are still deciding whether HoneyBook is right, that is a consultancy conversation we are happy to have first."
          }
        },
        {
          "@type": "Question",
          "name": "Will my team receive training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Handover includes training for the people who will run the account day to day, plus documentation of what was built and how to change it, so the system does not depend on one person."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You own the account and can run it. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your services change, and the wider marketing, automation and staffing that turn a tidy booking process into growth."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sage Kite only a HoneyBook agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sage Kite is a business growth consultancy. HoneyBook is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you book and serve clients; the broader work decides what to change and creates the demand that flows through it."
          }
        }
      ]
    }
  ]
}) }}
      />

      <main id="main">
        

        {/* Hero */}
        <section className={styles['plat-hero']}>
          <div className="wrap">
            <div className="brand-dashes" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--coral)' }}></div>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--butter)' }}></div>
              <div style={{ width: '24px', height: '6px', borderRadius: '4px', background: 'var(--sky)' }}></div>
            </div>
            <div className={styles['crumbs']} style={{ padding: 0 }}>
              <ol>
                <li><Link href="/platforms">Platforms</Link></li>
                <li aria-current="page">HoneyBook</li>
              </ol>
            </div>
            
            <div className="hero-grid" style={{ marginTop: '24px' }}>
              <div className="hero-copy">
                <h1>HoneyBook setup and implementation services</h1>
                <p className={styles['sub']}>
                  Sage Kite configures HoneyBook around the way your business actually books and serves clients: lead capture, Smart Files, contracts, payments, scheduling and automated workflows — mapped to your process, tested and handed over.
                </p>
                <div className="cta-row" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <Link href="/contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Book a discovery call</Link>
                  <Link href="#included" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See what's included</Link>
                </div>
              </div>
              
              <div className={styles['checklist']}>
                 <div className={styles['ui']}>
                    <div className={styles['ui-title']}><b>Configured HoneyBook account</b> <span>Example scope</span></div>
                    <ul className={styles['check']}>
                       <li><Check size={16} /> Branding, email and calendar connected <span>Setup</span></li>
                       <li><Check size={16} /> Lead capture form on your site <span>Forms</span></li>
                       <li><Check size={16} /> Smart File: services, contract, invoice <span>Smart Files</span></li>
                       <li><Check size={16} /> Scheduler with confirmations and reminders <span>Scheduling</span></li>
                       <li><Check size={16} /> Pipeline stages that match your process <span>Pipeline</span></li>
                       <li><Check size={16} /> Automations built, tested and handed over <span>Automation</span></li>
                    </ul>
                 </div>
                 <figcaption>Illustrative scope. Final scope is agreed in your proposal.</figcaption>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Symptoms / Challenge -> Who it's for */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className={`head ${styles['fit-head']}`}>
            <div className="label">Who it's for</div>
            <h2>HoneyBook works for independent, service-based businesses.</h2>
            <p>We implement HoneyBook CRM for photographers, wedding and event professionals, designers, coaches and consultants — built around the way each one actually wins and serves clients.</p>
          </div>
          <div className={styles['fit-grid']}>
             <div className={styles['fit']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Photographers & studios</strong>
                <p>Enquiries, session bookings, contracts and payments in one place instead of scattered across email and separate apps.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <strong>Wedding & event professionals</strong>
                <p>Planners, venues and creatives managing proposals, payment schedules and long lead times without losing track.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <strong>Designers & creative studios</strong>
                <p>Project work with proposals, milestones and invoices that need to look as considered as the work itself.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <strong>Coaches & consultants</strong>
                <p>Discovery calls, packages and recurring payments, with client onboarding that runs itself.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <strong>Other service businesses</strong>
                <p>Any small, service-led business taking clients from first enquiry through to booking and payment.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Small teams outgrowing admin</strong>
                <p>One shared, documented system, so client work no longer depends on a single person's inbox.</p>
             </div>
          </div>
          <p className={styles['fit-note']}>
            HoneyBook currently supports businesses based in the United States, Canada, the United Kingdom and Australia. If HoneyBook is not available where your business is based, we can recommend and implement a platform that is.
          </p>
        </section>

        {/* The Problem (Symptoms) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className="wrap">
            <div className="head">
              <div className="label">The problem</div>
              <h2 style={{ maxWidth: '30ch' }}>When your client process runs on memory, inboxes and manual follow-up.</h2>
            </div>
            <ul className={styles['symptoms']}>
               <li>Follow-up happens when someone remembers</li>
               <li>Enquiry, proposal and onboarding steps live in different places</li>
               <li>Onboarding is different every time</li>
               <li>Most of HoneyBook is paid for and unused</li>
               <li>Workflows do not match how the work actually happens</li>
               <li>Only one person understands the setup</li>
            </ul>
            <p className={styles['after-line']}>
              HoneyBook can handle most of these steps. The difficult part is configuring it around the way your business really works, which is where implementations usually stall.
            </p>
          </div>
        </section>

        {/* Journey / Our approach */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={`head ${styles['approach-head']}`}>
              <div className="label">Our approach</div>
              <h2 style={{ maxWidth: '28ch' }}>We build the system around the business, not the other way around.</h2>
              <p className={styles['sub']} style={{ maxWidth: '60ch', marginTop: '20px' }}>
                HoneyBook's own guidance is to map your clientflow before building anything. That is where we start: the real steps between an enquiry arriving and a client being served and paid. The account is then configured to fit that process, not the reverse.
              </p>
           </div>
           
           <div className={styles['journey']}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)' }}>
                 <span>A typical clientflow in HoneyBook</span>
                 <span style={{ color: 'var(--sage)', fontSize: '0.9rem', fontWeight: 500 }}>Mapped before anything is built</span>
              </div>
              <ul className={styles['track']} style={{ rowGap: '44px' }}>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Lead</strong><small>Contact form</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Qualify</strong><small>Pipeline stage</small></li>
                 <li className={styles['human']}><span className={styles['d']}></span><strong>Consult</strong><small>Scheduler</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Proposal</strong><small>Smart File</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Contract</strong><small>Signature</small></li>
                 
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Payment</strong><small>Invoice plan</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Onboarding</strong><small>Questionnaire</small></li>
                 <li className={styles['human']}><span className={styles['d']}></span><strong>Delivery</strong><small>Your team</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Follow-up</strong><small>Review, repeat</small></li>
              </ul>
              <div className={styles['key']}>
                 <span><span className={styles['d']} style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--sky)', background: 'var(--sky-soft)' }}></span> Automated where it should be</span>
                 <span><span className={styles['d']} style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--butter)', background: 'var(--butter-soft)' }}></span> Kept with your team</span>
              </div>
           </div>
           
           <p className={styles['after-line']} style={{ marginTop: '32px', maxWidth: '70ch' }}>
             We configure HoneyBook so the predictable steps happen on their own, and leave the conversations that genuinely need judgement with the people who should be having them.
           </p>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Capabilities (impl-grid) */}
        <section className="wrap" id="included" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={`head ${styles['impl-head']}`}>
             <div className="label">What we implement</div>
             <h2>What HoneyBook setup services cover.</h2>
           </div>
           <div className={styles['impl-grid']}>
             <div className={styles['impl']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>Account setup</h3>
                <p>Branding, company settings, email and calendar connections, and pipeline stages and statuses that reflect your real process.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Lead capture</h3>
                <p>Contact and lead capture forms for your site, routing each enquiry into the right project and workflow from the first click.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Smart Files & proposals</h3>
                <p>Interactive Smart Files and brochures that let a client choose services, sign and pay in one place, built to match your brand.</p>
             </div>
             
             <div className={styles['impl']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Contracts</h3>
                <p>Contract templates with electronic signatures, connected to the proposal and the rest of the booking sequence.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>
                <h3>Invoicing & payments</h3>
                <p>Invoice templates, payment schedules, reminders and late fees, with HoneyBook payments connected.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Scheduling</h3>
                <p>Session and meeting types linked to your calendar, with confirmations and reminders that cut the back-and-forth.</p>
             </div>
             
             <div className={styles['impl']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Questionnaires & templates</h3>
                <p>Questionnaires, saved emails and client-facing content, written to sound like your business rather than a template.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Automations & workflows</h3>
                <p>Automation sequences with triggers and conditions: sending files and emails, creating tasks and moving pipeline stages.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <h3>Testing & handover</h3>
                <p>Test client journeys run end to end, issues corrected, then training and documentation for your team.</p>
             </div>
           </div>
           <div className={styles['mid-cta']} style={{ marginTop: 'clamp(32px,4vw,44px)' }}>
             <Link href="/contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Talk to a HoneyBook specialist</Link>
             <span style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>Scope, exclusions and a fixed project price are agreed before any build starts.</span>
           </div>
        </section>

        {/* Two starting points (paths) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className={`head ${styles['paths-head']}`}>
               <div className="label">Two starting points</div>
               <h2 style={{ maxWidth: '28ch' }}>Starting fresh, or improving an existing HoneyBook account.</h2>
             </div>
             
             <div className={styles['paths']}>
               <div className={styles['path-card']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                 <h3>New HoneyBook setup</h3>
                 <p style={{ marginBottom: '24px' }}>We map your clientflow, build the Smart Files and content it needs, then configure the account and automations around that process.</p>
                 <ul>
                   <li>Clientflow mapped service by service</li>
                   <li>Forms, Smart Files, proposals, contracts and emails built</li>
                   <li>Automations created and tested before launch</li>
                   <li>Training and handover for your team</li>
                 </ul>
               </div>
               
               <div className={styles['path-card']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                 <h3>Existing account audit & optimisation</h3>
                 <p style={{ marginBottom: '24px' }}>We review what is already there, find where the setup and the real process have drifted apart, and rebuild the parts that are holding you back.</p>
                 <ul>
                   <li>Review of Smart Files, forms and automations in use</li>
                   <li>Duplicate and unused content removed or consolidated</li>
                   <li>Automation triggers and conditions corrected</li>
                   <li>Underused features introduced where they earn their place</li>
                 </ul>
               </div>
             </div>
           </div>
        </section>

        {/* Why hire a specialist */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={styles['why-grid']}>
             <div className="why-copy">
               <div className="label">Doing it yourself, or not</div>
               <h2 className={styles['why-head']}>Why hire a<br/>HoneyBook specialist?</h2>
               <p style={{ marginTop: '24px', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '40ch', color: 'var(--ink)' }}>
                 HoneyBook is designed to be learnable, and plenty of owners set it up themselves. The cost is usually the weeks spent learning it, and the rebuild that follows when the first version does not match how you actually work.
               </p>
             </div>
             
             <ul className={styles['why-list']}>
               <li>
                 <b>01</b>
                 <div><strong>Process design first.</strong> The mapping work is the part most setups skip, and the part that decides whether the automation helps or gets in the way.</div>
               </li>
               <li>
                 <b>02</b>
                 <div><strong>Fewer configuration mistakes.</strong> Smart File logic, automation triggers and timings behave in specific ways; knowing them avoids steps that fire at the wrong moment.</div>
               </li>
               <li>
                 <b>03</b>
                 <div><strong>Built and tested before clients see it.</strong> Test journeys run end to end, so errors are found internally rather than by a paying client.</div>
               </li>
               <li>
                 <b>04</b>
                 <div><strong>Less manual administration.</strong> Follow-ups, reminders and stage changes happen through the system rather than through someone's memory.</div>
               </li>
               <li>
                 <b>05</b>
                 <div><strong>Clear handover.</strong> Your team is trained on what was built and how to change it, with the structure documented.</div>
               </li>
               <li>
                 <b>06</b>
                 <div><strong>Support after launch.</strong> Maintenance and further implementation when your services or process change.</div>
               </li>
             </ul>
           </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Partner Block */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={styles['partner']}>
             <div>
               <div className="label" style={{ marginBottom: '16px' }}>Hire HoneyBook experts</div>
               <h2 style={{ maxWidth: '20ch', marginBottom: '24px' }}>A HoneyBook service partner, not a one-off setup.</h2>
               <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                 If you already know HoneyBook is the right platform, Sage Kite can handle the implementation: process mapping, configuration, workflow automation, testing and handover. And because Sage Kite is a business growth consultancy, the same team can help with what sits around the platform, from marketing that fills it to the specialists who run it day to day.
               </p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
               <Link href="/contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Discuss your HoneyBook setup</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See all CRM implementation services</Link>
             </div>
           </div>
           
           <p className={styles['trust-note']}>
             Sage Kite is an independent implementation partner. HoneyBook is a trademark of its owner, and Sage Kite is not affiliated with or certified by HoneyBook.
           </p>
        </section>


        {/* How it works (Runs) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">How it works</div>
               <h2 style={{ maxWidth: '30ch' }}>How a HoneyBook implementation runs.</h2>
             </div>
             
             <div className={styles['runs-grid']}>
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>01</div>
                 <h3>Discovery</h3>
                 <p>Your services, current process, team and constraints, and whether we are the right fit.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>02</div>
                 <h3>Process mapping</h3>
                 <p>The journey from enquiry to completion, written down service by service.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>03</div>
                 <h3>Build</h3>
                 <p>Account settings, forms, packages, proposals, contracts, invoices and schedulers configured.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>04</div>
                 <h3>Automate</h3>
                 <p>Workflows built around the agreed process, with triggers and actions set deliberately.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--ink)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>05</div>
                 <h3>Test</h3>
                 <p>Representative client journeys run end to end and corrected before launch.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>06</div>
                 <h3>Handover</h3>
                 <p>Team training and documentation of what has been built and why.</p>
               </div>
               
               <div className={styles['run-step']}>
                 <div className={styles['run-bar']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div>
                 <div className={styles['num']}>07</div>
                 <h3>Ongoing support</h3>
                 <p>Maintenance and further implementation as your services change.</p>
               </div>
             </div>
           </div>
        </section>

        {/* At handover (Deliverables) */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
             <div className="label">What you receive</div>
             <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>At handover.</h2>
           </div>
           
           <ul className={styles['deliver']}>
             <li><Check size={18} color="var(--sage)" /> <span>A configured HoneyBook account, matched to your process</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Your client journey mapped and documented</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Lead capture forms, questionnaires and canned emails</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Packages, proposals and contract templates</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Invoice, payment schedule and scheduler configuration</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Workflows, tested end to end</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Training for the people who will run it</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Documentation of the build, and optional maintenance</span></li>
           </ul>
        </section>

        {/* Where HoneyBook sits */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className={`head ${styles['where-head']}`}>
               <div className="label">Where HoneyBook sits</div>
               <h2 style={{ maxWidth: '20ch' }}>The platform is one part of the growth system.</h2>
             </div>
             
             <ul className={styles['stack']}>
               <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}>Consultancy</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>HoneyBook and CRM</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Marketing</li>
               <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
               <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}>People</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>Execution</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
             </ul>
             
             <p className={styles['stack-note']}>
               Sage Kite is a business growth consultancy. HoneyBook is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing that creates demand and the people who keep it running. On its own, HoneyBook organises how you book and serve clients; connected to the rest, it becomes part of how the business grows.
             </p>
             
             <div className={styles['related']}>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>CRM implementation services</Link>
               <Link href="/consulting" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Business growth consulting</Link>
               <Link href="/marketing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Marketing services</Link>
               <Link href="/staffing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Specialist Staffing</Link>
               <Link href="/platforms/dubsado" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Dubsado setup services</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>All platforms</Link>
             </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="wrap brief">
           <div className="head" style={{ marginBottom: 0 }}>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>Frequently asked questions</h2>
           </div>
           
           {/* Group 1: HoneyBook setup */}
           <div className="faq-group" style={{ marginTop: '32px' }}>
              <div className="label">HoneyBook setup</div>
              <div className="faq-grid">
                 <div>
                   <h3>What are HoneyBook setup services?</h3>
                   <p>HoneyBook setup services configure HoneyBook around your client process: account settings and branding, lead capture forms, Smart Files, proposals, contracts, invoices and payments, the scheduler, questionnaires, email templates and automated workflows. Sage Kite maps how your business actually books and serves clients first, then builds the account to match, tests it and hands it over.</p>
                 </div>
                 <div>
                   <h3>What does a HoneyBook specialist do?</h3>
                   <p>A HoneyBook specialist designs the client process, configures the account to match it and builds the automations that handle the repetitive steps. The aim is a system that sends the right file or email at the right moment, keeps payments on schedule and gives every client the same professional experience, rather than a set of features left for you to assemble.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can Sage Kite set up HoneyBook from scratch?</h3>
                   <p>Yes. A new setup starts by mapping your clientflow from first enquiry to final payment and follow-up, then building the Smart Files, forms, templates and emails that process needs, configuring payments and scheduling, and creating the automations. Everything is tested with sample client journeys before your team or clients see it.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can you fix or improve an existing HoneyBook account?</h3>
                   <p>Yes. We review the Smart Files, forms, templates and automations already in use, find where the setup and your real process have drifted apart, remove duplicated or unused content, and rebuild the parts that are holding you back. This is a common request from businesses that set HoneyBook up quickly and never finished it.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 2: Scope and configuration */}
           <div className="faq-group">
              <div className="label">Scope and configuration</div>
              <div className="faq-grid">
                 <div>
                   <h3>Can Sage Kite build HoneyBook automations and workflows?</h3>
                   <p>Yes. HoneyBook automations are sequences of actions — sending a Smart File or email, creating a task, moving a project stage — triggered by events and, where useful, by conditions such as whether a client has replied. We build these around the process we mapped, then test each path so the wrong email never sends at the wrong time.</p>
                 </div>
                 <div>
                   <h3>Can you configure Smart Files, proposals and contracts?</h3>
                   <p>Yes. Smart Files let a client select services, sign a contract and pay from one interactive document. We build the packages, proposals, brochures and contract templates with electronic signatures, connected so a booking can move from selection to payment without manual steps in between.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can you set up invoices, payments and the scheduler?</h3>
                   <p>Yes. That covers invoice templates, payment schedules, reminders and automatic late fees with HoneyBook payments connected, plus schedulers and appointment types linked to your calendar with confirmations and reminders. What is available depends on your HoneyBook plan, which we confirm during discovery.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Which parts stay manual?</h3>
                   <p>Whatever genuinely needs a person. Consultations, the actual delivery of your work and difficult conversations stay with your team. Automation handles the predictable steps around them — capturing the enquiry, sending the proposal, chasing the payment, starting onboarding — so the admin stops depending on someone remembering.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can Sage Kite help migrate from another tool?</h3>
                   <p>Sometimes. HoneyBook can import contacts, and moving templates and content across is usually a rebuild rather than a direct transfer. Feasibility depends on what your current system can export and what HoneyBook can accept, so we confirm what is realistic in discovery before anything is scoped.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Is HoneyBook available in my country?</h3>
                   <p>HoneyBook currently supports businesses based in the United States, Canada, the United Kingdom and Australia. Businesses in other regions, including the EU and New Zealand, cannot yet open a HoneyBook account. If HoneyBook is not available where your business is based, we can recommend and implement a platform that is — that is part of the consultancy.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 3: Working with Sage Kite */}
           <div className="faq-group">
              <div className="label">Working with Sage Kite</div>
              <div className="faq-grid">
                 <div>
                   <h3>How does a HoneyBook implementation work?</h3>
                   <p>Seven stages: discovery, clientflow mapping, build, automation, testing, handover, and ongoing support where it is wanted. Scope, exclusions, milestones and a fixed project price are agreed in the proposal before any build begins.</p>
                 </div>
                 <div>
                   <h3>Who should hire a HoneyBook specialist?</h3>
                   <p>Businesses that have chosen HoneyBook but do not have the time to learn it properly, owners whose account no longer matches how they work, and small teams that want the booking and onboarding process to run the same way whoever handles it. If you are still deciding whether HoneyBook is right, that is a consultancy conversation we are happy to have first.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Will my team receive training?</h3>
                   <p>Yes. Handover includes training for the people who will run the account day to day, plus documentation of what was built and how to change it, so the system does not depend on one person.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>What happens after setup?</h3>
                   <p>You own the account and can run it. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your services change, and the wider marketing, automation and staffing that turn a tidy booking process into growth.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Is Sage Kite only a HoneyBook agency?</h3>
                   <p>No. Sage Kite is a business growth consultancy. HoneyBook is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you book and serve clients; the broader work decides what to change and creates the demand that flows through it.</p>
                 </div>
              </div>
           </div>
        </section>
        
        {/* Final CTA */}
        <section className="pale" style={{ padding: 'clamp(80px, 10vw, 120px) 0' }}>
           <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.925rem', color: 'var(--ink)', marginBottom: '28px', flexWrap: 'wrap' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sage)' }}></span> Map</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sky)' }}></span> Build</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--coral)' }}></span> Automate</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ink)' }}></span> Train</span>
             </div>
             
             <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', maxWidth: '20ch', marginBottom: '24px', lineHeight: 1.1 }}>
               Get HoneyBook built around your process.
             </h2>
             
             <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--ink)', maxWidth: '58ch', marginBottom: '40px' }}>
               Tell us how enquiries reach you today and what happens next. We will tell you what we would map first, what the build would involve, and whether HoneyBook is the right fit for your business.
             </p>
             
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
               <Link href="/contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Book a discovery call</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See other platforms we implement</Link>
             </div>
           </div>
        </section>
        
      </main>
      
      <Footer />
    </>
  );
}
