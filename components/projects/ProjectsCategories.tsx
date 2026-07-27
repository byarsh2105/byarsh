import Container from '@/components/layout/Container';
import Link from 'next/link';

export default function ProjectsCategories() {
  const categories = [
    { name: 'All', active: true },
    { name: 'Odoo', active: false },
    { name: 'Python', active: false },
    { name: 'Open Source', active: false },
    { name: 'Experiments', active: false },
    { name: 'Products', active: false },
  ];

  return (
    <section className="pt-6 pb-10">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}

          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`rounded-full px-6 py-2.5 text-[17px] font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-primary text-white shadow-sm'
                    : 'hover:text-primary bg-transparent text-[#66615C] hover:bg-[#F6F1FA]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* View All */}

          <Link
            href="/projects"
            className="text-primary inline-flex items-center gap-2 text-[15px] font-medium transition-all hover:gap-3"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
