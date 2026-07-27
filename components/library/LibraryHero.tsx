import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function LibraryHero() {
  return (
    <section className="relative bg-[#F2EBE1] pt-16 pb-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="pt-10">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Library
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

            <p className="text-foreground mb-10 max-w-[340px] text-[28px] leading-[1.3] tracking-[-0.01em]">
              Books that have shaped the way I think, create, and see the world.
            </p>

            <div className="text-primary bg-primary/5 inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium">
              <span className="font-signature mr-2 text-[20px]">♡</span>
              Every book leaves a mark.
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[480px] w-full overflow-hidden mix-blend-multiply">
            <Image
              src="/images/library/library-hero.png"
              alt="Books and Coffee"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </Container>

      {/* Scallop bottom border */}
      <div className="absolute right-0 bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[24px] w-[200%] lg:h-[30px] lg:w-full"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            d="M0,20 C30,20 30,0 60,0 C90,0 90,20 120,20 C150,20 150,0 180,0 C210,0 210,20 240,20 C270,20 270,0 300,0 C330,0 330,20 360,20 C390,20 390,0 420,0 C450,0 450,20 480,20 C510,20 510,0 540,0 C570,0 570,20 600,20 C630,20 630,0 660,0 C690,0 690,20 720,20 C750,20 750,0 780,0 C810,0 810,20 840,20 C870,20 870,0 900,0 C930,0 930,20 960,20 C990,20 990,0 1020,0 C1050,0 1050,20 1080,20 C1110,20 1110,0 1140,0 C1170,0 1170,20 1200,20 L1200,20 L1200,20 L0,20 Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
