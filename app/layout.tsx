import type { Metadata } from 'next';
import { Cormorant_Garamond, Caveat } from 'next/font/google';
import './globals.css';

import { Allura } from 'next/font/google';

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwriting',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-heading',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-handwriting',
});

export const metadata: Metadata = {
  title: 'ByArsh',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
