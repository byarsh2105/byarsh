import Image from 'next/image';
import Link from 'next/link';
import { currentlyReading } from '@/src/content/books';

export default function CurrentlyReading() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <h2 className="font-heading text-foreground text-[32px] font-semibold lg:text-[36px]">
          Currently Reading
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] xl:gap-12">
        {/* Left: Book (No background, sits on white 3D box) */}
        <div className="flex flex-col gap-8 pt-2 sm:flex-row sm:items-start">
          <div className="relative mx-auto h-[240px] w-[160px] shrink-0 overflow-hidden rounded-md shadow-lg shadow-black/10 sm:mx-0">
            <Image
              src={currentlyReading.book.cover}
              alt={`${currentlyReading.book.title} Cover`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-heading text-foreground mb-1 text-[28px] font-semibold">
              {currentlyReading.book.title}
            </h3>
            <p className="mb-6 text-[16px] text-[#666666]">
              {currentlyReading.book.author}
            </p>

            {/* Progress */}
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-[14px] font-medium text-[#B092C5]">
                <span>{currentlyReading.book.progress}%</span>
                <span className="text-[#666666]">
                  {currentlyReading.book.progressStatus}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3EEF5]">
                <div
                  className="h-full rounded-full bg-[#B092C5]"
                  style={{ width: `${currentlyReading.book.progress}%` }}
                ></div>
              </div>
            </div>

            <p className="mb-2 text-[15px] leading-[1.7] text-[#444444]">
              {currentlyReading.book.note}
            </p>
          </div>
        </div>

        {/* Right: Quote (Has tinted background color) */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-[28px] bg-[#F5EAE6] p-10 lg:p-12">
          <div className="absolute top-8 left-10 font-serif text-[80px] leading-none text-[#8E69AB]">
            “
          </div>

          <div className="relative z-10 mt-10">
            <p className="font-heading text-foreground mb-8 max-w-[300px] text-[28px] leading-[1.3] font-medium">
              {currentlyReading.quote.text}
            </p>
            <p className="flex items-center gap-4 text-[16px] text-[#666666]">
              <span className="h-[1px] w-6 bg-[#B092C5]/50"></span>
              {currentlyReading.quote.author}
            </p>
          </div>

          {/* Decorative Image */}
          <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 opacity-90 sm:block">
            <Image
              src="/images/decor/vintage_preview.png"
              alt="Vintage book illustration"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
