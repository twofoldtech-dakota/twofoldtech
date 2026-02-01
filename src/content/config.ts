import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Twofold Tech'),
    tags: z.array(z.string()).default([]),
    category: z.enum(['engineering', 'product', 'research', 'tutorial', 'announcement']).default('engineering'),
    heroImage: z.string().optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
      description: z.string().optional(),
    })),
    technologies: z.array(z.string()),
    publishDate: z.coerce.date(),
    heroImage: z.string().optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  'case-studies': caseStudiesCollection,
};
