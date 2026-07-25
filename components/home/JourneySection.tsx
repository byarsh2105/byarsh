import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function JourneySection() {
  return (
    <section className="border-t border-[#EEE7DF]">
      <Container>
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}

          <div className="relative h-[430px] overflow-hidden">
            <Image
              src="/images/journey/journey.jpg"
              alt="Journey"
              fill
              className="object-cover"
            />
          </div>

          {/* Right */}

          <div className="relative flex items-center border-l border-[#EEE7DF] bg-[#FCFAF7] px-20">
            <div className="max-w-[430px]">
              <h2 className="font-heading text-[54px] leading-none tracking-[-0.03em]">
                My Journey
              </h2>

              <p className="mt-6 text-[22px] leading-[1.7] text-[#5E5853]">
                A timeline of learning, career, travel,
                <br />
                and personal milestones.
              </p>

              <Link
                href="/journey"
                className="text-primary mt-10 inline-flex items-center gap-3 text-[18px] font-medium transition-all hover:gap-4"
              >
                Read my journey
                <span>→</span>
              </Link>
            </div>

            {/* Decoration */}

            <Image
              src="/images/illustrations/lavender.png"
              alt=""
              width={120}
              height={160}
              className="absolute right-12 bottom-8 opacity-90"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
