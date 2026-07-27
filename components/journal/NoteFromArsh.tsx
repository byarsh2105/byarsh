import Container from '@/components/layout/Container';

export default function NoteFromArsh() {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
          {/* Left Pill */}
          <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#f4ebf9] px-10 py-6">
            <span className="font-signature text-foreground text-[36px] lowercase italic">
              A note from arsh ♡
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="bg-border hidden h-32 w-[1px] md:block"></div>

          {/* Right Text */}
          <div className="max-w-[480px]">
            <p className="text-foreground/80 mb-6 text-[17px] leading-[1.8]">
              I started ByArsh to create a quieter corner of the internet— one
              where curiosity, creativity, and thoughtful ideas can grow. Every
              article here is part of my journey, and I'm glad you're here to
              share it.
            </p>
            <div className="flex w-full justify-end">
              <span className="font-signature text-primary/80 text-[36px] lowercase italic">
                - Arsh ♡
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
