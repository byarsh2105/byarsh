'use client';

import { useActionState, useEffect, useState } from 'react';
import Container from '@/components/layout/Container';
import { site } from '@/src/content/site';
import { subscribeAction } from '@/app/actions/subscribe';

export default function NewsletterSection() {
  const { newsletter } = site;
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [state, formAction, isPending] = useActionState(subscribeAction, {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (state.success) {
      setIsSubscribed(true);
    }
  }, [state]);

  return (
    <section
      id="newsletter"
      className="border-t border-[#EEE7DF] bg-[#FCFAF7] py-10"
    >
      <Container>
        <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          {/* Left: Text */}
          <div className="relative z-10 flex flex-col items-end text-right">
            <div className="relative inline-block">
              <h2 className="font-heading text-[36px] leading-none text-[#1B1815]">
                {newsletter.title}
              </h2>
              <span className="text-primary absolute -top-2 -right-6 text-xl">
                ✦
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-[1.8] font-normal tracking-[0.005em] text-[#2B2B2B]">
              {newsletter.descriptionLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < newsletter.descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Right: Form */}
          <div className="relative z-10 flex w-full items-center justify-center lg:w-auto lg:justify-start">
            {isSubscribed ? (
              <div className="flex w-full max-w-[380px] items-center justify-center rounded-md border border-[#DDD5CC] bg-white py-3 text-[15px] font-medium text-green-700 shadow-sm sm:min-w-[380px]">
                You are subscribed!
              </div>
            ) : (
              <div className="flex w-full max-w-[380px] flex-col gap-2 sm:min-w-[380px]">
                <form
                  action={formAction}
                  className="flex w-full overflow-hidden rounded-md border border-[#DDD5CC] bg-white shadow-sm"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-label="Email address"
                    placeholder={newsletter.inputPlaceholder}
                    className="flex-1 bg-transparent px-5 py-3 text-[14px] outline-none placeholder:text-[#A8A29B]"
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    aria-label="Subscribe"
                    className="bg-primary hover:bg-primary/90 px-8 text-[14px] font-medium text-white transition disabled:opacity-70"
                  >
                    {isPending ? '...' : newsletter.buttonText}
                  </button>
                </form>
                {!state.success && state.message && (
                  <p className="text-[13px] text-red-500">{state.message}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
