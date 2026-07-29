import Container from '@/components/layout/Container';
import Image from 'next/image';
import { myStory } from '@/src/content/about';

export default function MyStory() {
  return (
    <section className="relative z-10 pt-0 pb-8">
      <Container>
        <div className="border-border/40 relative overflow-hidden rounded-[24px] border bg-[#FAF8F5] px-6 py-8 shadow-sm lg:px-10 lg:py-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.6fr] lg:pt-4">
            {/* Left Image */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[360px] overflow-hidden rounded-sm lg:mx-0 lg:max-w-none">
              <Image
                src={myStory.image.src}
                alt={myStory.image.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="relative pr-4 lg:pr-32">
              <h2 className="font-heading text-foreground mb-2 text-[26px] font-semibold sm:text-[30px]">
                {myStory.title}
              </h2>

              <div className="my-8 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>

              <div className="space-y-4 text-[16px] leading-[1.6] text-black sm:text-[17px]">
                {myStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <ul className="list-disc space-y-3 pl-5 marker:text-[#8E69AB]">
                  {myStory.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Decorative PNG Branch */}
          <div className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 opacity-70 lg:block">
            <div className="relative h-[300px] w-[180px]">
              <Image
                src={myStory.decorativeImage.src}
                alt={myStory.decorativeImage.alt}
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
