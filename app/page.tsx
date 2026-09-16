"use client";

import { useState } from "react";
import Link from "next/link";

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
              <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="#platforms" onClick={() => setMenuOpen(false)}>Platforms</Link></li>
              <li><Link href="#industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="#agencies" onClick={() => setMenuOpen(false)}>For agencies</Link></li>
              <li><Link href="#insights" onClick={() => setMenuOpen(false)}>Insights</Link></li>
              <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
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
              <div className="label">Business growth consultancy</div>
              <h1>Growth works when the <span className="u">systems, people<br/>and execution</span><br/>behind it do.</h1>
              <p className="lede">Sage Kite is a business growth consultancy for small and medium-sized businesses. We find what is holding growth back, then help fix it: shaping the strategy, implementing CRM and automation, running marketing and providing specialist people to keep the work moving.</p>
              <p className="sub"><i>Most businesses do not lack tools or ideas. They lack the connection between them.</i></p>
              
              <div className="cta-row">
                <a className="btn" href="https://wa.me/message/C22YQ52VUDLCA1">Book a discovery call</a>
                <Link className="text-link" href="#what-we-do">See how Sage Kite works</Link>
              </div>
            </div>

                        <figure className="equation" aria-label="What Sage Kite brings together">
              <h2>What Sage Kite brings together</h2>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--sky)' }}>
                <strong>Systems</strong>
                <span>CRM, automation, AI and the workflows between them</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--ink)' }}>
                <strong>People</strong>
                <span>Specialist VAs who operate and improve those systems</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--coral)' }}>
                <strong>Execution</strong>
                <span>Consultancy, implementation and ongoing marketing</span>
              </div>
              
              <div className="op">=</div>
              
              <div className="eq-part" style={{ backgroundColor: 'var(--dark-sage)', color: 'var(--warm-white)', border: 'none' }}>
                <strong style={{ color: 'var(--warm-white)' }}>Growth</strong>
                <span style={{ color: 'var(--warm-white)' }}>A growth operation that works as one</span>
              </div>
              <figcaption>The Sage Kite model: systems, people and execution, working together.</figcaption>
            </figure>
          </div>
        </section>

        <section className="rule-top reveal" id="problem">
          <div className="wrap split">
            <div className="split-head">
              <span className="label">Why growth stalls</span>
              <h2>Growth rarely stalls for one reason. It stalls in the gaps between things.</h2>
              <p className="mt">Marketing, sales tools, processes and people are usually bought, hired or started at different times. Each part may work on its own. The trouble is that nothing connects them, so leads, information and effort leak out between them.</p>
            </div>
            
            <ul className="rows">
              <li>
                <h3>The tools are there, but underused</h3>
                <p>A CRM was bought and never properly set up. Features that would save hours sit untouched, and the team works around the system instead of through it.</p>
              </li>
              <li>
                <h3>Marketing and sales do not talk to each other</h3>
                <p>Campaigns bring in enquiries that nobody follows up consistently, so it becomes impossible to tell which spend is producing customers.</p>
              </li>
              <li>
                <h3>Too much of the work is manual</h3>
                <p>Follow-ups, updates and reports depend on someone remembering. Repetitive work crowds out the work that actually grows the business.</p>
              </li>
              <li>
                <h3>The strategy is clear, the execution is not</h3>
                <p>The business knows what it should be doing. Nobody has the time or specialist skill to do it consistently.</p>
              </li>
              <li>
                <h3>The founder is carrying the operation</h3>
                <p>Decisions, fixes and follow-ups route through one or two people, and growth slows to the pace they can manage.</p>
              </li>
            </ul>
          </div>
        </section>

                <section className="tint reveal" id="approach">
          <div className="wrap approach-intro">
            <div>
              <span className="label">The Sage Kite approach</span>
              <h2>Business growth consulting that carries on past the advice</h2>
              <p className="mt">Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            
            <p className="pull">Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
          </div>
          
          <div className="wrap">
            <div className="pillars">
              <div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '-12px 12px 0 var(--sky)' }}>
                <div className="pillar-kind">How work moves</div>
                <h3>Systems</h3>
                <p>Systems are how work moves through a business: how enquiries are captured, where customer information lives, what happens automatically and what needs a person.</p>
                <ul>
                  <li>CRM setup, pipeline design and cleanup</li>
                  <li>Customer journeys and follow-up workflows</li>
                  <li>Marketing automation inside your CRM platform</li>
                  <li>AI consultancy on where AI can reduce repetitive work</li>
                  <li>Custom CRM development where a platform does not fit</li>
                </ul>
                <Link href="#what-we-do" className="text-link">Explore CRM implementation</Link>
              </div>

              <div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '12px 12px 0 var(--ink)' }}>
                <div className="pillar-kind">Who runs it</div>
                <h3>People</h3>
                <p>People operate and improve the system every day. A well-built CRM still needs someone to keep records clean, run campaigns and follow up with leads.</p>
                <ul>
                  <li>CRM and automation VA</li>
                  <li>Marketing operations VA</li>
                  <li>Email marketing VA</li>
                  <li>Social media VA</li>
                  <li>Lead generation and sales support VA</li>
                </ul>
                <Link href="#what-we-do" className="text-link">Explore specialist staffing</Link>
              </div>

              <div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '12px 12px 0 var(--coral)' }}>
                <div className="pillar-kind">What gets done</div>
                <h3>Execution</h3>
                <p>Execution turns a plan and a system into results over time: the consultancy, the implementation projects and the marketing that continues after launch.</p>
                <ul>
                  <li>GTM consultancy and fractional CMO support</li>
                  <li>Fixed-price CRM implementation projects</li>
                  <li>SEO and AI SEO</li>
                  <li>Google Ads, Meta Ads and LinkedIn Ads</li>
                  <li>Email marketing, social media and maintenance</li>
                </ul>
                <Link href="#what-we-do" className="text-link">Explore marketing services</Link>
              </div>
            </div>
            <p className="together">These are not three departments. A system without people falls out of use; people without a system repeat the same manual work; execution without either rarely lasts. Sage Kite scopes all three around the same commercial goal.</p>
          </div>
        </section>

        <section className="reveal" id="operation">
          <div className="wrap split connect-grid">
            <div className="split-head">
              <span className="label">How it connects</span>
              <h2>How CRM, marketing, AI and automation work together</h2>
              <p className="mt">Each capability does a different job. Growth depends on how well those jobs hand over to one another.</p>
              
              <div className="def-block">
                <h3>What is a growth system?</h3>
                <p>A growth system is the connected set of tools, processes and people a business uses to attract, convert and keep customers. When the parts are connected, each one makes the others more effective.</p>
              </div>
            </div>
            
            <ul className="chain">
              <li style={{ '--dot': 'var(--butter)' } as React.CSSProperties}>
                <div className="node">Consultancy<small>Direction</small></div>
                <p>Decides what needs to change, in what order, and how it connects to the commercial goal.</p>
              </li>
              <li style={{ '--dot': 'var(--coral)' } as React.CSSProperties}>
                <div className="node">Marketing<small>Demand</small></div>
                <p>Brings in the right enquiries through search, AI search, paid ads, social media and email.</p>
              </li>
              <li style={{ '--dot': 'var(--sage)' } as React.CSSProperties}>
                <div className="node">CRM<small>Relationships</small></div>
                <p>Holds customer information, sales processes and follow-up in one place, so every opportunity has an owner and a next step.</p>
              </li>
              <li style={{ '--dot': 'var(--sky)' } as React.CSSProperties}>
                <div className="node">Automation and AI<small>Leverage</small></div>
                <p>Automation moves work forward without anyone having to remember. Applied carefully, AI reduces repetitive work so teams do more with the resources they have.</p>
              </li>
              <li style={{ '--dot': 'var(--ink)' } as React.CSSProperties}>
                <div className="node">People<small>Capability</small></div>
                <p>Specialists operate the system day to day and improve it as the business learns.</p>
              </li>
              <li className="result" style={{ '--dot': 'var(--butter)' } as React.CSSProperties}>
                <div className="node">Growth<small>The outcome</small></div>
                <p>Enquiries followed up, marketing that can be measured, less manual work and a business that is easier to sell from.</p>
              </li>
            </ul>
          </div>
        </section>

