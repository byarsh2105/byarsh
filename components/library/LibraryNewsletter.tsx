import Container from '@/components/layout/Container';
import Button from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function LibraryNewsletter() {
  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-black/5 bg-transparent px-8 py-10 lg:flex-row">
        <div className="z-10 flex w-full items-center gap-6 lg:w-auto">
          <div className="bg-primary/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
            <Mail className="text-primary/70" size={28} strokeWidth={1.5} />
          </div>

          <div>
            <h2 className="font-heading text-foreground mb-1 text-[24px] font-semibold">
              Reading together.
            </h2>
            <p className="text-foreground max-w-[340px] text-[15px]">
              Monthly book notes, recommendations, and cozy reads — straight to
              your inbox.
            </p>
          </div>
        </div>

        <div className="z-10 flex w-full flex-col items-center gap-2 pr-8 sm:flex-row sm:gap-0 lg:w-auto">
          <div className="w-full sm:w-[280px]">
            <input
              type="email"
              placeholder="Your email address"
              className="border-border focus:border-primary/50 h-12 w-full rounded-sm border bg-white/60 px-5 text-[14px] transition-colors outline-none sm:rounded-r-none sm:border-r-0"
            />
          </div>
          <Button className="h-12 w-full rounded-sm bg-[#B092C5] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#9A7BB0] sm:w-auto sm:rounded-l-none">
            Join the Library <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
