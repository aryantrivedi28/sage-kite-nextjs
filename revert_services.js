const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Ensure state variable exists
if (!content.includes('const [openService, setOpenService]')) {
    content = content.replace(
        'const [scrolled, setScrolled] = useState(false);',
        'const [scrolled, setScrolled] = useState(false);\n  const [openService, setOpenService] = useState<number | null>(null);'
    );
}

// 2. Replace the modified services section with the original one with accordion added
const targetSectionRegex = /\{\/\* 7\. SERVICES \*\/\}.*?\{\/\* 8\/9\. PHOTO 3 & SMEs \*\/\}/s;

const newSection = `{/* 7. SERVICES */}
        <section className="rule-top reveal-new" id="what-we-do" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap">
            <div className="section-head" style={{maxWidth: "70ch"}}>
              <span className="label">Services</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)" }}>Five service areas, scoped around one growth operation</h2>
              <p className="lede mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>A client may need one of these or several. Most engagements begin with a scoped, fixed-price project and continue into maintenance, staffing or marketing where it is useful, each with its own clearly stated terms.</p>
            </div>
            
            <ul className="svc-list mt-large">
              <li className="svc" onClick={() => setOpenService(openService === 0 ? null : 0)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--butter)"}}></div>
                <div className="svc-kind">Direction</div>
                <div>
                  <h3>Consultancy</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 0 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 0 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "16px" }}>
                        <p>For businesses that need clarity before they spend more on tools, campaigns or hires. Recommended outputs include a growth diagnosis, priorities, an implementation roadmap and guidance on marketing decisions.</p>
                        <p className="mt"><strong>Includes:</strong> GTM consultancy, AI consultancy and fractional CMO support.</p>
                        <Link href="https://glasspane.pages.dev/services/consultancy" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore business growth consulting</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 1 ? null : 1)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--sky)"}}></div>
                <div className="svc-kind">Systems</div>
                <div>
                  <h3>CRM implementation</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 1 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 1 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "16px" }}>
                        <p>For businesses whose CRM is missing, messy or no longer fits how they sell. Setup, pipeline design, cleanup, feasible migrations, platform-native workflows, testing, training and handover.</p>
                        <p className="mt"><strong>Also:</strong> <Link href="https://glasspane.pages.dev/services/custom-crm-development" className="text-link" onClick={e => e.stopPropagation()}>custom CRM development</Link> built around your sales process and reporting needs.</p>
                        <Link href="https://glasspane.pages.dev/services/crm-implementation" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore CRM implementation services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 2 ? null : 2)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--coral)"}}></div>
                <div className="svc-kind">Execution</div>
                <div>
                  <h3>Marketing</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 2 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 2 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "16px" }}>
                        <p>An ongoing marketing plan built around your priorities and connected to the systems that show what each channel produced.</p>
                        <p className="mt"><strong>Includes:</strong> <Link href="https://glasspane.pages.dev/services/marketing#seo" className="text-link" onClick={e => e.stopPropagation()}>SEO</Link>, <Link href="https://glasspane.pages.dev/services/marketing#ai-seo" className="text-link" onClick={e => e.stopPropagation()}>AI SEO</Link>, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing.</p>
                        <Link href="https://glasspane.pages.dev/services/marketing" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore marketing services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 3 ? null : 3)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--ink)"}}></div>
                <div className="svc-kind">People</div>
                <div>
                  <h3>Recruitment and staffing</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 3 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 3 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "16px" }}>
                        <p>Tier 1 virtual assistants for growth and automation work, so the systems a business invests in are used and maintained every day.</p>
                        <p className="mt"><strong>Roles:</strong> CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support.</p>
                        <Link href="https://glasspane.pages.dev/services/recruitment-staffing" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore recruitment and staffing</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="svc" onClick={() => setOpenService(openService === 4 ? null : 4)} style={{ cursor: "pointer" }}>
                <div className="svc-rail" style={{backgroundColor: "var(--sage)"}}></div>
                <div className="svc-kind">Agencies</div>
                <div>
                  <h3>White-label delivery</h3>
                </div>
                <div className="svc-body">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--ink)", lineHeight: 1 }}>{openService === 4 ? "−" : "+"}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: openService === 4 ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingTop: "16px" }}>
                        <p>Agreed services fulfilled for marketing agencies under the agency's own brand, with scope, communication and handover defined for each engagement.</p>
                        <Link href="https://glasspane.pages.dev/for-agencies" className="text-link mt" style={{display: "inline-block"}} onClick={e => e.stopPropagation()}>Explore white-label delivery</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="maint mt-large" style={{borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <b style={{ fontSize: "1.1rem" }}>After handover</b>
              <p style={{margin: 0, color: "var(--dark-sage)", lineHeight: 1.6, maxWidth: "65ch" }}>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
            </div>
          </div>
        </section>

        {/* 8/9. PHOTO 3 & SMEs */}`;

content = content.replace(targetSectionRegex, newSection);
fs.writeFileSync(file, content);
console.log('Successfully reverted Services section back to its original layout with accordion behavior.');
