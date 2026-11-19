import type { CaseStudy } from '@/content/case-studies/types';
import { HemlockCover } from '@/components/case-studies/covers';
import { BrowserFrame, ChangeCards, Checklist, DataTable, Journey, PointList } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Hemlock-Reserve_GoHighLevel-Direct-Booking-Website_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. The meta title and description are shortened to
 * fit the length limits, and the "Case study · ..." hero kicker is left out, as
 * for the other case studies. A Sage Kite client project. No results were
 * measured, so `results` is empty and the listing card shows the `metrics` tiles.
 * Screenshots are of the live site, extracted from the source file. In map.webp
 * the map's address card is blurred: it showed the cabin's street address, which
 * the page says is only shared after booking.
 */
const IMG = '/images/case-studies/hemlock-reserve';
const LIVE = 'https://hemlockreserve.com/';

const study: CaseStudy = {
  slug: 'hemlock-reserve',
  client: 'Hemlock Reserve',
  title: 'Direct booking website for a cabin rental business, built on GoHighLevel',
  seoTitle: 'Direct Booking Website Case Study: Hemlock Reserve',
  ogTitle: 'Direct booking website for a cabin rental business, built on GoHighLevel',
  description: 'How Hemlock Reserve\'s luxury Kentucky cabins got a GoHighLevel direct booking website: every cabin in one place, booking calendars and location privacy.',
  summary: 'How a Kentucky luxury cabin owner got a GoHighLevel website to take direct bookings alongside Airbnb, with every cabin, its calendar and the founders\' story.',
  keywords: ['direct booking website', 'vacation rental website', 'GoHighLevel website', 'cabin rental website', 'Hemlock Reserve', 'vacation rental booking calendar'],
  datePublished: '2026-10-15',
  industry: 'Vacation rentals: luxury cabins',
  discipline: 'GoHighLevel direct booking website',
  origin: 'A Sage Kite client project',
  cover: <HemlockCover />,
  highlights: ['Cabin collection', 'Booking calendars', 'Location privacy', 'Brand story'],
  results: [],

  hero: {
    dek: 'A website of his own, so guests can book directly.',
    lede: 'Hemlock Reserve is a collection of luxury cabins in Kentucky, owned by Eric and Audra Thomas. Eric already rented through Airbnb and wanted a site of his own, to host every property side by side and take extra bookings directly. We built it on GoHighLevel.',
    visual: (
      <BrowserFrame
        url="hemlockreserve.com/cabins"
        src={`${IMG}/cabins.webp`}
        width={1200}
        height={810}
        alt="The Hemlock Reserve cabin collection page: four cabins shown as photo cards, Hemlock and Jades, Hemlock and Jasper, Hemlock and Sapphire, and Hemlock and Pines, each with its location, sleeps 2, 1 bed, and Featured or New badges, under a dark header with a Book Now button"
        caption="The Our Luxury Cabins collection on the live site."
        priority
        sizes="(max-width: 1180px) 100vw, 1100px"
      />
    ),
    visualBelow: true,
    glance: [
      { label: 'Client', value: 'Hemlock Reserve, owned by Eric and Audra Thomas' },
      { label: 'Project type', value: 'Vacation rental website for direct bookings' },
      { label: 'Platform', value: 'GoHighLevel' },
      { label: 'Properties', value: 'Four cabins in Wellington and Frenchburg, Kentucky' },
      { label: 'Our role', value: 'Sage Kite client engagement' },
      { label: 'Live site', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">hemlockreserve.com</a> },
    ],
  },

  metrics: {
    items: [
      { value: '4', label: 'Cabins listed side by side on one website', tone: 'sky' },
      { value: '2', label: 'Kentucky towns covered: Wellington and Frenchburg', tone: 'butter' },
      { value: 'Direct', label: 'Booking calendar on the cabin page', tone: 'coral' },
      { value: 'Couples', label: 'An adults-only retreat, with the brand built around it', tone: 'sage' },
    ],
  },

  problem: {
    label: 'The requirement',
    heading: 'Why a vacation rental owner needs a direct booking website as well as Airbnb',
    intro: 'Eric owns several rental properties and lists them on Airbnb. He wanted a website of his own that hosts all of them in one place, so that he can book guests locally and, if he chooses, run ads without depending on Airbnb. The Airbnb listings stay available side by side. The website exists for the extra bookings.',
    items: [
      { title: 'One marketplace is not a business of your own', text: 'Listings on a marketplace live on someone else\'s platform. A website gives the owner a booking channel under his own brand.' },
      { title: 'All the properties in one place', text: 'Several cabins needed to be shown together, each with its own page, so a guest can compare them and choose.' },
      { title: 'A destination for local ads', text: 'Ads need somewhere to send people. A branded site with live availability gives them a place to book instead of a marketplace listing.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'A GoHighLevel website for vacation rentals: a cabin collection, booking calendars and a story guests trust',
    intro: 'We built a luxury, dark-themed website on GoHighLevel around one purpose: let a guest find a cabin, check dates and reserve directly. Jump to any feature below.',
    steps: [
      { title: 'Cabin collection', text: 'Every property side by side', href: '#collection' },
      { title: 'Cabin pages', text: 'Calendar, amenities and a Reserve button', href: '#cabin' },
      { title: 'Location privacy', text: 'Area map, exact address after booking', href: '#location' },
      { title: 'Brand story', text: 'The founders and the couples promise', href: '#story' },
    ],
  },

  sections: [
    {
      id: 'collection',
      label: 'Cabin collection',
      heading: 'A cabin rental website that shows every property side by side and sends guests to book direct',
      intro: 'The collection page is the owner\'s shop window. Each cabin is a large photo card with its name, location, how many it sleeps and how many beds, so a guest can compare in seconds.',
      content: (
        <div className="cs-seo-grid">
          <DataTable
            caption="The four cabins on the collection page"
            columns={['Cabin', 'Location', 'Sleeps', 'Badge']}
            rows={[
              ['Hemlock & Jades', 'Wellington, KY', '2 · 1 bed', 'Featured, New'],
              ['Hemlock & Jasper', 'Wellington, KY', '2 · 1 bed', 'Featured, New'],
              ['Hemlock & Sapphire', 'Wellington, KY', '2 · 1 bed', 'Featured'],
              ['Hemlock & Pines', 'Frenchburg, KY', '2 · 1 bed', 'New'],
            ]}
            note="The collection as listed on the live site (October 2026). The cabin photos are shown at the top of this page."
          />
          <PointList
            items={[
              { title: 'Every cabin in one place', text: 'Four properties across Wellington and Frenchburg, each with a photo, location, guest count and bed count.' },
              { title: 'Featured and New badges', text: 'Badges point guests to the standout and the newest cabins first.' },
              { title: 'A page and a URL for each cabin', text: 'Every cabin has its own page, which gives search and ads a specific place to land.' },
              { title: 'A Book Now button that follows the guest', text: 'It stays in the header on every page, so the next step is always one click away.' },
            ]}
          />
        </div>
      ),
    },
    {
      id: 'cabin',
      label: 'Cabin pages',
      heading: 'Vacation rental booking calendar, amenities and guest information on each cabin page',
      intro: 'Each cabin page answers what a guest needs before reserving: what is included, what the rules are, and whether their dates are free. The booking calendar sits beside the content, so the decision and the action happen on the same screen.',
      content: (
        <div className="cs-stack-grid">
          <BrowserFrame
            url="hemlockreserve.com/cabins/hemlock-jades"
            src={`${IMG}/cabin-page.webp`}
            width={1200}
            height={834}
            alt="A Hemlock Reserve cabin page: a guest access notice and a Curated Amenities grid with icons for WiFi, ethernet connection, dedicated workspace, kitchen, refrigerator, microwave, cooking basics, dishes and silverware, stove, oven, coffee maker and toaster, beside an October 2026 availability calendar with a guests selector set to 2 adults and a Reserve button"
            caption="A cabin page with the amenities grid and the booking calendar."
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
          <PointList
            columns={2}
            items={[
              { title: 'Availability calendar and guest selector', text: 'Guests choose dates and the number of adults, then press Reserve. Dates that cannot be booked are crossed out, and pricing appears once dates are selected.' },
              { title: 'A curated amenities grid', text: 'Icons and short labels for WiFi, workspace, kitchen and more make a long list quick to scan.' },
              { title: 'Guest access and safety notice', text: 'Parking, the fire pit and a clear warning about cliff drop-offs are on the page, so guests read them before they book.' },
              { title: 'Sleeping arrangements and a feature summary', text: 'The page opens with what the cabin is, who it sleeps and how it is set up.' },
            ]}
          />
        </div>
      ),
    },
    {
      id: 'location',
      label: 'Location and privacy',
      heading: 'Vacation rental location privacy: an area map for guests, with the exact address shared after booking',
      intro: 'Guests want to know where a cabin is before they commit, and owners want their seclusion protected. Each cabin page has a "Where you\'ll be" map for the area, with a clear note that the exact location is provided after booking.',
      content: (
        <div className="cs-stack-grid">
          <BrowserFrame
            url="hemlockreserve.com/cabins/hemlock-jades"
            src={`${IMG}/map.webp`}
            width={1200}
            height={744}
            alt="The Where you'll be section of a Hemlock Reserve cabin page: a grayscale Google map of the Wellington, Kentucky area with a pin, an Open in Maps button and directions button, and the note Exact location provided after booking, we protect the privacy of our guests and the seclusion of our properties"
            caption="An embedded map, styled to match the dark theme, with the privacy note beneath it."
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
          <ChangeCards
            items={[
              { icon: 'pin', title: 'An embedded area map', text: 'A Google map shows the town and surroundings, with Open in Maps and directions controls.' },
              { icon: 'lock', title: 'Exact address after booking', text: 'The page states that the exact location is shared once a stay is booked.' },
              { icon: 'dial', title: 'Local context for search', text: 'The site\'s description names Red River Gorge and Cave Run Lake, the places guests actually search for.' },
            ]}
          />
        </div>
      ),
    },
    {
      id: 'story',
      label: 'Brand story',
      heading: 'A luxury cabin rental brand built on a founders\' story and an adults-only couples promise',
      intro: 'A direct booking site has to give guests a reason to choose it over a marketplace. Hemlock Reserve\'s reason is its story: a retreat created by Eric and Audra Thomas for couples to disconnect from the noise and reconnect with each other.',
      content: (
        <div className="cs-stack-grid">
          <BrowserFrame
            src={`${IMG}/founders.webp`}
            width={1200}
            height={626}
            alt="The founders section of the Hemlock Reserve site: the heading Eric and Audra Thomas with a short story about creating a sanctuary for couples, beside a photo of Eric and Audra smiling at each other in winter jackets in a sandstone slot canyon"
            caption="The founders' story on the live site."
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
          <PointList
            columns={2}
            items={[
              { title: 'The founders, by name and face', text: 'Eric and Audra Thomas introduce the place in their own words, which builds trust that a marketplace listing cannot.' },
              { title: 'One clear audience', text: 'The home page leads with "Rediscover Each Other" and an adults-only sanctuary for married couples.' },
              { title: 'A collection with a theme', text: 'The cabins carry gemstone names, Jades, Jasper and Sapphire, grouped under "Our Jewels" on the home page.' },
              { title: 'Pages that support the decision', text: 'Experience, Reviews, Journal, Our Mission and FAQ pages sit in the main menu.' },
            ]}
          />
        </div>
      ),
    },
    {
      id: 'journey',
      label: 'The booking journey',
      heading: 'From local ad or search to a direct booking in five steps',
      intro: 'The website gives every route into the business the same path. Whether a guest arrives from a search, a social post or an ad, they land on a cabin, check dates and reserve.',
      content: (
        <>
          <Journey
            ariaLabel="Guest journey from first click to direct booking"
            steps={[
              { small: 'Ad or search', text: 'Local ads, Google or social' },
              { small: 'Collection', text: 'Compare every cabin' },
              { small: 'Cabin page', text: 'Amenities, rules, map' },
              { small: 'Calendar', text: 'Dates and guests' },
              { small: 'Reserve', text: 'A direct booking' },
            ]}
          />
          <p className="note">Illustration of the intended journey. Ads are an option the owner can use; the site is built so they have a destination.</p>
        </>
      ),
    },
  ],

  changes: {
    label: 'Key deliverables',
    heading: 'What Hemlock Reserve received: a direct booking channel of its own',
    items: [
      { icon: 'calendar', title: 'A booking channel of its own', text: 'A branded website with availability calendars, so guests can reserve without going through a marketplace.' },
      { icon: 'grid', title: 'Every property together', text: 'One collection and one page per cabin, ready to take new properties as the portfolio grows.' },
      { icon: 'megaphone', title: 'A place to send ads', text: 'Landing destinations for local campaigns, so the owner can choose not to depend on Airbnb for every booking.' },
    ],
  },

  methods: {
    label: 'Platforms and site structure',
    heading: 'What is on the site and the tools behind it',
    items: [
      { title: 'GoHighLevel', text: 'The platform the website is built on' },
      { title: 'Booking calendar', text: 'An embedded availability and reservation widget on cabin pages' },
      { title: 'Google Maps', text: 'Embedded area map on each cabin page' },
      { title: 'Main pages', text: 'Cabins, Experience, Reviews, Journal, Our Mission, FAQ and Book' },
      { title: 'Legal pages', text: 'Privacy policy, terms of service and refund policy' },
      { title: 'Mailing list and social', text: 'A subscribe option and links to Facebook, Instagram and YouTube' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'Direct booking websites for vacation rental owners who want a channel beyond Airbnb',
    versus: {
      before: { title: 'Stays as it is', visual: <Checklist items={['Airbnb listings, side by side', 'Existing guests and reviews', 'Marketplace reach']} /> },
      after: { title: 'Added by the website', visual: <Checklist tone="coral" items={['A brand and booking channel the owner controls', 'A destination for local ads', 'A story guests can trust']} /> },
    },
    body: 'This approach suits owners with several cabins, villas or apartments who already rent through a marketplace and want extra bookings under their own brand.',
    fit: ['Multi-property rental owners', 'Boutique and niche stays', 'Owners planning local ads'],
  },

  about: {
    heading: 'Delivered by Sage Kite for Hemlock Reserve',
    text: 'Hemlock Reserve is a Sage Kite client. We built its website on GoHighLevel so the owner could list every property in one place and take direct bookings alongside Airbnb. The pattern suits any rental business that wants a brand and booking channel of its own.',
  },

  cta: {
    heading: 'Own several rental properties and want guests to book direct?',
    text: 'Book a discovery call and we\'ll look at how a direct booking website could sit alongside your marketplace listings.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
