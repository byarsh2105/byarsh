import Container from '@/components/layout/Container';
import { philosophyPoints } from '@/constants/philosophy';

export default function PhilosophySection() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid overflow-hidden rounded-[34px] border border-[#ECE5DC] bg-[#FBF8F4] lg:grid-cols-[520px_1fr]">
          {/* Left Image */}

          <div className="h-[520px] bg-[#EEE7DE]" />

          {/* Right Content */}

          <div className="flex flex-col justify-center px-16 py-14">
            <h2 className="font-heading text-[54px] leading-none tracking-[-0.03em] text-[#1B1815]">
              The ByArsh Philosophy
            </h2>

            <div className="mt-10 space-y-7">
              {philosophyPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="text-primary mt-1 text-lg">✦</span>

                  <p className="text-[19px] leading-[1.8] text-[#403C39]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button className="text-primary mt-12 inline-flex w-fit items-center gap-2 text-[17px] font-medium transition-all hover:gap-3">
              Read our philosophy
              <span>→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
