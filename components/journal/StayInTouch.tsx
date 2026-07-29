'use client';

import { useActionState, useEffect, useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { site } from '@/src/content/site';
import { subscribeAction } from '@/app/actions/subscribe';

export default function StayInTouch() {
  const { title, descriptionLines, buttonText, inputPlaceholder } =
    site.newsletter;
  const [state, formAction, isPending] = useActionState(subscribeAction, {
    success: false,
    message: '',
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsSubscribed(true);
    }
  }, [state]);
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
                {title}
              </h3>
              <p className="text-foreground/70 text-[15px]">
                {descriptionLines[0]}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex w-full flex-col gap-2 md:w-auto">
            {isSubscribed ? (
              <div className="flex h-12 w-full items-center justify-center rounded-full bg-green-50 px-8 text-[15px] font-medium text-green-700 shadow-sm md:h-14">
                You are subscribed!
              </div>
            ) : (
              <form
                action={formAction}
                className="bg-card flex w-full items-center rounded-full p-1.5 shadow-sm"
              >
                <input
                  type="email"
                  name="email"
                  placeholder={inputPlaceholder}
                  className="w-full border-none bg-transparent px-6 text-[15px] outline-none md:w-[240px]"
                  required
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-11 rounded-full px-8 disabled:opacity-70"
                >
                  {isPending ? '...' : buttonText}
                </Button>
              </form>
            )}
            {!state.success && state.message && (
              <p className="ml-4 text-[13px] text-red-500">{state.message}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
