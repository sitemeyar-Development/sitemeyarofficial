import { AlertCircle, Lightbulb, Trophy } from "lucide-react";

const blocks = [
  {
    icon: AlertCircle,
    label: "Problem",
    title: "Invisible to high-intent buyers",
    body: "Sarah Modern Tours had a beautiful new site but ranked outside the top 50 for every commercial keyword. Paid ads were burning AED 12K/mo with a 1.4× ROAS.",
  },
  {
    icon: Lightbulb,
    label: "Strategy",
    title: "Semantic SEO + offer-led ads",
    body: "We rebuilt the information architecture around buyer-intent clusters, shipped 28 location pages, restructured GBP, and rewrote the ad funnel around a single irresistible offer.",
  },
  {
    icon: Trophy,
    label: "Result",
    title: "+220% leads, ROAS 4.6×",
    body: "Within 90 days organic traffic 3.1×, qualified leads +220%, and paid spend efficiency improved 3.3× - without increasing the media budget.",
  },
];

export function CaseStudy() {
  return (
    <section className="section bg-surface/50">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">Featured case study</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            How we 3.1× organic traffic for <span className="gradient-text">Sarah Modern Tours</span> in 90 days.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {blocks.map((b) => (
            <div key={b.label} className="card-luxe p-7 relative">
              <div className="size-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-[var(--shadow-glow)] relative z-10">
                <b.icon className="size-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-primary font-semibold">{b.label}</div>
              <h3 className="mt-1.5 text-xl font-semibold text-ink">{b.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
