import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import JournalSection from '@/components/home/JournalSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProjectsLibrarySection from '@/components/home/ProjectsLibrarySection';
import JourneySection from '@/components/home/JourneySection';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/layout/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to ByArsh—a calm digital journal where stories, books, poetry, technology, travel, and thoughtful ideas come together.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JournalSection />
        <PhilosophySection />
        <ProjectsLibrarySection />
        <JourneySection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
