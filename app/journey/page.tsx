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

      <main className="bg-background pb-0">
        <JourneyHero />

        {/* Massive 3D Box Wrapping All Journey Sections */}
        <section className="pt-0 pb-8">
          <Container>
            <div className="flex flex-col gap-10 rounded-[36px] border border-[#F2EBE1] bg-[#FCFAFA] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] lg:gap-12 lg:p-12">
              <JourneyStory />
              <div className="-my-5 h-[1px] w-full bg-black/[0.1] lg:-my-6"></div>
              <Timeline />
              <div className="-my-5 h-[1px] w-full bg-black/[0.1] lg:-my-6"></div>
              <Lessons />
              <div className="-my-5 h-[1px] w-full bg-black/[0.1] lg:-my-6"></div>
              <WhatsNext />
              <SharedNewsletter noContainer={true} />
            </div>
          </Container>
        </section>
      </main>

      <QuoteDivider quote="one step at a time." />
      <Footer />
    </>
  );
}
