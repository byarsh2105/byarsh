import Container from '@/components/layout/Container';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function AboutFooterCards() {
  const facts = [
    { text: 'Currently reading: The Song of Achilles' },
    { text: 'Favorite place to work: By the window with soft music' },
    { text: 'Always accompanied by: A cup of chai' },
    { text: 'Most used app: Notion' },
    { text: 'A quote I live by: Progress, not perfection.' },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Card: A Few Things About Me */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-[16px] bg-[#F4EFEC] p-8 shadow-sm lg:p-10">
            <div className="relative z-10 max-w-[320px]">
              <h3 className="font-heading text-foreground mb-6 text-[24px] font-semibold">
                A Few Things About Me
              </h3>
              <ul className="space-y-3">
                {facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart
                      className="text-primary/70 fill-primary/20 mt-0.5 shrink-0"
                      size={14}
                    />
                    <span className="text-foreground/80 text-[14px] leading-[1.5] font-medium">
                      {fact.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Background Image Overlay */}
            <div className="absolute top-0 right-0 bottom-0 z-0 w-[45%] opacity-90">
              <Image
                src="/images/about/vase.jpg"
                alt="Vase with dried flowers"
                fill
                className="mask-image-to-l object-cover object-right"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, black 60%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 60%)',
                }}
              />
            </div>
          </div>

          {/* Right Card: Let's build something meaningful */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-[16px] bg-[#ECE5ED] p-8 shadow-sm lg:p-10">
            <div className="relative z-10 max-w-[280px]">
              <h3 className="font-heading text-foreground mb-4 text-[26px] leading-[1.2] font-semibold">
                Let's build something meaningful.
              </h3>
              <p className="text-foreground/80 mb-8 text-[15px] leading-[1.6]">
                Whether you'd like to collaborate, share an idea, or simply say
                hello— I'd love to hear from you.
              </p>

              <Button className="bg-primary/70 hover:bg-primary/80 h-11 rounded-xl px-8 text-[14px] font-medium transition-colors">
                Let's Talk <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Right Background Image Overlay */}
            <div className="absolute top-0 right-0 bottom-0 z-0 w-[50%] opacity-90">
              <Image
                src="/images/about/beach.jpg"
                alt="Person at the beach"
                fill
                className="mask-image-to-l object-cover object-right"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, black 60%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 60%)',
                }}
              />
            </div>

            {/* Decorative Plant SVG */}
            <div className="absolute right-[45%] bottom-4 z-10 hidden opacity-40 sm:block">
              <svg
                width="50"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1"
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
      </Container>
    </section>
  );
}
