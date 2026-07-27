import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function StayConnected() {
  return (
    <section className="py-8">
      <Container>
        <div className="border-border/20 relative flex min-h-[220px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] border bg-[#EBE2EE] p-8 shadow-sm md:flex-row lg:p-12">
          <div className="relative z-10 w-full max-w-[340px] lg:w-auto">
            <h2 className="font-heading text-foreground mb-4 text-[24px] font-semibold">
              Stay Connected
            </h2>
            <p className="text-foreground/80 mb-6 text-[14px] leading-[1.6]">
              Occasional thoughts, stories, and updates—straight to your inbox.
              Nothing spammy, I promise.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="border-border/40 focus:border-primary/50 h-[42px] w-full rounded-[8px] border bg-white/70 px-4 text-[13px] transition-colors outline-none sm:w-[240px]"
              />
              <Button className="bg-primary/60 hover:bg-primary/70 h-[42px] w-full rounded-[8px] px-6 text-[13px] font-medium transition-colors sm:w-auto">
                Subscribe ♡
              </Button>
            </div>
          </div>

          {/* Center Decorative Plant */}
          <div className="absolute top-1/2 left-[45%] z-10 hidden -translate-y-1/2 opacity-60 lg:block">
            <svg
              width="90"
              height="120"
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

          {/* Right Background Image Overlay */}
          <div className="absolute top-0 right-0 bottom-0 z-0 w-[45%] opacity-90">
            <Image
              src="/images/contact/vase.jpg"
              alt="Vase with flowers"
              fill
              className="mask-image-to-l object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 60%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 60%)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
