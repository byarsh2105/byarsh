import Container from '@/components/layout/Container';
import { journeyLessons } from '@/src/content/journey';

export default function Lessons() {
  return (
    <div className="w-full pt-4">
      <h2 className="font-heading text-foreground mb-8 text-[28px] font-semibold">
        {journeyLessons.title}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {journeyLessons.lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          return (
            <div
              key={index}
              className="border-border/40 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm"
            >
              <div className="mb-6">
                <Icon className="text-primary/70" strokeWidth={1.2} size={52} />
              </div>
              <h3 className="text-foreground mb-3 min-h-[40px] text-[16px] leading-[1.4] font-semibold whitespace-pre-line">
                {lesson.title}
              </h3>
              <p className="text-foreground/80 text-[15px] leading-[1.6] whitespace-pre-line">
                {lesson.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
