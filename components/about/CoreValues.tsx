import Container from '@/components/layout/Container';
import {
  Leaf,
  Heart,
  Sprout,
  Lightbulb,
  PenTool,
  Users,
  CalendarCheck,
  HandHeart,
} from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      title: 'Peacefulness',
      icon: Leaf,
      description:
        'Create a calm and welcoming space where readers can slow down, reflect, and enjoy learning.',
    },
    {
      title: 'Authenticity',
      icon: Heart,
      description:
        'Share honest experiences, genuine stories, and real lessons with humility and openness.',
    },
    {
      title: 'Curiosity',
      icon: Sprout,
      description:
        'Embrace lifelong learning, creativity, and exploration with an open mind.',
    },
    {
      title: 'Practicality',
      icon: Lightbulb,
      description:
        'Share knowledge, ideas, and experiences that readers can apply in real life.',
    },
    {
      title: 'Simplicity',
      icon: PenTool,
      description:
        'Keep design, writing, and experiences clean, thoughtful, and easy to understand.',
    },
    {
      title: 'Connection',
      icon: Users,
      description:
        'Build meaningful relationships through authentic storytelling and shared experiences.',
    },
    {
      title: 'Consistency',
      icon: CalendarCheck,
      description:
        'Show up regularly, share thoughtfully, and grow one meaningful step at a time.',
    },
    {
      title: 'Kindness',
      icon: HandHeart,
      description:
        'Treat every reader with empathy, respect, and compassion, creating a space where everyone feels welcomed and valued.',
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <h2 className="font-heading text-foreground mb-8 text-[28px] font-semibold">
          Core Values
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div
                key={index}
                className="border-border/40 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm"
              >
                <div className="mb-4">
                  <Icon
                    className="text-primary/70"
                    strokeWidth={1.5}
                    size={36}
                  />
                </div>
                <h3 className="font-heading text-foreground mb-3 text-[18px] font-semibold">
                  {val.title}
                </h3>
                <p className="text-foreground/80 text-[13px] leading-[1.6]">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
