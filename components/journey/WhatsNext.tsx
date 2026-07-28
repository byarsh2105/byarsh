import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function WhatsNext() {
  return (
    <div className="w-full">
      <div className="relative flex min-h-[240px] items-center overflow-hidden rounded-[24px] bg-[#EAE5DE] px-8 py-6 lg:px-12 lg:py-8">
        <div className="relative z-10 max-w-[460px]">
          <h2 className="font-heading text-foreground mb-1 text-[28px] font-semibold sm:text-[32px]">
            What's Next
          </h2>
          <div className="mb-4 h-[1.5px] w-10 bg-[#B092C5]/60"></div>

          <p className="font-heading mb-5 text-[20px] font-bold text-[#6A4B82] italic">
            Still becoming.
          </p>

          <p className="mb-4 text-[15px] leading-[1.8] text-black sm:text-[16px]">
            I'm excited to keep learning, building meaningful software, writing
            thoughtful stories, and sharing the journey with you.
          </p>
          <p className="text-[15px] leading-[1.8] text-black sm:text-[16px]">
            The best is yet to come.
          </p>
        </div>

        {/* Right Background Image Overlay */}
        <div className="absolute top-0 right-0 bottom-0 z-0 w-[55%] opacity-100">
          <Image
            src="/images/journey/whats-next.jpg"
            alt="Coastal road"
            fill
            className="object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 40%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 40%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
