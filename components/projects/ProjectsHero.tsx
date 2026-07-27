import Container from '@/components/layout/Container';
import Image from 'next/image';
import Button from '@/components/ui/button';

export default function ProjectsHero() {
  return (
    <section className="bg-background pt-16 pb-16">
      <Container>
        <div className="relative grid items-center gap-12 py-10 lg:grid-cols-2 lg:py-16">
          {/* Right Image Background (Constrained to Container bounds) */}
          <div className="absolute top-0 right-0 bottom-0 z-0 w-full overflow-hidden rounded-3xl bg-[#F2EBE1] lg:w-[55%]">
            <Image
              src="/images/projects/projects-hero.png"
              alt="Workspace setup"
              fill
              priority
              className="object-cover object-center opacity-95 mix-blend-multiply"
            />
            {/* Gradient Mask to fade it into background smoothly on the left side */}
            <div className="from-background via-background/80 absolute inset-0 hidden w-[50%] bg-gradient-to-r to-transparent lg:block" />
          </div>

          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="font-heading text-[72px] leading-none tracking-[-0.03em] text-[#1D1B18] sm:text-[84px] lg:text-[96px]">
              Projects
            </h1>

            {/* Decorative Line */}
            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 max-w-[360px] text-[32px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
              A collection of ideas,
              <br />
              experiments,
              <br />
              and products I've built.
            </p>

            <Button className="h-14 rounded-xl border-none bg-[#B092C5] px-8 text-[16px] font-medium text-white shadow-sm transition-colors hover:bg-[#A388B9]">
              Explore Projects <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
