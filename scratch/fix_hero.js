const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

// 1. Fix global classes wrongly mapped to styles object
const wronglyLocal = ['hero-grid', 'hero-copy', 'brand-dashes', 'cta-row', 'head', 'faq-group'];
wronglyLocal.forEach(cls => {
    // Replace \${styles['class']} with class
    const regex = new RegExp(`\\$\\{styles\\['${cls}'\\]\\}`, 'g');
    pageContent = pageContent.replace(regex, cls);
    
    // Replace className={styles['class']} with className="class"
    const regex2 = new RegExp(`className=\\{styles\\['${cls}'\\]\\}`, 'g');
    pageContent = pageContent.replace(regex2, `className="${cls}"`);
});

// Clean up any empty template literals like className={` `} or className={`class `} to className="class"
pageContent = pageContent.replace(/className=\{\`\s*([^\`]*?)\s*\`\}/g, (match, inner) => {
    if (!inner.includes('${')) {
        return `className="${inner}"`;
    }
    return match;
});


// 2. Update the Hero paragraph text
const oldParagraph = 'Sage Kite configures HoneyBook around the way your business actually wins, onboards and serves clients: lead capture, Smart Files, contracts, payments, scheduling and automated workflows. We map the clientflow first, then build the system to match it.';
const newParagraph = 'Sage Kite configures HoneyBook around the way your business actually books and serves clients: lead capture, Smart Files, contracts, payments, scheduling and automated workflows — mapped to your process, tested and handed over.';
pageContent = pageContent.replace(oldParagraph, newParagraph);

// 3. Update the Checklist items
const oldChecklist = `                       <li><Check size={16} /> Branding, email and calendar connected <span>Settings</span></li>
                       <li><Check size={16} /> Lead capture form on your site <span>Forms</span></li>
                       <li><Check size={16} /> Smart Files, packages, proposal, contract and invoice <span>Booking</span></li>
                       <li><Check size={16} /> Scheduler and appointment reminders <span>Calendar</span></li>
                       <li><Check size={16} /> Statuses and tags that match your stages <span>Tracking</span></li>
                       <li><Check size={16} /> Workflows built, tested and handed over <span>Automation</span></li>`;

const newChecklist = `                       <li><Check size={16} /> Branding, email and calendar connected <span>Setup</span></li>
                       <li><Check size={16} /> Lead capture form on your site <span>Forms</span></li>
                       <li><Check size={16} /> Smart File: services, contract, invoice <span>Smart Files</span></li>
                       <li><Check size={16} /> Scheduler with confirmations and reminders <span>Scheduling</span></li>
                       <li><Check size={16} /> Pipeline stages that match your process <span>Pipeline</span></li>
                       <li><Check size={16} /> Automations built, tested and handed over <span>Automation</span></li>`;
                       
pageContent = pageContent.replace(oldChecklist, newChecklist);

fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 4. Update the CSS module to use :global() for global classes nested inside local ones, and update font for h1
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// The h1 needs a serif font matching the image. 
// "Newsreader" or standard serif. We can add `font-family: 'Newsreader', Georgia, serif; font-weight: 500;` 
// The image shows a very distinct serif font for "HoneyBook setup and implementation services"
cssContent = cssContent.replace(
    /\.plat-hero h1\{([^}]+)\}/, 
    '.plat-hero h1{$1;font-family:"Newsreader", Georgia, serif;font-weight:400;}' // Added serif font
);

// Fix nested global classes
wronglyLocal.forEach(cls => {
    // Replace .local .global with .local :global(.global)
    // Actually, just `.plat-hero .hero-grid` is what we know about
    const regex = new RegExp(`\\.([a-zA-Z0-9_-]+)\\s+\\.${cls}`, 'g');
    cssContent = cssContent.replace(regex, `.$1 :global(.${cls})`);
});

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('Hero and styles updated.');
