import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function LibraryHero() {
  return (
    <section className="bg-background pt-12 pb-8">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr]">
          {/* Left Content */}
          <div className="lg:pt-20">
            <h1 className="font-heading text-foreground text-[64px] leading-[1.05] tracking-[-0.03em] sm:text-[72px] lg:text-[84px]">
              Library
            </h1>

            <div className="mt-6 mb-8 h-[2px] w-8 rounded-full bg-[#B092C5]"></div>

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
          <div className="relative h-[720px] overflow-hidden rounded-[6px] bg-[#F2EBE1]">
            <Image
              src="/images/library/library-hero.png"
              alt="Books and Coffee"
              fill
              priority
              className="object-cover object-center opacity-95 mix-blend-multiply"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
