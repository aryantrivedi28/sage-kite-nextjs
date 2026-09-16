const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add state variable
if (!content.includes('const [openFaq, setOpenFaq] = useState<number | null>(null);')) {
  content = content.replace(
    /const \[openService, setOpenService\] = useState<number \| null>\(0\);/,
    'const [openService, setOpenService] = useState<number | null>(0);\n  const [openFaq, setOpenFaq] = useState<number | null>(null);'
  );
}

// 2. Add FAQ styles to the CSS block
const faqCss = `
        /* FAQ Accordion */
        .faq-grid { display: grid; grid-template-columns: 0.7fr 1fr; gap: clamp(40px, 8vw, 80px); }
        .faq-item { border-bottom: 1px solid var(--light-sage); cursor: pointer; transition: all 0.3s ease; padding: 24px 32px; border-radius: 8px; margin-bottom: 4px; }
        .faq-item:first-of-type { border-top: 1px solid var(--light-sage); }
        .faq-item:hover { background: rgba(0,0,0,0.015); transform: translateX(4px); }
        .faq-q { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .faq-q h3 { font-size: 1.35rem; font-family: var(--serif); color: var(--ink); margin: 0; line-height: 1.4; transition: color 0.3s ease; }
        .faq-icon { font-size: 1.5rem; color: var(--sage); transition: transform 0.3s ease; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; font-weight: 300; }
        .faq-a-wrapper { display: grid; transition: grid-template-rows 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.35s ease; }
        .faq-a-inner { overflow: hidden; }
        .faq-a-content { padding-top: 16px; padding-bottom: 8px; font-size: 1.05rem; line-height: 1.6; color: var(--dark-sage); }
        
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; gap: 48px; }
          .faq-item { padding: 20px 16px; }
        }
`;
if (!content.includes('.faq-grid {')) {
  content = content.replace('      <style dangerouslySetInnerHTML={{__html: `', '      <style dangerouslySetInnerHTML={{__html: `' + faqCss);
}

// 3. Replace the FAQ section HTML
const targetRegex = /\{\/\* FAQ \*\/\}.*?\{\/\* FINAL CTA \*\/\}/s;

const replacement = `{/* FAQ */}
        <section className="reveal-new" id="faq" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
          <div className="wrap faq-grid">
            
            {/* Left Column - Intro & Visual */}
            <div style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <span className="label" style={{ marginBottom: "20px", display: "block" }}>In brief</span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 4vw, 3.2rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: "40px", maxWidth: "12ch" }}>Sage Kite, explained plainly</h2>
              
              {/* Subtle visual element: Abstract System Workflow */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", opacity: 0.8 }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--sky)", background: "transparent" }}></div>
                <div style={{ height: "1px", width: "40px", backgroundColor: "var(--light-sage)" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--ink)", background: "var(--ink)" }}></div>
                <div style={{ height: "1px", width: "40px", backgroundColor: "var(--light-sage)" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--coral)" }}></div>
              </div>
            </div>
            
            {/* Right Column - Accordion */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              {/* Item 1 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                <div className="faq-q">
                  <h3>What is Sage Kite?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 1 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 1 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 1 ? "1fr" : "0fr", opacity: openFaq === 1 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                <div className="faq-q">
                  <h3>What does Sage Kite do?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 2 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 2 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 2 ? "1fr" : "0fr", opacity: openFaq === 2 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>It advises on growth through GTM consultancy, AI consultancy and fractional CMO support; implements CRM systems and automation; runs marketing; and provides specialist virtual assistants to operate those systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                <div className="faq-q">
                  <h3>Does Sage Kite implement as well as advise?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 3 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 3 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 3 ? "1fr" : "0fr", opacity: openFaq === 3 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Yes. Implementation projects are scoped after discovery and delivered at a fixed price, followed by handover and optional maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                <div className="faq-q">
                  <h3>Is Sage Kite a CRM company or a marketing agency?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 4 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 4 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 4 ? "1fr" : "0fr", opacity: openFaq === 4 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Neither. CRM and marketing are two of the capabilities Sage Kite uses, alongside consultancy, automation and specialist people, to make growth work as one system.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="faq-item" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>
                <div className="faq-q">
                  <h3>Who does Sage Kite work with?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 5 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 5 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 5 ? "1fr" : "0fr", opacity: openFaq === 5 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>SMEs in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="faq-item" style={{ borderBottom: "none" }} onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}>
                <div className="faq-q">
                  <h3>How do I start?</h3>
                  <div className="faq-icon" style={{ transform: openFaq === 6 ? "rotate(180deg)" : "rotate(0deg)" }}>{openFaq === 6 ? "−" : "+"}</div>
                </div>
                <div className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 6 ? "1fr" : "0fr", opacity: openFaq === 6 ? 1 : 0.5 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Book a discovery call. It covers your current process, the outcome you want and whether Sage Kite is the right fit.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}`;

content = content.replace(targetRegex, replacement);

fs.writeFileSync(file, content);
console.log('Successfully replaced FAQ section with new accordion design.');
