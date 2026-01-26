import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      location: z.string(),
      company: z.string().optional(),
      thumbnail: image(), // <-- CORRECT FOR ASTRO 5
      gallery: z.array(image()).optional(),
      summary: z.string().optional(),
    }),
});

export const collections = { projects };
