import Container from '@/components/layout/Container';
import JournalCard from './JournalCard';
import { journalPosts } from '@/constants/journal';

export default function JournalSection() {
  return (
    <section className="pt-4 pb-8 lg:pt-8 lg:pb-12">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-heading text-[56px] leading-none tracking-[-0.02em]">
            Latest from the Journal
          </h2>

          <p className="mt-6 max-w-[450px] text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
            Stories, ideas, and reflections from life and work.
          </p>

          <div className="mt-7 flex justify-center">
            <span className="text-primary mb-1 inline-block text-2xl">✦</span>
          </div>
        </div>

        {/* Journal Cards */}

        <div className="grid gap-8 lg:grid-cols-4">
          {journalPosts.map((post) => (
            <JournalCard
              key={post.id}
              category={post.category}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
            />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-8 flex justify-center">
          <button className="text-primary inline-flex items-center gap-2 text-[16px] leading-[1.9] font-normal tracking-[0.005em] transition-all duration-300 hover:gap-3">
            View all articles
            <span>→</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
