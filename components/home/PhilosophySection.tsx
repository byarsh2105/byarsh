import Container from '@/components/layout/Container';
import { philosophyPoints } from '@/constants/philosophy';

export default function PhilosophySection() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid items-stretch lg:grid-cols-[480px_1fr]">
          {/* Left Image */}
          <div className="w-full bg-[#EBE5DF]" />

          {/* Right Content */}
          <div className="flex h-full flex-col justify-center bg-[#F5EFF7] p-12">
            <h2 className="font-heading text-[40px] leading-none tracking-[-0.03em] text-[#1B1815]">
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

            <button className="text-primary mt-8 inline-flex w-fit items-center gap-2 text-[16px] leading-[1.9] font-normal tracking-[0.005em] transition-all hover:gap-3">
              Read our philosophy
              <span>→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
