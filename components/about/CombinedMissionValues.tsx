import Container from '@/components/layout/Container';
import { Target, Eye } from 'lucide-react';
import {
  missionVision,
  coreValues,
  whatYouWillFind,
} from '@/src/content/about';

export default function CombinedMissionValues() {
  return (
    <section className="relative py-12">
      <Container>
        {/* Mission & Vision */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="flex flex-col gap-6 md:flex-row lg:pr-10">
            <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Target
                className="text-foreground/80"
                strokeWidth={1.5}
                size={24}
              />
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4 text-[30px] font-semibold">
                {missionVision.mission.title}
              </h3>
              <div className="my-5 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>
              <p className="text-[15px] leading-[1.7] text-black">
                {missionVision.mission.description}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6 md:flex-row lg:pl-10">
            <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Eye className="text-foreground/80" strokeWidth={1.5} size={24} />
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4 text-[30px] font-semibold">
                {missionVision.vision.title}
              </h3>
              <div className="my-5 h-[2px] w-10 rounded-full bg-[#B092C5]"></div>
              <p className="text-[15px] leading-[1.7] text-black">
                {missionVision.vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-border/60 mt-12 border-t pt-12">
          <h2 className="font-heading text-foreground text-[28px] font-semibold">
            {coreValues.title}
          </h2>
          <div className="mt-4 mb-8 h-[2px] w-16 rounded-full bg-[#B092C5]"></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="border-border/40 flex flex-col items-center rounded-[16px] border bg-[#FCFAF7] p-8 text-center shadow-sm"
                >
                  <div className="mb-4">
                    <Icon
                      className="text-primary/70"
                      strokeWidth={1.5}
                      size={36}
                    />
                  </div>
                  <h3 className="font-heading mb-3 text-[20px] font-semibold text-black">
                    {val.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-black">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You'll Find Here */}
        <div className="mt-12">
          <h2 className="font-heading text-foreground text-[28px] font-semibold">
            {whatYouWillFind.title}
          </h2>
          <div className="mt-4 mb-6 h-[2px] w-16 rounded-full bg-[#B092C5]"></div>
          <div className="border-border/60 border-t pt-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
              {whatYouWillFind.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left ${
                      index !== whatYouWillFind.items.length - 1
                        ? 'lg:border-border/60 lg:border-r lg:pr-6'
                        : ''
                    } ${index !== 0 ? 'lg:pl-6' : ''}`}
                  >
                    <div className="text-primary/70 shrink-0">
                      <Icon strokeWidth={1.5} size={28} />
                    </div>
                    <p className="text-[15px] leading-[1.5] font-medium whitespace-pre-line text-black">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
