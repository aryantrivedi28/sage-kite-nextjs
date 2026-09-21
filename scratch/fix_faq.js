const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

// Restore faq-grid to global
pageContent = pageContent.replace(/className=\{styles\['faq-grid'\]\}/g, 'className="faq-grid"');

fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// I can keep the .faq-item and its border logic in the module
// but mobile might need 1 column for faq-grid. 
// If globals.css does that already, let's check.
// Globals.css media queries:
// @media (max-width:680px){
//   .faq-grid{grid-template-columns:1fr;gap:0}
// }
// This is already in globals.css!
// We just need to make sure the borders work.
// At 1 column, all items except the first should have a border-top.
// My current CSS: .faq-item:nth-child(n+3) { border-top: 1px solid var(--light-sage); }
// This means at 1 column, item 2 misses the border!
// Let's change the border logic:
// Instead of border-top on items, the original used inline `borderTop` on specific items.
// We can use a media query in our CSS module to handle the borders properly.

cssContent = cssContent.replace(
    /\.faq-item:nth-child\(n\+3\) \{ border-top: 1px solid var\(--light-sage\); \}/,
    `
    .faq-item:nth-child(n+3) { border-top: 1px solid var(--light-sage); }
    @media (max-width: 900px) {
       /* If globals.css collapses to 1 column at 900 or 680 */
    }
    @media (max-width: 680px) {
       .faq-item:nth-child(n+2) { border-top: 1px solid var(--light-sage); }
    }
    `
);

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);
console.log('Fixed faq-grid class.');
