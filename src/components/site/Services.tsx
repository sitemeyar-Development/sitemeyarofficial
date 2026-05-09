import { Code2, Search, MapPin, Megaphone, Camera, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Conversion-engineered websites on WordPress, Shopify, and custom stacks - fast, secure, and SEO-ready from day one.",
  },
  {
    icon: Search,
    title: "Semantic SEO",
    desc: "High-performance technical & content SEO that wins featured snippets and compounds traffic month after month.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Local SEO and GBP optimization that puts your business in the top 3 map pack - where buyers actually click.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads (Google + Meta)",
    desc: "Performance campaigns built around offer, audience, and creative - measured by ROAS, not vanity metrics.",
  },
  {
    icon: Camera,
    title: "Visual Content",
    desc: "Premium AI-driven product, food, and brand visuals - scroll-stopping creative that converts on every channel.",
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip">Services</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            One partner. <span className="gradient-text">Every growth channel.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            We replace 5 disconnected vendors with one accountable team - strategy, design, code, and media in lockstep.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className={`card-luxe p-7 group ${i === 0 ? "lg:row-span-2 lg:p-8" : ""}`}>
              <div className="size-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-[var(--shadow-glow)]">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
