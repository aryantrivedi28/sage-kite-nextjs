/**
 * Article body for /blog/bloomerang-implementation-timeline. Kept in its own
 * file because it is long; post.tsx points `content` at it.
 */
export default function BloomerangImplementationTimelineArticle() {
  return (
    <>
      <p>
        You have signed with Bloomerang and a conversion date is on the calendar.
        What happens in between?
      </p>
      <p>
        In short, a Bloomerang implementation is a sequence of decisions, data
        work, review and training. How long it takes depends mostly on three
        things: whether data conversion is part of your plan, how clean your
        existing records are, and how quickly your team can answer questions and
        review results.
      </p>
      <p>
        Bloomerang does publish two figures. Its FAQ says most nonprofits are up
        and running in as little as five weeks, and gives a standard conversion
        timeline of 12 to 14 weeks. It does not say what either number measures,
        so use them as a reference point, not a promise.
      </p>
      <p>
        This article covers the stages in order, who does what, and what to have
        ready before conversion starts. It is not a configuration tutorial (our
        Bloomerang setup guide for small nonprofits covers that) and it is not a
        migration checklist for your old system.
      </p>

      <h2 id="what-does-a-bloomerang-implementation-involve">
        What does a Bloomerang implementation involve?
      </h2>
      <p>
        Implementation is everything between signing and your team working
        confidently in a live database. Setup is one part of it. The rest is
        deciding how your data should be structured, getting existing data in,
        checking it, and teaching people to use it.
      </p>
      <p>
        Bloomerang says every organization gets a dedicated onboarding specialist
        who helps build a plan and guides training (getting started). If data
        conversion is part of your plan, a conversion project manager supports
        that work from start to finish. According to the FAQ, conversion covers
        historical donations, interactions and constituent records, standardized
        matching to reduce duplicates, field mapping, and validation in a sandbox
        before you go live.
      </p>
      <p>
        <strong>One caution.</strong> Conversion support applies when the plan
        includes it, and Bloomerang does not publish which plans do. Check your
        proposal for what is included before you build your schedule around it.
      </p>

      <h2 id="how-long-does-a-bloomerang-implementation-take">
        How long does a Bloomerang implementation take?
      </h2>
      <p>
        There is no universal Bloomerang timeline. Bloomerang&apos;s own figures
        are a useful outer frame, and the stages below show where the time goes.
        This is what the sources say, and what they leave out.
      </p>

      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>What it says</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bloomerang FAQ</td>
            <td>
              Up and running in as little as five weeks for most nonprofits.
              Standard conversion timeline of 12 to 14 weeks
            </td>
            <td>
              Does not define &ldquo;up and running&rdquo;, say what drives each
              range, or say if five weeks includes conversion
            </td>
          </tr>
          <tr>
            <td>Bloomerang rollout guide</td>
            <td>
              A 90-day role-based plan. Large migrations may take four to nine
              months. Keep the old system read-only for three to six months
            </td>
            <td>
              Generic CRM guidance, not Bloomerang&apos;s onboarding commitment
            </td>
          </tr>
          <tr>
            <td>Neon One</td>
            <td>
              Four to 12 weeks for most small nonprofits. Go-live and finished
              data migration are separate milestones
            </td>
            <td>A competitor describing its own market. Useful for framing only</td>
          </tr>
        </tbody>
      </table>

      <p>
        Three things move the date more than anything else. First, whether
        Bloomerang&apos;s team is doing the conversion or you are importing
        yourself. Second, data condition: Bloomerang&apos;s own guidance says
        messy data takes extra care and additional time from the conversion team.
        Third, your response time. A conversion waits on your answers and your
        review.
      </p>

      <h2 id="the-implementation-timeline-stage-by-stage">
        The implementation timeline, stage by stage
      </h2>
      <p>
        The ranges below are illustrative planning ranges for this article. They
        are not Bloomerang&apos;s, they are not guaranteed, and stages overlap. Use
        them to ask better questions of your onboarding specialist, not to set a
        deadline.
      </p>

      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>What happens</th>
            <th>Who leads</th>
            <th>Planning range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Kickoff</td>
            <td>
              Meet your onboarding specialist. Agree scope, contacts and target
              dates
            </td>
            <td>Nonprofit owner with Bloomerang</td>
            <td>About 1 week</td>
          </tr>
          <tr>
            <td>2. Requirements review</td>
            <td>
              List the processes, reports and communications the database must
              support from day one
            </td>
            <td>Nonprofit leads</td>
            <td>1 to 2 weeks</td>
          </tr>
          <tr>
            <td>3. Data preparation</td>
            <td>Inventory sources, decide what moves, clean what you can</td>
            <td>Nonprofit, advised by Bloomerang if converting</td>
            <td>1 to 4 weeks or more</td>
          </tr>
          <tr>
            <td>4. Structure decisions</td>
            <td>
              Agree funds, campaigns, appeals, household rules, custom fields and
              user roles
            </td>
            <td>Nonprofit, with finance</td>
            <td>1 to 2 weeks</td>
          </tr>
          <tr>
            <td>5. Conversion or import</td>
            <td>Legacy data is mapped and loaded</td>
            <td>
              Bloomerang conversion team if in plan, otherwise you
            </td>
            <td>Follow Bloomerang&apos;s schedule</td>
          </tr>
          <tr>
            <td>6. Configuration</td>
            <td>Settings, users, templates and reports are set up</td>
            <td>Nonprofit admin with onboarding specialist</td>
            <td>1 to 3 weeks, overlapping</td>
          </tr>
          <tr>
            <td>7. Review and testing</td>
            <td>Check converted data and test gifts, receipts, reports</td>
            <td>Nonprofit, finance and development</td>
            <td>1 to 3 weeks</td>
          </tr>
          <tr>
            <td>8. Training</td>
            <td>Role-based learning, Bloomerang Learning and internal practice</td>
            <td>All users</td>
            <td>1 to 2 weeks, overlapping</td>
          </tr>
          <tr>
            <td>9. Go-live</td>
            <td>Cut over, then watch closely for the first weeks</td>
            <td>Nonprofit, with Bloomerang support</td>
            <td>Cutover day, then 2 to 4 weeks</td>
          </tr>
        </tbody>
      </table>

      <p>
        As a planning assumption, an organization starting fresh might plan for
        roughly four to eight weeks. With conversion, plan inside
        Bloomerang&apos;s published 12 to 14 week frame and add a buffer if your
        data is complicated.
      </p>
      <p>Each stage has a gate. Do not move on until it is met.</p>

      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>What you need to start</th>
            <th>What can delay it</th>
            <th>Done when, and what you have</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              A named project owner and a backup. Your plan&apos;s included
              services
            </td>
            <td>Unclear scope. Owner without time</td>
            <td>Dates and contacts agreed. A one-page project plan</td>
          </tr>
          <tr>
            <td>2</td>
            <td>How you handle gifts, thank-yous and reports today</td>
            <td>Knowledge held by one person</td>
            <td>Must-have processes and reports agreed. A requirements list</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Exports and access to old sources. Decisions on how much history to
              keep
            </td>
            <td>Duplicates, inconsistent coding, data spread across files</td>
            <td>
              Inventory complete, cleanup decisions made. Cleaned files and a
              retire list
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Draft funds, campaigns, appeals, household rules, roles
            </td>
            <td>Development and finance disagree on coding</td>
            <td>Structure approved by both. A signed-off structure sheet</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Complete data in the format requested, on time</td>
            <td>
              Late files, slow answers, scope changes mid-conversion
            </td>
            <td>Converted data ready to review</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Approved structure, admin access, letter templates</td>
            <td>Waiting on decisions. Too many custom fields</td>
            <td>Settings, users and templates working</td>
          </tr>
          <tr>
            <td>7</td>
            <td>A test checklist, sample records, time from finance</td>
            <td>Reviewers out. Vague error reports</td>
            <td>Fixes verified and totals reconciled. Sign-off</td>
          </tr>
          <tr>
            <td>8</td>
            <td>A role-based plan and protected time</td>
            <td>Campaign season. No training owner</td>
            <td>Each user has done their daily tasks. Quick guides</td>
          </tr>
          <tr>
            <td>9</td>
            <td>A cutover date and old system read-only</td>
            <td>Late fixes. A fundraising peak</td>
            <td>All new gifts only in Bloomerang. A 30-day review date</td>
          </tr>
        </tbody>
      </table>

      <p>
        The review stage is more specific than most people expect.
        Bloomerang&apos;s help center has conversion review articles for
        relationships, names and status, personal information and contact
        information (for example, relationships review). Errors go on a Revisions
        Needed List, and each one should include the constituent ID, what is wrong
        and what the record should show. Plan time for this.
      </p>

      <h2 id="what-should-you-prepare-before-implementation-starts">
        What should you prepare before implementation starts?
      </h2>
      <p>
        If a conversion date is already booked, work backwards from it. Seven
        categories cover the preparation.
      </p>
      <p>
        <strong>A. Ownership.</strong> Name one decision-maker and one
        coordinator who gathers information and answers questions.
        Bloomerang&apos;s own rollout guidance lists unclear ownership as a common
        cause of stalled CRM projects.
      </p>
      <p>
        <strong>B. Current processes.</strong> Write down how gifts arrive, who
        records them, who thanks donors and how reports get made. Note what you
        actually use, not what the old system offered.
      </p>
      <p>
        <strong>C. Data and records.</strong> List every place donor information
        lives. Decide how many years of history you need, what to do with
        long-lapsed donors and what you will retire. Bloomerang&apos;s migration
        guidance says some data from almost any legacy system will not import
        cleanly, so export what you retire for reference.
      </p>
      <p>
        <strong>D. Funds, campaigns and appeals.</strong> Agree the list and what
        each term means with finance before conversion. Bloomerang&apos;s help
        documentation says used funds, campaigns and appeals can be deactivated
        but not deleted, so settle the names early.
      </p>
      <p>
        <strong>E. Communications and acknowledgements.</strong> Collect your
        current letters and emails and decide who approves them. Check receipt
        rules for your jurisdiction instead of assuming a default template fits.
        In Canada, CRA official donation receipts must include specific mandatory
        elements. In the US, the IRS requires donors to have a written
        acknowledgment for any single gift of $250 or more. Ask Bloomerang how
        your setup meets the rules that apply to you, and confirm with your
        accountant.
      </p>
      <p>
        <strong>F. Reporting and integrations.</strong> List the reports your
        board and finance team need, and the tools that connect to your donor
        data, such as accounting, payments and email. Ask your onboarding
        specialist which are in scope.
      </p>
      <p>
        <strong>G. Training and staff readiness.</strong> Know who will use the
        system and for what. Block time for them. Avoid a go-live in your busiest
        fundraising weeks if you can.
      </p>

      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Have this ready before conversion data is handed over</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ownership</td>
            <td>Decision-maker, coordinator, finance contact, and a backup for each</td>
          </tr>
          <tr>
            <td>Processes</td>
            <td>A one-page description of gift entry, acknowledgements and reporting</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>
              Source inventory, cleaned exports, history and lapsed-donor
              decisions, retire list
            </td>
          </tr>
          <tr>
            <td>Coding</td>
            <td>Approved list of funds, campaigns and appeals with plain-language definitions</td>
          </tr>
          <tr>
            <td>Communications</td>
            <td>Current templates, approvers, and the receipt rules for your jurisdiction</td>
          </tr>
          <tr>
            <td>Reporting</td>
            <td>Must-have reports and a list of connected systems</td>
          </tr>
          <tr>
            <td>Training</td>
            <td>Users by role and protected training time</td>
          </tr>
        </tbody>
      </table>

      <h2 id="what-does-bloomerang-handle-and-what-is-left-to-you">
        What does Bloomerang handle, and what is left to you?
      </h2>

      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Bloomerang</th>
            <th>Your nonprofit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Onboarding</td>
            <td>Dedicated onboarding specialist and training resources</td>
            <td>Attend sessions, decide, and keep the project moving</td>
          </tr>
          <tr>
            <td>Conversion</td>
            <td>
              If in your plan: a conversion project manager, field mapping,
              standardized matching and sandbox validation
            </td>
            <td>Provide complete data, answer questions, make data decisions</td>
          </tr>
          <tr>
            <td>Review</td>
            <td>Help center articles that guide your review</td>
            <td>Check converted records and list corrections with examples</td>
          </tr>
          <tr>
            <td>Training</td>
            <td>Live and on-demand courses and a help library</td>
            <td>Decide who learns what, and your own procedures</td>
          </tr>
          <tr>
            <td>Ongoing support</td>
            <td>Chat, help center and support team</td>
            <td>Data standards and who enters what</td>
          </tr>
        </tbody>
      </table>

      <p>
        Bloomerang does not publish a full list of customer responsibilities, or
        which plans include which services. Confirm both in writing with your
        sales contact or onboarding specialist.
      </p>

      <h2 id="what-should-your-team-handle-internally">
        What should your team handle internally?
      </h2>
      <p>
        Some decisions only you can make. What counts as a campaign versus an
        appeal. Which history matters. Who approves thank-you letters and
        receipts. What good data entry looks like. Bloomerang can advise, but it
        cannot decide these for you, and conversion cannot fix a question nobody
        has answered.
      </p>

      <h2 id="when-should-you-bring-in-a-consultant">
        When should you bring in a consultant?
      </h2>
      <p>
        Sage Kite is an independent consultancy. We are not an official, certified
        or endorsed Bloomerang partner, and we do not replace Bloomerang&apos;s
        onboarding or conversion team. Where an independent hand can help is in
        the gaps around that team, such as preparing data before conversion
        starts, working through structure decisions with development and finance,
        building a test plan, planning training, and cleaning up after go-live.
        See our{' '}
        <a href="https://www.sagekite.com/platforms/bloomerang">
          Bloomerang services
        </a>
        .
      </p>
      <p>
        You may not need outside help if your database is small and clean, your
        plan includes full onboarding and conversion, and someone on your team has
        the time and authority to run the project.
      </p>

      <h2 id="are-you-ready-to-go-live">Are you ready to go live?</h2>
      <p>Before cutover, check each of these:</p>
      <ul>
        <li>
          Converted data is reviewed, corrections are verified and sign-off is
          recorded.
        </li>
        <li>Gift totals reconcile with your finance records for a sample period.</li>
        <li>Funds, campaigns and appeals match the approved structure.</li>
        <li>
          A test gift, an acknowledgement and a receipt have been run end to end.
        </li>
        <li>Receipt wording is checked for your jurisdiction.</li>
        <li>Key reports return the numbers your board and finance expect.</li>
        <li>Connected systems are tested or a plan exists for each.</li>
        <li>
          Every user has the right permissions and has practiced their daily
          tasks.
        </li>
        <li>
          Everyone knows the cutover date, and new entries go only into
          Bloomerang afterward.
        </li>
        <li>
          Your old system is set to read-only, and someone owns the first-30-days
          review.
        </li>
      </ul>

      <h2 id="common-delays-and-how-to-avoid-them">
        Common delays and how to avoid them
      </h2>

      <table>
        <thead>
          <tr>
            <th>Delay</th>
            <th>Why it happens</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Late data</td>
            <td>Files sit with one person or in many places</td>
            <td>Inventory sources in week one and assign owners</td>
          </tr>
          <tr>
            <td>Unresolved coding</td>
            <td>Development and finance use different logic</td>
            <td>Agree definitions together before conversion</td>
          </tr>
          <tr>
            <td>Scope changes mid-conversion</td>
            <td>New requests surface after mapping starts</td>
            <td>Finish requirements first. Log extras for after go-live</td>
          </tr>
          <tr>
            <td>Vague error reports</td>
            <td>&ldquo;This looks wrong&rdquo; cannot be fixed</td>
            <td>
              Give the constituent ID, the problem and the expected result
            </td>
          </tr>
          <tr>
            <td>Skipped testing</td>
            <td>Time runs out near go-live</td>
            <td>Put testing in the plan with named people</td>
          </tr>
          <tr>
            <td>Peak fundraising season</td>
            <td>Staff are stretched</td>
            <td>Pick a cutover date away from your busiest weeks</td>
          </tr>
        </tbody>
      </table>

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <h3 id="faq-how-long-implementation-take">
        How long does a Bloomerang implementation take?
      </h3>
      <p>
        Bloomerang publishes as little as five weeks for most nonprofits and a
        standard conversion timeline of 12 to 14 weeks, without defining either.
        Your own timeline depends on your plan, your data and your response time.
      </p>

      <h3 id="faq-what-to-prepare-before-conversion">
        What should I prepare before Bloomerang data conversion?
      </h3>
      <p>
        Name an owner, document your processes, inventory and clean your data,
        agree funds, campaigns and appeals, collect your letters, list reports and
        integrations, and plan training. The checklist above puts each in one
        place.
      </p>

      <h3 id="faq-does-bloomerang-convert">
        Does Bloomerang convert my data for me?
      </h3>
      <p>
        Only if conversion is included in your plan, according to
        Bloomerang&apos;s FAQ. If it is, a conversion project manager supports the
        work, and you still provide data and review the result.
      </p>

      <h3 id="faq-do-i-need-a-consultant">Do I need a consultant?</h3>
      <p>
        Not always. It tends to help when the data is messy, the team is small or
        the coding decisions are contested. It does not replace Bloomerang&apos;s
        own conversion team.
      </p>

      <h3 id="faq-what-to-test-before-go-live">
        What should I test before go-live?
      </h3>
      <p>
        Converted records, a gift through to acknowledgement and receipt, key
        reports, user permissions and connected systems.
      </p>

      <h3 id="faq-change-setup-after-go-live">
        Can I change my setup after go-live?
      </h3>
      <p>
        Much of it, yes. Some items are harder to undo, such as funds, campaigns
        and appeals that have been used, which Bloomerang&apos;s documentation
        says can be deactivated, not deleted.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        A Bloomerang implementation goes best when the nonprofit treats it as a
        project with an owner, a plan and a review stage, not as something that
        happens to it. Bloomerang&apos;s team does the conversion work if your
        plan includes it. Your team makes the decisions and checks the result.
      </p>
      <p>
        If you have signed and want a second pair of eyes on your preparation,{' '}
        <a href="https://www.sagekite.com/platforms/bloomerang">
          talk to Sage Kite about your Bloomerang implementation
        </a>
        . We work alongside Bloomerang&apos;s team, not in place of it.
      </p>
    </>
  );
}