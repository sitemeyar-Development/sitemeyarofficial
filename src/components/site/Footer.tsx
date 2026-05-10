import { Facebook, Instagram, Linkedin, MessageCircle, AtSign, Mail } from "lucide-react";
import logo from "@/assets/sitemeyar-favicon.png";

export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Sitemeyar" className="h-9 w-9" />
              <span className="font-display text-2xl font-bold text-ink">Sitemeyar</span>
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed">
              A senior digital agency specialized in website development, semantic SEO, GBP optimization, and high-ROI ad campaigns.
              We help ambitious brands <span className="text-ink font-medium">Build. Rank. Scale.</span>
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { i: Facebook, href: "https://www.facebook.com/sitemeyar", l: "Facebook" },
                { i: Instagram, href: "https://www.instagram.com/sitemeyar/", l: "Instagram" },
                { i: Linkedin, href: "https://www.linkedin.com/company/sitemeyar/", l: "LinkedIn" },
                { i: AtSign, href: "https://www.threads.com/@sitemeyar", l: "Threads" },
              ].map(({ i: Icon, href, l }) => (
                <a key={l} href={href} aria-label={l} target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border grid place-items-center text-ink-soft hover:text-primary hover:border-primary transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-ink">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li><a href="/#services" className="hover:text-primary">Services</a></li>
              <li><a href="/#portfolio" className="hover:text-primary">Portfolio</a></li>
              <li><a href="/#packages" className="hover:text-primary">Packages</a></li>
              <li><a href="/blog" className="hover:text-primary">Blog</a></li>
              <li><a href="/#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ink">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a href="https://wa.me/8801532202824" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="size-4" /><span>WhatsApp · 01532202824</span>
                </a>
              </li>
              <li>
                <a href="mailto:sitemeyar.work@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="size-4" /><span>sitemeyar.work@gmail.com</span>
                </a>
              </li>
              <li className="pt-3">
                <a href="/downloads/Sitemeyar-Website-Development-Portfolio.pdf" download className="block hover:text-primary">↓ Web Development Portfolio</a>
              </li>
              <li>
                <a href="/downloads/Sitemeyar-Content-Creation-Profile.pdf" download className="block hover:text-primary">↓ Creative Content Profile</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Sitemeyar. All rights reserved.</p>
          <p>Build. Rank. Scale.</p>
        </div>
      </div>
    </footer>
  );
}
