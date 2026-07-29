import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Send } from 'lucide-react';
import { contactForm } from '@/src/content/contact';

export default function ContactForm() {
  return (
    <section id="contact-form" className="pt-12 pb-4">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="relative">
            <h2 className="font-heading mb-2 text-[34px] font-semibold text-black">
              {contactForm.form.title}
            </h2>
            <div className="mb-8 h-[2px] w-12 rounded-full bg-[#B092C5]"></div>

            <form className="relative z-10 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={contactForm.form.namePlaceholder}
                  className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={contactForm.form.emailPlaceholder}
                  className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder={contactForm.form.messagePlaceholder}
                  rows={6}
                  className="border-border/60 focus:border-primary/50 w-full resize-none rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                ></textarea>
              </div>
              <div>
                <Button className="bg-primary hover:bg-primary/90 h-12 w-full rounded-[8px] px-8 text-[15px] font-medium transition-colors sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />{' '}
                  {contactForm.form.buttonText}
                </Button>
              </div>
            </form>
          </div>

          {/* Right: Gratitude Prompt */}
          <div>
            <h2 className="font-heading mb-2 text-[30px] font-semibold text-black">
              {contactForm.gratitude.title}
            </h2>
            <div className="mb-8 h-[2px] w-12 rounded-full bg-[#B092C5]"></div>

            <div className="border-border/40 rounded-[16px] border bg-[#FCFAF7] p-8 shadow-sm sm:p-10">
              <p className="text-[16px] leading-[1.8] text-black/80">
                {contactForm.gratitude.descriptionLines[0]}
              </p>

              <div className="bg-primary/20 my-6 h-[1px] w-12"></div>

              <p className="mb-3 text-[18px] leading-relaxed font-medium text-black">
                {contactForm.gratitude.descriptionLines[1]}
              </p>

              <p className="mb-6 text-[15px] leading-[1.6] text-black/80">
                {contactForm.gratitude.descriptionLines[2]}
              </p>

              <div className="relative">
                <input
                  type="text"
                  placeholder={contactForm.gratitude.inputPlaceholder}
                  className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-white px-5 py-4 pr-24 text-[15px] text-black transition-colors outline-none"
                />
                <Button
                  type="button"
                  className="bg-primary hover:bg-primary/90 absolute top-2 right-2 h-[40px] rounded-[6px] px-5 text-[13px] font-medium text-white transition-colors"
                >
                  {contactForm.gratitude.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
