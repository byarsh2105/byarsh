import Image from 'next/image';
import Link from 'next/link';

interface JournalCardProps {
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

export default function JournalCard({
  category,
  title,
  date,
  readTime,
  image,
  href,
}: JournalCardProps) {
  return (
    <Link href={href} className="block h-full">
      <article className="border-border/40 flex h-full flex-col overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full bg-[#FBF8F4]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-primary mb-2 text-[16px] leading-[1.9] font-normal tracking-[0.005em]">
            {category}
          </p>

          <h3 className="font-heading text-foreground mb-4 text-[20px] leading-[1.3] font-medium">
            {title}
          </h3>

          <div className="text-muted-foreground/80 mt-auto flex items-center gap-2 text-[16px] leading-[1.9] font-normal tracking-[0.005em]">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
