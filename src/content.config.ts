import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Post collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/blog'}),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Lautaro Lobo"),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
};
