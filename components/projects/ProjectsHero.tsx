import Container from '@/components/layout/Container';
import Image from 'next/image';
import Button from '@/components/ui/button';
import Link from 'next/link';
import { projectsHero } from '@/src/content/projects';

export default function ProjectsHero() {
  return (
    <section className="bg-background pt-16 pb-16">
      <Container>
        <div className="relative grid items-center gap-12 py-10 lg:grid-cols-2 lg:py-16">
          {/* Right Image Background (Constrained to Container bounds) */}
          <div className="absolute top-0 right-0 bottom-0 z-0 w-full overflow-hidden rounded-3xl bg-[#F2EBE1] lg:w-[55%]">
            <Image
              src={projectsHero.image.src}
              alt={projectsHero.image.alt}
              fill
              priority
              className="object-cover object-center opacity-95 mix-blend-multiply"
            />
            {/* Gradient Mask to fade it into background smoothly on the left side */}
            <div className="from-background via-background/80 absolute inset-0 hidden w-[50%] bg-gradient-to-r to-transparent lg:block" />
          </div>

          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="font-heading text-foreground text-[52px] leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]">
              {projectsHero.title}
            </h1>

            {/* Decorative Line */}
            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 max-w-[360px] text-[28px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
              {projectsHero.subtitleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < projectsHero.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <a
              href="#all-projects"
              className="bg-primary text-primary-foreground inline-flex h-14 items-center justify-center gap-2 rounded-xl border-none px-8 text-[16px] font-medium shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-[#A388B9] hover:shadow-md"
            >
              {projectsHero.buttonText} <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
