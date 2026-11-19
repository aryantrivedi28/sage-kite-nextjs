/**
 * Article body for /blog/do-i-need-a-consultant-to-implement-mindbody. Kept in its own file because it is
 * long; post.tsx points `content` at it. Text, headings, bold and links are section 3 ("Final article") of
 * Sage_Kite_Mindbody_Consultant_Blog (1).docx, word for word. The DOCX's bold title line is left out because
 * the blog layout renders the H1 from `title`, and sagekite.com links are relative paths. Mindbody claims were
 * checked against Mindbody's own pages on 11 November 2026 (decision.md D084). FAQ text must stay identical to
 * the `faqs` array in post.tsx.
 */
import type React from 'react';

/** External source link: opens in a new tab. */
function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function MindbodyConsultantArticle() {
  return (
    <>
      <p>You have picked Mindbody, or you are close to it, and someone has told you to hire a consultant to set it up. That is a fair thing to question, because Mindbody already includes onboarding. Paying twice for setup can feel like paying for the same job.</p>
      <p>The honest answer is that it depends on what the job actually is. Learning the software and designing it around how your business sells, serves and retains clients are two different pieces of work. Mindbody is set up to help with the first. Whether you need help with the second comes down to how complicated your business is.</p>
      <p><strong>Quick answer</strong></p>
      <p>No, you do not automatically need a consultant. Mindbody includes one-on-one setup and training on every plan at no extra cost, and a single-location studio with a straightforward schedule, a few pricing options and no old data to move can often launch well on that alone. An independent consultant starts to earn their fee when the difficulty sits in your business rather than the software: complicated memberships, several locations, a migration, an account that has grown messy, or nobody on your team with the time to own the project. Complexity should decide this, not the fact that you own the software.</p>

      <h2 id="mindbody-onboarding-support">Does Mindbody provide its own implementation and onboarding support?</h2>
      <p>Yes. Mindbody&apos;s pricing page says there is <Src href="https://www.mindbodyonline.com/business/pricing">no onboarding fee on any plan</Src>, and that every customer gets one-on-one setup and training at no extra cost. A dedicated onboarding specialist runs a kickoff call, gathers details on your services, pricing, workflows and goals, configures the core elements and sets up payments.</p>
      <p>Mindbody&apos;s own <Src href="https://www.mindbodyonline.com/business/education/blog/switching-mindbody">migration guide</Src> describes a four-phase process: discovery, system setup, data mapping, then staff training, import and go-live. For a single location it gives a timeline of about 30 days, and notes that multi-location businesses may need longer. The onboarding focus, according to Mindbody&apos;s <Src href="https://www.mindbodyonline.com/business/education/blog/support-shows-up-mindbody">support overview</Src>, is the fundamentals that cause trouble later if skipped: schedules and services, staff permissions, payments, pricing and memberships, and booking flows. After go-live, a Customer Success Manager helps with reporting, marketing and outreach features.</p>
      <h3>What you still have to bring</h3>
      <p>Mindbody sets up the software around the information you give it. You supply the services, classes, pricing and booking policies, your client lists, and the decisions about what to move and what to archive. You also train your own staff, with Mindbody&apos;s tailored sessions and Learning Center behind you, and you nominate one person to coordinate. Mindbody is clear that go-live timing depends on how quickly you meet with them and share your data.</p>
      <h3>Where the fine print matters</h3>
      <ul>
        <li><strong>Data migration.</strong> The pricing page lists data migration support as included, but its FAQ says a data transfer service may carry fees, and that premium implementation and custom data conversion for larger operations are priced separately. An older Mindbody <Src href="https://www.mindbodyonline.com/sites/default/files/public/education/learning-assets/How_to_switch_fitness_software.pdf">switching guide</Src> describes basic conversions as part of onboarding, but says converting remaining sessions and future booked appointments carries an extra charge, and large autopay conversions fall under paid Premium Services. Ask your sales rep exactly what your migration will include.</li>
        <li><strong>Features depend on your plan.</strong> As of this writing, Mindbody&apos;s pricing page lists automated email and text marketing and the lead management dashboard under the Ultimate plan, not Starter. Your onboarding can only configure what your plan includes, so decide what you need before you choose a plan.</li>
        <li><strong>Complex businesses take longer.</strong> Mindbody itself says multiple locations, lots of staff or detailed pricing and services may need extra time.</li>
      </ul>

      <h2 id="what-a-consultant-does">What does a Mindbody consultant actually do?</h2>
      <p><a href="/services/consultancy">A consultant</a> works on the business side of the project before and alongside the software. Where an onboarding specialist is concerned with getting your account configured correctly, an independent consultant is typically concerned with whether the way you have decided to run things is the right one, and then building to match. Depending on the project, that can include:</p>
      <ul>
        <li>mapping how a new client goes from enquiry to first class to member, and where that journey currently breaks</li>
        <li>structuring services, pricing options, packages and membership contracts so they are clear to clients and to your front desk</li>
        <li>configuring online booking rules to match your actual policies on cancellations, waitlists and late arrivals</li>
        <li>setting up lead capture, follow-up and introductory-offer conversion</li>
        <li>building automated campaigns and win-back messages for lapsed clients, within what your plan supports</li>
        <li>checking payment and membership billing setup so autopay and contracts do not conflict</li>
        <li>setting up reports that answer questions you actually ask, such as how many intro-offer buyers become members</li>
        <li>training staff and writing short operating documents so the setup survives staff turnover</li>
      </ul>
      <p>No project needs all of this. A new studio may need two of these items and a tidy-up of an old account may need five. Mindbody&apos;s published onboarding materials centre on core setup. They do not describe designing intro-offer follow-up or win-back journeys as part of onboarding, though your Customer Success Manager can help with marketing features once you are live. That gap, and the time to think through your processes properly, is where independent help can add something. It is the kind of work Sage Kite does through its <a href="/platforms/mindbody">Mindbody implementation service</a>.</p>

      <h2 id="onboarding-vs-consultant">Mindbody&apos;s onboarding vs hiring an independent consultant</h2>
      <p>The comparison below draws on Mindbody&apos;s published materials. Where Mindbody&apos;s pages do not say something, the table says so rather than assuming.</p>
      <table>
        <thead>
          <tr><th></th><th>Mindbody&apos;s included onboarding</th><th>Independent consultant</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Who provides it</strong></td><td>A Mindbody onboarding specialist, then a Customer Success Manager after go-live</td><td>A third party you hire, separate from Mindbody</td></tr>
          <tr><td><strong>Primary objective</strong></td><td>Get your account configured, your data in and your team trained</td><td>Design how the business should run in Mindbody, then configure to match</td></tr>
          <tr><td><strong>Initial setup</strong></td><td>Included. Core configuration and payments set up</td><td>Can do the full setup or work alongside the onboarding specialist</td></tr>
          <tr><td><strong>Business-process planning</strong></td><td>Kickoff gathers details on services, pricing, workflows and goals</td><td>Can map the member journey and operating rules before anything is built</td></tr>
          <tr><td><strong>Pricing and memberships</strong></td><td>Configured from the information you provide</td><td>Can review and simplify the structure before it is configured</td></tr>
          <tr><td><strong>Lead management</strong></td><td>Plan-dependent. Not described as part of onboarding scope; the Customer Success Manager can help post go-live</td><td>Can design follow-up and intro-offer conversion, within your plan&apos;s features</td></tr>
          <tr><td><strong>Marketing automation</strong></td><td>Plan-dependent. Same as above</td><td>Can plan and build campaigns and win-back flows your plan supports</td></tr>
          <tr><td><strong>Data migration</strong></td><td>Included support, but some conversions and premium services can cost extra</td><td>Can clean and check data before and after import. Conversions run through Mindbody&apos;s process</td></tr>
          <tr><td><strong>Staff training</strong></td><td>Tailored sessions, Learning Center and certifications</td><td>Role-based training and short operating guides built around your setup</td></tr>
          <tr><td><strong>Account cleanup</strong></td><td>Aimed at new setups. Software audits are listed under paid Technical Account Management</td><td>Audits and rationalises existing pricing, offers, permissions and automations</td></tr>
          <tr><td><strong>Custom requirements</strong></td><td>Premium implementation and custom data conversion for larger operations, priced separately</td><td>Scoped per project, within what Mindbody and its integrations support</td></tr>
          <tr><td><strong>Ongoing help</strong></td><td>24/7 support, AI Assistant, Learning Center</td><td>Depends on the engagement: handover only, or a maintenance agreement</td></tr>
        </tbody>
      </table>
      <h3>There is a middle option</h3>
      <p>It is not a straight choice between free onboarding and an outside consultant. Mindbody also sells <Src href="https://mindbodyonline.com/business/professional-services">Technical Account Management</Src> through hourly packages, with software audits and personalised reporting projects. No prices are published. It also runs a <Src href="https://www.mindbodyonline.com/de-de/node/4185">Certified Consultant program</Src>, which Mindbody describes as business-focused (strategy, operations and finance). That page does not say whether fees are separate from your subscription, so ask. If certification by Mindbody matters to you, check the consultant is listed there instead of assuming it.</p>

      <h2 id="when-onboarding-is-enough">When is Mindbody&apos;s included onboarding enough?</h2>
      <p>Included onboarding is a realistic route when the project is mostly about learning and configuring the software, and you can give it time. That usually looks like:</p>
      <ul>
        <li>a single location with a straightforward class or appointment schedule</li>
        <li>a small number of services and simple pricing and membership options</li>
        <li>a new business with no extensive legacy data to move</li>
        <li>an owner or manager who can attend the calls, make decisions quickly and run staff training</li>
      </ul>
      <p><strong>Example: a new yoga studio.</strong> One room, a weekly timetable, a drop-in rate, a class pack and one unlimited membership. No existing client list. The decisions are few and the owner already knows the answers. An onboarding specialist can configure that in the time Mindbody describes, and the owner learns the system by building it. Hiring a consultant here would mostly be paying for decisions the owner can make alone.</p>

      <h2 id="when-to-hire-a-consultant">When should you hire a Mindbody consultant?</h2>
      <p>Outside help earns its cost when the hard part is the business, not the software. These are the situations where it most often does:</p>
      <table>
        <thead>
          <tr><th>Situation</th><th>Why extra expertise can help</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Multiple locations</strong></td><td>Pricing, permissions, schedules and reporting have to work across sites. Mindbody offers multi-location setups, but someone has to decide how they should be configured before they are built</td></tr>
          <tr><td><strong>Complicated pricing and contracts</strong></td><td>Many packages, memberships and promotions can overlap. A review before setup keeps the client-facing menu simple</td></tr>
          <tr><td><strong>An existing account that has become messy</strong></td><td>Old offers, unused pricing options and inconsistent settings pile up. An audit and cleanup differs from a first-time setup</td></tr>
          <tr><td><strong>Moving from another platform</strong></td><td>Mapping data, checking autopay and remaining sessions, and validating after import needs careful planning. Mindbody notes that what can transfer depends on your current software</td></tr>
          <tr><td><strong>Weak lead follow-up or intro-offer conversion</strong></td><td>Software can send messages, but someone has to define who gets what, and when</td></tr>
          <tr><td><strong>Retention and win-back needs</strong></td><td>Reactivation journeys need a clear definition of &apos;lapsed&apos; and an offer worth coming back for</td></tr>
          <tr><td><strong>Integrations or custom requirements</strong></td><td>Scope and dependencies need to be agreed early. Not every integration is available on every plan</td></tr>
          <tr><td><strong>No internal capacity</strong></td><td>If nobody can own the project for several weeks, decisions stall and the launch drifts</td></tr>
        </tbody>
      </table>
      <p><strong>Example: an established Pilates studio.</strong> The studio has used Mindbody for four years. It now has eleven pricing options, three of which nobody sells, expired intro offers still visible online, and no routine for following up people who bought a trial and never returned. Staff each explain the menu differently. Nothing is broken, but the setup reflects four years of one-off decisions. Onboarding does not fit this, because the account is not new. An audit, a simpler pricing structure and a defined intro-offer follow-up process would help.</p>
      <p><strong>Example: a multi-location fitness business.</strong> Four sites with different timetables, shared memberships, location-specific staff permissions, and a need for consolidated reporting, with client records arriving from a previous platform. Mindbody offers <Src href="https://www.mindbodyonline.com/en-au/business/multi-location-management">multi-location management</Src>, and its onboarding can cover core setup, but this is a project with many decisions, and getting them wrong is expensive to unwind. A project plan, a single owner for decisions and a test phase matter more than usual.</p>

      <h2 id="what-can-go-wrong">What can go wrong without proper implementation planning?</h2>
      <p>None of these are Mindbody failures. They are decisions that were never made, or were made in a hurry. Here is how each tends to arise, what it costs, and how to avoid it.</p>
      <table>
        <thead>
          <tr><th>Problem</th><th>Why it happens</th><th>Business impact</th><th>How to prevent it</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Confusing pricing options</strong></td><td>Packages are added one at a time without removing old ones</td><td>Clients and front desk pick the wrong product; more refunds and manual fixes</td><td>Draft the full menu on one page before configuring anything</td></tr>
          <tr><td><strong>Booking rules that do not match policy</strong></td><td>Defaults are left in place</td><td>Late-cancel fees or waitlists behave differently from what clients were told</td><td>Write your policies down first, then test each one as a client</td></tr>
          <tr><td><strong>Wrong staff permissions</strong></td><td>Everyone is given broad access to save time</td><td>Staff see or change things they should not</td><td>Define roles first; give the minimum access each needs</td></tr>
          <tr><td><strong>Mis-mapped or incomplete data</strong></td><td>Source data is messy and checked too late</td><td>Missing sessions, wrong balances, billing errors</td><td>Clean data first, then compare reports before and after import</td></tr>
          <tr><td><strong>Conflicting membership and billing setup</strong></td><td>Contracts and autopay set up separately</td><td>Failed or double charges; membership disputes</td><td>Test a sample of each membership from sign-up to second payment</td></tr>
          <tr><td><strong>Leads without consistent follow-up</strong></td><td>No owner and no defined process</td><td>Trial buyers never hear from you again</td><td>Decide who follows up, when, and by which channel</td></tr>
          <tr><td><strong>Intro offers with no conversion process</strong></td><td>Offer is built, the next step is not</td><td>You get trials but few members</td><td>Define what happens between first class and membership offer</td></tr>
          <tr><td><strong>Under-trained staff</strong></td><td>Training is squeezed in the week of launch</td><td>Front-desk errors; owner becomes the help desk</td><td>Train in stages and keep a short how-to guide</td></tr>
          <tr><td><strong>Reports that answer no business question</strong></td><td>Defaults are accepted</td><td>You cannot see conversion or retention</td><td>List five questions you want answered, then set up the reports</td></tr>
        </tbody>
      </table>

      <h2 id="what-it-costs">How much does Mindbody implementation consulting cost?</h2>
      <p>It helps to separate four things.</p>
      <ul>
        <li><strong>Mindbody subscription.</strong> Mindbody&apos;s US page shows <Src href="https://www.mindbodyonline.com/business/education/blog/new-mindbody-pricing-united-states">plans starting at $79 per month per location</Src>. Higher plans are quote-based, and prices rise with locations, not with staff. Mindbody Payments, if you use it, adds a processing rate plus a fixed fee per transaction. Check the page for current numbers, since pricing changes.</li>
        <li><strong>Included onboarding.</strong> No onboarding fee, according to Mindbody.</li>
        <li><strong>Mindbody&apos;s paid extras.</strong> Premium implementation, custom data conversion and Technical Account Management exist, and none have published prices.</li>
        <li><strong>Independent consultant fees.</strong> There is no reliable public benchmark. Publicly listed freelancer packages range widely, from low hundreds of dollars for a basic audit to over a thousand for larger tiers, but those are individual listings with different scopes, not a market average, and they are not comparable to a full multi-location implementation. Sage Kite scopes work through a discovery conversation and quotes a fixed project price.</li>
      </ul>
      <p>What moves the price most:</p>
      <ul>
        <li>number of locations</li>
        <li>number of services and pricing options</li>
        <li>the condition of an existing account</li>
        <li>data migration requirements</li>
        <li>the number of integrations</li>
        <li>automation and reporting requirements</li>
        <li>training and handover scope</li>
      </ul>
      <p>A practical way to judge value: do not compare the fee with zero. Compare it with what a poor launch would cost you, such as trial buyers who never convert, billing mistakes, or months of owner time spent fixing settings. If you cannot name a plausible cost like that, you probably do not need the help yet.</p>

      <h2 id="how-to-decide">How to decide whether you need a Mindbody consultant</h2>
      <p>Go through these questions. The more answers fall in the right-hand column, the stronger the case for outside help. This is a rule of thumb from experience, not a tested formula.</p>
      <table>
        <thead>
          <tr><th>Question</th><th>Leans towards onboarding alone</th><th>Leans towards a consultant</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Starting fresh or fixing an account?</strong></td><td>Starting fresh</td><td>Fixing an existing account</td></tr>
          <tr><td><strong>Are pricing and memberships simple?</strong></td><td>A few clear options</td><td>Many options, contracts or promotions</td></tr>
          <tr><td><strong>Is data migration involved?</strong></td><td>No, or a basic client list</td><td>Yes, especially autopay or remaining sessions</td></tr>
          <tr><td><strong>How many locations?</strong></td><td>One</td><td>Two or more</td></tr>
          <tr><td><strong>Do you need custom workflows or integrations?</strong></td><td>No</td><td>Yes</td></tr>
          <tr><td><strong>Can your team give it several weeks of attention?</strong></td><td>Yes</td><td>No</td></tr>
          <tr><td><strong>Is the member journey already defined?</strong></td><td>Yes, written down</td><td>No, it lives in people&apos;s heads</td></tr>
          <tr><td><strong>Are follow-up and retention processes in place?</strong></td><td>Yes</td><td>No</td></tr>
        </tbody>
      </table>
      <p><strong>A sensible middle path:</strong> if you are unsure, run the included onboarding and ask an outside expert for a scoped review before go-live, covering pricing, booking rules, permissions and lead follow-up. That is a smaller commitment than a full implementation, and it catches the common problems early.</p>

      <h2 id="what-to-look-for">What should you look for when hiring a Mindbody consultant?</h2>
      <ul>
        <li><strong>Demonstrated Mindbody experience.</strong> Ask for examples of similar setups and what the consultant did on each.</li>
        <li><strong>Understanding of fitness and wellness operations.</strong> Software knowledge alone does not tell you how to price an intro offer.</li>
        <li><strong>Membership, pricing and migration experience.</strong> Ask how they validate autopay and remaining sessions after an import.</li>
        <li><strong>A clear scope.</strong> You should know what is included and excluded, who owns each decision, and what counts as finished.</li>
        <li><strong>Testing and quality checks.</strong> Ask how setups are tested before launch.</li>
        <li><strong>Training and documentation.</strong> Your team should be able to run the system without calling the consultant.</li>
        <li><strong>Transparent pricing.</strong> Fixed or clearly estimated, not open-ended.</li>
        <li><strong>Account ownership and access.</strong> You should own your account and know exactly what access the consultant has, and when it ends.</li>
      </ul>
      <p>Be careful with claims of Mindbody affiliation. Ask a consultant directly whether they are certified or partnered with Mindbody, and verify through Mindbody if it matters to you. Sage Kite is an independent consultancy and is not an official Mindbody partner.</p>

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>
      <h3>Does Mindbody charge an implementation fee?</h3>
      <p>Mindbody says there is no onboarding fee on any plan. Premium implementation, some data conversion services and Technical Account Management are priced separately, with no published prices.</p>
      <h3>Can I set up Mindbody without a consultant?</h3>
      <p>Yes. Many straightforward single-location setups can be completed with Mindbody&apos;s included onboarding, provided someone on your team can dedicate the time.</p>
      <h3>Does Mindbody provide one-on-one onboarding?</h3>
      <p>Yes. Mindbody states that every customer gets one-on-one setup and training support at no additional cost.</p>
      <h3>How long does Mindbody setup take?</h3>
      <p>Mindbody gives no fixed timeline on its pricing page. Its migration guide cites about 30 days for a single location and says multi-location businesses may need longer. Timing depends largely on how quickly you share your information.</p>
      <h3>Does Mindbody help migrate client data?</h3>
      <p>Yes, within limits. Mindbody lists client profiles, memberships, packages, balances, gift cards and future bookings as importable, but what transfers depends on your current software, and some conversions can cost extra.</p>
      <h3>What does an independent Mindbody consultant do?</h3>
      <p>They help design and configure Mindbody around your business processes: pricing, memberships, booking rules, lead follow-up, campaigns, reporting and training. Scope varies by project.</p>
      <h3>Is hiring a Mindbody consultant worth it?</h3>
      <p>It depends on complexity. For a simple new studio, usually not. For multiple locations, a migration or a messy existing account, it often can be. Compare the fee with the cost of getting the setup wrong.</p>
      <h3>Can a consultant help fix an existing Mindbody account?</h3>
      <p>Yes. Cleaning up pricing options, offers, permissions and automations is one of the most common reasons to bring in outside help.</p>

      <h2 id="the-bottom-line">The bottom line</h2>
      <p>Not every business needs an independent Mindbody consultant. Mindbody&apos;s included onboarding is built to get a straightforward account live, and for a simple studio it is often enough. Extra expertise pays off when the business is more complex, when an existing account needs untangling, when data is being migrated, or when you want lead follow-up and retention designed deliberately rather than left to defaults.</p>
      <p>If you want a second opinion on where you fall, Sage Kite, a <a href="/services/consultancy">business growth consultancy</a>, can review your setup or plan and help configure Mindbody around how you win, serve and keep clients. You can read more about our <a href="/platforms/mindbody">Mindbody setup and consulting work</a> and start with a discovery conversation.</p>
    </>
  );
}
