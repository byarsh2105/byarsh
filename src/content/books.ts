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
    src: '/images/library/book_shelf.png',
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
    image: '/images/library/fav_book.png',
  },
];

export const currentlyReading = {
  book: {
    title: 'Think Straight',
    author: 'Darius Foroux',
    cover: '/images/library/current_read.jpeg',
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
    image: '/images/library/book_fault_stars.jpg',
  },
  {
    title: 'Ikigai',
    author: 'Héctor García',
    date: 'Finished Mar 2024',
    badge: '♡ Life Changing',
    image: '/images/library/book_ikigai.jpg',
  },
  {
    title: 'The Mountain Is You',
    author: 'Brianna Wiest',
    date: 'Finished Apr 2024',
    badge: '♡ Highly Recommended',
    image: '/images/library/book_mountain.jpg',
  },
];

export const wishlistBooks = [
  {
    title: 'Rework',
    author: 'Jason Fried',
    image: '/images/library/book_rework.jpg',
  },
  {
    title: 'The Forty Rules of Love',
    author: 'Elif Shafak',
    image: '/images/library/book_forty_rules_love.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: '/images/library/book_atomic_habits.jpg',
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
