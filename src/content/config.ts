import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

// This key should match your collection directory name in "src/content"
export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
