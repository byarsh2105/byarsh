import Header from '@/components/layout/Header';
import AboutHero from '@/components/about/AboutHero';
import MyStory from '@/components/about/MyStory';
import CombinedMissionValues from '@/components/about/CombinedMissionValues';
import AboutFooterCards from '@/components/about/AboutFooterCards';
import SharedNewsletter from '@/components/shared/SharedNewsletter';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Arsh and the philosophy behind ByArsh.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pb-0">
        <AboutHero />
        <MyStory />
        <CombinedMissionValues />
        <AboutFooterCards />
        <SharedNewsletter />
      </main>

      <QuoteDivider quote="read. reflect. grow." />
      <Footer />
    </>
  );
}
