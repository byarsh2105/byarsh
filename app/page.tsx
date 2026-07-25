import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import JournalSection from '@/components/home/JournalSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProjectsLibrarySection from '@/components/home/ProjectsLibrarySection';
import JourneySection from '@/components/home/JourneySection';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <JournalSection />
      <PhilosophySection />
      <ProjectsLibrarySection />
      <JourneySection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
