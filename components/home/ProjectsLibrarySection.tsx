import Container from '@/components/layout/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import LibraryCard from '@/components/ui/LibraryCard';
import { projects } from '@/constants/projects';
import { libraryBooks } from '@/constants/library';

export default function ProjectsLibrarySection() {
  return (
    <section className="border-border/40 border-t bg-white py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            {/* Featured Projects */}

            <div className="flex h-full flex-col pr-8">
              <h2 className="font-heading text-center text-[36px] leading-none text-[#1B1815]">
                Featured Projects
              </h2>

              <p className="mt-4 text-center text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
                Things I'm building and proud of.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>

              <div className="mt-auto flex justify-center pt-8">
                <button className="text-primary/90 hover:text-primary inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3">
                  View all projects
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Library */}

            <div className="flex h-full flex-col border-l border-[#ECE5DC] pl-8">
              <h2 className="font-heading text-center text-[36px] leading-none text-[#1B1815]">
                My Library
              </h2>

              <p className="mt-4 text-center text-[16px] leading-[1.9] font-normal tracking-[0.005em] text-[#2B2B2B]">
                Books that inspire and shape my journey.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">
                {libraryBooks.map((book) => (
                  <LibraryCard
                    key={book.id}
                    title={book.title}
                    subtitle={book.subtitle}
                    image={book.image}
                  />
                ))}
              </div>

              <div className="mt-auto flex justify-center pt-8">
                <button className="text-primary/90 hover:text-primary inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3">
                  Explore my library
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
