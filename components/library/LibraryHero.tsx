import Container from '@/components/layout/Container';
import Image from 'next/image';
import { libraryHero } from '@/src/content/books';

export default function LibraryHero() {
  return (
    <section className="bg-background pt-12 pb-8">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr]">
          {/* Left Content */}
          <div className="lg:pt-20">
            <h1 className="font-heading text-foreground text-[48px] leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]">
              {libraryHero.title}
            </h1>

            <div className="mt-6 mb-8 h-[2px] w-8 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading text-foreground mb-10 text-[28px] leading-[1.3] font-medium tracking-[-0.01em] sm:text-[34px]">
              {libraryHero.subtitleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < libraryHero.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="text-primary bg-primary/5 inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium">
              <span className="font-signature mr-2 text-[20px]">♡</span>
              {libraryHero.badge}
            </div>
          </div>

          {/* Right Image (Portrait) */}
          <div className="relative h-[400px] overflow-hidden rounded-[6px] bg-[#F2EBE1] md:h-[500px] lg:h-[720px]">
            <Image
              src={libraryHero.image.src}
              alt={libraryHero.image.alt}
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
