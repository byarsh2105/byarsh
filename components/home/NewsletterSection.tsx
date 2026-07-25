import Container from '@/components/layout/Container';

export default function NewsletterSection() {
  return (
    <section className="border-t border-[#EEE7DF] bg-[#FCFAF7] py-20">
      <Container>
        <div className="relative flex flex-col items-center">
          {/* Decorative star */}

          <span className="text-primary absolute top-2 right-[28%] text-xl">
            ✦
          </span>

          {/* Heading */}

          <h2 className="font-heading text-[58px] leading-none tracking-[-0.03em]">
            Join the Newsletter
          </h2>

          {/* Subtitle */}

          <p className="mt-5 text-center text-[20px] leading-8 text-[#68635F]">
            One thoughtful email. No noise. No spam.
            <br />
            Just stories and ideas worth reading.
          </p>

          {/* Email Form */}

          <form className="mt-12 flex w-full max-w-[720px] overflow-hidden rounded-xl border border-[#DDD5CC] bg-white">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-6 py-5 text-[16px] outline-none placeholder:text-[#A8A29B]"
            />

            <button className="bg-primary hover:bg-primary/90 px-10 text-white transition">
              Subscribe
            </button>
          </form>

          {/* Stamp Decoration */}

          <div className="absolute top-10 right-0 text-[80px] opacity-10">
            ◌
          </div>
        </div>
      </Container>
    </section>
  );
}
