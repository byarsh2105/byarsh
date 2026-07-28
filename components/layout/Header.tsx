'use client';

import Link from 'next/link';
import Container from './Container';
import Button from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { site } from '@/src/content/site';

export default function Header() {
  const pathname = usePathname();
  const { navigation } = site;

  // Split logo text safely to preserve exact UI styling ("By", "Arsh", ".")
  // Fallback to basic rendering if the text format changes drastically.
  const logoText = navigation.logo.text;
  const isByArshFormat = logoText.startsWith('By') && logoText.endsWith('.');
  const logoFirstPart = isByArshFormat ? logoText.slice(0, 2) : logoText;
  const logoMiddlePart = isByArshFormat ? logoText.slice(2, -1) : '';
  const logoLastPart = isByArshFormat ? logoText.slice(-1) : '';

  return (
    <header className="bg-background w-full">
      <Container>
        <div className="flex h-[92px] items-center justify-between">
          {/* Logo */}

          <Link
            href={navigation.logo.href}
            className="flex items-end text-[45px] leading-none tracking-[-0.04em]"
          >
            {isByArshFormat ? (
              <>
                <span className="font-heading italic">{logoFirstPart}</span>
                <span className="font-heading">{logoMiddlePart}</span>
                <span className="text-primary ml-0.5">{logoLastPart}</span>
              </>
            ) : (
              <span className="font-heading">{logoText}</span>
            )}
          </Link>

          {/* Navigation */}

          <nav className="ml-6 hidden items-center gap-8 lg:flex">
            {navigation.links.map((item) => {
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
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Subscribe */}

          <Link
            href={navigation.subscribeButton.href}
            onClick={(e) => {
              if (
                pathname === '/' &&
                navigation.subscribeButton.href === '/#newsletter'
              ) {
                e.preventDefault();
                const element = document.getElementById('newsletter');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            <Button className="-ml-14 h-10 rounded-[14px] px-5 text-[15px] font-medium">
              <Mail size={16} strokeWidth={2} className="mr-1" />
              {navigation.subscribeButton.text}
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
