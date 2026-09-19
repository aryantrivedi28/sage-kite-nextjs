const fs = require('fs');
const path = 'app/about/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/fontFamily: ["']var\(--serif\)["']/g, 'fontFamily: "var(--sans)"');
content = content.replace(/fontStyle: ["']italic["']/g, 'fontStyle: "normal"');

// also any 500 weights on inline styles that should be bolder if they are headings?
content = content.replace(/fontWeight: ["']500["']/g, 'fontWeight: "700"');

fs.writeFileSync(path, content, 'utf8');
console.log('about page fonts fixed');
