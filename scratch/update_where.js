const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Where HoneyBook sits \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Where HoneyBook sits */}
        <section className="pale" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className="wrap">
             <div className={\`head \${styles['where-head']}\`}>
               <div className="label">Where HoneyBook sits</div>
               <h2 style={{ maxWidth: '20ch' }}>The platform is one part of the growth system.</h2>
             </div>
             
             <ul className={styles['stack']}>
               <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}>Consultancy</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>HoneyBook and CRM</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Marketing</li>
               <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
               <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}>People</li>
               <li style={{ '--c': 'var(--dark-sage)' } as React.CSSProperties}>Execution</li>
               <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
             </ul>
             
             <p className={styles['stack-note']}>
               Sage Kite is a business growth consultancy. HoneyBook is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing that creates demand and the people who keep it running. On its own, HoneyBook organises how you book and serve clients; connected to the rest, it becomes part of how the business grows.
             </p>
             
             <div className={styles['related']}>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>CRM implementation services</Link>
               <Link href="/consulting" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Business growth consulting</Link>
               <Link href="/marketing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Marketing services</Link>
               <Link href="/staffing" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Specialist Staffing</Link>
               <Link href="/platforms/dubsado" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>Dubsado setup services</Link>
               <Link href="/platforms" style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--butter)', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>All platforms</Link>
             </div>
           </div>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// Add styles for .where-head h2
const newCss = `
.where-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4.5vw, 3.6rem); letter-spacing: -0.02em; max-width: 15ch; line-height: 1.05; }
`;
cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);
console.log('Where HoneyBook sits updated.');
