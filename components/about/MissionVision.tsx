import Container from '@/components/layout/Container';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="border-border/40 flex flex-col gap-6 rounded-[20px] border bg-[#FCFAF7] p-8 shadow-sm md:flex-row lg:p-10">
            <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Target
                className="text-foreground/80"
                strokeWidth={1.5}
                size={24}
              />
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4 text-[24px] font-semibold">
                Mission
              </h3>
              <p className="text-foreground/80 text-[14px] leading-[1.7]">
                ByArsh exists to create a calm and genuine corner of the
                internet where learning, creativity, and everyday life come
                together. It's a place where I document what I'm building,
                learning, reading, and experiencing—through software
                engineering, books, travel, poetry, and the small moments that
                shape life. By sharing knowledge, stories, and real experiences,
                I hope to inspire both personal and professional growth, and
                create a space that feels peaceful, genuine, and always worth
                returning to.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="border-border/40 flex flex-col gap-6 rounded-[20px] border bg-[#FCFAF7] p-8 shadow-sm md:flex-row lg:p-10">
            <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Eye className="text-foreground/80" strokeWidth={1.5} size={24} />
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4 text-[24px] font-semibold">
                Vision
              </h3>
              <p className="text-foreground/80 text-[14px] leading-[1.7]">
                To become a trusted and timeless digital journal that people
                return to for thoughtful ideas, practical knowledge, and genuine
                stories—encouraging curiosity, inspiring lifelong personal and
                professional growth, and creating a lasting sense of connection.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
