export const journalHero = {
  label: 'My Journal',
  titleLines: ['Thoughts,', 'stories, and', 'lessons from', 'my journey.'],
  description:
    "A collection of thoughts, stories, poetry, and lessons I'm learning along the way. Welcome to ByArsh—a calm digital journal where stories, books, poetry, technology, travel, and thoughtful ideas come together. Every page is created with intention, inviting you to slow down, stay curious, and keep learning.",
  image: {
    src: '/images/journal/journal_homepage.png',
    alt: 'Journal Hero',
  },
  noteFromArsh: {
    label: 'A note from arsh ♡',
    text: "I started ByArsh to create a quieter corner of the internet— one where curiosity, creativity, and thoughtful ideas can grow. Every article here is part of my journey, and I'm glad you're here to share it.",
    signature: '- Arsh ♡',
  },
};

export const journalCategories = [
  'All',
  'Books',
  'Travel',
  'Poetry',
  'Reflections',
  'Personal Growth',
  'Self Discovery',
];

export const featuredArticle = {
  id: 'building-byarsh',

  category: 'Personal Journey',

  title: 'Building ByArsh: Why I Started This Quiet Corner',

  excerpt:
    'The story behind creating ByArsh—a calm digital journal where software engineering, books, travel, and thoughtful ideas come together.',

  image: {
    src: '/images/journal/building_byarsh.png',
    alt: 'Writing desk with notebook',
  },

  publishedDate: 'July 2026',

  readingTime: '5 min read',

  tags: ['Personal', 'ByArsh', 'Journal'],

  button: {
    text: 'Read Article',
    href: '/journal/how-building-byarsh-changed-my-thinking',
  },
  slug: 'how-building-byarsh-changed-my-thinking',
};

export const latestArticlesSection = {
  title: 'Latest Articles',
  button: {
    text: 'View all articles',
    href: '/journal',
  },
};

export const journalPosts = [
  {
    slug: 'books-that-quietly-changed-my-thinking',
    featured: true,
    published: true,
    category: 'Books',
    title: 'Books That Quietly Changed My Thinking',
    excerpt:
      'Some books entertain us, some educate us, and a few quietly change the way we see the world.',
    publishedDate: 'July 2026',
    readingTime: '5 min read',
    image: {
      src: '/images/home/books_ref.png',
      alt: 'Books That Quietly Changed My Thinking',
    },
  },
  {
    slug: 'december-in-manali',
    featured: true,
    published: true,
    category: 'Travel',
    title: 'December in Manali: Where Winter Teaches You to Slow Down',
    excerpt:
      "I travelled to Manali expecting snow-covered mountains and beautiful views. What I didn't expect was how winter would quietly teach me to slow down.",
    publishedDate: 'July 2026',
    readingTime: '6 min read',
    image: {
      src: '/images/home/manali_muuntains.png',
      alt: 'December in Manali',
    },
  },
  {
    slug: 'poetry-in-motion',
    featured: true,
    published: true,
    category: 'Poetry',
    title: 'Poetry in Motion: Observing the Quiet Details',
    excerpt:
      'Sometimes the most profound moments are the quietest. A small collection of thoughts and poetic observations from my daily life.',
    publishedDate: 'August 2026',
    readingTime: '3 min read',
    image: {
      src: '/images/home/poetry_homepage.png',
      alt: 'Poetry in Motion',
    },
  },
  {
    slug: 'reflections-on-time',
    featured: true,
    published: true,
    category: 'Reflections',
    title: 'Reflections on Time and How We Spend It',
    excerpt:
      'Time is the only resource we can never get back. A reflection on intentionally choosing where to direct our focus and energy.',
    publishedDate: 'August 2026',
    readingTime: '4 min read',
    image: {
      src: '/images/home/time.png',
      alt: 'Reflections on Time',
    },
  },
  {
    slug: 'embracing-the-process',
    featured: false,
    published: true,
    category: 'Personal Growth',
    title: 'Embracing the Process: Why the Middle is the Hardest Part',
    excerpt:
      'Starting is exciting. Finishing is rewarding. But the messy middle is where the real growth happens.',
    publishedDate: 'August 2026',
    readingTime: '5 min read',
    image: {
      src: '/images/journal/trus_process.png',
      alt: 'Embracing the Process',
    },
  },
  {
    slug: 'finding-stillness',
    featured: false,
    published: true,
    category: 'Self Discovery',
    title: 'Finding Stillness in a Loud World',
    excerpt:
      'We are constantly connected, constantly reachable, and constantly stimulated. How do we find quietness?',
    publishedDate: 'August 2026',
    readingTime: '4 min read',
    image: {
      src: '/images/journal/finding_world.png',
      alt: 'Finding Stillness',
    },
  },
];
