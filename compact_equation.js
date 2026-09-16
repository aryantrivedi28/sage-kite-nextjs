const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /<figure className="equation" aria-label="What Sage Kite brings together".*?<\/figure>/s;

const replacement = `<figure className="equation" aria-label="What Sage Kite brings together" style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "4px" }}>
                <h2 style={{ fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink)", marginBottom: "16px", fontFamily: "var(--serif)" }}>What Sage Kite brings together</h2>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--sky)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Systems</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>CRM, automation, AI and the workflows between them</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--ink)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>People</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Specialist VAs who operate and improve those systems</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>+</div>
                
                <div className="eq-part" style={{ width: "92%", background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--coral)', padding: '16px 20px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Execution</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Consultancy, implementation and ongoing marketing</span>
                </div>
                
                <div className="op" style={{ width: "92%", color: "var(--ink)", fontSize: "1.2rem", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>=</div>
                
                <div className="eq-part" style={{ width: "92%", backgroundColor: 'var(--ink)', border: "1px solid var(--ink)", padding: "16px 20px", borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", color: 'var(--warm-white)', fontFamily: "var(--serif)" }}>Growth</strong>
                  <span style={{ fontSize: "0.95rem", color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, display: "block" }}>A growth operation that works as one</span>
                </div>
              </figure>`;

content = content.replace(targetRegex, replacement);
fs.writeFileSync(file, content);
console.log('Successfully applied compact heights and sizing to the equation section.');
