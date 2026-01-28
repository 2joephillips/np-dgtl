import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      date: z.string(),
      location: z.string(),
      company: z.string().optional(),
      thumbnail: image(),
      gallery: z.array(image()).optional(),
      summary: z.string().optional(),
      projectFolder: z.string(),
    }),
});

export const collections = { projects };
