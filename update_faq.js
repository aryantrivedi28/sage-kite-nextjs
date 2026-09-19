const fs = require('fs');
const path = 'app/Platforms/Dubsado/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Change className back to faq-grid
content = content.replace(/className="faq-stack"/g, 'className="faq-grid"');

// We need to re-add the inline borders to the faq items that are NOT the first two in each group.
// The easiest way is to use a regex or string replacement for the specific H3 headers that need borders.

const borders = `style={{ borderTop: '1px solid var(--light-sage)', paddingTop: '24px' }}`;

const replacements = [
  { search: `<div>\n                   <h3>Can Sage Kite set up Dubsado from scratch?</h3>`, replace: `<div ${borders}>\n                   <h3>Can Sage Kite set up Dubsado from scratch?</h3>` },
  { search: `<div>\n                   <h3>Can you fix or improve an existing Dubsado account?</h3>`, replace: `<div ${borders}>\n                   <h3>Can you fix or improve an existing Dubsado account?</h3>` },
  
  { search: `<div>\n                   <h3>Can you configure payments and scheduling?</h3>`, replace: `<div ${borders}>\n                   <h3>Can you configure payments and scheduling?</h3>` },
  { search: `<div>\n                   <h3>Which parts stay manual?</h3>`, replace: `<div ${borders}>\n                   <h3>Which parts stay manual?</h3>` },
  { search: `<div>\n                   <h3>Can Sage Kite help migrate from another CRM?</h3>`, replace: `<div ${borders}>\n                   <h3>Can Sage Kite help migrate from another CRM?</h3>` },

  { search: `<div>\n                   <h3>How does Sage Kite test Dubsado workflows?</h3>`, replace: `<div ${borders}>\n                   <h3>How does Sage Kite test Dubsado workflows?</h3>` },
  { search: `<div>\n                   <h3>Will my team receive training?</h3>`, replace: `<div ${borders}>\n                   <h3>Will my team receive training?</h3>` },
  { search: `<div>\n                   <h3>What happens after implementation?</h3>`, replace: `<div ${borders}>\n                   <h3>What happens after implementation?</h3>` },
  { search: `<div>\n                   <h3>Is Sage Kite only a Dubsado agency?</h3>`, replace: `<div ${borders}>\n                   <h3>Is Sage Kite only a Dubsado agency?</h3>` },
];

for (const rep of replacements) {
  content = content.replace(rep.search, rep.replace);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated to 2-column grid');
