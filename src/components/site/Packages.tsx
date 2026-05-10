import { Check } from "lucide-react";

const tiers = [
  {
    name: "New Entrepreneur",
    price: "BDT 14,999",
    tag: "Get online fast",
    features: ["3 Page Website", "Mobile Friendly", "Basic Design", "Lead Capture Setup", "SEO Feature Ready", "Secure Setup", "Delivery in 7 days"],
  },
  {
    name: "Growing Business",
    price: "BDT 24,999",
    tag: "Best value",
    featured: true,
    features: ["7 Page Website", "Custom Design", "Mobile Friendly", "Speed Optimized", "SEO Setup Ready", "Blog Page Setup", "Security Setup", "Lead Capture Setup", "Delivery in 15 days"],
  },
  {
    name: "Market Leader",
    price: "BDT 37,999",
    tag: "Scale-ready",
    features: ["10–12 Page Website", "Advanced Design", "Mobile Friendly", "Full SEO Setup Ready", "Blog Page Setup", "Proper Layout", "Payment Gateway", "Delivery in 20–25 days"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="section bg-surface/50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Packages</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            Website packages built to <span className="gradient-text">ship and rank.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Need a custom stack site or enterprise build? We do that too - just ask.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card-luxe p-8 relative ${
                t.featured ? "ring-2 ring-primary md:-translate-y-3 shadow-[var(--shadow-glow)]" : ""
              }`}
            >
              {t.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white border border-transparent shadow-md"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Most Popular
                </span>
              )}
              <div className="text-sm text-ink-soft">{t.tag}</div>
              <h3 className="mt-1 text-xl font-semibold text-ink">{t.name}</h3>
              <div className="mt-5 text-4xl font-bold text-ink">{t.price}</div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 w-full justify-center ${t.featured ? "btn-primary" : "btn-ghost"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
