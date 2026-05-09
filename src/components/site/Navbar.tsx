import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sitemeyar-favicon.png";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-full px-3 md:px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass shadow-[var(--shadow-sm)]"
              : "border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2">
            <img src={logo} alt="Sitemeyar" className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Sitemeyar
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-ink-soft hover:text-primary transition-colors rounded-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="/#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
              Book Free Consultation
            </a>
            <button
              className="lg:hidden p-2 rounded-full glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-[var(--shadow-md)]">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-ink hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                  Book Free Consultation
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
