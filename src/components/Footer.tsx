import { Link } from "@tanstack/react-router";
import logoImg from "../assets/logo.png";
import { Instagram, Facebook, Youtube, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] text-white pt-16 pb-8 border-t-[8px] border-[var(--color-accent)] z-50">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <img src={logoImg} alt="NithyA EventS Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] invert hue-rotate-180" />
            <p className="script-text text-white/80 text-xl tracking-wide">We celebrate your dreams</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["HOME", "EVENTS", "SERVICES", "GALLERY", "REVIEWS", "CONTACT"].map((link) => (
              <a
                key={link}
                href={link === "SERVICES" || link === "GALLERY" ? `/${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                className="text-[0.85rem] font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-[var(--color-accent)] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" aria-label="Visit our Instagram" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
               <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Visit our Facebook" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
               <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Visit our YouTube" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
               <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:nithyaevents2017@gmail.com" aria-label="Email NithyA EventS" className="text-white/70 hover:text-[var(--color-accent)] transition-colors">
               <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-4 gap-4">
          <p className="text-[0.75rem] text-white/50 tracking-wide">
            © {new Date().getFullYear()} NithyA EventS, Karimnagar. All rights reserved.
          </p>
          <a href="#top" className="group flex items-center gap-2 text-[0.75rem] tracking-[0.15em] uppercase text-white/50 hover:text-[var(--color-accent)] transition-colors">
            BACK TO TOP <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
