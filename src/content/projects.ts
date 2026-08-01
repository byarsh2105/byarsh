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

    title: 'Mobile App Odoo API Integration',

    shortDescription:
      'Designed and developed an enterprise-grade integration platform connecting Odoo with multiple external systems.',

    description:
      'An enterprise-grade integration platform connecting Odoo with external systems to automate e-commerce operations, payment processing, shipping workflows, and mobile application services.',

    image: '/images/projects/mobile_api_integration.png',

    featuredImage: '/images/projects/mobile_api_integration.png',

    technologies: [
      'Odoo',
      'Python',
      'PostgreSQL',
      'REST API',
      'JSON',
      'JavaScript',
    ],

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
    slug: 'smart-attendance',
    title: 'Smart Attendance Management System',
    shortDescription:
      'Developed a customized attendance management solution in Odoo to streamline operations.',
    description:
      'Developed a customized attendance management solution in Odoo to streamline employee check-in/check-out tracking, automate attendance calculations, and simplify HR operations across multiple departments.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Odoo 16/17', 'Python', 'PostgreSQL', 'XML', 'ORM'],
    featured: true,
    published: true,
    icon: 'box',
    button: {
      text: 'View Project',
      href: '/projects/smart-attendance',
    },
    year: '2026',
    category: 'HR Automation • Odoo',
  },
  {
    id: 3,
    slug: 'employee-expense',
    title: 'Employee Expense Portal',
    shortDescription:
      'Designed and customized an expense management portal allowing employees to submit reimbursements digitally.',
    description:
      'Designed and customized an expense management portal allowing employees to submit reimbursements digitally while enabling managers to review, approve, and track expenses efficiently.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'REST APIs'],
    featured: true,
    published: true,
    icon: 'code',
    button: {
      text: 'View Project',
      href: '/projects/employee-expense',
    },
    year: '2026',
    category: 'Workflow Automation • Odoo',
  },
  {
    id: 4,
    slug: 'portal-customization',
    title: 'Website & Customer Portal Customization',
    shortDescription:
      'Customized the Odoo Website and Customer Portal to provide an improved digital experience.',
    description:
      'Customized the Odoo Website and Customer Portal to provide an improved digital experience through responsive interfaces, personalized dashboards, secure customer access, and enhanced business workflows.',
    image: '/images/projects/p1.jpg',
    featuredImage: '/images/projects/featured-project.png',
    technologies: ['Odoo Website', 'Python', 'XML', 'OWL', 'JavaScript', 'CSS'],
    featured: true,
    published: true,
    icon: 'bulb',
    button: {
      text: 'View Project',
      href: '/projects/portal-customization',
    },
    year: '2026',
    category: 'Frontend Development • Odoo',
  },
];

export const projectsHero = {
  title: 'Projects',
  subtitleLines: [
    'A collection of ideas,',
    'experiments,',
    "and products I've built.",
  ],
  buttonText: 'Explore Projects',
  image: {
    src: '/images/project/project_homepage.jpeg',
    alt: 'Workspace setup',
  },
};

export const projectsCTA = {
  title: 'Have an idea in mind?',
  description: "Let's build something meaningful together.",
  buttonText: "Let's Talk",
  buttonLink: '/contact#contact-form',
  decorativeImage: {
    src: '/images/decor/pp.png',
    alt: 'Leaf',
  },
};
