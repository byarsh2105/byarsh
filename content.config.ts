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
  collections: [journal],
});
