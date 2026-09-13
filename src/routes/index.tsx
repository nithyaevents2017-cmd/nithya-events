import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/nithya-custom-hero.jpg";
import expConference from "@/assets/exp-conference.jpg";
import expWedding from "@/assets/exp-wedding.jpg";
import expTeam from "@/assets/exp-team.jpg";
import expFilm from "@/assets/exp-film.jpg";
import expCultural from "@/assets/exp-cultural.jpg";
import logoImg from "@/assets/logo.png";
import familyEventImg from "../../logo/family event.jpeg";
import privatePartyImg from "../../logo/private party.jpeg";
import { nithyaImages } from "@/lib/images";
import { Instagram, Facebook, Youtube, Mail, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Filter out exactly the valid corporate logos based on our visual audit
const validClientIndices = [
  11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
const clientLogos = nithyaImages.gallery.filter((img: string) =>
  validClientIndices.some((idx) => new RegExp(`nithya_img_${idx}[\\.-]`).test(img)),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NithyA EventS | We Celebrate Your Dreams — Karimnagar" },
      {
        name: "description",
        content:
          "NithyA EventS, Karimnagar. Since 2017 we plan weddings, corporate events, cultural programmes and private celebrations. 1000+ events across 50+ locations.",
      },
      {
        property: "og:title",
        content: "NithyA EventS | We Celebrate Your Dreams",
      },
      {
        property: "og:description",
        content:
          "Wedding planning and event management from Karimnagar, Telangana. Call 9030119257.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Home", href: "#top" },
  { label: "Events", href: "#services" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Weddings",
    img: expWedding,
    body: "Intimate and grand destination weddings.",
  },
  {
    title: "Corporate Events",
    img: expConference,
    body: "Conferences, launches, annual days, award nights and brand activations.",
  },
  {
    title: "Cultural Events",
    img: expCultural,
    body: "Festivals, stage shows, dance and music programmes of every scale.",
  },
  {
    title: "Film & Political Events",
    img: expFilm,
    body: "Audio launches, press meets, public meetings and large-scale rallies.",
  },
  {
    title: "Family Events",
    img: familyEventImg,
    body: "Weddings, engagements, naming ceremonies, birthdays and anniversaries.",
  },
  {
    title: "Private Parties",
    img: privatePartyImg,
    body: "Birthdays, anniversaries, and milestones.",
  },
];

const stats = [
  { value: "1000+", label: "Events" },
  { value: "50+", label: "Locations" },
  { value: "100%", label: "Satisfaction" },
];


const whyPoints = [
  "We listen before we create.",
  "We plan before we execute.",
  "We focus on details others overlook.",
  "We anticipate problems before they arrive.",
  "We stay committed until the very last moment.",
];

const team = [
  {
    name: "Nithyanand Macha",
    role: "Managing Director",
    body: "Namaste! I'm Nithyanand, MD of NithyA EventS — here, we celebrate your dreams. My skilled team of experienced event professionals makes your celebration a special one you'll remember for life.",
    img: expTeam,
  },
  {
    name: "Anil Patel",
    role: "Event Management & Execution",
    body: "Hi, I'm Anil. I take care of the worries that come with the work and keep every situation running smoothly, so each event we design and execute is flawless and memorable.",
    img: expTeam,
  },
];

const formatCustomBudget = (val: string) => {
  const num = val.replace(/\D/g, "");
  if (!num) return "";
  const formatted = new Intl.NumberFormat("en-IN").format(Number(num));
  return `₹${formatted}`;
};

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showCustomBudget, setShowCustomBudget] = useState(false);
  const [customBudgetValue, setCustomBudgetValue] = useState("");

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-5 py-4">
          <div className="flex justify-start">
            <a href="#top" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img
                src={logoImg}
                alt="NithyA EventS Logo"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8">
            {nav.map((item) => {
              if (item.href.startsWith("#") || item.href.startsWith("mailto:")) {
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
            <a href="#contact" className="btn-premium-glossy">
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
              if (item.href.startsWith("#") || item.href.startsWith("mailto:")) {
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
              href="#contact"
              className="btn-premium-glossy mt-3 w-full"
              onClick={() => setMenuOpen(false)}
            >
              PLAN YOUR EVENT
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Grand event stage lit in gold with a full audience"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="relative mx-auto max-w-4xl px-5 pt-24 text-center">
          <div className="mx-auto mb-6 flex w-fit items-center justify-center gap-4 rounded-full border border-primary/40 bg-primary/5 px-6 py-2 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm">
            <span className="h-[1px] w-6 sm:w-8 bg-primary/50"></span>
            <span className="whitespace-nowrap text-[0.7rem] sm:text-xs tracking-[0.25em] text-primary/90 uppercase">
              EST. <span className="font-semibold text-primary brightness-110 ml-1">2017</span>
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-primary/50"></span>
          </div>
          <h1 className="mt-6 text-5xl leading-tight sm:text-6xl lg:text-7xl">NithyA EventS</h1>
          <p className="mt-5 font-display text-2xl text-primary sm:text-3xl">
            We celebrate your dreams
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Weddings, corporate events, cultural programmes and private celebrations — planned and
            executed end to end by one experienced team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
            <a href="#contact" className="btn-gold w-full sm:w-auto">
              Get In Touch
            </a>
            <a
              href="https://wa.me/message/5FMZUR4TFHRSH1"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">What we handle</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>
          <div className="mt-14 mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden border border-border bg-background transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]"
              >
                <div className="aspect-[6/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{item.title}</h3>
                  <span className="gold-rule mt-3" />
                  <p className="mt-4 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About us</p>
            <span className="gold-rule mt-5" />
            <h2 className="mt-6 text-3xl sm:text-4xl">
              We don't just plan events. We create{" "}
              <em className="text-primary not-italic">experiences that stay with you.</em>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>
              Founded in 2017, NithyA EventS has grown into one of the region's trusted and
              sought-after names in wedding planning and event management. What began as a passion
              for beautiful celebrations became a team-driven journey of creativity and
              unforgettable experiences.
            </p>
            <p>
              For us, an event is never just a date on the calendar — it's a story waiting to be
              told. A wedding joins two journeys into one. A corporate event is a chance to inspire
              and connect. A private celebration is a collection of moments worth remembering.
              That's why we put our heart into every detail.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-12 sm:gap-24 border-t border-border pt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-primary">{s.value}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Why / Promise */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why NithyA EventS?</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Your event deserves more than a checklist. It deserves a{" "}
              <span className="text-primary">vision.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Our greatest achievement isn't the number of events we've completed — it's the trust
              our clients place in us to be part of their most important moments.
            </p>
          </div>
          <div className="border border-border bg-card p-10">
            <p className="eyebrow">Event Management Process</p>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-primary font-display text-xl">01 — DISCOVER</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Understand the client's vision.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-display text-xl">02 — DESIGN</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Develop the event concept and experience.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-display text-xl">03 — EXECUTE</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Coordinate venue, vendors, production and technical requirements.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-display text-xl">04 — DELIVER</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Execute the event professionally and create a memorable experience.
                </p>
              </div>
            </div>
            <span className="gold-rule mt-8" />
            <p className="mt-6 text-sm text-primary">
              Your vision. Our creativity. One unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Brands that trust us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Our <span className="text-primary">Clients</span>
            </h2>
          </div>
          <div className="mt-14 overflow-hidden py-4">
            <div className="marquee-track gap-10 sm:gap-16">
              {/* Duplicated for smooth infinite scroll */}
              {[...clientLogos, ...clientLogos].map((img, i) => (
                <div
                  key={i}
                  className="flex h-24 w-40 shrink-0 items-center justify-center rounded bg-white p-4 filter grayscale transition-all hover:grayscale-0"
                >
                  <img
                    src={img as string}
                    alt="Client Logo"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="eyebrow">The people behind it</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Meet the <span className="text-primary">team</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.name}
                className="border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.15)]"
              >
                <h3 className="text-2xl">{m.name}</h3>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-primary">
                  {m.role}
                </p>
                <span className="gold-rule mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-t border-border bg-background py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Trusted by clients. Remembered for the experience.</p>
            <h2 className="mt-4 text-3xl sm:text-4xl uppercase">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </div>
          
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Review 1 */}
            <article className="flex flex-col border border-border bg-card/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.15)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-display text-xl">
                  M
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Mounika G</h3>
                  <p className="text-xs text-muted-foreground">3 reviews</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground flex-grow">
                "Nithya events did a fantastic job organised the pm vishwakarma awareness program. The arrangements, stage setup and coordination were very professional."
              </p>
              <p className="mt-6 text-xs text-muted-foreground">6 months ago</p>
            </article>

            {/* Review 2 */}
            <article className="flex flex-col border border-border bg-card/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.15)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-display text-xl">
                  M
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">M Narsimhachary</h3>
                  <p className="text-xs text-muted-foreground">1 review</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground flex-grow">
                "The PM Vishwakarma program organised under MSME was executed excellently by Nithya events."
              </p>
              <p className="mt-6 text-xs text-muted-foreground">6 months ago</p>
            </article>

            {/* Review 3 */}
            <article className="flex flex-col border border-border bg-card/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.15)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-display text-xl">
                  S
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Shiva Balusula</h3>
                  <p className="text-xs text-muted-foreground">2 reviews</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground flex-grow">
                "I recently had the pleasure of working with Nithya Events, and I must say, they exceeded all my expectations! The team's attention to detail, creativity, and professionalism are truly unmatched ..."
              </p>
              <p className="mt-6 text-xs text-muted-foreground">a year ago</p>
            </article>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://www.google.com/search?q=nithya+events&oq=nithya+events&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyNTY3ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more reviews on Google"
              className="btn-outline-gold inline-flex items-center justify-center"
            >
              VIEW MORE REVIEWS ON GOOGLE
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Let's plan your <span className="text-primary">celebration</span>
            </h2>
            <span className="gold-rule mt-6" />
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-primary">Office</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  <a
                    href="https://maps.app.goo.gl/diXFAcpov7S1f7Bp7"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Gandhi Rd, Islampura, Sai Nagar,
                    <br />
                    Karimnagar, Telangana 505001, India
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-primary">Phone</dt>
                <dd className="mt-2 flex flex-col gap-1 text-muted-foreground">
                  <a href="tel:9030119257" className="hover:text-primary">
                    9030119257
                  </a>
                  <a href="tel:9030102663" className="hover:text-primary">
                    9030102663
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-primary">Email</dt>
                <dd className="mt-2 text-muted-foreground">
                  <a href="mailto:nithyaevents2017@gmail.com" className="hover:text-primary">
                    nithyaevents2017@gmail.com
                  </a>
                </dd>
              </div>
              <div className="mt-8 rounded-md border border-border/60 bg-card/30 p-6 sm:p-8">
                <p className="eyebrow mb-2">For Corporate Events</p>
                <h3 className="text-xl sm:text-2xl mb-2 text-foreground">
                  Need a professional event planned for your team?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Reach out to our specialized corporate planning team for conferences, brand activations, and annual days.
                </p>
                <div className="mb-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary mb-2">Corporate Email</p>
                  <a href="mailto:Team.nithyaevents@gmail.com?subject=Corporate%20Event%20Enquiry%20%E2%80%94%20NithyA%20EventS&body=Hello%20NithyA%20EventS%20Team%2C%0A%0AI%20am%20interested%20in%20planning%20a%20corporate%20event.%0A%0AEvent%20Type%3A%0AEvent%20Date%3A%0AEvent%20Location%3A%0AExpected%20Guests%3A%0AEstimated%20Budget%3A%0AAdditional%20Requirements%3A%0A%0AThank%20you." className="text-foreground hover:text-primary transition-colors font-medium">
                    Team.nithyaevents@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:Team.nithyaevents@gmail.com?subject=Corporate%20Event%20Enquiry%20%E2%80%94%20NithyA%20EventS&body=Hello%20NithyA%20EventS%20Team%2C%0A%0AI%20am%20interested%20in%20planning%20a%20corporate%20event.%0A%0AEvent%20Type%3A%0AEvent%20Date%3A%0AEvent%20Location%3A%0AExpected%20Guests%3A%0AEstimated%20Budget%3A%0AAdditional%20Requirements%3A%0A%0AThank%20you."
                  className="btn-outline-gold inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  EMAIL US FOR CORPORATE EVENTS
                </a>
              </div>

              <div className="pt-8">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-primary">Social</dt>
                <dd className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  <a
                    href="https://www.instagram.com/nithyaevents.in?stkn=MWx1MmRjdmRib245bQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit NithyA EventS on Instagram"
                    className="group flex flex-col items-center justify-center gap-2.5 rounded-md border border-border/60 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/50 hover:bg-card/40 hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <Instagram className="h-6 w-6 text-foreground/80 transition-colors duration-300 group-hover:text-primary" />
                    <span className="text-xs tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/nithyaevents.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit NithyA EventS on Facebook"
                    className="group flex flex-col items-center justify-center gap-2.5 rounded-md border border-border/60 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/50 hover:bg-card/40 hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <Facebook className="h-6 w-6 text-foreground/80 transition-colors duration-300 group-hover:text-primary" />
                    <span className="text-xs tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/@nithyaevents8695"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit NithyA EventS on YouTube"
                    className="group flex flex-col items-center justify-center gap-2.5 rounded-md border border-border/60 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/50 hover:bg-card/40 hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <Youtube className="h-6 w-6 text-foreground/80 transition-colors duration-300 group-hover:text-primary" />
                    <span className="text-xs tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                      YouTube
                    </span>
                  </a>
                  <a
                    href="mailto:nithyaevents2017@gmail.com"
                    aria-label="Email NithyA EventS"
                    className="group flex flex-col items-center justify-center gap-2.5 rounded-md border border-border/60 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/50 hover:bg-card/40 hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <Mail className="h-6 w-6 text-foreground/80 transition-colors duration-300 group-hover:text-primary" />
                    <span className="text-xs tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                      Email
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const email = formData.get("email") as string;
              const eventType = formData.get("eventType") as string;
              const eventDate = formData.get("eventDate") as string;
              const location = formData.get("location") as string;
              const budget = formData.get("budget") as string;
              const customBudget = formData.get("customBudget") as string;
              const message = formData.get("message") as string;

              const errors: Record<string, string> = {};
              if (!name.trim()) errors.name = "Please enter your full name.";

              const phoneClean = phone.replace(/[\s-]/g, "");
              if (
                !phoneClean ||
                (!/^(?:\+?91)?[6-9]\d{9}$/.test(phoneClean) && !/^[6-9]\d{9}$/.test(phoneClean))
              ) {
                errors.phone = "Please enter a valid phone number.";
              }

              if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.email = "Please enter a valid email address.";
              }

              if (!eventType) errors.eventType = "Please select an event type.";
              if (!eventDate) errors.eventDate = "Please select your event date.";

              let finalBudget = budget;
              if (budget === "Enter custom budget") {
                if (!customBudget || !customBudget.replace(/\D/g, "")) {
                  errors.customBudget = "Please enter your estimated budget.";
                } else {
                  finalBudget = `${customBudget} (Custom Budget)`;
                }
              } else if (!budget) {
                errors.budget = "Please select your estimated budget.";
              }

              if (Object.keys(errors).length > 0) {
                setFormErrors(errors);
                return;
              }

              setFormErrors({});

              const normalizedPhone = phoneClean.startsWith("+91")
                ? phoneClean.substring(3)
                : phoneClean.startsWith("91") && phoneClean.length === 12
                  ? phoneClean.substring(2)
                  : phoneClean;

              const text = `Hello NithyA EventS,

New Event Enquiry

━━━━━━━━━━━━━━━━━━

Name: ${name}
Phone: ${normalizedPhone}
Email: ${email || "Not provided"}

Event Type: ${eventType || "Not specified"}
Event Date: ${eventDate || "Not specified"}
Event Location: ${location || "Not specified"}

Budget: ${finalBudget || "Not specified"}

Message:
${message || "No message provided."}

━━━━━━━━━━━━━━━━━━

This enquiry was submitted through the NithyA EventS website.`;

              const url = `https://wa.me/9030119257?text=${encodeURIComponent(text)}`;

              setSent(true);
              window.open(url, "_blank");

              setTimeout(() => setSent(false), 2000);
            }}
            className="space-y-6 border border-border bg-card p-8"
          >
            <h3 className="text-xl">Enter Your Details</h3>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                {formErrors.name && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.name}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                {formErrors.phone && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.phone}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                {formErrors.email && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="eventType"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  defaultValue=""
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-foreground appearance-none"
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Reception">Reception</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Cultural Programme">Cultural Programme</option>
                  <option value="Private Celebration">Private Celebration</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.eventType && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.eventType}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="eventDate"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Event Date
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors [color-scheme:dark]"
                />
                {formErrors.eventDate && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.eventDate}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Event Location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="Enter event location"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                {formErrors.location && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.location}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="budget"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  onChange={(e) => {
                    setShowCustomBudget(e.target.value === "Enter custom budget");
                    if (e.target.value !== "Enter custom budget") {
                      setCustomBudgetValue("");
                    }
                  }}
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-foreground appearance-none"
                >
                  <option value="" disabled>
                    Select your estimated budget
                  </option>
                  <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                  <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
                  <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
                  <option value="₹5 Lakhs – ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                  <option value="₹10 Lakhs+">₹10 Lakhs+</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="Enter custom budget">Enter custom budget</option>
                </select>
                {formErrors.budget && (
                  <p className="text-[0.68rem] text-red-400">{formErrors.budget}</p>
                )}
              </div>

              {showCustomBudget && (
                <div className="space-y-1.5 transition-all duration-300">
                  <input
                    id="customBudget"
                    name="customBudget"
                    type="text"
                    value={customBudgetValue}
                    onChange={(e) => setCustomBudgetValue(formatCustomBudget(e.target.value))}
                    placeholder="Enter your budget amount"
                    className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                  {formErrors.customBudget && (
                    <p className="text-[0.68rem] text-red-400">{formErrors.customBudget}</p>
                  )}
                </div>
              )}

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your event"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full mt-6 flex items-center justify-center gap-2 transition-all hover:-translate-y-[2px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              {sent ? "Opening WhatsApp..." : "SEND ENQUIRY ON WHATSAPP"}
            </button>
          </form>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 h-[400px] w-full overflow-hidden border border-border bg-card">
          <iframe
            title="NithyA EventS Location"
            src="https://maps.google.com/maps?q=18.439679,79.1373094+(NithyA%20EventS)&t=&z=19&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 opacity-90 transition-all hover:filter-none hover:opacity-100"
          ></iframe>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <img src={logoImg} alt="NithyA EventS Logo" className="h-12 w-auto object-contain" />
            <p className="text-xs text-muted-foreground">We celebrate your dreams</p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NithyA EventS, Karimnagar. All rights reserved.
          </p>
          <a href="#top" className="text-xs uppercase tracking-[0.2em] text-primary">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
