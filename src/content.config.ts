import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const primitives = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/primitives" }),
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    subtitle: z.string(),
    order: z.number(),
    pubDate: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { primitives };
