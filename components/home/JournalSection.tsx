import Container from '@/components/layout/Container';
import JournalCard from './JournalCard';
import { journalPosts } from '@/constants/journal';

export default function JournalSection() {
  return (
    <section className="py-32">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="font-heading text-[56px] leading-none tracking-[-0.02em]">
            Latest from the Journal
          </h2>

          <p className="font-heading text-muted-foreground mt-5 text-[22px]">
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

        <div className="mt-16 flex justify-center">
          <button className="text-primary inline-flex items-center gap-2 text-[17px] font-medium transition-all duration-300 hover:gap-3">
            View all articles
            <span>→</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
