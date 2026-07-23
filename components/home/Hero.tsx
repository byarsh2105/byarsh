import Button from '@/components/ui/button';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[600px_1fr] xl:gap-24">
          {/* Left */}

          <div className="pl-8 xl:pl-8">
            <span className="text-primary mb-1 inline-block text-2xl">✦</span>

            <div className="font-heading text-[84px] leading-[0.98] font-medium tracking-[0.020em] xl:text-[68px]">
              <h1>writing.</h1>

              <h1>building.</h1>

              <h1>reflecting.</h1>

              <div className="pt-2">
                <h1 className="text-primary">growing.</h1>

                <div className="bg-primary mt-6 h-[2px] w-8 rounded-full"></div>
              </div>
            </div>
            <p className="font-heading mt-8 max-w-[440px] text-[22px] leading-[1.4] font-medium tracking-[0.01em] text-[#2B2B2B]">
              A place to pause, wonder, and grow.
            </p>

            <p className="mt-6 max-w-[450px] text-[17px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
              Welcome to ByArsh - a calm digital journal where stories, books,
              travel, technology and thoughtful ideas come together. Every page
              is created with intention, inviting you to slow down, stay
              curious, and keep learning.
            </p>

            <div className="mt-10 flex gap-5">
              <Button className="rounded-xl px-8 py-6">Start Reading</Button>

              <Button
                variant="outline"
                className="gap-2 rounded-xl border-gray-200 bg-white px-8 py-6 text-black hover:bg-gray-50"
              >
                Explore Projects <span>→</span>
              </Button>
            </div>
          </div>

          {/* Right */}

          <div className="bg-secondary h-[720px] rounded-[36px]"></div>
        </div>
      </Container>
    </section>
  );
}
