import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import JournalSection from '@/components/home/JournalSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProjectsLibrarySection from '@/components/home/ProjectsLibrarySection';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <JournalSection />
      <PhilosophySection />
      <ProjectsLibrarySection />
    </>
  );
}
