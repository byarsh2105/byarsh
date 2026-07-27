import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProject() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[28px] bg-[#F4EDF8] p-10 lg:p-14">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.25fr]">
            {/* Left */}
            <div>
              <p className="text-primary/70 mb-5 text-[13px] font-semibold tracking-[0.22em] uppercase">
                Featured Project
              </p>

              <h2 className="font-heading text-foreground text-[54px] leading-[1.08] tracking-[-0.04em]">
                Attendance
                <br />
                Automation
                <br />
                System
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Odoo 19', 'Python', 'PostgreSQL', 'JavaScript'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-foreground/70 rounded-full bg-white px-5 py-2.5 text-[16px] shadow-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <p className="text-foreground/75 mt-8 max-w-[420px] text-[18px] leading-8">
                A complete attendance automation system for Odoo that handles
                check-in/out, late mark, early exit, notifications and violation
                tracking.
              </p>

              <Link
                href="/projects/attendance"
                className="text-primary mt-10 inline-flex items-center text-[17px] font-medium transition-all hover:gap-3"
              >
                View Case Study
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Right */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
              <Image
                src="/images/projects/featured-project.png"
                alt="Attendance Dashboard"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
