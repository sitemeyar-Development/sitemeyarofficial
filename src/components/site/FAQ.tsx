import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a typical website take to build?", a: "Most projects launch in 7–25 days depending on the package. Custom stack and enterprise builds run on a separate timeline." },
  { q: "How quickly will I see SEO results?", a: "Foundational wins (technical, on-page, GBP) compound in 30–60 days. Strong organic ranking lifts typically appear from month 3 onward." },
  { q: "Do you guarantee top Google rankings?", a: "We don't guarantee specific positions — nobody honest does. We do guarantee senior execution, transparent reporting, and measurable lifts in qualified traffic and leads." },
  { q: "What's included in Google Business Profile optimization?", a: "Full GBP audit, category & service optimization, geo-tagged images, review strategy, weekly posts, Q&A management, and local citation cleanup." },
  { q: "Can you manage Google and Meta Ads together?", a: "Yes — we run integrated campaigns with shared creative, audience, and offer strategy. Reporting is unified so you see true blended ROAS." },
  { q: "What does your visual content service cover?", a: "Premium product, food, lifestyle, and brand visuals — including AI-driven photography, scroll-stopping ad creatives, and thumb-stop social assets." },
  { q: "Do you work with businesses outside Bangladesh?", a: "Yes. We work with brands across UAE, US, UK, India, and beyond. Our team has 5+ years of international agency experience." },
  { q: "How do you price ongoing work?", a: "Monthly retainers are scoped to channels and goals. We share a clear deliverables list and KPI commitment before you sign anything." },
  { q: "Will I own my website and ad accounts?", a: "Always. You own every account, asset, and deliverable. We never hold your business hostage." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-surface/50">
      <div className="container-x grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="chip">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Can't find what you need? <a href="#contact" className="text-primary font-medium">Send us a quick message</a> and we'll get back inside 24 hours.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="card-luxe overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <Plus className={`size-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-ink-soft leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
