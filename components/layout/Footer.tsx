import Container from '@/components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#EEE7DF] bg-[#FAF8F5] pt-8 pb-20 text-black">
      <Container>
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="flex items-end text-[48px] leading-none tracking-[-0.04em] text-black"
            >
              <span className="font-heading italic">By</span>
              <span className="font-heading">Arsh</span>
              <span className="text-primary ml-1">.</span>
            </Link>

            <p className="mt-6 max-w-[280px] text-[18px] leading-8 text-black">
              A place to pause,
              <br />
              wonder, and grow.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-5 text-black">
              <FaInstagram
                size={20}
                className="hover:text-primary cursor-pointer transition-colors"
              />
              <FaLinkedin
                size={20}
                className="hover:text-primary cursor-pointer transition-colors"
              />
              <FaGithub
                size={20}
                className="hover:text-primary cursor-pointer transition-colors"
              />
              <Mail
                size={20}
                className="hover:text-primary cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-16 pt-4 lg:gap-24">
            {/* Explore */}
            <div>
              <h3 className="font-heading text-primary mb-6 text-[20px] font-semibold tracking-wide">
                Explore
              </h3>
              <div className="space-y-3 text-[16px] text-black">
                <Link href="/journal" className="hover:text-primary block">
                  Journal
                </Link>
                <Link href="/projects" className="hover:text-primary block">
                  Projects
                </Link>
                <Link href="/library" className="hover:text-primary block">
                  Library
                </Link>
                <Link href="/journey" className="hover:text-primary block">
                  Journey
                </Link>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-heading text-primary mb-6 text-[20px] font-semibold tracking-wide">
                About
              </h3>
              <div className="space-y-3 text-[16px] text-black">
                <Link href="/about" className="hover:text-primary block">
                  About Me
                </Link>
                <Link href="/philosophy" className="hover:text-primary block">
                  Philosophy
                </Link>
                <Link href="/journey" className="hover:text-primary block">
                  Timeline
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-heading text-primary mb-6 text-[20px] font-semibold tracking-wide">
                Connect
              </h3>
              <div className="space-y-3 text-[16px] text-black">
                <Link href="/contact" className="hover:text-primary block">
                  Contact
                </Link>
                <Link href="/newsletter" className="hover:text-primary block">
                  Newsletter
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="relative flex min-w-[200px] items-end justify-end pt-4 pr-[300px]">
            <p className="relative z-10 mb-6 text-[15px] leading-7 text-black">
              © 2026 ByArsh.
              <br />
              All rights reserved.
            </p>

            <Image
              src="/images/decor/footer.png"
              alt=""
              width={1000}
              height={1000}
              className="pointer-events-none absolute object-contain"
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
