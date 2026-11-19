import type { CaseStudy } from '@/content/case-studies/types';
import { PuneTimesMirrorCover } from '@/components/case-studies/covers';
import { LeverFlow } from '@/components/case-studies/LeverFlow';
import { DecayCurve } from '@/components/case-studies/DecayCurve';
import { StoryTriage } from '@/components/case-studies/StoryTriage';
import { OutputDial } from '@/components/case-studies/OutputDial';
import { FrontColumns } from '@/components/case-studies/FrontColumns';
import { ReadinessCheck } from '@/components/case-studies/ReadinessCheck';
import { UsersGrowth } from '@/components/case-studies/UsersGrowth';

/*
 * Source: PuneTimesMirror_Sage-Kite_Interactive-V2.html, supplied by the team.
 * All copy is kept exactly as written in the source file (US spelling included); only the
 * site's brand colours and font are applied. The meta title and description are shortened
 * to fit the length limits. Rendered in the technical layout like Croma, Maruti Suzuki and Kaya Clinics,
 * matched to the source: plain hero, kicker, chips, the lever diagram beside them, a progress bar and the
 * round section pager at the bottom (kept, as the user chose); no breadcrumb (D079). Manrope and the brand
 * tokens only. The site's header and footer replace the source's; "See more work" links to /case-studies.
 *
 * No `origin` or `about`: the source does not state who did the work, and the user approved
 * publishing it without them, as for Croma, Maruti Suzuki and Kaya Clinics (decision.md D079).
 */
const PAGER = [
  { id: 'overview', label: 'Overview' },
  { id: 'fade', label: 'Speed' },
  { id: 'triage', label: 'Treatment' },
  { id: 'output', label: 'Output' },
  { id: 'approach', label: 'Approach' },
  { id: 'ready', label: 'Readiness' },
  { id: 'results', label: 'Results' },
];

