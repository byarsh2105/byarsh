import Container from '@/components/layout/Container';
import { philosophyPoints } from '@/constants/philosophy';
import Image from 'next/image';
import Link from 'next/link';

export default function PhilosophySection() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid items-stretch lg:grid-cols-[480px_1fr]">
          {/* Left Image */}
          <div className="relative min-h-[250px] w-full overflow-hidden bg-[#EBE5DF] lg:min-h-0">
            <Image
              src="/images/home/philosophy.png"
              alt="The ByArsh Philosophy"
              fill
              className="scale-[1.15] object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div className="flex h-full flex-col justify-center bg-[#F5EFF7] p-8 lg:p-12">
            <h2 className="font-heading text-[32px] leading-none tracking-[-0.03em] text-[#1B1815] md:text-[40px]">
              The ByArsh Philosophy
            </h2>

            <div className="mt-8 space-y-4">
              {philosophyPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="text-primary mt-1 text-lg">✦</span>

                  <p className="text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about">
                <button className="text-primary/90 hover:text-primary inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3">
                  Read our philosophy
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
