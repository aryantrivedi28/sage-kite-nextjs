const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Why hire a specialist \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Why hire a specialist */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={styles['why-grid']}>
             <div className="why-copy">
               <div className="label">Doing it yourself, or not</div>
               <h2 className={styles['why-head']}>Why hire a<br/>HoneyBook specialist?</h2>
               <p style={{ marginTop: '24px', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '40ch', color: 'var(--ink)' }}>
                 HoneyBook is designed to be learnable, and plenty of owners set it up themselves. The cost is usually the weeks spent learning it, and the rebuild that follows when the first version does not match how you actually work.
               </p>
             </div>
             
             <ul className={styles['why-list']}>
               <li>
                 <b>01</b>
                 <div><strong>Process design first.</strong> The mapping work is the part most setups skip, and the part that decides whether the automation helps or gets in the way.</div>
               </li>
               <li>
                 <b>02</b>
                 <div><strong>Fewer configuration mistakes.</strong> Smart File logic, automation triggers and timings behave in specific ways; knowing them avoids steps that fire at the wrong moment.</div>
               </li>
               <li>
                 <b>03</b>
                 <div><strong>Built and tested before clients see it.</strong> Test journeys run end to end, so errors are found internally rather than by a paying client.</div>
               </li>
               <li>
                 <b>04</b>
                 <div><strong>Less manual administration.</strong> Follow-ups, reminders and stage changes happen through the system rather than through someone's memory.</div>
               </li>
               <li>
                 <b>05</b>
                 <div><strong>Clear handover.</strong> Your team is trained on what was built and how to change it, with the structure documented.</div>
               </li>
               <li>
                 <b>06</b>
                 <div><strong>Support after launch.</strong> Maintenance and further implementation when your services or process change.</div>
               </li>
             </ul>
           </div>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');
if (!cssContent.includes('.why-head')) {
    cssContent += `\n.why-head { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4vw, 3.4rem); letter-spacing: -0.02em; line-height: 1.05; }\n`;
    fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);
}

console.log('Why hire a specialist section updated.');
