import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JourneyStory() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left Image */}
          <div className="relative w-full shrink-0 lg:w-[320px] xl:w-[360px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] shadow-sm">
              <Image
                src="/images/journey/my-story.jpg"
                alt="Winding road"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10 flex-1 lg:pr-32">
            <h2 className="font-heading text-foreground text-[28px] font-medium sm:text-[32px]">
              My Story
            </h2>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <div className="max-w-[500px] space-y-4 text-[15px] leading-[1.8] text-black">
              <p>Every journey begins with curiosity.</p>
              <p>
                Mine began with a love for learning and a belief that small,
                consistent steps lead to meaningful growth.
              </p>
              <p>
                From writing my first lines of code to building ByArsh, every
                experience has shaped the way I think, create, and connect with
                others.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Branch Image */}
        <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 opacity-85 lg:block lg:pr-8">
          <div className="relative h-[220px] w-[180px]">
            <Image
              src="/images/journey/floral-branch.png"
              alt="Decorative floral branch"
              fill
              className="object-contain object-right mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
