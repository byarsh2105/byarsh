import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import JournalHero from '@/components/journal/JournalHero';

export default function JournalPage() {
  return (
    <>
      <Header />

      <main>
        <JournalHero />
      </main>

      <Footer />
    </>
  );
}
