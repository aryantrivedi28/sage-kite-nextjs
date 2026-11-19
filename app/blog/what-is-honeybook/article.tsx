/**
 * Article body for /blog/what-is-honeybook. Kept in its own file because it is
 * long; post.tsx points `content` at it. Product facts were checked against
 * official HoneyBook pages on 2 October 2026. FAQ text must stay identical to
 * the `faqs` array in post.tsx.
 */
import type React from 'react';
import { FieldDiagram } from '@/components/blog/FieldDiagram';

/** External source link: opens in a new tab. */
function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const HB = {
  pricing: 'https://www.honeybook.com/pricing',
  reviews: 'https://www.honeybook.com/reviews',
  proposals: 'https://www.honeybook.com/product/proposal-software',
  crm: 'https://www.honeybook.com/product/crm',
  automations: 'https://www.honeybook.com/product/automations',
  createAutomation: 'https://help.honeybook.com/en/articles/9493889-how-to-create-an-automation',
  pipeline: 'https://help.honeybook.com/en/articles/2463528-customize-your-pipeline-in-honeybook',
  notTriggering: 'https://help.honeybook.com/en/articles/9976128-what-to-do-if-your-automation-isn-t-triggering',
  projectDate: 'https://help.honeybook.com/en/articles/10149122-how-to-automatically-trigger-actions-leading-up-to-a-project-date',
  techradar: 'https://www.techradar.com/pro/software-services/honeybook-crm-review',
  forbes: 'https://www.forbes.com/advisor/business/software/honeybook-review/',
};

