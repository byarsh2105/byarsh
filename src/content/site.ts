export const site = {
  name: 'ByArsh',

  tagline: 'A place to pause, wonder, and grow.',

  hero: {
    titleLines: ['writing.', 'building.', 'reflecting.', 'growing.'],

    subtitle: 'A place to pause, wonder, and grow.',

    description:
      'Welcome to ByArsh—a calm digital journal where stories, books, poetry, technology, travel, and thoughtful ideas come together. Every page is created with intention, inviting you to slow down, stay curious, and keep learning.',

    buttons: [
      {
        text: 'Start Reading',
        href: '/journal',
        variant: 'primary',
      },
      {
        text: 'Explore Projects',
        href: '/projects',
        variant: 'outline',
      },
    ],

    image: {
      src: '/images/home/home.png',
      alt: 'Journaling workspace',
    },
  },

  newsletter: {
    title: 'Join the Newsletter',
    descriptionLines: [
      'One thoughtful email. No noise. No spam.',
      'Just stories and ideas worth reading.',
    ],
    inputPlaceholder: 'Your email address',
    buttonText: 'Subscribe',
  },

  latestJournal: {
    title: 'Latest from the Journal',
    description: 'Stories, ideas, and reflections from life and work.',
    button: {
      text: 'View all articles',
      href: '/journal',
    },
  },

  featuredProjects: {
    title: 'Featured Projects',
    description: "Things I'm building and proud of.",
    button: {
      text: 'View all projects',
      href: '/projects',
    },
  },

  librarySection: {
    title: 'My Library',
    description: 'Books that inspire and shape my journey.',
    button: {
      text: 'Explore my library',
      href: '/library',
    },
  },

  navigation: {
    logo: {
      text: 'ByArsh.',
      href: '/',
    },

    links: [
      { label: 'Home', href: '/' },
      { label: 'Journal', href: '/journal' },
      { label: 'Projects', href: '/projects' },
      { label: 'Library', href: '/library' },
      { label: 'Journey', href: '/journey' },
      { label: 'About', href: '/about' },
      { label: "Let's Talk", href: '/contact' },
    ],

    subscribeButton: {
      text: 'Subscribe',
      href: '/#newsletter',
    },
  },

  footer: {
    taglineLines: ['A place to pause,', 'wonder, and grow.'],
    linkGroups: [
      {
        title: 'Explore',
        links: [
          { label: 'Journal', href: '/journal' },
          { label: 'Projects', href: '/projects' },
          { label: 'Library', href: '/library' },
          { label: 'Journey', href: '/journey' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'About Me', href: '/about' },
          { label: 'Philosophy', href: '/' },
          { label: 'Timeline', href: '/journey' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Newsletter', href: '/#newsletter' },
        ],
      },
    ],
    copyrightLines: ['© 2026 ByArsh.', 'All rights reserved.'],
  },
};
