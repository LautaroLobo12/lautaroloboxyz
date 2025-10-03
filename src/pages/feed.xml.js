import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser.astro";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import rss from "@astrojs/rss";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { render } from "astro:content";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";


export async function GET() {
  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });

  let baseUrl = "https://lautarolobo.xyz";

  const posts = (await getSinglePage("blog")).sort((a, b) =>
    // Sort by publication date descending.
    a.data.date > b.data.date ? -1 : 1
  );

  const feedItems = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const rawContent = await container.renderToString(Content);

     const content = await transform(rawContent.replace(/^<!DOCTYPE html>/, ''), [
      async (node) => {
        await walk(node, (node) => {
          if (node.name === "a" && node.attributes.href?.startsWith("/")) {
            node.attributes.href = baseUrl + node.attributes.href;
          }
          if (node.name === "img" && node.attributes.src?.startsWith("/")) {
            node.attributes.src = baseUrl + node.attributes.src;
          }
        });
        return node;
      },
      sanitize({ dropElements: ["script", "style"] }),
    ]);
    feedItems.push({ ...post.data, link: `/blog/${post.id}/`, content });
  }

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: baseUrl,
    trailingSlash: false,
    items: feedItems,
  });
}