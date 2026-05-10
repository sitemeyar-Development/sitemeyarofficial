import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getPost, posts } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found | Sitemeyar Blog" }] };
    const url = `https://sitemeyar.com/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Sitemeyar Blog` },
        { name: "description", content: post.excerpt },
        { name: "keywords", content: post.keywords.join(", ") },
        { name: "author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Sitemeyar",
              logo: { "@type": "ImageObject", url: "https://sitemeyar.com/favicon.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.keywords.join(", "),
            articleSection: post.category,
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <main className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-ink">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-6 inline-flex">Back to blog</Link>
      </div>
    </main>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-36 pb-20">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-primary">
            <ArrowLeft className="size-4" /> All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-soft">
            <span className="text-primary font-semibold uppercase tracking-wider">{post.category}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="size-3" /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {post.readTime}</span>
            <span className="inline-flex items-center gap-1"><User className="size-3" /> {post.author}</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-ink leading-[1.1]">{post.title}</h1>
          <p className="mt-5 text-xl text-ink-soft leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="container-x max-w-3xl mt-10">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-surface">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-x max-w-3xl mt-12 space-y-8">
          {post.content.map((block, i: number) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 mt-6">{block.heading}</h2>
              )}
              <p className="text-lg text-ink leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-24 border-t border-border pt-16 bg-surface/50">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink">Keep reading</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="card-luxe p-6 group"
                >
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.category}</div>
                  <h3 className="mt-2 font-semibold text-ink group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
