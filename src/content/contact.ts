import { Mail, Users, Camera, Code2 } from 'lucide-react';
import { socialLinks } from './social';

export const contactHero = {
  title: "Let's Talk",
  subtitleLines: [
    'Whether you have an idea,',
    'a question,',
    'or simply want to say hello.',
  ],
  signature: "I'd love to hear from you.",
};

export const connectOptions = {
  title: 'Ways to Connect',
  options: [
    {
      title: 'Email',
      desc: 'Drop me a note anytime.',
      linkText: 'arshshaikh1520@gmail.com',
      href: socialLinks.email,
      icon: Mail,
      isEmail: true,
    },
    {
      title: 'LinkedIn',
      desc: "Let's connect",
      linkText: '@arsh-shaikh',
      href: socialLinks.linkedin,
      icon: Users,
      isEmail: false,
    },
    {
      title: 'Instagram',
      desc: 'Behind the scenes',
      linkText: '@arsh._.shaikh._',
      href: socialLinks.instagram,
      icon: Camera,
      isEmail: false,
    },
    {
      title: 'GitHub',
      desc: "Things I'm building",
      linkText: '@byarsh2105',
      href: socialLinks.github,
      icon: Code2,
      isEmail: false,
    },
  ],
};

export const contactForm = {
  form: {
    title: 'Send a Message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    buttonText: 'Send Message',
  },
  gratitude: {
    title: 'A Moment of Gratitude',
    descriptionLines: [
      'This space is all about pausing and reflecting. Before you send your message, take a deep breath.',
      'What is one thing you are truly grateful for today?',
      'If you feel comfortable, I would absolutely love it if you included it in your message. Sharing gratitude makes this little corner of the internet a warmer place.',
    ],
    emailPlaceholder: 'Your Email (Optional)',
    inputPlaceholder: 'I am grateful for...',
    buttonText: 'Send',
  },
};

export const stayConnected = {
  title: 'Stay Connected',
  description:
    'Occasional thoughts, stories, and updates—straight to your inbox. Nothing spammy, I promise.',
  inputPlaceholder: 'Your email address',
  buttonText: 'Subscribe',
  buttonLoadingText: '...',
  successMessage: 'You are subscribed!',
  backgroundImage: {
    src: '/images/about/vase.jpg',
    alt: 'Vase with flowers',
  },
};

export const contactSignoff = {
  quoteMark: '“',
  messageLines: [
    'Thanks for stopping by.',
    'I hope this little corner of the internet',
    'made your day a little better.',
  ],
  name: 'Arsh',
  farewell: 'See you soon.',
};
