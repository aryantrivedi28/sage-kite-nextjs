const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Hero Label
code = code.replace(
  '<div className="label">Streamlined systems for growth</div>',
  '<div className="label">Business growth consultancy</div>'
);

// 2. Hero H1
code = code.replace(
  '<h1>Growth systems that <span className="u">make selling easier.</span></h1>',
  '<h1>Growth works when the <span className="u">systems, people<br/>and execution</span><br/>behind it do.</h1>'
);

// 3. Hero Lede
code = code.replace(
  '<p className="lede">Sage Kite is a business growth consultancy that improves the systems, people and execution behind growth. We identify where pipelines, follow-up and revenue are stalling, then put the right fix in place: consultancy, CRM implementation, marketing, and Tier 1 virtual assistant staffing, operating as a single operation.</p>',
  '<p className="lede">Sage Kite is a business growth consultancy for small and medium-sized businesses. We find what is holding growth back, then help fix it: shaping the strategy, implementing CRM and automation, running marketing and providing specialist people to keep the work moving.</p>'
);

// 4. Hero Sub
code = code.replace(
  '<p className="sub">Because a strategy only works when someone actually builds it, runs it, and measures it.</p>',
  '<p className="sub"><i>Most businesses do not lack tools or ideas. They lack the connection between them.</i></p>'
);

// 5. Hero CTA
code = code.replace(
  '<Link href="#connections">See how the pieces connect</Link>',
  '<Link href="#what-we-do">See how Sage Kite works</Link>'
);
code = code.replace(
  '<a className="text-link" href="#connections">See how the pieces connect</a>',
  '<Link className="text-link" href="#what-we-do">See how Sage Kite works</Link>'
);


// 6. Equation Section
const eqOld = `<figure className="equation" aria-label="The growth equation">
              <h2>The system behind growth</h2>
              
              <div className="eq-part" style={{ borderColor: 'var(--sage)', borderLeftColor: 'var(--sage)' }}>
                <strong>CRM</strong>
                <span>Where leads live, their status, and who owns the next step. Without it, you are guessing what works.</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderColor: 'var(--coral)', borderLeftColor: 'var(--coral)' }}>
                <strong>Marketing and automation</strong>
                <span>The engines that bring in demand and handle immediate, reliable follow-up without relying on memory.</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderColor: 'var(--ink)', borderLeftColor: 'var(--ink)' }}>
                <strong>Specialist staffing</strong>
                <span>The people who run the system day to day, handling outreach, qualification, and maintenance.</span>
              </div>
              
              <div className="op">=</div>
              
              <div className="eq-result">
                <strong>Easier growth</strong>
                <span>Leads are followed up, pipeline is visible, and the team can focus on closing instead of chasing.</span>
              </div>
              <figcaption>A single, coordinated operation.</figcaption>
            </figure>`;

const eqNew = `<figure className="equation" aria-label="What Sage Kite brings together">
              <h2>What Sage Kite brings together</h2>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--sky)' }}>
                <strong>Systems</strong>
                <span>CRM, automation, AI and the workflows between them</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--butter)' }}>
                <strong>People</strong>
                <span>Specialist VAs who operate and improve those systems</span>
              </div>
              
              <div className="op">+</div>
              
              <div className="eq-part" style={{ borderLeftColor: 'var(--coral)' }}>
                <strong>Execution</strong>
                <span>Consultancy, implementation and ongoing marketing</span>
              </div>
              
              <div className="op">=</div>
              
              <div className="eq-part" style={{ backgroundColor: 'var(--dark-sage)', color: 'var(--warm-white)', border: 'none' }}>
                <strong style={{ color: 'var(--warm-white)' }}>Growth</strong>
                <span style={{ color: 'var(--warm-white)' }}>A growth operation that works as one</span>
              </div>
              <figcaption>The Sage Kite model: systems, people and execution, working together.</figcaption>
            </figure>`;

if (code.includes(eqOld)) {
  code = code.replace(eqOld, eqNew);
} else {
  // Try regex if whitespace differs slightly
  console.log("Could not find exact equation HTML, trying regex...");
  code = code.replace(/<figure className="equation".*?<\/figure>/s, eqNew);
}

fs.writeFileSync('app/page.tsx', code);
