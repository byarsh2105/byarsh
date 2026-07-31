import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';

const journal = defineCollection({
  name: 'journal',
  directory: 'content/journal',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean().default(true),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);

    return {
      ...document,
      body,
      slug: document._meta.path,
    };
  },
});
const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    year: z.string().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean().default(true),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);

    return {
      ...document,
      body,
      slug: document._meta.path,
    };
  },
});

export default defineConfig({
  content: [journal, projects],
});
