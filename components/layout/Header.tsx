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
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary after:bg-primary relative pb-2 text-[15px] font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Subscribe */}

          <Button className="h-10 rounded-[14px] px-5 text-[15px] font-medium">
            Subscribe
          </Button>
        </div>
      </Container>
    </header>
  );
}
