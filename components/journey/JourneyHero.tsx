import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JourneyHero() {
  return (
    <section className="bg-background pt-16 pb-16">
      <Container>
        <div className="relative grid items-center gap-12 py-10 lg:grid-cols-2 lg:py-16">
          {/* Right Image Background (Constrained to Container bounds) */}
          <div className="absolute top-0 right-0 bottom-0 z-0 w-full overflow-hidden rounded-3xl bg-[#E6D8EF] lg:w-[55%]">
            <Image
              src="/images/journey/journey-hero.jpg"
              alt="Hiker looking over mountains"
              fill
              priority
              className="object-cover object-center opacity-90 mix-blend-multiply"
            />
            {/* Gradient Mask to fade it into background smoothly on the left side */}
            <div className="from-background via-background/80 absolute inset-0 hidden w-[50%] bg-gradient-to-r to-transparent lg:block" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 pt-4">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Journey
            </h1>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 max-w-[360px] text-[32px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
              Every chapter,
              <br />
              every challenge,
              <br />
              every lesson
              <br />
              has led me here.
            </p>

            <div className="-ml-5 inline-flex items-center rounded-full bg-[#DBC4E6] px-5 py-2.5 text-[15px] font-medium text-[#8E69AB]">
              <span className="mr-3 text-[18px]">♡</span>
              Still becoming.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
