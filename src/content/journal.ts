export const featuredArticle = {
  id: 'building-byarsh',

  category: 'Personal Journey',

  title: 'Building ByArsh: Why I Started This Quiet Corner',

  excerpt:
    'The story behind creating ByArsh—a calm digital journal where software engineering, books, travel, and thoughtful ideas come together.',

  image: {
    src: '/images/journal/featured-article.jpg',
    alt: 'Writing desk with notebook',
  },

  publishedDate: 'July 2026',

  readingTime: '5 min read',

  tags: ['Personal', 'ByArsh', 'Journal'],

  button: {
    text: 'Read Article',
    href: '/journal/building-byarsh',
  },
};

export const latestArticlesSection = {
  title: 'Latest Articles',
  button: {
    text: 'View all articles',
    href: '/journal',
  },
  articles: [
    {
      title: 'The Feel-Good Books I Keep Coming Back To',
      category: 'BOOKS',
      readTime: '6 min read',
      date: '1st August 2026',
      image: {
        src: '/images/journal/article-1.jpg',
        alt: 'The Feel-Good Books I Keep Coming Back To',
      },
      href: '/journal/the-feel-good-books',
    },
    {
      title: "A Slow Morning in Himachal Pradesh I'll Never Forget",
      category: 'TRAVEL',
      readTime: '7 min read',
      date: '1st August 2026',
      image: {
        src: '/images/journal/article-2.jpg',
        alt: "A Slow Morning in Himachal Pradesh I'll Never Forget",
      },
      href: '/journal/a-slow-morning-in-himachal-pradesh',
    },
  ],
};

export const journalPosts = [
  {
    slug: 'how-i-structure-odoo-modules',
    featured: true,
    published: true,
    category: 'Software Engineering',
    title: 'How I Structure Odoo Modules for Scalability',
    excerpt:
      'A deep dive into building scalable and maintainable Odoo modules for enterprise applications.',
    publishedDate: '1st August 2026',
    readingTime: '6 min read',
    image: {
      src: '/images/journal/software-engineering.jpg',
      alt: 'How I Structure Odoo Modules for Scalability',
    },
  },
  {
    slug: 'you-can-heal-your-life',
    featured: true,
    published: true,
    category: 'Books',
    title: 'You Can Heal Your Life — A Life Changing Read',
    excerpt: 'My thoughts on one of the most impactful books I have ever read.',
    publishedDate: '1st August 2026',
    readingTime: '4 min read',
    image: {
      src: '/images/journal/books.jpg',
      alt: 'You Can Heal Your Life',
    },
  },
  {
    slug: 'a-december-trip-to-himachal-pradesh',
    featured: true,
    published: true,
    category: 'Travel',
    title: 'A December Trip to Himachal Pradesh',
    excerpt: 'Finding peace and tranquility in the mountains.',
    publishedDate: '1st August 2026',
    readingTime: '5 min read',
    image: {
      src: '/images/journal/travel.jpg',
      alt: 'Himachal Pradesh Travel',
    },
  },
  {
    slug: 'the-power-of-journaling',
    featured: true,
    published: true,
    category: 'Personal Growth',
    title: 'The Power of Journaling Every Day',
    excerpt:
      'How a simple daily habit transformed my mental clarity and productivity.',
    publishedDate: '1st August 2026',
    readingTime: '4 min read',
    image: {
      src: '/images/journal/personal-growth.jpg',
      alt: 'Journaling',
    },
  },
];
