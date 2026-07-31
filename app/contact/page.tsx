import Header from '@/components/layout/Header';
import ContactHero from '@/components/contact/ContactHero';
import ConnectOptions from '@/components/contact/ConnectOptions';
import ContactForm from '@/components/contact/ContactForm';
import StayConnected from '@/components/contact/StayConnected';
import ContactSignoff from '@/components/contact/ContactSignoff';
import Footer from '@/components/layout/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for collaborations, questions, or just to say hello.',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-background pb-0">
        <ContactHero />
        <ConnectOptions />
        <ContactForm />
        <StayConnected />
      </main>

      <ContactSignoff />
      <Footer />
    </>
  );
}
