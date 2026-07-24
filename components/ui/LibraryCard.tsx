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
      <div className="relative h-[190px] overflow-hidden rounded-[22px] bg-[#ECE5DC]">
        {/* Replace when images are ready */}

        {/* <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        /> */}

        <div className="flex h-full items-center justify-center text-sm text-[#7B736B]">
          Image Coming Soon
        </div>
      </div>

      <h3 className="font-heading mt-7 text-[32px] leading-tight text-[#171717]">
        {title}
      </h3>

      <p className="mt-3 text-[17px] leading-7 text-[#6D6863]">{subtitle}</p>
    </article>
  );
}
