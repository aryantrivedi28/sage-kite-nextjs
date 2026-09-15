const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Update approach split pull quote
const oldSplit = `<div className="wrap split">
            <div>
              <span className="label">The Sage Kite approach</span>
              <h2>Business growth consulting that carries on past the advice</h2>
              <p className="mt">Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            
            <p className="pull">Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
          </div>`;

const newSplit = `<div className="wrap split">
            <div>
              <span className="label">The Sage Kite approach</span>
              <h2>Business growth consulting that carries on past the advice</h2>
              <p className="mt">Business growth consulting helps a business understand what is limiting its growth and decide what to change. Sage Kite also does the work that follows: we implement the systems, provide the people and carry out the execution, so the plan is proven in the business rather than left in a document.</p>
            </div>
            
            <p className="pull" style={{marginTop: "32px"}}>Plans are easier to come by than ever. The hard part is making one work inside a real business, with its real tools and real team.</p>
          </div>`;

code = code.replace(oldSplit, newSplit);

// Update pillar cards
code = code.replace(
    `<div className="pillar" style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--sky)' }}>`,
    `<div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '-12px 12px 0 var(--sky)' }}>`
);

code = code.replace(
    `<div className="pillar" style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--ink)' }}>`,
    `<div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '12px 12px 0 var(--ink)' }}>`
);

code = code.replace(
    `<div className="pillar" style={{ borderTop: '1px solid var(--light-sage)', boxShadow: '8px 8px 0 var(--coral)' }}>`,
    `<div className="pillar" style={{ border: '2px solid var(--ink)', boxShadow: '12px 12px 0 var(--coral)' }}>`
);

fs.writeFileSync('app/page.tsx', code);
console.log("Fixed pillars border, shadows and pull quote alignment.");
