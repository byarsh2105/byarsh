import Image from 'next/image';
import Link from 'next/link';

export default function CurrentlyReading() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-foreground text-[32px] font-semibold lg:text-[36px]">
            Currently Reading
          </h2>
        </div>
        <Link
          href="/library/currently-reading"
          className="flex items-center gap-2 text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
        >
          View all <span>→</span>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] xl:gap-12">
        {/* Left: Book (No background, sits on white 3D box) */}
        <div className="flex flex-col gap-8 pt-2 md:flex-row md:items-start">
          <div className="relative h-[240px] w-[160px] shrink-0 overflow-hidden rounded-md shadow-lg shadow-black/10">
            <Image
              src="/images/library/atomic-habits.jpg"
              alt="Atomic Habits Cover"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-heading text-foreground mb-1 text-[28px] font-semibold">
              Atomic Habits
            </h3>
            <p className="mb-6 text-[16px] text-[#666666]">James Clear</p>

            {/* Progress */}
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-[14px] font-medium text-[#B092C5]">
                <span>45%</span>
                <span className="text-[#666666]">In Progress</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3EEF5]">
                <div className="h-full w-[45%] rounded-full bg-[#B092C5]"></div>
              </div>
            </div>

            <p className="mb-8 text-[15px] leading-[1.7] text-[#444444]">
              A practical guide to building good habits, breaking bad ones, and
              mastering the tiny behaviors that lead to remarkable results.
            </p>

            <button className="inline-flex items-center gap-2 rounded-xl bg-[#F6F2F8] px-5 py-2.5 text-[14px] font-medium text-[#B092C5] transition-colors hover:bg-[#EBE3F0]">
              Continue Reading ↗
            </button>
          </div>
        </div>

        {/* Right: Quote (Has tinted background color) */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-[28px] bg-[#F5EAE6] p-10 lg:p-12">
          <div className="absolute top-8 left-10 font-serif text-[80px] leading-none text-[#8E69AB]">
            “
          </div>

          <div className="relative z-10 mt-10">
            <p className="font-heading text-foreground mb-8 max-w-[300px] text-[28px] leading-[1.3] font-medium">
              A book is a dream that you hold in your hands.
            </p>
            <p className="flex items-center gap-4 text-[16px] text-[#666666]">
              <span className="h-[1px] w-6 bg-[#B092C5]/50"></span>
              Neil Gaiman
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
