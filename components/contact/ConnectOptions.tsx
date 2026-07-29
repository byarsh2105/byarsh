import Container from '@/components/layout/Container';
import Link from 'next/link';
import { ArrowRightLeft } from 'lucide-react';
import { connectOptions } from '@/src/content/contact';

export default function ConnectOptions() {
  return (
    <section className="relative pt-4 pb-12">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="font-heading text-foreground mb-4 text-[28px] font-semibold">
            {connectOptions.title}
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-[#B092C5]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {connectOptions.options.map((opt, index) => {
            const Icon = opt.icon;
            return (
              <div
                key={index}
                className="border-border/50 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="border-border/60 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-sm">
                  <Icon
                    className="text-primary/80"
                    strokeWidth={2.5}
                    size={28}
                  />
                </div>

                <h3 className="font-heading mb-2 text-[22px] font-semibold text-black">
                  {opt.title}
                </h3>

                <p className="mb-5 h-[24px] text-[15px] text-black">
                  {opt.desc}
                </p>

                <Link
                  href={opt.href}
                  className="text-primary hover:text-primary/80 mt-auto flex h-[24px] items-center justify-center text-[15px] font-semibold transition-colors"
                  target="_blank"
                >
                  {opt.isEmail ? (
                    opt.linkText
                  ) : (
                    <ArrowRightLeft size={16} strokeWidth={1.5} />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
