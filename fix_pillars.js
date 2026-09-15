const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(
    "style={{ borderTopColor: 'var(--sky)' }}",
    "style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--sky)' }}"
);

code = code.replace(
    "style={{ borderTopColor: 'var(--ink)' }}",
    "style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--ink)' }}"
);

code = code.replace(
    "style={{ borderTopColor: 'var(--coral)' }}",
    "style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--coral)' }}"
);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated pillar styles");
