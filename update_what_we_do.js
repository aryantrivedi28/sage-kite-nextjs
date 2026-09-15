const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section className="rule-top" id="what-we-do">');
const endTag = '</section>';
const endIndex = code.indexOf(endTag, startIndex);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end bounds.");
    process.exit(1);
}

const newSection = `<section className="rule-top" id="what-we-do">
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
            
            <div className="svc mt-large" style={{borderBottom: "none", borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <div className="svc-kind" style={{paddingLeft: "0", color: "var(--ink)"}}>After handover</div>
              <div></div>
              <div className="svc-body">
                <p>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
              </div>
            </div>
          </div>
`;

code = code.substring(0, startIndex) + newSection + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated what-we-do section successfully.");
