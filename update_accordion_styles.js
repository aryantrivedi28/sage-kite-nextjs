const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add the CSS rules
const cssRule = `
        /* Accordion Refinements */
        .svc h3 { font-size: clamp(1.25rem, 1.8vw, 1.55rem) !important; }
        .svc-content-inner { max-width: 58ch; }
        .svc-content-inner p { font-size: 0.95rem !important; line-height: 1.5 !important; margin-bottom: 10px !important; }
        .svc-content-inner p.mt { margin-top: 10px !important; margin-bottom: 14px !important; }
        .svc-content-inner .text-link.mt { margin-top: 0 !important; font-size: 0.95rem !important; }
`;

content = content.replace('        .timeline-grid::-webkit-scrollbar', cssRule + '\n        .timeline-grid::-webkit-scrollbar');

// Add .svc-content-inner class to the padding div
content = content.replace(/<div style=\{\{ paddingTop: "16px" \}\}>/g, '<div style={{ paddingTop: "12px", paddingBottom: "8px" }} className="svc-content-inner">');

fs.writeFileSync(file, content);
console.log('Successfully updated accordion typography and spacing.');
