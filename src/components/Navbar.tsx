import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

const nav = [
  { label: "Home", href: "/#top" },
  { label: "Events", href: "/#services" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-accent)]/20 bg-background/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center px-5 py-4">
        <div className="flex justify-start">
          <a href="/#top" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img
              src={logoImg}
              alt="NithyA EventS Logo"
              className="h-14 w-auto object-contain drop-shadow-sm invert hue-rotate-180"
            />
          </a>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-7">
          {nav.map((item) => {
            const isHash = item.href.startsWith("/#") || item.href.startsWith("mailto:");
            const linkClass = "group relative text-[0.9rem] font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:text-black/80 [&.active]:text-[var(--color-primary)] py-2";
            const underline = <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-primary)] transition-all duration-300 ease-out group-hover:w-full group-[.active]:w-full" />;
            
            if (isHash) {
              return (
                <a key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                  {underline}
                </a>
              );
            }
            return (
              <Link key={item.label} to={item.href} className={linkClass}>
                {item.label}
                {underline}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex justify-end">
          <a href="/#contact" className="btn-primary">
            <Calendar className="w-4 h-4 mr-1" />
            PLAN YOUR EVENT
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="flex justify-end lg:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-accent)]/30 text-[var(--color-text-main)] bg-[var(--color-surface)] hover:bg-[var(--color-surface)]/80 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col border-t border-[var(--color-accent)]/20 bg-background px-5 py-4 lg:hidden shadow-lg">
          {nav.map((item) => {
            const isHash = item.href.startsWith("/#") || item.href.startsWith("mailto:");
            const linkClass = "py-3 text-[0.85rem] font-medium uppercase tracking-[0.2em] text-black [&.active]:text-[var(--color-primary)]";
            if (isHash) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/#contact"
            className="btn-primary mt-4 w-full flex justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <Calendar className="w-4 h-4 mr-1" />
            PLAN YOUR EVENT
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </nav>
      )}
    </header>
  );
}
