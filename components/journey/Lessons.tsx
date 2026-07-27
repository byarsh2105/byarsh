import Container from '@/components/layout/Container';
import { Lightbulb, Sprout, Mountain, Heart } from 'lucide-react';

export default function Lessons() {
  const lessons = [
    {
      title: 'Curiosity is a skill.',
      desc: 'The more I ask questions,\nthe more I learn.',
      icon: Lightbulb,
    },
    {
      title: 'Growth is never linear.',
      desc: 'There are ups, downs,\nand everything in between.',
      icon: Sprout,
    },
    {
      title: 'Reading changes\nhow we build.',
      desc: 'Books shape the way\nwe think and create.',
      icon: Mountain,
    },
    {
      title: 'Kindness matters\nmore than competition.',
      desc: 'The right people make\nthe journey beautiful.',
      icon: Heart,
    },
  ];

  return (
    <div className="w-full pt-4">
      <h2 className="font-heading text-foreground mb-8 text-[28px] font-semibold">
        Lessons Along the Way
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          return (
            <div
              key={index}
              className="border-border/40 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm"
            >
              <div className="mb-6">
                <Icon className="text-primary/70" strokeWidth={1.2} size={42} />
              </div>
              <h3 className="text-foreground mb-3 min-h-[40px] text-[14px] font-bold whitespace-pre-line">
                {lesson.title}
              </h3>
              <p className="text-foreground/80 text-[13px] leading-[1.6] whitespace-pre-line">
                {lesson.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