<section className="rule-top reveal" id="what-we-do">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Services</span>
              <h2>Five service areas, scoped around one growth operation</h2>
              <p className="lede mt">A client may need one of these or several. Most engagements begin with a scoped, fixed-price project and continue into maintenance, staffing or marketing where it is useful, each with its own clearly stated terms.</p>
            </div>
            
            <ul className="svc-list mt-large">
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--butter)"}}></div>
                <div className="svc-kind">Direction</div>
                <div>
                  <h3>Consultancy</h3>
                </div>
                <div className="svc-body">
                  <p>For businesses that need clarity before they spend more on tools, campaigns or hires. Recommended outputs include a growth diagnosis, priorities, an implementation roadmap and guidance on marketing decisions.</p>
                  <p className="mt"><strong>Includes:</strong> GTM consultancy, AI consultancy and fractional CMO support.</p>
                  <Link href="https://glasspane.pages.dev/services/consultancy" className="text-link mt" style={{display: "inline-block"}}>Explore business growth consulting</Link>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--sky)"}}></div>
                <div className="svc-kind">Systems</div>
                <div>
                  <h3>CRM implementation</h3>
                </div>
                <div className="svc-body">
                  <p>For businesses whose CRM is missing, messy or no longer fits how they sell. Setup, pipeline design, cleanup, feasible migrations, platform-native workflows, testing, training and handover.</p>
                  <p className="mt"><strong>Also:</strong> <Link href="https://glasspane.pages.dev/services/custom-crm-development" className="text-link">custom CRM development</Link> built around your sales process and reporting needs.</p>
                  <Link href="https://glasspane.pages.dev/services/crm-implementation" className="text-link mt" style={{display: "inline-block"}}>Explore CRM implementation services</Link>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--coral)"}}></div>
                <div className="svc-kind">Execution</div>
                <div>
                  <h3>Marketing</h3>
                </div>
                <div className="svc-body">
                  <p>An ongoing marketing plan built around your priorities and connected to the systems that show what each channel produced.</p>
                  <p className="mt"><strong>Includes:</strong> <Link href="https://glasspane.pages.dev/services/marketing#seo" className="text-link">SEO</Link>, <Link href="https://glasspane.pages.dev/services/marketing#ai-seo" className="text-link">AI SEO</Link>, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing.</p>
                  <Link href="https://glasspane.pages.dev/services/marketing" className="text-link mt" style={{display: "inline-block"}}>Explore marketing services</Link>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--ink)"}}></div>
                <div className="svc-kind">People</div>
                <div>
                  <h3>Recruitment and staffing</h3>
                </div>
                <div className="svc-body">
                  <p>Tier 1 virtual assistants for growth and automation work, so the systems a business invests in are used and maintained every day.</p>
                  <p className="mt"><strong>Roles:</strong> CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support.</p>
                  <Link href="https://glasspane.pages.dev/services/recruitment-staffing" className="text-link mt" style={{display: "inline-block"}}>Explore recruitment and staffing</Link>
                </div>
              </li>
              
              <li className="svc">
                <div className="svc-rail" style={{backgroundColor: "var(--sage)"}}></div>
                <div className="svc-kind">Agencies</div>
                <div>
                  <h3>White-label delivery</h3>
                </div>
                <div className="svc-body">
                  <p>Agreed services fulfilled for marketing agencies under the agency's own brand, with scope, communication and handover defined for each engagement.</p>
                  <Link href="https://glasspane.pages.dev/for-agencies" className="text-link mt" style={{display: "inline-block"}}>Explore white-label delivery</Link>
                </div>
              </li>
            </ul>
            
            <div className="maint mt-large" style={{borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <b>After handover</b>
              <p style={{margin: 0}}>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
            </div>
          </div>
</section>

        <section className="tint reveal" id="who">
          <div className="wrap split">
            <div className="split-head">
              <span className="label">Who Sage Kite helps</span>
              <h2>For SMEs whose growth has become harder to manage</h2>
              <p className="mt">Sage Kite works with small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand that need to improve one part of their growth operation, or bring the whole function together.</p>
            </div>
            
            <div>
              <h3 style={{fontSize: "1.35rem", marginBottom: "24px"}}>It is usually a good fit when:</h3>
              <ul className="check-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0 40px" }}>
                <li>Growth has become messy and hard to see clearly</li>
                <li>Your systems do not talk to each other</li>
                <li>The CRM is underused or distrusted</li>
                <li>Marketing is disconnected from sales</li>
                <li>Too much work is done by hand</li>
                <li>Tools were bought but never properly implemented</li>
                <li>The team lacks operational capacity</li>
                <li>The founder is carrying too much of the operation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="reveal" id="platforms">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Platforms and industries</span>
              <h2>Start from your platform or your industry</h2>
              <p className="mt">Many businesses first come to Sage Kite with a specific tool or a problem particular to their sector. Those pages go deeper. The same approach to systems, people and execution sits behind each one.</p>
            </div>
            
            <div className="routes-grid">
              <div>
                <h3 style={{fontSize: "1.25rem", marginBottom: "8px"}}>Platforms we implement and improve</h3>
                <p style={{fontSize: ".95rem", lineHeight: "1.5"}}>We work in established CRMs and industry systems. Every engagement starts by confirming what is feasible on your account.</p>
                <dl className="plat-list">
                  <div>
                    <dt>Cross-industry</dt>
                    <dd>GoHighLevel, Keap, custom CRM development</dd>
                  </div>
                  <div>
                    <dt>Real estate</dt>
                    <dd>Follow Up Boss, Lofty</dd>
                  </div>
                  <div>
                    <dt>Home services</dt>
                    <dd>ServiceTitan, Housecall Pro, Jobber</dd>
                  </div>
                  <div>
                    <dt>Coaching and courses</dt>
                    <dd>Kajabi</dd>
                  </div>
                  <div>
                    <dt>Law firms</dt>
                    <dd>Clio Grow</dd>
                  </div>
                  <div>
                    <dt>Service businesses</dt>
                    <dd>Dubsado</dd>
                  </div>
                  <div>
                    <dt>Fitness and wellness</dt>
                    <dd>Mindbody</dd>
                  </div>
                  <div>
                    <dt>Nonprofits</dt>
                    <dd>Bloomerang</dd>
                  </div>
                </dl>
                <p className="route-foot">Groupings reflect common use, not a limit on who each platform serves. GoHighLevel implementation is delivered with GHL Scale Up. <Link href="https://glasspane.pages.dev/platforms" className="text-link">Browse supported platforms</Link></p>
              </div>
              
              <div>
                <h3 style={{fontSize: "1.25rem", marginBottom: "8px"}}>Industries we focus on</h3>
                <p style={{fontSize: ".95rem", lineHeight: "1.5"}}>Each industry page explains the customer journey in that market and the services that support it.</p>
                <div className="industry-grid">
                  <Link href="https://glasspane.pages.dev/industries/real-estate">
                    <strong>Real estate</strong>
                    <span>Lead ownership, agent follow-up and pipeline visibility</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/home-services">
                    <strong>Home services</strong>
                    <span>Enquiry handling, quote follow-up and repeat work</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/coaching">
                    <strong>Coaches and course businesses</strong>
                    <span>Enquiries, enrolment and audience nurturing</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/law-firms">
                    <strong>Law firms</strong>
                    <span>Client intake and consultation follow-up</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/fitness-wellness">
                    <strong>Fitness and wellness</strong>
                    <span>Trial enquiries, membership conversion and retention</span>
                  </Link>
                  <Link href="https://glasspane.pages.dev/industries/nonprofits">
                    <strong>Nonprofits</strong>
                    <span>Donor records, segmentation and follow-up</span>
                  </Link>
                </div>
                <Link href="https://glasspane.pages.dev/industries" className="text-link" style={{display: "inline-block", fontSize: ".95rem", marginTop: "24px"}}>See all industries</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top reveal" id="process">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">How we work</span>
              <h2>From first conversation to ongoing work</h2>
              <p className="lede mt">Clear scope before work starts, one accountable contact while it happens, and defined terms for whatever continues afterwards.</p>
            </div>
            
            <ul className="steps mt-large">
              <li>
                <span className="num">01</span>
                <h3>Enquiry</h3>
                <p>Tell us about your business, your current platform and the problem you want to solve.</p>
              </li>
              <li>
                <span className="num">02</span>
                <h3>Discovery</h3>
                <p>We look at your current process, desired outcome, access, constraints and decision-maker, and confirm we are the right fit.</p>
              </li>
              <li>
                <span className="num">03</span>
                <h3>Proposal</h3>
                <p>Deliverables, exclusions, milestones, dependencies, acceptance criteria and a fixed project price.</p>
              </li>
              <li>
                <span className="num">04</span>
                <h3>Implementation</h3>
                <p>One accountable contact. We deliver the agreed scope and test it before it goes live.</p>
              </li>
              <li>
                <span className="num">05</span>
                <h3>Handover</h3>
                <p>Training so your team understands how the system works and who owns what.</p>
              </li>
              <li>
                <span className="num">06</span>
                <h3>Maintenance</h3>
                <p>A defined ongoing support scope, with clear ownership and boundaries for changes.</p>
              </li>
              <li>
                <span className="num">07</span>
                <h3>Ongoing work</h3>
                <p>Where it helps, an ongoing marketing plan or specialist staffing, built on what the project revealed.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="tint reveal" id="evidence">
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Work and experience</span>
              <h2>Evidence, shown with its context</h2>
              <p className="lede mt">Each example will state its origin, what the specialist did, the delivery period and the basis for any result. Sample builds will be labelled as demonstrations. Numbers that cannot be supported will not appear here.</p>
            </div>
            
            <div className="proof-grid mt-large">
              {/* Card 1 */}
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", borderTop: "1px solid var(--light-sage)", boxShadow: "8px 8px 0 var(--sky)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(138, 182, 214, 0.2)", alignSelf: "flex-start"}}>Systems</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Starting situation</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution and work completed]</dd>
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
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", borderTop: "1px solid var(--light-sage)", boxShadow: "8px 8px 0 var(--coral)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(224, 122, 95, 0.2)", alignSelf: "flex-start"}}>Execution</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Starting situation</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution and work completed]</dd>
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
              <div className="proof" style={{display: "flex", flexDirection: "column", height: "100%", borderTop: "1px solid var(--light-sage)", boxShadow: "8px 8px 0 var(--butter)"}}>
                <span className="proof-topic" style={{backgroundColor: "rgba(239, 199, 94, 0.2)", alignSelf: "flex-start"}}>People</span>
                <h3 style={{fontSize: "1.25rem", marginBottom: "24px"}}>[Verified example to be added]</h3>
                
                <dl style={{display: "flex", flexDirection: "column", gap: "16px", flex: 1}}>
                  <div>
                    <dt>Starting situation</dt>
                    <dd style={{color: "var(--sage)"}}>[Business type and problem]</dd>
                  </div>
                  <div>
                    <dt>Specialist's role</dt>
                    <dd style={{color: "var(--sage)"}}>[Contribution and work completed]</dd>
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
            <Link href="https://glasspane.pages.dev/work" className="text-link mt-large" style={{display: "inline-block", fontSize: ".95rem"}}>See work and specialist experience</Link>
          </div>
        </section>

        <section className="library reveal" id="journal" style={{paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)"}}>
          <div className="wrap">
            <div className="lib-head">
              <div>
                <span className="label">The Sage Kite Library</span>
                <h2 className="thesis" style={{fontSize: "clamp(2rem, 3.5vw, 2.8rem)"}}>We write about how growth actually works</h2>
              </div>
              <div style={{opacity: 0.9, maxWidth: "55ch"}}>
                <p style={{fontSize: "1.35rem", fontFamily: "var(--serif)", lineHeight: "1.4", color: "var(--warm-white)"}}>Building became cheap. Distribution did not.</p>
                <p className="mt" style={{fontSize: "1.05rem", lineHeight: "1.6", marginTop: "16px"}}>The Library is where Sage Kite thinks in public about marketing, systems, AI and selling: essays, field notes and practical guides, written to be useful whether or not you ever work with us.</p>
              </div>
            </div>
            
            <div className="lib-grid mt-large">
              <article className="feature">
                <span className="proof-topic" style={{backgroundColor: "transparent", color: "var(--sage)", padding: 0, alignSelf: "flex-start", marginBottom: "24px", display: "inline-block", fontSize: "0.85rem", fontWeight: "600"}}>Founder's Thoughts</span>
                <h3>[First published article title]</h3>
                <p>[Short introduction from the published article]</p>
                <div className="byline">
                  <p style={{color: "var(--ink)", marginBottom: "4px"}}>Occasional essays by Aryan, Sage Kite's founder.</p>
                  <p style={{color: "var(--sage)"}}>[Publication date]</p>
                </div>
              </article>
              
              <ul className="streams" style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px", margin: 0, padding: 0, listStyle: "none"}}>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--sage)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>Growth systems</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>Why do funnels, teams and processes fail between interest and revenue?</p>
                </li>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--coral)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>Automation and CRM</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>Where should a system route, respond and hand off to a person?</p>
                </li>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--sky)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>Search and discovery</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>How do SEO, answer engines and AI citations shape demand?</p>
                </li>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--butter)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>AI and distribution</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>How do attention and selling change when building becomes abundant?</p>
                </li>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--ink)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>Teams and staffing</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>Which roles become more valuable, and how should teams be designed now?</p>
                </li>
                <li className="stream" style={{borderLeft: "none", borderTop: "4px solid var(--light-sage)", padding: "20px 24px"}}>
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px"}}>Field notes</h3>
                  <p style={{color: "var(--dark-sage)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0}}>What did real work reveal that a generic playbook would miss?</p>
                </li>
              </ul>
            </div>
            
            <div className="lib-foot mt-large" style={{marginTop: "48px"}}>
              <Link href="https://glasspane.pages.dev/insights" className="text-link" style={{color: "var(--warm-white)", marginRight: "24px"}}>Read the Sage Kite Library</Link>
              <Link href="https://glasspane.pages.dev/insights/founders-thoughts" className="text-link" style={{color: "var(--warm-white)"}}>Read Founder's Thoughts</Link>
            </div>
          </div>
        </section>

        <section className="reveal" id="agencies" style={{paddingTop: "clamp(56px, 8vw, 80px)", paddingBottom: "clamp(56px, 8vw, 80px)"}}>
          <div className="wrap">
            <div className="agency-band" style={{backgroundColor: "var(--pale-sage)"}}>
              <h2 style={{fontFamily: "var(--serif)", margin: 0, color: "var(--ink)"}}>For marketing<br />agencies</h2>
              <p style={{margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "var(--ink)", maxWidth: "45ch"}}>Agencies can use Sage Kite for specialist white-label fulfilment. We deliver agreed services under your brand, with scope, client communication, project ownership and handover defined before work begins.</p>
              <Link className="text-link" href="https://glasspane.pages.dev/for-agencies" style={{fontWeight: "600", fontSize: "0.9rem"}}>White-label delivery for agencies</Link>
            </div>
          </div>
        </section>

        <section className="rule-top reveal" id="faq" style={{paddingTop: "clamp(56px, 8vw, 80px)", paddingBottom: "clamp(64px, 8vw, 96px)"}}>
          <div className="wrap">
            <div style={{marginBottom: "48px"}}>
              <span className="label">In brief</span>
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3rem)", marginTop: "12px", color: "var(--ink)"}}>Sage Kite, explained plainly</h2>
            </div>
            
            <div className="qa">
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>What is Sage Kite?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>What does Sage Kite do?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>It advises on growth through GTM consultancy, AI consultancy and fractional CMO support; implements CRM systems and automation; runs marketing; and provides specialist virtual assistants to operate those systems.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Does Sage Kite implement as well as advise?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Yes. Implementation projects are scoped after discovery and delivered at a fixed price, followed by handover and optional maintenance.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Is Sage Kite a CRM company or a marketing agency?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Neither. CRM and marketing are two of the capabilities Sage Kite uses, alongside consultancy, automation and specialist people, to make growth work as one system.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>Who does Sage Kite work with?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>SMEs in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
              </div>
              <div>
                <h3 style={{fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: "12px", color: "var(--dark-sage)"}}>How do I start?</h3>
                <p style={{margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--ink)"}}>Book a discovery call. It covers your current process, the outcome you want and whether Sage Kite is the right fit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tint reveal" id="contact" style={{borderBottom: "4px solid var(--butter)", paddingTop: "clamp(64px, 8vw, 96px)", paddingBottom: "clamp(64px, 8vw, 96px)"}}>
          <div className="wrap final-inner" style={{alignItems: "center"}}>
            <div className="final">
              <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(2.3rem, 4vw, 3.2rem)", marginBottom: "24px", color: "var(--ink)", lineHeight: "1.1"}}>Tell us where growth<br />is getting stuck.</h2>
              <p className="lede" style={{color: "var(--ink)"}}>It might be the CRM, the marketing, the manual work or the lack of hands to do it. A discovery call is where we work out what to look at first, and whether Sage Kite is the right partner.</p>
            </div>
            <div className="cta-col" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px"}}>
              <Link className="btn" href="https://glasspane.pages.dev/contact" style={{backgroundColor: "var(--coral)", color: "var(--ink)", borderColor: "var(--coral)"}}>Book a discovery call</Link>
              <Link className="text-link" href="https://glasspane.pages.dev/insights" style={{fontWeight: "600", fontSize: "0.95rem"}}>Or read the Library first</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{paddingBottom: "44px", paddingTop: "64px"}}>
        <div className="wrap foot-grid">
          
          <div className="foot-brand" style={{paddingRight: "clamp(40px, 8vw, 120px)"}}>
            <Link className="logo" href="/" aria-label="Sage Kite home">
              <img src="/sage-kite-logo-transparent.png" alt="Sage Kite logo" style={{maxWidth: "180px"}} />
            </Link>
            <p style={{color: "var(--ink)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "24px"}}>Sage Kite is a business growth consultancy. We improve the systems, people and execution behind growth for SMEs, and deliver white-label work for agencies.</p>
          </div>
          
          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Services</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/services/consultancy" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Business growth consulting</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/crm-implementation" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>CRM implementation</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/custom-crm-development" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Custom CRM development</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/marketing" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Marketing</Link></li>
              <li><Link href="https://glasspane.pages.dev/services/recruitment-staffing" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Recruitment and staffing</Link></li>
              <li><Link href="https://glasspane.pages.dev/for-agencies" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>White-label delivery</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Explore</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/platforms" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Platforms</Link></li>
              <li><Link href="https://glasspane.pages.dev/industries" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Industries</Link></li>
              <li><Link href="https://glasspane.pages.dev/work" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Work</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Insights</Link></li>
              <li><Link href="https://glasspane.pages.dev/insights/founders-thoughts" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Founder's Thoughts</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{color: "var(--sage)", marginBottom: "24px", fontWeight: "600", fontSize: "1.1rem"}}>Company</h2>
            <ul style={{display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0}}>
              <li><Link href="https://glasspane.pages.dev/about" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>About</Link></li>
              <li><Link href="https://glasspane.pages.dev/contact" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>Contact</Link></li>
              <li><Link href="https://glasspane.pages.dev/privacy" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>[Privacy policy]</Link></li>
              <li><Link href="https://glasspane.pages.dev/terms" style={{color: "var(--ink)", fontSize: "0.95rem", textDecoration: "none"}}>[Terms]</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="wrap">
          <div className="legal" style={{borderTop: "1px solid var(--light-sage)", marginTop: "44px", paddingTop: "24px", display: "flex", justifyContent: "space-between", color: "var(--ink)", fontSize: "0.85rem"}}>
            <p style={{margin: 0}}>© [Year] Sage Kite. [Registered legal entity and details]</p>
            <p style={{margin: 0}}>Streamlined systems for growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
