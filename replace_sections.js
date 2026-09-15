const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section className="tint" id="crm-consulting">');
const endIndex = code.indexOf('<section className="rule-top" id="what-we-do">');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end bounds.");
    process.exit(1);
}

const newSections = `        <section className="tint" id="approach">
          <div className="wrap split">
            <div>
              <span className="label">The Sage Kite approach</span>
              <h2>Business growth consulting that carries on past the advice</h2>
              <p className="mt">Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            
            <p className="pull">Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
          </div>
          
          <div className="wrap">
            <div className="pillars">
              <div className="pillar" style={{ borderTopColor: 'var(--sky)' }}>
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

              <div className="pillar" style={{ borderTopColor: 'var(--ink)' }}>
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

              <div className="pillar" style={{ borderTopColor: 'var(--coral)' }}>
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

        <section id="operation">
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

`;

code = code.substring(0, startIndex) + newSections + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated sections successfully.");
