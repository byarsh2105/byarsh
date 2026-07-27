import Image from 'next/image';

interface LibraryCardProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function LibraryCard({
  title,
  subtitle,
  image,
}: LibraryCardProps) {
  return (
    <article className="text-center">
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
  );
}
