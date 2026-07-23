import Link from 'next/link';
import Container from './Container';
import Button from '@/components/ui/button';
import { navigation } from '@/components/layout/navigation';

export default function Header() {
  return (
    <header className="bg-background w-full">
      <Container>
        <div className="flex h-[92px] items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-end text-[45px] leading-none tracking-[-0.04em]"
          >
            <span className="font-heading italic">By</span>

            <span className="font-heading">Arsh</span>

            <span className="text-primary ml-0.5">.</span>
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`hover:text-primary relative text-[15px] font-medium tracking-[0.01em] transition-colors ${
                  index === 0 ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                {item.title}

                {index === 0 && (
                  <span className="bg-primary absolute left-1/2 mt-2 h-[2px] w-5 -translate-x-1/2 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Subscribe */}

          <Button className="bg-primary hover:bg-primary rounded-[14px] px-6 py-3 text-white">
            Subscribe
          </Button>
        </div>
      </Container>
    </header>
  );
}
