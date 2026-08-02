import Container from '@/components/layout/Container';
import Image from 'next/image';
import { libraryQuoteBanner } from '@/src/content/books';

export default function LibraryQuoteBanner() {
  return (
    <div className="w-full">
      <div className="relative flex h-[200px] items-center overflow-hidden rounded-2xl bg-[#F7F2FA] sm:h-[180px]">
        {/* Background Image (Right Side Fade) */}
        <div className="absolute top-0 right-0 bottom-0 z-0 w-3/4 md:w-1/2">
          <Image
            src={libraryQuoteBanner.image}
            alt=""
            aria-hidden="true"
            fill
            className="mask-image-to-l object-cover object-left"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 40%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 40%)',
            }}
          />
        </div>

        <div className="relative z-10 flex h-full w-full items-center bg-gradient-to-r from-[#F7F2FA] via-[#F7F2FA] to-transparent pl-8 md:pl-16">
          <div className="-mt-10 mr-6 hidden font-serif text-[80px] leading-none text-[#8E69AB] sm:block">
            “
          </div>

          <div className="max-w-[480px]">
            <p className="font-heading text-foreground mb-4 text-[22px] leading-[1.3] sm:text-[26px]">
              {libraryQuoteBanner.quote}
            </p>
            <p className="text-muted-foreground flex items-center gap-2 text-[15px]">
              <span className="bg-muted-foreground h-[1px] w-4"></span>
              {libraryQuoteBanner.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
