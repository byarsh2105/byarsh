import Container from '@/components/layout/Container';
import Link from 'next/link';
import { allProjects } from 'content-collections';

export default function ProjectsCategories({
  activeFilter = 'All',
}: {
  activeFilter?: string;
}) {
  // Extract all tags from all projects
  const allTags = allProjects.flatMap((project) => project.tags);

  // Count frequencies of each tag
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Sort by frequency and take top 5
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);

  // Prepend 'All' category
  const categories = ['All', ...topTags];

  return (
    <section className="pt-6 pb-10">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              const href =
                category === 'All'
                  ? '/projects'
                  : `/projects?filter=${encodeURIComponent(category)}`;

              return (
                <Link
                  href={href}
                  key={category}
                  className={`rounded-full px-6 py-2.5 text-[17px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'hover:text-primary bg-transparent text-[#66615C] hover:bg-[#F6F1FA]'
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>

          {/* View All */}
          <Link
            href="/projects"
            className="text-primary inline-flex items-center gap-2 text-[15px] font-medium transition-all hover:gap-3"
          >
            Clear filters
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
