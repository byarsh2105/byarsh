import Container from '@/components/layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#EEE7DF] bg-[#FCFAF7] py-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Left */}

          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-end text-[48px] leading-none tracking-[-0.04em]"
            >
              <span className="font-heading italic">By</span>
              <span className="font-heading">Arsh</span>
              <span className="text-primary ml-1">.</span>
            </Link>

            <p className="mt-6 max-w-[280px] text-[18px] leading-8 text-[#5E5853]">
              A place to pause,
              <br />
              wonder, and grow.
            </p>

            {/* Social Icons */}

            <FaInstagram
              size={20}
              className="hover:text-primary transition-colors"
            />

            <FaLinkedin
              size={20}
              className="hover:text-primary transition-colors"
            />

            <FaGithub
              size={20}
              className="hover:text-primary transition-colors"
            />

            <Mail size={20} className="hover:text-primary transition-colors" />
          </div>

          {/* Explore */}

          <div>
            <h3 className="mb-5 font-semibold">Explore</h3>

            <div className="space-y-3 text-[#5E5853]">
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
            <h3 className="mb-5 font-semibold">About</h3>

            <div className="space-y-3 text-[#5E5853]">
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

          <div className="relative">
            <h3 className="mb-5 font-semibold">Connect</h3>

            <div className="space-y-3 text-[#5E5853]">
              <Link href="/contact" className="hover:text-primary block">
                Contact
              </Link>

              <Link href="/newsletter" className="hover:text-primary block">
                Newsletter
              </Link>
            </div>

            <p className="mt-16 text-[15px] leading-7 text-[#7A756F]">
              © 2026 ByArsh.
              <br />
              All rights reserved.
            </p>

            <Image
              src="/images/illustrations/branch.png"
              alt=""
              width={120}
              height={180}
              className="absolute -right-6 bottom-0 opacity-70"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
