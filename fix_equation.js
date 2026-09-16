const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /<div className="eq-layout-grid".*?<\/figure>\s*<\/div>/s;

const replacement = `<div className="eq-layout-grid" style={{ display: "grid", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
              <div style={{ width: "100%", position: "relative" }}>
                 <img src="/sage-kite-growth-workflow.jpeg" alt="Sage Kite growth workflow" style={{ width: "100%", borderRadius: "14px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 32px rgba(0,0,0,0.03)", objectFit: "cover", aspectRatio: "16/10" }} />
              </div>

              <figure className="equation" aria-label="What Sage Kite brings together" style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <h2 style={{ fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "24px" }}>What Sage Kite brings together</h2>
                
                <div className="eq-part" style={{ width: "88%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--sky)', padding: '20px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Systems</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>CRM, automation, AI and the workflows between them</span>
                </div>
                
                <div className="op" style={{ width: "88%", color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "20px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "88%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--ink)', padding: '20px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>People</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Specialist VAs who operate and improve those systems</span>
                </div>
                
                <div className="op" style={{ width: "88%", color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "20px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "88%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--coral)', padding: '20px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Execution</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Consultancy, implementation and ongoing marketing</span>
                </div>
                
                <div className="op" style={{ width: "88%", color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "20px 0" }}>=</div>
                
                <div className="eq-part" style={{ width: "88%", backgroundColor: 'var(--ink)', border: "1px solid var(--ink)", padding: "20px 24px", borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", color: 'var(--warm-white)', fontFamily: "var(--serif)" }}>Growth</strong>
                  <span style={{ fontSize: "0.95rem", color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, display: "block" }}>A growth operation that works as one</span>
                </div>
                <figcaption className="sr-only" style={{ display: "none" }}>The Sage Kite model: systems, people and execution, working together.</figcaption>
              </figure>
            </div>`;

content = content.replace(targetRegex, replacement);

fs.writeFileSync(file, content);
console.log('Successfully applied card sizing and spacing fixes.');
