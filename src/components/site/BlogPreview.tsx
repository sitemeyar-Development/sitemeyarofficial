import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog";

export function BlogPreview() {
  const featured = posts.slice(0, 3);
  return (
    <section id="blog" className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="chip">Insights</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
              Playbooks from the <span className="gradient-text">Sitemeyar desk.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Tactical writing on SEO, paid media, web performance, and creative - the same systems we run for clients.
            </p>
          </div>
          <Link to="/blog" className="btn-ghost">
            Read all articles <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {featured.map((p) => (
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
                <h3 className="mt-3 text-lg font-semibold text-ink leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
