import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JournalHero() {
  return (
    <section className="pt-12 pb-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[520px_1fr]">
          {/* Left */}

          <div>
            {/* Small Label */}

            <p className="font-signature text-primary text-[42px]">
              my journal ✦ ♡
            </p>

            {/* Heading */}

            <h1 className="font-heading text-[78px] leading-[0.95] tracking-[-0.04em] text-[#1D1B18]">
              Thoughts,
              <br />
              stories, and
              <br />
              lessons from
              <br />
              my journey.
            </h1>

            {/* Purple Line */}

            <div className="bg-primary mt-8 h-[2px] w-12 rounded-full" />

            {/* Description */}

            <p className="mt-8 max-w-[420px] text-[22px] leading-[1.8] text-[#5F5954]">
              A collection of thoughts, stories, poetry, and lessons I'm
              learning along the way.
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
