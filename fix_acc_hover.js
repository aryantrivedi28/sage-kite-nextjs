const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const originalCss = `.acc-btn:hover { padding-left: 16px; padding-right: 16px; margin-left: -16px; margin-right: -16px; border-radius: 8px; background: rgba(0,0,0,0.015); }`;
const newCss = `.acc-btn:hover { padding-left: 24px; padding-right: 24px; margin-left: -24px; margin-right: -24px; border-radius: 8px; background: var(--warm-white); }`;

content = content.replace(originalCss, newCss);
fs.writeFileSync(file, content);
console.log('Fixed hover effect.');
