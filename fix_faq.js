const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change initial state to 1
content = content.replace(
  /const \[openFaq, setOpenFaq\] = useState<number \| null>\(null\);/,
  'const [openFaq, setOpenFaq] = useState<number | null>(1);'
);

// 2. Fix the CSS
const newCss = `
        /* FAQ Accordion */
        .faq-grid { display: grid; grid-template-columns: 0.6fr 1fr; gap: clamp(40px, 8vw, 80px); }
        .faq-item { border-bottom: 1px solid var(--light-sage); margin-bottom: 4px; }
        .faq-item:first-of-type { border-top: 1px solid var(--light-sage); }
        
        .faq-btn {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 24px 32px;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          color: var(--ink);
          text-align: left;
        }
        .faq-btn:hover { background: rgba(0,0,0,0.015); transform: translateX(4px); }
        .faq-btn:focus-visible { outline: 2px solid var(--sage); outline-offset: 2px; }
        
        .faq-btn h3 { font-size: 1.35rem; font-family: var(--serif); color: inherit; margin: 0; line-height: 1.4; pointer-events: none; }
        .faq-icon { font-size: 1.5rem; color: var(--sage); display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; font-weight: 300; pointer-events: none; }
        
        .faq-a-wrapper { display: grid; transition: grid-template-rows 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.35s ease; padding: 0 32px; }
        .faq-a-inner { overflow: hidden; }
        .faq-a-content { padding-top: 8px; padding-bottom: 24px; font-size: 1.05rem; line-height: 1.6; color: var(--dark-sage); }
        
        .faq-sticky { position: sticky; top: 120px; align-self: start; }
        
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; gap: 48px; }
          .faq-btn { padding: 20px 16px; }
          .faq-a-wrapper { padding: 0 16px; }
          .faq-sticky { position: relative !important; top: 0 !important; }
        }
        
        @media (max-width: 768px) {
          #faq {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          #faq .wrap {
            padding: 0 24px !important;
            box-sizing: border-box;
            width: 100%;
          }
          .faq-sticky h2 {
            font-size: clamp(42px, 12vw, 50px) !important;
            word-wrap: break-word;
          }
        }
`;

// Remove old FAQ CSS blocks manually using regex to prevent duplicates
content = content.replace(/\/\* FAQ Accordion \*\/[\s\S]*?@media \(max-width: 900px\) \{[\s\S]*?\.faq-item \{ padding: 20px 16px; \}\n        \}/, newCss);


// 3. Replace HTML
const oldHtmlRegex = /\{\/\* FAQ \*\/\}.*?<section className="reveal-new" id="faq" style=\{\{ padding: "clamp\(60px, 8vw, 100px\) 0" \}\}>.*?<\/section>/s;

const newHtml = `{/* FAQ */}
        <section className="reveal-new" id="faq" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
          <div className="wrap faq-grid">
            
            {/* Left Column - Intro & Visual */}
            <div className="faq-sticky">
              <span className="label" style={{ marginBottom: "20px", display: "block" }}>In brief</span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 4vw, 3.2rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: "40px" }}>Sage Kite,<br/>explained plainly</h2>
              
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
              <div className="faq-item">
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  aria-expanded={openFaq === 1}
                  aria-controls="faq-content-1"
                >
                  <h3>What is Sage Kite?</h3>
                  <div className="faq-icon">{openFaq === 1 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-1" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 1 ? "1fr" : "0fr", opacity: openFaq === 1 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="faq-item">
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  aria-expanded={openFaq === 2}
                  aria-controls="faq-content-2"
                >
                  <h3>What does Sage Kite do?</h3>
                  <div className="faq-icon">{openFaq === 2 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-2" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 2 ? "1fr" : "0fr", opacity: openFaq === 2 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>It advises on growth through GTM consultancy, AI consultancy and fractional CMO support; implements CRM systems and automation; runs marketing; and provides specialist virtual assistants to operate those systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="faq-item">
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  aria-expanded={openFaq === 3}
                  aria-controls="faq-content-3"
                >
                  <h3>Does Sage Kite implement as well as advise?</h3>
                  <div className="faq-icon">{openFaq === 3 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-3" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 3 ? "1fr" : "0fr", opacity: openFaq === 3 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Yes. Implementation projects are scoped after discovery and delivered at a fixed price, followed by handover and optional maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="faq-item">
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  aria-expanded={openFaq === 4}
                  aria-controls="faq-content-4"
                >
                  <h3>Is Sage Kite a CRM company or a marketing agency?</h3>
                  <div className="faq-icon">{openFaq === 4 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-4" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 4 ? "1fr" : "0fr", opacity: openFaq === 4 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Neither. CRM and marketing are two of the capabilities Sage Kite uses, alongside consultancy, automation and specialist people, to make growth work as one system.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="faq-item">
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                  aria-expanded={openFaq === 5}
                  aria-controls="faq-content-5"
                >
                  <h3>Who does Sage Kite work with?</h3>
                  <div className="faq-icon">{openFaq === 5 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-5" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 5 ? "1fr" : "0fr", opacity: openFaq === 5 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>SMEs in the United States, Canada, Europe, Australia and New Zealand, and marketing agencies that need a white-label delivery partner.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="faq-item" style={{ borderBottom: "none" }}>
                <button 
                  className="faq-btn" 
                  onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                  aria-expanded={openFaq === 6}
                  aria-controls="faq-content-6"
                >
                  <h3>How do I start?</h3>
                  <div className="faq-icon">{openFaq === 6 ? "−" : "+"}</div>
                </button>
                <div id="faq-content-6" className="faq-a-wrapper" style={{ gridTemplateRows: openFaq === 6 ? "1fr" : "0fr", opacity: openFaq === 6 ? 1 : 0 }}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">
                      <p style={{ margin: 0 }}>Book a discovery call. It covers your current process, the outcome you want and whether Sage Kite is the right fit.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>`;

if (oldHtmlRegex.test(content)) {
  content = content.replace(oldHtmlRegex, newHtml);
  fs.writeFileSync(file, content);
  console.log('Successfully replaced FAQ HTML.');
} else {
  console.log('Regex did not match FAQ HTML. Exiting.');
}
