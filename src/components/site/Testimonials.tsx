const reviews = [
  { name: "Ahmed R.", role: "Founder, Tours UAE", text: "Sitemeyar rebuilt our site and SEO. Leads tripled in 3 months — and the team genuinely cares.", time: "10:42 AM", initial: "A" },
  { name: "Priya M.", role: "CMO, Skincare DTC", text: "Best ROAS we've ever had. They write the ads, design the creative, and run the funnel.", time: "2:18 PM", initial: "P" },
  { name: "Daniel K.", role: "Owner, Dental Group", text: "Top 3 in the map pack inside 6 weeks. Phones haven't stopped.", time: "9:05 AM", initial: "D" },
  { name: "Sara L.", role: "Director, Interior Studio", text: "The website is gorgeous and ranks. Rare combo. They get craft and conversion.", time: "5:30 PM", initial: "S" },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip">Client love</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            What founders say after <span className="gradient-text">90 days with us.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="card-luxe p-6">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-primary-foreground font-semibold">
                  {r.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-ink text-sm">{r.name}</div>
                      <div className="text-xs text-ink-soft">{r.role}</div>
                    </div>
                    <div className="text-[oklch(0.78_0.18_85)] text-xs">★★★★★</div>
                  </div>
                  <div className="mt-3 relative inline-block max-w-full">
                    <div className="bg-[oklch(0.95_0.05_150)] text-ink rounded-2xl rounded-tl-md px-4 py-3 text-sm leading-relaxed">
                      {r.text}
                      <div className="text-[10px] text-ink-soft text-right mt-1.5">{r.time} ✓✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
