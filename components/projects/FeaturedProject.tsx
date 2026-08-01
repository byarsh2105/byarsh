import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/src/content/projects';

export default function FeaturedProject() {
  const featured =
    projects.find((p) => p.slug === 'enterprise-ecommerce') || projects[0];

  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[28px] bg-[#F4EDF8] p-10 lg:p-14">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.25fr]">
            {/* Left */}
            <div>
              <p className="text-primary/70 mb-5 text-[13px] font-semibold tracking-[0.22em] uppercase">
                ⭐ Featured Project
              </p>

              <h2 className="font-heading text-foreground text-[42px] leading-[1.08] tracking-[-0.04em] lg:text-[54px]">
                {featured.title}
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {featured.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-5 py-2.5 text-[16px] font-medium text-[#1F1B18] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-[420px] text-[18px] leading-8 text-[#1F1B18]">
                {featured.shortDescription || featured.description}
              </p>

              <Link
                href={featured.button.href}
                className="text-primary mt-10 inline-flex items-center text-[17px] font-medium transition-all hover:gap-3"
              >
                {featured.button.text}
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Right */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
              <Image
                src={featured.featuredImage || featured.image}
                alt={featured.title}
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
