import Container from '@/components/layout/Container';
import Image from 'next/image';
import { whatsNext } from '@/src/content/journey';

export default function WhatsNext() {
  return (
    <div className="w-full">
      <div className="relative flex min-h-[240px] items-center overflow-hidden rounded-[24px] bg-[#EAE5DE] px-8 py-6 lg:px-12 lg:py-8">
        <div className="relative z-10 max-w-[460px]">
          <h2 className="font-heading text-foreground mb-1 text-[28px] font-semibold sm:text-[32px]">
            {whatsNext.title}
          </h2>
          <div className="mb-4 h-[1.5px] w-10 bg-[#B092C5]/60"></div>

          <p className="font-heading mb-5 text-[20px] font-bold text-[#6A4B82] italic">
            {whatsNext.subtitle}
          </p>

          {whatsNext.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-[15px] leading-[1.8] text-black sm:text-[16px]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Right Background Image Overlay */}
        <div className="absolute top-0 right-0 bottom-0 z-0 w-[80%] opacity-30 md:w-[55%] md:opacity-100">
          <Image
            src={whatsNext.backgroundImage.src}
            alt={whatsNext.backgroundImage.alt}
            fill
            className="object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 40%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 40%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
