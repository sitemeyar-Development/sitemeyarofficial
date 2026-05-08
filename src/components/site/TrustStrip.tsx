const trust = [
  "WordPress",
  "Shopify",
  "Webflow",
  "Google Ads",
  "Meta Business",
  "GA4",
  "Search Console",
  "HubSpot",
];

export function TrustStrip() {
  return (
    <section className="py-10 border-y border-border bg-surface/60">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-soft mb-6">
          Trusted across industries · Built on the platforms you trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trust.map((t) => (
            <span key={t} className="text-ink font-display font-semibold tracking-tight text-base md:text-lg">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
