const fs = require('fs');
const file = 'app/page.tsx';
const content = fs.readFileSync(file, 'utf8');

const regex = /<div style=\{\{ display: "flex", flexDirection: "column" \}\}>\s*<div className="srv-row"[\s\S]*?<\/div>\s*<\/div>\s*<div className="maint mt-large"/s;

const newSection = `<div style={{ display: "flex", flexDirection: "column", marginTop: "24px" }}>
              
              {/* Service 1: Consultancy */}
              <div className="acc-wrapper">
                <button className="acc-btn" onClick={() => setOpenService(openService === 0 ? null : 0)} aria-expanded={openService === 0}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" }}>
                    <div className="acc-info-col">
                      <div className="acc-label">Direction</div>
                    </div>
                    <div>
                      <h3 className="acc-title">Consultancy</h3>
                    </div>
                  </div>
                  <div className={\`acc-icon \${openService === 0 ? 'open' : ''}\`}>{openService === 0 ? '−' : '+'}</div>
                </button>
                <div className={\`acc-content \${openService === 0 ? 'expanded' : ''}\`}>
                  <div className="acc-inner">
                    <div className="acc-detail-wrapper">
                      <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, marginBottom: "16px" }}>For businesses that need clarity before they spend more on tools, campaigns or hires. Recommended outputs include a growth diagnosis, priorities, an implementation roadmap and guidance on marketing decisions.</p>
                      <p className="mt" style={{ color: "var(--ink)", marginBottom: "24px" }}><strong>Includes:</strong> GTM consultancy, AI consultancy and fractional CMO support.</p>
                      <Link href="https://glasspane.pages.dev/services/consultancy" className="text-link" style={{ fontWeight: 600 }}>Explore business growth consulting</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2: CRM implementation */}
              <div className="acc-wrapper">
                <button className="acc-btn" onClick={() => setOpenService(openService === 1 ? null : 1)} aria-expanded={openService === 1}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" }}>
                    <div className="acc-info-col">
                      <div className="acc-label">Systems</div>
                    </div>
                    <div>
                      <h3 className="acc-title">CRM implementation</h3>
                    </div>
                  </div>
                  <div className={\`acc-icon \${openService === 1 ? 'open' : ''}\`}>{openService === 1 ? '−' : '+'}</div>
                </button>
                <div className={\`acc-content \${openService === 1 ? 'expanded' : ''}\`}>
                  <div className="acc-inner">
                    <div className="acc-detail-wrapper">
                      <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, marginBottom: "16px" }}>For businesses whose CRM is missing, messy or no longer fits how they sell. Setup, pipeline design, cleanup, feasible migrations, platform-native workflows, testing, training and handover.</p>
                      <p className="mt" style={{ color: "var(--ink)", marginBottom: "24px" }}><strong>Also:</strong> <Link href="https://glasspane.pages.dev/services/custom-crm-development" className="text-link">custom CRM development</Link> built around your sales process and reporting needs.</p>
                      <Link href="https://glasspane.pages.dev/services/crm-implementation" className="text-link" style={{ fontWeight: 600 }}>Explore CRM implementation services</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3: Marketing */}
              <div className="acc-wrapper">
                <button className="acc-btn" onClick={() => setOpenService(openService === 2 ? null : 2)} aria-expanded={openService === 2}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" }}>
                    <div className="acc-info-col">
                      <div className="acc-label">Execution</div>
                    </div>
                    <div>
                      <h3 className="acc-title">Marketing</h3>
                    </div>
                  </div>
                  <div className={\`acc-icon \${openService === 2 ? 'open' : ''}\`}>{openService === 2 ? '−' : '+'}</div>
                </button>
                <div className={\`acc-content \${openService === 2 ? 'expanded' : ''}\`}>
                  <div className="acc-inner">
                    <div className="acc-detail-wrapper">
                      <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, marginBottom: "16px" }}>An ongoing marketing plan built around your priorities and connected to the systems that show what each channel produced.</p>
                      <p className="mt" style={{ color: "var(--ink)", marginBottom: "24px" }}><strong>Includes:</strong> <Link href="https://glasspane.pages.dev/services/marketing#seo" className="text-link">SEO</Link>, <Link href="https://glasspane.pages.dev/services/marketing#ai-seo" className="text-link">AI SEO</Link>, Google Ads, Meta Ads, LinkedIn Ads, social media management and email marketing.</p>
                      <Link href="https://glasspane.pages.dev/services/marketing" className="text-link" style={{ fontWeight: 600 }}>Explore marketing services</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 4: Recruitment and staffing */}
              <div className="acc-wrapper">
                <button className="acc-btn" onClick={() => setOpenService(openService === 3 ? null : 3)} aria-expanded={openService === 3}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" }}>
                    <div className="acc-info-col">
                      <div className="acc-label">People</div>
                    </div>
                    <div>
                      <h3 className="acc-title">Recruitment and staffing</h3>
                    </div>
                  </div>
                  <div className={\`acc-icon \${openService === 3 ? 'open' : ''}\`}>{openService === 3 ? '−' : '+'}</div>
                </button>
                <div className={\`acc-content \${openService === 3 ? 'expanded' : ''}\`}>
                  <div className="acc-inner">
                    <div className="acc-detail-wrapper">
                      <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, marginBottom: "16px" }}>Tier 1 virtual assistants for growth and automation work, so the systems a business invests in are used and maintained every day.</p>
                      <p className="mt" style={{ color: "var(--ink)", marginBottom: "24px" }}><strong>Roles:</strong> CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support.</p>
                      <Link href="https://glasspane.pages.dev/services/recruitment-staffing" className="text-link" style={{ fontWeight: 600 }}>Explore recruitment and staffing</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 5: White-label delivery */}
              <div className="acc-wrapper">
                <button className="acc-btn" onClick={() => setOpenService(openService === 4 ? null : 4)} aria-expanded={openService === 4}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" }}>
                    <div className="acc-info-col">
                      <div className="acc-label">Agencies</div>
                    </div>
                    <div>
                      <h3 className="acc-title">White-label delivery</h3>
                    </div>
                  </div>
                  <div className={\`acc-icon \${openService === 4 ? 'open' : ''}\`}>{openService === 4 ? '−' : '+'}</div>
                </button>
                <div className={\`acc-content \${openService === 4 ? 'expanded' : ''}\`}>
                  <div className="acc-inner">
                    <div className="acc-detail-wrapper">
                      <p style={{ color: "var(--dark-sage)", lineHeight: 1.6, marginBottom: "24px" }}>Agreed services fulfilled for marketing agencies under the agency's own brand, with scope, communication and handover defined for each engagement.</p>
                      <Link href="https://glasspane.pages.dev/for-agencies" className="text-link" style={{ fontWeight: 600 }}>Explore white-label delivery</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="maint mt-large"`;

const replacedContent = content.replace(regex, newSection);

if (replacedContent !== content) {
    fs.writeFileSync(file, replacedContent);
    console.log('Services accordion replaced successfully.');
} else {
    console.error('Regex did not match.');
}
