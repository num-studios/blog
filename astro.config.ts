import { defineConfig, squooshImageService } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://valbuildr.github.io",
  base: "/num-studios"
  compressHTML: true,
  scopedStyleStrategy: "class",
  image: {
    service: squooshImageService(),
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            class: "heading-linker",
          },
        },
      ],
    ],
  },
  integrations: [svelte()],
});
