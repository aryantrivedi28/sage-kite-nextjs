const fs = require('fs');

let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

cssContent = cssContent.replace(
    /\.faq-grid \{ display: grid; grid-template-columns: repeat\(2, minmax\(0, 1fr\)\); gap: 0 48px; \}/, 
    ':global(.faq-grid) { display: grid; }'
);

// If the regex above fails because of formatting, just append it.
if (!cssContent.includes(':global(.faq-grid)')) {
    cssContent += '\n:global(.faq-grid) { display: grid; }\n';
}

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);
console.log('Added display: grid to faq-grid');
