import Container from '@/components/layout/Container';
import { journalHero } from '@/src/content/journal';

export default function NoteFromArsh() {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
          {/* Left Pill */}
          <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#f4ebf9] px-10 py-6">
            <span className="font-signature text-foreground text-[36px] lowercase italic">
              {journalHero.noteFromArsh.label}
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="bg-border hidden h-32 w-[1px] md:block"></div>

          {/* Right Text */}
          <div className="max-w-[480px]">
            <p className="text-foreground/80 mb-6 text-[17px] leading-[1.8]">
              {journalHero.noteFromArsh.text}
            </p>
            <div className="flex w-full justify-end">
              <span className="font-signature text-primary/80 text-[36px] lowercase italic">
                {journalHero.noteFromArsh.signature}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
