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
import { FinalCTA } from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
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
