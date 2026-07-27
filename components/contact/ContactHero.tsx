import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden pt-12 pb-16">
      <Container>
        <div className="grid h-full items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="z-10 pt-10">
            <h1 className="font-heading text-foreground mb-4 text-[64px] leading-none tracking-[-0.02em] sm:text-[72px] lg:text-[84px]">
              Let's Talk
            </h1>

            <div className="mb-8 flex items-center gap-2">
              <div className="bg-primary/30 h-[1px] w-16"></div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70"
              >
                <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
                <path d="M9 13c1 2 4 2 5-1" />
                <path d="M13 10c1 2 4 2 5-1" />
                <path d="M15 7c1 2 4 2 5-1" />
                <path d="M6 18c1 2 4 2 5-1" />
              </svg>
            </div>

            <p className="text-foreground mb-8 max-w-[400px] text-[26px] leading-[1.4] tracking-[-0.01em] sm:text-[28px]">
              Whether you have an idea,
              <br />
              a question,
              <br />
              or simply want to say hello—
            </p>

            <div className="mb-4">
              <p className="font-signature text-primary/70 text-[32px] lowercase italic sm:text-[36px]">
                I'd love to hear from you.
              </p>
            </div>

            <div className="text-primary/70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          </div>
        </div>
      </Container>

      {/* Right Image Background */}
      <div className="absolute top-0 right-0 z-0 h-full w-full opacity-90 lg:w-[60%] lg:opacity-100">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Writing in notebook"
          fill
          className="mask-image-to-r object-cover object-right"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 40%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 40%)',
          }}
        />
      </div>
    </section>
  );
}
