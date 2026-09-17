const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const css = `
        @media (max-width: 768px) {
          #operation {
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }
          #operation .wrap {
            padding: 0 20px !important;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

fs.writeFileSync(file, content);
console.log('Fixed operation wrap.');
