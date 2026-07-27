import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function WhatsNext() {
  return (
    <div className="w-full">
      <div className="border-border/40 relative flex min-h-[300px] items-center overflow-hidden rounded-[24px] border bg-[#EAE6E1] p-8 shadow-sm lg:p-12">
        <div className="relative z-10 max-w-[400px]">
          <h2 className="font-heading text-foreground mb-2 text-[28px] font-semibold">
            What's Next
          </h2>
          <div className="bg-primary/40 mb-6 h-[2px] w-12"></div>

          <p className="font-signature text-primary/80 mb-4 text-[26px] lowercase italic">
            Still becoming.
          </p>

          <p className="text-foreground/80 mb-4 text-[14px] leading-[1.7]">
            I'm excited to keep learning, building meaningful software, writing
            thoughtful stories, and sharing the journey with you.
          </p>
          <p className="text-foreground/80 text-[14px] leading-[1.7]">
            The best is yet to come.
          </p>
        </div>

        {/* Right Background Image Overlay */}
        <div className="absolute top-0 right-0 bottom-0 z-0 w-[60%] opacity-90">
          <Image
            src="/images/journey/coastal.jpg"
            alt="Coastal road"
            fill
            className="mask-image-to-l object-cover object-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 50%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 50%)',
            }}
          />
        </div>

        {/* Decorative Branch */}
        <div className="absolute right-[40%] bottom-6 z-10 hidden opacity-40 sm:block">
          <svg
            width="60"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
            <path d="M9 13c1 2 4 2 5-1" />
            <path d="M13 10c1 2 4 2 5-1" />
            <path d="M15 7c1 2 4 2 5-1" />
            <path d="M6 18c1 2 4 2 5-1" />
          </svg>
        </div>
      </div>
    </div>
  );
}
