'use client';

import { useActionState, useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { libraryNewsletter } from '@/src/content/books';
import { subscribeAction } from '@/app/actions/subscribe';

const initialState = {
  message: '',
  success: false,
};

export default function LibraryNewsletter() {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    initialState,
  );
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsSubscribed(true);
    }
  }, [state]);

  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-black/5 bg-transparent px-8 py-10 lg:flex-row">
        <div className="z-10 flex w-full items-center gap-6 lg:w-auto">
          <div className="bg-primary/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
            <Mail className="text-primary/70" size={28} strokeWidth={1.5} />
          </div>

          <div>
            <h2 className="font-heading text-foreground mb-1 text-[24px] font-semibold">
              {libraryNewsletter.title}
            </h2>
            <p className="text-foreground max-w-[340px] text-[15px]">
              {libraryNewsletter.description}
            </p>
          </div>
        </div>

        <div className="z-10 flex w-full flex-col lg:w-auto">
          {isSubscribed ? (
            <div className="flex h-12 items-center justify-center rounded-sm border border-green-500/20 bg-green-500/10 px-8 font-medium text-green-700">
              You are subscribed!
            </div>
          ) : (
            <>
              <form
                action={formAction}
                className="flex w-full flex-col items-center gap-2 sm:flex-row sm:gap-0"
              >
                <div className="w-full sm:w-[280px]">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={libraryNewsletter.inputPlaceholder}
                    className="border-border focus:border-primary/50 h-12 w-full rounded-sm border bg-white/60 px-5 text-[14px] transition-colors outline-none sm:rounded-r-none sm:border-r-0"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full rounded-sm bg-[#B092C5] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#9A7BB0] sm:w-auto sm:rounded-l-none"
                >
                  {isPending ? (
                    'Joining...'
                  ) : (
                    <>
                      {libraryNewsletter.buttonText}{' '}
                      <span className="ml-2">→</span>
                    </>
                  )}
                </Button>
              </form>
              {!state.success && state.message && (
                <p className="mt-2 text-center text-[13px] font-medium text-red-500 sm:text-left">
                  {state.message}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
