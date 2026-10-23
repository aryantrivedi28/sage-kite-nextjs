import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { Problem } from '../components/home/Problem';
import { GrowthOperations } from '../components/home/GrowthOperations';
import { Systems } from '../components/home/Systems';
import { Services } from '../components/home/Services';
import { HowItWorks } from '../components/home/HowItWorks';
import { SpecialistCapability } from '../components/home/SpecialistCapability';
import { MarketingEngine } from '../components/home/MarketingEngine';
import { PlatformsAndIndustries } from '../components/home/PlatformsAndIndustries';
import { Work } from '../components/home/Work';
import { Founder } from '../components/home/Founder';
import { Library } from '../components/home/Library';
import { Agency } from '../components/home/Agency';
import { FAQ } from '../components/home/FAQ';
import { HOME_FAQ_GROUPS } from '../components/home/faqData';
import { FinalCTA } from '../components/home/FinalCTA';
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/content/share-image';

export const metadata: Metadata = {
  title: 'Business Growth Consulting Services for SMEs | Sage Kite',
  description:
    'Sage Kite offers business growth consulting, CRM, marketing and specialist support to help small and medium-sized businesses improve processes and revenue.',
  keywords: ["Business Growth Consulting", "Business Consulting Services", "CRM Implementation Services", "Digital Marketing Services", "Business Growth Strategy", "Specialist Staffing Services", "White Label Services"],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: 'https://www.sagekite.com/',
    title: 'Business Growth Consulting for Growing SMEs | Sage Kite',
    description:
      'See how Sage Kite combines business growth consulting, CRM, marketing, and specialist support to help businesses improve operations and generate more revenue.',
    images: DEFAULT_OG_IMAGES,
  },
  // Same text as the root layout's twitter block except the title, which now matches the page title.
  // A page-level twitter block replaces the root one, so the rest is repeated here.
  twitter: {
    card: 'summary_large_image',
    title: 'Business Growth Consulting & Consultancy for SMEs | Sage Kite',
    description:
      'Sage Kite improves the systems, people and execution behind growth for small and medium-sized businesses.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.sagekite.com/#webpage',
      url: 'https://www.sagekite.com/',
      name: 'Business growth consulting for SMEs | Sage Kite',
      description:
        'Sage Kite is a business growth consultancy that improves the systems, people and execution behind growth.',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagekite.com/#faq',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/#organization' },
      inLanguage: 'en',
      mainEntity: HOME_FAQ_GROUPS.flatMap((group) => group.items).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <GrowthOperations />
        <Systems />
        <Services />
        <HowItWorks />
        <SpecialistCapability />
        <MarketingEngine />
        <PlatformsAndIndustries />
        <Work />
        <Founder />
        <Library />
        <Agency />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
