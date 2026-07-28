export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  image: string;
  featuredImage: string;

  technologies: string[];

  featured: boolean;
  published: boolean;
  icon: string;
  button: {
    text: string;
    href: string;
  };

  github?: string;
  live?: string;

  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'attendance-automation',

    title: 'Attendance Automation System',

    shortDescription: 'A complete attendance automation system for Odoo.',

    description:
      'A complete attendance automation system handling check-in, check-out, notifications, violations, geo validation and reporting.',

    image: '/images/projects/p1.jpg',

    featuredImage: '/images/projects/featured-project.png',

    technologies: ['Odoo 19', 'Python', 'PostgreSQL', 'JavaScript'],

    featured: false,
    published: true,
    icon: 'box',
    button: {
      text: 'View Project',
      href: '/projects/attendance-automation',
    },

    github: '',

    live: '',

    year: '2026',

    category: 'Odoo',
  },
  {
    id: 2,
    slug: 'odeo-custom-development',
    title: 'Odeo Custom Development',
    shortDescription: 'Business solutions built with Odoo.',
    description: 'Business solutions built with Odoo.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Odoo'],
    featured: true,
    published: true,
    icon: 'box',
    button: {
      text: 'View Project',
      href: '/projects/odeo-custom-development',
    },
    year: '2026',
    category: 'Odoo',
  },
  {
    id: 3,
    slug: 'open-source-contributions',
    title: 'Open Source Contributions',
    shortDescription: 'Giving back to the community.',
    description: 'Giving back to the community.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Open Source'],
    featured: true,
    published: true,
    icon: 'code',
    button: {
      text: 'View Project',
      href: '/projects/open-source-contributions',
    },
    year: '2026',
    category: 'Open Source',
  },
  {
    id: 4,
    slug: 'experiments-side-projects',
    title: 'Experiments & Side Projects',
    shortDescription: 'Ideas, prototypes, and experiments.',
    description: 'Ideas, prototypes, and experiments.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Next.js', 'React'],
    featured: true,
    published: true,
    icon: 'bulb',
    button: {
      text: 'View Project',
      href: '/projects/experiments-side-projects',
    },
    year: '2026',
    category: 'Side Projects',
  },
];
