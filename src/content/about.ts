import {
  Leaf,
  Heart,
  Sprout,
  Lightbulb,
  PenTool,
  Users,
  CalendarCheck,
  HandHeart,
  Pen,
  Laptop,
  BookOpen,
  Globe,
  Feather,
} from 'lucide-react';

export const aboutHero = {
  title: 'About',
  subtitleLines: [
    'Building a life of curiosity,',
    'creativity,',
    'and continuous learning.',
  ],
  badge: 'Always learning. Always becoming.',
  image: {
    src: '/images/about/about_home.png',
    alt: 'Workspace',
  },
};

export const myStory = {
  title: 'About Me',
  paragraphs: ["Hi, I'm Arsh."],
  bullets: [
    "I believe learning doesn't end with school or work. It's something we carry throughout life.",
    "ByArsh began as a place to document what I'm building, learning, reading, exploring, and becoming.",
    'My hope is that this space encourages others to stay curious, create with intention, and enjoy the process of growing.',
  ],
  image: {
    src: '/images/about/my_story_jr.png',
    alt: 'About Me',
  },
  decorativeImage: {
    src: '/images/journey/floral-branch.png',
    alt: 'Floral branch',
  },
};

export const missionVision = {
  mission: {
    title: 'Mission',
    description:
      "ByArsh exists to create a calm and genuine corner of the internet where learning, creativity, and everyday life come together. It's a place where I document what I'm building, learning, reading, and experiencing—through software engineering, books, travel, poetry, and the small moments that shape life. By sharing knowledge, stories, and real experiences, I hope to inspire both personal and professional growth, and create a space that feels peaceful, genuine, and always worth returning to.",
  },
  vision: {
    title: 'Vision',
    description:
      'To become a trusted and timeless digital journal that people return to for thoughtful ideas, practical knowledge, and genuine stories—encouraging curiosity, inspiring lifelong personal and professional growth, and creating a lasting sense of connection.',
  },
};

export const coreValues = {
  title: 'Core Values',
  values: [
    {
      title: 'Peacefulness',
      icon: Leaf,
      description:
        'Create a calm and welcoming space where readers can slow down, reflect, and enjoy learning.',
    },
    {
      title: 'Authenticity',
      icon: Heart,
      description:
        'Share honest experiences, genuine stories, and real lessons with humility and openness.',
    },
    {
      title: 'Curiosity',
      icon: Sprout,
      description:
        'Embrace lifelong learning, creativity, and exploration with an open mind.',
    },
    {
      title: 'Practicality',
      icon: Lightbulb,
      description:
        'Share knowledge, ideas, and experiences that readers can apply in real life.',
    },
    {
      title: 'Simplicity',
      icon: PenTool,
      description:
        'Keep design, writing, and experiences clean, thoughtful, and easy to understand.',
    },
    {
      title: 'Connection',
      icon: Users,
      description:
        'Build meaningful relationships through authentic storytelling and shared experiences.',
    },
    {
      title: 'Consistency',
      icon: CalendarCheck,
      description:
        'Show up regularly, share thoughtfully, and grow one meaningful step at a time.',
    },
    {
      title: 'Kindness',
      icon: HandHeart,
      description:
        'Treat every reader with empathy, respect, and compassion, creating a space where everyone feels welcomed and valued.',
    },
  ],
};

export const whatYouWillFind = {
  title: "What you'll find here",
  items: [
    { label: 'Stories &\nReflections', icon: Pen },
    { label: 'Projects &\nExperiments', icon: Laptop },
    { label: 'Books &\nLearning', icon: BookOpen },
    { label: 'Travel &\nExperiences', icon: Globe },
    { label: 'Personal\nGrowth', icon: Sprout },
    { label: 'Poetry &\nThoughts', icon: Feather },
  ],
};

export const aboutFooterCards = {
  leftCard: {
    title: 'A Few Things About Me',
    facts: [
      { text: 'Currently reading: Too good to be true' },
      { text: 'Favorite place to work: By the window with soft music' },
      { text: 'Always accompanied by: exploring new things' },
      { text: 'Most used app: Pinterest' },
      { text: 'A quote I live by: Progress, not perfection.' },
    ],
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
  rightCard: {
    title: "Let's build something meaningful.",
    description:
      "Whether you'd like to collaborate, share an idea, or simply say hello— I'd love to hear from you.",
    buttonText: "Let's Talk",
    backgroundImage: {
      src: '',
      alt: '',
    },
  },
};
