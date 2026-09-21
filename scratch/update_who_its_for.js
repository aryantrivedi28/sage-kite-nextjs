const fs = require('fs');

// 1. Update page.tsx
let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* Symptoms \/ Challenge -> Who it's for \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Symptoms / Challenge -> Who it's for */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
          <div className={\`head \${styles['fit-head']}\`}>
            <div className="label">Who it's for</div>
            <h2>HoneyBook works for independent, service-based businesses.</h2>
            <p>We implement HoneyBook CRM for photographers, wedding and event professionals, designers, coaches and consultants — built around the way each one actually wins and serves clients.</p>
          </div>
          <div className={styles['fit-grid']}>
             <div className={styles['fit']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Photographers & studios</strong>
                <p>Enquiries, session bookings, contracts and payments in one place instead of scattered across email and separate apps.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <strong>Wedding & event professionals</strong>
                <p>Planners, venues and creatives managing proposals, payment schedules and long lead times without losing track.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <strong>Designers & creative studios</strong>
                <p>Project work with proposals, milestones and invoices that need to look as considered as the work itself.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <strong>Coaches & consultants</strong>
                <p>Discovery calls, packages and recurring payments, with client onboarding that runs itself.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                <strong>Other service businesses</strong>
                <p>Any small, service-led business taking clients from first enquiry through to booking and payment.</p>
             </div>
             <div className={styles['fit']} style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <strong>Small teams outgrowing admin</strong>
                <p>One shared, documented system, so client work no longer depends on a single person's inbox.</p>
             </div>
          </div>
          <p className={styles['fit-note']}>
            HoneyBook currently supports businesses based in the United States, Canada, the United Kingdom and Australia. If HoneyBook is not available where your business is based, we can recommend and implement a platform that is.
          </p>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 2. Update honeybook.module.css
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// Change .fit strong to use serif font
cssContent = cssContent.replace(
    /\.fit strong\{([^}]+)\}/, 
    '.fit strong{display:block;font-family:"Newsreader", Georgia, serif;font-weight:600;font-size:1.15rem;color:var(--ink);line-height:1.25;margin-bottom:8px}'
);

// Add styles for .fit-head h2, .fit-head p, and .fit-note
const newCss = `
.fit-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.02em; max-width: 20ch; line-height: 1.05; margin-bottom: 24px; }
.fit-head p { font-size: 1.1rem; line-height: 1.55; color: var(--dark-sage); max-width: 60ch; }
.fit-note { font-size: 0.85rem; color: var(--sage); margin-top: 32px; max-width: 100ch; }
`;

cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('Who it is for section updated.');
