import Container from '@/components/layout/Container';
import JournalCard from './JournalCard';
import { journalPosts } from '@/src/content/journal';
import { site } from '@/src/content/site';
import Link from 'next/link';

export default function JournalSection() {
  const { latestJournal } = site;

  return (
    <section className="pt-4 pb-8 lg:pt-8 lg:pb-12">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-heading text-[56px] leading-none tracking-[-0.02em]">
            {latestJournal.title}
          </h2>

          <p className="mt-6 max-w-[450px] text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
            {latestJournal.description}
          </p>

          <div className="mt-7 flex justify-center">
            <span className="text-primary mb-1 inline-block text-2xl">✦</span>
          </div>
        </div>

        {/* Journal Cards */}

        <div className="grid gap-8 lg:grid-cols-4">
          {journalPosts
            .filter((post) => post.featured && post.published)
            .map((post) => (
              <JournalCard
                key={post.slug}
                category={post.category}
                title={post.title}
                date={post.publishedDate}
                readTime={post.readingTime}
                image={post.image.src}
                href={`/journal/${post.slug}`}
              />
            ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-8 flex justify-center">
          <Link href={latestJournal.button.href}>
            <button className="text-primary inline-flex items-center gap-2 text-[16px] leading-[1.9] font-normal tracking-[0.005em] transition-all duration-300 hover:gap-3">
              {latestJournal.button.text}
              <span>→</span>
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
