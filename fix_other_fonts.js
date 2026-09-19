const fs = require('fs');
const path = 'app/globals.css';
let content = fs.readFileSync(path, 'utf8');

// Replace remaining var(--serif) to var(--sans)
content = content.replace(/var\(--serif\)/g, 'var(--sans)');

// Adjust weights for headings/titles that were using 500
content = content.replace(/\.stage strong\{display:block;font-family:var\(--sans\);font-weight:500;/, '.stage strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');
content = content.replace(/\.node strong\{font-family:var\(--sans\);font-weight:500;/, '.node strong{font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');
content = content.replace(/\.traits strong\{display:block;font-family:var\(--sans\);font-weight:500;/, '.traits strong{display:block;font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');
content = content.replace(/\.plat-grid li\{border-right:1px solid var\(--light-sage\);border-bottom:1px solid var\(--light-sage\);padding:18px 14px;text-align:center;font-family:var\(--sans\);font-size:1.15rem;/, '.plat-grid li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:18px 14px;text-align:center;font-family:var(--sans);font-size:1.15rem;font-weight:600;');
content = content.replace(/\.ind-grid a\{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:72px;padding:14px 18px;border:1px solid var\(--light-sage\);border-radius:var\(--r\);background:var\(--warm-white\);text-decoration:none;font-family:var\(--sans\);font-size:1.2rem;/, '.ind-grid a{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:72px;padding:14px 18px;border:1px solid var(--light-sage);border-radius:var(--r);background:var(--warm-white);text-decoration:none;font-family:var(--sans);font-size:1.2rem;font-weight:600;');
content = content.replace(/\.work-list strong\{font-family:var\(--sans\);font-weight:500;/, '.work-list strong{font-family:var(--sans);font-weight:700;letter-spacing:-.01em;');

// The founder intro is italic and 500, but the prompt states "Body text should remain clean and sans-serif ... neutral readable". We can leave it as font-style: italic or change it. The prompt doesn't strictly say remove italics, but a modern SaaS site rarely uses large serif italics.
content = content.replace(/\.founder-intro\{font-family:var\(--sans\);font-style:italic;font-size:clamp\(1.25rem,1.8vw,1.5rem\);line-height:1.4;color:var\(--ink\);/, '.founder-intro{font-family:var(--sans);font-weight:500;font-size:clamp(1.25rem,1.8vw,1.5rem);line-height:1.45;color:var(--ink);letter-spacing:-.01em;');

fs.writeFileSync(path, content, 'utf8');
console.log('Other fonts updated in globals.css');
