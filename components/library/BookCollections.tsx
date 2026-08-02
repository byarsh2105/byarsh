import Image from 'next/image';
import Link from 'next/link';
import {
  finishedBooks,
  wishlistBooks,
  favoriteBooksInfo,
} from '@/src/content/books';

export default function BookCollections() {
  return (
    <div className="w-full">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Column 1: Finished Books */}
        <div>
          <div className="mb-8 pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Finished Books
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {finishedBooks.map((book) => (
              <div key={book.title} className="flex items-center gap-4">
                <div className="relative aspect-[1/1.5] w-[70px] shrink-0 overflow-hidden rounded-[2px] shadow-md">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="scale-125 object-cover object-center"
                  />
                </div>
                <div>
                  <h4 className="text-foreground mb-1 text-[16px] font-medium">
                    {book.title}
                  </h4>
                  <p className="mb-1 text-[14px] text-[#666666]">
                    {book.author}
                  </p>
                  <p className="mb-2 text-[12px] text-[#666666]/70">
                    {book.date}
                  </p>
                  <span className="text-[12px] font-medium text-[#B092C5]">
                    {book.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Favorite Books (Centered Carousel Style) */}
        <div className="flex flex-col">
          <div className="mb-8 pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Favorite Books
            </h3>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-4">
            <div className="relative mb-8 aspect-[1/1.5] w-[180px] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src={favoriteBooksInfo.cover}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-8 flex gap-2">
              <div className="h-2 w-2 rounded-full bg-[#B092C5]"></div>
              <div className="h-2 w-2 rounded-full bg-[#B092C5]/30"></div>
              <div className="h-2 w-2 rounded-full bg-[#B092C5]/30"></div>
            </div>

            <p className="max-w-[220px] text-center text-[16px] leading-[1.6] text-[#666666]">
              {favoriteBooksInfo.note}
            </p>
          </div>
        </div>

        {/* Column 3: Reading Wishlist */}
        <div>
          <div className="mb-8 pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Reading Wishlist
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {wishlistBooks.map((book) => (
              <div key={book.title} className="flex items-center gap-4">
                <div className="relative aspect-[1/1.5] w-[70px] shrink-0 overflow-hidden rounded-[2px] shadow-md">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-foreground mb-1 text-[16px] font-medium">
                    {book.title}
                  </h4>
                  <p className="text-[14px] text-[#666666]">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
