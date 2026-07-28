import Image from 'next/image';
import Link from 'next/link';

interface LibraryCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function LibraryCard({
  title,
  subtitle,
  image,
  href,
}: LibraryCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="text-center transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#EBE5DF]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <h3 className="font-heading mt-5 text-[18px] leading-tight font-medium text-[#171717]">
          {title}
        </h3>

        <p className="text-muted-foreground/90 mt-2 text-[13px] leading-[1.6]">
          {subtitle}
        </p>
      </article>
    </Link>
  );
}
