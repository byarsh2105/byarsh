import Header from '@/components/layout/Header';
import LibraryHero from '@/components/library/LibraryHero';
import CurrentlyReading from '@/components/library/CurrentlyReading';
import BookCollections from '@/components/library/BookCollections';
import LibraryQuoteBanner from '@/components/library/LibraryQuoteBanner';
import LibraryNewsletter from '@/components/library/LibraryNewsletter';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

export default function LibraryPage() {
  return (
    <>
      <Header />

      <main>
        <LibraryHero />
        <CurrentlyReading />
        <BookCollections />
        <LibraryQuoteBanner />
        <LibraryNewsletter />
      </main>

      <QuoteDivider quote="read. reflect. grow." />
      <Footer />
    </>
  );
}
