import Header from '@/components/layout/Header';
import JournalHero from '@/components/journal/JournalHero';
import NoteFromArsh from '@/components/journal/NoteFromArsh';
import JournalContentWrapper from '@/components/journal/JournalContentWrapper';
import StayInTouch from '@/components/journal/StayInTouch';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

export default function JournalPage() {
  return (
    <>
      <Header />

      <main>
        <JournalHero />
        <NoteFromArsh />
        <JournalContentWrapper />
        <StayInTouch />
      </main>

      <QuoteDivider quote="chaos is part of the process" />
      <Footer />
    </>
  );
}
