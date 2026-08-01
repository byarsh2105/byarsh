import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { aboutFooterCards } from '@/src/content/about';

export default function AboutFooterCards() {
  return (
    <section className="pt-12 pb-4">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Card: A Few Things About Me */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-[16px] bg-[#F4EFEC] p-8 shadow-sm lg:p-10">
            <div className="relative z-10 max-w-[320px]">
              <h3 className="font-heading mb-6 text-[28px] font-semibold text-black">
                {aboutFooterCards.leftCard.title}
              </h3>
              <ul className="space-y-3">
                {aboutFooterCards.leftCard.facts.map((fact, index) => (
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
            {aboutFooterCards.leftCard.backgroundImage.src && (
              <div className="absolute top-0 right-0 bottom-0 z-0 w-[80%] opacity-30 md:w-[45%] md:opacity-90">
                <Image
                  src={aboutFooterCards.leftCard.backgroundImage.src}
                  alt={aboutFooterCards.leftCard.backgroundImage.alt}
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
            )}
          </div>

          {/* Right Card: Let's build something meaningful */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-[16px] bg-[#ECE5ED] p-8 shadow-sm lg:p-10">
            <div className="relative z-10 max-w-[280px]">
              <h3 className="font-heading mb-4 text-[30px] leading-[1.2] font-semibold text-black">
                {aboutFooterCards.rightCard.title}
              </h3>
              <p className="mb-8 text-[16px] leading-[1.6] font-medium text-black">
                {aboutFooterCards.rightCard.description}
              </p>

              <Link href="/contact#contact-form" className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 h-11 w-full rounded-md px-8 text-[14px] font-medium transition-colors">
                  {aboutFooterCards.rightCard.buttonText}{' '}
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>

            {/* Right Background Image Overlay */}
            {aboutFooterCards.rightCard.backgroundImage.src && (
              <div className="absolute top-0 right-0 bottom-0 z-0 w-[80%] opacity-30 md:w-[50%] md:opacity-90">
                <Image
                  src={aboutFooterCards.rightCard.backgroundImage.src}
                  alt={aboutFooterCards.rightCard.backgroundImage.alt}
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
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
