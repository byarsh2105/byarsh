'use client';

import { useActionState, useEffect, useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { subscribeAction } from '@/app/actions/subscribe';

export default function SharedNewsletter({
  noContainer = false,
}: {
  noContainer?: boolean;
}) {
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

  const content = (
    <div className="border-border/40 relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] border bg-[#FAF7F2] px-8 py-10 lg:flex-row">
      <div className="z-10 flex w-full items-center gap-6 lg:w-auto">
        <div className="bg-primary/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
          <Mail className="text-primary/70" size={28} strokeWidth={1.5} />
        </div>

        <div>
          <h2 className="font-heading mb-1 text-[24px] font-semibold text-black">
            Let's grow together.
          </h2>
          <p className="max-w-[360px] text-[15px] leading-[1.6] text-black sm:text-[16px]">
            Reflections, lessons, and updates from the journey — straight to
            your inbox.
          </p>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col sm:flex-row lg:w-auto lg:pr-4">
        {isSubscribed ? (
          <div className="flex h-[50px] w-full items-center justify-center rounded-md border border-green-200 bg-green-50 px-8 text-[15px] font-medium text-green-700 sm:min-w-[430px]">
            You are subscribed!
          </div>
        ) : (
          <div className="flex w-full flex-col gap-2 sm:w-auto">
            <form
              action={formAction}
              className="flex w-full flex-col sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="border-border focus:border-primary/50 h-[50px] w-full rounded-t-md border bg-white/80 px-5 text-[15px] transition-colors outline-none sm:w-[280px] sm:rounded-l-md sm:rounded-tr-none sm:border-r-0"
              />
              <Button
                type="submit"
                disabled={isPending}
                className="bg-primary hover:bg-primary/90 h-[50px] w-full rounded-b-md px-8 text-[15px] font-medium text-white transition-colors disabled:opacity-70 sm:w-auto sm:rounded-r-md sm:rounded-bl-none"
              >
                {isPending ? '...' : 'Join the Journey'}{' '}
                <span className="ml-2">→</span>
              </Button>
            </form>
            {!state.success && state.message && (
              <p className="text-[13px] text-red-500">{state.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (noContainer) {
    return content;
  }

  return (
    <section className="py-8 pb-10">
      <Container>{content}</Container>
    </section>
  );
}
