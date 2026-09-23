import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dubsado Setup & Implementation Services | Sage Kite",
  description: "Dubsado setup services from Sage Kite: we map your client process, then configure lead capture, proposals, contracts, payments, scheduling and workflows, tested and handed over.",
  alternates: {
    canonical: "https://www.sagekite.com/platforms/dubsado",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/platforms/dubsado",
    title: "Dubsado setup and implementation services | Sage Kite",
    description: "Process mapped first, then Dubsado built around it: forms, proposals, contracts, payments, scheduling and workflows, tested before launch.",
  },
  twitter: {
    card: "summary",
    title: "Dubsado setup and implementation services | Sage Kite",
    description: "Sage Kite maps your client process, then configures Dubsado around it, tests it and hands it over.",
  },
};

export default function DubsadoPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          /* Dubsado page additions, built from the approved homepage system */
          .crumbs{padding:18px 0 0;font-size:.85rem}
          .crumbs ol{display:flex;flex-wrap:wrap;gap:8px;align-items:center;color:var(--sage)}
          .crumbs a{text-decoration:none;font-weight:500}
          .crumbs a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
          .crumbs li:not(:last-child)::after{content:"/";margin-left:8px;color:var(--light-sage)}
          .crumbs [aria-current]{color:var(--ink);font-weight:600}

          .plat-hero{padding:clamp(16px,3vw,32px) 0 clamp(72px,9vw,112px)}
          .plat-hero h1{font-size:clamp(2.5rem,5vw,4.1rem);line-height:1.02;letter-spacing:-.025em;max-width:15ch}
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
          .fit strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;font-size:1.2rem;color:var(--ink);line-height:1.25;margin-bottom:4px}
          .fit p{font-size:.9rem;line-height:1.45}

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

          .faq-grid{display:grid}
          .runs-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:40px 24px;margin-top:clamp(36px,4vw,52px)}
          .run-step{display:flex;flex-direction:column}
          .run-bar{height:4px;background:var(--light-sage);margin-bottom:20px;display:flex}
          .run-bar::before{content:"";width:35%;height:100%;background:var(--c)}
          .run-step .num{font-family:var(--sans);font-size:2.4rem;color:var(--sage);line-height:1;margin-bottom:12px;font-weight:700;letter-spacing:-.02em}
          .run-step h3{font-family:var(--sans);font-size:1.35rem;color:var(--ink);margin-bottom:10px;font-weight:700;letter-spacing:-.01em}
          .run-step p{font-size:.925rem;line-height:1.45}

          .faq-stack{display:flex;flex-direction:column}
          .faq-stack > div{padding-bottom:24px}
          .faq-stack > div + div{border-top:1px solid var(--light-sage);padding-top:24px}

          @media (max-width:1040px){
            .fit-grid,.symptoms,.impl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
            .track{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:22px}
            .track::before{display:none}
            .why-grid,.partner{grid-template-columns:1fr}
            .stack{grid-template-columns:repeat(3,minmax(0,1fr))}
            .plat-hero .hero-grid{gap:40px}
            .runs-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .fit-grid,.symptoms,.impl-grid,.paths,.deliver,.runs-grid{grid-template-columns:1fr}
            .track{grid-template-columns:repeat(2,minmax(0,1fr))}
            .stack{grid-template-columns:repeat(2,minmax(0,1fr))}
            .checklist{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
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
            <div className="crumbs" style={{ padding: 0 }}>
              <ol>
                <li><Link href="/platforms">Platforms</Link></li>
                <li aria-current="page">Dubsado</li>
              </ol>
            </div>
            
            <div className="hero-grid" style={{ marginTop: '24px' }}>
              <div className="hero-copy">
                <h1>Dubsado setup and implementation services</h1>
                <p className="sub">
                  Sage Kite configures Dubsado around the way your business actually wins, onboards and serves clients: lead capture, proposals, contracts, payments, scheduling and automated workflows. We map the process first, then build the system to match it.
                </p>
                <div className="cta-row" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Book a discovery call</Link>
                  <Link href="#included" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See what's included</Link>
                </div>
              </div>
              
              <div className="checklist">
                 <div className="ui">
                    <div className="ui-title"><b>Configured Dubsado account</b> <span>Example scope</span></div>
                    <ul className="check">
                       <li><Check size={16} /> Branding, email and calendar connected <span>Settings</span></li>
                       <li><Check size={16} /> Lead capture form on your site <span>Forms</span></li>
                       <li><Check size={16} /> Packages, proposal, contract and invoice <span>Booking</span></li>
                       <li><Check size={16} /> Scheduler and appointment reminders <span>Calendar</span></li>
                       <li><Check size={16} /> Statuses and tags that match your stages <span>Tracking</span></li>
                       <li><Check size={16} /> Workflows built, tested and handed over <span>Automation</span></li>
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
          <div className="head">
            <div className="label">Who it's for</div>
            <h2>Dubsado implementation for businesses<br/>that want the system built properly.</h2>
          </div>
          <div className="fit-grid">
             <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Starting with Dubsado</strong>
                <p>You have chosen the platform and want it built around your services, not a generic template.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <strong>Cleaning up an existing account</strong>
                <p>Dubsado is in use, but forms, templates and workflows have grown messy or half-finished.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <strong>Replacing a manual process</strong>
                <p>Enquiries, proposals and onboarding currently run on inboxes, documents and memory.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <strong>Fixing automation that misfires</strong>
                <p>Workflows exist, but the wrong emails send, steps stall or nothing triggers at all.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <strong>Standardising onboarding</strong>
                <p>Every client should get the same experience, whoever on the team handles them.</p>
             </div>
             <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Training a team</strong>
                <p>The account works, but only one person understands it and nothing is documented.</p>
             </div>
          </div>
        </section>

        {/* The Problem (Symptoms) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className="wrap">
            <div className="head">
              <div className="label">The problem</div>
              <h2 style={{ maxWidth: '30ch' }}>When your client process runs on memory, inboxes and manual follow-up.</h2>
            </div>
            <ul className="symptoms">
               <li>Follow-up happens when someone remembers</li>
               <li>Enquiry, proposal and onboarding steps live in different places</li>
               <li>Onboarding is different every time</li>
               <li>Most of Dubsado is paid for and unused</li>
               <li>Workflows do not match how the work actually happens</li>
               <li>Only one person understands the setup</li>
            </ul>
            <p className="after-line">
              Dubsado can handle most of these steps. The difficult part is configuring it around the way your business really works, which is where implementations usually stall.
            </p>
          </div>
        </section>

        {/* Journey / Our approach */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
              <div className="label">Our approach</div>
              <h2 style={{ maxWidth: '28ch' }}>We build the system around the business, not the other way around.</h2>
              <p className="sub" style={{ maxWidth: '60ch', marginTop: '20px' }}>
                Dubsado’s own setup guidance recommends mapping your client journey before configuring anything. That is where we start: the real steps between an enquiry arriving and a project finishing, then the account built to match.
              </p>
           </div>
           
           <div className="journey">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)' }}>
                 <span>A typical client journey in Dubsado</span>
                 <span style={{ color: 'var(--sage)', fontSize: '0.9rem', fontWeight: 500 }}>Mapped before anything is built</span>
              </div>
              <ul className="track" style={{ rowGap: '44px' }}>
                 <li className="auto"><span className="d"></span><strong>Lead</strong><small>Capture form</small></li>
                 <li className="auto"><span className="d"></span><strong>Qualification</strong><small>Status and tags</small></li>
                 <li className="human"><span className="d"></span><strong>Consultation</strong><small>Scheduler</small></li>
                 <li className="auto"><span className="d"></span><strong>Proposal</strong><small>Packages</small></li>
                 <li className="auto"><span className="d"></span><strong>Contract</strong><small>Signature</small></li>
                 
                 <li className="auto"><span className="d"></span><strong>Payment</strong><small>Invoice plan</small></li>
                 <li className="auto"><span className="d"></span><strong>Scheduling</strong><small>Kick-off</small></li>
                 <li className="auto"><span className="d"></span><strong>Onboarding</strong><small>Forms, emails</small></li>
                 <li className="human"><span className="d"></span><strong>Delivery</strong><small>Your team</small></li>
                 <li className="auto"><span className="d"></span><strong>Follow-up</strong><small>Feedback, repeat</small></li>
              </ul>
              <div className="key">
                 <span><span className="d" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--sky)', background: 'var(--sky-soft)' }}></span> Automated where it should be</span>
                 <span><span className="d" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--butter)', background: 'var(--butter-soft)' }}></span> Kept with your team</span>
              </div>
           </div>
           
           <p className="after-line" style={{ marginTop: '32px', maxWidth: '70ch' }}>
             We configure Dubsado so the right steps happen at the right time, and leave the parts that genuinely need judgement with the people who should be making it.
           </p>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--light-sage)', margin: 0 }} />

        {/* Capabilities (impl-grid) */}
        <section className="wrap" id="included" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="head">
             <div className="label">What we implement</div>
             <h2>What Dubsado setup services cover.</h2>
           </div>
           <div className="impl-grid">
             <div className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>Account setup</h3>
                <p>Branding, account settings, email and calendar connections, project statuses and tags that reflect your real stages.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Lead capture</h3>
                <p>Lead capture forms for your site, with the enquiry routed into the right project and workflow from the start.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Proposals</h3>
                <p>Packages and proposal forms so a client can select what they want and move straight into contract and payment.</p>
             </div>
             
             <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Contracts</h3>
                <p>Contract templates with electronic signature, connected to the proposal and the rest of the booking sequence.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>
                <h3>Invoicing and payments</h3>
                <p>Invoice templates, payment schedules and reminders, set up with your payment processor.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Scheduling</h3>
                <p>Schedulers and appointment types, connected to your calendar with confirmations and reminders.</p>
             </div>
             
             <div className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Forms and templates</h3>
                <p>Questionnaires, canned emails and client-facing documents, written to match the tone your business already uses.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Workflows and automation</h3>
                <p>Workflow sequences with triggers and actions such as sending forms and emails, creating tasks and changing status when a contract is signed, a form is completed or a payment is made.</p>
             </div>
             <div className="impl" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <h3>Testing and handover</h3>
                <p>Test client journeys run end to end, issues corrected, then training for your team and documentation of what was built.</p>
             </div>
           </div>
           <div className="mid-cta" style={{ marginTop: 'clamp(32px,4vw,44px)' }}>
             <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Talk to a Dubsado specialist</Link>
             <span style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>Scope, exclusions and a fixed project price are agreed before any build starts.</span>
           </div>
        </section>

        {/* Two starting points (paths) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">Two starting points</div>
               <h2 style={{ maxWidth: '28ch' }}>Starting fresh, or improving an existing Dubsado account.</h2>
             </div>
             
             <div className="paths">
               <div className="path-card" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                 <h3>New Dubsado setup</h3>
                 <p style={{ marginBottom: '24px' }}>We map your client journey, build the templates and content it needs, then configure the account and workflows around that process.</p>
                 <ul>
                   <li>Process mapped service by service</li>
                   <li>Forms, packages, proposals, contracts and emails built</li>
                   <li>Workflows created and tested before launch</li>
                   <li>Training and handover for your team</li>
                 </ul>
               </div>
               
               <div className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                 <h3>Existing account audit and clean-up</h3>
                 <p style={{ marginBottom: '24px' }}>We review what is already there, find where the setup and the real process have drifted apart, and rebuild the parts that are holding you back.</p>
                 <ul>
                   <li>Review of templates, forms and workflows in use</li>
                   <li>Duplicate and unused content removed or consolidated</li>
                   <li>Workflow triggers and actions corrected</li>
                   <li>Unused features introduced where they earn their place</li>
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
               <h2>Why hire a<br/>Dubsado specialist?</h2>
               <p style={{ marginTop: '24px', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '40ch', color: 'var(--ink)' }}>
                 Dubsado is learnable. The cost is usually the weeks spent learning it, and the rebuild that follows when the first version does not match how you work.
               </p>
             </div>
             
             <ul className="why-list">
               <li>
                 <b>01</b>
                 <div><strong>Process design first.</strong> The mapping work is the part most setups skip, and the part that decides whether the automation helps.</div>
               </li>
               <li>
                 <b>02</b>
                 <div><strong>Fewer configuration mistakes.</strong> Triggers, timings and conditions behave in specific ways; knowing them avoids workflows that fire at the wrong moment.</div>
               </li>
               <li>
                 <b>03</b>
                 <div><strong>Built and tested before clients see it.</strong> Test journeys run end to end, so errors are found internally rather than by a client.</div>
               </li>
               <li>
                 <b>04</b>
                 <div><strong>Less manual administration.</strong> Follow-ups, reminders and status changes happen through the system rather than through someone’s memory.</div>
               </li>
               <li>
                 <b>05</b>
                 <div><strong>Clear handover.</strong> Your team is trained on what was built and how to change it, with documentation of the structure.</div>
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
           <div className="partner">
             <div>
               <div className="label" style={{ marginBottom: '16px' }}>Hire Dubsado experts</div>
               <h2 style={{ maxWidth: '20ch', marginBottom: '24px' }}>A Dubsado service partner, not a one-off setup.</h2>
               <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                 If you already know Dubsado is the right platform, Sage Kite can handle the implementation: process mapping, configuration, workflow automation, testing and handover. And because Sage Kite is a business growth consultancy, the same team can help with what sits around the platform, from marketing that fills it to the specialists who run it day to day.
               </p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
               <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Discuss your Dubsado setup</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>See all CRM implementation services</Link>
             </div>
           </div>
           
           <p className="trust-note">
             Sage Kite is an independent implementation partner. Dubsado is a trademark of its owner, and Sage Kite is not affiliated with or certified by Dubsado.
           </p>
        </section>


        {/* How it works (Runs) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">How it works</div>
               <h2 style={{ maxWidth: '30ch' }}>How a Dubsado implementation runs.</h2>
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
                 <h3>Build</h3>
                 <p>Account settings, forms, packages, proposals, contracts, invoices and schedulers configured.</p>
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
                 <h3>Test</h3>
                 <p>Representative client journeys run end to end and corrected before launch.</p>
               </div>
               
               <div className="run-step">
                 <div className="run-bar" style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}></div>
                 <div className="num">06</div>
                 <h3>Handover</h3>
                 <p>Team training and documentation of what has been built and why.</p>
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
             <div className="label">What you receive</div>
             <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>At handover.</h2>
           </div>
           
           <ul className="deliver">
             <li><Check size={18} color="var(--sage)" /> <span>A configured Dubsado account, matched to your process</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Your client journey mapped and documented</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Lead capture forms, questionnaires and canned emails</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Packages, proposals and contract templates</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Invoice, payment schedule and scheduler configuration</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Workflows, tested end to end</span></li>
             
             <li><Check size={18} color="var(--sage)" /> <span>Training for the people who will run it</span></li>
             <li><Check size={18} color="var(--sage)" /> <span>Documentation of the build, and optional maintenance</span></li>
           </ul>
        </section>

        {/* Where Dubsado sits */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className="head">
               <div className="label">Where Dubsado sits</div>
               <h2 style={{ maxWidth: '20ch' }}>The platform is one part of the growth system.</h2>
             </div>
             
             <ul className="stack">
               <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}>Consultancy</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>Dubsado and CRM</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Marketing</li>
               <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
               <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}>People</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>Execution</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
             </ul>
             
             <p className="stack-note">
               Sage Kite is a business growth consultancy. Dubsado is one of the systems we implement, alongside the consultancy that decides what to change, the marketing that creates demand and the specialists who operate the system once it is live.
             </p>
             
             <div className="related">
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>CRM implementation services</Link>
               <Link href="/consulting" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Business growth consulting</Link>
               <Link href="/marketing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Marketing services</Link>
               <Link href="/staffing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Specialist Staffing</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>All platforms</Link>
             </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="wrap brief">
           <div className="head" style={{ marginBottom: 0 }}>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>Frequently asked questions</h2>
           </div>
           
           {/* Group 1: Dubsado setup */}
           <div className="faq-group" style={{ marginTop: '32px' }}>
              <div className="label">Dubsado setup</div>
              <div className="faq-grid">
                 <div>
                   <h3>What are Dubsado setup services?</h3>
                   <p>Dubsado setup services configure Dubsado around your client process: account settings and branding, lead capture forms, packages and proposals, contracts, invoices and payment schedules, schedulers, questionnaires, canned emails and automated workflows. Sage Kite maps the process first, then builds and tests the system before handover.</p>
                 </div>
                 <div>
                   <h3>What does a Dubsado specialist do?</h3>
                   <p>A Dubsado specialist designs the client process, configures the account to match it and builds the workflows that automate the repetitive steps. The work is as much process design as platform configuration, which is why two accounts with the same features can perform very differently.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can Sage Kite set up Dubsado from scratch?</h3>
                   <p>Yes. A new setup starts with mapping your journey from enquiry to completion, then building the templates and content that process needs, then the workflows, then testing before anything goes live.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can you fix or improve an existing Dubsado account?</h3>
                   <p>Yes. We review the templates, forms and workflows in use, find where the setup and the real process have drifted apart, remove duplicates, correct workflow triggers and rebuild the parts causing problems.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 2: Scope and configuration */}
           <div className="faq-group">
              <div className="label">Scope and configuration</div>
              <div className="faq-grid">
                 <div>
                   <h3>Can Sage Kite build Dubsado workflows?</h3>
                   <p>Yes. Workflows are sequences of automated actions such as sending a form or email, creating a task or changing a project status, triggered by events like a lead capture form being completed, a contract being signed, an appointment happening or a payment being made. We build them around the mapped process rather than a template.</p>
                 </div>
                 <div>
                   <h3>Can you configure proposals and contracts?</h3>
                   <p>Yes. Proposals can present your packages so a client selects what they want and moves straight into the contract and invoice. Contracts use Dubsado's electronic signature and connect to the rest of the booking sequence.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can you configure payments and scheduling?</h3>
                   <p>Yes. That covers invoice templates, payment schedules and reminders with your payment processor connected, plus schedulers and appointment types linked to your calendar with confirmations and reminders.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Which parts stay manual?</h3>
                   <p>Whatever genuinely needs judgement. Consultations, delivery and difficult conversations stay with your team. Automation is used for the predictable steps around them: acknowledgements, reminders, status changes and standard onboarding.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Can Sage Kite help migrate from another CRM?</h3>
                   <p>Sometimes. Migrations depend on what the current system can export and what Dubsado can accept, so feasibility is confirmed in discovery before anything is scoped or promised.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 3: Working with Sage Kite */}
           <div className="faq-group">
              <div className="label">Working with Sage Kite</div>
              <div className="faq-grid">
                 <div>
                   <h3>How does a Dubsado implementation work?</h3>
                   <p>Seven stages: discovery, process mapping, build, automation, testing, handover, and ongoing support where it is wanted. Scope, exclusions, acceptance criteria and a fixed project price are agreed in the proposal before the build starts.</p>
                 </div>
                 <div>
                   <h3>Who should hire a Dubsado expert?</h3>
                   <p>Businesses that have chosen Dubsado but do not have the time to learn it properly, teams whose setup no longer matches how they work, and businesses that want one consistent client experience rather than a process that varies by whoever is handling it.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>How does Sage Kite test Dubsado workflows?</h3>
                   <p>By running representative client journeys through the account before launch: submitting the lead capture form, moving through proposal, contract and payment, and checking that each workflow action fires at the right point. Issues are corrected before real clients see anything.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Will my team receive training?</h3>
                   <p>Yes. Handover includes training for the people who will run the account day to day, plus documentation of what was built and how to change it.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>What happens after implementation?</h3>
                   <p>You own the account and can run it. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your services change, and specialists who can operate the system alongside your team.</p>
                 </div>
                 <div style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}>
                   <h3>Is Sage Kite only a Dubsado agency?</h3>
                   <p>No. Sage Kite is a business growth consultancy. Dubsado is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing, so the platform work can connect to the rest of how the business grows.</p>
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
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--coral)' }}></span> Test</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ink)' }}></span> Hand over</span>
             </div>
             
             <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', maxWidth: '20ch', marginBottom: '24px', lineHeight: 1.1 }}>
               Get your Dubsado built around your process.
             </h2>
             
             <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--ink)', maxWidth: '58ch', marginBottom: '40px' }}>
               Tell us how enquiries arrive today and what happens next. We will tell you what we would map first, what the build would involve and whether Sage Kite is the right fit.
             </p>
             
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
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
