import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "Sarah Modern Tours & Travels", industry: "Travel Agency", result: "+220% qualified leads in 90 days", url: "https://smttuae.com/", accent: "from-[oklch(0.85_0.12_220)] to-[oklch(0.7_0.18_240)]" },
  { name: "Restaurant Daniel", industry: "Fine Dining", result: "Reservations up 3.4×", url: "https://www.danielnyc.com/", accent: "from-[oklch(0.88_0.1_60)] to-[oklch(0.72_0.16_30)]" },
  { name: "Sobha Realty", industry: "Real Estate", result: "Inquiries 5× / cost per lead −62%", url: "https://sobharealty.com/", accent: "from-[oklch(0.86_0.1_180)] to-[oklch(0.65_0.16_220)]" },
  { name: "Baker Street Dental", industry: "Dental Clinic", result: "Top 3 map pack in 6 weeks", url: "https://www.bakerstreetdental.com/", accent: "from-[oklch(0.88_0.08_160)] to-[oklch(0.7_0.14_180)]" },
  { name: "Amedisys", industry: "Healthcare", result: "Organic traffic +312%", url: "https://www.amedisys.com/", accent: "from-[oklch(0.9_0.06_120)] to-[oklch(0.7_0.14_150)]" },
  { name: "Oliz Store", industry: "E-Commerce", result: "ROAS 4.7× across Meta + Google", url: "https://www.olizstore.com/", accent: "from-[oklch(0.86_0.12_300)] to-[oklch(0.65_0.2_280)]" },
  { name: "Mike Murphy Group", industry: "Law Firm", result: "Cost per case −48%", url: "#", accent: "from-[oklch(0.85_0.08_50)] to-[oklch(0.6_0.14_30)]" },
  { name: "The Studio by DH", industry: "Interior Design", result: "Bookings doubled in Q1", url: "https://thestudiobydh.com/", accent: "from-[oklch(0.9_0.05_80)] to-[oklch(0.72_0.12_60)]" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="chip">Portfolio</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-ink">
              Selected work, <span className="gradient-text">measurable wins.</span>
            </h2>
          </div>
          <a href="/downloads/Sitemeyar-Website-Development-Portfolio.pdf" download className="btn-ghost">
            Download Full Portfolio (PDF)
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="card-luxe overflow-hidden group">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-x-6 top-6 glass rounded-xl px-3 py-2 text-xs font-medium text-ink">
                  {new URL(p.url.startsWith("http") ? p.url : "https://sitemeyar.com").hostname}
                </div>
                <div className="absolute inset-x-6 bottom-6 space-y-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-white/70" />
                  <div className="h-1.5 w-1/2 rounded bg-white/50" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-ink-soft">{p.industry}</span>
                  <ArrowUpRight className="size-4 text-ink-soft group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mt-2 font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-primary font-medium">{p.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
