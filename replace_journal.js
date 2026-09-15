const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const startIndex = code.indexOf('<section className="library" id="journal"');
const endIndex = code.indexOf('<section id="faq"');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds for journal/agencies.");
    process.exit(1);
}

const newSections = `<section className="library" id="journal" style={{paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)"}}>
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

        <section id="agencies" style={{borderBottom: "1px solid var(--light-sage)", paddingBottom: "clamp(56px, 8vw, 80px)", paddingTop: "clamp(56px, 8vw, 80px)", backgroundColor: "var(--warm-white)"}}>
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
        </section>

        `;

code = code.substring(0, startIndex) + newSections + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated journal and agencies sections successfully.");
