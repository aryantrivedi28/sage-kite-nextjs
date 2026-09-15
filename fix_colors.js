const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// People card border color should be --ink or --dark-sage. Let's use --ink.
code = code.replace(
  '<div className="eq-part" style={{ borderLeftColor: \'var(--butter)\' }}>',
  '<div className="eq-part" style={{ borderLeftColor: \'var(--ink)\' }}>'
);

fs.writeFileSync('app/page.tsx', code);
