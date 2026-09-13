import { useState } from "react";
import { Link } from "@tanstack/react-router";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-5 py-4">
        <div className="flex justify-start">
          <a href="/#top" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img
              src={logoImg}
              alt="NithyA EventS Logo"
              className="h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]"
            />
          </a>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-6">
          {nav.map((item) => {
            if (item.href.startsWith("/#") || item.href.startsWith("mailto:")) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative text-[15px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/80 transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                className="group relative text-[15px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/80 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex justify-end">
          <a href="/#contact" className="btn-premium-glossy">
            PLAN YOUR EVENT
          </a>
        </div>
        <div className="flex justify-end lg:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-border/50 bg-background/50 hover:bg-white/5 transition-colors"
          >
            <span className="h-px w-5 bg-primary transition-all" />
            <span className="h-px w-5 bg-primary transition-all" />
            <span className="h-px w-5 bg-primary transition-all" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col border-t border-border bg-background px-5 py-4 lg:hidden">
          {nav.map((item) => {
            if (item.href.startsWith("/#") || item.href.startsWith("mailto:")) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground"
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
                className="py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground [&.active]:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/#contact"
            className="btn-premium-glossy mt-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            PLAN YOUR EVENT
          </a>
        </nav>
      )}
    </header>
  );
}
