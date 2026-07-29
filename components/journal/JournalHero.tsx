import Container from '@/components/layout/Container';
import Image from 'next/image';
import { journalHero } from '@/src/content/journal';

export default function JournalHero() {
  return (
    <section className="pt-12 pb-8">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[520px_1fr]">
          {/* Left */}

          <div>
            {/* Small Label */}

            <div className="flex items-center">
              <p className="font-signature text-primary text-[46px] leading-none">
                {journalHero.label}
              </p>

              <Image
                src="/images/decor/pp.png"
                alt="Leaf"
                width={200}
                height={300}
                className="-ml-15 object-contain"
              />
            </div>

            {/* Heading */}

            <h1 className="font-heading text-foreground text-[52px] leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]">
              {journalHero.titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < journalHero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Purple Line */}

            <div className="bg-primary mt-6 mb-8 h-[2px] w-8 rounded-full"></div>

            {/* Description */}

            <p className="max-w-[450px] text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
              {journalHero.description}
            </p>
          </div>

          {/* Right Image */}

          <div className="relative h-[400px] w-full overflow-hidden rounded-[6px] bg-[#EFE8E0] md:h-[500px] lg:h-[720px]">
            <Image
              src={journalHero.image.src}
              alt={journalHero.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
