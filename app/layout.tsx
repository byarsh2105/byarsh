import type { Metadata } from 'next';
import { Cormorant_Garamond, Caveat, Allura, Lora } from 'next/font/google';

import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-signature',
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
    <html
      lang="en"
      className={`${cormorant.variable} ${caveat.variable} ${allura.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
