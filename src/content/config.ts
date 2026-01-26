import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    company: z.string().optional(),
    type: z.string(),
    thumbnail: z.string(),
    gallery: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