const study: CaseStudy = {
  slug: 'pune-times-mirror',
  client: 'Pune Times Mirror & Civic Mirror',
  title: 'Scaling a news platform from 200K to 4M monthly users through news SEO',
  seoTitle: 'News SEO Case Study: Pune Times Mirror',
  description: 'How a News sitemap, Live Blog schema, Discover images and evergreen local content took Pune Times Mirror and Civic Mirror from 200K to 4M monthly users.',
  summary: 'How two Pune news sites grew from 200K to 4M monthly users with a News sitemap, Live Blog schema, Discover images and evergreen local content.',
  keywords: ['news SEO case study', 'Pune Times Mirror', 'Civic Mirror', 'News sitemap', 'Live Blog schema', 'Google Discover', 'Top Stories'],
  datePublished: '2026-11-10',
  industry: 'News publishing (local news)',
  discipline: 'News SEO',
  cover: <PuneTimesMirrorCover />,
  technical: {
    plainHero: true,
    pager: PAGER,
  },
  highlights: ['News sitemap', 'Live Blog schema', 'Discover-optimized images', 'Evergreen local content'],
  results: [
    {
      label: 'monthly users',
      value: '200K → 4M',
      valueLabel: 'From 200 thousand to 4 million',
      before: '200K',
      after: '4M',
      scale: 5,
    },
  ],

  hero: {
    label: 'Case study · News SEO',
    dek: 'Strong brand authority. Slow to surface where news readers find stories.',
    lede: 'Pune Times Mirror and Civic Mirror, two local news websites, struggled to rank quickly in Google News and Discover. Low publishing frequency and missing technical news SEO elements limited their reach. Select any lever on the right to see where it works.',
    visual: (
      <LeverFlow
        ariaLabel="Levers and the surfaces they influence"
        columns={['What we did', 'Where it works']}
        levers={[
          { key: 'vol', label: 'Publishing volume', text: 'Publishing 50 articles a day, up from 20, increased the volume of content competing for visibility.', surfaces: ['news', 'top', 'disc', 'search'] },
          { key: 'map', label: 'News sitemap', text: 'A News sitemap helps search engines discover new articles quickly.', surfaces: ['news', 'top'] },
          { key: 'live', label: 'Live Blog schema', text: 'Live Blog schema is structured data for live coverage, helping search engines find and understand it quickly.', surfaces: ['news', 'top'] },
          { key: 'img', label: 'Discover images', text: 'Optimized article images improve visibility in Google Discover, a major source of news traffic.', surfaces: ['disc'] },
          { key: 'ever', label: 'Evergreen listicles', text: 'Evergreen local listicles, such as "Best Restaurants in Pune", capture ongoing search demand beyond breaking news.', surfaces: ['search'] },
        ]}
        surfaces={[
          { key: 'news', label: 'Google News' },
          { key: 'top', label: 'Top Stories' },
          { key: 'disc', label: 'Discover' },
          { key: 'search', label: 'Search' },
        ]}
        surfaceCaption="{surface} is influenced by: {levers}."
        initial="map"
      />
    ),
    glance: [
      { label: 'Clients', value: 'Pune Times Mirror & Civic Mirror' },
      { label: 'Type', value: 'News SEO' },
      { label: 'Result', value: '200K → 4M monthly users' },
    ],
  },

  metrics: {
    items: [
      { value: '200K → 4M', label: 'Monthly users', tone: 'sky' },
      { value: '20 → 50', label: 'Daily articles published', tone: 'butter' },
      { value: 'Discover & Top Stories', label: 'Visibility growth', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'fade',
      label: '01 / SPEED',
      heading: 'The value of a story fades fast, so discovery speed matters',
      intro: 'News publishers depend on being discovered quickly through Google News, Top Stories and Google Discover. A News sitemap and proper markup reduce reliance on search engines eventually finding content on their own. Drag to set when a story gets discovered.',
      content: (
        <DecayCurve
          ariaLabel="A story's attention fading over 48 hours, with a marker for when it is discovered"
          axis={{ start: 'published', end: '48 h', value: 'attention' }}
          label="Story discovered after"
          presets={[
            { label: 'Left for search engines to find on their own', hours: 18 },
            { label: 'Surfaced right away', hours: 1 },
          ]}
          caption="Discovered after {t} h, about {p}% of the story's attention is still available. "
          tails={{
            fast: 'Fast discovery keeps most of the value.',
            mid: 'A good share of the value has already faded.',
            late: 'Most of the story\'s value has faded before it is found.',
          }}
          note="Illustrative decay curve, not measured data. It shows the idea that a story's value fades quickly after publication."
        />
      ),
    },
    {
      id: 'triage',
      band: 'pale',
      label: '02 / THE RIGHT TREATMENT FOR EACH STORY',
      heading: 'News-specific technical elements, Discover images and evergreen content',
      intro: 'Different stories need different technical treatment. Drag each story to the treatment it needs, or select a story and then a treatment.',
      content: (
        <StoryTriage
          stories={[
            { title: 'Breaking local story', bin: 'news' },
            { title: 'Live coverage of a city event', bin: 'news' },
            { title: 'Photo-led local feature', bin: 'visual' },
            { title: 'Striking visual story', bin: 'visual' },
            { title: 'Best Restaurants in Pune', bin: 'ever' },
            { title: 'Local weekend guide', bin: 'ever' },
          ]}
          bins={[
            { key: 'news', small: 'Treatment 1', title: 'Breaking and live', note: 'News sitemap + Live Blog schema', ariaLabel: 'Breaking and live treatment', explain: 'Breaking and live stories need fast discovery: a News sitemap, plus Live Blog schema for live coverage.' },
            { key: 'visual', small: 'Treatment 2', title: 'Visual stories', note: 'Discover-optimized images', ariaLabel: 'Visual story treatment', explain: 'Visual stories need Discover-optimized images, since Discover is a major source of news traffic.' },
            { key: 'ever', small: 'Treatment 3', title: 'Evergreen local', note: 'Local listicles for steady demand', ariaLabel: 'Evergreen local treatment', explain: 'Evergreen local listicles capture ongoing search demand beyond breaking news.' },
          ]}
          poolLabel="Stories to sort"
          sortedLabel="Sorted:"
          reset="Reset"
          idle="Drag a story into a treatment."
          wrong="Not quite. Think about how this story gets discovered and how long it stays valuable."
          allDone="All sorted. {explain} Each story type gets its own treatment."
          headline={{
            label: 'Try your own headline',
            initial: 'Best Restaurants in Pune',
            shelfLabel: 'Shelf life',
            empty: 'Type a headline.',
            evergreen: 'Evergreen: build a steady base of ongoing search demand beyond the news cycle.',
            live: 'Live coverage: use Live Blog schema and a News sitemap. Value fades fast.',
            news: 'Breaking news: use a News sitemap so it is discovered quickly. Value fades fast.',
            visual: 'Visual story: optimize the lead image for Google Discover.',
            general: 'General story: add it to the News sitemap, and consider an evergreen angle.',
          }}
          note="Placeholder stories. The headline checker uses simple keyword rules for illustration, not a real classifier."
        />
      ),
    },
    {
      id: 'output',
      label: '03 / PUBLISHING OUTPUT',
      heading: 'From 20 to 50 articles a day: more chances to be discovered',
      intro: 'Publishing around 20 articles a day limited the number of chances to be discovered. Raising it to 50 increased the volume of content competing for visibility. Turn the dial, or focus it and use the arrow keys.',
      content: (
        <OutputDial
          ariaLabel="Articles published per day"
          unit="ARTICLES / DAY"
          presets={[{ label: 'Before: 20', value: 20 }, { label: 'After: 50', value: 50 }]}
          stats={{ perHour: 'Articles per hour:', vs: 'vs 20 a day:', extra: 'Extra articles a day:' }}
          tilesLabel="Articles published today"
          captions={{
            low: 'About 20 articles a day: the pace that limited the number of chances to be discovered.',
            mid: 'More articles a day means more content competing for visibility.',
            high: '50 articles a day: 2.5× the chances to be discovered, a concrete benchmark for the editorial team.',
          }}
          note="Only the 20 and 50 daily figures come from the case study. The per-hour numbers are simple arithmetic."
        />
      ),
    },
    {
      id: 'approach',
      band: 'sky',
      label: '04 / EXECUTION APPROACH',
      heading: 'Speed and depth, with the technical setup first',
      intro: 'The strategy combined speed, getting content discovered quickly, and depth, building content that keeps earning traffic beyond the news cycle. Technical elements were set up first so increased publishing would be discovered efficiently, not just produced.',
      content: (
        <FrontColumns
          steps={[
            { small: 'Step 1', title: 'Enable fast discovery', text: 'News sitemap and Live Blog schema helped search engines find and understand new content quickly.', href: '#fade' },
            { small: 'Step 2', title: 'Scale output', text: 'Raising publishing from 20 to 50 articles per day increased the volume of content competing for visibility.', href: '#output' },
            { small: 'Step 3', title: 'Win Discover', text: 'Image optimization targeted Google Discover, a major source of news traffic.', href: '#triage' },
            { small: 'Step 4', title: 'Build a steady base', text: 'Evergreen local listicles captured ongoing search demand beyond breaking news.', href: '#triage' },
          ]}
        />
      ),
    },
    {
      id: 'ready',
      label: '05 / NEWSROOM READINESS',
      heading: 'Is your newsroom set up to turn authority into reach?',
      intro: 'The publications already carried strong brand authority. What they lacked was the publishing rhythm and technical setup to convert it into large-scale news traffic. Tick what your newsroom already has to see your next steps, in the order that worked here.',
      content: (
        <ReadinessCheck
          groupLabel="Your newsroom"
          items={[
            { key: 'map', label: 'A News sitemap for new articles', step: 'News sitemap', text: 'Implement a News sitemap so search engines discover new articles quickly.' },
            { key: 'live', label: 'Live Blog schema for live coverage', step: 'Live Blog schema', text: 'Add Live Blog schema so live coverage is found and understood quickly.' },
            { key: 'vol', label: 'Around 50 articles published a day', step: 'Publishing volume', text: 'Scale daily publishing toward 50 articles a day, once discovery is set up.' },
            { key: 'img', label: 'Images optimized for Google Discover', step: 'Discover images', text: 'Optimize article images to improve visibility in Google Discover.' },
            { key: 'ever', label: 'Evergreen local listicles', step: 'Evergreen listicles', text: 'Create evergreen local content, such as "Best Restaurants in Pune", for steady search demand.' },
          ]}
          partial="{n} of 5 elements in place. {m} to go."
          complete="Full stack in place: you have the elements used in this case study."
          keepGoing={{ step: 'Keep going', text: 'Keep publishing consistently and track growth across Discover, Top Stories and search.' }}
          cta={{ label: 'Book a free consultation', href: '/contact' }}
          note="A simple self-check based on the elements in this case study, not a full audit."
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / RESULTS',
    heading: 'Growth that didn\'t depend on any single story or news cycle',
    band: 'sky',
    card: (
      <UsersGrowth
        from={200000}
        to={4000000}
        fromLabel="200K"
        toLabel="4M"
        groups={[{
          title: 'Monthly users',
          ariaLabel: 'Monthly users grew from 200K to 4M, 20 times',
          bars: [
            { label: 'Before', value: '200K', width: 5 },
            { label: 'After', value: '4M · 20×', width: 100, after: true },
          ],
        }]}
        channels={[
          { small: 'Growth', title: 'Google Discover' },
          { small: 'Increased', title: 'Top Stories' },
          { small: 'Steady base', title: 'Search' },
        ]}
        note="Bars are to scale from the case study figures. The 20× multiple is calculated from them."
      />
    ),
    points: [
      { title: '200K → 4M monthly users', text: 'Monthly users scaled from 200K to 4M.' },
      { title: 'Strong growth in Google Discover traffic', text: 'Image optimization targeted a major source of news traffic.' },
      { title: 'Increased Top Stories visibility', text: 'Stories surfaced faster where news readers look.' },
    ],
  },

  changes: {
    label: '07 / IMPACT',
    heading: 'Faster discovery, steadier traffic',
    items: [
      { icon: 'clock', title: 'Faster discovery of new stories', text: 'A News sitemap and proper markup reduce reliance on search engines eventually finding content on their own.' },
      { icon: 'lines', title: 'Less dependence on breaking news', text: 'Evergreen local content provides a steadier traffic base between major stories.' },
      { icon: 'target', title: 'Clear, scalable publishing targets', text: 'The move from 20 to 50 articles per day gave the editorial team a concrete benchmark linked to traffic growth.' },
      { icon: 'nodes', title: 'Multiple traffic channels', text: 'Growth across Discover, Top Stories and search reduced reliance on any one source.' },
    ],
  },

  methods: {
    label: '08 / STACK',
    heading: 'Tools and tech used',
    items: [
      { title: 'News sitemap' },
      { title: 'Live Blog schema markup' },
      { title: 'Google Discover image optimization' },
      { title: 'Evergreen content strategy (local listicles)' },
      { title: 'Publishing frequency planning' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'News publishers can scale dramatically when authority meets the right setup',
    body: 'Pair brand authority with the right technical setup, publishing cadence and evergreen content. For any media brand with credibility but limited reach, this is a practical path to much larger audiences.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Is your brand bigger than your reach?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at how your stories get discovered in Google News, Top Stories and Discover.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
