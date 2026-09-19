const fs = require('fs');
const path = 'app/Platforms/Dubsado/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Insert .faq-grid { display: grid; } in the style block
content = content.replace(
  /\.runs-grid\{/,
  '.faq-grid{display:grid}\n          .runs-grid{'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Added display: grid to .faq-grid in page.tsx');
