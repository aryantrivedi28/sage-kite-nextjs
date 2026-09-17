const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// We need to find the entire <section> containing the process.
// Let's use a regex that captures it.
const oldSectionRegex = /<section className="reveal-new" id="process" style=\{\{ padding: "clamp\(80px, 10vw, 120px\) 0", borderTop: "1px solid var\(--light-sage\)" \}\}>.*?<\/section>/s;

const newHtml = `<section className="reveal-new process-section" id="process" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)" }}>
          <div className="wrap">
            <h2 className="process-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.1, marginBottom: "80px", fontFamily: "var(--serif)", color: "var(--ink)" }}>
              From first<br />conversation to<br />ongoing work
            </h2>
            
            <div className="process-container">
              {/* The continuous line */}
              <div className="process-line"></div>

              <ul className="process-timeline">
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">01</div>
                  <h3 className="process-title">Enquiry</h3>
                  <p className="process-desc">A first conversation about where growth is getting stuck.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">02</div>
                  <h3 className="process-title">Discovery</h3>
                  <p className="process-desc">A look at the systems, the team and the work as it runs today.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">03</div>
                  <h3 className="process-title">Proposal</h3>
                  <p className="process-desc">Scope, sequence and cost, written against what discovery found.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">04</div>
                  <h3 className="process-title">Implementation</h3>
                  <p className="process-desc">The build and the delivery, done inside your tools.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">05</div>
                  <h3 className="process-title">Handover</h3>
                  <p className="process-desc">Documentation and training so the team can run it without us.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">06</div>
                  <h3 className="process-title">Maintenance</h3>
                  <p className="process-desc">Keeping what was built working as the business changes.</p>
                </li>
                <li className="process-item">
                  <div className="process-tick"></div>
                  <div className="process-num">07</div>
                  <h3 className="process-title">Ongoing work</h3>
                  <p className="process-desc">Continued delivery where it is useful, ended where it is not.</p>
                </li>
              </ul>
            </div>
            
          </div>
        </section>`;

// Insert the CSS globally
const css = `
        /* Process Section */
        .process-container { position: relative; width: 100%; box-sizing: border-box; }
        .process-line { position: absolute; top: 12px; left: 0; width: 100%; height: 1px; background: var(--coral); z-index: 1; }
        .process-timeline { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; position: relative; z-index: 2; overflow-x: auto; padding-bottom: 24px; }
        .process-item { flex: 1 1 0; min-width: 140px; }
        .process-tick { width: 1px; height: 25px; background: var(--ink); margin-bottom: 16px; }
        .process-num { font-size: 0.85rem; color: var(--ink); margin-bottom: 8px; }
        .process-title { font-size: 1.1rem; margin-bottom: 12px; font-family: var(--serif); color: var(--ink); }
        .process-desc { color: var(--dark-sage); font-size: 0.85rem; line-height: 1.5; margin: 0; }
        
        @media (max-width: 768px) {
          .process-section {
            padding: clamp(60px, 8vw, 80px) 0 !important;
            box-sizing: border-box;
            width: 100%;
            overflow: hidden;
          }
          .process-section .wrap {
            padding: 0 24px !important;
            box-sizing: border-box;
          }
          .process-heading {
            font-size: clamp(42px, 12vw, 50px) !important;
            word-wrap: break-word;
            margin-bottom: 56px !important;
          }
          .process-line {
            top: 8px;
            left: 5px;
            width: 1px;
            height: calc(100% - 24px); /* Don't extend past the last item completely */
          }
          .process-timeline {
            flex-direction: column;
            gap: 48px;
            overflow-x: visible;
            padding-bottom: 0;
          }
          .process-item {
            min-width: 0;
            padding-left: 32px;
            position: relative;
          }
          .process-tick {
            position: absolute;
            left: 0;
            top: 8px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: var(--warm-white);
            border: 2px solid var(--coral);
            margin: 0;
            z-index: 2;
          }
          .process-num {
            font-size: 16px !important;
            margin-bottom: 4px !important;
            font-weight: 600;
          }
          .process-title {
            font-size: 26px !important;
            margin-bottom: 8px !important;
          }
          .process-desc {
            font-size: 16px !important;
            line-height: 1.6 !important;
            max-width: 100%;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

if (oldSectionRegex.test(content)) {
  content = content.replace(oldSectionRegex, newHtml);
  fs.writeFileSync(file, content);
  console.log('Successfully applied Process timeline mobile fixes.');
} else {
  console.log('Regex did not match the Process section.');
}
