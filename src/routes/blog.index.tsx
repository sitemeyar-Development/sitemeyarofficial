import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { posts } from "@/lib/blog";
import { ArrowUpRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog - SEO, Paid Ads & Web Performance Insights | Sitemeyar" },
      {
        name: "description",
        content:
          "Tactical playbooks on semantic SEO, Google Business Profile, paid ads, and web performance from the Sitemeyar agency team.",
      },
      { property: "og:title", content: "Sitemeyar Blog - Growth Playbooks for Modern Brands" },
      {
        property: "og:description",
        content: "Senior agency insights on SEO, paid media, and conversion-focused web development.",
      },
      { property: "og:type", content: "website" },
      { rel: "canonical", href: "https://sitemeyar.com/blog" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-12">
        <div className="container-x">
          <span className="chip">Sitemeyar Blog</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-ink max-w-3xl leading-[1.05]">
            Growth playbooks for <span className="gradient-text">brands done playing small.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Long-form, no-fluff articles on SEO, paid media, GBP, and web performance - written by the team that ships the work.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="card-luxe overflow-hidden group flex flex-col"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-ink-soft">
                  <span className="text-primary font-semibold uppercase tracking-wider">{p.category}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {p.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-ink leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
