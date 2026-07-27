import Container from '@/components/layout/Container';

export default function ContactSignoff() {
  return (
    <section className="relative overflow-hidden py-12 pb-24">
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="text-primary/30 mb-4 font-serif text-[60px] leading-none">
            “
          </div>

          <h2 className="font-heading text-foreground mb-6 text-[22px] leading-[1.4] font-medium sm:text-[26px]">
            Thanks for stopping by.
            <br />
            I hope this little corner of the internet
            <br />
            made your day a little better.
          </h2>

          <div className="text-primary mb-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>

          <div className="mb-12">
            <span className="text-muted-foreground mr-2">—</span>
            <span className="font-signature text-primary/80 text-[32px] lowercase italic">
              Arsh
            </span>
          </div>

          <div className="flex w-full max-w-[700px] items-center gap-6">
            <div className="border-border/80 h-[1px] flex-1 border-b border-dotted"></div>
            <span className="font-signature text-primary/80 pt-2 text-[36px] whitespace-nowrap lowercase italic">
              See you soon.
            </span>
            <div className="border-border/80 h-[1px] flex-1 border-b border-dotted"></div>
          </div>

          <div className="text-primary mt-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>

        {/* Decorative Branch Right */}
        <div className="absolute right-[5%] bottom-16 z-0 hidden opacity-50 md:block">
          <svg
            width="80"
            height="110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
            <path d="M9 13c1 2 4 2 5-1" />
            <path d="M13 10c1 2 4 2 5-1" />
            <path d="M15 7c1 2 4 2 5-1" />
            <path d="M6 18c1 2 4 2 5-1" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
