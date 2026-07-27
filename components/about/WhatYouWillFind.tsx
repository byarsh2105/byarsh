import Container from '@/components/layout/Container';
import { Pen, Laptop, BookOpen, Globe, Sprout, Feather } from 'lucide-react';

export default function WhatYouWillFind() {
  const items = [
    { label: 'Stories &\nReflections', icon: Pen },
    { label: 'Projects &\nExperiments', icon: Laptop },
    { label: 'Books &\nLearning', icon: BookOpen },
    { label: 'Travel &\nExperiences', icon: Globe },
    { label: 'Personal\nGrowth', icon: Sprout },
    { label: 'Poetry &\nThoughts', icon: Feather },
  ];

  return (
    <section className="py-12">
      <Container>
        <h2 className="font-heading text-foreground mb-6 text-[28px] font-semibold">
          What you'll find here
        </h2>

        <div className="border-border/60 border-t pt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left"
                >
                  <div className="text-primary/70 shrink-0">
                    <Icon strokeWidth={1.5} size={28} />
                  </div>
                  <p className="text-foreground text-[13px] leading-[1.4] font-medium whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
