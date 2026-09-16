const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change the flex layout of the button to stack label and title
content = content.replace(/<div style=\{\{ display: "flex", alignItems: "baseline", gap: "24px", flexWrap: "wrap", width: "100%" \}\}>/g, '<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "100%" }}>');

// We also need to remove the CSS rules that tried to put them side-by-side on desktop.
// They were: .acc-info-col { width: 200px; flex-shrink: 0; }
content = content.replace('.acc-info-col { width: 200px; flex-shrink: 0; }', '');

// Adjust acc-detail-wrapper to just have standard layout without the margin-left: 200px
content = content.replace('.acc-detail-wrapper { margin-left: 200px; padding-top: 0; }', '.acc-detail-wrapper { margin-left: 0; padding-top: 0; }');

fs.writeFileSync(file, content);
console.log('Successfully fixed accordion stacking layout.');
