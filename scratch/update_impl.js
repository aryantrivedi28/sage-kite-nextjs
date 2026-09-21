const fs = require('fs');

// 1. Update page.tsx
let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Capabilities \(impl-grid\) \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Capabilities (impl-grid) */}
        <section className="wrap" id="included" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={\`head \${styles['impl-head']}\`}>
             <div className="label">What we implement</div>
             <h2>What HoneyBook setup services cover.</h2>
           </div>
           <div className={styles['impl-grid']}>
             <div className={styles['impl']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>Account setup</h3>
                <p>Branding, company settings, email and calendar connections, and pipeline stages and statuses that reflect your real process.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Lead capture</h3>
                <p>Contact and lead capture forms for your site, routing each enquiry into the right project and workflow from the first click.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Smart Files & proposals</h3>
                <p>Interactive Smart Files and brochures that let a client choose services, sign and pay in one place, built to match your brand.</p>
             </div>
             
             <div className={styles['impl']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Contracts</h3>
                <p>Contract templates with electronic signatures, connected to the proposal and the rest of the booking sequence.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>
                <h3>Invoicing & payments</h3>
                <p>Invoice templates, payment schedules, reminders and late fees, with HoneyBook payments connected.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Scheduling</h3>
                <p>Session and meeting types linked to your calendar, with confirmations and reminders that cut the back-and-forth.</p>
             </div>
             
             <div className={styles['impl']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Questionnaires & templates</h3>
                <p>Questionnaires, saved emails and client-facing content, written to sound like your business rather than a template.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>Automations & workflows</h3>
                <p>Automation sequences with triggers and conditions: sending files and emails, creating tasks and moving pipeline stages.</p>
             </div>
             <div className={styles['impl']} style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <h3>Testing & handover</h3>
                <p>Test client journeys run end to end, issues corrected, then training and documentation for your team.</p>
             </div>
           </div>
           <div className="mid-cta" style={{ marginTop: 'clamp(32px,4vw,44px)' }}>
             <Link href="#contact" className="btn" style={{ background: 'var(--coral)', borderColor: 'var(--coral)' }}>Talk to a HoneyBook specialist</Link>
             <span style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>Scope, exclusions and a fixed project price are agreed before any build starts.</span>
           </div>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 2. Update honeybook.module.css
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// Change .impl h3 to use serif font
cssContent = cssContent.replace(
    /\.impl h3\{([^}]+)\}/, 
    '.impl h3{font-family:"Newsreader", Georgia, serif;font-weight:500;font-size:1.4rem;letter-spacing:-0.01em;line-height:1.25;margin-bottom:12px;color:var(--ink);}'
);

// Add styles for .impl-head h2
const newCss = `
.impl-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4.5vw, 3.6rem); letter-spacing: -0.02em; max-width: 15ch; line-height: 1.05; }
`;

cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('What we implement section updated.');
