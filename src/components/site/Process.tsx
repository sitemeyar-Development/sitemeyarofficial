const steps = [
  { n: "01", t: "Discovery & Audit", d: "Free consultation. We diagnose what's actually broken in your funnel." },
  { n: "02", t: "Strategy & Roadmap", d: "A 90-day plan with KPIs, channels, budget, and timelines you can defend to your board." },
  { n: "03", t: "Build & Launch", d: "Design, develop, optimize, and launch — all under one project manager." },
  { n: "04", t: "Scale & Report", d: "Weekly optimization, transparent dashboards, monthly strategy calls." },
];

export function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip">Process</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            A clear path from <span className="gradient-text">first call to scaling growth.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="card-luxe p-7 relative">
              <div className="text-5xl font-display font-bold gradient-text leading-none">{s.n}</div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-10 -right-3 text-ink-soft/30">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
