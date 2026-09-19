const fs = require('fs');
const path = 'app/about/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/var\(--serif\)/g, 'var(--sans)');

fs.writeFileSync(path, content, 'utf8');
console.log('about page final fixes');
