import Container from '@/components/layout/Container';

export default function NewsletterSection() {
  return (
    <section className="border-t border-[#EEE7DF] bg-[#FCFAF7] py-10">
      <Container>
        <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          {/* Left: Text */}
          <div className="relative z-10 flex flex-col items-end text-right">
            <div className="relative inline-block">
              <h2 className="font-heading text-[36px] leading-none text-[#1B1815]">
                Join the Newsletter
              </h2>
              <span className="text-primary absolute -top-2 -right-6 text-xl">
                ✦
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-[1.8] font-normal tracking-[0.005em] text-[#2B2B2B]">
              One thoughtful email. No noise. No spam.
              <br />
              Just stories and ideas worth reading.
            </p>
          </div>

          {/* Right: Form */}
          <div className="relative z-10 flex items-center">
            <form className="flex w-full min-w-[380px] overflow-hidden rounded-md border border-[#DDD5CC] bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-5 py-3 text-[14px] outline-none placeholder:text-[#A8A29B]"
              />

              <button className="bg-primary hover:bg-primary/90 px-8 text-[14px] font-medium text-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
