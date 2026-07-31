import Header from '@/components/layout/Header';
import LibraryHero from '@/components/library/LibraryHero';
import CurrentlyReading from '@/components/library/CurrentlyReading';
import BookCollections from '@/components/library/BookCollections';
import LibraryQuoteBanner from '@/components/library/LibraryQuoteBanner';
import LibraryNewsletter from '@/components/library/LibraryNewsletter';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Books that inspire and shape my journey.',
};

export default function LibraryPage() {
  return (
    <>
      <Header />

      <main className="bg-background">
        <LibraryHero />

        {/* Massive 3D Box Wrapping Both Sections */}
        <section className="pt-0">
          <Container>
            <div className="rounded-[24px] border border-black/[0.02] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8 md:rounded-[36px] lg:p-12">
              <CurrentlyReading />

              {/* Light separator line */}
              <div className="my-10 h-[1px] w-full bg-black/5"></div>

              <div>
                <BookCollections />
              </div>

              <div className="mt-16">
                <LibraryQuoteBanner />
              </div>

              <div className="mt-8">
                <LibraryNewsletter />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <QuoteDivider quote="read. reflect. grow." />
      <Footer />
    </>
  );
}
