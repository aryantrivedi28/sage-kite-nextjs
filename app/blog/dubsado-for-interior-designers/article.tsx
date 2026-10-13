/**
 * Article body for /blog/dubsado-for-interior-designers. Kept in its own file
 * because it is long; post.tsx points `content` at it. Text is the "Article"
 * section of Sage_Kite_Blog_Dubsado_for_Interior_Designers.docx. Dubsado facts
 * were checked against Dubsado's own pages on 13 October 2026; edits made during
 * that check are noted in the commit. FAQ text must stay identical to the `faqs`
 * array in post.tsx.
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
  interiorDesigners: 'https://www.dubsado.com/industry/interior-designers',
  writingProcess: 'https://help.dubsado.com/en/articles/2894266-writing-out-your-process-in-2-0',
  flowActions: 'https://help.dubsado.com/en/articles/15668756-flow-actions',
  publicScheduler: 'https://help.dubsado.com/en/articles/6985997-start-a-workflow-from-a-public-scheduler-in-2-0',
  schedulerBuffers: 'https://help.dubsado.com/en/articles/9072451-scheduler-intervals-and-buffers-in-2-0',
  proposalContractInvoice: 'https://help.dubsado.com/en/articles/6943800-connect-a-contract-and-invoice-to-a-proposal-in-2-0',
  paymentProcessors: 'https://help.dubsado.com/en/articles/580108-connect-a-payment-processor-with-dubsado-payments-square-or-paypal-in-2-0',
  paymentPlans: 'https://help.dubsado.com/en/articles/467089-payment-plans-in-2-0',
  bulkImport: 'https://help.dubsado.com/en/articles/1458403-bulk-import-a-client-list',
  setupChecklist: 'https://help.dubsado.com/en/articles/467045-the-dubsado-setup-checklist',
  certifiedSpecialists: 'https://www.dubsado.com/certified-dubsado-specialist',
  pricing: 'https://www.dubsado.com/pricing',
  threePointO: 'https://www.dubsado.com/blog/introducing-dubsado-three-point-o',
};

export default function DubsadoForInteriorDesignersArticle() {
  return (
    <>
      <p>
        It is Sunday evening and you are not designing. You are copying a client&apos;s address from
        an email into a contract, checking whether last week&apos;s deposit landed, and writing, for the
        fourth time this month, the same paragraph about what happens after the agreement is signed.
        None of this is why you became a designer, and all of it is the reason a studio of any size
        starts to feel heavier than the work deserves.
      </p>
      <p>
        Dubsado is the tool many designers reach for at that point. It works best for an interior
        design business when you build a connected system around the client journey, not a pile of
        one-off automatic emails. The difference matters, and most of this article is about it.
      </p>
      <p>
        We will cover which parts of a design business Dubsado handles well, three workflows worth
        building carefully, where the tool stops being useful, and how to start without rebuilding your
        whole studio in one weekend.
      </p>

      <h2 id="can-dubsado-automate-interior-design">Can Dubsado automate an interior design business?</h2>
      <p>
        Partly, and the &quot;partly&quot; is the useful bit. An interior design project has two halves.
        The front half, from first enquiry to signed agreement and first payment, is repeatable. The
        same questions get asked, the same documents get sent, the same reminders get written. The back
        half, from concept to installation, is full of decisions, products, suppliers and surprises.
        Dubsado is built for the first half. It can support the second, but it was never designed to
        run it.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage of a design project</th>
            <th>How repeatable it is</th>
            <th>Dubsado&apos;s role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Enquiry and qualification</td><td>High: same questions every time</td><td>Strong fit: forms, scheduler, automatic replies</td></tr>
          <tr><td>Consultation and proposal</td><td>Medium: scope varies, structure does not</td><td>Good fit: proposal with contract and invoice attached</td></tr>
          <tr><td>Agreement, deposit, onboarding</td><td>High</td><td>Strong fit: contract, invoice, questionnaire, portal</td></tr>
          <tr><td>Concept and presentation</td><td>Medium: the work is custom, the logistics are not</td><td>Supporting: share files, request feedback, track status</td></tr>
          <tr><td>Specification, ordering, procurement</td><td>Low: depends on products, suppliers and budget</td><td>Weak fit: use a design-specific tool or a manual process</td></tr>
          <tr><td>Installation and handover</td><td>Low to medium</td><td>Supporting: tasks, reminders, closing communication</td></tr>
          <tr><td>Wrap-up and referrals</td><td>High</td><td>Good fit: thank-you, feedback request, archive</td></tr>
        </tbody>
      </table>
      <p>
        If you take one idea from this article, take that table. Automation earns its keep where the
        work repeats. Where each project is different, a person has to be involved, and the honest
        question is only how much preparation the system can do for that person.
      </p>
      <FieldDiagram
        id="two-halves"
        label="Two halves of a project"
        title="Dubsado is built for the repeatable front half. The back half needs a designer."
        takeaway="Automation earns its keep where the work repeats."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Front half: repeatable</span>
            <b>Dubsado runs it</b>
            <div className="fd-chips">
              <i>Enquiry</i><i>Proposal</i><i>Agreement</i><i>Onboarding</i>
            </div>
            <small>Same questions, documents and reminders every time</small>
          </div>
          <div className="fd-versus">THEN</div>
          <div className="fd-box fd-muted">
            <span className="fd-k">Back half: custom</span>
            <b>The designer runs it</b>
            <div className="fd-chips">
              <i>Concept</i><i>Specification</i><i>Procurement</i><i>Installation</i>
            </div>
            <small>Decisions, products, suppliers and surprises. Dubsado supports, but doesn&apos;t run it</small>
          </div>
        </div>
      </FieldDiagram>
      <p>
        Dubsado also publishes a page aimed at <Src href={SRC.interiorDesigners}>interior designers</Src>{' '}
        describing how it frames the product for the industry. It is worth reading as a statement of
        what Dubsado says it does, alongside the more cautious view here of where it stops.
      </p>

      <h2 id="what-a-workflow-is">What a Dubsado workflow really is</h2>
      <p>
        Dubsado calls its automation a workflow, and the name hides how mechanical it is. (In Dubsado
        3.0 they are called flows; this article uses &quot;workflow&quot;, the term most designers
        search for.) A workflow is a sequence of actions that starts when something happens, a form
        submitted or a contract signed for example, and then performs a series of steps in order. Those
        steps include sending an email, a form, a contract, a scheduler link or an invoice, creating a
        task, changing the project status, adding a tag, and waiting until a condition is met before
        carrying on.
      </p>
      <p>
        Two properties of that model shape everything else. First, the sequence is a line, not a tree.
        Dubsado&apos;s help pages describe waiting steps that stack, so a flow can pause until a contract
        is signed and a payment is received, but they do not describe an if-this-then-that branch.
        Independent sources disagree about whether branching is possible, which is itself a reason to
        build as though it is not. Where you need two paths, such as full-service and e-design, the
        safer design is two workflows.
      </p>
      <p>
        Second, a workflow can only act on what the system can see. It knows a form was returned or an
        invoice was paid. It does not know that the client sounded hesitant on the call. A good workflow
        design therefore puts a human decision at the points where judgement is needed, and Dubsado
        supports this: some actions can be set to wait for your{' '}
        <Src href={SRC.flowActions}>manual approval</Src> before they go out.
      </p>
      <p>
        Dubsado&apos;s own advice is to <Src href={SRC.writingProcess}>write out your process</Src>{' '}
        before building anything. That sounds like homework and it is the single most useful step.
        Software cannot fix a process you cannot describe.
      </p>

      <h2 id="which-workflows-first">Which workflows come first, and for whom</h2>
      <p>
        The order matters more than the number. A designer who builds ten half-tested workflows will
        have ten problems. A designer who builds two and tests them properly will have a studio that
        feels calmer within a few weeks. Where to begin depends on what is hurting.
      </p>
      <table>
        <thead>
          <tr>
            <th>If your main pain is…</th>
            <th>Build first</th>
            <th>Why this first</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Enquiries that go cold or get answered late</td><td>Enquiry-to-consultation workflow</td><td>The cheapest improvement: speed and consistency at the moment of highest intent</td></tr>
          <tr><td>Chasing signatures and deposits</td><td>Proposal, contract and invoice workflow</td><td>Removes the most awkward conversations in the business</td></tr>
          <tr><td>Clients who start projects unprepared</td><td>Onboarding workflow</td><td>Gathers what you need before the first working session</td></tr>
          <tr><td>Feedback that drifts or never arrives</td><td>Presentation and feedback workflow</td><td>Gives approvals a date and a place to live</td></tr>
          <tr><td>A finished project that just fades out</td><td>Wrap-up and referral workflow</td><td>Last, because it only matters once the earlier ones work</td></tr>
        </tbody>
      </table>

      <h2 id="workflow-blueprint">The workflow blueprint</h2>
      <p>
        Here is the whole front-to-back picture in one place. It lists ten workflow ideas grouped into
        eight rows. Not every studio needs every row; the starter plan later shows what to skip.
      </p>
      <table>
        <thead>
          <tr>
            <th>Workflow</th>
            <th>Trigger</th>
            <th>What Dubsado does</th>
            <th>Where you step in</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Enquiry response</td><td>Lead capture form submitted</td><td>Creates the client and project, sends an acknowledgement, adds a tag</td><td>Read the enquiry; decide whether it is a fit</td></tr>
          <tr><td>2. Consultation booking</td><td>Qualified lead</td><td>Sends a scheduler link with buffers and daily limits, attaches a form</td><td>Decide who gets the link</td></tr>
          <tr><td>3. Proposal and agreement</td><td>Consultation held</td><td>Sends a proposal with contract and invoice attached</td><td>Write the scope and set the fee</td></tr>
          <tr><td>4. Deposit and onboarding</td><td>Contract signed and deposit paid</td><td>Opens the portal, sends the questionnaire, creates tasks</td><td>Review answers before the kickoff</td></tr>
          <tr><td>5. Questionnaire follow-up</td><td>Questionnaire sent</td><td>Reminder emails if not returned</td><td>Call the client if it stalls</td></tr>
          <tr><td>6. Presentation and feedback</td><td>Concept ready</td><td>Sends feedback form with a due date, creates a task for you</td><td>Present the concept; interpret feedback</td></tr>
          <tr><td>7. Milestone invoicing</td><td>Phase completed</td><td>Sends the next invoice, or runs a payment plan</td><td>Confirm the phase is truly complete</td></tr>
          <tr><td>8. Wrap-up and referral</td><td>Project complete</td><td>Sends thank-you and review request, archives the project</td><td>Choose whether to ask for a referral</td></tr>
        </tbody>
      </table>
      <p>
        The two missing numbers are deliberate. Procurement and site visit logistics, which a designer
        might call workflows nine and ten, are covered under &quot;Where Dubsado stops&quot; because they
        do not belong inside Dubsado for most studios.
      </p>

      <h2 id="three-workflows">Three workflows worth building properly</h2>

      <h3>1. From enquiry to qualified opportunity</h3>
      <p>
        This is the workflow that sets the tone. The goal is not to book every enquiry; it is to make
        sure the right people book and the wrong ones understand quickly why it is not a fit.
      </p>
      <ul>
        <li>
          <strong>A lead capture form</strong> on your website asks the questions that decide fit:
          location, project type, rooms, rough timing and a budget range if you are comfortable asking.
          Dubsado&apos;s lead capture creates the client and the project at the same moment, so nothing
          is retyped.
        </li>
        <li>
          <strong>An acknowledgement email</strong> goes out straight away. Keep it short and honest:
          you have received the enquiry, when they will hear from you, and what happens next. It should
          read as written by a person.
        </li>
        <li>
          <strong>A task is created for you</strong>, because someone has to decide. Set the workflow to
          wait here. This is the moment of judgement.
        </li>
        <li>
          <strong>You approve the next step.</strong> If it is a fit, the scheduler link goes out. If it
          is not, you send a polite decline, ideally with a suggestion of where else to look.
        </li>
        <li>
          <strong>The scheduler</strong> offers consultation times using{' '}
          <Src href={SRC.schedulerBuffers}>buffers and daily limits</Src> so your calendar does not fill
          with back-to-back calls. It can carry a form to collect final details, and reminders go by
          email only, not text message.
        </li>
      </ul>
      <p>
        One trap is worth knowing about. Dubsado&apos;s help pages suggest attaching a lead capture form
        to a <Src href={SRC.publicScheduler}>public scheduler</Src> so people enter their details before
        booking, and a project is created as soon as that form is submitted, even if the person never
        books. The same pages note that a workflow started from a public scheduler cannot use
        appointment-based triggers, because the appointment already exists before the workflow starts.
        Those pages were written for Dubsado 2.0, so test the behaviour in the version you use rather
        than relying on them.
      </p>

      <h3>2. From signed agreement to a client who is ready</h3>
      <p>
        Most onboarding problems are really information problems. You start the first working session
        and discover you do not know the budget, the household, the deadlines or what the client
        actually dislikes. The onboarding workflow exists to make sure that conversation happens on
        paper first.
      </p>
      <ul>
        <li>
          <strong>Proposal first.</strong> Dubsado lets you{' '}
          <Src href={SRC.proposalContractInvoice}>connect a contract and invoice to a proposal</Src>, so
          the client sees the scope, the agreement and the deposit in one place and one decision.
        </li>
        <li>
          <strong>Wait for the signature and the deposit.</strong> Dubsado&apos;s waiting steps stack, so
          the workflow can hold until both are done before anything else fires. This replaces the manual
          checking.
        </li>
        <li>
          <strong>Open the client portal.</strong> Note that activating the portal sends no email by
          itself, so pair it with an email that tells the client where to look.
        </li>
        <li>
          <strong>Send the design questionnaire.</strong> Ask about how they live, not only what they
          like: who uses each room, what annoys them now, what they have already bought. Good answers
          here save hours later and are the content of the kickoff conversation.
        </li>
        <li>
          <strong>Create tasks for you</strong>: review the answers, prepare the kickoff, request the
          floor plans. Tasks created by a workflow have no due date, so name them clearly and use your
          calendar for timing. Deleting a task a workflow created can stop the workflow advancing, so
          complete it rather than delete it.
        </li>
      </ul>

      <h3>3. From presentation to decision</h3>
      <p>
        Design feedback is where projects lose weeks. Clients say they will look at it over the weekend
        and then it is three weeks later. A workflow cannot make a client decisive, but it can give the
        decision a date, a form and a reminder.
      </p>
      <ul>
        <li>
          After you present, trigger a <strong>feedback form</strong> that asks specific questions: what
          works, what does not, what is missing. Open-ended &quot;thoughts?&quot; produces open-ended
          replies.
        </li>
        <li>
          Set a <strong>reminder sequence</strong> that is polite and spaced, with the final reminder
          stating what happens if you do not hear back, such as the schedule moving.
        </li>
        <li>
          Create a <strong>task for you</strong> when the form comes back. Interpreting feedback is
          design work, not admin.
        </li>
        <li>
          Update the <strong>project status</strong> so your pipeline shows where each project really is.
        </li>
      </ul>

      <h2 id="automate-or-keep-human">What to automate and what to keep human</h2>
      <p>
        The most common mistake with workflow tools is automating the wrong moment, and it is easy to do
        because the tool does not know the difference. This table is the test we would use.
      </p>
      <table>
        <thead>
          <tr>
            <th>Let the system prepare it</th>
            <th>A person decides it</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Sending forms, contracts, invoices and reminders</td><td>Whether to take the project at all</td></tr>
          <tr><td>Collecting questionnaire answers into one place</td><td>What the answers mean for the design</td></tr>
          <tr><td>Reminding the client about a pending approval</td><td>Whether a delayed client needs a phone call instead</td></tr>
          <tr><td>Creating tasks and updating status</td><td>Pricing exceptions, scope changes and refunds</td></tr>
          <tr><td>Thanking the client at the end</td><td>Whether to ask for a referral, and how</td></tr>
        </tbody>
      </table>
      <p>
        A simple rule follows. If a mistake would be embarrassing, expensive or hard to retract, put a
        manual approval in front of it. Dubsado supports this on some actions, and using it is a sign of
        a mature system, not a slow one.
      </p>
      <p>
        Messages that go to clients also carry legal weight in some places. If your studio emails in
        bulk or sends text messages, rules such as CAN-SPAM in the United States and consent
        requirements for texts apply. For ordinary transactional project emails this is rarely an issue,
        but it is worth knowing before you add marketing sequences.
      </p>

      <h2 id="where-dubsado-stops">Where Dubsado stops</h2>
      <p>
        Interior design involves a layer of work Dubsado was not built for: specifying products,
        requesting quotes, raising purchase orders, tracking deliveries and reconciling what was ordered
        with what arrived. Platforms built for the trade, such as Studio Designer, Houzz Pro, Programa
        and Ivy, are organised around those jobs. Their own marketing is the main source of comparison
        material, so treat it as a description of what they say they do, not as a verdict.
      </p>
      <p>
        This gives most studios three honest options. Keep procurement in a design-specific platform and
        use Dubsado only for the client journey. Use Dubsado for everything and manage procurement in
        spreadsheets, which works for small studios with simple projects and gets uncomfortable as
        volume grows. Or choose a design-specific platform for everything and accept that its client
        experience may be less tailored. There is no universal answer; it depends on how much
        procurement your projects involve.
      </p>
      <p>
        Payments are another boundary worth stating. Dubsado supports Dubsado Payments, Square or PayPal
        as processors, but Dubsado Payments and Square cannot both be connected, and PayPal does not work
        with autopay. Dubsado itself charges no platform fee on payments, but the processor does.{' '}
        <Src href={SRC.paymentProcessors}>Dubsado&apos;s own guide to connecting a processor</Src> sets
        this out, and <Src href={SRC.paymentPlans}>payment plans</Src> are worth understanding if you
        invoice by milestone.
      </p>

      <h2 id="e-design-vs-full-service">E-design and full-service run differently</h2>
      <p>
        A full-service project has many phases, suppliers and site visits. An e-design project is
        shorter, more fixed in scope and often sold at a set price. They deserve different workflows,
        mainly because the second can be almost fully systematised and the first cannot.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Full-service</th>
            <th>E-design</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Proposal</td><td>Scope varies; fee structure can be complex</td><td>Packaged: fixed scope and price</td></tr>
          <tr><td>Onboarding</td><td>Long questionnaire, site details, access arrangements</td><td>Questionnaire plus photos, measurements and floor plans</td></tr>
          <tr><td>Payments</td><td>Retainer then milestones</td><td>Often one payment, or two</td></tr>
          <tr><td>Delivery</td><td>Presentations, revisions, procurement, installation</td><td>Defined deliverables and revision rounds</td></tr>
          <tr><td>Automation potential</td><td>Front half and wrap-up</td><td>Nearly the whole journey</td></tr>
          <tr><td>Suggested build</td><td>One workflow per phase, with manual approvals</td><td>One workflow end to end</td></tr>
        </tbody>
      </table>
      <p>
        If you do both, build them as separate workflows from the start. Trying to make one flow handle
        both is where a branch would be needed, and as discussed, that is the part Dubsado does not
        clearly offer.
      </p>

      <h2 id="hypothetical-before-and-after">A hypothetical before and after</h2>
      <p>
        <strong>This is an illustration, not a case study, and it describes no real client.</strong>{' '}
        Picture a two-person studio taking on a handful of residential projects at a time. Enquiries
        arrive by email, Instagram and a contact form. One partner replies when she can. Contracts are
        Word documents sent as PDFs. Deposits are chased by hand. Onboarding information is gathered over
        several emails.
      </p>
      <p>
        After a careful build, the same studio has one enquiry form that feeds one pipeline. Every
        enquiry gets an acknowledgement. A task asks the partner to qualify the lead. A consultation link
        goes out on approval. The proposal arrives with its contract and deposit invoice attached. Once
        both are complete, a portal opens and a questionnaire arrives. The partner reviews the answers
        before the kickoff, not during it.
      </p>
      <p>
        Nothing in that picture is clever. The designers still design, still decide and still talk to
        clients. What changed is that the repeatable parts no longer depend on someone remembering them.
        That is the realistic ambition, and it needs no promises about hours saved to justify it.
      </p>

      <h2 id="common-mistakes">Mistakes that quietly undo the system</h2>
      <table>
        <thead>
          <tr>
            <th>Mistake</th>
            <th>What goes wrong</th>
            <th>Better approach</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Automating before writing out the process</td><td>The workflow encodes confusion</td><td>Write the process in plain language first</td></tr>
          <tr><td>Skipping a manual approval before sending contracts or invoices</td><td>A wrong figure reaches the client</td><td>Use manual approval on high-stakes actions</td></tr>
          <tr><td>Importing client lists casually</td><td>CSV import duplicates existing clients</td><td>Clean the list first and import once</td></tr>
          <tr><td>Skipping testing</td><td>Errors surface in front of real clients</td><td>Test as owner and as client, in a private window, with a manual payment</td></tr>
          <tr><td>One workflow for every project type</td><td>Branching is needed, and may not exist</td><td>Separate workflows for separate project types</td></tr>
          <tr><td>Deleting workflow-created tasks</td><td>The flow may stop advancing</td><td>Complete tasks instead</td></tr>
          <tr><td>Forgetting the portal email</td><td>Clients never find the portal</td><td>Pair portal activation with an email</td></tr>
          <tr><td>Cold, robotic wording</td><td>Premium clients feel processed</td><td>Write every template as if to one person</td></tr>
        </tbody>
      </table>
      <p>
        Dubsado&apos;s own <Src href={SRC.setupChecklist}>setup checklist</Src> recommends testing as
        both owner and client, in a private browser window, with a manual payment. It is the least
        glamorous advice in the documentation and the most valuable.
      </p>

      <h2 id="starter-plan">A starter plan</h2>
      <p>You do not need all of this at once. This order puts value first and risk last.</p>
      <ol>
        <li><strong>Write down your client journey</strong>, from first message to handover. One page is enough.</li>
        <li><strong>Decide the stages</strong> you will track in your pipeline and name them in your own words.</li>
        <li><strong>Build the templates</strong> you reuse most: acknowledgement, proposal, contract, questionnaire.</li>
        <li><strong>Connect payments</strong> and confirm your processor works for your country and your clients.</li>
        <li><strong>Build the enquiry workflow</strong> and nothing else. Test it as described above.</li>
        <li><strong>Run it on real enquiries</strong> for a few weeks and note what you edit by hand. Those edits are your next improvements.</li>
        <li><strong>Add proposal and onboarding</strong>, then presentation and feedback.</li>
        <li><strong>Leave wrap-up and referrals until last.</strong> Once the rest is stable, they are easy.</li>
      </ol>
      <p>
        One practical point: Dubsado&apos;s <Src href={SRC.pricing}>pricing page</Src> lists automated
        workflows and scheduling on its Premier plan, not on Starter. Its free trial gives full access to
        Premier, so you can build and test before paying. Confirm the current plans and prices on the
        Dubsado site before you commit. Dubsado&apos;s newer version is described in{' '}
        <Src href={SRC.threePointO}>its announcement of Dubsado 3.0</Src>, and its status is worth
        checking if you are starting fresh.
      </p>

      <h2 id="getting-help">Getting help with setup</h2>
      <p>
        Most designers can build the enquiry workflow themselves. The harder part is the design of the
        whole system, which stages exist, what triggers what, where the manual approvals sit, and how
        the templates sound. That is where outside help earns its place, and it is worth knowing what
        you are buying. A{' '}
        <a href="/blog/dubsado-setup-services">what a Dubsado consultant actually does</a> overview
        sets out the work, and the choice between tools is covered in{' '}
        <a href="/blog/dubsado-vs-honeybook">Dubsado vs HoneyBook</a> if you are not yet committed.
      </p>
      <p>
        Dubsado maintains a directory of{' '}
        <Src href={SRC.certifiedSpecialists}>Certified Dubsado Specialists</Src>. These are independent
        businesses that set their own prices, so compare more than one. If you want to see what a
        structured build looks like, <a href="/platforms/dubsado">Dubsado implementation</a>{' '}
        describes how Sage Kite approaches it. Whoever you choose, ask them to start by writing out your
        process, not by opening the software.
      </p>

      <h2 id="quick-answers">Quick answers</h2>
      <h3>Is Dubsado good for interior designers?</h3>
      <p>
        For the client-facing journey, yes, particularly enquiry, proposal, contract, payment and
        onboarding. For procurement and specification, a design-specific platform is usually a better
        fit.
      </p>
      <h3>Can Dubsado handle purchase orders?</h3>
      <p>
        Not as a core function. Studios that need purchase orders generally use a design-specific
        platform alongside or instead of it.
      </p>
      <h3>Can I automate everything?</h3>
      <p>
        You can, but you should not. Keep a person at every decision that is expensive or hard to
        retract.
      </p>
      <h3>Is it worth it for a solo designer?</h3>
      <p>
        Often, because the repeatable half of the business is the same size whether there is one person
        or five. The value depends on how many projects you run, so start small and judge by your own
        results.
      </p>

      <h2 id="where-this-leaves-you">Where this leaves you</h2>
      <p>
        The strongest interior design businesses are not the most automated. They are the ones where the
        repeatable work happens without effort and the human work gets more time. Dubsado can do a great
        deal for the first of those. It cannot be the second, and the best use of it is to protect your
        attention for the work only you can do.
      </p>

      <h2 id="sources">Sources and reading</h2>
      <p>
        Dubsado capabilities were checked against Dubsado&apos;s own pages in October 2026. Several of
        Dubsado&apos;s help articles are still written for version 2.0; they are marked below, and
        behaviour may differ in 3.0.
      </p>
      <ul>
        <li><Src href={SRC.flowActions}>Dubsado: flow actions (3.0)</Src></li>
        <li><Src href={SRC.pricing}>Dubsado: pricing and plans</Src></li>
        <li><Src href={SRC.threePointO}>Dubsado: introducing Dubsado 3.0</Src></li>
        <li><Src href={SRC.setupChecklist}>Dubsado: the setup checklist</Src></li>
        <li><Src href={SRC.writingProcess}>Dubsado: writing out your process (2.0)</Src></li>
        <li><Src href={SRC.proposalContractInvoice}>Dubsado: connect a contract and invoice to a proposal (2.0)</Src></li>
        <li><Src href={SRC.publicScheduler}>Dubsado: start a workflow from a public scheduler (2.0)</Src></li>
        <li><Src href={SRC.schedulerBuffers}>Dubsado: scheduler intervals and buffers (2.0)</Src></li>
        <li><Src href={SRC.paymentProcessors}>Dubsado: connect a payment processor (2.0)</Src></li>
        <li><Src href={SRC.paymentPlans}>Dubsado: payment plans (2.0)</Src></li>
        <li><Src href={SRC.bulkImport}>Dubsado: bulk import a client list (2.0)</Src></li>
        <li><Src href={SRC.certifiedSpecialists}>Dubsado: Certified Dubsado Specialists</Src></li>
        <li><Src href={SRC.interiorDesigners}>Dubsado: Dubsado for interior designers</Src></li>
      </ul>
    </>
  );
}
