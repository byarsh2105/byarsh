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
    <section className="pt-12 pb-4">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Card: A Few Things About Me */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-[16px] bg-[#F4EFEC] p-8 shadow-sm lg:p-10">
            <div className="relative z-10 max-w-[320px]">
              <h3 className="font-heading mb-6 text-[28px] font-semibold text-black">
                A Few Things About Me
              </h3>
              <ul className="space-y-3">
                {facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart
                      className="text-primary/70 fill-primary/20 mt-1 shrink-0"
                      size={16}
                    />
                    <span className="text-[15px] leading-[1.6] font-medium text-black">
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
              <h3 className="font-heading mb-4 text-[30px] leading-[1.2] font-semibold text-black">
                Let's build something meaningful.
              </h3>
              <p className="mb-8 text-[16px] leading-[1.6] font-bold text-black">
                Whether you'd like to collaborate, share an idea, or simply say
                hello— I'd love to hear from you.
              </p>

              <Button className="bg-primary hover:bg-primary/90 h-11 rounded-md px-8 text-[14px] font-medium transition-colors">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
