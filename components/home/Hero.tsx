import Button from '@/components/ui/button';
import Container from '@/components/layout/Container';
import Image from 'next/image';
import { site } from '@/src/content/site';
import Link from 'next/link';

export default function Hero() {
  const { hero } = site;

  return (
    <section className="pt-20 pb-12 lg:pt-28 lg:pb-8">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[600px_1fr] xl:gap-24">
          {/* Left */}

          <div className="pl-0 md:pl-8 xl:pl-8">
            <span className="text-primary mb-1 inline-block text-2xl">✦</span>

            <div className="font-heading text-[48px] leading-[0.98] font-medium tracking-[0.020em] md:text-[68px] lg:text-[84px] xl:text-[68px]">
              {hero.titleLines.map((line, index) => {
                if (index === hero.titleLines.length - 1) {
                  return (
                    <div key={index} className="pt-2">
                      <h1 className="text-primary">{line}</h1>
                      <div className="bg-primary mt-6 h-[2px] w-8 rounded-full"></div>
                    </div>
                  );
                }
                return <h1 key={index}>{line}</h1>;
              })}
            </div>
            <p className="font-heading mt-8 max-w-[440px] text-[20px] leading-[1.4] font-medium tracking-[0.01em] text-[#2B2B2B] md:text-[26px]">
              {hero.subtitle}
            </p>

            <p className="mt-6 max-w-[450px] text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 md:gap-5">
              {hero.buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                  <Button
                    variant={button.variant as any}
                    className={
                      button.variant === 'outline'
                        ? 'border border-black bg-white !text-[15px] !text-black hover:border-black hover:bg-white hover:!text-black'
                        : '!text-[15px]'
                    }
                  >
                    {button.text} <span className="ml-2">→</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="relative -ml-0 h-[400px] w-full overflow-hidden rounded-[3px] shadow-sm lg:-ml-12 lg:h-[600px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
