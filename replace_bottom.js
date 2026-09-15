const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section className="rule-top" id="who">');
const endIndex = code.indexOf('<section className="rule-top" id="evidence">');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end bounds.");
    process.exit(1);
}

const newSections = `<section className="tint" id="who">
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

        <section id="platforms">
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

        <section className="tint" id="process">
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

        `;

code = code.substring(0, startIndex) + newSections + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated who, platforms, and process sections successfully.");
