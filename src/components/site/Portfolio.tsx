import { ArrowUpRight, Globe } from "lucide-react";

type Project = {
  name: string;
  industry: string;
  result: string;
  url: string;
};

const projects: Project[] = [
  { name: "Sarah Modern Tours & Travels", industry: "Travel Agency", result: "+220% qualified leads in 90 days via SEO + Meta Ads", url: "https://smttuae.com/" },
  { name: "Restaurant Daniel", industry: "Fine Dining", result: "Reservations up 3.4x with GBP optimization", url: "https://www.danielnyc.com/" },
  { name: "Sobha Realty", industry: "Real Estate", result: "Inquiries 5x, cost per lead -62% on Google Ads", url: "https://www.sobharealty.com/" },
  { name: "Baker Street Dental", industry: "Dental Clinic", result: "Top 3 map pack in 6 weeks (Local SEO)", url: "https://www.bakerstreetdental.com/" },
  { name: "Amedisys", industry: "Healthcare", result: "Organic traffic +312% via semantic SEO", url: "https://www.amedisys.com/" },
  { name: "Oliz Store", industry: "E-Commerce", result: "ROAS 4.7x across Meta + Google Ads", url: "https://www.olizstore.com/" },
  { name: "Mike Murphy Group", industry: "Law Firm", result: "Cost per case -48% with AEO + paid search", url: "https://mikemurphygroup.com/" },
  { name: "The Studio by DH", industry: "Interior Design", result: "Bookings doubled in Q1 via website + SEO", url: "https://thestudiobydh.com/" },
];

const screenshotUrl = (siteUrl: string) => {
  // Free homepage thumbnail service - returns a real screenshot of the live site
  const target = encodeURIComponent(siteUrl);
  return `https://image.thum.io/get/width/1280/crop/800/noanimate/${target}`;
};

const hostOf = (siteUrl: string) => {
  try {
    return new URL(siteUrl).hostname.replace(/^www\./, "");
  } catch {
    return siteUrl;
  }
};

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
            <p className="mt-4 text-lg text-ink-soft">
              Real homepage screenshots from live client websites we built, ranked, and scaled with SEO, GBP optimization, and paid ads.
            </p>
          </div>
          <a href="/downloads/Sitemeyar-Website-Development-Portfolio.pdf" download className="btn-ghost">
            Download Full Portfolio (PDF)
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="card-luxe overflow-hidden group block">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[oklch(0.97_0.005_250)] border-b border-border">
                <span className="size-2 rounded-full bg-[oklch(0.7_0.2_27)]" />
                <span className="size-2 rounded-full bg-[oklch(0.8_0.15_85)]" />
                <span className="size-2 rounded-full bg-[oklch(0.7_0.18_150)]" />
                <div className="ml-2 flex-1 min-w-0">
                  <div className="text-[10px] text-ink-soft truncate bg-white border border-border rounded-full px-2 py-0.5 inline-flex items-center gap-1 max-w-full">
                    <Globe className="size-2.5" /> {hostOf(p.url)}
                  </div>
                </div>
              </div>

              {/* Real homepage screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={screenshotUrl(p.url)}
                  alt={`${p.name} homepage screenshot - ${p.industry} website by Sitemeyar`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-ink-soft font-semibold">{p.industry}</span>
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
