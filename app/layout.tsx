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
  metadataBase: new URL('https://byarsh.com'),
  title: {
    default: 'ByArsh - A place to pause, wonder, and grow.',
    template: '%s | ByArsh',
  },
  description:
    'Welcome to ByArsh—a calm digital journal where stories, books, poetry, technology, travel, and thoughtful ideas come together.',
  openGraph: {
    title: 'ByArsh',
    description: 'A place to pause, wonder, and grow.',
    url: 'https://byarsh.com',
    siteName: 'ByArsh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByArsh',
    description:
      'A calm digital journal where stories, technology, and thoughtful ideas come together.',
  },
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
