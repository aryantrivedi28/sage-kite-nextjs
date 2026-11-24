/**
 * Article body for /blog/bloomerang-setup-guide-small-nonprofits. Kept in its
 * own file because it is long; post.tsx points `content` at it.
 */
export default function BloomerangSetupGuideSmallNonprofitsArticle() {
  return (
    <>
      <p>
        You have chosen Bloomerang. Maybe the agreement is signed and an
        onboarding specialist has introduced themselves. The next stretch decides
        whether the database helps you or quietly works against you: setting it up
        around how your nonprofit actually raises, records and reports money.
      </p>
      <p>
        Bloomerang setup is more than entering donor names. It means deciding how
        records are structured, how every gift is coded, who thanks donors and
        how, which messages are automated and what your board needs to see. Make
        those decisions once, on purpose, and the database stays consistent as
        staff and volunteers change. Skip them, and you usually find out months
        later, when two reports disagree.
      </p>
      <p>
        This guide walks a small nonprofit through the whole Bloomerang setup
        sequence: what to prepare, nine setup steps, a checklist, common mistakes
        and when outside help is worth it. It focuses on decisions rather than
        clicks. Where a topic deserves its own guide, such as data migration or
        household cleanup, we say so and stay at the setup level.
      </p>
      <p>
        <strong>The short answer.</strong> To set up Bloomerang for a small
        nonprofit, first write down how money reaches you and what leadership
        needs to see. Then configure, in this order: your Bloomerang products,
        donor records, funds, campaigns and appeals, gift-entry rules, thank-you
        and receipt processes, automation, reports and user roles. Finish by
        testing with a sample donor and gift before real data goes in.
      </p>

      <h2 id="what-to-prepare">
        What should you prepare before setting up Bloomerang?
      </h2>
      <p>
        Most setup problems start before anyone logs in. An hour of preparation
        saves rework later, and none of it needs a technical background.
      </p>

      <h3 id="map-how-money-reaches-you">Map how money actually reaches you</h3>
      <p>
        List every route: checks in the mail, online forms, events, payroll
        giving, donor-advised funds, other payment platforms. Each route is a
        place where a gift can be missed or entered differently. Bloomerang&apos;s
        own advice for a first donor CRM includes a recurring monthly reminder to
        check every platform you receive money from and add those gifts
        (Bloomerang, 7 tips for setting up your first donor CRM).
      </p>

      <h3 id="decide-what-you-need-to-track">
        Decide what you need to track
      </h3>
      <p>
        Write down the questions you will want the database to answer: who gave
        last year, who has lapsed, which appeal worked. Then track only what
        supports those questions. Every extra field is something staff must fill
        in the same way, every time.
      </p>

      <h3 id="look-honestly-at-your-current-records">
        Look honestly at your current records
      </h3>
      <p>
        If you are bringing data from a spreadsheet or another system, check it
        for duplicates, inconsistent names and missing addresses now.
        Bloomerang&apos;s team handles conversion where it is included in your
        plan, so your job is to prepare data and review it afterwards. A separate
        guide covers that process.
      </p>

      <h3 id="sketch-your-fundraising-structure">
        Sketch your fundraising structure on paper
      </h3>
      <p>
        Which gifts are restricted to a purpose? What are your main fundraising
        efforts this year? Which individual mailings or emails do you want to
        compare? Those three questions become funds, campaigns and appeals in Step
        3.
      </p>

      <h3 id="name-the-people-and-decide-what-leadership-needs">
        Name the people and decide what leadership needs
      </h3>
      <p>
        Decide who will enter gifts, who will thank donors, who will run reports
        and who is the main administrator. Ask your executive director or board
        what numbers they actually look at, for example total raised against goal
        and donor retention. Reports are built from how gifts are coded, so
        reporting needs should shape setup, not follow it.
      </p>

      <h2 id="how-to-set-up-bloomerang-nine-steps">
        How to set up Bloomerang for a small nonprofit: nine steps
      </h2>
      <p>
        Work through these in order. Each step says what to configure, why it
        matters, what to decide and what to avoid. Exact screens change, so the
        official help articles are linked where they matter.
      </p>

      <h3 id="step-1-products-and-plan">
        Step 1: Confirm which Bloomerang products and plan you have
      </h3>
      <p>
        Bloomerang&apos;s Giving Platform includes Bloomerang CRM for donor
        management, Bloomerang Fundraising (formerly Qgiv) for donation forms,
        events and peer-to-peer, and Bloomerang Volunteer. What you can do depends
        on which you bought and your plan. For example, your license sets how many
        Journey Automations can run at once, and Bloomerang says organizations new
        to the platform that have CRM with Fundraising or Volunteer are connected
        automatically during onboarding (Bloomerang changelog). Ask your
        onboarding specialist what your package includes. Do not assume a feature
        seen in a demo is in your plan.
      </p>
      <p>
        <strong>Avoid:</strong> planning around a tool you do not have, or paying
        for a second tool for something you already own.
      </p>

      <h3 id="step-2-constituent-and-donor-records">
        Step 2: Organize constituent and donor records
      </h3>
      <p>
        Bloomerang calls everyone in the database a constituent: donors,
        volunteers, prospects, organizations. Individuals can be grouped into
        households. Per Bloomerang, a household counts as one record toward your
        license, and one member is the head of household whose contact details are
        used when you communicate with the household (about relationships and
        households).
      </p>
      <p>
        Couples need a deliberate rule. Bloomerang sends email only to the primary
        email address on each record, so spouses who want separate emails need
        separate records (enter spouse data). Either choice is valid. Mixed
        choices with no rule are what cause trouble.
      </p>
      <p>
        Custom fields store anything the defaults do not. They can live on the
        constituent, transaction, interaction or note (custom field basics). Add
        one only when you know the report or segment it will serve, and agree on
        how it is filled in.
      </p>
      <p>
        <strong>Avoid:</strong> inconsistent name and address formats, and
        creating households sometimes and not others. Household structure and
        cleanup get their own guide.
      </p>

      <h3 id="step-3-funds-campaigns-appeals">
        Step 3: Establish your funds, campaigns and appeals
      </h3>
      <p>
        In Bloomerang these are three fields on a transaction that explain why
        money was given and what it is reserved for (fund, campaign and appeal
        basics). In plain terms: a fund is what the money is for, such as
        unrestricted, programs or scholarships. A campaign is a larger effort,
        such as an annual campaign or capital campaign. An appeal is a specific
        solicitation, such as a spring mailing or a Giving Tuesday email.
        Bloomerang Academy training describes the fund as the only one of the
        three that is required (session slides).
      </p>
      <p>
        Because they are tied to transactions, funds, campaigns and appeals cannot
        be deleted once used, only deactivated, and each name must be unique
        (create and manage). Choose names you can live with.
      </p>
      <p>
        <strong>Illustrative example (hypothetical).</strong> A small food bank
        might use funds named Unrestricted, Food Programs and Building; a campaign
        for each fiscal year&apos;s annual fund; and appeals for each mailing or
        email. Its board report then answers &ldquo;how much came from the spring
        mailer, and was it restricted?&rdquo; without a spreadsheet.
      </p>
      <p>
        <strong>Decide:</strong> keep the list short and match your finance
        team&apos;s categories. <strong>Avoid:</strong> a new fund for every idea,
        and different spellings of the same thing. Detailed coding examples belong
        in the dedicated gift-coding guide.
      </p>

      <h3 id="step-4-gift-entry-rules">Step 4: Write your gift-entry rules</h3>
      <p>
        Gift entry is where consistency is won or lost. Write one page covering
        who enters gifts, how soon, and how each type is recorded: checks, online
        gifts from other platforms, recurring gifts, in-kind gifts and soft
        credits. Include how to check whether a donor already exists before adding
        someone new.
      </p>
      <p>
        <strong>Illustrative example (hypothetical).</strong> Three people enter
        the same type of gift. One uses the campaign field, one leaves it blank,
        one puts the appeal name in a note. The year-end report shows a third of
        the money as uncoded. A one-page rule written before launch prevents this.
      </p>

      <h3 id="step-5-acknowledgements-and-receipts">
        Step 5: Set up acknowledgement and receipt processes
      </h3>
      <p>
        Decide who thanks donors, how quickly, and by what route (email, letter,
        phone). A receipt and an acknowledgement are not the same thing.
        Bloomerang&apos;s automation guidance asks you to choose the correct
        purpose type for each email and to plan how automated thank-yous will
        replace any scheduled acknowledgement emails you already send (plan your
        automations).
      </p>
      <p>
        For year-end, Bloomerang can email giving statements each January (email
        year-end giving statements), and letters suit donors without a valid email
        (mail year-end tax receipt letters). Confirm the wording of tax receipts
        with your finance lead or accountant. Setup is the time to agree it.
      </p>
      <p>
        <strong>Avoid:</strong> nobody owning the thank-you process, and old and
        new acknowledgements running together so donors get two.
      </p>

      <h3 id="step-6-communication-and-automation">
        Step 6: Choose communication and automation priorities
      </h3>
      <p>
        Journey Automation, generally available since July 2025, sends timed,
        personalized messages based on a constituent&apos;s donor lifecycle stage,
        activity, group or milestone (about Journey Automation). Your license
        includes three running automations, with an option for unlimited (plan
        your automations). Bloomerang notes that three automations can cover email
        acknowledgements for a first-ever donation, the first payment of a new
        recurring gift, and later donations.
      </p>
      <p>
        For a small team, start there: acknowledge every gift promptly, then add a
        welcome for new donors. Plan lapsed-donor and cultivation journeys once
        the basics run cleanly. Automation repeats whatever process you give it,
        good or bad, so define the process first. Building journeys in detail is a
        separate topic.
      </p>

      <h3 id="step-7-reports-and-dashboards">
        Step 7: Plan your reports and dashboards
      </h3>
      <p>
        Start from the three to five numbers your leadership uses. The Home page
        shows fundraising progress, retention and to-dos (dashboard on the home
        page). The Donor Retention report by default counts people who gave 24 to
        12 months ago and gave again in the last 12 months, and administrators can
        change those settings (donor retention basics). Reports can be scheduled
        to arrive in an inbox daily, weekly or monthly, which suits board members
        who never log in (Bloomerang reporting).
      </p>
      <p>
        Two scores appear on constituent records. The engagement level comes from
        a proprietary formula credited to Dr. Adrian Sargeant (how it is
        calculated). The generosity score is based only on a DonorSearch rating,
        is free for CRM customers, and shows as Not Scanned until a constituent is
        screened (about the generosity score). They are aids to prioritizing, not
        substitutes for your own judgement, and each has its own guide.
      </p>
      <p>
        <strong>Avoid:</strong> building reports before deciding what to measure,
        or expecting accurate reports from inconsistent coding.
      </p>

      <h3 id="step-8-staff-roles-and-workflows">
        Step 8: Prepare staff, roles and daily workflows
      </h3>
      <p>
        Bloomerang CRM has two user types. Administrators have full access.
        Standard users have limited access that administrators can customize,
        which is useful for volunteers who only enter data (user permissions).
        There is no limit on the number of users, so each person should have their
        own login (manage users). Name one main administrator and one backup.
      </p>
      <p>
        Training is part of setup. Bloomerang says new customers get a dedicated
        onboarding specialist and training resources (getting started), and new
        organizations are invited to Bloomerang Learning during onboarding (about
        Bloomerang Learning). Turn your Step 4 gift-entry page into a short written
        guide for anyone who touches the database.
      </p>

      <h3 id="step-9-test-the-setup">
        Step 9: Test the complete setup before relying on it
      </h3>
      <p>
        Create a sample household and a few test donors. Enter one gift of each
        type you receive and follow it through to thank-you, receipt and the
        reports you planned. Check that funds, campaigns and appeals show up where
        you expect, and that nobody gets two acknowledgements.
      </p>
      <p>
        If you will import records, Bloomerang&apos;s import training recommends
        testing a small sample, up to five constituents, and spot-checking before
        running the full file (import basics). Imported values such as funds and
        custom field values must already exist in Bloomerang, because fields and
        values cannot be created through an import (import fields). Another reason
        to finish Steps 2 and 3 first.
      </p>

      <h2 id="bloomerang-setup-checklist">
        Bloomerang setup checklist for small nonprofits
      </h2>
      <p>Use this as a working list. Items that depend on your plan or on staff decisions are phrased as checks.</p>

      <h3 id="checklist-before-setup">Before setup</h3>
      <ul>
        <li>
          Written list of every way money reaches you, including outside
          platforms.
        </li>
        <li>The reports and numbers leadership and the board actually use.</li>
        <li>Names of the main administrator, a backup, and who enters gifts.</li>
      </ul>

      <h3 id="checklist-database-configuration">Database configuration</h3>
      <ul>
        <li>Confirmed which Bloomerang products and plan you have.</li>
        <li>A rule for spouses and households, written down.</li>
        <li>Custom fields limited to ones tied to a report or segment.</li>
      </ul>

      <h3 id="checklist-gift-entry-and-structure">
        Gift entry and fundraising structure
      </h3>
      <ul>
        <li>Short list of funds that matches your finance categories.</li>
        <li>Campaigns and appeals named consistently, with a naming convention.</li>
        <li>One-page gift-entry rules, including a check for existing donors.</li>
      </ul>

      <h3 id="checklist-donor-communication">Donor communication</h3>
      <ul>
        <li>Named owner and target timing for thank-yous.</li>
        <li>
          Receipts and acknowledgements distinguished, and old scheduled emails
          switched off where automation replaces them.
        </li>
        <li>Year-end statement approach agreed, including donors with no email.</li>
        <li>First automations chosen within your license limit.</li>
      </ul>

      <h3 id="checklist-reporting">Reporting</h3>
      <ul>
        <li>Three to five key reports or dashboard tiles built.</li>
        <li>Scheduled reports set for people who do not log in.</li>
        <li>Retention definition agreed and checked against the default.</li>
      </ul>

      <h3 id="checklist-staff-readiness">Staff readiness</h3>
      <ul>
        <li>User accounts created, with volunteers on limited permissions.</li>
        <li>Onboarding and Bloomerang Learning sessions booked.</li>
        <li>Written gift-entry guide shared.</li>
      </ul>

      <h3 id="checklist-testing-and-review">Testing and final review</h3>
      <ul>
        <li>
          Sample donor and gift followed through thank-you, receipt and reports.
        </li>
        <li>Test import done with a small sample, if importing.</li>
        <li>Test records removed using the method Bloomerang Support recommends.</li>
      </ul>

      <h2 id="common-mistakes">Common Bloomerang setup mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Inconsistent donor information.</strong> Different name formats
          and address styles are what make duplicates likely later.
        </li>
        <li>
          <strong>No agreed coding structure.</strong> Without it, the same gift
          is coded differently by different people and reports lose meaning.
        </li>
        <li>
          <strong>No household or spouse rule.</strong> Mixed approaches to
          couples cause split records and confusing mail.
        </li>
        <li>
          <strong>Reports built before measures are chosen.</strong> You get many
          reports and no answers.
        </li>
        <li>
          <strong>Automation before process.</strong> Journeys repeat your process
          at scale, including its gaps.
        </li>
        <li>
          <strong>Duplicate thank-yous.</strong> Automated acknowledgements
          switched on while scheduled emails still run.
        </li>
        <li>
          <strong>No owner for acknowledgements.</strong> Everyone assumes someone
          else sent it.
        </li>
        <li>
          <strong>Skipping training and testing.</strong> Capterra&apos;s reviewer
          summaries describe Bloomerang as quick to learn for basic tasks, but say
          administrators handling reports, imports or custom setup typically need
          more time and support (Capterra).
        </li>
      </ul>

      <h2 id="can-a-small-nonprofit-set-up-bloomerang-itself">
        Can a small nonprofit set up Bloomerang on its own?
      </h2>
      <p>
        Often, yes. Bloomerang provides onboarding, training and a help center,
        and many small teams get started that way. It tends to work when someone
        has a few hours a week to own the project, your fundraising is fairly
        straightforward, and you are starting fresh or with a small, clean file.
      </p>
      <p>
        It gets harder in a few places: designing a coding structure that matches
        your finance team&apos;s view, deciding what to automate, building reports
        that answer real questions, and cleaning imported data. Time is the usual
        limit. A one- or two-person team can find the settings but not the hours
        to think through them, then maintain the system afterwards. That is a
        reasonable point to ask for help, not a sign of failure.
      </p>

      <h2 id="when-to-hire-a-consultant">
        When should you hire a Bloomerang setup consultant?
      </h2>
      <p>Outside help is worth considering when:</p>
      <ul>
        <li>you have no dedicated CRM administrator and no spare capacity;</li>
        <li>your fundraising process needs to be mapped before it is configured;</li>
        <li>gift-entry and acknowledgement rules do not exist yet;</li>
        <li>you want automation and reporting configured, not just explained;</li>
        <li>staff need training and a written handover; or</li>
        <li>you want to avoid expensive fixes after launch.</li>
      </ul>
      <p>
        Options include Bloomerang&apos;s own services, such as quarterly
        strategic consulting and customized database consulting (Bloomerang
        consulting), and independent consultants. If a consultant sells you
        something your onboarding already includes, ask why.
      </p>
      <p>
        If you want a setup project run for you, you can{' '}
        <a href="https://www.sagekite.com/platforms/bloomerang">
          discuss Bloomerang setup with Sage Kite
        </a>
        .
      </p>

      <h2 id="how-sage-kite-helps">
        How Sage Kite helps small nonprofits set up Bloomerang
      </h2>
      <p>
        <em>
          Sage Kite is an independent consultancy. It is not an officially
          affiliated, endorsed or certified Bloomerang partner.
        </em>{' '}
        Its Bloomerang setup services follow the same sequence as this guide:
      </p>
      <ul>
        <li>understanding your fundraising process first;</li>
        <li>mapping the donor journey from first gift to renewal;</li>
        <li>structuring constituent records and households;</li>
        <li>establishing gift-entry and coding rules;</li>
        <li>configuring acknowledgements and receipts;</li>
        <li>setting up the relevant Journey Automations;</li>
        <li>building reporting and dashboards;</li>
        <li>connecting other tools where needed; and</li>
        <li>training your staff, with a written gift-entry guide.</li>
      </ul>
      <p>
        One distinction matters: Bloomerang&apos;s own team handles data
        conversion when it is included in your plan. Sage Kite supports
        preparation before conversion and checks the result afterwards. It does
        not replace Bloomerang&apos;s conversion team. Sage Kite works with new
        accounts, existing accounts that need cleanup, and organizations moving to
        Bloomerang.
      </p>
      <p>
        See{' '}
        <a href="https://www.sagekite.com/platforms/bloomerang">
          Sage Kite&apos;s Bloomerang setup services
        </a>
        .
      </p>

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <h3 id="faq-how-do-you-set-up-bloomerang">
        How do you set up Bloomerang for a small nonprofit?
      </h3>
      <p>
        Define how money reaches you and what leadership needs, then configure
        products, records, funds, campaigns and appeals, gift-entry rules,
        thank-yous, automation, reports and users, in that order. Test with a
        sample donor before going live.
      </p>

      <h3 id="faq-what-to-prepare">
        What should you prepare before setting up Bloomerang?
      </h3>
      <p>
        A list of every giving channel, the questions you want reports to answer,
        your fund structure on paper, named roles, and a review of any existing
        data for duplicates and gaps.
      </p>

      <h3 id="faq-does-bloomerang-include-onboarding">
        Does Bloomerang include onboarding?
      </h3>
      <p>
        Bloomerang says every organization starting with it gets a dedicated
        onboarding specialist and training resources. What is included for data
        conversion depends on your plan, so confirm it in your agreement.
      </p>

      <h3 id="faq-without-a-consultant">
        Can a small nonprofit set up Bloomerang without a consultant?
      </h3>
      <p>
        Yes, many do. The difficult parts are the coding structure, automation
        choices, reports and import cleanup, mostly because of limited staff time.
      </p>

      <h3 id="faq-what-to-configure-first">
        What should be configured first in Bloomerang?
      </h3>
      <p>
        Confirm your products and plan, then settle record structure and your
        funds, campaigns and appeals before importing data or building reports.
        Imports cannot create funds or custom field values.
      </p>
    </>
  );
}