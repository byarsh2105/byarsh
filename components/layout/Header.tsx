'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';
import Button from '@/components/ui/button';
import { Mail, Menu, X } from 'lucide-react';
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
    <>
      <header className="bg-background relative z-50 w-full">
        <Container>
          <div className="flex h-[80px] items-center justify-between lg:h-[92px]">
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

            <div className="hidden lg:block">
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
                <Button className="h-10 rounded-[14px] px-5 text-[15px] font-medium">
                  <Mail size={16} strokeWidth={2} className="mr-2" />
                  {navigation.subscribeButton.text}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle (CSS Only) */}
            <div className="flex items-center lg:hidden">
              <label
                htmlFor="mobile-menu-toggle"
                className="text-foreground cursor-pointer p-2"
                aria-label="Toggle Menu"
              >
                <Menu size={28} className="pointer-events-none block" />
              </label>
            </div>
          </div>
        </Container>
      </header>

      {/* Hidden Checkbox for CSS state */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Menu Overlay */}
      <div className="bg-background fixed inset-0 z-[9999] hidden h-[100dvh] w-screen flex-col peer-checked:flex lg:hidden">
        <Container>
          <div className="flex h-[80px] items-center justify-between">
            <Link
              href={navigation.logo.href}
              className="flex items-end text-[45px] leading-none tracking-[-0.04em]"
              onClick={() => {
                const cb = document.getElementById(
                  'mobile-menu-toggle',
                ) as HTMLInputElement;
                if (cb) cb.checked = false;
              }}
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

            <label
              htmlFor="mobile-menu-toggle"
              className="text-foreground cursor-pointer p-2"
              aria-label="Close Menu"
            >
              <X size={28} className="pointer-events-none block" />
            </label>
          </div>
        </Container>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8 pb-20">
          {navigation.links.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[24px] font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground/80'
                }`}
                onClick={() => {
                  const cb = document.getElementById(
                    'mobile-menu-toggle',
                  ) as HTMLInputElement;
                  if (cb) cb.checked = false;
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href={navigation.subscribeButton.href} className="mt-6">
            <Button className="h-14 rounded-[16px] px-10 text-[18px] font-medium">
              <Mail size={20} strokeWidth={2} className="mr-3" />
              {navigation.subscribeButton.text}
            </Button>
          </Link>
        </nav>
      </div>
    </>
  );
}
