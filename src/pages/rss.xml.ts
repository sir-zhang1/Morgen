import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { withBase } from "../lib/paths";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const primitives = (await getCollection("primitives")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? context.url.origin,
    items: primitives.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: withBase(`/primitives/${entry.id}/`),
    })),
  });
}
