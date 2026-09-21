const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

const oldSectionRegex = /\{\/\* FAQ section \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* FAQ section */}
        <section className="wrap" style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
           <div className={\`head \${styles['faq-head']}\`} style={{ maxWidth: '100%', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
             <h2>Frequently asked questions</h2>
           </div>
           
           {/* Group 1: HoneyBook setup */}
           <div className="faq-group">
              <div className="label">HoneyBook setup</div>
              <div className={styles['faq-grid']}>
                 <div className={styles['faq-item']}>
                   <h3>What are HoneyBook setup services?</h3>
                   <p>HoneyBook setup services configure HoneyBook around your client process: account settings and branding, lead capture forms, Smart Files, proposals, contracts, invoices and payments, the scheduler, questionnaires, email templates and automated workflows. Sage Kite maps how your business actually books and serves clients first, then builds the account to match, tests it and hands it over.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>What does a HoneyBook specialist do?</h3>
                   <p>A HoneyBook specialist designs the client process, configures the account to match it and builds the automations that handle the repetitive steps. The aim is a system that sends the right file or email at the right moment, keeps payments on schedule and gives every client the same professional experience, rather than a set of features left for you to assemble.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Can Sage Kite set up HoneyBook from scratch?</h3>
                   <p>Yes. A new setup starts by mapping your clientflow from first enquiry to final payment and follow-up, then building the Smart Files, forms, templates and emails that process needs, configuring payments and scheduling, and creating the automations. Everything is tested with sample client journeys before your team or clients see it.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Can you fix or improve an existing HoneyBook account?</h3>
                   <p>Yes. We review the Smart Files, forms, templates and automations already in use, find where the setup and your real process have drifted apart, remove duplicated or unused content, and rebuild the parts that are holding you back. This is a common request from businesses that set HoneyBook up quickly and never finished it.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 2: Scope and configuration */}
           <div className="faq-group">
              <div className="label">Scope and configuration</div>
              <div className={styles['faq-grid']}>
                 <div className={styles['faq-item']}>
                   <h3>Can Sage Kite build HoneyBook automations and workflows?</h3>
                   <p>Yes. HoneyBook automations are sequences of actions — sending a Smart File or email, creating a task, moving a project stage — triggered by events and, where useful, by conditions such as whether a client has replied. We build these around the process we mapped, then test each path so the wrong email never sends at the wrong time.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Can you configure Smart Files, proposals and contracts?</h3>
                   <p>Yes. Smart Files let a client select services, sign a contract and pay from one interactive document. We build the packages, proposals, brochures and contract templates with electronic signatures, connected so a booking can move from selection to payment without manual steps in between.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Can you set up invoices, payments and the scheduler?</h3>
                   <p>Yes. That covers invoice templates, payment schedules, reminders and automatic late fees with HoneyBook payments connected, plus schedulers and appointment types linked to your calendar with confirmations and reminders. What is available depends on your HoneyBook plan, which we confirm during discovery.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Which parts stay manual?</h3>
                   <p>Whatever genuinely needs a person. Consultations, the actual delivery of your work and difficult conversations stay with your team. Automation handles the predictable steps around them — capturing the enquiry, sending the proposal, chasing the payment, starting onboarding — so the admin stops depending on someone remembering.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Can Sage Kite help migrate from another tool?</h3>
                   <p>Sometimes. HoneyBook can import contacts, and moving templates and content across is usually a rebuild rather than a direct transfer. Feasibility depends on what your current system can export and what HoneyBook can accept, so we confirm what is realistic in discovery before anything is scoped.</p>
                 </div>
              </div>
           </div>
           
           {/* Group 3: Working with Sage Kite */}
           <div className="faq-group">
              <div className="label">Working with Sage Kite</div>
              <div className={styles['faq-grid']}>
                 <div className={styles['faq-item']}>
                   <h3>Is HoneyBook available in my country?</h3>
                   <p>HoneyBook currently supports businesses based in the United States, Canada, the United Kingdom and Australia. Businesses in other regions, including the EU and New Zealand, cannot yet open a HoneyBook account. If HoneyBook is not available where your business is based, we can recommend and implement a platform that is — that is part of the consultancy.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>How does a HoneyBook implementation work?</h3>
                   <p>Seven stages: discovery, clientflow mapping, build, automation, testing, handover, and ongoing support where it is wanted. Scope, exclusions, milestones and a fixed project price are agreed in the proposal before any build begins.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Who should hire a HoneyBook specialist?</h3>
                   <p>Businesses that have chosen HoneyBook but do not have the time to learn it properly, owners whose account no longer matches how they work, and small teams that want the booking and onboarding process to run the same way whoever handles it. If you are still deciding whether HoneyBook is right, that is a consultancy conversation we are happy to have first.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Will my team receive training?</h3>
                   <p>Yes. Handover includes training for the people who will run the account day to day, plus documentation of what was built and how to change it, so the system does not depend on one person.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>What happens after setup?</h3>
                   <p>You own the account and can run it. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as your services change, and the wider marketing, automation and staffing that turn a tidy booking process into growth.</p>
                 </div>
                 <div className={styles['faq-item']}>
                   <h3>Is Sage Kite only a HoneyBook agency?</h3>
                   <p>No. Sage Kite is a business growth consultancy. HoneyBook is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you book and serve clients; the broader work decides what to change and creates the demand that flows through it.</p>
                 </div>
              </div>
           </div>
        </section>`;

pageContent = pageContent.replace(oldSectionRegex, newSection);
fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

// 2. Update honeybook.module.css
let cssContent = fs.readFileSync('app/platforms/honeybook/honeybook.module.css', 'utf8');

// The faq-grid needs to be 2 columns and handle borders.
// Currently it's: .faq-grid{display:grid}
cssContent = cssContent.replace(
    /\.faq-grid\{display:grid\}/, 
    '.faq-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 48px; }'
);

// Add styling for faq-item
const newCss = `
.faq-head h2 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: clamp(2.4rem, 4.5vw, 3.2rem); letter-spacing: -0.02em; }
.faq-item { padding: 24px 0; }
.faq-item:nth-child(n+3) { border-top: 1px solid var(--light-sage); }
.faq-item h3 { font-size: 0.95rem; line-height: 1.4; color: var(--ink); margin-bottom: 8px; font-weight: 700; letter-spacing: 0; }
.faq-item p { font-size: 0.85rem; line-height: 1.55; color: var(--dark-sage); }
`;

cssContent += newCss;

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);

console.log('FAQ section updated.');
