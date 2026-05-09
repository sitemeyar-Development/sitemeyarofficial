import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/blog";

const SITE = "https://sitemeyar.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const staticUrls = ["/", "/blog"];
        const blogUrls = posts.map((p) => `/blog/${p.slug}`);
        const today = new Date().toISOString().split("T")[0];
        const all = [...staticUrls, ...blogUrls];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (u) =>
      `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u === "/" ? "1.0" : "0.8"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
