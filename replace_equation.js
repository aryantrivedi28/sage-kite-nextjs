const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /<figure className="equation" aria-label="What Sage Kite brings together".*?<\/figure>/s;

const replacement = `<div className="eq-layout-grid" style={{ display: "grid", gap: "clamp(40px, 8vw, 80px)", alignItems: "center" }}>
              <div style={{ width: "100%", position: "relative" }}>
                 <img src="/sage-kite-growth-workflow.jpg" alt="Sage Kite growth workflow" style={{ width: "100%", borderRadius: "14px", border: "1px solid var(--light-sage)", boxShadow: "0 16px 32px rgba(0,0,0,0.03)", objectFit: "cover", aspectRatio: "16/10" }} />
              </div>

              <figure className="equation" aria-label="What Sage Kite brings together" style={{ margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <h2 style={{ fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dark-sage)", marginBottom: "12px" }}>What Sage Kite brings together</h2>
                
                <div className="eq-part" style={{ background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--sky)', padding: '16px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Systems</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>CRM, automation, AI and the workflows between them</span>
                </div>
                
                <div className="op" style={{ color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "0" }}>+</div>
                
                <div className="eq-part" style={{ background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--ink)', padding: '16px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>People</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Specialist VAs who operate and improve those systems</span>
                </div>
                
                <div className="op" style={{ color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "0" }}>+</div>
                
                <div className="eq-part" style={{ background: "var(--warm-white)", border: "1px solid var(--light-sage)", borderLeft: '4px solid var(--coral)', padding: '16px 24px', borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Execution</strong>
                  <span style={{ fontSize: "0.95rem", color: "var(--dark-sage)", lineHeight: 1.4, display: "block" }}>Consultancy, implementation and ongoing marketing</span>
                </div>
                
                <div className="op" style={{ color: "var(--sage)", fontSize: "1.5rem", textAlign: "center", margin: "0" }}>=</div>
                
                <div className="eq-part" style={{ backgroundColor: 'var(--ink)', border: "1px solid var(--ink)", padding: "16px 24px", borderRadius: "8px" }}>
                  <strong style={{ display: "block", fontSize: "1.15rem", marginBottom: "4px", color: 'var(--warm-white)', fontFamily: "var(--serif)" }}>Growth</strong>
                  <span style={{ fontSize: "0.95rem", color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, display: "block" }}>A growth operation that works as one</span>
                </div>
                <figcaption className="sr-only" style={{ display: "none" }}>The Sage Kite model: systems, people and execution, working together.</figcaption>
              </figure>
            </div>`;

content = content.replace(targetRegex, replacement);

// Add the eq-layout-grid media query to the styles block
const mediaQuery = `
        .eq-layout-grid { grid-template-columns: 0.85fr 1fr; }
        @media (max-width: 900px) {
          .eq-layout-grid { grid-template-columns: 1fr; }
        }
`;

content = content.replace('.timeline-grid::-webkit-scrollbar { display: none; }', mediaQuery + '\n        .timeline-grid::-webkit-scrollbar { display: none; }');

fs.writeFileSync(file, content);
console.log('Successfully replaced the equation section.');
