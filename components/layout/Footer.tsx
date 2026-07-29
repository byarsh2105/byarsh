'use client';

import Container from '@/components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { site } from '@/src/content/site';
import { socialLinks } from '@/src/content/social';

export default function Footer() {
  const { footer, navigation } = site;
  const pathname = usePathname();

  const logoText = navigation.logo.text;
  const isByArshFormat = logoText.startsWith('By') && logoText.endsWith('.');
  const logoFirstPart = isByArshFormat ? logoText.slice(0, 2) : logoText;
  const logoMiddlePart = isByArshFormat ? logoText.slice(2, -1) : '';
  const logoLastPart = isByArshFormat ? logoText.slice(-1) : '';

  return (
    <footer className="border-t border-[#EEE7DF] bg-[#FAF8F5] pt-8 pb-20 text-black">
      <Container>
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          {/* Left */}
          <div>
            <Link
              href={navigation.logo.href}
              className="flex items-end text-[48px] leading-none tracking-[-0.04em] text-black"
            >
              {isByArshFormat ? (
                <>
                  <span className="font-heading italic">{logoFirstPart}</span>
                  <span className="font-heading">{logoMiddlePart}</span>
                  <span className="text-primary ml-1">{logoLastPart}</span>
                </>
              ) : (
                <span className="font-heading">{logoText}</span>
              )}
            </Link>

            <p className="mt-6 max-w-[280px] text-[18px] leading-8 text-black">
              {footer.taglineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < footer.taglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-5 text-black">
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
              </Link>
              <Link href={socialLinks.email}>
                <Mail
                  size={20}
                  className="hover:text-primary cursor-pointer transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-16 pt-4 lg:gap-24">
            {footer.linkGroups.map((group, index) => (
              <div key={index}>
                <h3 className="font-heading text-primary mb-6 text-[20px] font-semibold tracking-wide">
                  {group.title}
                </h3>
                <div className="space-y-3 text-[16px] text-black">
                  {group.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="hover:text-primary block"
                      onClick={(e) => {
                        if (pathname === '/' && link.href === '/#newsletter') {
                          e.preventDefault();
                          const element = document.getElementById('newsletter');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="relative flex min-w-[200px] items-center justify-center pt-8 pr-0 lg:items-end lg:justify-end lg:pt-4 lg:pr-[300px]">
            <p className="relative z-10 mb-6 text-center text-[15px] leading-7 text-black lg:text-left">
              {footer.copyrightLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < footer.copyrightLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <Image
              src="/images/decor/footer.png"
              alt=""
              width={1000}
              height={1000}
              className="pointer-events-none absolute hidden object-contain lg:block"
              style={{
                right: '-10px',
                bottom: '-15px',
              }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
