import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Search, BarChart3, MapPin, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="chip">
                <Sparkles className="size-3.5" />
                Build. Rank. Scale.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink"
            >
              The digital agency that <span className="gradient-text">turns clicks into clients.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed"
            >
              Conversion-ready websites, semantic SEO, Google Business Profile growth, and high-ROI ad campaigns —
              engineered for brands that are done playing small.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary">
                Book Free Consultation <ArrowRight className="size-4" />
              </a>
              <a href="#portfolio" className="btn-ghost">
                See Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                ["5+", "Years experience"],
                ["120+", "Projects delivered"],
                ["10+", "Industries served"],
                ["98%", "Client retention"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="text-2xl font-bold text-ink">{k}</div>
                  <div className="text-xs text-ink-soft mt-1">{v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[520px] md:h-[580px]"
          >
            {/* Browser mockup */}
            <div className="absolute top-0 left-0 right-6 card-luxe overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
                <span className="size-2.5 rounded-full bg-[oklch(0.7_0.2_27)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.8_0.15_85)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_150)]" />
                <div className="ml-3 text-xs text-ink-soft truncate">sitemeyar.com / dashboard</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-soft">Organic traffic</div>
                    <div className="text-2xl font-bold text-ink">+312%</div>
                  </div>
                  <div className="chip"><TrendingUp className="size-3.5" /> Live</div>
                </div>
                <svg viewBox="0 0 320 100" className="w-full h-24">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.55 0.27 264)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="oklch(0.55 0.27 264)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 C40,70 60,60 90,50 C120,40 150,55 180,40 C210,25 240,30 270,18 C290,10 310,8 320,5 L320,100 L0,100 Z" fill="url(#g1)" />
                  <path d="M0,80 C40,70 60,60 90,50 C120,40 150,55 180,40 C210,25 240,30 270,18 C290,10 310,8 320,5" stroke="oklch(0.55 0.27 264)" strokeWidth="2.5" fill="none" />
                </svg>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {["Keywords", "Backlinks", "CTR"].map((l, i) => (
                    <div key={l} className="rounded-xl bg-secondary/60 p-3">
                      <div className="text-[10px] text-ink-soft">{l}</div>
                      <div className="text-sm font-semibold text-ink">{["8,420", "1,204", "9.6%"][i]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GBP card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-12 left-0 w-60 card-luxe p-4"
            >
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <MapPin className="size-3.5 text-primary" /> Google Business Profile
              </div>
              <div className="mt-2 text-sm font-semibold text-ink">Top 3 in your area</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.78_0.18_85)] text-sm">★</span>
                  ))}
                </div>
                <div className="text-xs font-medium text-ink">4.9 · 312 reviews</div>
              </div>
            </motion.div>

            {/* Ads card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-20 -right-2 w-56 card-luxe p-4"
            >
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <BarChart3 className="size-3.5 text-primary" /> Meta + Google Ads
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-ink">4.7x</div>
                <div className="text-xs text-ink-soft">Avg. ROAS this quarter</div>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[82%] bg-[var(--gradient-primary)]" />
              </div>
            </motion.div>

            {/* SEO win badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-0 right-8 glass rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <Search className="size-5 text-primary" />
              <div>
                <div className="text-xs text-ink-soft">Ranked #1</div>
                <div className="text-sm font-semibold text-ink">"best agency near me"</div>
              </div>
              <CheckCircle2 className="size-4 text-[oklch(0.65_0.18_150)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
