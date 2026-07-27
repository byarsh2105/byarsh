import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function ProjectsCTA() {
  return (
    <section className="pt-4 pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] bg-[#F6EFF9] px-8 py-8 lg:px-12 lg:py-8">
          {/* Left Decorative Leaf */}

          <Image
            src="/images/decor/pp.png"
            alt="Leaf"
            width={110}
            height={140}
            className="pointer-events-none absolute bottom-0 left-8 opacity-80 select-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}

            <div className="max-w-[520px] pl-10 lg:pl-20">
              <h2 className="font-heading text-[32px] leading-[1.08] tracking-[-0.03em] text-[#1D1B18] lg:text-[36px]">
                Have an idea in mind?
              </h2>

              <p className="mt-2 max-w-[420px] text-[16px] leading-8 text-[#5F5954]">
                Let's build something meaningful together.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col items-center gap-6 sm:flex-row lg:gap-16 lg:pr-20">
              <Button className="bg-primary hover:bg-primary h-14 rounded-2xl px-10 text-[16px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                Let's Talk
                <span className="ml-2">→</span>
              </Button>

              {/* Decoration */}
              <div className="hidden opacity-60 sm:block">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="1"
                >
                  <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
                  <path d="M20 4L21 7L24 8L21 9L20 12L19 9L16 8L19 7Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
