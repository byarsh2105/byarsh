import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function JourneyStory() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px]">
            <Image
              src="/images/journey/my-story.jpg"
              alt="Winding road"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="pr-4 lg:pr-12">
            <h2 className="font-heading text-foreground mb-6 text-[28px] font-semibold sm:text-[32px]">
              My Story
            </h2>

            <div className="text-foreground/80 space-y-4 text-[15px] leading-[1.7]">
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

        {/* Decorative Branch */}
        <div className="absolute right-4 bottom-4 opacity-40">
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
