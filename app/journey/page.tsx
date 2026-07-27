import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
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

      <main className="bg-background pb-10">
        <JourneyHero />

        {/* Massive 3D Box Wrapping All Journey Sections */}
        <section className="pt-0 pb-16">
          <Container>
            <div className="flex flex-col gap-16 rounded-[36px] border border-black/[0.02] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:gap-24 lg:p-12">
              <JourneyStory />
              <Timeline />
              <Lessons />
              <WhatsNext />
            </div>
          </Container>
        </section>

        <SharedNewsletter />
      </main>

      <QuoteDivider quote="one step at a time." />
      <Footer />
    </>
  );
}
