import Container from '@/components/layout/Container';

export default function CategoriesNav() {
  const categories = [
    { name: 'All', active: true },
    { name: 'Books', active: false },
    { name: 'Travel', active: false },
    { name: 'Poetry', active: false },
    { name: 'Reflections', active: false },
    { name: 'Personal Growth', active: false },
    { name: 'Self Discovery', active: false },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="border-border border-b">
          <ul className="scrollbar-hide flex items-center justify-between gap-8 overflow-x-auto pb-4">
            {categories.map((category) => (
              <li key={category.name} className="shrink-0">
                <button
                  className={`relative text-[17px] font-medium transition-colors ${
                    category.active
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {category.name}
                  {category.active && (
                    <div className="bg-primary absolute right-0 -bottom-[17px] left-0 h-[2px]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
