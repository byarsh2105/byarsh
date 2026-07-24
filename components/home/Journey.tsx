import Image from 'next/image';

interface JournalCardProps {
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

export default function JournalCard({
  category,
  title,
  date,
  readTime,
  image,
}: JournalCardProps) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-[#ECE7E1] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="text-primary text-[12px] font-semibold tracking-[0.14em] uppercase">
          {category}
        </p>

        <h3 className="font-heading mt-4 text-[36px] leading-[1.18] tracking-[-0.02em] text-[#222]">
          {title}
        </h3>

        <div className="text-muted-foreground mt-8 flex items-center gap-3 text-[14px]">
          <span>{date}</span>

          <span>•</span>

          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}
