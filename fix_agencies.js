const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldAgencies = `<section id="agencies" style={{borderBottom: "1px solid var(--light-sage)", paddingBottom: "clamp(56px, 8vw, 80px)", paddingTop: "clamp(56px, 8vw, 80px)", backgroundColor: "var(--warm-white)"}}>
          <div className="wrap">
            <div className="agency-band" style={{backgroundColor: "transparent", padding: 0}}>
              <div style={{borderLeft: "4px solid var(--sage)", padding: "40px 48px", backgroundColor: "var(--pale-sage)", borderRadius: "var(--radius)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "40px", alignItems: "center", border: "1px solid var(--light-sage)", borderLeftWidth: "6px", borderLeftColor: "var(--sage)"}}>
                <h2 style={{fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", margin: 0, color: "var(--ink)"}}>For marketing<br />agencies</h2>
                <div style={{display: "flex", gap: "40px", alignItems: "center"}}>
                  <p style={{margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "var(--ink)", maxWidth: "45ch"}}>Agencies can use Sage Kite for specialist white-label fulfilment. We deliver agreed services under your brand, with scope, client communication, project ownership and handover defined before work begins.</p>
                  <Link className="text-link" href="https://glasspane.pages.dev/for-agencies" style={{fontWeight: "600", fontSize: "0.9rem", whiteSpace: "nowrap"}}>White-label delivery for agencies</Link>
                </div>
              </div>
            </div>
          </div>
        </section>`;

const newAgencies = `<section id="agencies" style={{paddingTop: "clamp(56px, 8vw, 80px)", paddingBottom: "clamp(56px, 8vw, 80px)"}}>
          <div className="wrap">
            <div className="agency-band" style={{backgroundColor: "var(--pale-sage)"}}>
              <h2 style={{fontFamily: "var(--serif)", margin: 0, color: "var(--ink)"}}>For marketing<br />agencies</h2>
              <p style={{margin: 0, fontSize: "0.95rem", lineHeight: "1.6", color: "var(--ink)", maxWidth: "45ch"}}>Agencies can use Sage Kite for specialist white-label fulfilment. We deliver agreed services under your brand, with scope, client communication, project ownership and handover defined before work begins.</p>
              <Link className="text-link" href="https://glasspane.pages.dev/for-agencies" style={{fontWeight: "600", fontSize: "0.9rem"}}>White-label delivery for agencies</Link>
            </div>
          </div>
        </section>`;

code = code.replace(oldAgencies, newAgencies);
fs.writeFileSync('app/page.tsx', code);
console.log("Fixed agencies section to use native CSS grid for mobile responsiveness.");
