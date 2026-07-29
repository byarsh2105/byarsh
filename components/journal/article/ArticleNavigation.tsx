import Link from 'next/link';
import Image from 'next/image';

interface ArticlePreview {
  title: string;
  slug: string;
  image?: string;
}

interface ArticleNavigationProps {
  prev: ArticlePreview | null;
  next: ArticlePreview | null;
}

export default function ArticleNavigation({
  prev,
  next,
}: ArticleNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="border-border mx-auto mt-16 max-w-[800px] rounded-2xl border bg-[#faf8f5]/50 p-6 md:p-8">
      <div className="md:divide-border grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 md:divide-x">
        {/* Previous */}
        <div className="flex flex-col justify-center">
          {prev ? (
            <Link
              href={`/journal/${prev.slug}`}
              className="group flex items-center gap-4"
            >
              {prev.image && (
                <div className="bg-muted relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={prev.image}
                    alt={prev.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div>
                <span className="text-muted-foreground mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase">
                  <span>←</span> Previous Article
                </span>
                <span className="font-heading text-foreground group-hover:text-primary line-clamp-2 text-[18px] leading-tight transition-colors">
                  {prev.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Next */}
        <div className="flex flex-col justify-center md:pl-8">
          {next && (
            <Link
              href={`/journal/${next.slug}`}
              className="group flex items-center justify-end gap-4 text-right"
            >
              <div>
                <span className="text-muted-foreground mb-2 flex items-center justify-end gap-2 text-[12px] font-medium tracking-wide uppercase">
                  Next Article <span>→</span>
                </span>
                <span className="font-heading text-foreground group-hover:text-primary line-clamp-2 text-[18px] leading-tight transition-colors">
                  {next.title}
                </span>
              </div>
              {next.image && (
                <div className="bg-muted relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
