import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function JourneySection() {
  return (
    <section className="border-t border-[#EEE7DF] bg-[#FBF8F4]">
      <Container>
        <div className="grid items-stretch lg:grid-cols-2">
          {/* Left Image */}

          <div className="relative h-[280px] overflow-hidden bg-[#EBE5DF] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=2071&auto=format&fit=crop"
              alt="Journey"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Right Content */}

          <div className="relative flex items-center border-l border-[#EEE7DF] px-12 py-12 lg:px-20 lg:py-16">
            <div className="max-w-[430px]">
              {/* Small Decorative Label */}

              <div className="mb-5 flex items-center gap-3">
                <span className="text-primary text-sm">✦</span>

                <div className="bg-primary/30 h-px w-8" />
              </div>

              {/* Heading */}

              <h2 className="font-heading text-[42px] leading-[0.95] tracking-[-0.03em] text-[#1B1815]">
                My Journey
              </h2>

              {/* Description */}

              <p className="mt-5 text-[16px] leading-[2] tracking-[0.005em] text-[#5F5954]">
                A timeline of learning, career,
                <br />
                travel, and personal milestones.
              </p>

              {/* CTA */}

              <Link
                href="/journey"
                className="group text-primary mt-9 inline-flex items-center gap-2 text-[16px] transition-all"
              >
                <span>Read my journey</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Decorative Lavender Illustration */}

            <Image
              src="/images/decor/lavs.png"
              alt=""
              width={230}
              height={300}
              className="pointer-events-none absolute top-1/2 right-8 -translate-y-1/2 opacity-75 select-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
