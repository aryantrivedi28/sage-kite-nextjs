const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /\{\/\* 5\. THE SAGE KITE APPROACH \*\/\}.*?\{\/\* 6\. HOW IT CONNECTS \(TIMELINE\) \*\/\}/s;

const replacement = `{/* 5. THE SAGE KITE APPROACH */}
        <section className="tint reveal-new" id="approach" style={{ padding: "clamp(120px, 12vw, 160px) 0" }}>
          
          {/* Header Grid */}
          <div className="wrap" style={{ marginBottom: "120px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 40px", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="label" style={{ marginBottom: 0, border: "none" }}>The Sage Kite approach</span>
            </div>
            <div style={{ textAlign: "center", padding: "0 20px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", lineHeight: 1.05, fontFamily: "var(--serif)", color: "var(--ink)" }}>Business growth consulting that carries on past the advice</h2>
            </div>
            
            <div style={{ textAlign: "center", padding: "0 40px" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--dark-sage)", margin: 0 }}>Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ paddingLeft: "24px", borderLeft: "2px solid var(--butter)", maxWidth: "320px" }}>
                <p style={{ fontSize: "1.1rem", fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)", margin: 0, lineHeight: 1.5 }}>Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
              </div>
            </div>
          </div>
          
          {/* Cards Grid */}
          <div className="wrap">
            <div className="approach-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 40px)" }}>
              
              <div className="clean-card" style={{ transform: "translateY(0)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sky)", marginBottom: "16px" }}>How work moves</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>Systems</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>Systems are how work moves through a business: how enquiries are captured, where customer information lives, what happens automatically and what needs a person.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>CRM setup, pipeline design and cleanup</li>
                  <li>Customer journeys and follow-up workflows</li>
                  <li>Marketing automation inside your CRM platform</li>
                  <li>AI consultancy on where AI can reduce repetitive work</li>
                  <li>Custom CRM development where a platform does not fit</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore CRM implementation</Link>
              </div>

              <div className="clean-card" style={{ transform: "translateY(48px)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "16px" }}>Who runs it</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>People</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>People operate and improve the system every day. A well-built CRM still needs someone to keep records clean, run campaigns and follow up with leads.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>CRM and automation VA</li>
                  <li>Marketing operations VA</li>
                  <li>Email marketing VA</li>
                  <li>Social media VA</li>
                  <li>Lead generation and sales support VA</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore specialist staffing</Link>
              </div>

              <div className="clean-card" style={{ transform: "translateY(96px)", background: "var(--warm-white)", borderRadius: "12px", padding: "40px 32px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 40px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral)", marginBottom: "16px" }}>What gets done</div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "24px", color: "var(--ink)" }}>Execution</h3>
                <p style={{ color: "var(--dark-sage)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>Execution turns a plan and a system into results over time: the consultancy, the implementation projects and the marketing that continues after launch.</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "var(--dark-sage)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", listStyleType: "disc" }}>
                  <li>GTM consultancy and fractional CMO support</li>
                  <li>Fixed-price CRM implementation projects</li>
                  <li>SEO and AI SEO</li>
                  <li>Google Ads, Meta Ads and LinkedIn Ads</li>
                  <li>Email marketing, social media and maintenance</li>
                </ul>
                <Link href="#what-we-do" className="text-link" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Explore marketing services</Link>
              </div>

            </div>
            
            {/* Footer Text */}
            <div style={{ marginTop: "160px", display: "flex", justifyContent: "center" }}>
              <div style={{ padding: "40px", borderTop: "1px solid var(--light-sage)", borderBottom: "1px solid var(--light-sage)", textAlign: "center", maxWidth: "800px", width: "100%" }}>
                <p className="together" style={{ fontSize: "1rem", lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>These are not three departments. A system without people falls out of use; people without a system repeat the same manual work; execution without either rarely lasts. Sage Kite scopes all three around the same commercial goal.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* 6. HOW IT CONNECTS (TIMELINE) */}`;

content = content.replace(targetRegex, replacement);

const mediaQuery = `
        @media (max-width: 900px) {
          .approach-cards-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .clean-card { transform: none !important; }
        }
`;

content = content.replace('.eq-layout-grid { grid-template-columns: 0.85fr 1fr; }', mediaQuery + '\n        .eq-layout-grid { grid-template-columns: 0.85fr 1fr; }');

fs.writeFileSync(file, content);
console.log('Successfully updated the approach section to Image 2.');
