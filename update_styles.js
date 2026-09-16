const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Insert a rule to hide scrollbar for .timeline-grid
const cssRule = `
        .timeline-grid::-webkit-scrollbar { display: none; }
        .timeline-grid { -ms-overflow-style: none; scrollbar-width: none; }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + cssRule);

fs.writeFileSync(file, content);
console.log('Successfully updated styles.');
