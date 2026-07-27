import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JourneyHero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden pt-12 pb-16">
      <Container>
        <div className="grid h-full items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="z-10 pt-10">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Journey
            </h1>

            <div className="mb-8 flex items-center gap-2">
              <div className="bg-primary/30 h-[1px] w-16"></div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70"
              >
                <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
                <path d="M9 13c1 2 4 2 5-1" />
                <path d="M13 10c1 2 4 2 5-1" />
                <path d="M15 7c1 2 4 2 5-1" />
                <path d="M6 18c1 2 4 2 5-1" />
              </svg>
            </div>

            <p className="text-foreground mb-10 max-w-[400px] text-[28px] leading-[1.3] tracking-[-0.01em]">
              Every chapter,
              <br />
              every challenge,
              <br />
              every lesson
              <br />
              has led me here.
            </p>

            <div className="text-primary bg-primary/5 inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium">
              <span className="font-signature mr-2 text-[20px]">♡</span>
              Still becoming.
            </div>
          </div>
        </div>
      </Container>

      {/* Right Image Background */}
      <div className="absolute top-0 right-0 z-0 h-full w-full opacity-90 lg:w-[65%] lg:opacity-100">
        <Image
          src="/images/journey/journey-hero.jpg"
          alt="Hiker looking over mountains"
          fill
          className="mask-image-to-r object-cover object-right"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 40%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 40%)',
          }}
        />
      </div>
    </section>
  );
}
