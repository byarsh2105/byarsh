import Container from '@/components/layout/Container';
import { contactSignoff } from '@/src/content/contact';

export default function ContactSignoff() {
  return (
    <section className="relative overflow-hidden pt-4 pb-4">
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="text-primary/70 mb-4 font-serif text-[60px] leading-none">
            {contactSignoff.quoteMark}
          </div>

          <h2 className="font-heading text-foreground mb-2 text-[22px] leading-[1.4] font-medium sm:text-[26px]">
            {contactSignoff.messageLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < contactSignoff.messageLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="mb-2">
            <span className="text-muted-foreground mr-2">—</span>
            <span className="font-signature text-primary text-[32px] lowercase italic">
              {contactSignoff.name}
            </span>
          </div>

          <div className="flex w-full max-w-[700px] items-center gap-6">
            <div className="h-[1px] flex-1 border-b-2 border-dotted border-[#B092C5]/80"></div>
            <span className="font-signature text-primary pt-2 text-[36px] whitespace-nowrap lowercase italic">
              {contactSignoff.farewell}
            </span>
            <div className="h-[1px] flex-1 border-b-2 border-dotted border-[#B092C5]/80"></div>
          </div>

          <div className="text-primary mt-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
