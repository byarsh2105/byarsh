import Header from '@/components/layout/Header';
import AboutHero from '@/components/about/AboutHero';
import MyStory from '@/components/about/MyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import WhatYouWillFind from '@/components/about/WhatYouWillFind';
import AboutFooterCards from '@/components/about/AboutFooterCards';
import SharedNewsletter from '@/components/shared/SharedNewsletter';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pb-10">
        <AboutHero />
        <MyStory />
        <MissionVision />
        <CoreValues />
        <WhatYouWillFind />
        <AboutFooterCards />
        <SharedNewsletter />
      </main>

      <QuoteDivider quote="read. reflect. grow." />
      <Footer />
    </>
  );
}
