import { useState } from "react";
import { z } from "zod";
import { Send, Phone, Mail, Download } from "lucide-react";

const schema = z.object({
  business: z.string().trim().min(1, "Business name required").max(120),
  name: z.string().trim().min(1, "Name required").max(80),
  phone: z.string().trim().min(6, "Valid phone required").max(30),
  email: z.string().trim().email("Valid email required").max(160),
  service: z.string().min(1, "Pick a service"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const services = ["Website Development", "Semantic SEO", "Google Business Profile", "Paid Ads", "Visual Content", "Not sure yet"];

export function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    const text = `New inquiry%0A%0ABusiness: ${r.data.business}%0AName: ${r.data.name}%0APhone: ${r.data.phone}%0AEmail: ${r.data.email}%0AService: ${r.data.service}%0AMessage: ${r.data.message || "-"}`;
    window.open(`https://wa.me/8801532202824?text=${text}`, "_blank");
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="card-luxe overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left */}
            <div className="p-8 md:p-12 bg-[var(--gradient-primary)] text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-xs font-semibold backdrop-blur">
                  Free 30-min consultation
                </span>
                <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                  Let's map your next 90 days of growth.
                </h2>
                <p className="mt-4 text-white/85 text-lg">
                  Tell us where you are. We'll show you what's possible — no fluff, no pressure, no obligation.
                </p>

                <div className="mt-8 space-y-3 text-sm">
                  <a href="tel:+8801532202824" className="flex items-center gap-3 hover:text-white">
                    <span className="size-9 rounded-full bg-white/20 grid place-items-center"><Phone className="size-4" /></span>
                    +880 1532 202824
                  </a>
                  <a href="mailto:sitemeyar.work@gmail.com" className="flex items-center gap-3 hover:text-white">
                    <span className="size-9 rounded-full bg-white/20 grid place-items-center"><Mail className="size-4" /></span>
                    sitemeyar.work@gmail.com
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/downloads/Sitemeyar-Website-Development-Portfolio.pdf" download className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-sm font-semibold backdrop-blur transition">
                    <Download className="size-4" /> Web Portfolio
                  </a>
                  <a href="/downloads/Sitemeyar-Content-Creation-Profile.pdf" download className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-sm font-semibold backdrop-blur transition">
                    <Download className="size-4" /> Creative Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="p-8 md:p-12 bg-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Business Name" name="business" error={errors.business} />
                <Field label="Contact Person" name="name" error={errors.name} />
                <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Service Requested</label>
                  <select name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition">
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your goals…" className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition resize-none" />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full justify-center">
                Send via WhatsApp <Send className="size-4" />
              </button>
              {status === "ok" && (
                <p className="mt-3 text-sm text-[oklch(0.55_0.16_150)]">Opening WhatsApp… we'll reply within 24h.</p>
              )}
              <p className="mt-4 text-xs text-ink-soft text-center">
                We reply to every inquiry within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
