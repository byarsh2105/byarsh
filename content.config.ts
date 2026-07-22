import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const journal = defineCollection({
  name: 'journal',
  directory: 'content/journal',
  include: '**/*.mdx',
  schema: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  transform: async (document) => {
    const body = await compileMDX(document);

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
