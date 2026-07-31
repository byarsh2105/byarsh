'use client';

import { useActionState, useEffect, useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import Image from 'next/image';
import { subscribeAction } from '@/app/actions/subscribe';
import { stayConnected } from '@/src/content/contact';

export default function StayConnected() {
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
    <section className="py-4">
      <Container>
        <div className="relative flex min-h-[260px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] bg-[#E6DFEC] p-8 shadow-sm md:flex-row lg:p-12">
          <div className="relative z-10 w-full max-w-[380px] lg:w-auto">
            <h2 className="font-heading text-[28px] font-semibold text-black">
              {stayConnected.title}
            </h2>
            <div className="mt-2 mb-5 h-[2px] w-12 rounded-full bg-[#B092C5]"></div>

            <p className="mb-8 text-[16px] leading-[2] tracking-wider text-black">
              {stayConnected.description}
            </p>

            {isSubscribed ? (
              <div className="flex h-[46px] w-full max-w-[360px] items-center justify-center rounded-[8px] border border-green-200 bg-green-50 text-[15px] font-medium text-green-700">
                {stayConnected.successMessage}
              </div>
            ) : (
              <div className="flex w-full max-w-[360px] flex-col gap-2">
                <form action={formAction} className="flex w-full">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={stayConnected.inputPlaceholder}
                    className="border-border/40 focus:border-primary/50 h-[46px] min-w-0 flex-1 rounded-l-[8px] border border-r-0 bg-[#FCFAF7] px-5 text-[14px] text-black transition-colors outline-none placeholder:text-black/50"
                  />
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="h-[46px] shrink-0 rounded-l-none rounded-r-[8px] bg-[#9D85AE] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#8B759A] disabled:opacity-70"
                  >
                    {isPending
                      ? stayConnected.buttonLoadingText
                      : stayConnected.buttonText}
                  </Button>
                </form>
                {!state.success && state.message && (
                  <p className="text-[13px] text-red-600">{state.message}</p>
                )}
              </div>
            )}
          </div>

          <div className="absolute top-0 right-0 bottom-0 z-0 w-[80%] opacity-30 md:w-[55%] md:opacity-100">
            <Image
              src={stayConnected.backgroundImage.src}
              alt={stayConnected.backgroundImage.alt}
              fill
              className="mask-image-to-l object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 70%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 70%)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
