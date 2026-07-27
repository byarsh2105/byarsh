import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function MyStory() {
  return (
    <section className="relative z-10 py-8">
      <Container>
        <div className="border-border/40 relative overflow-hidden rounded-[24px] border bg-[#FCFAF7] p-6 shadow-sm lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            {/* Left Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px]">
              <Image
                src="/images/about/my-story.jpg"
                alt="My Story"
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
                <p>Hi, I'm Arsh.</p>
                <p>I believe learning doesn't end with school or work.</p>
                <p>It's something we carry throughout life.</p>
                <p>
                  ByArsh began as a place to document what I'm building,
                  learning, reading, exploring, and becoming.
                </p>
                <p>
                  My hope is that this space encourages others to stay curious,
                  create with intention, and enjoy the process of growing.
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
      </Container>
    </section>
  );
}
