const fs = require('fs');
const path = 'app/globals.css';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /\.pp-hero h1 \{\n  font-family: var\(--sans\);\n  font-size: clamp\(2.4rem, 4vw, 3.2rem\);\n  line-height: 1.1;\n  margin-bottom: 20px;\n  color: var\(--ink\);\n  font-weight: 500;\n\}/g,
  '.pp-hero h1 {\n  font-family: var(--sans);\n  font-size: clamp(2.4rem, 4vw, 3.2rem);\n  line-height: 1.05;\n  margin-bottom: 20px;\n  color: var(--ink);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}'
);

content = content.replace(
  /\.pp-section h2 \{\n  font-family: var\(--sans\);\n  font-size: clamp\(1.4rem, 2.5vw, 1.8rem\);\n  font-weight: 500;\n  color: var\(--ink\);\n  margin: 0 0 20px;\n  line-height: 1.3;\n\}/g,
  '.pp-section h2 {\n  font-family: var(--sans);\n  font-size: clamp(1.4rem, 2.5vw, 1.8rem);\n  font-weight: 700;\n  color: var(--ink);\n  margin: 0 0 20px;\n  line-height: 1.1;\n  letter-spacing: -0.01em;\n}'
);

fs.writeFileSync(path, content, 'utf8');
console.log('pp fonts fixed');
