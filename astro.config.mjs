import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://lautarolobo.xyz/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [react(), sitemap(), mdx(), partytown()],
  markdown: {
    processor: unified(),
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "synthwave-84",
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
});