import Container from '@/components/layout/Container';
import Image from 'next/image';

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
                My Journal
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

            <h1 className="font-heading text-foreground text-[64px] leading-[1.05] tracking-[-0.03em] sm:text-[72px] lg:text-[84px]">
              Thoughts,
              <br />
              stories, and
              <br />
              lessons from
              <br />
              my journey.
            </h1>

            {/* Purple Line */}

            <div className="bg-primary mt-6 mb-8 h-[2px] w-8 rounded-full"></div>

            {/* Description */}

            <p className="max-w-[450px] text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
              A collection of thoughts, stories, poetry, and lessons I'm
              learning along the way. on this text , Welcome to ByArsh—a calm
              digital journal where stories, books, poetry, technology, travel,
              and thoughtful ideas come together. Every page is created with
              intention, inviting you to slow down, stay curious, and keep
              learning.{' '}
            </p>
          </div>

          {/* Right Image */}

          <div className="relative h-[720px] overflow-hidden rounded-[6px] bg-[#EFE8E0]">
            <Image
              src="/images/journal/journal-hero.jpg"
              alt="Journal Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
