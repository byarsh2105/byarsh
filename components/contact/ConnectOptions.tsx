import Container from '@/components/layout/Container';
import Link from 'next/link';
import { Mail, Users, Camera, Code2, ArrowRightLeft } from 'lucide-react';

export default function ConnectOptions() {
  const options = [
    {
      title: 'Email',
      desc: 'Drop me a note anytime.',
      linkText: 'hello@byarsh.com',
      href: 'mailto:hello@byarsh.com',
      icon: Mail,
      isEmail: true,
    },
    {
      title: 'LinkedIn',
      desc: "Let's connect",
      linkText: '',
      href: 'https://linkedin.com',
      icon: Users,
      isEmail: false,
    },
    {
      title: 'Instagram',
      desc: 'Behind the scenes',
      linkText: '',
      href: 'https://instagram.com',
      icon: Camera,
      isEmail: false,
    },
    {
      title: 'GitHub',
      desc: "Things I'm building",
      linkText: '',
      href: 'https://github.com',
      icon: Code2,
      isEmail: false,
    },
  ];

  return (
    <section className="relative py-12">
      {/* Decorative Branch Top Right */}
      <div className="absolute top-0 right-0 hidden -scale-x-100 opacity-40 lg:block">
        <svg
          width="120"
          height="160"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="rotate-12"
        >
          <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
          <path d="M9 13c1 2 4 2 5-1" />
          <path d="M13 10c1 2 4 2 5-1" />
          <path d="M15 7c1 2 4 2 5-1" />
          <path d="M6 18c1 2 4 2 5-1" />
        </svg>
      </div>

      <Container>
        <div className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-[28px] font-semibold">
            Ways to Connect
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary/30 h-[1px] w-12"></div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary/70"
            >
              <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
              <path d="M9 13c1 2 4 2 5-1" />
            </svg>
            <div className="bg-primary/30 h-[1px] w-12"></div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt, index) => {
            const Icon = opt.icon;
            return (
              <div
                key={index}
                className="border-border/50 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="border-border/60 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-sm">
                  <Icon
                    className="text-primary/80"
                    strokeWidth={1.5}
                    size={28}
                  />
                </div>

                <h3 className="font-heading text-foreground mb-2 text-[18px] font-semibold">
                  {opt.title}
                </h3>

                <p className="text-foreground/70 mb-4 h-[20px] text-[13px]">
                  {opt.desc}
                </p>

                <Link
                  href={opt.href}
                  className="text-primary/80 hover:text-primary mt-auto flex h-[24px] items-center justify-center text-[13px] font-medium transition-colors"
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
