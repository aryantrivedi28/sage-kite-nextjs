const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldProblem = `<section className="rule-top" id="problem">
          <div className="wrap split">
            <div className="split-head">
              <span className="label">The problem</span>
              <h2>Growth problems tend to show up in the CRM first.</h2>
              <p className="mt">A business rarely has one isolated problem. The CRM is the record of what happened to every lead and customer, so it is where disconnected marketing, unclear processes and stretched teams become visible. That makes it the most useful place to start a diagnosis.</p>
            </div>
            
            <ul className="rows">
              <li>
                <h3>Leads lose momentum</h3>
                <p>Enquiries wait for a reply, sit without an owner or go quiet after one attempt. The cost is sales that were available and never followed through.</p>
              </li>
              <li>
                <h3>CRM processes are disorganised</h3>
                <p>Duplicate contacts, pipeline stages nobody agrees on and data nobody trusts. When reporting becomes guesswork, decisions do too.</p>
              </li>
              <li>
                <h3>Marketing activity is disconnected</h3>
                <p>Campaigns produce leads that land in a system which cannot say what happened next, so nobody can tell which spend is working.</p>
              </li>
              <li>
                <h3>There is no capacity to execute</h3>
                <p>The fix is understood, but nobody has the hours to build it properly or keep it running once it is built.</p>
              </li>
            </ul>
          </div>
        </section>`;

const newProblem = `<section className="rule-top" id="problem">
          <div className="wrap split">
            <div className="split-head">
              <span className="label">Why growth stalls</span>
              <h2>Growth rarely stalls for one reason. It stalls in the gaps between things.</h2>
              <p className="mt">Marketing, sales tools, processes and people are usually bought, hired or started at different times. Each part may work on its own. The trouble is that nothing connects them, so leads, information and effort leak out between them.</p>
            </div>
            
            <ul className="rows">
              <li>
                <h3>The tools are there, but underused</h3>
                <p>A CRM was bought and never properly set up. Features that would save hours sit untouched, and the team works around the system instead of through it.</p>
              </li>
              <li>
                <h3>Marketing and sales do not talk to each other</h3>
                <p>Campaigns bring in enquiries that nobody follows up consistently, so it becomes impossible to tell which spend is producing customers.</p>
              </li>
              <li>
                <h3>Too much of the work is manual</h3>
                <p>Follow-ups, updates and reports depend on someone remembering. Repetitive work crowds out the work that actually grows the business.</p>
              </li>
              <li>
                <h3>The strategy is clear, the execution is not</h3>
                <p>The business knows what it should be doing. Nobody has the time or specialist skill to do it consistently.</p>
              </li>
              <li>
                <h3>The founder is carrying the operation</h3>
                <p>Decisions, fixes and follow-ups route through one or two people, and growth slows to the pace they can manage.</p>
              </li>
            </ul>
          </div>
        </section>`;

if (code.includes(oldProblem)) {
  code = code.replace(oldProblem, newProblem);
  console.log("Replaced problem section successfully.");
} else {
  console.log("Could not find the exact old problem block.");
}

fs.writeFileSync('app/page.tsx', code);
