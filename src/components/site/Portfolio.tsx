import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  industry: string;
  result: string;
  url: string;
  brand: { from: string; to: string; accent: string };
  mock: "travel" | "dining" | "realestate" | "dental" | "health" | "ecom" | "law" | "interior";
};

const projects: Project[] = [
  { name: "Sarah Modern Tours & Travels", industry: "Travel Agency", result: "+220% qualified leads in 90 days", url: "https://smttuae.com/", brand: { from: "oklch(0.85 0.12 220)", to: "oklch(0.55 0.2 240)", accent: "oklch(0.55 0.2 240)" }, mock: "travel" },
  { name: "Restaurant Daniel", industry: "Fine Dining", result: "Reservations up 3.4x", url: "https://www.danielnyc.com/", brand: { from: "oklch(0.92 0.06 60)", to: "oklch(0.45 0.12 30)", accent: "oklch(0.45 0.12 30)" }, mock: "dining" },
  { name: "Sobha Realty", industry: "Real Estate", result: "Inquiries 5x, cost per lead -62%", url: "https://sobharealty.com/", brand: { from: "oklch(0.94 0.04 220)", to: "oklch(0.4 0.1 230)", accent: "oklch(0.5 0.14 220)" }, mock: "realestate" },
  { name: "Baker Street Dental", industry: "Dental Clinic", result: "Top 3 map pack in 6 weeks", url: "https://www.bakerstreetdental.com/", brand: { from: "oklch(0.95 0.05 180)", to: "oklch(0.55 0.14 190)", accent: "oklch(0.55 0.14 190)" }, mock: "dental" },
  { name: "Amedisys", industry: "Healthcare", result: "Organic traffic +312%", url: "https://www.amedisys.com/", brand: { from: "oklch(0.95 0.05 150)", to: "oklch(0.5 0.14 160)", accent: "oklch(0.5 0.14 160)" }, mock: "health" },
  { name: "Oliz Store", industry: "E-Commerce", result: "ROAS 4.7x across Meta + Google", url: "https://www.olizstore.com/", brand: { from: "oklch(0.93 0.07 300)", to: "oklch(0.45 0.2 290)", accent: "oklch(0.5 0.2 290)" }, mock: "ecom" },
  { name: "Mike Murphy Group", industry: "Law Firm", result: "Cost per case -48%", url: "#", brand: { from: "oklch(0.94 0.04 80)", to: "oklch(0.35 0.1 50)", accent: "oklch(0.45 0.12 60)" }, mock: "law" },
  { name: "The Studio by DH", industry: "Interior Design", result: "Bookings doubled in Q1", url: "https://thestudiobydh.com/", brand: { from: "oklch(0.95 0.04 80)", to: "oklch(0.6 0.1 50)", accent: "oklch(0.55 0.1 60)" }, mock: "interior" },
];

