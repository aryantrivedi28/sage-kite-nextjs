const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldBlock = `<div className="svc mt-large" style={{borderBottom: "none", borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <div className="svc-kind" style={{paddingLeft: "0", color: "var(--ink)"}}>After handover</div>
              <div></div>
              <div className="svc-body">
                <p>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
              </div>
            </div>`;

const newBlock = `<div className="maint mt-large" style={{borderTop: "1px solid var(--light-sage)", paddingTop: "40px"}}>
              <b>After handover</b>
              <p style={{margin: 0}}>Maintenance with a defined support scope, including ownership and boundaries for changes, connects each project to ongoing support and execution.</p>
            </div>`;

code = code.replace(oldBlock, newBlock);
fs.writeFileSync('app/page.tsx', code);
console.log("Updated After handover block.");
