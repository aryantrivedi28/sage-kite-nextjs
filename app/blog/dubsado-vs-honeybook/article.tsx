/**
 * Article body for /blog/dubsado-vs-honeybook. Kept in its own file because it
 * is long; post.tsx points `content` at it. Product facts were checked against
 * official Dubsado and HoneyBook sources on 2 October 2026. FAQ text must stay
 * identical to the `faqs` array in post.tsx.
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

const DS = {
  help: 'https://help.dubsado.com/en/collections/16716300-dubsado-3-0',
  threePointO: 'https://www.dubsado.com/blog/introducing-dubsado-three-point-o',
  threePointOBlog: 'https://www.dubsado.com/blog/introducing-dubsado-three-point-o',
  flowActions: 'https://help.dubsado.com/en/articles/15668756-flow-actions',
  flowTriggers: 'https://help.dubsado.com/en/articles/15668762-flow-triggers-general',
  forms: 'https://help.dubsado.com/en/articles/2880341-dubsado-form-types-and-when-to-use-them',
  formsBlog: 'https://www.dubsado.com/blog/how-to-customize-fonts-buttons-and-form-fields-on-your-dubsado-forms-with-custom-code',
  processors: 'https://help.dubsado.com/en/articles/580108-connect-a-payment-processor-with-dubsado-payments-square-or-paypal',
  fees: 'https://help.dubsado.com/en/articles/8901346-dubsado-payments-processing-fees',
  ach: 'https://help.dubsado.com/en/articles/8950896-accepting-us-bank-ach-payments-with-dubsado-payments',
  updates: 'https://updates.dubsado.com/',
};

const HB = {
  pricing: 'https://www.honeybook.com/pricing',
  crm: 'https://www.honeybook.com/product/crm',
  automations: 'https://www.honeybook.com/product/automations',
  proposals: 'https://www.honeybook.com/product/proposal-software',
  createAutomation: 'https://help.honeybook.com/en/articles/9493889-how-to-create-an-automation',
  pipeline: 'https://help.honeybook.com/en/articles/2463528-customize-your-pipeline-in-honeybook',
  exportContacts: 'https://help.honeybook.com/en/articles/2650752-download-and-export-your-contacts-list-from-honeybook',
  importContacts: 'https://help.honeybook.com/en/articles/9242203-add-and-import-contacts-in-honeybook',
};

const IND = {
  techradar: 'https://www.techradar.com/pro/software-services/honeybook-crm-review',
  itechguides: 'https://www.itechguides.com/best/professional-services-crm-software/dubsado/',
  raoura: 'https://www.raoura.com/blog/dubsado-pricing',
};

export default function DubsadoVsHoneyBookArticle() {
  return (
    <>
      <p>
        Dubsado and HoneyBook are both client management platforms for service businesses. Each
        combines a client pipeline, forms, proposals, contracts, invoices, payments, scheduling and
        automation. The difference lies less in which features exist than in how each platform lets
        you build the client journey. Dubsado gives you more building blocks and more setup.
        HoneyBook offers a more guided path, with payments built in.
      </p>
      <p>
        This comparison reflects both platforms as documented on 2 October 2026. Both change
        frequently, and Dubsado rebuilt its product as &quot;Dubsado 3.0&quot; from November 2025, so
        check the linked official pages before you decide. Neither platform was tested hands-on for
        this article; product claims come from official documentation, and independent or user
        comments are labelled as such. There is no winner or score here, because the right answer
        depends on your workflow.
      </p>

      <h2 id="at-a-glance">Dubsado vs HoneyBook at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Dubsado</th>
            <th>HoneyBook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Positioning</strong></td>
            <td>Client management and business tool for service businesses; emphasis on configurable forms, flows and branding.</td>
            <td>Client relationship (&quot;clientflow&quot;) platform for independent service businesses; emphasis on one connected workflow with built-in payments.</td>
          </tr>
          <tr>
            <td><strong>Client records</strong></td>
            <td>Contacts and projects (leads and jobs) with statuses, tags, table and Kanban views.</td>
            <td>Clients and projects with a customisable pipeline, tags and custom fields.</td>
          </tr>
          <tr>
            <td><strong>Automation</strong></td>
            <td>Flows: steps pairing an action with a timing trigger; 15 documented actions.</td>
            <td>Automations: trigger, actions, waits and conditions; AI builder.</td>
          </tr>
          <tr>
            <td><strong>Forms and intake</strong></td>
            <td>Five form types, including lead capture, questionnaire, proposal, contract and sub-agreement.</td>
            <td>Lead forms, questionnaires and files built from templates.</td>
          </tr>
          <tr>
            <td><strong>Proposals and contracts</strong></td>
            <td>Proposal form can bundle a contract and invoice.</td>
            <td>Proposals can combine services, contract and payment in one file.</td>
          </tr>
          <tr>
            <td><strong>Payments</strong></td>
            <td>Connects to Dubsado Payments (Stripe), Square or PayPal. States it adds no platform fee.</td>
            <td>Built-in payment processing. Card fees start at 2.7% + 10¢; bank transfer 1.5%.</td>
          </tr>
          <tr>
            <td><strong>Scheduling</strong></td>
            <td>Scheduler with calendar sync (Premier plan, per independent sources).</td>
            <td>Scheduler on Essentials and Premium plans.</td>
          </tr>
          <tr>
            <td><strong>Client portal</strong></td>
            <td>Portal activated per client; forms and files can be applied to it.</td>
            <td>Client portal on all plans.</td>
          </tr>
          <tr>
            <td><strong>Where it is available</strong></td>
            <td>Dubsado Payments supports merchants in 39 countries.</td>
            <td>U.S., Canada, UK and Australia only.</td>
          </tr>
          <tr>
            <td><strong>Entry price (annual billing)</strong></td>
            <td>$335 a year (Starter) or $525 a year (Premier), as reported.</td>
            <td>$29 (Starter), $49 (Essentials) or $109 (Premium) per month.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: <Src href={DS.help}>Dubsado Help Center</Src>,{' '}
        <Src href={DS.threePointO}>Dubsado 3.0 announcement</Src>,{' '}
        <Src href={HB.pricing}>HoneyBook pricing</Src>, <Src href={HB.crm}>HoneyBook CRM page</Src>.
      </p>

      <h2 id="what-are-dubsado-and-honeybook">What are Dubsado and HoneyBook?</h2>
      <p>
        <strong>Dubsado</strong> describes itself as a client management system, and its 3.0 release
        brings email, invoices, calendar, forms and flows into dedicated areas
        (<Src href={DS.threePointOBlog}>Dubsado 3.0 announcement</Src>). <strong>HoneyBook</strong>{' '}
        calls itself AI-powered client relationship software for creatives, consultants, marketers
        and event professionals (<Src href={HB.pricing}>HoneyBook pricing page</Src>). For a fuller
        explanation of HoneyBook, see Sage Kite&apos;s guide to{' '}
        <a href="/blog/what-is-honeybook">what HoneyBook is</a>. For Dubsado, see Sage Kite&apos;s
        guide to <a href="/blog/what-is-dubsado">what Dubsado is</a>.
      </p>
      <p>
        Both are best understood as an operating layer around a client: from enquiry to signed
        agreement to payment to delivery. Neither is a full accounting system, a store platform or
        an enterprise sales CRM.
      </p>

      <h2 id="difference-between-dubsado-and-honeybook">What is the difference between Dubsado and HoneyBook?</h2>
      <p>
        <strong>Short answer:</strong> Dubsado is built around configurable pieces that you assemble
        into your own process; HoneyBook is built around a more guided process with payments handled
        inside the platform.
      </p>
      <p>
        That is a summary of the documented features, not a verdict. Independent writers often
        describe the same split as customisation versus speed of setup, and some user reviews say the
        same. User reviews on Capterra mention a steep learning curve and long setup for Dubsado,
        while one G2 reviewer says HoneyBook may be easier to start with but that they chose Dubsado
        for scaling. These are individual opinions and not documented limits of either product.
      </p>
      <p>
        <strong>Feature parity does not mean workflow parity.</strong> Both have proposals, contracts
        and invoices. What differs is how a client moves between them, what can start each step and
        what you can control along the way. The sections below compare behaviour, not just presence.
      </p>

      <FieldDiagram
        id="two-ways-to-build"
        label="Two ways to build"
        title="Similar features. A different way to assemble the client journey."
        takeaway="Feature parity does not mean workflow parity. Compare behaviour, not just presence."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Dubsado</span>
            <b>Building blocks</b>
            <div className="fd-chips fd-n2">
              <i>Forms</i><i>Flows</i><i>Timing</i><i>Processor</i>
            </div>
            <small>More control, more setup</small>
          </div>
          <div className="fd-versus">OR</div>
          <div className="fd-box">
            <span className="fd-k">HoneyBook</span>
            <b>Guided path</b>
            <div className="fd-solid">Proposal · contract · payment in one file</div>
            <small>A shorter route, with payments built in</small>
          </div>
        </div>
      </FieldDiagram>

      <h2 id="is-dubsado-or-honeybook-a-crm">Is Dubsado a CRM? Is HoneyBook a CRM?</h2>
      <p>
        <strong>Short answer:</strong> both include CRM-style client management, and neither is a
        traditional sales CRM.
      </p>
      <p>
        A <strong>CRM</strong> organises information about prospects and customers. In both
        platforms, the central object is a project: a lead becomes a job and carries its forms,
        files, invoices and messages. Dubsado&apos;s projects list can be viewed as a table or Kanban
        board, with statuses and tags (<Src href={DS.threePointO}>Dubsado 3.0 announcement</Src>).
        HoneyBook offers unlimited clients and projects, custom fields, tags and a customisable
        pipeline on every plan (<Src href={HB.pricing}>HoneyBook pricing</Src>).
      </p>
      <p>
        The practical implication: if your needs centre on moving individual clients through an
        engagement, either fits. If you need account hierarchies, opportunity forecasting or
        sales-team reporting, you are outside what either is designed for. One independent review of
        HoneyBook notes it lacks traditional features such as lead scoring and sales forecasting
        (<Src href={IND.techradar}>TechRadar</Src>). We did not find the equivalent verified statement
        for Dubsado, so treat the question as open for both.
      </p>

      <h2 id="automation">How do Dubsado and HoneyBook automation differ?</h2>
      <p>
        <strong>Short answer:</strong> both automate client steps after an event. HoneyBook documents
        conditions and waits as separate building blocks; Dubsado documents a longer action list and
        fine-grained timing triggers but no branching step in the pages reviewed.
      </p>
      <p>
        The useful comparison is how you construct the journey: what starts it, what conditions
        apply, what happens next and when.
      </p>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Dubsado Flows</th>
            <th>HoneyBook Automations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Structure</strong></td>
            <td>Each step is one action plus one trigger. Flows are built in a node-based editor.</td>
            <td>Each automation starts with one trigger, then actions, with optional waits and conditions.</td>
          </tr>
          <tr>
            <td><strong>What starts it</strong></td>
            <td>A flow is applied to a project manually or automatically, for example when a lead capture form or public proposal is submitted. Scheduler-initiated flows are also documented.</td>
            <td>Triggers include new inquiries, scheduling changes, file actions (viewed, completed), bookings (contract signed, payment made) and project milestones. Project-date triggers are also documented.</td>
          </tr>
          <tr>
            <td><strong>Timing</strong></td>
            <td>Relative (hours, days, weeks, years; decimals allowed) or fixed dates. Triggers include &quot;after this flow starts&quot; and &quot;after all previous actions are completed&quot;.</td>
            <td>Waits between trigger and action, or between actions. Triggers can be set relative to a project date.</td>
          </tr>
          <tr>
            <td><strong>Actions</strong></td>
            <td>15 documented actions: Send Email, Send Form, Send Contract, Send Scheduler, Send Primary Invoice, Create Invoice, Create Task, Update Project Status, Add Project Tags, Archive Project, Activate Portal, Deactivate Portal, Pause Flow, Hold Actions Until, Start A New Flow.</td>
            <td>Older documentation lists send email, create task, send smart file via email and move pipeline stage. Automations 2.0 adds conditions and third-party app steps. A separate &quot;pipeline automations&quot; feature moves projects between stages on events.</td>
          </tr>
          <tr>
            <td><strong>Conditions</strong></td>
            <td>&quot;Hold Actions Until&quot; waits for a stated event; stacked holds require every condition (AND). We found no documented if/else branching step. Sources disagree (see note).</td>
            <td>Documented. HoneyBook gives an example: send a follow-up only if a client has not signed within three days.</td>
          </tr>
          <tr>
            <td><strong>Human review</strong></td>
            <td>Optional manual approval on email, form, contract, scheduler and invoice actions.</td>
            <td>Emails can be edited before sending.</td>
          </tr>
          <tr>
            <td><strong>Plan</strong></td>
            <td>Premier (per independent sources and Dubsado&apos;s trial description).</td>
            <td>Essentials and Premium.</td>
          </tr>
          <tr>
            <td><strong>Where you build it</strong></td>
            <td>Not stated in the pages reviewed.</td>
            <td>Desktop only; the mobile app cannot create or edit automations.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: <Src href={DS.flowActions}>Dubsado flow actions</Src>,{' '}
        <Src href={DS.flowTriggers}>Dubsado flow triggers</Src>,{' '}
        <Src href={HB.automations}>HoneyBook automations</Src>,{' '}
        <Src href={HB.createAutomation}>HoneyBook: how to create an automation</Src>,{' '}
        <Src href={HB.pipeline}>HoneyBook pipeline help</Src>.
      </p>

      <FieldDiagram
        id="follow-up-automation"
        label="Automating a reminder"
        title="Timing triggers and holds, or waits and conditions."
        takeaway="Hypothetical sequences built from documented steps. Branching in Dubsado Flows is an open question; verify it in a trial if your process depends on it."
      >
        <span className="fd-row-label">Dubsado Flows</span>
        <div className="fd-flow">
          <div className="fd-step"><span className="fd-k">Action + trigger</span><b>Send proposal</b><small>After the call ends</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">Hold</span><b>Hold actions until</b><small>Signed and first payment made</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-dark"><span className="fd-k">Action</span><b>Update status</b><small>Runs once every hold is met</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-muted"><span className="fd-k">If / else</span><b>Not documented</b><small>Sources disagree</small></div>
        </div>
        <span className="fd-row-label">HoneyBook Automations</span>
        <div className="fd-flow">
          <div className="fd-step"><span className="fd-k">Trigger</span><b>Proposal sent</b><small>Starts the automation</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">Wait</span><b>Three days</b><small>A delay</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-muted"><span className="fd-k">Condition</span><b>Not signed?</b><small>Documented branch</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-dark"><span className="fd-k">Action</span><b>Reminder email</b><small>Sent only if unsigned</small></div>
        </div>
      </FieldDiagram>
      <p>
        <strong>Note on the unresolved question.</strong> Some independent writers state that
        conditional logic inside Dubsado Flows was still in development after 3.0 launched, and one
        recent overview says a flow cannot branch on whether a client booked or signed.
        Vendor-published comparison pages describe Dubsado automation as having conditional logic.
        Dubsado also supports conditional display inside forms, per its own guidance. Because the
        documentation reviewed shows no branching step, verify this in a trial if branching matters
        to your process.
      </p>
      <p>
        <strong>Why this matters.</strong> Automation depth is not the count of features; it is how
        much control you have over the journey. A business with a fixed sequence (enquiry, call,
        proposal, contract, deposit) may need few branches. A business that routes clients
        differently depending on responses or inaction may need branching, or may handle it with
        separate flows and manual approval steps. Automation also does not repair an unclear
        process: define the stages first.
      </p>

      <h2 id="forms-and-client-intake">Forms and client intake</h2>
      <p>
        <strong>Dubsado</strong> has five form types (lead capture, questionnaire, proposal, contract
        and sub-agreement). A completed lead capture creates a new project with the client&apos;s
        information, and can be embedded on a website (<Src href={DS.forms}>Dubsado forms guide</Src>).
        Dubsado&apos;s own guidance describes custom code for fonts, buttons, conditional display and
        layout (<Src href={DS.formsBlog}>Dubsado blog</Src>), and its Easy Form Creation lets you
        generate a form from a description or a PDF.
      </p>
      <p>
        <strong>HoneyBook</strong> offers lead forms, questionnaires and client-facing files. Live
        lead forms are limited by plan: 2 on Starter, 10 on Essentials, unlimited on Premium
        (<Src href={HB.pricing}>pricing page</Src>). We did not find HoneyBook documentation of
        conditional form logic, so it is not claimed here.
      </p>
      <p>
        <strong>Practical difference:</strong> Dubsado offers more control over how a form looks and
        behaves, which suits a business with intricate intake. HoneyBook&apos;s plan limits on lead
        forms matter if you run several services or campaigns. Dubsado&apos;s cheaper tier also
        limits lead capture forms according to independent reviewers, so confirm form limits on both
        pricing pages.
      </p>

      <h2 id="proposals-and-contracts">Proposals and contracts</h2>
      <p>
        In <strong>Dubsado</strong>, a proposal can be bundled with a contract and an invoice, and the
        proposal is the first page the client sees. In flows, the Send Form action is used for a
        proposal with a contract or invoice attached; Send Contract is for standalone contracts
        (<Src href={DS.flowActions}>flow actions</Src>).
      </p>
      <p>
        In <strong>HoneyBook</strong>, proposals let clients choose services, sign a contract and pay
        from one link, and invoices and contracts update to match the services selected. You can also
        send the pieces separately, and HoneyBook tracks when a proposal is opened
        (<Src href={HB.proposals}>proposals page</Src>).
      </p>
      <p>
        <strong>Practical difference:</strong> both support the same sequence: present, agree, pay.
        HoneyBook describes it as one file where selections carry through. Dubsado&apos;s bundle is
        configured through its form builder and flows. One user, in a Capterra review, said the way
        Dubsado merges proposal, contract and invoice is seamless; another reviewer from an older
        period said HoneyBook then lacked custom multi-package proposals. HoneyBook now documents
        packages and add-ons, so treat that older comment as dated.
      </p>

      <h2 id="invoicing-and-payments">Invoicing and payments</h2>
      <p>
        <strong>Short answer:</strong> HoneyBook processes payments itself; Dubsado does not process
        payments and connects to a processor.
      </p>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Dubsado</th>
            <th>HoneyBook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Processor</strong></td>
            <td>Dubsado Payments (powered by Stripe), Square or PayPal. Dubsado Payments and Square cannot both be connected; PayPal can be added alongside either.</td>
            <td>HoneyBook Payments, built in.</td>
          </tr>
          <tr>
            <td><strong>Platform fee</strong></td>
            <td>Dubsado states it does not charge additional payment fees; processor fees apply.</td>
            <td>Processing fees are the cost: card from 2.7% + 10¢; ACH bank transfer 1.5%.</td>
          </tr>
          <tr>
            <td><strong>Methods</strong></td>
            <td>Card and ACH via Dubsado Payments; Square is card only; PayPal cannot be used with ACH or autopay.</td>
            <td>Card, ACH, Apple Pay, Google Pay.</td>
          </tr>
          <tr>
            <td><strong>Plans and schedules</strong></td>
            <td>Payment plans, autopay and invoices triggered by project events are documented.</td>
            <td>One-time, recurring or custom invoices, payment plans, autopay, reminders and late fees.</td>
          </tr>
          <tr>
            <td><strong>Faster payout</strong></td>
            <td>Not documented in sources reviewed.</td>
            <td>Instant deposit for a 1% fee, subject to eligibility.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: <Src href={DS.processors}>Dubsado payment processors</Src>,{' '}
        <Src href={DS.fees}>Dubsado Payments fees</Src>, <Src href={HB.pricing}>HoneyBook pricing</Src>.
      </p>
      <p>
        <strong>Do not confuse platform fees with processor fees.</strong> The comparison is not simply
        &quot;Dubsado has no fee.&quot; Dubsado Payments follows Stripe&apos;s fees, which vary by
        country. Dubsado&apos;s help centre describes an ACH fee of 0.8% capped at $5 per
        transaction, but that article is more than a year old, so check the current figure
        (<Src href={DS.ach}>ACH article</Src>). HoneyBook&apos;s ACH fee is 1.5%.
      </p>
      <p>
        <strong>Hypothetical illustration, not a quote:</strong> a $10,000 bank-transfer payment would
        cost $150 through HoneyBook at 1.5%. Under the Dubsado ACH fee described above, the processor
        charge would be capped at $5, assuming that figure is current and your Stripe account is
        eligible. For large one-off payments this can outweigh the monthly subscription gap, while
        for small card payments the difference is smaller. Work it out with your own typical invoice
        sizes and payment mix.
      </p>

      <h2 id="scheduling">Scheduling</h2>
      <p>
        <strong>Dubsado</strong>&apos;s scheduler is rebuilt in 3.0 with recurring availability, and
        syncs events with Google, Apple, Outlook and iCal calendars, per its changelogs
        (<Src href={DS.updates}>Dubsado updates</Src>). Flows can send a scheduler and use
        appointment-based triggers such as &quot;after an appointment ends&quot;.{' '}
        <strong>HoneyBook</strong> includes a scheduler on Essentials and Premium, with &quot;schedule
        and pay&quot;, meeting reminders (email and SMS) and integrations with Google Calendar,
        Calendly, Acuity and Zoom (<Src href={HB.pricing}>pricing page</Src>).
      </p>
      <p>
        <strong>Practical difference:</strong> if a discovery call is the hinge of your process (for
        example, send a proposal after the call ends), Dubsado documents that trigger directly.
        HoneyBook&apos;s &quot;schedule and pay&quot; suits businesses that take payment at booking.
      </p>

      <h2 id="client-portals-and-client-experience">Client portals and client experience</h2>
      <p>
        Both offer a client portal. In Dubsado, the portal is activated per client by an action and a
        follow-up email, and forms can be applied to the portal. HoneyBook includes a client portal on
        all plans as a dedicated page for files and project details.
      </p>
      <p>
        <strong>What the client sees</strong> is the more useful comparison. A client moving from
        enquiry to payment may interact with a lead form, an email or message thread, a proposal, a
        contract, an invoice and a payment screen. Both platforms aim to keep those inside one
        branded experience. Dubsado documents custom code and extensive form styling; HoneyBook
        offers custom branding and the option to remove &quot;Powered by HoneyBook&quot; on its
        Essentials plan and above. We did not test the client-side experience, so we make no claim
        about which feels better.
      </p>
      <p>
        Software choice affects the client as well as the owner: fewer logins, clearer next steps and
        consistent branding reduce friction, while a clumsy sequence can cost a booking. That is a
        reason to run your real process through a trial of each.
      </p>

      <h2 id="project-management">Project management</h2>
      <p>
        Neither is team project management software. Dubsado offers projects as a table or Kanban
        board, statuses, tags, tasks, a time tracker and (in labs) an AI note-taker for video calls.
        HoneyBook offers a pipeline with custom stages, tasks, project dates and a client portal. For
        both, &quot;project&quot; mainly means a client engagement. If you need resource planning,
        dependencies or heavy team collaboration, you are looking beyond both. One independent
        comparison makes the same observation about team collaboration; treat that as an opinion
        rather than a documented limit.
      </p>

      <h2 id="integrations">Integrations that change the decision</h2>
      <table>
        <thead>
          <tr>
            <th>Need</th>
            <th>Dubsado</th>
            <th>HoneyBook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Accounting</strong></td>
            <td>QuickBooks and Xero (per Dubsado changelogs).</td>
            <td>QuickBooks Online (Essentials and above).</td>
          </tr>
          <tr>
            <td><strong>Payments</strong></td>
            <td>Dubsado Payments (Stripe), Square, PayPal.</td>
            <td>Built-in; no separate processor choice.</td>
          </tr>
          <tr>
            <td><strong>Calendar and meetings</strong></td>
            <td>Google, Apple, Outlook, iCal sync; Zoom and Google Meet links.</td>
            <td>Google Calendar, Outlook, Calendly, Acuity, Zoom.</td>
          </tr>
          <tr>
            <td><strong>Other automation</strong></td>
            <td>Zapier (Premier, per independent sources).</td>
            <td>Zapier, Flodesk, Mailchimp, Asana, Monday, Slack, Pic-Time, Canva.</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Integration requirements can change the decision.</strong> A business that uses Xero,
        or needs Square or PayPal, finds that Dubsado documents those; a business that wants
        Mailchimp, Flodesk, Asana or Slack connections finds them on HoneyBook&apos;s lists. Check
        every tool you cannot do without against both lists, and confirm what each plan includes.
      </p>

      <h2 id="reporting-and-ai-features">Reporting and AI features</h2>
      <p>
        Dubsado&apos;s 3.0 sidebar groups finance reports, project reports and a chart of accounts
        under Insights, and the product has AI email summaries and the Dubsado Notetaker (currently in
        &quot;labs&quot;). HoneyBook offers basic, standard or advanced reports by plan and an AI
        feature set that includes an automations builder, email drafts, meeting notes and lead
        alerts. Both are evolving quickly; these are the most likely items to change before you read
        this.
      </p>

      <h2 id="pricing">Pricing: Dubsado vs HoneyBook</h2>
      <p>
        <strong>Short answer:</strong> HoneyBook&apos;s entry plan is lower per month, but automation
        requires its middle plan; Dubsado&apos;s automation requires its higher plan. Compare the plan
        you actually need, not the headline price.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Relevant capabilities</th>
            <th>Important limitation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HoneyBook Starter</strong></td>
            <td>$29/month billed yearly</td>
            <td>Unlimited clients and projects, invoices, proposals, contracts, client portal, basic reports, 2 lead forms.</td>
            <td>No automations, scheduler or QuickBooks integration.</td>
          </tr>
          <tr>
            <td><strong>HoneyBook Essentials</strong></td>
            <td>$49/month billed yearly</td>
            <td>Adds scheduler, automations, QuickBooks Online, up to 2 team members, 10 lead forms, SMS reminders.</td>
            <td>Standard reports; team capped at 2.</td>
          </tr>
          <tr>
            <td><strong>HoneyBook Premium</strong></td>
            <td>$109/month billed yearly</td>
            <td>Adds unlimited team members, priority support, multiple companies, advanced reports, unlimited lead forms.</td>
            <td>Highest cost.</td>
          </tr>
          <tr>
            <td><strong>Dubsado Starter</strong></td>
            <td>$335/year ($35 monthly), as reported</td>
            <td>Core forms, invoices, portal, per independent sources.</td>
            <td>Reported to exclude flows, scheduler and public proposals, and limit lead forms.</td>
          </tr>
          <tr>
            <td><strong>Dubsado Premier</strong></td>
            <td>$525/year ($55 monthly), as reported</td>
            <td>Adds flows, scheduler, unlimited lead capture forms, integrations, per independent sources.</td>
            <td>Reported to include up to 3 additional users; extra brands cost more.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources: <Src href={HB.pricing}>HoneyBook pricing (official)</Src>; Dubsado figures from{' '}
        <Src href={IND.itechguides}>iTechGuides</Src> and <Src href={IND.raoura}>Raoura</Src>, with
        the price increase and 21-day trial confirmed on Dubsado&apos;s{' '}
        <Src href={DS.threePointO}>3.0 page</Src>. Billing frequency: HoneyBook lists yearly pricing
        with higher monthly rates; the monthly rates were not confirmed on the official page, so
        verify them. Trials: HoneyBook states 30 days; Dubsado states 21 days for new trials.
        Promotional offers change often and are excluded.
      </p>
      <h3 id="total-cost">Total cost is more than the subscription</h3>
      <ul>
        <li><strong>Processing fees:</strong> HoneyBook&apos;s are part of the platform; Dubsado&apos;s depend on the processor you connect (see payments above).</li>
        <li><strong>Team size and brands:</strong> HoneyBook caps Essentials at 2 team members; Dubsado&apos;s plans reportedly include 3 additional users.</li>
        <li><strong>Add-on tools:</strong> Dubsado Starter and HoneyBook Starter both lack automation, so many businesses need the next plan.</li>
        <li><strong>Setup time:</strong> Reviewers on Capterra describe Dubsado setup as a significant effort, and some businesses pay a specialist to build it. HoneyBook offers free template setup from your existing files. We cannot give a total-cost figure without knowing your volumes.</li>
        <li><strong>Migration and admin time:</strong> see the switching section below.</li>
        <li><strong>Availability:</strong> HoneyBook is not available in all countries. Dubsado Payments supports merchants in 39 countries. If you are in New Zealand or Europe, this settles the question before price does.</li>
      </ul>

      <h2 id="which-businesses-use-them">Which businesses use Dubsado? Which use HoneyBook?</h2>
      <p>
        <strong>HoneyBook</strong> groups its audience into event services, photo and video,
        professional services, personal services, marketing services, home and real-estate services,
        venues and teams (<Src href={HB.crm}>HoneyBook CRM page</Src>). <strong>Dubsado</strong> is
        described by reviewers as designed for creatives and service providers, and G2 reviewers
        include a range of small businesses. We did not find an official Dubsado industry list, so
        industry fit below is a reasoned reading of the workflows and should not be taken as
        documented positioning.
      </p>

      <h2 id="hypothetical-workflows">Dubsado vs HoneyBook for different businesses: hypothetical workflows</h2>
      <p>
        The following are hypothetical. They are built only from actions and triggers documented
        above, and do not describe real clients or results.
      </p>
      <h3>Wedding or portrait photographer</h3>
      <p>
        <strong>Requirement:</strong> inquiry, package, contract, retainer, session, delivery.{' '}
        <strong>Dubsado:</strong> a lead capture form starts a flow that emails the client, sends a
        scheduler, and after the call ends sends a proposal with the contract and invoice attached;
        holds then wait for the signature and first payment before updating the project status.{' '}
        <strong>HoneyBook:</strong> a lead form triggers a welcome email, and a proposal lets the
        client choose a package, sign and pay a deposit from one link; a signed-contract trigger
        sends a questionnaire. <strong>Difference:</strong> Dubsado documents finer timing and
        gating; HoneyBook offers a shorter path to deposit.
      </p>
      <h3>Wedding planner or venue</h3>
      <p>
        <strong>Requirement:</strong> consultation, proposal, contract, payment schedule, event.{' '}
        <strong>Dubsado:</strong> payment plans can be applied to a flow and triggers can follow
        contract signing or installments. <strong>HoneyBook:</strong> payment plans, autopay and
        reminders, plus a project-date trigger for event-week messages. <strong>Difference:</strong>{' '}
        both handle schedules; Dubsado documents the link between flows and payment plans, HoneyBook
        documents event-date triggers. Long engagements may need more coordination than either
        offers.
      </p>
      <h3>Consultant</h3>
      <p>
        <strong>Requirement:</strong> lead, discovery call, proposal, agreement, payment, project.{' '}
        <strong>Dubsado:</strong> scheduler, then proposal after the call, then onboarding
        questionnaire after signing. <strong>HoneyBook:</strong> scheduler with a reminder, a
        proposal, and a condition that sends a reminder if unsigned after three days.{' '}
        <strong>Difference:</strong> HoneyBook documents the &quot;if unsigned&quot; branch; Dubsado
        documents timing triggers and manual approval.
      </p>
      <h3>Designer</h3>
      <p>
        <strong>Requirement:</strong> inquiry, proposal and scope, contract, deposit, project.{' '}
        <strong>Dubsado:</strong> a proposal bundled with a contract and an invoice, with form
        styling. <strong>HoneyBook:</strong> a proposal with packages and add-ons, milestone invoices
        and the client portal for files. <strong>Difference:</strong> presentation control versus a
        ready-made flow.
      </p>
      <h3>Coach</h3>
      <p>
        <strong>Requirement:</strong> inquiry, consultation, booking, payment, onboarding, sessions.{' '}
        <strong>Dubsado:</strong> flows can drip emails and forms over time and be started from a
        lead form; recurring invoices are available. <strong>HoneyBook:</strong> schedule-and-pay for
        the first session and automations for onboarding. <strong>Difference:</strong> structured
        multi-week delivery points to Dubsado&apos;s timing triggers; booking-and-paying in one step
        points to HoneyBook.
      </p>
      <p>
        A single sample journey, using only documented steps: <strong>Trigger</strong> (lead form
        submitted) &rarr; <strong>Action</strong> (acknowledge by email) &rarr;{' '}
        <strong>Timing</strong> (wait) &rarr; <strong>Action</strong> (send scheduler) &rarr;{' '}
        <strong>Trigger</strong> (call ends) &rarr; <strong>Action</strong> (proposal with contract
        and payment) &rarr; <strong>Outcome</strong> (signed and deposit paid; project status
        updated). Both platforms can express most of this; the difference is in the details of
        timing, branching and where payment is processed.
      </p>

      <h2 id="which-fits-which-requirement">Which platform fits which business requirement?</h2>
      <p>This is a decision aid, not a scorecard. Neither column is better by default.</p>
      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Dubsado</th>
            <th>HoneyBook</th>
            <th>What to consider</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Client management</strong></td>
            <td>Projects with statuses, tags, table/Kanban.</td>
            <td>Pipeline, custom fields, tags.</td>
            <td>How much CRM depth is needed?</td>
          </tr>
          <tr>
            <td><strong>Proposals</strong></td>
            <td>Bundle with contract and invoice; styled forms.</td>
            <td>Service selection, packages, add-ons; tracked opens.</td>
            <td>What proposal workflow is required?</td>
          </tr>
          <tr>
            <td><strong>Contracts</strong></td>
            <td>Contract and sub-agreement forms.</td>
            <td>E-sign contracts and forms.</td>
            <td>Who must sign, and in what order?</td>
          </tr>
          <tr>
            <td><strong>Automation</strong></td>
            <td>15 actions, relative or fixed timing, holds, approvals.</td>
            <td>Triggers, waits, conditions, AI builder.</td>
            <td>How complex is the journey, and does it branch?</td>
          </tr>
          <tr>
            <td><strong>Payments</strong></td>
            <td>Choose processor; ACH, card, PayPal.</td>
            <td>Built-in; card, ACH, wallets.</td>
            <td>Fees, payment methods, country.</td>
          </tr>
          <tr>
            <td><strong>Scheduling</strong></td>
            <td>Appointment triggers; calendar sync.</td>
            <td>Scheduler with schedule-and-pay.</td>
            <td>Calendar and meeting tools.</td>
          </tr>
          <tr>
            <td><strong>Forms</strong></td>
            <td>Five form types, custom code.</td>
            <td>Lead forms with plan limits.</td>
            <td>How complex is intake?</td>
          </tr>
          <tr>
            <td><strong>Client portal</strong></td>
            <td>Per-client activation.</td>
            <td>On all plans.</td>
            <td>What should clients see and do?</td>
          </tr>
          <tr>
            <td><strong>Project management</strong></td>
            <td>Table/Kanban, tasks, time tracking.</td>
            <td>Pipeline, tasks, project dates.</td>
            <td>How complex are projects?</td>
          </tr>
          <tr>
            <td><strong>Team and countries</strong></td>
            <td>3 additional users reportedly; 39 payment countries.</td>
            <td>2 users on Essentials; 4 countries.</td>
            <td>Team size and where you operate.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consider-dubsado-honeybook-or-neither">Consider Dubsado, HoneyBook, or neither</h2>
      <FieldDiagram
        id="requirements-not-a-winner"
        label="Requirements, not a winner"
        title="Your requirements point to a platform, or past both."
        takeaway="What neither platform replaces: accounting, ecommerce fulfilment, enterprise sales systems and advanced marketing automation."
      >
        <div className="fd-cols">
          <div className="fd-step"><span className="fd-k">01</span><b>Consider Dubsado</b><small>Outside HoneyBook&apos;s four countries · your choice of processor · fine control of forms and timing</small></div>
          <div className="fd-step"><span className="fd-k">02</span><b>Consider HoneyBook</b><small>A supported country · payments built in · a documented conditional step · a mobile app</small></div>
          <div className="fd-step fd-muted"><span className="fd-k">03</span><b>Look beyond both</b><small>Physical products · sales forecasting · campaign automation · full accounting</small></div>
        </div>
      </FieldDiagram>
      <h3>Consider Dubsado when</h3>
      <ul>
        <li>you operate outside the U.S., Canada, UK or Australia, or serve clients internationally;</li>
        <li>you want to choose your payment processor, or need PayPal, Square or Xero;</li>
        <li>you want detailed control over forms, branding and the timing of each step, and accept more setup;</li>
        <li>your journey depends on events such as an appointment ending or a payment installment being made.</li>
      </ul>
      <h3>Consider HoneyBook when</h3>
      <ul>
        <li>you are in a supported country and want payments handled inside the platform;</li>
        <li>you want a conditional step documented (for example, remind only if unsigned) and an AI automation builder;</li>
        <li>you want a mobile app and a shorter route from inquiry to deposit;</li>
        <li>you work with services such as Mailchimp, Flodesk, Asana or Slack that appear on its integration lists.</li>
      </ul>
      <h3>Consider looking beyond both when</h3>
      <ul>
        <li>you sell physical products and need inventory and fulfilment (an ecommerce platform);</li>
        <li>you need account hierarchies, forecasting or sales-team permissions (an enterprise or sales CRM such as HubSpot);</li>
        <li>you need campaign-style marketing automation and complex segmentation (a platform such as GoHighLevel);</li>
        <li>you need full bookkeeping, payroll or tax (accounting software, with either platform in front of it).</li>
      </ul>
      <p>
        <strong>What neither platform replaces:</strong> accounting, ecommerce fulfilment, enterprise
        sales systems and advanced marketing automation. A client management platform is the
        operational layer around a client relationship; it does not necessarily replace every
        specialist system.
      </p>
      <p>
        If you are weighing these against a broader stack, a short{' '}
        <a href="/services/consultancy">consultancy</a> engagement can map the process before you
        choose, and <a href="/services/crm-implementation">CRM implementation</a> help can configure
        whichever platform you select.
      </p>

      <h2 id="before-switching">What to consider before switching</h2>
      <ul>
        <li><strong>Contacts are portable; the rest is not.</strong> HoneyBook documents contact export to CSV and import limits of 500 contacts and 2 MB per file (<Src href={HB.exportContacts}>export</Src>, <Src href={HB.importContacts}>import</Src>). Dubsado documents CSV export of contacts and projects. Independent migration guides describe moving contacts by CSV and rebuilding forms, templates and workflows by hand; completed contracts and forms are typically carried over as PDFs. We did not verify any automatic transfer of workflows between the two.</li>
        <li><strong>Rebuild, don&apos;t copy.</strong> Automations, packages and email templates must be recreated, and logic differs between platforms.</li>
        <li><strong>Active clients.</strong> Several guides suggest finishing in-flight projects on the old platform and starting new clients on the new one.</li>
        <li><strong>Payments and autopay.</strong> Saved payment methods and scheduled installments may not transfer; confirm with each provider before cancelling.</li>
        <li><strong>Prices.</strong> Dubsado states that existing paid subscribers kept their previous rates through its December 2025 increase; check how that applies to you.</li>
      </ul>

      <h2 id="complaints-and-trade-offs">Common complaints and trade-offs</h2>
      <p>
        Community and review-site feedback is user experience, not product documentation. Capterra
        reviewers of Dubsado often mention a steep learning curve and long setup, alongside praise
        for automation. Reviews of HoneyBook often mention ease of use alongside concerns that some
        businesses outgrow it, according to independent writers. Pricing changes in both products
        are discussed widely: HoneyBook&apos;s February 2025 repricing and Dubsado&apos;s December
        2025 increase are both reported by independent sources. These are recurring themes in the
        sources we read, not universal experiences.
      </p>

      <h2 id="faq">Dubsado vs HoneyBook FAQ</h2>
      <h3>Is Dubsado better than HoneyBook?</h3>
      <p>Neither is better in general. Dubsado documents more configurable forms and timing; HoneyBook documents built-in payments and a conditional step. Which matters depends on your process, country and tools.</p>
      <h3>Which is cheaper, Dubsado or HoneyBook?</h3>
      <p>HoneyBook&apos;s entry plan costs less per month, but automation requires Essentials ($49 a month billed yearly) there and Premier (reported $525 a year) on Dubsado. Processing fees and team size also affect cost.</p>
      <h3>Does HoneyBook have automation like Dubsado?</h3>
      <p>Both have automation. HoneyBook documents triggers, waits and conditions; Dubsado documents 15 actions with detailed timing triggers. Branching in Dubsado Flows is an open question.</p>
      <h3>Can I use Dubsado or HoneyBook outside the US?</h3>
      <p>HoneyBook supports professionals in the U.S., Canada, UK and Australia. Dubsado Payments supports merchants in 39 countries.</p>
      <h3>Do either of them replace accounting software?</h3>
      <p>No. Both integrate with QuickBooks (Dubsado also lists Xero) and neither is described as full accounting.</p>
      <h3>Can I move my data from HoneyBook to Dubsado?</h3>
      <p>Contacts can be exported as CSV and imported. Forms, workflows, templates and payment plans generally have to be rebuilt.</p>
      <h3>Are Dubsado and HoneyBook CRMs?</h3>
      <p>Both include client management with pipelines and records. Neither is a traditional sales CRM.</p>
    </>
  );
}
