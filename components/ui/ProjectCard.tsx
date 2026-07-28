import { Box, Code2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
  href,
}: ProjectCardProps) {
  const Icon = icon === 'box' ? Box : icon === 'code' ? Code2 : Lightbulb;

  return (
    <Link href={href} className="block h-full">
      <article className="h-full rounded-[12px] border border-[#ECE5DC] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F0FB]">
          <Icon className="text-primary" size={24} />
        </div>

        <h3 className="font-heading mt-6 text-[18px] leading-tight font-medium text-[#171717]">
          {title}
        </h3>

        <p className="text-muted-foreground/90 mt-3 text-[13px] leading-[1.6]">
          {description}
        </p>
      </article>
    </Link>
  );
}
