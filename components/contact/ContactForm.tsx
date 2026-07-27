import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Send, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const faqs = [
    {
      q: 'What can I contact you about?',
      a: 'Projects, collaborations, ideas, questions, or just a friendly hello.',
    },
    {
      q: 'Do you accept freelance work?',
      a: 'Sometimes! It depends on the project and my current availability.',
    },
    {
      q: 'Can we just say hello?',
      a: 'Absolutely, I love connecting with amazing people.',
    },
  ];

  return (
    <section className="py-12 pb-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="relative">
            <h2 className="font-heading text-foreground mb-2 text-[24px] font-semibold">
              Send a Message
            </h2>
            <div className="bg-border mb-8 h-[2px] w-8"></div>

            <form className="relative z-10 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-4 py-3 text-[14px] transition-colors outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-4 py-3 text-[14px] transition-colors outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="border-border/60 focus:border-primary/50 w-full resize-none rounded-[8px] border bg-[#FCFAF7] px-4 py-3 text-[14px] transition-colors outline-none"
                ></textarea>
              </div>
              <div>
                <Button className="bg-primary/60 hover:bg-primary/70 h-11 w-full rounded-[8px] px-6 text-[14px] font-medium transition-colors sm:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>

            {/* Decorative SVG */}
            <div className="pointer-events-none absolute bottom-0 -left-16 z-0 hidden opacity-40 lg:block">
              <svg
                width="80"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 21s-1-6 2-9c2-2 6-3 9-3" />
                <path d="M9 13c1 2 4 2 5-1" />
                <path d="M13 10c1 2 4 2 5-1" />
                <path d="M15 7c1 2 4 2 5-1" />
                <path d="M6 18c1 2 4 2 5-1" />
              </svg>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h2 className="font-heading text-foreground mb-2 text-[24px] font-semibold">
              Frequently Asked
            </h2>
            <div className="bg-border mb-8 h-[2px] w-8"></div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <span className="font-heading text-primary/60 mt-0.5 text-[18px]">
                      Q.
                    </span>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-foreground text-[14px] font-medium">
                          {faq.q}
                        </h3>
                        <ChevronDown
                          className="text-muted-foreground/50 group-hover:text-primary/50 shrink-0 transition-colors"
                          size={16}
                        />
                      </div>
                      <p className="text-foreground/70 text-[13px] leading-[1.6]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
