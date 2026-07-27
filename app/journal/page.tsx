import Header from '@/components/layout/Header';
import JournalHero from '@/components/journal/JournalHero';
import NoteFromArsh from '@/components/journal/NoteFromArsh';
import CategoriesNav from '@/components/journal/CategoriesNav';
import FeaturedArticle from '@/components/journal/FeaturedArticle';
import LatestArticles from '@/components/journal/LatestArticles';
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
        <CategoriesNav />
        <FeaturedArticle />
        <LatestArticles />
        <StayInTouch />
      </main>

      <QuoteDivider quote="chaos is part of the process" />
      <Footer />
    </>
  );
}
