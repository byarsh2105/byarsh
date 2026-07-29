import Link from 'next/link';
import Container from '@/components/layout/Container';
import ViewCounter from './ViewCounter';

interface ArticleHeroProps {
  post: any;
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <Container>
      <div className="mx-auto max-w-[1000px]">
        {/* Breadcrumbs */}
        <nav className="text-muted-foreground mb-8 flex items-center gap-2 text-[14px]">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link
            href="/journal"
            className="hover:text-primary transition-colors"
          >
            Journal
          </Link>
          <span>›</span>
          <span className="text-primary">{post.category}</span>
        </nav>

        {/* Category Tag */}
        <div className="text-primary mb-4 flex items-center gap-2 text-[13px] font-bold tracking-widest uppercase">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          {post.category}
        </div>

        {/* Title */}
        <h1 className="font-heading text-foreground mb-6 max-w-[800px] text-[48px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] md:text-[64px]">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-foreground/80 mb-8 max-w-[640px] text-[18px] leading-[1.7] md:text-[20px]">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
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
            <span>{post.date}</span>
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{post.readingTime}</span>
          </div>
          <span className="bg-border h-1 w-1 shrink-0 rounded-full" />
          <div className="shrink-0">
            <ViewCounter slug={post._meta?.path || post.slug} />
          </div>
        </div>
      </div>
    </Container>
  );
}
