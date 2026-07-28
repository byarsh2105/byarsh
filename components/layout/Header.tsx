'use client';

import Link from 'next/link';
import Container from './Container';
import Button from '@/components/ui/button';
import { navigation } from '@/components/layout/navigation';
import { Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

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

          <nav className="ml-6 hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary after:bg-primary relative pb-2 text-[15px] font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? 'text-primary after:w-full'
                      : 'text-foreground/80 after:w-0'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Subscribe */}

          <Button className="-ml-14 h-10 rounded-[14px] px-5 text-[15px] font-medium">
            <Mail size={16} strokeWidth={2} className="mr-1" />
            Subscribe
          </Button>
        </div>
      </Container>
    </header>
  );
}
