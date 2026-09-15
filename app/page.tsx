"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="/" aria-label="Sage Kite home">
          <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" />
          </a>
          
          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <ul>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#platforms" onClick={() => setMenuOpen(false)}>Platforms</a></li>
              <li><a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a></li>
              <li><a href="#agencies" onClick={() => setMenuOpen(false)}>For agencies</a></li>
              <li><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a className="btn btn-small" href="https://wa.me/message/C22YQ52VUDLCA1" onClick={() => setMenuOpen(false)}>Book a discovery call</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span className="c"></span><span className="b"></span><span className="s"></span>
              </div>
              <div className="label">Streamlined systems for growth</div>
              <h1>CRM consulting and growth systems that <span className="u">make selling easier.</span></h1>
              <p className="lede">Sage Kite is a CRM consultancy-led growth company for small and medium-sized businesses. We find where leads, follow-up and pipeline visibility are breaking down, then put the right fix in place: CRM implementation, marketing automation, marketing, or specialist VA support to run it.</p>
              <p className="sub">It usually starts with the CRM, because that is where a growth problem becomes visible. It rarely ends there.</p>
              
              <div className="cta-row">
                <a className="btn" href="https://wa.me/message/C22YQ52VUDLCA1">Book a discovery call</a>
                <a className="text-link" href="#connections">See how the pieces connect</a>
              </div>
            </div>

            <figure className="lead-path" aria-label="The path a lead should take">
              <h2>The path a lead should take</h2>
              <div className="path-steps">
                <div className="path-step">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <strong>An enquiry arrives</strong>
                    <span>From a form, an ad, a referral or a call.</span>
                  </div>
                </div>
                <div className="path-step">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <strong>Someone owns it in the CRM</strong>
                    <div className="stall"><span className="icon-warn"></span>Common stall: no clear owner</div>
                  </div>
                </div>
                <div className="path-step">
                  <div className="step-num bg-blue">3</div>
                  <div className="step-content">
                    <strong>Follow-up starts automatically</strong>
                    <div className="badge blue">Automation</div>
                    <div className="stall"><span className="icon-warn"></span>Common stall: follow-up relies on memory</div>
                  </div>
                </div>
                <div className="path-step">
                  <div className="step-num">4</div>
                  <div className="step-content">
                    <strong>The pipeline shows where it stands</strong>
                    <div className="stall"><span className="icon-warn"></span>Common stall: status is unclear</div>
                  </div>
                </div>
                <div className="path-step">
                  <div className="step-num">5</div>
                  <div className="step-content">
                    <strong>A person takes the next step</strong>
                    <span>A call, a quote, a booking or a consultation.</span>
                  </div>
                </div>
              </div>
              <figcaption>An illustrative lead path, not client data.</figcaption>
            </figure>
          </div>
        </section>

        <section className="rule-top" id="problem">
          <div className="wrap split">
            <div className="split-head">
              <span className="label">The problem</span>
              <h2>Growth problems tend to show up in the CRM first.</h2>
              <p className="mt">A business rarely has one isolated problem. The CRM is the record of what happened to every lead and customer, so it is where disconnected marketing, unclear processes and stretched teams become visible. That makes it the most useful place to start a diagnosis.</p>
            </div>
            
            <ul className="rows">
              <li>
                <h3>Leads lose momentum</h3>
                <p>Enquiries wait for a reply, sit without an owner or go quiet after one attempt. The cost is sales that were available and never followed through.</p>
              </li>
              <li>
                <h3>CRM processes are disorganised</h3>
                <p>Duplicate contacts, pipeline stages nobody agrees on and data nobody trusts. When reporting becomes guesswork, decisions do too.</p>
              </li>
              <li>
                <h3>Marketing activity is disconnected</h3>
                <p>Campaigns produce leads that land in a system which cannot say what happened next, so nobody can tell which spend is working.</p>
              </li>
              <li>
                <h3>There is no capacity to execute</h3>
                <p>The fix is understood, but nobody has the hours to build it properly or keep it running once it is built.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="tint" id="crm-consulting">
          <div className="wrap">
            <div className="approach-intro">
              <div>
                <span className="label">CRM consulting</span>
                <h2>What CRM consulting actually involves</h2>
                <p className="mt">CRM consulting is the work of deciding how a business should manage leads, customers and sales activity, and then shaping the CRM to match. A good CRM consultant studies the real sales process first and the software second: who handles an enquiry, what happens next, and what the business needs to see to make decisions.</p>
              </div>
              <p className="pull">A new CRM will not fix a follow-up problem on its own. Deciding who follows up, when and how is the part that changes results.</p>
            </div>
            
            <div className="sub-grid rule-top">
              <div>
                <h3>Why the CRM sits at the centre of growth</h3>
                <p>The CRM is where marketing hands a lead to sales, where follow-up is scheduled and where you learn what actually converted. When it reflects how the business really sells, growth becomes easier to measure and repeat. When it does not, every investment in marketing or people has to work around it.</p>
              </div>
              <div>
                <h3>When a business needs CRM implementation</h3>
                <p>Implementation is the right next step when the system itself needs building or rebuilding: a new platform, a pipeline that no longer fits, data that needs cleaning, or a move between tools. Our <a href="https://glasspane.pages.dev/services/crm-implementation" className="text-link">CRM implementation services</a> cover setup, pipeline design, cleanup, feasible migrations, workflows, testing, training and handover.</p>
              </div>
              <div>
                <h3>Where marketing automation fits</h3>
                <p>Marketing automation is how the CRM acts on what it knows: a prompt reply to a new enquiry, a reminder when a deal stalls, a nurture sequence for leads who are not ready yet. We build it with the native workflow tools in your CRM platform, so the automation and the customer record stay in the same place.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="operation">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">How the pieces connect</span>
              <h2>One growth operation, five questions</h2>
              <p className="lede mt">Sage Kite does not sell consulting, CRM work, automation, marketing and staffing as separate things. Each one answers a different question about the same operation, and a weak answer to any of them limits the others.</p>
            </div>
            
            <div className="q-rows">
              <div className="q-row b-butter">
                <div className="q-title">Strategy</div>
                <div className="q-question">What should we fix first, and why?</div>
                <div className="q-answer"><strong>Business growth consulting:</strong> GTM consultancy, AI consultancy and fractional CMO support.</div>
              </div>
              <div className="q-row b-sage">
                <div className="q-title">CRM<small>The anchor</small></div>
                <div className="q-question">Where does every lead live, and who owns the next step?</div>
                <div className="q-answer"><strong>CRM consulting and implementation:</strong> pipelines, ownership rules, data, reporting and handover.</div>
              </div>
              <div className="q-row b-sky">
                <div className="q-title">Automation</div>
                <div className="q-question">What should happen without anyone having to remember?</div>
                <div className="q-answer"><strong>Marketing automation:</strong> platform-native workflows, follow-up sequences and email automation.</div>
              </div>
              <div className="q-row b-coral">
                <div className="q-title">Marketing</div>
                <div className="q-question">How do we bring in more of the right demand?</div>
                <div className="q-answer"><strong>Marketing:</strong> SEO, AI SEO, paid ads, social media and email marketing.</div>
              </div>
              <div className="q-row b-ink">
                <div className="q-title">People</div>
                <div className="q-question">Who runs the system day to day?</div>
                <div className="q-answer"><strong>Recruitment and staffing:</strong> Tier 1 VAs for CRM, marketing and sales support.</div>
              </div>
              <div className="q-row result">
                <div className="q-title">Growth</div>
                <div className="q-question">Leads followed up, pipeline visible, selling easier.</div>
              </div>
            </div>
            
            <p className="mt" style={{maxWidth: "74ch"}}>A client might come to us for a CRM cleanup. The same diagnosis often shows where automation, marketing or an extra pair of hands would make the most difference next, and we can support that stage too.</p>
          </div>
        </section>

        <section className="rule-top" id="what-we-do">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">What Sage Kite does</span>
              <h2>Consulting, CRM, marketing and people, under one relationship</h2>
              <p className="lede mt">Most engagements begin with a scoped, fixed-price project. Where it helps, they continue into maintenance, staffing or an ongoing marketing plan, each with its own clearly stated terms.</p>
            </div>
            
            <ul className="svc-list mt-large">
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--sage)"}}></div>
                <div className="svc-kind">Core</div>
                <div>
                  <h3>CRM consulting<br/>and implementation</h3>
                </div>
                <div className="svc-body">
                  <p>For businesses whose CRM is missing, messy or no longer fits how they sell. We design the pipeline and ownership rules, clean and migrate data where feasible, build platform-native workflows, then test, train and hand over.</p>
                  <p className="mt"><strong>Also:</strong> <a href="https://glasspane.pages.dev/services/custom-crm-development" className="text-link" style={{display: "inline-block", fontSize: ".95rem", marginLeft: "4px"}}>custom CRM development</a> when a platform cannot fit the sales process.</p>
                  <a href="https://glasspane.pages.dev/services/crm-implementation" className="text-link mt" style={{display: "inline-block"}}>Explore CRM implementation</a>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--butter)"}}></div>
                <div className="svc-kind">Strategy</div>
                <div>
                  <h3>Business growth consulting</h3>
                </div>
                <div className="svc-body">
                  <p>For businesses that need a clear diagnosis before spending more on tools or campaigns. Recommended outputs include a growth diagnosis, priorities, an implementation roadmap and guidance on marketing decisions.</p>
                  <p className="mt"><strong>Includes:</strong> GTM consultancy, AI consultancy and fractional CMO support.</p>
                  <a href="https://glasspane.pages.dev/services/consultancy" className="text-link mt" style={{display: "inline-block"}}>Explore growth consulting</a>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--coral)"}}></div>
                <div className="svc-kind">Demand</div>
                <div>
                  <h3>Marketing</h3>
                </div>
                <div className="svc-body">
                  <p>Ongoing marketing built around your priorities, and connected to a CRM that can show what each channel produced.</p>
                  <p className="mt"><strong>Includes:</strong> SEO and AI SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing.</p>
                  <a href="https://glasspane.pages.dev/services/marketing" className="text-link mt" style={{display: "inline-block"}}>Explore marketing services</a>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--ink)"}}></div>
                <div className="svc-kind">People</div>
                <div>
                  <h3>Recruitment and staffing</h3>
                </div>
                <div className="svc-body">
                  <p>Tier 1 virtual assistants for growth and automation work, so the systems you invest in are maintained and used every day.</p>
                  <p className="mt"><strong>Roles:</strong> CRM and automation VA, marketing operations VA, email marketing VA, and lead generation and sales support VA.</p>
                  <a href="https://glasspane.pages.dev/services/recruitment-staffing" className="text-link mt" style={{display: "inline-block"}}>Explore VA staffing</a>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--dark-sage)"}}></div>
                <div className="svc-kind">Agencies</div>
                <div>
                  <h3>White-label delivery</h3>
                </div>
                <div className="svc-body">
                  <p>Agreed services fulfilled for marketing agencies under the agency's own brand, with scope, communication and handover defined for each engagement.</p>
                  <a href="https://glasspane.pages.dev/for-agencies" className="text-link mt" style={{display: "inline-block"}}>White-label delivery for agencies</a>
                </div>
              </li>
            </ul>
            
            <div className="svc-footer mt-large" style={{borderTop: "1px solid var(--light-sage)"}}>
              <div className="svc-kind" style={{paddingLeft: "0", fontWeight: "600", fontSize: "1.4rem", color: "var(--dark-sage)"}}>After handover</div>
              <div className="svc-body" style={{gridColumn: "3 / 5"}}>
                <p>Maintenance with a defined support scope, including clear ownership and boundaries for changes, so the system keeps working as the business changes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top" id="who">
          <div className="wrap who-grid">
            <div>
              <span className="label">Who Sage Kite is for</span>
              <h2>Built for SMEs whose growth has outgrown their systems</h2>
              <p className="mt">Sage Kite serves small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand that need to fix one part of their growth operation, or coordinate all of it.</p>
              
              <p className="mt">You may recognise the situation:</p>
              <ul className="check-list">
                <li>A CRM is in place, but the team works around it.</li>
                <li>Marketing runs, but nobody can say what it produced.</li>
                <li>Follow-up depends on whoever has time that week.</li>
                <li>The next step is clear, but nobody has the hours to take it.</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{fontSize: "1.6rem", marginBottom: "24px", fontFamily: "var(--serif)", color: "var(--ink)"}}>Growth systems by industry</h3>
              <ul className="industry-grid">
                <li>
                  <a href="https://glasspane.pages.dev/industries/real-estate">
                    <strong>Real estate</strong>
                    <span className="mt" style={{display: "block"}}>Lead ownership, agent follow-up and pipeline visibility.</span>
                  </a>
                </li>
                <li>
                  <a href="https://glasspane.pages.dev/industries/home-services">
                    <strong>Home services</strong>
                    <span className="mt" style={{display: "block"}}>Enquiry handling, quote follow-up and repeat work.</span>
                  </a>
                </li>
                <li>
                  <a href="https://glasspane.pages.dev/industries/coaching">
                    <strong>Coaches and course businesses</strong>
                    <span className="mt" style={{display: "block"}}>Enquiries, enrolment and audience nurturing.</span>
                  </a>
                </li>
                <li>
                  <a href="https://glasspane.pages.dev/industries/law-firms">
                    <strong>Law firms</strong>
                    <span className="mt" style={{display: "block"}}>Client intake and consultation follow-up.</span>
                  </a>
                </li>
                <li>
                  <a href="https://glasspane.pages.dev/industries/fitness-wellness">
                    <strong>Fitness and wellness</strong>
                    <span className="mt" style={{display: "block"}}>Trial enquiries, membership conversion and retention.</span>
                  </a>
                </li>
                <li>
                  <a href="https://glasspane.pages.dev/industries/nonprofits">
                    <strong>Nonprofits</strong>
                    <span className="mt" style={{display: "block"}}>Donor records, segmentation and follow-up.</span>
                  </a>
                </li>
              </ul>
              <p className="mt" style={{fontSize: ".95rem", color: "var(--ink)"}}>Run a marketing agency? <a href="https://glasspane.pages.dev/for-agencies" className="text-link">See how white-label delivery works</a>.</p>
            </div>
          </div>
        </section>

        <section className="tint" id="platforms">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "none"}}>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(40px, 6vw, 96px)", alignItems: "start"}}>
                <div>
                  <span className="label">Platforms</span>
                  <h2 style={{marginTop: "8px", fontSize: "clamp(2rem, 3.5vw, 2.5rem)"}}>We work inside the systems your business already runs on</h2>
                </div>
                <p className="mt" style={{maxWidth: "45ch", fontSize: "1.1rem", lineHeight: "1.5", marginTop: "32px"}}>Sage Kite implements and improves CRMs and the industry platforms many SMEs depend on. Every engagement starts by confirming what is feasible on your account and what access we need.</p>
              </div>
            </div>
            
            <div className="mt-large" style={{borderTop: "1px solid var(--light-sage)"}}>
              <div className="plat-grid">
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Cross-industry</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>GoHighLevel</li>
                    <li>Keap</li>
                    <li>Custom CRM development</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Real estate</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Follow Up Boss</li>
                    <li>Lofty</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Home services</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>ServiceTitan</li>
                    <li>Housecall Pro</li>
                    <li>Jobber</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Coaches and course businesses</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Kajabi</li>
                  </ul>
                </div>
              </div>
              
              <div className="plat-grid">
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Law firms</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Clio Grow</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Service businesses</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Dubsado</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Fitness and wellness</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Mindbody</li>
                  </ul>
                </div>
                <div>
                  <span style={{display: "block", fontSize: "0.75rem", marginBottom: "8px", fontWeight: "600", color: "var(--sage)"}}>Nonprofits</span>
                  <ul style={{listStyle: "none", margin: 0, padding: 0, fontSize: "1.05rem", fontFamily: "var(--serif)", color: "var(--ink)", lineHeight: "1.6"}}>
                    <li>Bloomerang</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="mt" style={{fontSize: "0.85rem", marginTop: "24px"}}>Groupings reflect common use, not a limit on who each platform serves. GoHighLevel implementation is delivered with GHL Scale Up.</p>
            <a href="https://glasspane.pages.dev/platforms" className="text-link mt" style={{display: "inline-block", fontSize: "0.85rem", marginTop: "16px"}}>Browse the platforms we support</a>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">How we work</span>
              <h2>What working with Sage Kite looks like</h2>
              <p className="lede mt">Clear scope before any work starts, one accountable contact during it, and a system your team understands when it ends.</p>
            </div>
            
            <ul className="steps mt-large">
              <li>
                <span className="num">01</span>
                <h3>Discovery</h3>
                <p>We look at your current process, the outcome you want, access, constraints and who makes the decision, then confirm whether we are the right fit.</p>
              </li>
              <li>
                <span className="num">02</span>
                <h3>Scoped proposal</h3>
                <p>Deliverables, exclusions, milestones, dependencies, acceptance criteria and a fixed project price, agreed in writing.</p>
              </li>
              <li>
                <span className="num">03</span>
                <h3>Implementation</h3>
                <p>One accountable contact. We build the agreed scope and test it before it goes live.</p>
              </li>
              <li>
                <span className="num">04</span>
                <h3>Handover</h3>
                <p>Training for your team, so everyone knows how the system works and who owns what.</p>
              </li>
              <li>
                <span className="num">05</span>
                <h3>Maintenance</h3>
                <p>A defined ongoing support scope, with clear ownership and boundaries for changes.</p>
              </li>
              <li>
                <span className="num fade">06</span>
                <h3>Ongoing marketing, if it helps</h3>
                <p>Where the project reveals a growth opportunity, we can recommend a marketing plan built on what we found. It is optional.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="rule-top" id="evidence">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Work and experience</span>
              <h2>Evidence, shown with its context</h2>
              <p className="lede mt">Each example will state its origin, what the specialist did, the delivery period and the basis for any result. Sample builds will be labelled as demonstrations. Numbers we cannot support will not appear here.</p>
            </div>
            
            <div className="proof-grid mt-large">
              {/* Card 1 */}
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", boxShadow: "10px 10px 0 var(--coral)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(224, 122, 95, 0.2)", alignSelf: "flex-start"}}>Funnel and follow-up repair</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified case example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Context</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and starting situation]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution]</dd>
                  </div>
                  <div>
                    <dt>Result and its basis</dt>
                    <dd style={{color: "var(--sage)"}}>[Only if verified]</dd>
                  </div>
                </dl>
                
                <div className="proof-origin">
                  <span style={{color: "var(--sage)"}}>[Origin label, e.g. previous work by a Sage Kite delivery specialist]</span>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", boxShadow: "10px 10px 0 var(--sky)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(138, 182, 214, 0.2)", alignSelf: "flex-start"}}>Search visibility</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified case example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Context</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and starting situation]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution]</dd>
                  </div>
                  <div>
                    <dt>Result and its basis</dt>
                    <dd style={{color: "var(--sage)"}}>[Only if verified]</dd>
                  </div>
                </dl>
                
                <div className="proof-origin">
                  <span style={{color: "var(--sage)"}}>[Origin label and delivery period]</span>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", boxShadow: "10px 10px 0 var(--butter)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(244, 211, 94, 0.2)", alignSelf: "flex-start"}}>Growth across markets</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified case example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Context</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and starting situation]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution]</dd>
                  </div>
                  <div>
                    <dt>Result and its basis</dt>
                    <dd style={{color: "var(--sage)"}}>[Only if verified]</dd>
                  </div>
                </dl>
                
                <div className="proof-origin">
                  <span style={{color: "var(--sage)"}}>[Origin label and publication permission]</span>
                </div>
              </div>
            </div>
            
            <a href="https://glasspane.pages.dev/work" className="text-link mt-large" style={{display: "inline-block", fontWeight: "600", color: "var(--ink)"}}>See work and specialist experience</a>
          </div>
        </section>

        <section className="library" id="journal" style={{paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)"}}>
          <div className="wrap">
            <div className="lib-head">
              <div>
                <span className="label">The Sage Kite Library</span>
                <h2 className="thesis" style={{fontSize: "clamp(2rem, 3.5vw, 2.8rem)"}}>Thinking in public about how selling is changing</h2>
              </div>
              <p className="lede" style={{opacity: 0.9}}>Building became cheap. Distribution did not.</p>
              <p className="mt" style={{fontSize: "1.05rem", lineHeight: "1.6", opacity: 0.9}}>The Library is where Sage Kite works through what that means for marketing, CRM and selling: essays, field notes and practical guides, written to be useful whether or not you ever hire us.</p>
            </div>
            
            <div className="lib-grid mt-large">
              <article className="feature">
                <span className="proof-topic" style={{backgroundColor: "transparent", color: "var(--sage)", padding: 0, alignSelf: "flex-start"}}>Founder's Thoughts</span>
                <h3>[First published article title]</h3>
                <p style={{color: "var(--sage)"}}>[Short introduction, taken from the published article]</p>
                <div className="byline">
                  <p style={{color: "var(--ink)", marginBottom: "4px"}}>Occasional essays by Aryan, Sage Kite's founder.</p>
                  <p style={{color: "var(--sage)", fontSize: "0.85rem"}}>[Publication date]</p>
                </div>
              </article>
              
              <ul className="streams">
                <li className="stream" style={{borderLeftColor: "var(--sage)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>Growth systems</h3>
                  <p style={{color: "var(--sage)"}}>Why do funnels, teams and processes fail between interest and revenue?</p>
                </li>
                <li className="stream" style={{borderLeftColor: "var(--coral)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>Automation and CRM</h3>
                  <p style={{color: "var(--sage)"}}>Where should the system route, respond and hand off to a human?</p>
                </li>
                <li className="stream" style={{borderLeftColor: "var(--sky)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>Search and discovery</h3>
                  <p style={{color: "var(--sage)"}}>How do SEO, answer engine optimisation and AI citations shape demand?</p>
                </li>
                <li className="stream" style={{borderLeftColor: "var(--butter)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>AI and distribution</h3>
                  <p style={{color: "var(--sage)"}}>How do attention and selling change when building becomes abundant?</p>
                </li>
                <li className="stream" style={{borderLeftColor: "var(--ink)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>Teams and staffing</h3>
                  <p style={{color: "var(--sage)"}}>Which roles become more valuable, and how should teams be designed now?</p>
                </li>
                <li className="stream" style={{borderLeftColor: "var(--light-sage)"}}>
                  <h3 style={{fontFamily: "var(--serif)"}}>Field notes</h3>
                  <p style={{color: "var(--sage)"}}>What did real work reveal that a generic playbook would miss?</p>
                </li>
              </ul>
            </div>
            
            <div className="lib-foot mt-large" style={{marginTop: "48px"}}>
              <a className="text-link" href="https://glasspane.pages.dev/library" style={{textDecoration: "underline", textUnderlineOffset: "4px", fontWeight: "600"}}>Read the Sage Kite Library</a>
              <a className="text-link" href="https://glasspane.pages.dev/founder" style={{textDecoration: "underline", textUnderlineOffset: "4px", fontWeight: "600"}}>Read Founder's Thoughts</a>
            </div>
          </div>
        </section>

        <section id="agencies" style={{borderBottom: "1px solid var(--light-sage)", paddingBottom: "clamp(56px, 8vw, 80px)"}}>
          <div className="wrap">
            <div className="agency-band">
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", margin: 0}}>For marketing<br />agencies</h2>
              <p style={{margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "var(--ink)", maxWidth: "45ch"}}>Sage Kite fulfils agreed services for agencies under the agency's brand. Scope, client communication, project ownership and handover are defined for each engagement before work begins.</p>
              <a className="text-link" href="https://glasspane.pages.dev/agencies" style={{fontWeight: "600", fontSize: "0.9rem"}}>Explore white-label delivery</a>
            </div>
          </div>
        </section>

        <section id="faq" style={{paddingTop: "clamp(56px, 8vw, 80px)"}}>
          <div className="wrap">
            <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3rem)", marginBottom: "48px"}}>Sage Kite, in brief</h2>
            
            <div className="qa">
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>What does Sage Kite do?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Sage Kite is a CRM consultancy-led growth company. It diagnoses problems in how a business handles leads, follow-up and sales, then delivers the CRM implementation, marketing automation, marketing, growth consulting and specialist VA support needed to fix them.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Who does Sage Kite work with?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Is Sage Kite a CRM software company?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>No. Sage Kite is a consultancy and delivery partner. It works in established platforms such as GoHighLevel, Keap and Follow Up Boss, and builds custom CRMs around a client's sales process where that fits better.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>How are projects priced?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Implementation projects are scoped after a discovery call and delivered at a fixed price set out in the proposal. Maintenance, staffing and ongoing marketing have their own terms.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tint" id="contact" style={{borderBottom: "4px solid var(--butter)", paddingBottom: "clamp(56px, 8vw, 80px)"}}>
          <div className="wrap final-inner" style={{alignItems: "center"}}>
            <div className="final">
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3.2rem)", marginBottom: "24px"}}>Start with what is<br />happening to your leads.</h2>
              <p className="lede" style={{color: "var(--ink)"}}>Tell us how enquiries arrive, where they go and what happens next. A discovery call is where we work out what to look at first, and whether Sage Kite is the right fit.</p>
            </div>
            <div className="cta-col" style={{alignItems: "flex-start", gap: "24px"}}>
              <a className="btn" href="https://glasspane.pages.dev/contact" style={{backgroundColor: "var(--coral)", color: "var(--ink)", borderColor: "var(--coral)"}}>Book a discovery call</a>
              <a className="text-link" href="https://glasspane.pages.dev/insights" style={{fontWeight: "600", fontSize: "0.95rem"}}>Or read the Library first</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{borderTop: "4px solid var(--butter)", paddingBottom: "44px", paddingTop: "44px"}}>
        <div className="wrap foot-grid">
          
          <div className="foot-brand" style={{paddingRight: "clamp(40px, 8vw, 120px)"}}>
            <a className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" />
            </a>
            <p style={{color: "var(--ink)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "24px"}}>CRM consulting, implementation, marketing automation, marketing and specialist support for SMEs, plus white-label delivery for agencies. Make selling easier.</p>
          </div>
          
          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Services</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "3px"}}>
              <li><a href="https://glasspane.pages.dev/services/crm-implementation" style={{color: "var(--ink)", fontSize: "1.05rem"}}>CRM implementation</a></li>
              <li><a href="https://glasspane.pages.dev/services/custom-crm-development" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Custom CRM development</a></li>
              <li><a href="https://glasspane.pages.dev/services/consultancy" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Growth consulting</a></li>
              <li><a href="https://glasspane.pages.dev/services/marketing" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Marketing</a></li>
              <li><a href="https://glasspane.pages.dev/services/recruitment-staffing" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Recruitment and staffing</a></li>
              <li><a href="https://glasspane.pages.dev/for-agencies" style={{color: "var(--ink)", fontSize: "1.05rem"}}>White-label delivery</a></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Explore</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "3px"}}>
              <li><a href="https://glasspane.pages.dev/platforms" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Platforms</a></li>
              <li><a href="https://glasspane.pages.dev/industries" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Industries</a></li>
              <li><a href="https://glasspane.pages.dev/work" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Work</a></li>
              <li><a href="https://glasspane.pages.dev/insights" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Insights</a></li>
              <li><a href="https://glasspane.pages.dev/insights/founders-thoughts" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Founder's Thoughts</a></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Company</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "3px"}}>
              <li><a href="https://glasspane.pages.dev/about" style={{color: "var(--ink)", fontSize: "1.05rem"}}>About</a></li>
              <li><a href="https://glasspane.pages.dev/contact" style={{color: "var(--ink)", fontSize: "1.05rem"}}>Contact</a></li>
              <li><a href="https://glasspane.pages.dev/privacy" style={{color: "var(--ink)", fontSize: "1.05rem"}}>[Privacy policy]</a></li>
              <li><a href="https://glasspane.pages.dev/terms" style={{color: "var(--ink)", fontSize: "1.05rem"}}>[Terms]</a></li>
            </ul>
          </div>

        </div>
        
        <div className="wrap">
          <div className="legal" style={{borderTop: "1px solid var(--light-sage)", marginTop: "44px", paddingTop: "14px", display: "flex", justifyContent: "space-between", color: "var(--ink)", fontSize: "0.85rem"}}>
            <p>© {new Date().getFullYear()} Sage Kite. [Registered legal entity and details]</p>
            <p>Streamlined systems for growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
