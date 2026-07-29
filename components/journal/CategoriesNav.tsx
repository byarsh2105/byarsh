import Container from '@/components/layout/Container';

interface CategoriesNavProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoriesNav({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoriesNavProps) {
  return (
    <section className="py-12">
      <Container>
        <div className="border-border border-b">
          <ul className="scrollbar-hide flex items-center justify-between gap-8 overflow-x-auto pb-4">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <li key={category} className="shrink-0">
                  <button
                    onClick={() => onSelectCategory(category)}
                    className={`relative text-[17px] font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {category}
                    {isActive && (
                      <div className="bg-primary absolute right-0 -bottom-[17px] left-0 h-[2px]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
