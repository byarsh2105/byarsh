import Image from 'next/image';
import Link from 'next/link';

export default function BookCollections() {
  const finishedBooks = [
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      date: 'Finished May 2024',
      badge: '♡ Loved this',
      image: '/images/library/alchemist.jpg',
    },
    {
      title: 'Ikigai',
      author: 'Hector Garcia',
      date: 'Finished Mar 2024',
      badge: '♡ Life Changing',
      image: '/images/library/ikigai.jpg',
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      date: 'Finished Apr 2024',
      badge: '♡ Highly Recommended',
      image: '/images/library/psychology.jpg',
    },
  ];

  const wishlistBooks = [
    {
      title: 'The Song of Achilles',
      author: 'Madeline Miller',
      image: '/images/library/achilles.jpg',
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      image: '/images/library/midnight.jpg',
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      image: '/images/library/sapiens.jpg',
    },
  ];

  return (
    <div className="w-full">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Column 1: Finished Books */}
        <div>
          <div className="mb-8 flex items-center justify-between pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Finished Books
            </h3>
            <Link
              href="/library/finished"
              className="flex items-center gap-1 text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
            >
              View all <span>→</span>
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {finishedBooks.map((book) => (
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

          <div className="mt-8 text-right">
            <Link
              href="/library/finished"
              className="text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
            >
              View all <span>→</span>
            </Link>
          </div>
        </div>

        {/* Column 2: Favorite Books (Centered Carousel Style) */}
        <div className="flex flex-col">
          <div className="mb-8 flex items-center justify-between pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Favorite Books
            </h3>
            <Link
              href="/library/favorites"
              className="flex items-center gap-1 text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
            >
              View all <span>→</span>
            </Link>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-4">
            <div className="relative mb-8 aspect-[1/1.5] w-[180px] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/library/mockingbird.jpg"
                alt="To Kill a Mockingbird"
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
              Books that have stayed with me over the years.
            </p>
          </div>
        </div>

        {/* Column 3: Reading Wishlist */}
        <div>
          <div className="mb-8 flex items-center justify-between pb-4">
            <h3 className="font-heading text-foreground text-[26px] font-semibold">
              Reading Wishlist
            </h3>
            <Link
              href="/library/wishlist"
              className="flex items-center gap-1 text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
            >
              View all <span>→</span>
            </Link>
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

          <div className="mt-8 text-right">
            <Link
              href="/library/wishlist"
              className="text-[17px] font-medium text-[#B092C5] transition-colors hover:text-[#9A7BB0]"
            >
              View all <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
