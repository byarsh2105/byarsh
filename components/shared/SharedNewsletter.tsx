import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function SharedNewsletter() {
  return (
    <section className="py-8 pb-20">
      <Container>
        <div className="border-border/40 relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] border bg-[#FAF7F2] px-8 py-10 lg:flex-row">
          <div className="z-10 flex w-full items-center gap-6 lg:w-auto">
            <div className="bg-primary/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
              <Mail className="text-primary/70" size={28} strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="font-heading text-foreground mb-1 text-[24px] font-semibold">
                Let's grow together.
              </h2>
              <p className="text-foreground/80 max-w-[340px] text-[14px]">
                Reflections, lessons, and updates from the journey — straight to
                your inbox.
              </p>
            </div>
          </div>

          <div className="z-10 flex w-full flex-col items-center gap-4 pr-8 sm:flex-row lg:w-auto">
            <div className="w-full sm:w-[280px]">
              <input
                type="email"
                placeholder="Your email address"
                className="border-border focus:border-primary/50 h-12 w-full rounded-xl border bg-white/60 px-5 text-[14px] transition-colors outline-none"
              />
            </div>
            <Button className="bg-primary/70 hover:bg-primary/80 h-12 w-full rounded-xl px-8 text-[14px] font-medium transition-colors sm:w-auto">
              Join the Journey <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Right Decorative Plant */}
          <div className="absolute right-6 bottom-4 hidden opacity-70 md:block">
            <svg
              width="60"
              height="80"
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
        </div>
      </Container>
    </section>
  );
}
