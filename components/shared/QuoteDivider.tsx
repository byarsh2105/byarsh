import Container from '@/components/layout/Container';

interface QuoteDividerProps {
  quote: string;
}

export default function QuoteDivider({ quote }: QuoteDividerProps) {
  return (
    <div className="overflow-hidden py-6">
      <Container>
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[800px] items-center">
            <div className="bg-border/80 h-[1px] flex-1"></div>
            <div className="flex flex-col items-center px-6">
              <span className="font-signature text-primary/80 text-[36px] whitespace-nowrap lowercase italic">
                {quote}
              </span>
            </div>
            <div className="bg-border/80 h-[1px] flex-1"></div>
          </div>
          <div className="text-primary mt-4 text-[24px]">♡</div>
        </div>
      </Container>
    </div>
  );
}
