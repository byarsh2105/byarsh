import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function CurrentlyReading() {
  return (
    <section className="py-16">
      <Container>
        {/* Header */}
        <div className="border-border/50 mb-8 flex items-center justify-between border-b pb-4">
          <h2 className="font-heading text-foreground text-[28px] font-semibold">
            Currently Reading
          </h2>
          <Link
            href="/library/currently-reading"
            className="text-primary/80 hover:text-primary flex items-center gap-2 text-[14px] font-medium transition-colors"
          >
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: Book */}
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-[#FAF7F2] p-8 md:flex-row md:items-start">
            <div className="relative h-[260px] w-[180px] shrink-0 overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/library/atomic-habits.jpg"
                alt="Atomic Habits Cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 pt-2">
              <h3 className="font-heading text-foreground mb-1 text-[28px]">
                Atomic Habits
              </h3>
              <p className="text-muted-foreground mb-6 text-[16px]">
                James Clear
              </p>

              {/* Progress */}
              <div className="mb-6">
                <div className="text-primary/80 mb-2 flex justify-between text-[13px] font-medium">
                  <span>45%</span>
                  <span className="text-muted-foreground">In Progress</span>
                </div>
                <div className="bg-border h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-primary/60 h-full w-[45%] rounded-full"></div>
                </div>
              </div>

              <p className="text-foreground/80 mb-6 text-[14px] leading-[1.6]">
                A practical guide to building good habits, breaking bad ones,
                and mastering the tiny behaviors that lead to remarkable
                results.
              </p>

              <button className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-medium transition-colors">
                Continue Reading ↗
              </button>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[#FAF7F2] p-10">
            <div className="text-primary/30 absolute top-6 left-8 font-serif text-[80px] leading-none">
              “
            </div>

            <div className="relative z-10 mt-12 pl-6">
              <p className="font-heading text-foreground mb-6 max-w-[280px] text-[28px] leading-[1.3]">
                A book is a dream that you hold in your hands.
              </p>
              <p className="text-muted-foreground flex items-center gap-3 text-[16px]">
                <span className="bg-muted-foreground h-[1px] w-4"></span>
                Neil Gaiman
              </p>
            </div>

            {/* Decorative Branch */}
            <div className="absolute right-4 bottom-4 opacity-50">
              <svg
                width="80"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-12"
              >
                <path d="M12 22s-2-8 3-12c3-2 8-4 12-4" />
                <path d="M16 14c2 3 6 3 8-1" />
                <path d="M22 10c2 3 6 3 8-1" />
                <path d="M14 20c2 3 6 3 8-1" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
