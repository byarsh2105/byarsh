import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { latestArticlesSection } from '@/src/content/journal';
import ViewCounter from './article/ViewCounter';

interface Article {
  slug: string;
  category: string;
  title: string;
  readingTime: string;
  publishedDate: string;
  image: { src: string; alt: string };
}

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  const { title, button } = latestArticlesSection;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById('latest-articles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="latest-articles" className="scroll-mt-24 py-12">
      <Container>
        <div className="border-border mb-10 flex flex-col items-start justify-between gap-4 border-t pt-10 sm:flex-row sm:items-end">
          <h2 className="font-heading text-foreground text-[36px] sm:text-[42px]">
            {title}
          </h2>
          <a
            href="#latest-articles"
            onClick={handleScroll}
            className="text-primary hover:text-primary/80 flex shrink-0 cursor-pointer items-center gap-2 font-medium transition-colors"
          >
            {button.text}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group block"
            >
              <div className="bg-muted relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-primary mb-3 text-[13px] font-bold tracking-widest uppercase">
                {article.category}
              </p>
              <h3 className="font-heading text-foreground group-hover:text-primary mb-4 text-[28px] leading-tight transition-colors">
                {article.title}
              </h3>
              <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px]">
                <span className="shrink-0">{article.readingTime}</span>
                <span className="bg-border h-1 w-1 shrink-0 rounded-full" />
                <span className="shrink-0">{article.publishedDate}</span>
                <span className="bg-border h-1 w-1 shrink-0 rounded-full" />
                <div className="shrink-0">
                  <ViewCounter slug={article.slug} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
