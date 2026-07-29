export const libraryHero = {
  title: 'Library',
  subtitleLines: [
    'Books that have shaped',
    'the way I think,',
    'create,',
    'and see the world.',
  ],
  badge: 'Every book leaves a mark.',
  image: {
    src: '/images/library/library-hero.png',
    alt: 'Books and Coffee',
  },
};

export const books = [
  {
    slug: 'currently-reading',
    title: 'Currently Reading',
    subtitle: "What I'm reading now.",
    image: '/images/library/currently-reading.jpg',
  },
  {
    slug: 'recently-finished',
    title: 'Recently Finished',
    subtitle: "Books I've recently finished.",
    image: '/images/library/recently-finished.jpg',
  },
  {
    slug: 'favorite-books',
    title: 'Favorite Books',
    subtitle: 'Timeless reads I love.',
    image: '/images/library/favorite-books.jpg',
  },
];

export const currentlyReading = {
  book: {
    title: 'Think Straight',
    author: 'Darius Foroux',
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop',
    progress: 45,
    progressStatus: 'In Progress',
    note: 'Learning to control my thoughts and eliminate mental clutter.',
  },
  quote: {
    text: 'A book is a dream that you hold in your hands.',
    author: 'Neil Gaiman',
  },
};

export const finishedBooks = [
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    date: 'Finished Jul 2024',
    badge: '♡ Loved this',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop',
  },
  {
    title: 'Ikigai',
    author: 'Héctor García',
    date: 'Finished Mar 2024',
    badge: '♡ Life Changing',
    image:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'The Mountain Is You',
    author: 'Brianna Wiest',
    date: 'Finished Apr 2024',
    badge: '♡ Highly Recommended',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop',
  },
];

export const wishlistBooks = [
  {
    title: 'Rework',
    author: 'Jason Fried',
    image:
      'https://images.unsplash.com/photo-1589998059171-9899ea86250a?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: '8 Rules of Love',
    author: 'Jay Shetty',
    image:
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1293&auto=format&fit=crop',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512&auto=format&fit=crop',
  },
];

export const favoriteBooksInfo = {
  cover:
    'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1470&auto=format&fit=crop', // Using Ikigai since it was mentioned as favorite
  note: 'Books that have stayed with me over the years.',
};

export const libraryQuoteBanner = {
  quote:
    'I do believe something very magical can happen when you read a good book.',
  author: 'J.K. Rowling',
  image: '/images/library/quote-bg.jpg',
};

export const libraryNewsletter = {
  title: 'Reading together.',
  description:
    'Monthly book notes, recommendations, and cozy reads — straight to your inbox.',
  inputPlaceholder: 'Your email address',
  buttonText: 'Join the Library',
};
