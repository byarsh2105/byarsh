import Container from '@/components/layout/Container';
import Image from 'next/image';
import { contactHero } from '@/src/content/contact';

export default function ContactHero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden pt-12 pb-0">
      <Container>
        <div className="flex h-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          {/* Left */}
          <div className="z-10 w-full pt-10 lg:w-auto lg:shrink-0">
            <h1 className="font-heading text-foreground mb-4 text-[52px] leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]">
              {contactHero.title}
            </h1>

            <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

            <p className="font-heading mb-10 max-w-[400px] text-[32px] leading-[1.25] font-medium tracking-[-0.01em] text-[#1D1B18] sm:text-[38px]">
              {contactHero.subtitleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < contactHero.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="mb-4">
              <p className="font-signature text-primary/70 text-[32px] lowercase italic sm:text-[38px]">
                {contactHero.signature}
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative hidden h-[600px] w-full flex-1 overflow-hidden rounded-[24px] lg:block">
            <Image
              src="/images/lets_talk/lets_talks.jpeg"
              alt="Let's Talk Workspace"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
