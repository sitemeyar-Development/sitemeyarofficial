import { Shield, Clock, Target, Users, Zap, BarChart3 } from "lucide-react";

const reasons = [
  { icon: Target, title: "ROI-first thinking", desc: "Every deliverable maps to revenue. We measure pipeline, not impressions." },
  { icon: Zap, title: "Fast, accountable delivery", desc: "Most websites ship in 7–25 days with weekly progress milestones." },
  { icon: Shield, title: "Senior-only team", desc: "No juniors learning on your account. 5+ years of international experience." },
  { icon: Users, title: "One team, full stack", desc: "Strategy, design, dev, SEO, and ads under one roof - zero handoff loss." },
  { icon: BarChart3, title: "Transparent reporting", desc: "Live dashboards. You see traffic, leads, and ad spend in real time." },
  { icon: Clock, title: "Always-on support", desc: "Dedicated account manager and a response SLA you can actually count on." },
];

export function WhyChoose() {
  return (
    <section className="section bg-surface/50">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="chip">Why Sitemeyar</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
              The growth partner you wish you'd hired <span className="gradient-text">two years ago.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              We're not a freelance marketplace or a bloated agency. We're a senior team obsessed with what actually moves your number.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="card-luxe p-6">
                <r.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
