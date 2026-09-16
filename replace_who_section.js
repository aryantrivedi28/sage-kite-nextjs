const fs = require('fs');

const file = 'app/page.tsx';
const content = fs.readFileSync(file, 'utf8');

const targetSectionRegex = /\{\/\* 8\/9\. PHOTO 3 & SMEs \*\/\}.*?\{\/\* 10\. PLATFORMS & INDUSTRIES \*\/\}/s;

const newSection = `{/* 8/9. PHOTO 3 & SMEs */}
        <section className="tint reveal-new" id="who" style={{ padding: "clamp(80px, 10vw, 120px) 0" }}>
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 6vw, 80px)" }}>
            
            <div style={{ maxWidth: "75ch" }}>
              <span className="label" style={{ marginBottom: "24px" }}>Who Sage Kite helps</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "24px", fontFamily: "var(--serif)", color: "var(--ink)" }}>For SMEs whose growth has become harder to manage</h2>
              <p className="mt" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)", margin: 0 }}>Sage Kite works with small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand that need to improve one part of their growth operation, or bring the whole function together.</p>
            </div>
            
            <div style={{ width: "88%", marginLeft: "auto", position: "relative" }}>
               <img src="/sme_section.jpeg" alt="Small business team" style={{ width: "100%", borderRadius: "12px", border: "1px solid var(--light-sage)", objectFit: "cover", aspectRatio: "21/9" }} />
            </div>
            
            <div style={{ marginTop: "16px" }}>
              <h3 style={{fontSize: "1.1rem", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)"}}>It is usually a good fit when:</h3>
              <ul className="sme-checklist" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 64px" }}>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Growth has become messy and hard to see clearly</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Your systems do not talk to each other</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The CRM is underused or distrusted</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Marketing is disconnected from sales</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Too much work is done by hand</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>Tools were bought but never properly implemented</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The team lacks operational capacity</span></li>
                <li className="sme-item"><div style={{ color: "var(--sky)", fontSize: "1.2rem", lineHeight: 1 }}>✦</div><span style={{ color: "var(--dark-sage)", lineHeight: 1.4, fontSize: "1.05rem" }}>The founder is carrying too much of the operation</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. PLATFORMS & INDUSTRIES */}`;

const updatedContent = content.replace(targetSectionRegex, newSection);
fs.writeFileSync(file, updatedContent);
console.log('Successfully replaced "WHO SAGE KITE HELPS" section.');
