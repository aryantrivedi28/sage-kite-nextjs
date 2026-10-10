/**
 * Article body for /blog/dubsado-setup-services. Kept in its own file because
 * it is long; post.tsx points `content` at it. Text is the "Article" section of
 * Sage_Kite_Blog_Dubsado_Setup_Services.docx; Dubsado facts were checked
 * against official Dubsado documentation on 3 October 2026. FAQ text must stay
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

const SRC = {
  certifiedSpecialist: 'https://www.dubsado.com/partner-with-a-certified-specialist',
  writingProcess: 'https://help.dubsado.com/en/articles/2894266-writing-out-your-process-in-2-0',
  setupChecklist: 'https://help.dubsado.com/en/articles/467045-the-dubsado-setup-checklist',
  formTypes: 'https://help.dubsado.com/en/articles/2880341-dubsado-form-types-and-when-to-use-them',
  proposalContractInvoice: 'https://help.dubsado.com/en/articles/6943800-connect-a-contract-and-invoice-to-a-proposal',
  flowActions: 'https://help.dubsado.com/en/articles/15668756-flow-actions',
  flowTriggers: 'https://help.dubsado.com/en/articles/15668762-flow-triggers-general',
  clientProgressTriggers: 'https://help.dubsado.com/en/articles/3269966-workflow-triggers-client-progress-in-2-0',
  paymentProcessors: 'https://help.dubsado.com/en/articles/580108-connect-a-payment-processor-with-dubsado-payments-square-or-paypal',
  migrateClients: 'https://help.dubsado.com/en/articles/2789241-migrate-existing-clients-into-dubsado-in-2-0',
  bulkImport: 'https://help.dubsado.com/en/articles/1458403-bulk-import-a-client-list-in-2-0',
  threePointO: 'https://www.dubsado.com/blog/introducing-dubsado-three-point-o',
  changelog: 'https://updates.dubsado.com/',
};

export default function DubsadoSetupServicesArticle() {
  return (
    <>
      <p>
        You bought Dubsado. You built a lead form, a contract template and an invoice. Each one
        works. And then you stall, because the next questions aren&apos;t really about Dubsado at
        all.
      </p>
      <p>
        What should happen when a lead goes quiet? Does the questionnaire go out before the call or
        after the deposit? What if someone signs but doesn&apos;t pay? Who decides?
      </p>
      <p>
        That gap is where a Dubsado setup consultant earns their fee, and it&apos;s why the job is
        mostly not clicking. A good one spends a surprising amount of time asking how your business
        actually runs, then translates the answers into forms, documents, scheduling, payments and
        automation that work together. The software is the easy part. The decisions are the work.
      </p>
      <p>
        This guide walks through what that looks like: what &quot;Dubsado setup services&quot;
        covers (it varies a lot), what a consultant does at each stage, what you still have to
        bring yourself, what it tends to cost and how long it takes, how to tell whether a
        consultant is any good, and when doing it yourself is perfectly sensible.
      </p>

      <h2 id="what-dubsado-setup-services-include">
        What do &quot;Dubsado setup services&quot; actually include?
      </h2>
      <p>
        There&apos;s no standard. One person&apos;s &quot;Dubsado setup&quot; is a full build of
        every client journey in your business. Another&apos;s is a two-hour strategy call and a
        template. A third is an audit of what you&apos;ve already built. So before comparing
        prices, find out which kind of service is being offered.
      </p>
      <table>
        <thead>
          <tr>
            <th>Kind of service</th>
            <th>What it usually means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Done-for-you setup</td>
            <td>
              The consultant maps your process and builds it: account settings, forms, templates,
              workflows, scheduler, payment plans, then training. Often capped by the number of
              services or workflows included.
            </td>
          </tr>
          <tr>
            <td>Done-with-you setup</td>
            <td>
              The consultant provides the strategy and structure, and you do more of the hands-on
              building, with guidance.
            </td>
          </tr>
          <tr>
            <td>Audit or review</td>
            <td>
              You already have an account. The consultant reviews it, finds what&apos;s broken or
              confusing, and gives you a list of fixes (and sometimes does them).
            </td>
          </tr>
          <tr>
            <td>Add-ons</td>
            <td>
              Extra workflows, custom-designed forms, copywriting for emails, connections to other
              tools. Frequently priced separately.
            </td>
          </tr>
          <tr>
            <td>Migration help</td>
            <td>
              Moving clients and records in from another system. Scope varies widely, and often
              means contacts plus rebuilding the rest.
            </td>
          </tr>
          <tr>
            <td>Training or ongoing support</td>
            <td>Teaching you to run it, or being on call after launch.</td>
          </tr>
        </tbody>
      </table>
      <p>
        One more thing worth knowing. Dubsado runs a Certified Specialist program, and the
        specialists are independent small-business owners rather than Dubsado employees. Dubsado
        says each sets their own prices and that it doesn&apos;t guarantee service outcomes (
        <Src href={SRC.certifiedSpecialist}>Dubsado&apos;s page on certified specialists</Src>).
        Certification is useful evidence that someone knows the platform. It isn&apos;t a promise
        they&apos;ll understand your business.
      </p>

      <h3>Software capability is one thing. Consultant work is another.</h3>
      <p>
        Here&apos;s the distinction the rest of this article depends on. Dubsado, the software,
        provides things like <strong>workflows</strong>. A workflow is a set of instructions that
        tells Dubsado what to do after a specific event: after a new enquiry, send an
        acknowledgement, wait two days, then send a follow-up. (Dubsado&apos;s current version
        calls them Flows.) It matters because the software will happily run whatever you build,
        whether or not it matches how you really handle leads.
      </p>
      <p>
        The consultant&apos;s job is the part Dubsado can&apos;t do. Which event starts the
        workflow? What should be said, and when? What if the client doesn&apos;t respond? When
        should it stop? Which kinds of client should enter it at all? And what should stay manual
        because a person should be the one to say it? The platform gives you the building blocks.
        Deciding how to use them is the consulting.
      </p>

      <FieldDiagram
        id="software-vs-consultant"
        label="Software vs consulting"
        title="The platform gives you the building blocks. Deciding how to use them is the consulting."
        takeaway="The software is the easy part. The decisions are the work."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Dubsado, the software</span>
            <b>The building blocks</b>
            <div className="fd-chips fd-n2">
              <i>Forms</i><i>Workflows</i><i>Scheduling</i><i>Payments</i>
            </div>
            <small>Runs whatever you build</small>
          </div>
          <div className="fd-versus">VS</div>
          <div className="fd-box fd-muted">
            <span className="fd-k">The consultant</span>
            <b>The decisions</b>
            <div className="fd-scatter">
              <i>Which event starts it?</i>
              <i>What is said, and when?</i>
              <i>What if the client doesn&apos;t respond?</i>
              <i>When should it stop?</i>
              <i>Which clients enter it?</i>
              <i>What stays manual?</i>
            </div>
            <small>The part Dubsado can&apos;t do</small>
          </div>
        </div>
      </FieldDiagram>

      <h2 id="what-a-dubsado-consultant-does">What does a Dubsado consultant actually do?</h2>
      <p>
        In short: they translate the way your business already works into a system that runs it.
        The shape of the work looks like this:
      </p>
      <FieldDiagram
        id="shape-of-the-work"
        label="The shape of the work"
        title="Business process to handoff, in seven steps."
        takeaway="Notice how little of that is software."
      >
        <div className="fd-flow">
          <div className="fd-step fd-dark"><span className="fd-k">01</span><b>Business process</b></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-dark"><span className="fd-k">02</span><b>Client journey</b></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">03</span><b>Dubsado configuration</b></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">04</span><b>Forms, contracts, invoices, scheduler</b></div>
        </div>
        <div className="fd-flow">
          <div className="fd-step"><span className="fd-k">05</span><b>Workflow automation</b></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">06</span><b>Testing</b></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">07</span><b>Handoff</b></div>
        </div>
      </FieldDiagram>
      <p>
        Notice how little of that is software. Notice, too, that the thing at the start, your
        process, is the thing most people haven&apos;t written down. Let&apos;s go through it step
        by step.
      </p>

      <h3>1. They start with questions, not settings</h3>
      <p>
        Setup usually begins before anyone opens a workflow builder. Dubsado&apos;s own help centre
        says a detailed process outline is the foundation for any good workflow, and it suggests
        questions to answer first (<Src href={SRC.writingProcess}>writing out your process</Src>).
        What&apos;s the first thing that happens when a lead arrives? What gets them booked? When
        do you consider them a client? What happens next, when does the work end, and do you
        follow up afterwards?
      </p>
      <p>
        These sound obvious. They usually aren&apos;t. Many owners discover mid-conversation that
        they handle a discovery call differently depending on the client, or that
        &quot;booked&quot; means a signed contract for one service and a paid deposit for another.
        A system can only follow rules someone has defined, so those definitions have to come
        first.
      </p>

      <h3>2. They draw the journey before they build any of it</h3>
      <p>
        A client journey is the route someone takes from first contact to the end of the work, and
        then perhaps beyond. For one business it might be enquiry, consultation, proposal,
        contract, deposit, onboarding, project, delivery, follow-up. For another it&apos;s shorter.
        A photographer&apos;s journey and a consultant&apos;s aren&apos;t the same, and a
        consultant who hands you a standard template without asking is skipping the step that
        matters.
      </p>
      <p>
        In Dubsado, this journey becomes project <strong>statuses</strong>, which show where a
        client currently is (say, Consultation Booked, Proposal Sent, Deposit Paid), and{' '}
        <strong>tags</strong>, which show what type of client or project it is. Dubsado&apos;s
        checklist describes exactly that split (<Src href={SRC.setupChecklist}>setup checklist</Src>).
        Getting those right early makes everything after it easier to read.
      </p>

      <h3>3. They set the foundations</h3>
      <p>
        Some of the work is plain configuration, and it&apos;s still worth doing deliberately.
        Dubsado&apos;s checklist lists branding, international settings, the payment processor,
        email connection, calendar connection and optionally a custom domain, then your services as
        packages, plus bookkeeping categories. None of it is difficult. But a wrong currency
        setting, an email that sends from the wrong address, or a package that doesn&apos;t match
        your pricing will surface later, in front of a client.
      </p>

      <h3>4. They don&apos;t &quot;just add forms&quot;</h3>
      <p>
        Dubsado has five form types: lead captures, questionnaires, proposals, contracts and
        sub-agreements (<Src href={SRC.formTypes}>Dubsado&apos;s form guide</Src>). Building them
        is the easy bit. The thinking is in deciding what to ask, and when.
      </p>
      <p>
        A lead capture is the front door: when someone fills it in, Dubsado creates a project with
        their details. A consultant has to decide what that first form should collect. Too little
        and you chase information later. Too much and people give up before you&apos;ve spoken.
        The same applies to every later form: which questions are required, which are optional,
        and why do you need the answer at all?
      </p>
      <p>
        Proposals deserve a separate mention. In Dubsado a proposal can have a contract and an
        invoice attached, so a client can choose a package, sign and pay in one flow (
        <Src href={SRC.proposalContractInvoice}>connecting a contract and invoice to a proposal</Src>
        ). Whether that suits you depends on your business. If every project needs a conversation
        first, a one-click booking might be the wrong design. That&apos;s a commercial decision,
        not a software one.
      </p>

      <h3>5. They design the automation, then build it</h3>
      <p>
        These are two different jobs, and a lot of confusion comes from mixing them up.{' '}
        <strong>Automation design</strong> is deciding what should happen, when, what starts it,
        what stops it and what stays manual. <strong>Automation building</strong> is entering those
        rules into Dubsado. Building is skilled but mechanical. Design is where the judgment lives.
      </p>
      <p>
        In practice, a Dubsado flow is a series of steps, and each step pairs one action with one
        trigger: the action is what Dubsado does, and the trigger is when (
        <Src href={SRC.flowActions}>Dubsado&apos;s flow actions reference</Src>). Dubsado documents
        15 actions, including sending an email, form, contract, scheduler or invoice, creating a
        task, changing a project&apos;s status, and activating the client portal. Timing can be
        relative (&quot;two days after the contract is signed&quot;) or tied to a fixed date.
        Events such as a form being completed, a contract being signed or an invoice being paid can
        start the clock (<Src href={SRC.clientProgressTriggers}>client progress triggers</Src>).
      </p>
      <p>
        A few details show why design matters. A <strong>Hold Actions Until</strong> step can make
        a flow wait for a condition, and two of them in a row mean both conditions must be met.
        Dubsado&apos;s own example holds a project until the client has signed the contract and
        made their first payment, and only then moves it into production. Several email, form and
        invoice actions can also require manual approval, so a flow pauses until you&apos;ve
        reviewed the message. That&apos;s a design choice about what you want a person to look at.
      </p>

      <FieldDiagram
        id="hold-actions-until"
        label="Hold Actions Until"
        title="Dubsado's own example: hold the project until the contract is signed and the first payment is made."
        takeaway="Two holds in a row mean both conditions must be met."
      >
        <div className="fd-flow">
          <div className="fd-step"><span className="fd-k">Hold</span><b>Contract signed</b><small>The flow waits</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step"><span className="fd-k">Hold</span><b>First payment made</b><small>The flow keeps waiting</small></div>
          <span className="fd-arrow" aria-hidden="true"></span>
          <div className="fd-step fd-dark"><span className="fd-k">Action</span><b>Move into production</b><small>Only once both are met</small></div>
        </div>
      </FieldDiagram>
      <p>
        There&apos;s also a limit worth knowing about. Dubsado&apos;s documented actions don&apos;t
        include an if/else branching step. Independent writers disagree on whether conditional
        logic exists in flows today. A good consultant will tell you plainly what the platform can
        and can&apos;t do in your case, then design around it, instead of promising something they
        haven&apos;t checked. (Automated flows are also on the Premier plan, according to
        independent reviews, so check Dubsado&apos;s pricing page for your plan.)
      </p>

      <h3>6. Scheduling and payments are where the details bite</h3>
      <p>
        Dubsado doesn&apos;t process payments itself. You connect Dubsado Payments (powered by
        Stripe), Square or PayPal. You can connect Dubsado Payments or Square but not both, and
        PayPal doesn&apos;t work with autopay (
        <Src href={SRC.paymentProcessors}>Dubsado&apos;s payment processor guide</Src>). Dubsado
        says it doesn&apos;t add its own payment fees, but your processor&apos;s fees still apply.
        A consultant should explain that choice before building a payment plan around it.
      </p>
      <p>
        Payment plans are templates that define instalments, due dates and reminders, and they can
        be tied to what happens in a flow. A deposit due on signing, a balance due 30 days before
        the event and a late-payment reminder are all design questions: when does the client owe
        what, and what should they hear when they&apos;re late? Scheduling works the same way. A
        scheduler template holds your availability for each type of appointment, and a flow can
        send the booking link and then act on whether the appointment happens. Consultants
        configure the mechanics. You decide the rules: how much notice, how long a call lasts, what
        you do about no-shows.
      </p>

      <h3>7. They build what happens after &quot;yes&quot;</h3>
      <p>
        This is the stage clients feel most. Someone says yes, signs and pays. What now? A
        well-designed onboarding sends a welcome, gives access to the client portal, delivers the
        questionnaire and says clearly what happens next.
      </p>
      <p>
        There&apos;s a nice detail in Dubsado&apos;s documentation. The action that activates the
        client portal doesn&apos;t send anything by itself, and the portal password is set
        manually, so a consultant has to add a separate email that tells the client how to log in.
        It&apos;s a tiny thing, and it&apos;s exactly the kind of gap that makes a new client feel
        lost on day one. The goal isn&apos;t to replace personal communication. It&apos;s to make
        sure the routine messages never get forgotten, so your own attention can go to the parts
        that need you.
      </p>

      <h3>8. They test like a client, not like the person who built it</h3>
      <p>
        Building the system isn&apos;t the last step. Dubsado&apos;s own checklist says to walk
        through the whole process manually first, as both the business owner and the client, using
        a private browser window so Dubsado doesn&apos;t recognise you as the owner, and to apply a
        payment manually instead of really paying. Only then do you automate, and then test the
        workflow on a sample project. It also says, in so many words, that the importance of
        testing workflows can&apos;t be overstated (
        <Src href={SRC.setupChecklist}>setup checklist</Src>).
      </p>
      <p>
        Here&apos;s why a flow that &quot;fires&quot; isn&apos;t proof it works. Dubsado&apos;s
        documentation warns that stacking several actions that all trigger &quot;immediately after
        the previous one&quot; sends them all at once, so a client could receive a booking invite,
        a proposal and a questionnaire in the same minute (
        <Src href={SRC.flowTriggers}>flow triggers</Src>). Every action ran. The client experience
        is still wrong. Deleting a task a flow created doesn&apos;t move the flow on either, so a
        later email can silently never send (<Src href={SRC.flowActions}>flow actions</Src>).
        Neither shows up unless someone tests it as a client would.
      </p>

      <FieldDiagram
        id="fires-is-not-proof"
        label="Testing as a client"
        title="A flow that “fires” isn't proof it works."
        takeaway="Neither shows up unless someone tests it as a client would."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">What the builder sees</span>
            <b>Every action ran</b>
            <div className="fd-chips fd-n1">
              <i>Booking invite</i><i>Proposal</i><i>Questionnaire</i>
            </div>
            <small>Each set to trigger &quot;immediately after the previous one&quot;</small>
          </div>
          <div className="fd-versus">BUT</div>
          <div className="fd-box fd-muted">
            <span className="fd-k">What the client gets</span>
            <b>All three in the same minute</b>
            <div className="fd-solid">Booking invite · proposal · questionnaire</div>
            <small>The client experience is still wrong</small>
          </div>
        </div>
      </FieldDiagram>
      <p>
        So a competent consultant tests the awkward cases too. What if the client submits the form
        twice? Pays only part of the deposit? Never signs? Replies in the middle of a sequence?
        Books a call and then cancels it? A list of &quot;what happens if&quot; questions is often
        more valuable than the build itself.
      </p>

      <h3>9. They leave you able to run it</h3>
      <p>
        A system only the builder understands isn&apos;t finished. Good handoff usually means
        documentation of how it works, often a map of your workflows, a walkthrough (live or
        recorded) and some support while you start using it with real clients. Public packages
        commonly include recorded training and a short support window, though the length varies.
        Ask what you&apos;ll actually have in your hands at the end.
      </p>

      <h2 id="what-you-still-bring">What do you still have to bring?</h2>
      <p>
        A consultant can&apos;t invent your business. They can only translate it. That means some
        of the work is yours, and it&apos;s worth knowing before you start:
      </p>
      <table>
        <thead>
          <tr>
            <th>What the consultant does</th>
            <th>What you provide</th>
            <th>Why it can&apos;t be swapped</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Configures Dubsado and builds forms and templates</td>
            <td>Your services, packages and pricing</td>
            <td>They can&apos;t decide what you sell or for how much.</td>
          </tr>
          <tr>
            <td>Designs workflow logic and builds it</td>
            <td>Approval of the logic, and the exceptions you handle</td>
            <td>Only you know where clients really get stuck.</td>
          </tr>
          <tr>
            <td>Builds contract templates in the system</td>
            <td>Your contract terms, reviewed by a lawyer if needed</td>
            <td>The legal wording is yours. They configure how it&apos;s delivered and signed.</td>
          </tr>
          <tr>
            <td>Formats and schedules emails</td>
            <td>The words, or approval of drafts, in your voice</td>
            <td>Some offer copywriting at extra cost.</td>
          </tr>
          <tr>
            <td>Tests the system</td>
            <td>Real-world scenarios and edge cases from your history</td>
            <td>You&apos;ve seen the strange cases they haven&apos;t.</td>
          </tr>
          <tr>
            <td>Documents and trains</td>
            <td>Time to learn it and keep it current</td>
            <td>It&apos;s your system once they leave.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="included-and-not-included">What is usually included, and what usually isn&apos;t?</h2>
      <p>
        Based on how public packages describe themselves, here&apos;s a realistic picture.
        Don&apos;t assume any single consultant provides all of it.
      </p>
      <table>
        <thead>
          <tr>
            <th>Often included</th>
            <th>What it means</th>
            <th>Often not included</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strategy or process-mapping session</td>
            <td>Working out your journey before building</td>
            <td>Your Dubsado subscription</td>
          </tr>
          <tr>
            <td>Account setup and branding</td>
            <td>Settings, domain, portal look</td>
            <td>Copywriting for every email and form</td>
          </tr>
          <tr>
            <td>Forms and templates</td>
            <td>Lead capture, questionnaires, proposals, contracts, emails</td>
            <td>Legal review of contracts</td>
          </tr>
          <tr>
            <td>A set number of workflows</td>
            <td>Frequently capped, such as &quot;up to three&quot;</td>
            <td>Extra workflows beyond the cap</td>
          </tr>
          <tr>
            <td>Scheduler, packages, payment plans</td>
            <td>Configured to your services</td>
            <td>Custom-coded form design (sometimes extra)</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>Before launch</td>
            <td>Integrations with other tools (often priced per connection)</td>
          </tr>
          <tr>
            <td>Training and documentation</td>
            <td>Recorded walkthrough or call</td>
            <td>Ongoing support beyond a short window</td>
          </tr>
          <tr>
            <td>Short post-launch support</td>
            <td>Typically weeks, not months</td>
            <td>Business strategy, lead generation, or any promised result</td>
          </tr>
        </tbody>
      </table>
      <p>
        That last point is worth underlining. A consultant can&apos;t guarantee more leads, more
        revenue or better retention. They can make your process clearer and more consistent.
        Whether that helps your business depends on whether the process was a good one to begin
        with.
      </p>

      <h2 id="automation-repeats-a-bad-process">
        Automation doesn&apos;t fix a bad process. It repeats it.
      </h2>
      <p>
        Picture a manual process. A lead enquires. You send three separate emails, update a
        spreadsheet, schedule the call by hand, and then send a duplicate follow-up because you
        forgot you&apos;d already sent one. A consultant who simply automates every step has built
        a faster version of the same mess. The better move is to ask a very boring question first:
        why do those steps exist?
      </p>
      <p>
        Maybe the three emails collapse into one. Maybe the spreadsheet existed only because
        nothing else tracked lead status, which Dubsado&apos;s project statuses now do. Maybe the
        follow-up was a fix for the missed one. Asking why is where the real value comes from.
        It&apos;s also why a consultant who starts building before asking questions deserves some
        suspicion.
      </p>

      <FieldDiagram
        id="ask-why-first"
        label="Before you automate"
        title="Automating every step builds a faster version of the same mess."
        takeaway="Asking why is where the real value comes from."
      >
        <div className="fd-compare">
          <div className="fd-box fd-muted">
            <span className="fd-k">Automate every step</span>
            <b>The same mess, faster</b>
            <div className="fd-scatter">
              <i>Three separate emails</i>
              <i>Spreadsheet update</i>
              <i>Call scheduled by hand</i>
              <i>Duplicate follow-up</i>
            </div>
          </div>
          <div className="fd-versus">OR</div>
          <div className="fd-box">
            <span className="fd-k">Ask why each step exists</span>
            <b>Fewer, clearer steps</b>
            <div className="fd-chips fd-n3">
              <i>Three emails collapse into one</i>
              <i>Project statuses track lead status</i>
              <i>No missed follow-up to fix</i>
            </div>
          </div>
        </div>
      </FieldDiagram>

      <h2 id="common-setup-mistakes">Common setup mistakes, and what to check</h2>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Why it happens</th>
            <th>What to check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Workflows built before the process is clear</td>
            <td>Building feels like progress.</td>
            <td>Can you describe every step of the journey on one page?</td>
          </tr>
          <tr>
            <td>Too much automation</td>
            <td>Every step looks automatable.</td>
            <td>
              Which messages should come from you personally? Use manual approval where you want to
              look first.
            </td>
          </tr>
          <tr>
            <td>Duplicate or overlapping workflows</td>
            <td>A new workflow per service, copied and tweaked.</td>
            <td>Do two flows ever send to the same client at once?</td>
          </tr>
          <tr>
            <td>Forms that ask for too much</td>
            <td>Everything seemed useful at the time.</td>
            <td>For each question: what will we do with this answer?</td>
          </tr>
          <tr>
            <td>No exceptions planned</td>
            <td>Only the happy path was designed.</td>
            <td>What happens when someone doesn&apos;t reply, pay or sign?</td>
          </tr>
          <tr>
            <td>Old inefficiencies recreated</td>
            <td>The existing process was never questioned.</td>
            <td>Why does each step exist?</td>
          </tr>
          <tr>
            <td>No testing, or testing as the owner</td>
            <td>It looks fine from the builder&apos;s side.</td>
            <td>Has someone gone through it in a private window as a client?</td>
          </tr>
          <tr>
            <td>Nothing documented</td>
            <td>The builder is the only one who knows.</td>
            <td>Could you explain this to a new team member?</td>
          </tr>
          <tr>
            <td>Messy imported data</td>
            <td>Contacts were imported as-is.</td>
            <td>
              Dubsado&apos;s import is a CSV (not .xlsx) and will duplicate existing clients, so
              clean the file first.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="can-you-set-up-dubsado-yourself">Can you set up Dubsado yourself?</h2>
      <p>
        Often, yes. Dubsado has its own setup checklist, a library of help articles, and a free
        trial. New trials include a 21-day trial period, according to Dubsado&apos;s 3.0
        announcement (<Src href={SRC.threePointO}>Dubsado 3.0 page</Src>). Plenty of businesses
        build their own, and they learn how the system works in the process, which has real value.
      </p>
      <table>
        <thead>
          <tr>
            <th>DIY may be enough when&hellip;</th>
            <th>Professional help may make sense when&hellip;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>You offer one or a few simple services</td>
            <td>You have several services with different journeys</td>
          </tr>
          <tr>
            <td>Your client journey is short and straightforward</td>
            <td>The journey has many steps, exceptions or handoffs</td>
          </tr>
          <tr>
            <td>You&apos;re comfortable learning software and have the time</td>
            <td>Your time is the scarcest thing you have</td>
          </tr>
          <tr>
            <td>You want limited automation</td>
            <td>You want a lot of automation, or have tried and it isn&apos;t working</td>
          </tr>
          <tr>
            <td>You&apos;re starting fresh</td>
            <td>You&apos;re migrating from another system or have a tangled existing account</td>
          </tr>
          <tr>
            <td>It&apos;s just you</td>
            <td>Several team members will use it</td>
          </tr>
        </tbody>
      </table>
      <p>
        Neither column is better. A common middle path is to build the basics yourself and pay for
        a one-off audit later, or to take a strategy session to design the journey and then build
        it yourself. If your setup is more involved, with process mapping, workflow design,
        migration and testing, that&apos;s the point where{' '}
        <a href="/platforms/dubsado">professional Dubsado implementation support</a> tends to earn
        its place.
      </p>

      <h2 id="cost-and-timeline">How much does Dubsado setup cost, and how long does it take?</h2>
      <p>
        Honestly, it varies too much to give you an average, and any page that offers one is
        guessing. Here&apos;s what public listings show, with limits. They&apos;re in dollars (USD
        or CAD as listed), from different dates, and cover very different scopes, so don&apos;t
        treat them as a market rate.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type of service</th>
            <th>What public pages list (examples, not averages)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Audit or review</td>
            <td>Roughly US$200 to $350 for a call or a written review.</td>
          </tr>
          <tr>
            <td>Done-with-you</td>
            <td>One specialist lists $1,297.</td>
          </tr>
          <tr>
            <td>Done-for-you full setup</td>
            <td>
              Listed starting points range from about US$2,500 to $4,000, with at least one
              starting at CAD 5,000 for up to four services.
            </td>
          </tr>
          <tr>
            <td>Add-ons</td>
            <td>
              Integrations listed from about $300 to $500 each, and copywriting often priced
              separately.
            </td>
          </tr>
          <tr>
            <td>Ongoing management</td>
            <td>One provider lists packages from $499.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Price tends to rise with the number of services and workflows, how much copywriting you
        want done, whether there&apos;s migration, custom form design and how many integrations you
        need. Your Dubsado subscription is a separate cost, and some consultants state that
        explicitly. On timing, listed timelines range from under a week to about four weeks, and
        many don&apos;t state one. It depends on how quickly you answer questions and approve
        drafts as much as on the build.
      </p>

      <h2 id="judging-a-consultant">How do you tell whether a Dubsado consultant is any good?</h2>
      <p>
        You can learn a lot from the questions a consultant asks you. A good one wants to know:
      </p>
      <ul>
        <li>What do you sell, and how do leads reach you today?</li>
        <li>What happens after someone enquires? After they become a client?</li>
        <li>Where do leads get stuck, and where do clients get confused?</li>
        <li>What&apos;s manual and repetitive right now?</li>
        <li>What should happen automatically, and what should stay with you?</li>
        <li>What happens when a client doesn&apos;t respond?</li>
      </ul>
      <p>And you can ask them, in turn:</p>
      <ul>
        <li>Can you explain what you&apos;ll build, in plain English, before you build it?</li>
        <li>What&apos;s included, what isn&apos;t, and what do extras cost?</li>
        <li>How do you test, and who tests?</li>
        <li>What documentation and training will I get, and what support after launch?</li>
        <li>
          Which version of Dubsado will you build in? Dubsado said it would retire the older 2.0
          version during 2026, so check where your account stands.
        </li>
        <li>What can&apos;t this setup do for me?</li>
      </ul>
      <p>
        Be wary of anyone who promises more leads, more revenue or that everything will be
        &quot;fully automated&quot;. Those aren&apos;t things a setup controls.
      </p>

      <h2 id="example-setup">What a complete setup might look like (a hypothetical)</h2>
      <p>
        Imagine a solo brand consultant. Here&apos;s one way her journey could be set up, and where
        the decisions sit. It&apos;s an illustration, not a template.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>What gets configured</th>
            <th>Decision only she can make</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enquiry</td>
            <td>
              Lead capture form on her website, an acknowledgement email, project created with
              status &quot;New enquiry&quot;
            </td>
            <td>What to ask up front, and which enquiries aren&apos;t a fit</td>
          </tr>
          <tr>
            <td>Consultation</td>
            <td>Scheduler template, reminder emails, calendar sync</td>
            <td>Call length, notice period, what happens on no-shows</td>
          </tr>
          <tr>
            <td>Proposal</td>
            <td>Packages, a proposal form with contract and invoice attached</td>
            <td>Whether to allow instant booking or review each case</td>
          </tr>
          <tr>
            <td>Contract and payment</td>
            <td>Contract template, payment plan with a deposit and instalments</td>
            <td>Her terms and payment schedule</td>
          </tr>
          <tr>
            <td>Onboarding</td>
            <td>
              Welcome email, portal access, intake questionnaire sent once contract and deposit are
              in
            </td>
            <td>What she needs to know before starting</td>
          </tr>
          <tr>
            <td>Project and finish</td>
            <td>Status updates, a wrap-up email, a follow-up check-in</td>
            <td>How she closes work and keeps in touch</td>
          </tr>
          <tr>
            <td>Handoff</td>
            <td>Workflow map, a recorded walkthrough, a short support window</td>
            <td>Who maintains it, and how often it&apos;s reviewed</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two shorter variations help show how much depends on the business. A{' '}
        <strong>wedding professional</strong> needs payment schedules tied to a date months away,
        plus planning communication over a long engagement, so the design is about timing and
        reminders over time. An <strong>existing Dubsado user</strong> may not need a build at all.
        They have duplicate workflows, confusing emails and manual workarounds. A consultant would
        audit the account first, map what&apos;s actually happening, remove what&apos;s redundant
        and rebuild only what needs it. A <strong>photographer</strong> with a simple booking
        journey might need little more than a well-built lead form, proposal, contract and deposit.
      </p>

      <h2 id="when-dubsado-shouldnt-own-everything">When shouldn&apos;t Dubsado own everything?</h2>
      <p>
        A consultant should design the system around your business, not push every function into
        Dubsado. It handles client management, forms, contracts, invoicing, scheduling and
        workflows. But other things usually live elsewhere. Card payments run through Stripe,
        Square or PayPal. Accounting can connect to QuickBooks or Xero, which Dubsado&apos;s
        changelogs describe. Project delivery often sits in a task tool, and Dubsado connects to
        tools like ClickUp, Asana and Harvest through Zapier, which needs a Zapier account. Email
        marketing, your website and file storage also tend to stay separate.
      </p>

      <FieldDiagram
        id="what-lives-elsewhere"
        label="Design the system around the business"
        title="Dubsado handles client management. Other things usually live elsewhere."
        takeaway="A consultant shouldn't push every function into Dubsado."
      >
        <div className="fd-layer fd-dark">
          <span className="fd-k">Dubsado</span>
          <b>Client management</b>
          <small>Forms · contracts · invoicing · scheduling · workflows</small>
        </div>
        <div className="fd-link-label">USUALLY LIVES ELSEWHERE</div>
        <div className="fd-cols fd-n4">
          <div className="fd-step"><span className="fd-k">Card payments</span><b>Processor</b><small>Stripe, Square or PayPal</small></div>
          <div className="fd-step"><span className="fd-k">Accounting</span><b>Connected</b><small>QuickBooks or Xero</small></div>
          <div className="fd-step"><span className="fd-k">Project delivery</span><b>Task tool</b><small>ClickUp, Asana, Harvest, through Zapier</small></div>
          <div className="fd-step fd-muted"><span className="fd-k">Separate</span><b>Everything else</b><small>Email marketing, website, file storage</small></div>
        </div>
      </FieldDiagram>
      <p>
        If you&apos;re choosing between Dubsado and another platform in the first place, our{' '}
        <a href="/blog/dubsado-vs-honeybook">Dubsado vs HoneyBook</a> comparison covers the
        differences. This article assumes you&apos;ve already decided.
      </p>

      <h2 id="where-that-leaves-you">So where does that leave you?</h2>
      <p>
        Back at the stall from the start: you&apos;ve got Dubsado, and you don&apos;t quite know
        what should happen next. That feeling is the sign that the missing piece is a decision, not
        a setting. A consultant&apos;s real contribution is helping you make those decisions in the
        right order, then building them so they hold up when a real client does something
        unexpected.
      </p>
      <p>
        If your business is simple, you can do much of that yourself. If it&apos;s tangled, or
        you&apos;d rather spend your time with clients, hire help, and judge them by the questions
        they ask. Either way, write the process down first. It&apos;s the one step no software, and
        no consultant, can skip.
      </p>

      <h2 id="faq">Questions people ask about Dubsado setup</h2>
      <h3>What does a Dubsado consultant do?</h3>
      <p>
        They turn your existing client process into a working Dubsado system. That means mapping
        your journey, configuring the account, building forms, contracts and templates, designing
        and building workflows, setting up scheduling and payments, testing, and handing the system
        over with documentation and training.
      </p>
      <h3>What is included in Dubsado setup services?</h3>
      <p>
        It varies by consultant. Common inclusions are a strategy session, account setup, forms and
        templates, a limited number of workflows, a scheduler, payment plans, testing, training and
        short post-launch support. Copywriting, integrations and extra workflows are often priced
        separately.
      </p>
      <h3>Do I need a Dubsado consultant?</h3>
      <p>
        Not always. A simple business with a short client journey can often set Dubsado up itself.
        Help is more useful with several services, many workflows, migration or an account that
        already isn&apos;t working.
      </p>
      <h3>How long does Dubsado setup take?</h3>
      <p>
        There&apos;s no universal answer. Listed timelines run from under a week to around four
        weeks, and they depend on the number of services and workflows, any migration,
        copywriting, integrations, testing and how quickly you give feedback.
      </p>
      <h3>How much does Dubsado setup cost?</h3>
      <p>
        Public listings range from a few hundred dollars for an audit to several thousand for a
        full build, in mixed currencies and scopes. We don&apos;t think a reliable average exists,
        so compare what&apos;s included, not just the price.
      </p>
      <h3>Can I set up Dubsado myself?</h3>
      <p>
        Yes. Dubsado provides a setup checklist, help articles and a trial. Many people do,
        particularly when their process is simple.
      </p>
      <h3>What does a Dubsado consultant need from me?</h3>
      <p>
        Your services, packages and pricing, contract terms, brand assets, email wording or
        approval of drafts, scheduling rules, and a clear description of how you currently work,
        including exceptions.
      </p>
      <h3>What should a Dubsado consultant deliver?</h3>
      <p>
        A working, tested system, plus documentation and training so you can run it. Agree in
        writing what&apos;s included, what isn&apos;t, and what support follows launch.
      </p>

      <h2 id="sources">Sources and reading</h2>
      <p>
        Dubsado capabilities were checked against Dubsado&apos;s own documentation. Pricing and
        package examples come from public consultant pages and are listed in the research notes
        below, not here, so no individual provider is promoted.
      </p>
      <ul>
        <li>
          <Src href={SRC.setupChecklist}>Dubsado: the setup checklist</Src>
        </li>
        <li>
          <Src href={SRC.writingProcess}>Dubsado: writing out your process</Src>
        </li>
        <li>
          <Src href={SRC.formTypes}>Dubsado: form types</Src>
        </li>
        <li>
          <Src href={SRC.flowActions}>Dubsado: flow actions</Src> and{' '}
          <Src href={SRC.flowTriggers}>flow triggers</Src>
        </li>
        <li>
          <Src href={SRC.clientProgressTriggers}>Dubsado: client progress triggers</Src>
        </li>
        <li>
          <Src href={SRC.paymentProcessors}>Dubsado: payment processors</Src>
        </li>
        <li>
          <Src href={SRC.migrateClients}>Dubsado: migrating existing clients</Src> and{' '}
          <Src href={SRC.bulkImport}>bulk import</Src>
        </li>
        <li>
          <Src href={SRC.certifiedSpecialist}>Dubsado: partner with a certified specialist</Src>
        </li>
        <li>
          <Src href={SRC.threePointO}>Dubsado 3.0 announcement</Src> and{' '}
          <Src href={SRC.changelog}>Dubsado news and changelogs</Src>
        </li>
      </ul>
    </>
  );
}
