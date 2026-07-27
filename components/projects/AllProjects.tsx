import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function AllProjects() {
  const projects = [
    {
      title: 'HR Expense Portal',
      tags: ['Odoo', 'Python', 'Portal'],
      description:
        'A portal solution for employees to submit and track their expense claims with approvals.',
      link: '/projects/hr-expense-portal',
      image: '/images/projects/p1.jpg',
    },
    {
      title: 'Face & Geo Attendance',
      tags: ['Odoo', 'Python', 'JavaScript'],
      description:
        'Attendance system using face recognition and geo-location validation in Odoo.',
      link: '/projects/face-geo-attendance',
      image: '/images/projects/p2.jpg',
    },
    {
      title: 'REST API Collection',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      description:
        'A collection of REST APIs for various business operations with clean documentation.',
      link: '/projects/rest-api-collection',
      image: '/images/projects/p3.jpg',
    },
    {
      title: 'Odoo Custom Modules',
      tags: ['Odoo', 'Python', 'XML'],
      description:
        'A set of custom modules built to solve real business challenges in Odoo.',
      link: '/projects/odoo-custom-modules',
      image: '/images/projects/p4.jpg',
    },
  ];

  return (
    <section className="py-16 pb-28">
      <Container>
        {/* Header */}

        <div className="mb-12 flex items-center justify-between border-b border-[#ECE7E1] pb-5">
          <h2 className="font-heading text-[40px] text-[#1F1B18]">
            All Projects
          </h2>

          <div className="text-[17px] text-[#6F6A66]">
            Sort by:{' '}
            <span className="cursor-pointer font-medium text-[#1F1B18]">
              Latest ⌄
            </span>
          </div>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#ECE7E1] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}

              <Link
                href={project.link}
                className="relative aspect-[1.15/1] overflow-hidden"
              >
                <Image
                  src={project.image}
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F6F1FA] px-3 py-1 text-[12px] font-medium text-[#6C6470]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}

                <p className="flex-1 text-[15px] leading-7 text-[#333333]">
                  {project.description}
                </p>

                {/* Button */}

                <Link
                  href={project.link}
                  className="text-primary mt-7 inline-flex items-center gap-2 text-[19px] font-medium transition-all hover:gap-3"
                >
                  View Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
