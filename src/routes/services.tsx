import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

import foodImg from "../../services/food.jpeg";
import cateringImg from "../../services/catering.jpg";
import decorationImg from "../../services/decoration.jpg";
import brassBandImg from "../../services/Bass Band.jpg";
import djImg from "../../services/Dj.jpg";
import soundsImg from "../../services/sound.jpg";
import lightingImg from "../../services/lightning.jpg";
import orchestraImg from "../../services/orchestra.jpg";
import anchorImg from "../../services/anchoring_hosting.jpg";
import photographyImg from "../../services/photography.jpg";
import videographyImg from "../../services/videography.jpg";
import cinematographicImg from "../../services/cinematographic wedding.jpg";
import buffetStagesImg from "../../services/buffet stages.jpeg";
import mehendiImg from "../../services/mehendi designs.jpg";
import beauticianImg from "../../services/beautician_makeup.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NithyA EventS" },
      {
        name: "description",
        content:
          "Thoughtful planning. Beautiful execution. Discover the comprehensive event services offered by NithyA EventS.",
      },
    ],
  }),
  component: ServicesPage,
});

const nav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#services" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const servicesList = [
  {
    title: "FOOD",
    description:
      "Great food is what we provide whatever the occasion. Whether it's a small dinner party, a wedding, a lunch meeting or a banquet, from a min of 20 to 5000 or more people.From Thalis to Biryanis, Dals to Naans, Deserts to Chaats ,we Offer a Wide assortment of Veg and Non-Veg spices.",
    img: foodImg,
  },
  {
    title: "CATERING",
    description:
      "We offer The Latest and Traditional Catering services like Dining in Decorated Copper vessels and also in Pot vessels which provide Hygienic and Delightful dinning.",
    img: cateringImg,
  },
  {
    title: "DECORATION",
    description:
      "Decorating for an event goes far beyond the tent and tables. Let our professional design team work with you to pick the perfect decor elements to wow your guests.",
    img: decorationImg,
  },
  {
    title: "BRASS BAND",
    description:
      "Celebrate your blissful occasion with our band which is a skilled team of brass band that performs both traditional and new age music.The band also presents music, depending upon the moods and theme of occasion.",
    img: brassBandImg,
  },
  {
    title: "DJ",
    description:
      "What's an event without some entertainment? Be it anything, we can organize them all for you to make the event more memorable.",
    img: djImg,
  },
  {
    title: "SOUNDS",
    description:
      "Sound is an art form though we admit to infusing the very latest technology,techniques and a no compromise approach to every single event that we undertake.",
    img: soundsImg,
  },
  {
    title: "LIGHTING",
    description:
      "We arrange all Type of lighting services which include Spot Lighting, Up lighting, Outdoor Lighting and other lighting services desired on perspective Event performed.",
    img: lightingImg,
  },
  {
    title: "ORCHESTRA",
    description:
      "We provides a wide variety of entertainment choices for various events and celebrations. We have a great team of talented musicians and performers, with experience and energy to transform any event into a fun and remarkable occasion.",
    img: orchestraImg,
  },
  {
    title: "ANCHOR/HOSTING",
    description:
      "Hosting an event is a great way of Elevating your Event with an impressing gratitude of your beloved guests by our Team and Management.",
    img: anchorImg,
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "We are a passionate team of Wedding Photographers loving to capture and preserve the beautiful moments of your life time.",
    img: photographyImg,
  },
  {
    title: "VIDEOGRAPHY",
    description:
      "We comprises a distinct Team of Experienced Videographers who are committed to make sure you have Best-looking Memories. Our Team ensure high quality service and will work with you until your album is in your hands.",
    img: videographyImg,
  },
  {
    title: "CINEMATOGRAPHIC WEDDING",
    description:
      'A Wedding Picture tells a story When it captures "Interactions"! We mainly focus on Client’s requirements with the skills of our talented Team in bringing candid photography, wedding videography..',
    img: cinematographicImg,
  },
  {
    title: "BUFFET STAGES",
    description:
      "Hospitality to Your Guests is shown Exclusively in Perfect Planning and execution of Buffet Arrangement by Our Team of Experts and you know We care for you..",
    img: buffetStagesImg,
  },
  {
    title: "MEHENDI DESIGN",
    description:
      "In Indian weddings, a lot of emphasis is given on customs and rituals and the same is reflected in the Mehendi ceremony before marriage.Our Designers provide Elegant designs which Enhance their Beauty.",
    img: mehendiImg,
  },
  {
    title: "BEAUTICIAN/MAKEUP",
    description:
      "Our Beauticians Discover the best wedding hairstyles and makeup through your ideas,visualizations and we perform our work through reaching your expectations and we Present you to the Best Ever look That you have Got..!",
    img: beauticianImg,
  },
];

function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background pt-24">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-5 py-4">
          <div className="flex justify-start">
            <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img
                src={logoImg}
                alt="NithyA EventS Logo"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8">
            {nav.map((item) => {
              if (item.href.startsWith("/#") || item.href.startsWith("mailto:")) {
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
                  className="group relative text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary py-2"
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
              className="btn-premium-glossy mt-3 w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              PLAN YOUR EVENT
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 py-24">
        <div className="text-center mb-24">
          <p className="eyebrow">Thoughtful planning. Beautiful execution.</p>
          <h1 className="mt-4 text-4xl sm:text-5xl uppercase tracking-wider">
            Our <span className="text-primary">Services</span>
          </h1>
          <span className="gold-rule mt-6 mx-auto" />
        </div>

        <div className="space-y-32">
          {servicesList.map((service, index) => {
            const isImageLeft = index % 2 !== 0;
            return (
              <section
                key={service.title}
                className={`flex flex-col ${
                  isImageLeft ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 lg:gap-24 items-center group`}
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <p className="font-display text-5xl text-primary/30 mb-4 transition-colors duration-500 group-hover:text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-3xl lg:text-4xl uppercase tracking-wide text-foreground">
                    {service.title}
                  </h2>
                  <span className="gold-rule mt-6" style={{ alignSelf: "flex-start" }} />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-sm border border-border/60 bg-card/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.25)] aspect-[4/3]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 border border-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="NithyA EventS Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} NithyA EventS, Karimnagar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
