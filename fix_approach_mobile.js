const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the inline style with a class
content = content.replace(
  /<div className="wrap" style=\{\{ marginBottom: "120px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 40px", alignItems: "center" \}\}>/,
  '<div className="wrap approach-header-grid" style={{ marginBottom: "120px", display: "grid", gap: "80px 40px", alignItems: "center" }}>'
);

// Add the class definition and media query
const css = `
        .approach-header-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .approach-header-grid { grid-template-columns: 1fr; gap: 40px; }
        }
`;

content = content.replace('.approach-cards-grid { grid-template-columns: 1fr !important; gap: 40px !important; }', css + '          .approach-cards-grid { grid-template-columns: 1fr !important; gap: 40px !important; }');

fs.writeFileSync(file, content);
console.log('Fixed approach header mobile responsiveness.');
