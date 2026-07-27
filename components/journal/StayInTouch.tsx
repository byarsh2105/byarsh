import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';

export default function StayInTouch() {
  return (
    <section className="pt-12 pb-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#f8eff9] p-8 md:flex-row md:p-10">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="bg-primary/10 text-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-1 flex items-center gap-2 text-[28px]">
                Let's stay in touch ♡
              </h3>
              <p className="text-foreground/70 text-[15px]">
                Get little notes from me in your inbox.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="bg-card flex w-full items-center rounded-full p-1.5 shadow-sm md:w-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border-none bg-transparent px-6 text-[15px] outline-none md:w-[240px]"
              required
            />
            <Button className="h-11 rounded-full px-8">Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
