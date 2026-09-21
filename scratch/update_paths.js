const fs = require('fs');

// 1. Update page.tsx
let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Two starting points \(paths\) \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Two starting points (paths) */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className={\`head \${styles['paths-head']}\`}>
               <div className="label">Two starting points</div>
               <h2 style={{ maxWidth: '28ch' }}>Starting fresh, or improving an existing HoneyBook account.</h2>
             </div>
             
             <div className={styles['paths']}>
               <div className={styles['path-card']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                 <h3>New HoneyBook setup</h3>
                 <p style={{ marginBottom: '24px' }}>We map your clientflow, build the Smart Files and content it needs, then configure the account and automations around that process.</p>
                 <ul>
                   <li>Clientflow mapped service by service</li>
                   <li>Forms, Smart Files, proposals, contracts and emails built</li>
                   <li>Automations created and tested before launch</li>
                   <li>Training and handover for your team</li>
                 </ul>
               </div>
               
               <div className={styles['path-card']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                 <h3>Existing account audit & optimisation</h3>
                 <p style={{ marginBottom: '24px' }}>We review what is already there, find where the setup and the real process have drifted apart, and rebuild the parts that are holding you back.</p>
                 <ul>
                   <li>Review of Smart Files, forms and automations in use</li>
                   <li>Duplicate and unused content removed or consolidated</li>
                   <li>Automation triggers and conditions corrected</li>
                   <li>Underused features introduced where they earn their place</li>
                 </ul>
               </div>
             </div>
           </div>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 2. Update honeybook.module.css
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// Change .path-card h3 to use serif font
cssContent = cssContent.replace(
    /\.path-card h3\{([^}]+)\}/, 
    '.path-card h3{font-family:"Newsreader", Georgia, serif;font-weight:500;font-size:1.7rem;letter-spacing:-0.01em;line-height:1.2;margin-bottom:12px;color:var(--ink);}'
);

// Add styles for .paths-head h2
const newCss = `
.paths-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4.5vw, 3.6rem); letter-spacing: -0.02em; line-height: 1.05; }
`;

cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('Two starting points section updated.');