function Mockup({ project }: { project: Project }) {
  const { brand, mock, name } = project;
  const host = (() => {
    try { return new URL(project.url.startsWith("http") ? project.url : "https://example.com").hostname; }
    catch { return "sitemeyar.com"; }
  })();

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[oklch(0.97_0.005_250)] border-b border-border">
        <span className="size-2 rounded-full bg-[oklch(0.7_0.2_27)]" />
        <span className="size-2 rounded-full bg-[oklch(0.8_0.15_85)]" />
        <span className="size-2 rounded-full bg-[oklch(0.7_0.18_150)]" />
        <div className="ml-2 flex-1 min-w-0">
          <div className="text-[9px] text-ink-soft truncate bg-white border border-border rounded-full px-2 py-0.5 inline-block max-w-full">
            {host}
          </div>
        </div>
      </div>

      {/* Site content */}
      <div className="relative h-[calc(100%-26px)] overflow-hidden">
        {/* Hero band */}
        <div
          className="absolute inset-x-0 top-0 h-3/5"
          style={{ background: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
        />
        {/* Top nav */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
          <div className="text-[10px] font-bold text-white truncate max-w-[40%]">{name.split(" ").slice(0, 2).join(" ")}</div>
          <div className="flex gap-2">
            {["Home", "About", "Services", "Contact"].map((l) => (
              <span key={l} className="text-[8px] text-white/80">{l}</span>
            ))}
          </div>
        </div>

        {/* Mock body per industry */}
        {mock === "travel" && <TravelMock accent={brand.accent} />}
        {mock === "dining" && <DiningMock accent={brand.accent} />}
        {mock === "realestate" && <RealestateMock accent={brand.accent} />}
        {mock === "dental" && <DentalMock accent={brand.accent} />}
        {mock === "health" && <HealthMock accent={brand.accent} />}
        {mock === "ecom" && <EcomMock accent={brand.accent} />}
        {mock === "law" && <LawMock accent={brand.accent} />}
        {mock === "interior" && <InteriorMock accent={brand.accent} />}
      </div>
    </div>
  );
}

function HeroText({ headline, sub, cta }: { headline: string; sub: string; cta: string }) {
  return (
    <div className="absolute inset-x-4 top-9">
      <div className="text-[13px] font-bold text-white leading-tight max-w-[80%]">{headline}</div>
      <div className="mt-1 text-[8px] text-white/85 max-w-[75%] leading-snug">{sub}</div>
      <div className="mt-2 inline-block bg-white text-[8px] font-semibold px-2 py-1 rounded-full text-ink">{cta}</div>
    </div>
  );
}

function CardRow({ accent, items }: { accent: string; items: string[] }) {
  return (
    <div className="absolute inset-x-3 bottom-2 grid grid-cols-3 gap-1.5">
      {items.map((t, i) => (
        <div key={i} className="bg-white rounded-md p-1.5 shadow-sm border border-border">
          <div className="h-3 rounded-sm" style={{ background: accent, opacity: 0.85 }} />
          <div className="mt-1 text-[7px] text-ink truncate">{t}</div>
          <div className="mt-0.5 h-0.5 w-2/3 rounded bg-ink-soft/30" />
        </div>
      ))}
    </div>
  );
}

const TravelMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Discover Dubai with curated tours" sub="From desert safaris to luxury yacht days." cta="Book Now" />
    <CardRow accent={accent} items={["Desert Safari", "Burj Khalifa", "Yacht Day"]} />
  </>
);
const DiningMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Modern French cuisine, redefined." sub="Tasting menus crafted nightly." cta="Reserve a Table" />
    <CardRow accent={accent} items={["Tasting Menu", "Wine Pairing", "Private Room"]} />
  </>
);
const RealestateMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Iconic homes, signature addresses." sub="Luxury residences across Dubai and beyond." cta="View Listings" />
    <CardRow accent={accent} items={["3BR Marina", "Villa Palm", "Penthouse"]} />
  </>
);
const DentalMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="A dental practice you can trust." sub="Same-day appointments. Family friendly." cta="Book Visit" />
    <CardRow accent={accent} items={["Cleaning", "Implants", "Whitening"]} />
  </>
);
const HealthMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Care that comes to you, at home." sub="Skilled nursing and therapy nationwide." cta="Find Care" />
    <CardRow accent={accent} items={["Home Health", "Hospice", "Personal"]} />
  </>
);
const EcomMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Authentic gadgets, delivered fast." sub="Phones, laptops, and accessories." cta="Shop Now" />
    <CardRow accent={accent} items={["iPhone 17", "MacBook", "AirPods"]} />
  </>
);
const LawMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Trusted personal injury attorneys." sub="No win, no fee. Decades of results." cta="Free Consult" />
    <CardRow accent={accent} items={["Auto", "Workplace", "Medical"]} />
  </>
);
const InteriorMock = ({ accent }: { accent: string }) => (
  <>
    <HeroText headline="Interiors that feel like home." sub="Bespoke residential and hospitality design." cta="Start Project" />
    <CardRow accent={accent} items={["Residences", "Hotels", "F&B"]} />
  </>
);

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
              <Mockup project={p} />
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
