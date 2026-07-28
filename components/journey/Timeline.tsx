import Container from '@/components/layout/Container';
import {
  GraduationCap,
  Code2,
  Briefcase,
  Layers,
  Feather,
  Star,
} from 'lucide-react';

export default function Timeline() {
  const timelineData = [
    {
      year: '2022',
      title: 'Graduated in\nComputer Science',
      desc: 'The beginning of\nmy journey.',
      icon: GraduationCap,
    },
    {
      year: '2023',
      title: 'Started my journey\nwith Odoo',
      desc: 'Discovered my passion\nfor backend development.',
      icon: Code2,
    },
    {
      year: '2024',
      title: 'Built custom\nERP solutions',
      desc: 'Solved real business\nproblems with code.',
      icon: Briefcase,
    },
    {
      year: '2025',
      title: 'Expanded into\nFull-Stack',
      desc: 'Bridged the gap between\nbackend logic and design.',
      icon: Layers,
    },
    {
      year: '2026',
      title: 'Created ByArsh',
      desc: 'A space to share ideas,\nprojects, and stories\nthat matter.',
      icon: Feather,
    },
    {
      year: 'Next Chapter',
      title: 'Still being\nwritten...',
      desc: '♡',
      icon: Star,
      isFuture: true,
    },
  ];

  return (
    <div className="w-full">
      <h2 className="font-heading text-foreground mb-16 text-[28px] font-semibold">
        A Timeline of Becoming
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
          {timelineData.map((item, index) => {
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
