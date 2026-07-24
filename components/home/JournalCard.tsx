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
    <article className="overflow-hidden rounded-[24px] border border-[#EEE7DE] bg-[#FBF8F4] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}

      <div className="flex aspect-[4/3] items-center justify-center rounded-t-[22px] bg-[#F2ECE5]">
        <span className="text-sm text-[#9A948D]">Image Coming Soon</span>
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="text-primary text-[12px] font-semibold tracking-[0.12em] uppercase">
          {category}
        </p>

        <h3 className="font-heading mt-4 text-[20px] leading-[1.3] text-[#1E1A17]">
          {title}
        </h3>

        <div className="text-muted-foreground mt-6 flex items-center gap-3 text-[14px]">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}
