import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-8">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="z-10 pt-10">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              About
            </h1>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 text-[32px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
              Building a life of curiosity,
              <br />
              creativity,
              <br />
              and continuous learning.
            </p>

            <div className="text-primary bg-primary/5 inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium">
              <span className="font-signature mr-2 text-[20px]">♡</span>
              Always learning. Always becoming.
            </div>
          </div>
          {/* Right Image */}
          <div className="relative hidden h-[400px] w-full overflow-hidden lg:block">
            <Image
              src="/images/journey/journey-hero.jpg"
              alt="Workspace"
              fill
              className="object-cover object-left"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 30%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 30%)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
