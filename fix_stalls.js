const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHtmlRegex = /\{\/\* 3\. WHY GROWTH STALLS \*\/\}.*?<section className="reveal-new" id="problem" style=\{\{ padding: "clamp\(80px, 10vw, 120px\) 0", borderTop: "1px solid var\(--light-sage\)" \}\}>.*?<\/section>/s;

const newHtml = `{/* 3. WHY GROWTH STALLS */}
        <section className="reveal-new stall-section" id="problem" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)" }}>
          <div className="wrap stall-grid">
            <div className="stall-sticky">
              <span className="label" style={{ marginBottom: "24px" }}>Why growth stalls</span>
              <h2 className="stall-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "32px", fontFamily: "var(--serif)" }}>Growth rarely stalls for one reason. It stalls in the gaps between things.</h2>
              <p className="mt stall-intro" style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--dark-sage)" }}>Marketing, sales tools, processes and people are usually bought, hired or started at different times. Each part may work on its own. The trouble is that nothing connects them, so leads, information and effort leak out between them.</p>
            </div>
            
            <ul className="stall-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
              <li className="prob-item">
                <div className="prob-num">01</div>
                <h3 className="prob-title">The tools are there, but underused</h3>
                <p className="prob-desc">A CRM was bought and never properly set up. Features that would save hours sit untouched, and the team works around the system instead of through it.</p>
              </li>
              <li className="prob-item">
                <div className="prob-num">02</div>
                <h3 className="prob-title">Marketing and sales do not talk to each other</h3>
                <p className="prob-desc">Campaigns bring in enquiries that nobody follows up consistently, so it becomes impossible to tell which spend is producing customers.</p>
              </li>
              <li className="prob-item">
                <div className="prob-num">03</div>
                <h3 className="prob-title">Too much of the work is manual</h3>
                <p className="prob-desc">Follow-ups, updates and reports depend on someone remembering. Repetitive work crowds out the work that actually grows the business.</p>
              </li>
              <li className="prob-item">
                <div className="prob-num">04</div>
                <h3 className="prob-title">The strategy is clear, the execution is not</h3>
                <p className="prob-desc">The business knows what it should be doing. Nobody has the time or specialist skill to do it consistently.</p>
              </li>
              <li className="prob-item" style={{ borderBottom: "none" }}>
                <div className="prob-num">05</div>
                <h3 className="prob-title">The founder is carrying the operation</h3>
                <p className="prob-desc">Decisions, fixes and follow-ups route through one or two people, and growth slows to the pace they can manage.</p>
              </li>
            </ul>
          </div>
        </section>`;

// CSS additions
const css = `
        /* Why Growth Stalls Responsive */
        .stall-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: clamp(40px, 8vw, 100px); }
        .stall-sticky { position: sticky; top: 120px; align-self: start; }
        .prob-num { display: none; } /* Hidden on desktop by default as per existing design */
        .prob-title { font-size: 1.3rem; margin-bottom: 12px; color: var(--ink); font-family: var(--serif); line-height: 1.4; }
        .prob-desc { color: var(--dark-sage); line-height: 1.6; margin: 0; }
        
        @media (max-width: 768px) {
          .stall-section {
            padding: clamp(60px, 8vw, 80px) 0 !important;
            width: 100%;
            box-sizing: border-box;
          }
          .stall-section .wrap {
            padding: 0 24px !important;
            width: 100%;
            box-sizing: border-box;
          }
          .stall-grid {
            grid-template-columns: 1fr;
            gap: 48px; /* Introduction to Problem list */
          }
          .stall-sticky {
            position: relative !important;
            top: 0 !important;
          }
          .stall-heading {
            font-size: clamp(44px, 12vw, 52px) !important;
            line-height: 1.05 !important;
            max-width: 100% !important;
            margin-bottom: 24px !important;
            word-wrap: break-word;
          }
          .stall-intro {
            font-size: 17px !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
          }
          .prob-item {
            padding: 40px 0 !important;
            border-left: none !important;
            border-bottom: 1px solid var(--light-sage);
            border-radius: 0 !important;
            transform: none !important;
            box-shadow: none !important;
          }
          .prob-item:first-of-type {
            padding-top: 0 !important;
          }
          .prob-item::before {
            display: none !important;
          }
          .prob-num {
            display: block;
            font-size: 14px;
            color: var(--ink);
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: 0.05em;
          }
          .prob-title {
            font-size: clamp(24px, 7vw, 30px) !important;
            margin-bottom: 12px !important;
          }
          .prob-desc {
            font-size: 16px !important;
            line-height: 1.6 !important;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

if (oldHtmlRegex.test(content)) {
  content = content.replace(oldHtmlRegex, newHtml);
  fs.writeFileSync(file, content);
  console.log('Successfully applied Why growth stalls responsive fixes.');
} else {
  console.log('Regex did not match.');
}
