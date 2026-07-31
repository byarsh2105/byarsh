'use client';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Send } from 'lucide-react';
import { contactForm } from '@/src/content/contact';
import { useActionState } from 'react';
import { sendMessageAction, sendGratitudeAction } from '@/app/actions/contact';

export default function ContactForm() {
  const [messageState, messageAction, isMessagePending] = useActionState(
    sendMessageAction,
    { success: false, message: '' },
  );
  const [gratitudeState, gratitudeAction, isGratitudePending] = useActionState(
    sendGratitudeAction,
    { success: false, message: '' },
  );
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

            {messageState.success ? (
              <div className="relative z-10 flex flex-col items-center justify-center rounded-[8px] border border-green-200 bg-green-50 px-5 py-10 text-center text-green-700 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-[18px] font-semibold">
                  Message Sent!
                </h3>
                <p className="text-[15px]">{messageState.message}</p>
              </div>
            ) : (
              <form action={messageAction} className="relative z-10 space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={contactForm.form.namePlaceholder}
                    className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={contactForm.form.emailPlaceholder}
                    className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder={contactForm.form.messagePlaceholder}
                    rows={6}
                    className="border-border/60 focus:border-primary/50 w-full resize-none rounded-[8px] border bg-[#FCFAF7] px-5 py-4 text-[15px] text-black transition-colors outline-none"
                  ></textarea>
                </div>
                <div>
                  <Button
                    disabled={isMessagePending}
                    className="bg-primary hover:bg-primary/90 h-12 w-full rounded-[8px] px-8 text-[15px] font-medium transition-colors disabled:opacity-70 sm:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />{' '}
                    {isMessagePending
                      ? 'Sending...'
                      : contactForm.form.buttonText}
                  </Button>
                </div>
                {!messageState.success && messageState.message && (
                  <p className="text-[13px] text-red-600">
                    {messageState.message}
                  </p>
                )}
              </form>
            )}
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

              {gratitudeState.success ? (
                <div className="flex w-full items-center justify-between rounded-[8px] border border-green-200 bg-green-50 px-5 py-4 text-[15px] font-medium text-green-700">
                  {gratitudeState.message}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              ) : (
                <form action={gratitudeAction} className="flex flex-col gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder={contactForm.gratitude.emailPlaceholder}
                    className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-white px-5 py-4 text-[15px] text-black transition-colors outline-none"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      name="gratitude"
                      required
                      placeholder={contactForm.gratitude.inputPlaceholder}
                      className="border-border/60 focus:border-primary/50 w-full rounded-[8px] border bg-white px-5 py-4 pr-24 text-[15px] text-black transition-colors outline-none"
                    />
                    <Button
                      type="submit"
                      disabled={isGratitudePending}
                      className="bg-primary hover:bg-primary/90 absolute top-2 right-2 h-[40px] rounded-[6px] px-5 text-[13px] font-medium text-white transition-colors disabled:opacity-70"
                    >
                      {isGratitudePending
                        ? '...'
                        : contactForm.gratitude.buttonText}
                    </Button>
                  </div>
                  {!gratitudeState.success && gratitudeState.message && (
                    <p className="mt-2 text-[13px] text-red-600">
                      {gratitudeState.message}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
