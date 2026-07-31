import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects } from 'content-collections';

export default function AllProjects({
  activeFilter = 'All',
}: {
  activeFilter?: string;
}) {
  // Sort projects by date descending (latest first)
  const sortedProjects = [...allProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // Filter projects by activeFilter
  const filteredProjects =
    activeFilter === 'All'
      ? sortedProjects
      : sortedProjects.filter(
          (project) =>
            project.tags.includes(activeFilter) ||
            project.category.includes(activeFilter),
        );

  return (
    <section id="all-projects" className="py-16 pb-28">
      <Container>
        {/* Header */}
        <div className="mb-12 border-b border-[#ECE7E1] pb-5">
          <h2 className="font-heading text-[40px] text-[#1F1B18]">
            {activeFilter === 'All'
              ? 'All Projects'
              : `${activeFilter} Projects`}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#ECE7E1] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative aspect-[1.15/1] overflow-hidden"
              >
                <Image
                  src={project.image || '/images/projects/p1.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-[28px] leading-tight font-bold text-[#1F1B18]">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="mt-5 mb-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F6F1FA] px-3.5 py-1 text-[13px] font-medium text-[#1F1B18]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-full bg-[#F6F1FA] px-3.5 py-1 text-[13px] font-medium text-[#1F1B18]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="line-clamp-3 flex-1 text-[16px] leading-7 text-[#1F1B18]">
                  {project.description}
                </p>

                {/* Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary mt-7 inline-flex items-center gap-2 text-[19px] font-medium transition-all hover:gap-3"
                >
                  View Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#6F6A66]">
              No projects found for this category.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
