const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section className="rule-top" id="evidence">');
const endIndex = code.indexOf('<section className="library" id="journal"');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds for evidence.");
    process.exit(1);
}

const newSection = `<section className="rule-top" id="evidence">
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

        `;

code = code.substring(0, startIndex) + newSection + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated evidence section successfully.");
