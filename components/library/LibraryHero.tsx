import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function LibraryHero() {
  return (
    <section className="bg-background pt-16 pb-16">
      <Container>
        <div className="flex flex-col gap-12 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          {/* Left Content */}
          <div className="pt-4 lg:w-[380px] lg:shrink-0">
            <h1 className="font-heading text-foreground text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Library
            </h1>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading text-foreground mb-10 text-[34px] leading-[1.3] font-medium tracking-[-0.01em]">
              Books that have shaped <br />
              the way I think,
              <br /> create, <br />
              and see the world.
            </p>

            <div className="text-primary bg-primary/5 inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium">
              <span className="font-signature mr-2 text-[20px]">♡</span>
              Every book leaves a mark.
            </div>
          </div>

          {/* Right Image (Portrait) */}
          <div className="relative w-full lg:max-w-[760px]">
            <div className="relative aspect-[15/16] w-full overflow-hidden rounded-3xl bg-[#F2EBE1]">
              <Image
                src="/images/library/library-hero.png"
                alt="Books and Coffee"
                fill
                priority
                className="object-cover object-center opacity-95 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
