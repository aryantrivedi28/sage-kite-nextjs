const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div style=\{\{ padding: "24px 0 24px 24px" \}\}>/,
  '<div className="timeline-container">'
);

const css = `
        .timeline-container { padding: 24px 0 24px 24px; box-sizing: border-box; width: 100%; }
        @media (max-width: 768px) {
          .timeline-container { padding: 24px 0 24px 12px; }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

fs.writeFileSync(file, content);
console.log('Fixed timeline wrapper.');
