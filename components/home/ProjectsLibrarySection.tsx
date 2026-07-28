import Container from '@/components/layout/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import LibraryCard from '@/components/ui/LibraryCard';
import { projects } from '@/src/content/projects';
import { books } from '@/src/content/books';
import { site } from '@/src/content/site';
import Link from 'next/link';

export default function ProjectsLibrarySection() {
  const { featuredProjects, librarySection } = site;
  return (
    <section className="border-border/40 border-t bg-white py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            {/* Featured Projects */}

            <div className="flex h-full flex-col pr-8">
              <h2 className="font-heading text-center text-[36px] leading-none text-[#1B1815]">
                {featuredProjects.title}
              </h2>

              <p className="mt-4 text-center text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
                {featuredProjects.description}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {projects
                  .filter((project) => project.featured && project.published)
                  .map((project) => (
                    <ProjectCard
                      key={project.slug}
                      icon={project.icon}
                      title={project.title}
                      description={project.description}
                      href={`/projects/${project.slug}`}
                    />
                  ))}
              </div>

              <div className="mt-auto flex justify-center pt-8">
                <Link href={featuredProjects.button.href}>
                  <button className="text-primary/90 hover:text-primary inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3">
                    {featuredProjects.button.text}
                    <span>→</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Library */}

            <div className="flex h-full flex-col border-l border-[#ECE5DC] pl-8">
              <h2 className="font-heading text-center text-[36px] leading-none text-[#1B1815]">
                {librarySection.title}
              </h2>

              <p className="mt-4 text-center text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
                {librarySection.description}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">
                {books.map((book) => (
                  <LibraryCard
                    key={book.slug}
                    title={book.title}
                    subtitle={book.subtitle}
                    image={book.image}
                    href={`/library/${book.slug}`}
                  />
                ))}
              </div>

              <div className="mt-auto flex justify-center pt-8">
                <Link href={librarySection.button.href}>
                  <button className="text-primary/90 hover:text-primary inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3">
                    {librarySection.button.text}
                    <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
