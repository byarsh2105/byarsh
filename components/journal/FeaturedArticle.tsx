import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { featuredArticle } from '@/src/content/journal';
import ViewCounter from './article/ViewCounter';

export default function FeaturedArticle() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-primary mb-4 text-[15px] font-bold tracking-widest uppercase">
              {featuredArticle.category}
            </p>

            <h2 className="font-heading text-foreground mb-6 text-[42px] leading-[1.1] tracking-[-0.02em]">
              {featuredArticle.title}
            </h2>

            <p className="text-foreground/80 mb-6 max-w-[440px] text-[19px] leading-[1.7]">
              {featuredArticle.excerpt}
            </p>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {featuredArticle.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/5 text-primary rounded-full px-3 py-1 text-[13px] font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-muted-foreground mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[16px]">
              <div className="flex shrink-0 items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{featuredArticle.readingTime}</span>
              </div>
              <span className="bg-border h-1 w-1 shrink-0 rounded-full" />
              <div className="flex shrink-0 items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>{featuredArticle.publishedDate}</span>
              </div>
              <span className="bg-border h-1 w-1 shrink-0 rounded-full" />
              <div className="shrink-0">
                <ViewCounter slug={featuredArticle.slug} />
              </div>
            </div>

            <Link
              href={`/journal/${featuredArticle.slug}`}
              className="text-primary border-primary/30 hover:border-primary inline-flex items-center gap-2 border-b pb-1 text-[19px] font-medium transition-colors"
            >
              {featuredArticle.button.text}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={featuredArticle.image.src}
              alt={featuredArticle.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
