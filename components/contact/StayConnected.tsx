import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function StayConnected() {
  return (
    <section className="py-4">
      <Container>
        <div className="relative flex min-h-[260px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] bg-[#E6DFEC] p-8 shadow-sm md:flex-row lg:p-12">
          <div className="relative z-10 w-full max-w-[380px] lg:w-auto">
            <h2 className="font-heading text-[28px] font-semibold text-black">
              Stay Connected
            </h2>
            <div className="mt-2 mb-5 h-[2px] w-12 rounded-full bg-[#B092C5]"></div>

            <p className="mb-8 text-[16px] leading-[2] tracking-wider text-black">
              Occasional thoughts, stories, and updates—straight to your inbox.
              Nothing spammy, I promise.
            </p>

            <div className="flex w-full max-w-[360px]">
              <input
                type="email"
                placeholder="Your email address"
                className="border-border/40 focus:border-primary/50 h-[46px] min-w-0 flex-1 rounded-l-[8px] border border-r-0 bg-[#FCFAF7] px-5 text-[14px] text-black transition-colors outline-none placeholder:text-black/50"
              />
              <Button className="h-[46px] shrink-0 rounded-l-none rounded-r-[8px] bg-[#9D85AE] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#8B759A]">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Right Background Image Overlay */}
          <div className="absolute top-0 right-0 bottom-0 z-0 w-[55%] opacity-100">
            <Image
              src="/images/about/vase.jpg"
              alt="Vase with flowers"
              fill
              className="mask-image-to-l object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 70%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 70%)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
