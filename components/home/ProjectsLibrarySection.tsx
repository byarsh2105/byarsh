import Container from '@/components/layout/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import LibraryCard from '@/components/ui/LibraryCard';
import { projects } from '@/constants/projects';
import { libraryBooks } from '@/constants/library';

export default function ProjectsLibrarySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-6xl border-t border-[#ECE5DC] pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Featured Projects */}

            <div className="pr-8">
              <h2 className="font-heading text-center text-[42px] leading-none">
                Featured Projects
              </h2>

              <p className="mt-3 text-center text-[17px] text-[#6D6863]">
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

              <div className="mt-8 flex justify-center">
                <button className="text-primary inline-flex items-center gap-2 font-medium transition-all hover:gap-3">
                  View all projects →
                </button>
              </div>
            </div>

            {/* Library */}

            <div className="border-l border-[#ECE5DC] pl-8">
              <h2 className="font-heading text-center text-[42px] leading-none">
                My Library
              </h2>

              <p className="mt-3 text-center text-[17px] text-[#6D6863]">
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

              <div className="mt-8 flex justify-center">
                <button className="text-primary inline-flex items-center gap-2 font-medium transition-all hover:gap-3">
                  Explore my library →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
