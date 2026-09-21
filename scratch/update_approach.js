const fs = require('fs');

// 1. Update page.tsx
let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Journey \/ Our approach \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Journey / Our approach */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={\`head \${styles['approach-head']}\`}>
              <div className="label">Our approach</div>
              <h2 style={{ maxWidth: '28ch' }}>We build the system around the business, not the other way around.</h2>
              <p className={styles['sub']} style={{ maxWidth: '60ch', marginTop: '20px' }}>
                HoneyBook's own guidance is to map your clientflow before building anything. That is where we start: the real steps between an enquiry arriving and a client being served and paid. The account is then configured to fit that process, not the reverse.
              </p>
           </div>
           
           <div className={styles['journey']}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)' }}>
                 <span>A typical clientflow in HoneyBook</span>
                 <span style={{ color: 'var(--sage)', fontSize: '0.9rem', fontWeight: 500 }}>Mapped before anything is built</span>
              </div>
              <ul className={styles['track']} style={{ rowGap: '44px' }}>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Lead</strong><small>Contact form</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Qualify</strong><small>Pipeline stage</small></li>
                 <li className={styles['human']}><span className={styles['d']}></span><strong>Consult</strong><small>Scheduler</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Proposal</strong><small>Smart File</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Contract</strong><small>Signature</small></li>
                 
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Payment</strong><small>Invoice plan</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Onboarding</strong><small>Questionnaire</small></li>
                 <li className={styles['human']}><span className={styles['d']}></span><strong>Delivery</strong><small>Your team</small></li>
                 <li className={styles['auto']}><span className={styles['d']}></span><strong>Follow-up</strong><small>Review, repeat</small></li>
              </ul>
              <div className={styles['key']}>
                 <span><span className={styles['d']} style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--sky)', background: 'var(--sky-soft)' }}></span> Automated where it should be</span>
                 <span><span className={styles['d']} style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', border: '1px solid var(--butter)', background: 'var(--butter-soft)' }}></span> Kept with your team</span>
              </div>
           </div>
           
           <p className={styles['after-line']} style={{ marginTop: '32px', maxWidth: '70ch' }}>
             We configure HoneyBook so the predictable steps happen on their own, and leave the conversations that genuinely need judgement with the people who should be having them.
           </p>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 2. Update honeybook.module.css
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// Change .track strong to use serif font
cssContent = cssContent.replace(
    /\.track strong\{([^}]+)\}/, 
    '.track strong{display:block;font-family:"Newsreader", Georgia, serif;font-weight:600;letter-spacing:0;font-size:1.15rem;color:var(--ink);line-height:1.2}'
);

// Add styles for .approach-head h2
const newCss = `
.approach-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4vw, 3.4rem); letter-spacing: -0.02em; line-height: 1.05; }
`;

cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('Our approach section updated.');
