const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldSectionRegex = /\{\/\* 11\. PROCESS \*\/\}.*?<section className="reveal-new" id="process" style=\{\{ padding: "clamp\(80px, 10vw, 120px\) 0", borderTop: "1px solid var\(--light-sage\)", overflow: "hidden" \}\}>.*?<\/section>/s;

const newHtml = `{/* 11. PROCESS */}
        <section className="reveal-new process-section" id="process" style={{ padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid var(--light-sage)" }}>
          <div className="wrap">
            <h2 className="process-heading" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.05, marginBottom: "80px", fontFamily: "var(--serif)", color: "var(--ink)", maxWidth: "15ch" }}>
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

if (oldSectionRegex.test(content)) {
  content = content.replace(oldSectionRegex, newHtml);
  fs.writeFileSync(file, content);
  console.log('Successfully applied Process timeline HTML.');
} else {
  console.log('Regex did not match the Process section.');
}
