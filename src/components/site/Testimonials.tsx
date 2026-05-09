import { useEffect, useRef } from "react";

const reviews = [
  { name: "Ahmed R.", role: "Founder, Tours UAE", text: "Sitemeyar rebuilt our site and SEO. Leads tripled in 3 months and the team genuinely cares.", time: "10:42 AM", initial: "A" },
  { name: "Priya M.", role: "CMO, Skincare DTC", text: "Best ROAS we've ever had. They write the ads, design the creative, and run the funnel.", time: "2:18 PM", initial: "P" },
  { name: "Daniel K.", role: "Owner, Dental Group", text: "Top 3 in the map pack inside 6 weeks. Phones haven't stopped.", time: "9:05 AM", initial: "D" },
  { name: "Sara L.", role: "Director, Interior Studio", text: "The website is gorgeous and ranks. Rare combo. They get craft and conversion.", time: "5:30 PM", initial: "S" },
  { name: "Omar H.", role: "CEO, Real Estate Group", text: "5x inquiries in two quarters. Lead quality went up, cost per lead went down.", time: "11:20 AM", initial: "O" },
  { name: "Lina T.", role: "Marketing Lead, F&B Chain", text: "Our reservations are booked solid. The visual content alone changed our brand.", time: "4:12 PM", initial: "L" },
  { name: "Faisal Q.", role: "Founder, SaaS Startup", text: "From invisible to first page on commercial keywords in under 90 days. Clean execution.", time: "8:55 AM", initial: "F" },
  { name: "Nadia K.", role: "Owner, Boutique Clinic", text: "They feel like an in-house team, not a vendor. Reporting is honest and weekly.", time: "1:40 PM", initial: "N" },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let paused = false;
    const speed = 0.6; // px per frame, right-to-left

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const tick = () => {
      if (!paused && el) {
        el.scrollLeft += speed;
        const max = el.scrollWidth / 2;
        if (el.scrollLeft >= max) el.scrollLeft -= max;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const loop = [...reviews, ...reviews];

  return (
    <section className="section bg-surface/40">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip">Client love</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            What founders say after <span className="gradient-text">90 days with us.</span>
          </h2>
          <p className="mt-4 text-ink-soft">Drag, scroll, or let it auto-play. Hover to pause.</p>
        </div>
      </div>

      <div className="mt-12 relative">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-10 pb-6 scroll-smooth testimonial-track"
        >
          {loop.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="card-luxe p-6 shrink-0 w-[340px] md:w-[400px]"
            >
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-semibold shrink-0">
                  {r.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-ink text-sm">{r.name}</div>
                      <div className="text-xs text-ink-soft">{r.role}</div>
                    </div>
                    <div className="text-[oklch(0.78_0.18_85)] text-xs">★★★★★</div>
                  </div>
                  <div className="mt-3 bg-[oklch(0.95_0.05_150)] text-ink rounded-2xl rounded-tl-md px-4 py-3 text-sm leading-relaxed">
                    {r.text}
                    <div className="text-[10px] text-ink-soft text-right mt-1.5">{r.time} ✓✓</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
