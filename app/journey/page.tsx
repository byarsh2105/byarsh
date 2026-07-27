import Header from '@/components/layout/Header';
import JourneyHero from '@/components/journey/JourneyHero';
import JourneyStory from '@/components/journey/JourneyStory';
import Timeline from '@/components/journey/Timeline';
import Lessons from '@/components/journey/Lessons';
import WhatsNext from '@/components/journey/WhatsNext';
import SharedNewsletter from '@/components/shared/SharedNewsletter';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

export default function JourneyPage() {
  return (
    <>
      <Header />

      <main className="pb-10">
        <JourneyHero />
        <JourneyStory />
        <Timeline />
        <Lessons />
        <WhatsNext />
        <SharedNewsletter />
      </main>

      <QuoteDivider quote="one step at a time." />
      <Footer />
    </>
  );
}
