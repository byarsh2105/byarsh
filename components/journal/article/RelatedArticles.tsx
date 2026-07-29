import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  slug: string;
  category: string;
  title: string;
  readingTime?: string;
  date: string;
  image?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-8">
            <span className="font-heading text-foreground flex items-center gap-2 text-[24px]">
              You may also enjoy{' '}
              <span className="text-primary text-[28px] leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group border-border bg-card hover:bg-muted/50 flex items-center gap-4 rounded-2xl border p-4 transition-colors md:gap-6"
              >
                {article.image && (
                  <div className="bg-muted relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:h-28 md:w-28">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-heading text-foreground group-hover:text-primary mb-2 line-clamp-2 text-[20px] leading-tight transition-colors md:text-[22px]">
                    {article.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center gap-3 text-[13px] font-medium">
                    <span>{article.date}</span>
                    {article.readingTime && (
                      <>
                        <span className="bg-border h-1 w-1 rounded-full" />
                        <span>{article.readingTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
