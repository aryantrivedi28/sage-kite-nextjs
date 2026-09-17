const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Restore .faq-a-inner overflow: hidden
content = content.replace(/\.faq-a-inner \{  \}/g, '.faq-a-inner { overflow: hidden; }');

// Restore .cta-section overflow: hidden
content = content.replace(/\.cta-section \{ position: relative;  background: var\(--ink\);/g, '.cta-section { position: relative; overflow: hidden; background: var(--ink);');

// Restore .hero-section overflow: hidden (if it had one)
content = content.replace(/\.hero-section \{ padding: clamp\(32px, 5vw, 64px\) 0 clamp\(80px, 10vw, 120px\);  \}/g, '.hero-section { padding: clamp(32px, 5vw, 64px) 0 clamp(80px, 10vw, 120px); overflow: hidden; }');

fs.writeFileSync(file, content);
console.log('Restored necessary overflow: hidden attributes.');
