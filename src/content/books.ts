export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  status: 'Reading' | 'Finished' | 'To Read';
  rating: number;
  cover: string;
  image: string;
}

export const books: Book[] = [
  {
    slug: 'atomic-habits',
    title: 'Currently Reading',
    subtitle: "What I'm reading now.",
    author: 'James Clear',
    status: 'Reading',
    rating: 0,
    cover: '/images/library/currently-reading.jpg',
    image: '/images/library/currently-reading.jpg',
  },
  {
    slug: 'the-alchemist',
    title: 'Recently Finished',
    subtitle: "Books I've recently finished.",
    author: 'Paulo Coelho',
    status: 'Finished',
    rating: 5,
    cover: '/images/library/recently-finished.jpg',
    image: '/images/library/recently-finished.jpg',
  },
  {
    slug: 'deep-work',
    title: 'Favorite Books',
    subtitle: 'Timeless reads I love.',
    author: 'Cal Newport',
    status: 'Finished',
    rating: 5,
    cover: '/images/library/favorite-books.jpg',
    image: '/images/library/favorite-books.jpg',
  },
];
