import Container from '@/components/layout/Container';
import { journeyTimeline } from '@/src/content/journey';

export default function Timeline() {
  return (
    <div className="w-full">
      <h2 className="font-heading text-foreground mb-16 text-[28px] font-semibold">
        {journeyTimeline.title}
      </h2>

      <div className="relative">
        {/* Main timeline line container */}
        <div className="absolute top-[28px] right-0 left-0 -z-10 flex items-center px-[8%]">
          {/* Solid Line */}
          <div className="bg-border h-[2px] flex-[4]"></div>
          {/* Dashed Line */}
          <div className="border-border/60 ml-[-2px] h-[2px] flex-[1] border-b-2 border-dashed"></div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {journeyTimeline.events.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`border-border/40 mb-6 flex h-16 w-16 items-center justify-center rounded-full border bg-[#F4EFEC] shadow-sm ${item.isFuture ? 'bg-transparent' : ''}`}
                >
                  <Icon
                    className="text-primary/70"
                    strokeWidth={1.5}
                    size={32}
                  />
                </div>

                <div className="mb-2">
                  <span
                    className={`text-[15px] font-bold ${item.isFuture ? 'text-primary/60' : 'text-foreground'}`}
                  >
                    {item.year}
                  </span>
                </div>

                <h3 className="text-foreground mb-2 min-h-[40px] text-[15px] leading-[1.4] font-medium whitespace-pre-line">
                  {item.title}
                </h3>

                <p className="text-foreground/80 text-[14px] leading-[1.6] whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
