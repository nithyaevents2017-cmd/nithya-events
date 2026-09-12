import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import logoImg from "@/assets/logo.png";
import { sanityClient, urlFor, SanityGalleryImage } from "@/lib/sanity";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Nithya Events | Gallery" },
      {
        name: "description",
        content:
          "A curated glimpse into celebrations, experiences and unforgettable moments crafted by Nithya Events.",
      },
    ],
  }),
  component: GalleryPage,
});

const nav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#services" },
  { label: "Services", href: "/#what-we-create" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Sanity Data State
  const [images, setImages] = useState<SanityGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      try {
        // Fetch images ordered by creation time ascending (newest at bottom)
        const data = await sanityClient.fetch(
          `*[_type == "galleryImage"] | order(_createdAt asc) {
            _id,
            image,
            _createdAt
          }`,
        );
        setImages(data);
      } catch (err) {
        console.error("Failed to fetch gallery from Sanity", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <div id="top" className="min-h-screen bg-background pt-24">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-5 py-4">
          <div className="flex justify-start">
            <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img
                src={logoImg}
                alt="Nithya Events Logo"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8">
            {nav.map((item) => {
              if (item.href.startsWith("/#")) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary py-2"
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
                  className={`group relative text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:text-primary py-2 ${
                    item.label === "Gallery" ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out bg-primary/80 ${item.label === "Gallery" ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
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
              if (item.href.startsWith("/#")) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-xs uppercase tracking-[0.2em] ${
                      item.label === "Gallery"
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
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
                  className={`py-3 text-xs uppercase tracking-[0.2em] [&.active]:text-primary ${
                    item.label === "Gallery" ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
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

      {/* Gallery Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 pb-24">
        <div className="text-center">
          <p className="eyebrow uppercase tracking-[0.2em] text-primary text-[0.68rem]">Gallery</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display">
            Moments We Have <span className="text-primary">Created</span>
          </h1>
          <span className="gold-rule mt-6 mx-auto" />
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-muted-foreground">
            A curated glimpse into celebrations, experiences and unforgettable moments crafted by
            Nithya Events.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error || images.length === 0 ? (
          <div className="flex justify-center items-center py-32 text-muted-foreground tracking-widest uppercase text-sm">
            Gallery coming soon.
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imgDoc, i) => {
              const src = urlFor(imgDoc.image).width(800).url();
              return (
                <button
                  key={imgDoc._id}
                  onClick={() => setSelectedIndex(i)}
                  className="group relative overflow-hidden rounded-sm border border-border/50 bg-card/20 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background aspect-[4/3]"
                  aria-label={`View Gallery Image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt="Event celebration by Nithya Events"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="fixed left-1/2 top-1/2 z-[100] max-w-7xl -translate-x-1/2 -translate-y-1/2 p-0 outline-none border-none bg-transparent shadow-none w-[100vw] h-[100dvh] flex items-center justify-center overflow-hidden [&>button]:hidden">
          <DialogOverlay className="bg-black/95 backdrop-blur-md z-[-1]" />
          <DialogTitle className="sr-only">Image Gallery Viewer</DialogTitle>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/70 hover:bg-black hover:text-white transition-colors lg:right-8 lg:top-8"
            aria-label="Close viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {selectedIndex !== null && images[selectedIndex] && (
            <div className="relative flex h-full w-full items-center justify-center p-2 sm:p-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 z-50 rounded-full bg-black/50 p-3 text-white/70 hover:bg-black hover:text-primary transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <img
                key={images[selectedIndex]._id}
                src={urlFor(images[selectedIndex].image).width(1600).url()}
                alt="Event celebration by Nithya Events"
                className="max-h-[85vh] max-w-[85vw] object-contain animate-in fade-in zoom-in-95 duration-300 shadow-2xl"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 z-50 rounded-full bg-black/50 p-3 text-white/70 hover:bg-black hover:text-primary transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] text-white/70 backdrop-blur-sm border border-white/10">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-border py-10 mt-auto">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <img src={logoImg} alt="Nithya Events Logo" className="h-12 w-auto object-contain" />
            <p className="text-xs text-muted-foreground">We celebrate your dreams</p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nithya Events, Karimnagar. All rights reserved.
          </p>
          <a href="#top" className="text-xs uppercase tracking-[0.2em] text-primary">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
