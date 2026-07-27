import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestArticles() {
  const articles = [
    {
      title: 'The Feel-Good Books I Keep Coming Back To',
      category: 'BOOKS',
      readTime: '6 min read',
      date: 'July 18, 2026',
      image: '/images/journal/article-1.jpg',
      href: '/journal/the-feel-good-books',
    },
    {
      title: "A Slow Morning in Udaipur I'll Never Forget",
      category: 'TRAVEL',
      readTime: '7 min read',
      date: 'July 15, 2026',
      image: '/images/journal/article-2.jpg',
      href: '/journal/a-slow-morning-in-udaipur',
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="border-border mb-10 flex items-end justify-between border-t pt-10">
          <h2 className="font-heading text-foreground text-[42px]">
            Latest Articles
          </h2>
          <Link
            href="/journal"
            className="text-primary hover:text-primary/80 flex items-center gap-2 font-medium transition-colors"
          >
            View all articles
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
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block"
            >
              <div className="bg-muted relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
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
              <div className="text-muted-foreground flex items-center gap-3 text-[15px]">
                <span>{article.readTime}</span>
                <span className="bg-border h-1 w-1 rounded-full" />
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
