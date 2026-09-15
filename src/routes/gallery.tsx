import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { sanityClient, urlFor, SanityGalleryImage } from "@/lib/sanity";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | NithyA EventS" },
      {
        name: "description",
        content:
          "A curated glimpse into celebrations, experiences and unforgettable moments crafted by NithyA EventS.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [images, setImages] = useState<SanityGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      try {
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
    <div id="top" className="min-h-screen bg-botanical pt-32 pb-24 relative overflow-hidden">
      <section className="mx-auto max-w-[1400px] px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
             <span className="w-10 h-px bg-[var(--color-accent)]/30"></span>
             <p className="eyebrow tracking-[0.2em] text-[0.8rem] font-medium text-[var(--color-accent)]">MOMENTS WE HAVE CREATED</p>
             <span className="w-10 h-px bg-[var(--color-accent)]/30"></span>
          </div>
          <h1 className="heading-main text-[3rem] sm:text-[4rem] mb-6">
            Our <span className="text-[var(--color-primary)]">Gallery</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-[0.95rem] leading-relaxed">
            A curated glimpse into celebrations, experiences and unforgettable moments crafted by NithyA EventS.
          </p>
          <div className="absolute right-0 top-0 hidden lg:block">
            <p className="script-text text-[3rem] text-[var(--color-accent)] opacity-80 -rotate-6">It's not just<br/><span className="ml-8">an event,</span><br/><span className="ml-16">it's a feeling</span></p>
            <div className="w-12 h-px bg-[var(--color-accent)] mt-2 ml-auto"></div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <Loader2 className="h-10 w-10 animate-spin text-[var(--color-primary)]" />
          </div>
        ) : error || images.length === 0 ? (
          <div className="flex justify-center items-center py-32 text-[var(--color-text-muted)] tracking-widest uppercase text-sm font-medium">
            Gallery coming soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((imgDoc, i) => {
              const src = urlFor(imgDoc.image).width(800).url();
              return (
                <button
                  key={imgDoc._id}
                  onClick={() => setSelectedIndex(i)}
                  className="group relative overflow-hidden rounded-xl border border-[var(--color-accent)]/20 bg-background transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-[0_10px_30px_rgba(122,16,45,0.15)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-background aspect-square"
                  aria-label={`View Gallery Image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt="Event celebration by NithyA EventS"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
        <DialogContent className="fixed left-1/2 top-1/2 z-[100] max-w-7xl -translate-x-1/2 -translate-y-1/2 p-0 outline-none border-none bg-transparent shadow-none w-full h-[100dvh] flex items-center justify-center overflow-hidden [&>button]:hidden">
          <DialogOverlay className="bg-black/95 backdrop-blur-md z-[-1]" />
          <DialogTitle className="sr-only">Image Gallery Viewer</DialogTitle>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-3 text-white/70 hover:bg-[var(--color-primary)] hover:text-white transition-colors lg:right-8 lg:top-8 border border-white/20"
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
                className="absolute left-2 sm:left-8 z-50 rounded-full bg-white/10 p-3 text-white/70 hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-110 border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <img
                key={images[selectedIndex]._id}
                src={urlFor(images[selectedIndex].image).width(1600).url()}
                alt="Event celebration by NithyA EventS"
                className="max-h-[85vh] max-w-[85vw] object-contain animate-in fade-in zoom-in-95 duration-300 shadow-2xl rounded-md border border-white/10"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-8 z-50 rounded-full bg-white/10 p-3 text-white/70 hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-110 border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-6 py-2 text-[0.8rem] tracking-[0.2em] text-white/80 backdrop-blur-sm border border-white/20">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
