import {
  GraduationCap,
  Code2,
  Briefcase,
  Layers,
  Feather,
  Star,
  Lightbulb,
  Sprout,
  Mountain,
  Heart,
} from 'lucide-react';

export const journeyHero = {
  title: 'Journey',
  subtitleLines: [
    'Every chapter,',
    'every challenge,',
    'every lesson',
    'has led me here.',
  ],
  badge: 'Still becoming.',
  image: {
    src: '/images/journey/journey-hero.jpg',
    alt: 'Hiker looking over mountains',
  },
};

export const journeyStory = {
  title: 'My Story',
  paragraphs: [
    'Every journey begins with curiosity.',
    'Mine began with a love for learning and a belief that small, consistent steps lead to meaningful growth.',
    'From writing my first lines of code to building ByArsh, every experience has shaped the way I think, create, and connect with others.',
  ],
  image: {
    src: '/images/journey/my-story.jpg',
    alt: 'Winding road',
  },
  decorativeImage: {
    src: '/images/journey/floral-branch.png',
    alt: 'Decorative floral branch',
  },
};

export const journeyTimeline = {
  title: 'A Timeline of Becoming',
  events: [
    {
      year: '2022',
      title: 'Graduated in\nComputer Science',
      desc: 'The beginning of\nmy journey.',
      icon: GraduationCap,
    },
    {
      year: '2023',
      title: 'Started my journey\nwith Odoo',
      desc: 'Discovered my passion\nfor backend development.',
      icon: Code2,
    },
    {
      year: '2024',
      title: 'Built custom\nERP solutions',
      desc: 'Solved real business\nproblems with code.',
      icon: Briefcase,
    },
    {
      year: '2025',
      title: 'Expanded into\nFull-Stack',
      desc: 'Bridged the gap between\nbackend logic and design.',
      icon: Layers,
    },
    {
      year: '2026',
      title: 'Created ByArsh',
      desc: 'A space to share ideas,\nprojects, and stories\nthat matter.',
      icon: Feather,
    },
    {
      year: 'Next Chapter',
      title: 'Still being\nwritten...',
      desc: '♡',
      icon: Star,
      isFuture: true,
    },
  ],
};

export const journeyLessons = {
  title: 'Lessons Along the Way',
  lessons: [
    {
      title: 'Curiosity is a skill.',
      desc: 'The more I ask questions,\nthe more I learn.',
      icon: Lightbulb,
    },
    {
      title: 'Growth is never linear.',
      desc: 'There are ups, downs,\nand everything in between.',
      icon: Sprout,
    },
    {
      title: 'Reading changes\nhow we build.',
      desc: 'Books shape the way\nwe think and create.',
      icon: Mountain,
    },
    {
      title: 'Kindness matters\nmore than competition.',
      desc: 'The right people make\nthe journey beautiful.',
      icon: Heart,
    },
  ],
};

export const whatsNext = {
  title: "What's Next",
  subtitle: 'Still becoming.',
  paragraphs: [
    "I'm excited to keep learning, building meaningful software, writing thoughtful stories, and sharing the journey with you.",
    'The best is yet to come.',
  ],
  backgroundImage: {
    src: '/images/journey/whats-next.jpg',
    alt: 'Coastal road',
  },
};