export default function WhatIsHoneyBookArticle() {
  return (
    <>
      <p>
        HoneyBook is a cloud-based client management platform for independent, service-based
        businesses. It puts the steps between a client&apos;s first enquiry and final payment in one
        system: lead capture, proposals, contracts, invoices, payments, scheduling and project
        tracking, with automations for the steps that repeat. HoneyBook describes itself as
        AI-powered client relationship software for creatives, consultants, marketers, event
        professionals and similar businesses (<Src href={HB.pricing}>HoneyBook pricing page</Src>).
      </p>
      <p>
        In software terms, HoneyBook is best understood as a client-lifecycle platform with CRM
        functionality built in, rather than as a CRM alone. This guide explains what that means, how
        a client moves through the platform, what it can automate, who it suits and where its
        boundaries are. Product details were checked against HoneyBook&apos;s official pages in
        October 2026.
      </p>

      <h2 id="honeybook-at-a-glance">HoneyBook at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Short answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>What kind of software?</strong></td>
            <td>Client management for service businesses: CRM, proposals, contracts, invoicing, payments, scheduling, project tracking and automation in one platform.</td>
          </tr>
          <tr>
            <td><strong>Who is it built for?</strong></td>
            <td>Independent service businesses such as photographers, consultants, event professionals, designers and coaches.</td>
          </tr>
          <tr>
            <td><strong>Core idea</strong></td>
            <td>One project record per client that carries the conversation, the documents and the payments.</td>
          </tr>
          <tr>
            <td><strong>Where is it available?</strong></td>
            <td>U.S., Canada, UK and Australia. HoneyBook says it only supports professionals located in these countries.</td>
          </tr>
          <tr>
            <td><strong>What does it cost?</strong></td>
            <td>Plans start at $29 per month billed yearly (U.S. site), with a 30-day free trial and payment processing fees on top.</td>
          </tr>
          <tr>
            <td><strong>What is it not built for?</strong></td>
            <td>It is positioned for service businesses, not product-based ecommerce, large enterprise sales teams or advanced multi-channel marketing. See the fit section below.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="what-is-honeybook">What is HoneyBook?</h2>
      <p>
        HoneyBook is software for the client side of a service business: the path from an enquiry
        to a signed agreement, a payment and a finished project. HoneyBook&apos;s own term for this
        is a &quot;clientflow&quot; platform (<Src href={HB.reviews}>HoneyBook reviews page</Src>).
      </p>
      <p>
        <strong>Clientflow</strong> means the sequence a client follows through a service business,
        from first enquiry to payment and delivery. It matters because most service businesses run
        that sequence across several unconnected tools, and information gets retyped or lost between
        them. For example, a lead might submit a web form, receive a proposal as a PDF, sign through
        a separate e-signature tool and pay through a separate invoicing tool. HoneyBook&apos;s model
        is to hold those steps against a single client project instead.
      </p>
      <h3 id="not-simply-a-contact-database">HoneyBook is not simply a contact database</h3>
      <p>
        A contact database stores who a client is. HoneyBook&apos;s project record also tracks where
        the work stands: which documents were sent, viewed and signed, and what has been paid. That
        is the difference between storing client information and managing the client process, and it
        explains why HoneyBook is described in several ways (CRM, client management, business
        management) without any one label fitting completely.
      </p>

      <FieldDiagram
        id="clientflow"
        label="The clientflow idea"
        title="Four separate tools become one client project."
        takeaway="The benefit is less about having each feature and more about the client's choices carrying through."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Without one system</span>
            <b>Separate tools</b>
            <div className="fd-scatter">
              <i>Web form</i><i>PDF proposal</i><i>E-signature tool</i><i>Invoicing tool</i>
            </div>
            <small>Information is retyped or lost between them</small>
          </div>
          <div className="fd-versus">BECOMES</div>
          <div className="fd-box">
            <span className="fd-k">In HoneyBook</span>
            <b>One client project</b>
            <div className="fd-chips">
              <i>Form</i><i>Proposal</i><i>Contract</i><i>Invoice</i>
            </div>
            <small>The client&apos;s choices carry through each step</small>
          </div>
        </div>
      </FieldDiagram>

      <h2 id="what-is-honeybook-used-for">What is HoneyBook used for?</h2>
      <p>Service businesses use HoneyBook to handle the repeatable administrative steps around winning and serving a client:</p>
      <ul>
        <li><strong>Capturing enquiries:</strong> branded lead forms and questionnaires that create a project in the pipeline.</li>
        <li><strong>Presenting services and pricing:</strong> proposals with service selection, packages and add-ons.</li>
        <li><strong>Getting agreements signed:</strong> contracts and forms with electronic signature.</li>
        <li><strong>Collecting payment:</strong> invoices, payment plans, autopay and payment reminders.</li>
        <li><strong>Keeping client work organised:</strong> a pipeline, tasks and a client portal for files and project details.</li>
        <li><strong>Reducing repeat admin:</strong> templates and automations for emails, files and tasks.</li>
      </ul>
      <p>
        The value lies in how these connect. A proposal, a contract and an invoice do different
        jobs: the proposal presents services and price, the contract records the agreement, and the
        invoice requests payment. HoneyBook&apos;s documentation treats them as separate documents
        that can be combined into one flow or sent separately, and says invoices and contracts update
        to reflect the services a client selects (<Src href={HB.proposals}>HoneyBook proposals page</Src>).
        So the benefit is less about having each feature and more about the client&apos;s choices
        carrying through from one step to the next.
      </p>

      <h2 id="how-does-honeybook-work">How does HoneyBook work?</h2>
      <p>
        The easiest way to understand HoneyBook is to follow a client through it. The sequence below
        is a conceptual model of a service-business client journey. Not every business uses every
        stage, and HoneyBook lets you combine or skip steps (a proposal does not have to include a
        contract or payment, for instance).
      </p>
      <p>
        <strong>
          Enquiry &rarr; Communication &rarr; Proposal &rarr; Contract &rarr; Payment &rarr; Project
          work &rarr; Follow-up &rarr; Repeat business
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>What HoneyBook provides</th>
            <th>What typically sits outside it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Enquiry</strong></td>
            <td>Lead forms and questionnaires. Live lead forms are limited by plan: 2 on Starter, 10 on Essentials, unlimited on Premium.</td>
            <td>Getting people to the form: your website, search, advertising and referrals.</td>
          </tr>
          <tr>
            <td><strong>Communication</strong></td>
            <td>A client record holding contacts, conversations, files, notes and payments. Email can be used inside HoneyBook; SMS reminders are included from Essentials.</td>
            <td>Newsletters and broader email campaigns. Integrations such as Flodesk and Mailchimp are listed.</td>
          </tr>
          <tr>
            <td><strong>Proposal</strong></td>
            <td>Proposals with service selection, packages and add-ons. HoneyBook tracks when a proposal is opened.</td>
            <td>The commercial decisions: what to offer and how to price it.</td>
          </tr>
          <tr>
            <td><strong>Contract</strong></td>
            <td>Contracts and forms with e-signature, built from templates.</td>
            <td>Legal review of your terms remains the business&apos;s responsibility.</td>
          </tr>
          <tr>
            <td><strong>Payment</strong></td>
            <td>Invoices (one-time, recurring or custom schedules), payment plans, autopay, reminders, card and bank-transfer payments.</td>
            <td>Accounting, tax and payroll. A QuickBooks Online integration is available from the Essentials plan.</td>
          </tr>
          <tr>
            <td><strong>Project work</strong></td>
            <td>A pipeline with custom stages, tasks and a client portal for files and project details.</td>
            <td>Specialist production tools, such as photo galleries (a Pic-Time integration is listed).</td>
          </tr>
          <tr>
            <td><strong>Follow-up</strong></td>
            <td>Automations triggered by events and project dates, plus reports (basic, standard or advanced by plan).</td>
            <td>Deeper analysis in dedicated reporting or accounting tools.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: <Src href={HB.crm}>HoneyBook CRM page</Src>, <Src href={HB.pricing}>pricing page</Src>,{' '}
        <Src href={HB.proposals}>proposals page</Src>.
      </p>

      <h2 id="what-does-honeybook-include">What does HoneyBook include?</h2>
      <p>
        Rather than a feature dump, the table groups HoneyBook&apos;s capabilities by the business
        problem they address. Plan requirements are taken from the official pricing page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Business need</th>
            <th>What HoneyBook offers</th>
            <th>Plan note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Client records and pipeline</strong></td>
            <td>Unlimited clients and projects, custom fields, tags, customisable pipeline, pipeline automations, client portal.</td>
            <td>All plans</td>
          </tr>
          <tr>
            <td><strong>Scheduling</strong></td>
            <td>A scheduler for sharing availability, a schedule-and-pay option and meeting reminders.</td>
            <td>Essentials and Premium</td>
          </tr>
          <tr>
            <td><strong>Files</strong></td>
            <td>Proposals, contracts, invoices, forms and questionnaires, with a template gallery and file tracking.</td>
            <td>All plans</td>
          </tr>
          <tr>
            <td><strong>Payments</strong></td>
            <td>Card, bank transfer (ACH), Apple Pay and Google Pay, payment plans, autopay, late fees, reminders.</td>
            <td>All plans; processing fees apply</td>
          </tr>
          <tr>
            <td><strong>Automation</strong></td>
            <td>Workflows made of triggers, actions, waits and conditions.</td>
            <td>Essentials and Premium</td>
          </tr>
          <tr>
            <td><strong>AI features</strong></td>
            <td>AI chat, an AI automations builder, email drafts, meeting notes, lead alerts and follow-up suggestions.</td>
            <td>Listed on all plans</td>
          </tr>
          <tr>
            <td><strong>Finance tools</strong></td>
            <td>Expense tracking, financial reports, a HoneyBook checking account and debit card, tax tools and cashflow planning. Some items carry eligibility conditions.</td>
            <td>Listed on the pricing page; check what applies in your country</td>
          </tr>
          <tr>
            <td><strong>Team and branding</strong></td>
            <td>Team members and roles, custom branding, removal of &quot;Powered by HoneyBook&quot;.</td>
            <td>Up to 2 team members on Essentials; unlimited on Premium</td>
          </tr>
        </tbody>
      </table>

      <h2 id="is-honeybook-a-crm">Is HoneyBook a CRM?</h2>
      <p>
        <strong>Short answer: partly.</strong> HoneyBook includes CRM functionality and presents
        itself as CRM software, but its scope is wider than a traditional CRM and, in some areas,
        shallower than a dedicated sales CRM.
      </p>
      <p>
        <strong>CRM</strong> (customer relationship management) is software that helps a business
        organise information about prospects and customers. It matters because without it, follow-up
        depends on memory and inboxes. HoneyBook&apos;s CRM side covers client records, custom
        fields, tags, a customisable pipeline and lead forms (<Src href={HB.crm}>CRM page</Src>).
      </p>
      <p>
        The difference is the unit of work. A traditional CRM is usually organised around contacts,
        accounts, opportunities and a sales pipeline, with sales activity and forecasting on top.
        HoneyBook is organised around a client project that moves through enquiry, proposal,
        contract, payment and delivery, carrying its documents and payments with it.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Traditional sales CRM</th>
            <th>HoneyBook-style client management</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Centred on</strong></td>
            <td>Contacts, accounts, opportunities</td>
            <td>Client projects and the client journey</td>
          </tr>
          <tr>
            <td><strong>Pipeline tracks</strong></td>
            <td>Sales stages and deal value</td>
            <td>Project stages from enquiry to delivery</td>
          </tr>
          <tr>
            <td><strong>Documents and payment</strong></td>
            <td>Usually handled by other tools</td>
            <td>Part of the same project record</td>
          </tr>
          <tr>
            <td><strong>Typical strength</strong></td>
            <td>Sales activity, reporting and forecasting at scale</td>
            <td>Moving an individual client from enquiry to paid and delivered</td>
          </tr>
        </tbody>
      </table>
      <p>
        Neither model is better in general; they suit different businesses. One independent review
        notes that HoneyBook focuses on client projects and lacks traditional CRM features such as
        lead scoring, opportunity tracking, territory management and sales forecasting
        (<Src href={HB.techradar}>TechRadar review</Src>). HoneyBook&apos;s own pages describe AI
        alerts for high-value leads, which is not the same as configurable lead scoring, so check the
        current feature set in a trial if that matters to you.
      </p>
      <p>
        Calling HoneyBook a CRM is reasonable. Calling it only a CRM leaves out the proposals,
        contracts, payments and project work that make up most of its day-to-day use.
      </p>

      <h2 id="how-does-honeybook-automation-work">How does HoneyBook automation work?</h2>
      <p>
        <strong>Automation</strong> means setting the software to perform a defined action after a
        particular event, instead of doing that step by hand. It matters because the repeated steps
        (acknowledging an enquiry, sending an onboarding email, nudging an unsigned contract) are
        easy to forget and slow to do manually.
      </p>
      <p>
        In HoneyBook, each automation starts with one trigger, followed by an action, with optional
        waits and conditions. A wait is a delay, and a condition branches the workflow depending on
        whether a criterion is met (<Src href={HB.automations}>HoneyBook automations page</Src>).
        Triggers include new enquiries, scheduling changes, file actions such as viewed or completed,
        bookings such as a signed contract or a payment, and project milestones. Emails can be edited
        before sending.
      </p>
      <p>
        <strong>Hypothetical example 1:</strong> a client signs a contract (trigger). HoneyBook sends
        a welcome email and creates an onboarding task (actions). <strong>Hypothetical example 2:</strong>{' '}
        a proposal is sent (trigger), a three-day wait follows, and if the client has not signed
        (condition), a reminder email goes out. HoneyBook uses the three-day unsigned-contract
        scenario itself as its example of conditional logic.
      </p>

      <FieldDiagram
        id="automation-anatomy"
        label="Anatomy of an automation"
        title="One trigger, then actions, with optional waits and conditions."
        takeaway="Hypothetical example 2 from above. Automations need the Essentials or Premium plan and are built on desktop."
      >
        <div className="fd-flow">
          <div className="fd-step"><span className="fd-k">01 Trigger</span><b>Proposal sent</b><small>Starts the automation</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">02 Wait</span><b>Three days</b><small>A delay before the next step</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-muted"><span className="fd-k">03 Condition</span><b>Not signed?</b><small>Branches on whether a criterion is met</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-dark"><span className="fd-k">04 Action</span><b>Reminder email</b><small>What HoneyBook sends</small></div>
        </div>
      </FieldDiagram>
      <p>
        Some documented details are worth knowing. Automations are included in the Essentials and
        Premium plans. They can only be created and edited on desktop, not in the mobile app, and
        triggers are not retroactive, so they act only on events after activation
        (<Src href={HB.createAutomation}>how to create an automation</Src>). Pipeline automations,
        which move a project to a new stage when an event such as a signed contract occurs, are a
        separate feature from the main automations builder (<Src href={HB.pipeline}>pipeline help article</Src>).
      </p>
      <h3 id="automation-depends-on-process-design">Automation depends on process design</h3>
      <p>
        An automation repeats whatever process it is given. If a business cannot yet describe its
        client journey in clear steps (who owns each stage, what triggers the next one, when a client
        counts as lost), automation will repeat the confusion faster. Defining the process first is
        the work that makes the tooling useful.
      </p>

      <h2 id="who-uses-honeybook">Who uses HoneyBook?</h2>
      <p>
        HoneyBook&apos;s site groups its audience into event services (planners, photographers, DJs,
        florists, venues), photo and video services, professional services (consultants, coaches,
        assistants, IT), personal services, marketing services, and home and real-estate services
        such as interior designers and landscapers, plus teams
        (<Src href={HB.automations}>HoneyBook automations page</Src>). Independent coverage describes
        it similarly, as a client management tool for independent business owners and small
        businesses (<Src href={HB.forbes}>Forbes Advisor</Src>). HoneyBook states that more than
        100,000 businesses use it; this is a company figure and was not independently verified.
      </p>
      <p>
        What these businesses share is more useful than the list: they sell services rather than
        products, run each client as a project, and repeat the same sequence of proposal, agreement,
        payment and delivery. That includes many coaches and course businesses, though a business
        built around an online course platform may need different tooling.
      </p>
      <h3 id="four-hypothetical-examples">Four hypothetical examples</h3>
      <p>These are illustrative scenarios built from documented features. They are not client results.</p>

      <p><strong>Photographer</strong></p>
      <ul>
        <li><strong>Situation:</strong> a solo wedding photographer takes enquiries by email and sends PDF quotes.</li>
        <li><strong>Client event:</strong> a couple submits a lead form.</li>
        <li><strong>Capability:</strong> proposal with packages and add-ons, a contract and a deposit invoice in the same file, with a payment plan for the balance.</li>
        <li><strong>Workflow:</strong> the couple chooses a package, signs and pays the deposit from one link, and reminders go out before balance payments are due.</li>
        <li><strong>Next stage:</strong> the project moves to &quot;booked&quot; and a questionnaire and meeting reminders follow.</li>
      </ul>

      <p><strong>Consultant</strong></p>
      <ul>
        <li><strong>Situation:</strong> an independent consultant sells a paid discovery call.</li>
        <li><strong>Client event:</strong> a prospect books through the scheduler.</li>
        <li><strong>Capability:</strong> scheduler, questionnaire and proposal.</li>
        <li><strong>Workflow:</strong> the prospect completes the questionnaire, receives a proposal after the call, and an automation sends a reminder if it is unsigned after three days.</li>
        <li><strong>Next stage:</strong> a signed agreement triggers an onboarding email and the first invoice.</li>
      </ul>

      <p><strong>Designer</strong></p>
      <ul>
        <li><strong>Situation:</strong> a brand designer scopes projects by email.</li>
        <li><strong>Client event:</strong> a client asks for a visual identity project.</li>
        <li><strong>Capability:</strong> proposal with packages, contract, invoice with milestone payments, client portal.</li>
        <li><strong>Workflow:</strong> the client selects a package and signs, the invoice updates to match, and files are shared in the portal.</li>
        <li><strong>Next stage:</strong> tasks track delivery, and the project closes with a follow-up message.</li>
      </ul>

      <p><strong>Wedding planner or venue</strong></p>
      <ul>
        <li><strong>Situation:</strong> a venue manages tours, contracts and payment schedules in separate places.</li>
        <li><strong>Client event:</strong> a couple requests a tour.</li>
        <li><strong>Capability:</strong> lead form, scheduler, contract and payment schedule, and a project-date trigger.</li>
        <li><strong>Workflow:</strong> after the tour the couple receives a contract and payment schedule, and an automation sends a check-in a set number of days before the event date (<Src href={HB.projectDate}>HoneyBook&apos;s Help Center</Src> describes this pattern).</li>
        <li><strong>Next stage:</strong> final invoice and event-week communication.</li>
      </ul>

      <h2 id="how-much-does-honeybook-cost">How much does HoneyBook cost?</h2>
      <p>
        Pricing changes often, so this section is deliberately short. On HoneyBook&apos;s U.S.
        pricing page, annual billing is $29 per month for Starter, $49 for Essentials and $109 for
        Premium, and every plan begins with a free trial (HoneyBook&apos;s FAQ says 30 days). Card
        payments carry processing fees starting at 2.7% + 10¢, and ACH bank transfers 1.5%.
        Promotional banners change frequently, so check the current offer and your own
        country&apos;s currency on the <Src href={HB.pricing}>official pricing page</Src>. Older
        third-party articles show different plan prices and card fees; rely on the official page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Billed yearly (per month)</th>
            <th>Notable inclusions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Starter</strong></td>
            <td>$29</td>
            <td>Unlimited clients and projects, invoices and payments, proposals and contracts, client portal, basic reports, up to 2 live lead forms.</td>
          </tr>
          <tr>
            <td><strong>Essentials</strong></td>
            <td>$49</td>
            <td>Everything in Starter plus scheduler, automations, QuickBooks Online integration, up to 2 team members, up to 10 live lead forms, SMS reminders.</td>
          </tr>
          <tr>
            <td><strong>Premium</strong></td>
            <td>$109</td>
            <td>Everything in Essentials plus unlimited team members, priority support, multiple companies, advanced reports, unlimited live lead forms.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="benefits-of-honeybook">What are the benefits of HoneyBook?</h2>
      <p>The benefits that follow from the verified features are practical rather than dramatic:</p>
      <ul>
        <li><strong>One record per client,</strong> instead of reconstructing the story from an inbox, an e-signature tool and a payments dashboard.</li>
        <li><strong>Fewer handoffs</strong> between proposal, contract and payment, because the client&apos;s selections carry through.</li>
        <li><strong>Repeatable workflows,</strong> through templates and automations, for work that follows the same pattern each time.</li>
        <li><strong>Visibility,</strong> since the pipeline shows where each project stands and the platform tracks when files are viewed or signed.</li>
      </ul>
      <p>
        HoneyBook publishes statistics on hours saved and booking rates. They are company-reported
        and not repeated here as evidence.
      </p>

      <h2 id="limitations-of-honeybook">What are the limitations of HoneyBook?</h2>
      <h3 id="documented-limits">Documented limits</h3>
      <ul>
        <li><strong>Availability:</strong> U.S., Canada, UK and Australia only. Businesses in Europe or New Zealand cannot currently use it.</li>
        <li>Automations require the Essentials or Premium plan and can only be built on desktop.</li>
        <li><strong>Lead-form caveat:</strong> for projects created through lead forms, most trigger actions taken inside the form will not fire automations; the &quot;Lead form submitted&quot; trigger is the exception (<Src href={HB.notTriggering}>HoneyBook Help Center</Src>).</li>
        <li><strong>Plan caps:</strong> live lead forms, team members and reporting depth vary by plan, and the QuickBooks Online integration is not on Starter.</li>
        <li>Wider connections run through Zapier and the listed integrations. Make was not on the official integration list reviewed, and one independent review makes the same observation.</li>
      </ul>
      <h3 id="business-fit-considerations">Business-fit considerations</h3>
      <p>
        These are our assessment of where other categories of software may suit better. They are not
        documented product limits.
      </p>
      <ul>
        <li><strong>Product-based ecommerce.</strong> HoneyBook&apos;s lead forms can sell digital products, but we found no documentation of inventory, shipping or product-catalogue features. Businesses selling physical goods usually need an ecommerce platform.</li>
        <li><strong>Complex enterprise sales.</strong> Large B2B teams often need account hierarchies, opportunity management, forecasting, permissions and deeper reporting. HoneyBook is designed around individual client projects, and independent reviewers note the absence of traditional sales-CRM features.</li>
        <li><strong>Advanced marketing automation.</strong> Campaign orchestration, complex segmentation and multi-channel nurturing are marketing-platform strengths. HoneyBook&apos;s automations respond to client events within projects. A platform such as GoHighLevel is built around campaign-style marketing automation.</li>
        <li><strong>Accounting.</strong> HoneyBook includes invoicing, expense tracking and financial reports, and integrates with QuickBooks Online. We found no documentation of payroll, and a business with complex bookkeeping will likely keep dedicated accounting software.</li>
      </ul>

      <h2 id="honeybook-in-a-software-stack">Where does HoneyBook fit in a software stack?</h2>
      <p>
        One platform does not necessarily replace every system. HoneyBook is best seen as the client
        and business-management layer, sitting beside accounting, ecommerce, fulfilment or
        specialist systems rather than replacing them.
      </p>

      <FieldDiagram
        id="software-stack"
        label="Where HoneyBook sits"
        title="The client layer, beside specialist systems rather than in place of them."
        takeaway="One platform does not necessarily replace every system."
      >
        <div className="fd-layer fd-dark">
          <span className="fd-k">Client and business-management layer</span>
          <b>HoneyBook</b>
          <small>Enquiries · proposals · contracts · payments · client projects</small>
        </div>
        <div className="fd-link-label">SITS BESIDE</div>
        <div className="fd-cols fd-n4">
          <div className="fd-step fd-muted"><span className="fd-k">Sales CRM</span><b>Forecasting</b><small>Accounts, opportunities, sales reporting</small></div>
          <div className="fd-step fd-muted"><span className="fd-k">Accounting</span><b>Books</b><small>Tax and payroll</small></div>
          <div className="fd-step fd-muted"><span className="fd-k">Ecommerce</span><b>Products</b><small>Catalogue, inventory, shipping</small></div>
          <div className="fd-step fd-muted"><span className="fd-k">Marketing</span><b>Campaigns</b><small>Segmentation, multi-channel nurture</small></div>
        </div>
      </FieldDiagram>
      <table>
        <thead>
          <tr>
            <th>Software category</th>
            <th>Typical role</th>
            <th>Relationship to HoneyBook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sales CRM</strong> (for example HubSpot, Salesforce)</td>
            <td>Contacts, accounts, opportunities, forecasting</td>
            <td>Overlaps on contacts and pipeline; goes deeper on sales activity and reporting.</td>
          </tr>
          <tr>
            <td><strong>Client management for service businesses</strong> (for example <a href="/platforms/dubsado">Dubsado</a>)</td>
            <td>Enquiries, onboarding, contracts, invoices, workflows</td>
            <td>Same category. Dubsado is frequently compared with HoneyBook in reviews.</td>
          </tr>
          <tr>
            <td><strong>Project management</strong> (for example Asana, Monday)</td>
            <td>Team tasks and project delivery</td>
            <td>HoneyBook tracks client projects and tasks; Asana and Monday appear among its listed integrations.</td>
          </tr>
          <tr>
            <td><strong>Accounting</strong> (for example QuickBooks)</td>
            <td>Books, tax, payroll</td>
            <td>HoneyBook handles client invoicing and payments, and integrates with QuickBooks Online.</td>
          </tr>
          <tr>
            <td><strong>Marketing automation</strong></td>
            <td>Campaigns, segmentation, multi-channel nurture</td>
            <td>Different emphasis: HoneyBook automates within client projects.</td>
          </tr>
          <tr>
            <td><strong>Ecommerce platforms</strong></td>
            <td>Catalogue, orders, inventory, shipping</td>
            <td>Outside HoneyBook&apos;s documented scope.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="when-does-honeybook-make-sense">When does HoneyBook make sense?</h2>
      <p>HoneyBook tends to fit a business that:</p>
      <ul>
        <li>sells services rather than physical products;</li>
        <li>manages each client as a project with a start and an end;</li>
        <li>regularly sends proposals, contracts and invoices;</li>
        <li>collects payment online; and</li>
        <li>follows a repeatable sequence it can describe step by step.</li>
      </ul>
      <p>
        If most of those are true, it is worth a trial. If the main need is campaign marketing,
        inventory, complex sales forecasting or full accounting, start with the category built for
        that need and treat HoneyBook, if at all, as a complement.
      </p>
      <p>
        Choosing the platform is usually the smaller decision. The harder part is deciding how
        enquiries, proposals, payments and follow-up should work in your business, then configuring
        the tool to match. That process-first approach is the basis of Sage Kite&apos;s{' '}
        <a href="/services/crm-implementation">CRM implementation</a> work, and a short{' '}
        <a href="/services/consultancy">consultancy</a> engagement can help if you are weighing
        several platforms.
      </p>

      <h2 id="what-to-do-next">What to do next</h2>
      <ul>
        <li>Write your client journey as steps, from enquiry to repeat business, and note who owns each one.</li>
        <li>Check that HoneyBook is available in your country.</li>
        <li>Use the free trial against your real process, including the automations you would need (these require Essentials).</li>
        <li>Compare against the category that matches your biggest gap, whether that is sales CRM, marketing automation or accounting.</li>
      </ul>

      <h2 id="honeybook-faq">HoneyBook FAQ</h2>
      <h3>What is HoneyBook?</h3>
      <p>HoneyBook is a cloud-based client management platform for independent service businesses. It combines lead capture, proposals, contracts, invoices, payments, scheduling, project tracking and automation.</p>
      <h3>Is HoneyBook a CRM?</h3>
      <p>Partly. It includes CRM functionality such as client records, custom fields and a pipeline, but it also covers proposals, contracts and payments, and it lacks some features of dedicated sales CRMs.</p>
      <h3>What is HoneyBook used for?</h3>
      <p>Service businesses use it to capture enquiries, send proposals and contracts, collect payments and keep client projects organised.</p>
      <h3>Who uses HoneyBook?</h3>
      <p>HoneyBook is aimed at independent service professionals such as photographers, event professionals, consultants, coaches, designers and marketers.</p>
      <h3>Can HoneyBook send invoices and take payments?</h3>
      <p>Yes. It supports invoices, payment plans and autopay, with card, bank-transfer, Apple Pay and Google Pay options. Processing fees apply.</p>
      <h3>Can HoneyBook automate workflows?</h3>
      <p>Yes, on the Essentials and Premium plans. Automations use triggers, actions, waits and conditions and are built on desktop.</p>
      <h3>Is HoneyBook project management software?</h3>
      <p>It tracks client projects through pipeline stages and tasks, but the sources reviewed describe client-project tracking rather than team resource planning.</p>
      <h3>Is HoneyBook accounting software?</h3>
      <p>No. It handles client invoicing, payments, expenses and reports, and integrates with QuickBooks Online, but it is not described as a full accounting or payroll system.</p>
      <h3>Is HoneyBook available outside the U.S.?</h3>
      <p>It is available in the U.S., Canada, UK and Australia. HoneyBook says it is working on expanding to other countries.</p>
      <h3>How much does HoneyBook cost?</h3>
      <p>Plans start at $29 per month billed yearly on the U.S. site, plus payment processing fees. See the <Src href={HB.pricing}>official pricing page</Src> for current plans.</p>
    </>
  );
}
