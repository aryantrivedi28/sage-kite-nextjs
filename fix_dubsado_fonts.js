const fs = require('fs');
const path = 'app/Platforms/Dubsado/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/var\(--serif\)/g, 'var(--sans)');

// Adjust weight to 700 and tighten tracking for these specific styles that were 500
content = content.replace(/\.fit strong\{display:block;font-family:var\(--sans\);font-weight:500;/, '.fit strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');
content = content.replace(/\.track strong\{display:block;font-family:var\(--sans\);font-weight:500;/, '.track strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');
content = content.replace(/\.why-list b\{font-family:var\(--sans\);font-weight:500;/, '.why-list b{font-family:var(--sans);font-weight:700;');
content = content.replace(/\.run-step .num\{font-family:var\(--sans\);font-size:2.4rem;color:var\(--sage\);line-height:1;margin-bottom:12px\}/, '.run-step .num{font-family:var(--sans);font-size:2.4rem;color:var(--sage);line-height:1;margin-bottom:12px;font-weight:700;letter-spacing:-.02em}');
content = content.replace(/\.run-step h3\{font-family:var\(--sans\);font-size:1.35rem;color:var\(--ink\);margin-bottom:10px;font-weight:500\}/, '.run-step h3{font-family:var(--sans);font-size:1.35rem;color:var(--ink);margin-bottom:10px;font-weight:700;letter-spacing:-.01em}');

fs.writeFileSync(path, content, 'utf8');
console.log('dubsado fonts fixed');
