/**
 * Article body for /blog/can-bloomerang-track-recurring-donations. Kept in its
 * own file because it is long; post.tsx points `content` at it.
 */
import { FieldDiagram } from '@/components/blog/FieldDiagram';

export default function CanBloomerangTrackRecurringDonationsArticle() {
  return (
    <>
      <p>
        If you run a monthly giving program, knowing how much money is coming in
        is only part of the job. You also need to see each donor&apos;s schedule,
        what has been paid, what is due next, and which payments have failed.
        Bloomerang, the donor management and fundraising platform for nonprofits,
        can do most of this. How much depends on which Bloomerang product you use
        and how your payments are processed.
      </p>
      <p>
        This guide explains how recurring gifts are recorded, where to find them,
        how failures show up, and how to report on and forecast recurring
        revenue. It covers Bloomerang CRM and notes where Bloomerang Fundraising
        (the former Qgiv) works differently.
      </p>

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Yes. Bloomerang tracks a recurring gift as a{' '}
        <strong>recurring donation schedule</strong> (the list of installments)
        and links each individual payment to it. Staff can view both on the
        donor&apos;s timeline, record or process payments, change or end the
        schedule, and report on recurring gifts. Projected revenue reports show
        scheduled installments, and failed payments can be identified and
        followed up. The details differ between Bloomerang CRM and Bloomerang
        Fundraising, and between card and EFT payments, so check which applies to
        you.
      </p>

      <h2 id="how-does-bloomerang-track-recurring-donations">
        How does Bloomerang track recurring donations?
      </h2>
      <p>
        When you create a recurring donation in Bloomerang, a{' '}
        <strong>recurring donation schedule</strong> is created with it. The
        schedule is the list of installments. On the constituent&apos;s timeline,
        the schedule appears with a gift box icon and is labelled{' '}
        <em>Recurring Donation Schedule</em>. Each payment made toward it is
        labelled <em>Recurring Donation Payment</em>, and timeline entries show
        the date, the installment amount and the fund.
      </p>
      <p>
        Recurring gifts can start in two ways: a donor gives through your online
        giving form, or staff create the recurring donation in Bloomerang CRM.
        Payments process automatically when the method is a card, EFT account or
        digital wallet. If a donor pays by cash or check, staff must enter each
        payment manually.
      </p>
      <p>
        <strong>Example: a $50 monthly donor.</strong> A donor agrees to give $50
        on the 5th of each month. You record one schedule, and each month a
        payment is linked to it. The table below is an illustration of the
        relationship, not a screenshot of Bloomerang&apos;s fields.
      </p>

      <table>
        <thead>
          <tr>
            <th>Record</th>
            <th>Frequency</th>
            <th>Amount</th>
            <th>What it represents</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recurring donation schedule</td>
            <td>Monthly</td>
            <td>$50</td>
            <td>The overall arrangement</td>
            <td>One per recurring gift</td>
          </tr>
          <tr>
            <td>Recurring donation payment</td>
            <td></td>
            <td>$50</td>
            <td>January installment</td>
            <td>Linked to the schedule</td>
          </tr>
          <tr>
            <td>Recurring donation payment</td>
            <td></td>
            <td>$50</td>
            <td>February installment</td>
            <td>Linked to the schedule</td>
          </tr>
          <tr>
            <td>Next scheduled payment</td>
            <td></td>
            <td>$50</td>
            <td>March installment</td>
            <td>Due, not yet paid</td>
          </tr>
        </tbody>
      </table>

      <FieldDiagram
        id="schedule-vs-payment-diagram"
        label="The recurring record"
        title="A schedule is the arrangement; each payment is one installment of it."
        takeaway="The schedule is the plan. Payments are what count as revenue."
      >
        <div className="fd-layer fd-dark">
          <span className="fd-k">The arrangement</span>
          <b>Recurring donation schedule</b>
          <small>How often · how much · which method · when it ends</small>
        </div>
        <div className="fd-link-label">EACH INSTALLMENT IS LINKED TO IT</div>
        <div className="fd-cols fd-n4">
          <div className="fd-step">
            <span className="fd-k">Payment</span>
            <b>January</b>
            <small>$50 · linked to the schedule</small>
          </div>
          <div className="fd-step">
            <span className="fd-k">Payment</span>
            <b>February</b>
            <small>$50 · linked to the schedule</small>
          </div>
          <div className="fd-step">
            <span className="fd-k">Next scheduled</span>
            <b>March</b>
            <small>Due, not yet paid</small>
          </div>
        </div>
      </FieldDiagram>

      <h3 id="schedule-vs-payment">
        What is the difference between a recurring donation schedule and a
        recurring donation payment?
      </h3>
      <p>
        The schedule is the arrangement: how often the donor gives, how much,
        from which payment method, and when it ends, if it does. A payment is one
        installment of that arrangement. Changes you make to a schedule apply to
        future payments, while payments already made stay as they were.
      </p>
      <p>
        The distinction matters for reporting. In Bloomerang&apos;s own training,
        a recurring donation schedule is just the list of dates when the donation
        is to occur, and counts as neither raised nor revenue. Payments are what
        count as revenue. If you treat the schedule as money, you will overstate
        income.
      </p>

      <h3 id="recurring-vs-pledge">
        How recurring donations differ from pledges
      </h3>
      <p>
        Bloomerang defines a recurring donation as giving indefinitely on a
        regular schedule, while a pledge is a promise to give a fixed amount over
        a set time. They are separate records, with separate reports and
        handling, so do not use one to stand in for the other. Pledges also carry
        a status and installment tracking of their own.
      </p>

      <h2 id="how-to-view-recurring-donations">
        How to view recurring donation schedules and payment history in
        Bloomerang CRM
      </h2>
      <p>
        These steps follow Bloomerang CRM&apos;s documentation. Labels may differ
        slightly between interface versions, and some help pages are marked
        &lsquo;Legacy&rsquo;.
      </p>
      <ol>
        <li>Open the constituent&apos;s account and go to their timeline.</li>
        <li>
          Find a Recurring Donation Payment or the original Recurring Donation
          Schedule. Click the schedule, or click a payment and then Recurring
          Donation Schedule.
        </li>
        <li>
          Review the schedule&apos;s settings (frequency, amount, method) and the
          payments linked to it.
        </li>
        <li>Note the next scheduled payment and any end date.</li>
      </ol>
      <p>
        <strong>What you learn:</strong> whether the gift is active, how long the
        donor has been giving, which fund it supports, and whether any
        installments are missing. To add a payment by hand, use New Donation,
        select the recurring donation and choose Create Recurring Donation
        Payment. You can apply it to the next scheduled payment, or add it as an
        extra payment that leaves the schedule unchanged, as the help article
        describes.
      </p>
      <p>
        To edit the date or payment method of a card, EFT or digital wallet
        payment that Bloomerang processed, you first have to unlink it from the
        processor.
      </p>

      <h2 id="monthly-quarterly-annual">
        Can Bloomerang track monthly, quarterly and annual donations?
      </h2>
      <p>
        Monthly, yes. When you create a recurring donation in CRM, the Schedule
        section lets you choose how often it processes. The documented options
        include Weekly (every 7 days), Every other week (every 14 days), Twice
        per month, and Monthly; payments on the 29th to 31st run on the last day
        of shorter months. I could not verify the full CRM list, including
        quarterly, so check the dropdown in your account. Yearly recurring
        schedules exist, because Bloomerang documents converting them to
        membership schedules.
      </p>
      <p>
        On online forms (Bloomerang Fundraising), you choose between Sustaining
        Gifts and Giving Plans and decide which frequency options donors see. The
        documented list for Sustaining Gifts includes Weekly, Every Other Week,
        Monthly and Quarterly, with further options. Available frequencies depend
        on the form and product, so do not assume the same list everywhere.
      </p>

      <h2 id="failed-or-missed-recurring-donations">
        How to track failed or missed recurring donations in Bloomerang
      </h2>
      <p>
        Payments fail for ordinary reasons: expired cards, insufficient funds,
        wrong account details, closed accounts or bank restrictions. What matters
        is that card failures and EFT failures behave differently in Bloomerang
        CRM.
      </p>

      <h3 id="card-and-wallet-failures">
        Credit card and digital wallet failures
      </h3>
      <p>
        When an auto-processed card payment fails for a recurring donation,
        pledge or membership, a bell notification appears. Bloomerang CRM retries
        every other day until the payment succeeds or seven days pass, and
        removes failed transactions after 90 days. A schedule&apos;s last payment
        shows as <em>At Risk</em> while retries continue, or <em>Failed</em> when
        Bloomerang is no longer retrying. The Payment Failures dashboard lists
        unresolved failures and shows a Fiscal Year Revenue At Risk total.
      </p>
      <p>
        If the card is the problem, get new details from the donor, update the
        payment method on the schedule and use the Reprocess Failed Payment
        option. Updating the card resolves the current failure but not earlier
        ones.
      </p>

      <h3 id="eft-failures">EFT failures</h3>
      <p>
        EFT failures are slower and quieter. It takes 2 to 6 business days before
        an EFT failure appears in Bloomerang CRM, so Bloomerang suggests a daily
        or weekly report. In Reports, filter on{' '}
        <em>EFT Processing Status = Failed</em>, add a Date filter, and schedule
        the report. You can then reprocess the payment once the underlying issue
        is fixed. The EFT help article does not describe an automatic retry like
        the one for cards, so do not assume one. Bloomerang&apos;s payout
        documentation also notes that EFT payments take at least four business
        days and show as Pending, Successful or Failed.
      </p>

      <FieldDiagram
        id="card-vs-eft-failures"
        label="Two kinds of failure"
        title="Card failures are noisy and retried; EFT failures are quiet and need a report."
        takeaway="If you only watch notifications, you will miss failed EFT gifts."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Card &amp; digital wallet</span>
            <b>Noisy and automatic</b>
            <div className="fd-chips fd-n2">
              <i>Bell notification</i>
              <i>Retry every other day</i>
              <i>Stops after 7 days</i>
              <i>Payment Failures dashboard</i>
            </div>
            <small>Last payment shows At Risk, then Failed. Remove failed transactions after 90 days.</small>
          </div>
          <div className="fd-versus">VS</div>
          <div className="fd-box">
            <span className="fd-k">EFT</span>
            <b>Quiet and manual</b>
            <div className="fd-chips fd-n2">
              <i>No notification</i>
              <i>2–6 business days to appear</i>
              <i>No documented auto-retry</i>
              <i>Filtered report</i>
            </div>
            <small>Schedule a daily or weekly report filtered to EFT Processing Status = Failed.</small>
          </div>
        </div>
      </FieldDiagram>

      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>What to check</th>
            <th>Recommended action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Card failure, retries running</td>
            <td>Schedule&apos;s last payment status (At Risk) and the retry date</td>
            <td>Wait for retries; contact the donor if it is an expired card</td>
          </tr>
          <tr>
            <td>Card failure, retries ended</td>
            <td>Status Failed; reason in the schedule&apos;s failure list</td>
            <td>Get a new card, update the schedule and reprocess</td>
          </tr>
          <tr>
            <td>EFT failure</td>
            <td>Report with EFT Processing Status = Failed</td>
            <td>
              Check account and routing details, contact the donor, fix, then
              reprocess
            </td>
          </tr>
          <tr>
            <td>Payment recorded outside Bloomerang</td>
            <td>Your payment processor&apos;s records</td>
            <td>Reconcile manually; Bloomerang can only show what it has</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Example: a failed EFT payment.</strong> A donor&apos;s $25 EFT
        payment is due on the 10th. Nothing alarming appears in Bloomerang. On
        the 15th, your weekly report filtered to failed EFT payments lists it.
        You check the account and routing details, call the donor and find a
        closed account. You update the schedule with a new account and reprocess,
        and make a note on the timeline. Without the scheduled report, nobody
        would have noticed until the next gift was also late.
      </p>

      <h2 id="pause-change-end">
        Can you pause, change or end a recurring donation in Bloomerang?
      </h2>
      <p>
        In Bloomerang CRM, you set an end date on the schedule. Bloomerang says
        this works as an end or a pause: open a payment, click Recurring Donation
        Schedule, enter an end date in the Schedule section and save. For card or
        EFT gifts that auto-process, it stops further payments. To restart,
        remove the end date and save, and the schedule resumes on its original
        frequency. There is no separate &lsquo;Pause&rsquo; button described in
        the CRM documentation.
      </p>
      <p>
        In Bloomerang Fundraising, recurring gifts are managed separately. Under
        Reporting &gt; Recurring Payments you can pause, resume or cancel
        payments, individually or in bulk. If you use Bloomerang Payments as the
        processor, you cannot edit the billing information, frequency or amount
        there. A recurring donation processed through Fundraising has to be
        cancelled in Fundraising, not CRM.
      </p>
      <p>
        To change a payment method, open the schedule and select a different
        method. Changes apply to future payments, and previous payments stay on
        the timeline. In Fundraising, a donor&apos;s card or bank details are
        edited from the organization-level control panel. Changing the amount or
        frequency of a CRM schedule is done by editing the schedule; check your
        version&apos;s steps first.
      </p>
      <p>
        <strong>One trap:</strong> if you convert a donation to a recurring
        payment, the schedule&apos;s payment information does not update, so the
        next auto-processed payment may still fail.
      </p>

      <h2 id="recurring-donation-reports">
        How to generate recurring donation reports in Bloomerang
      </h2>
      <p>
        In Bloomerang CRM, recurring data is reported through transaction
        reports. The projected revenue guide describes building a transaction
        report to list pledges and recurring donation schedules with projected
        revenue. A Projected Cash Flow template exists as a starting point;
        modify the date range, filters and columns.
      </p>
      <p>
        A practical approach for &lsquo;which schedules should generate revenue
        next quarter?&rsquo;: start from the template or a new transaction report,
        set the date range to the next quarter, add the filters and columns you
        need (fund, campaign, appeal and donor details are available), and save
        or schedule the report. I have not listed specific filter names beyond
        those in Bloomerang&apos;s documentation. Look at the options offered in
        your account.
      </p>
      <p>
        In Bloomerang Fundraising, the Reporting area has a Recurring Payments
        report and a recurring forecast report showing the expected value of
        recurring gifts. Each recurring donation also has a history showing
        payments and a Change History of edits and status changes.
      </p>

      <h2 id="forecast-recurring-revenue">
        How to forecast recurring donation revenue in Bloomerang
      </h2>
      <p>
        Projected revenue is built from scheduled installments inside a date
        range you choose. Bloomerang requires an end date when filtering for
        projected revenue, in the future or the past.
      </p>
      <p>
        Projected revenue stays the same even if payments on a recurring schedule
        are missed. It does not subtract failures. It also excludes unfulfilled
        installments of pledges that have been written off.
      </p>
      <p>
        <strong>Example.</strong> A food pantry has 40 monthly donors at $25
        each. For a quarter, the projection is 40 x $25 x 3 = $3,000. During the
        quarter, three EFT donors have a closed account and miss two payments
        each, so $150 is not collected. The projection still says $3,000, while
        collected revenue is $2,850. These numbers are hypothetical. The point is
        that the projection is a plan and collected revenue is the result.
      </p>

      <FieldDiagram
        id="projected-vs-collected"
        label="Projection vs reality"
        title="Projected revenue is a plan; collected revenue is what arrived."
        takeaway="Read both. Reconcile against your processor's payouts."
      >
        <div className="fd-compare">
          <div className="fd-box">
            <span className="fd-k">Projected</span>
            <b>$3,000</b>
            <div className="fd-chips fd-n2">
              <i>40 donors × $25</i>
              <i>× 3 months</i>
            </div>
            <small>Built from scheduled installments. Does not subtract failures.</small>
          </div>
          <div className="fd-versus">VS</div>
          <div className="fd-box">
            <span className="fd-k">Collected</span>
            <b>$2,850</b>
            <div className="fd-chips fd-n2">
              <i>3 EFT donors missed</i>
              <i>$150 not collected</i>
            </div>
            <small>Actual recurring payments received. Reconcile against processor payouts.</small>
          </div>
        </div>
      </FieldDiagram>

      <p>
        Finance teams should therefore read both: projected revenue for planning,
        and actual recurring payments (and the Payment Failures figures for
        cards) for what really arrived. Reconcile them against your
        processor&apos;s payouts.
      </p>

      <h2 id="improve-retention">
        How to use recurring donation data to improve retention
      </h2>
      <p>
        Bloomerang gives you the records and reports. The stewardship is up to
        your team. Things you can do with what the platform provides:
      </p>
      <ul>
        <li>
          Follow up quickly on failures using the Payment Failures dashboard and
          a scheduled EFT failure report.
        </li>
        <li>
          Set up an automation that acknowledges the first payment of a new
          recurring gift.
        </li>
        <li>
          Check your report templates. Bloomerang has described templates such as
          Monthly Donors and Downgrades, which may help segment sustainers.
          Confirm they exist in your version.
        </li>
        <li>
          Review ended or at-risk schedules regularly and decide who contacts
          each donor.
        </li>
        <li>
          Schedule recurring reports so the review happens without anyone having
          to remember.
        </li>
      </ul>
      <p>
        None of this runs by itself. Bloomerang will not decide whom to call or
        what to say.
      </p>

      <h2 id="common-mistakes">Common recurring donation tracking mistakes</h2>

      <table>
        <thead>
          <tr>
            <th>Mistake</th>
            <th>Why it happens</th>
            <th>How to prevent it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Treating projected revenue as cash</td>
            <td>The projection ignores missed payments</td>
            <td>Compare against actual payments and processor payouts</td>
          </tr>
          <tr>
            <td>Mixing up pledges and recurring gifts</td>
            <td>Both involve installments</td>
            <td>
              Use pledges for fixed commitments; recurring donations for ongoing
              gifts
            </td>
          </tr>
          <tr>
            <td>Unlinked payments</td>
            <td>A payment is entered as a one-off donation</td>
            <td>Create payments from the schedule, or convert the donation properly</td>
          </tr>
          <tr>
            <td>Ignoring EFT failures</td>
            <td>No in-app notification like cards have</td>
            <td>Schedule a daily or weekly failed EFT report</td>
          </tr>
          <tr>
            <td>Changing the wrong system</td>
            <td>CRM and Fundraising manage recurring gifts differently</td>
            <td>Confirm where the gift is processed before editing or cancelling</td>
          </tr>
          <tr>
            <td>Stale payment methods</td>
            <td>Cards expire; donors move banks</td>
            <td>Review failures and update methods on the schedule</td>
          </tr>
          <tr>
            <td>No reconciliation</td>
            <td>Processor and CRM can differ</td>
            <td>Reconcile monthly against processor records</td>
          </tr>
        </tbody>
      </table>

      <h2 id="is-bloomerang-enough">
        Is Bloomerang enough for recurring donation tracking?
      </h2>
      <p>
        For most nonprofits it covers the essentials: schedule visibility,
        payment history, failure monitoring, recurring reports and projections.
        What your team still has to decide and manage:
      </p>
      <ul>
        <li>
          <strong>Processor setup.</strong> Automatic processing depends on how
          payments are processed. Bloomerang can migrate recurring donations from
          some processors to Bloomerang Payments, and processors differ.
        </li>
        <li>
          <strong>Product differences.</strong> CRM and Fundraising handle
          pausing, cancelling and reporting differently.
        </li>
        <li>
          <strong>Reconciliation.</strong> Projections, CRM records and processor
          payouts can all differ.
        </li>
        <li>
          <strong>Process.</strong> Someone must own failed-payment follow-up and
          review the reports.
        </li>
        <li>
          <strong>Integrations.</strong> If recurring gifts arrive from another
          tool, check how its schedules appear in Bloomerang. For example,
          Fundraise Up documents that its recurring plan syncs as a Recurring
          Schedule plus Recurring Payment records.
        </li>
      </ul>

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <h3 id="faq-track-monthly-donations">
        Can Bloomerang track monthly donations?
      </h3>
      <p>
        Yes. Monthly is a documented frequency for recurring donations in CRM,
        and a standard option on online forms.
      </p>

      <h3 id="faq-show-upcoming-payments">
        Can Bloomerang show upcoming recurring payments?
      </h3>
      <p>
        The schedule on the donor&apos;s timeline shows the next scheduled
        payment, and projected revenue reports list future installments for a
        date range.
      </p>

      <h3 id="faq-view-history">How do I view recurring donation history?</h3>
      <p>
        Open the constituent&apos;s timeline, click the Recurring Donation
        Schedule (or a payment, then Recurring Donation Schedule) and review the
        linked payments. In Fundraising, use Reporting &gt; Recurring Payments.
      </p>

      <h3 id="faq-identify-failed-payments">
        Can Bloomerang identify failed recurring payments?
      </h3>
      <p>
        Yes. Card failures raise a bell notification and appear on the Payment
        Failures dashboard. EFT failures need a report filtered by EFT Processing
        Status = Failed.
      </p>

      <h3 id="faq-pause-recurring-donation">
        Can I pause a recurring donation in Bloomerang?
      </h3>
      <p>
        In CRM, set an end date and remove it to resume. In Fundraising, use
        Pause and Resume under Reporting &gt; Recurring Payments.
      </p>

      <h3 id="faq-report-revenue">Can Bloomerang report on recurring donation revenue?</h3>
      <p>
        Yes. CRM uses transaction reports with projected revenue; Fundraising has
        a Recurring Payments report and a recurring forecast report.
      </p>

      <h3 id="faq-recurring-vs-pledge">
        What is the difference between a recurring donation and a pledge?
      </h3>
      <p>
        A recurring donation is an ongoing gift on a schedule; a pledge is a
        promise to give a fixed amount over a set time. They are separate
        records.
      </p>

      <h3 id="faq-automatic-processing">
        Does Bloomerang automatically process recurring donations?
      </h3>
      <p>
        For cards, EFT accounts and digital wallets processed in Bloomerang, yes.
        Cash and check payments must be entered manually, and payments handled by
        other processors depend on that setup.
      </p>

      <h3 id="faq-update-payment-method">
        Can I update a donor&apos;s payment method?
      </h3>
      <p>
        Yes. In CRM, edit the schedule&apos;s method; changes apply to future
        payments. In Fundraising, use the organization-level control panel.
      </p>

      <h2 id="what-is-the-bottom-line">The bottom line</h2>
      <p>
        Bloomerang can track recurring donation schedules, individual payments,
        payment history and projected revenue. Good tracking still needs people
        to check failures, compare projections with real payments, keep payment
        methods current and talk to donors.
      </p>
      <p>
        If your recurring giving data is scattered or your reports do not answer
        your questions, Sage Kite can help with{' '}
        <a href="https://www.sagekite.com/platforms/bloomerang">
          Bloomerang setup, CRM organisation and reporting
        </a>
        . For the wider picture of how Bloomerang supports a nonprofit&apos;s
        daily work, see our{' '}
        <a href="https://www.sagekite.com/blog/how-can-bloomerang-nonprofit-crm-help-nonprofits-manage-daily-operations">
          overview of Bloomerang for nonprofits
        </a>
        .
      </p>
      <p>
        <em>
          Sage Kite is an independent consultancy and is not an official
          Bloomerang partner.
        </em>
      </p>
    </>
  );
}