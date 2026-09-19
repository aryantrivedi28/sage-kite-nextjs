const fs = require('fs');
const path = 'app/globals.css';
let content = fs.readFileSync(path, 'utf8');

// Replace --serif
content = content.replace(
  /--serif:"Newsreader", Georgia, "Times New Roman", serif;/g,
  '--serif:"Manrope", Arial, Helvetica, sans-serif;'
);

// Replace h1,h2,h3 base styles
content = content.replace(
  'h1,h2,h3{font-family:var(--serif);font-weight:500;color:var(--ink);margin:0;letter-spacing:-.015em;text-wrap:balance}\nh2{font-size:clamp(2.1rem,4vw,3.3rem);line-height:1.05}\nh3{font-size:1.35rem;line-height:1.2}',
  'h1,h2,h3{font-family:var(--sans);font-weight:800;color:var(--ink);margin:0;letter-spacing:-.03em;text-wrap:balance}\nh1{line-height:1.02}\nh2{font-size:clamp(2.1rem,4vw,3.3rem);line-height:1.02}\nh3{font-size:1.35rem;line-height:1.15;font-weight:700;letter-spacing:-.01em}'
);

// We need to also check the .label / eyebrows.
// The prompt said: "weight 500-700, uppercase tracked out 0.06em-0.12em for uppercase labels, do not overspace sentence-case".
// Current .label:
content = content.replace(
  '.label{display:block;font-weight:600;font-size:.875rem;color:var(--sage);margin-bottom:14px}',
  '.label{display:block;font-weight:600;font-size:.875rem;color:var(--sage);margin-bottom:14px;letter-spacing:0}'
);

// Numbers/metadata
// .num classes?
content = content.replace(
  '.num{font-family:var(--serif);',
  '.num{font-family:var(--sans);font-weight:700;letter-spacing:-.02em;'
);

// Also change .pp-hero h1 and .pp-section h2
content = content.replace(
  /font-family: var\(--serif\);/g,
  'font-family: var(--sans);'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fonts updated in globals.css');
