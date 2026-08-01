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
          {/* Left Content */}
          <div className="relative z-10 pt-4 lg:pt-0">
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

          {/* Right Image Section */}
          <div className="relative mt-8 block min-h-[350px] w-full shrink-0 overflow-hidden rounded-3xl sm:min-h-[450px] lg:mt-0 lg:h-[600px] lg:flex-1">
            <Image
              src={projectsHero.image.src}
              alt={projectsHero.image.alt}
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
