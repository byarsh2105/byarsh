import { Box, Code2, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
}: ProjectCardProps) {
  const Icon = icon === 'box' ? Box : icon === 'code' ? Code2 : Lightbulb;

  return (
    <article className="rounded-[24px] border border-[#ECE5DC] bg-white p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F6F0FB]">
        <Icon className="text-primary" size={30} />
      </div>

      <h3 className="font-heading mt-8 text-[28px] leading-tight text-[#171717]">
        {title}
      </h3>

      <p className="mt-4 text-[16px] leading-7 text-[#6D6863]">{description}</p>
    </article>
  );
}
