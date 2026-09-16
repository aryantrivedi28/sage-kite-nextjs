const fs = require('fs');

const file = 'app/page.tsx';
const content = fs.readFileSync(file, 'utf8');

const targetSectionRegex = /\{\/\* 11\. PROCESS \*\/\}.*?\{\/\* 12\. EVIDENCE \*\/\}/s;

const newSection = `{/* 11. PROCESS */}
        <section className="reveal-new" id="process" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)", overflow: "hidden" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.05, marginBottom: "80px", fontFamily: "var(--serif)", color: "var(--ink)", maxWidth: "15ch" }}>
              From first<br />conversation to<br />ongoing work
            </h2>
            
            <div style={{ position: "relative" }}>
              {/* The continuous horizontal line */}
              <div style={{ position: "absolute", top: "12px", left: 0, width: "100%", height: "1px", background: "var(--coral)", zIndex: 1 }}></div>

              <ul className="timeline-grid" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "24px", position: "relative", zIndex: 2, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "24px" }}>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>01</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Enquiry</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>A first conversation about where growth is getting stuck.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>02</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Discovery</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>A look at the systems, the team and the work as it runs today.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>03</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Proposal</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Scope, sequence and cost, written against what discovery found.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>04</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Implementation</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>The build and the delivery, done inside your tools.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>05</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Handover</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Documentation and training so the team can run it without us.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>06</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Maintenance</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Keeping what was built working as the business changes.</p>
                </li>
                <li style={{ flex: "1 1 0", minWidth: "140px", scrollSnapAlign: "start" }}>
                  <div style={{ width: "1px", height: "25px", background: "var(--ink)", marginBottom: "16px" }}></div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ink)", marginBottom: "8px" }}>07</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--ink)" }}>Ongoing work</h3>
                  <p style={{ color: "var(--dark-sage)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>Continued delivery where it is useful, ended where it is not.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 12. EVIDENCE */}`;

const updatedContent = content.replace(targetSectionRegex, newSection);
fs.writeFileSync(file, updatedContent);
console.log('Successfully replaced "PROCESS" section.');
