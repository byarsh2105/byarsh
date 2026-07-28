import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JourneyHero() {
  return (
    <section className="bg-background pt-16 pb-4 lg:pb-8">
      <Container>
        <div className="flex flex-col gap-12 pt-10 pb-4 lg:flex-row lg:items-center lg:justify-between lg:pt-16 lg:pb-8">
          {/* Left Content */}
          <div className="relative z-10 pt-4 lg:w-[460px] lg:shrink-0">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Journey
            </h1>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 text-[32px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
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

          {/* Right Wide Cinematic Image */}
          <div className="relative w-full lg:max-w-[760px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-[#E6D8EF] shadow-2xl md:aspect-[16/9]">
              <Image
                src="/images/journey/journey-hero.jpg"
                alt="Hiker looking over mountains"
                fill
                priority
                className="object-cover object-center opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
