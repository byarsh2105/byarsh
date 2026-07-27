import Container from '@/components/layout/Container';
import Image from 'next/image';
import Button from '@/components/ui/button';

export default function ProjectsHero() {
  return (
    <section className="bg-background relative pt-24 pb-20">
      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[520px_1fr]">
          {/* Left Content */}
          <div className="pt-10">
            <h1 className="font-heading mb-4 text-[72px] leading-none tracking-[-0.03em] text-[#1D1B18] sm:text-[84px] lg:text-[96px]">
              Projects
            </h1>

            {/* Decorative Line */}
            <div className="mb-8 flex items-center">
              <div className="h-[1px] w-32 bg-[#B092C5]"></div>
              <Image
                src="/images/decor/pp.png"
                alt="Leaf"
                width={32}
                height={32}
                className="object-contain opacity-80"
              />
            </div>

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

          {/* Right Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-[8px] shadow-sm lg:h-[600px]">
            <Image
              src="/images/projects/projects-hero.png"
              alt="Workspace setup"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
