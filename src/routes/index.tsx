import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GallerySkeleton } from "../components/GallerySkeleton";
import { ContactForm } from "../components/ContactForm";
import { SITE_URL } from "../config";
import heroImg from "@/assets/main-theme.jpeg";
import expConference from "@/assets/exp-conference.jpg";
import expWedding from "@/assets/exp-wedding.jpg";
import expTeam from "@/assets/about-us.jpeg";
import expFilm from "@/assets/exp-film.jpg";
import expCultural from "@/assets/exp-cultural.jpg";
import familyEventImg from "../../logo/family event.jpeg";
import privatePartyImg from "../../logo/private party.jpeg";
import { ArrowRight, Play, Users, Calendar, Star, Heart, CheckCircle2, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Event Management & Wedding Planners in Karimnagar | NithyA EventS";
    const description = "NithyA EventS plans and executes beautiful weddings, corporate events, cultural programs and private celebrations in Karimnagar.";
    const url = `${SITE_URL}/`;
    // Ensure absolute URL for OG image
    const ogImage = heroImg.startsWith('http') ? heroImg : `${SITE_URL}${heroImg.startsWith('/') ? '' : '/'}${heroImg}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:url", content: url },
        { name: "twitter:image", content: ogImage },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" }
      ]
    };
  },
  component: Home,
});

/* ─── Reusable SVG leaf decoration ───────────────────────────── */
function LeafDecor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60,190 C60,190 10,140 10,90 C10,40 60,10 60,10 C60,10 110,40 110,90 C110,140 60,190 60,190 Z" stroke="#C99A4A" strokeWidth="1" fill="none" opacity="0.35"/>
      <line x1="60" y1="10" x2="60" y2="190" stroke="#C99A4A" strokeWidth="0.8" opacity="0.3"/>
      <line x1="60" y1="50" x2="30" y2="80" stroke="#C99A4A" strokeWidth="0.6" opacity="0.25"/>
      <line x1="60" y1="50" x2="90" y2="80" stroke="#C99A4A" strokeWidth="0.6" opacity="0.25"/>
      <line x1="60" y1="80" x2="20" y2="110" stroke="#C99A4A" strokeWidth="0.6" opacity="0.25"/>
      <line x1="60" y1="80" x2="100" y2="110" stroke="#C99A4A" strokeWidth="0.6" opacity="0.25"/>
      <line x1="60" y1="110" x2="30" y2="140" stroke="#C99A4A" strokeWidth="0.6" opacity="0.2"/>
      <line x1="60" y1="110" x2="90" y2="140" stroke="#C99A4A" strokeWidth="0.6" opacity="0.2"/>
    </svg>
  );
}

const services = [
  { title: "Weddings", img: expWedding, body: "Intimate and grand destination weddings." },
  { title: "Corporate Events", img: expConference, body: "Conferences, launches, annual days, award nights and brand activations." },
  { title: "Cultural Events", img: expCultural, body: "Festivals, stage shows, dance and music programmes of every scale." },
  { title: "Film & Political Events", img: expFilm, body: "Audio launches, press meets, public meetings and large-scale rallies." },
  { title: "Family Events", img: familyEventImg, body: "Weddings, engagements, naming ceremonies, birthdays and anniversaries." },
  { title: "Private Parties", img: privatePartyImg, body: "Birthdays, anniversaries, and milestones." },
];

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Select event type",
    eventDate: "",
    location: "",
    budget: "Select your estimated budget",
    customBudget: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'budget' && value !== 'Custom Budget') {
        newData.customBudget = '';
      }
      return newData;
    });
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    if (name === 'budget' && value !== 'Custom Budget' && errors.customBudget) {
       setErrors(prev => ({ ...prev, customBudget: "" }));
    }
  };

  const handleWhatsAppSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (formData.budget === 'Custom Budget' && !formData.customBudget.trim()) {
      newErrors.customBudget = "Please enter your custom budget.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let messageText = `Hello NithyA EventS,\n\nI would like to enquire about planning an event.\n\n*Event Enquiry Details*\nName: ${formData.name}\nPhone: ${formData.phone}\n`;
    
    if (formData.email) messageText += `Email: ${formData.email}\n`;
    messageText += `\n`;
    
    if (formData.eventType && formData.eventType !== "Select event type") messageText += `Event Type: ${formData.eventType}\n`;
    if (formData.eventDate) messageText += `Event Date: ${formData.eventDate}\n`;
    if (formData.location) messageText += `Venue: ${formData.location}\n`;
    
    if (formData.eventType !== "Select event type" || formData.eventDate || formData.location) messageText += `\n`;

    if (formData.budget && formData.budget !== "Select your estimated budget") {
      if (formData.budget === 'Custom Budget') {
        messageText += `Budget: Custom Budget\n`;
        messageText += `Custom Budget: ${formData.customBudget}\n`;
      } else {
        messageText += `Budget: ${formData.budget}\n`;
      }
      messageText += `\n`;
    }

    if (formData.message) {
      messageText += `Message:\n${formData.message}\n\n`;
    }

    messageText += `Thank you.\nNithyA EventS`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappNumber = "919030119257"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="top" className="min-h-screen bg-botanical relative text-[var(--color-text-main)] pt-20">

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden">
        
        {/* Right-half botanical ivory background */}
        <div className="absolute inset-y-0 right-0 w-[57%] bg-[var(--color-background)] z-0 pointer-events-none hidden lg:block" />

        {/* Bottom-right solid burgundy wave — sits ON TOP of the image */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[320px] z-[15] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,120 C50,85 90,25 200,0 L200,120 Z" fill="var(--color-primary)" />
          </svg>
          {/* "Let's Create Something Beautiful" script */}
          <div className="absolute bottom-8 right-10 text-right">
            <p className="script-text text-[var(--color-accent)] text-[1.8rem] xl:text-[2rem] leading-[0.9] -rotate-6 drop-shadow-sm">
              Let's Create<br/><span className="text-white ml-10">Something Beautiful</span>
            </p>
            <div className="w-12 h-px bg-white/40 mt-3 ml-auto" />
          </div>
        </div>

        {/* Decorative botanical leaf — top area behind heading */}
        <div className="absolute top-4 left-[38%] w-24 h-40 z-0 pointer-events-none opacity-60 hidden lg:block">
          <LeafDecor className="w-full h-full" />
        </div>

        {/* ── Main Hero Grid ── */}
        <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-[43fr_57fr] gap-0 items-start relative z-[2] flex-1">
          
          {/* ── Left Text Column ── */}
          <div className="flex flex-col items-start pt-6 pb-6 sm:pt-8 lg:pt-12 xl:pt-14 lg:pr-6 xl:pr-8 relative z-[12]">
            <div className="flex items-center gap-4 mb-4 lg:mb-5">
              <span className="eyebrow tracking-[0.25em] text-[0.7rem] font-bold text-[var(--color-text-muted)] uppercase">TURNING MOMENTS INTO MEMORIES</span>
              <span className="w-12 h-px bg-[var(--color-accent)]/40" />
            </div>

            <h1 className="heading-main text-5xl min-[400px]:text-[4rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[7rem] leading-[0.88] tracking-tight mb-1 text-[var(--color-text-main)]">
              NithyA<br/><span className="text-[var(--color-primary)]">EventS</span>
            </h1>

            <p className="script-text text-4xl min-[400px]:text-[2.2rem] sm:text-[2.8rem] lg:text-[2.6rem] xl:text-[3rem] text-[var(--color-accent)] mb-4 lg:mb-5 -ml-1 -rotate-2">
              We celebrate your dreams
            </p>

            <p className="text-[0.92rem] lg:text-[0.95rem] text-[var(--color-text-muted)] leading-[1.7] max-w-[440px] mb-6 lg:mb-8">
              Weddings, corporate events, cultural programmes and private celebrations — planned and executed end to end by one experienced team.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-primary">
                GET IN TOUCH <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#about" className="group flex items-center gap-3 text-[0.8rem] tracking-[0.2em] font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors uppercase">
                <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                </span>
                WATCH OUR STORY
              </a>
            </div>
          </div>

          {/* ── Right Image Column ── */}
          <div className="relative w-full mt-2 lg:mt-0 order-last lg:order-none z-[1] h-[350px] sm:h-[420px] lg:h-auto lg:self-stretch">
            
            {/* Arched image — large rounded-left shape on desktop, rounded top on mobile */}
            {/* Gold border ring around the curved image */}
            <div className="absolute right-0 lg:-right-8 xl:-right-16 2xl:-right-24 top-0 bottom-0 w-full lg:w-[calc(100%+32px)] xl:w-[calc(100%+64px)] 2xl:w-[calc(100%+96px)] overflow-hidden rounded-t-[35%] sm:rounded-t-[40%] lg:rounded-t-none lg:rounded-l-[50%] ring-[3px] ring-[var(--color-accent)]/60 shadow-[0_0_30px_rgba(201,154,74,0.15)]">
              <img
                src={heroImg}
                alt="Luxury Wedding Setup"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover object-[center_30%] lg:object-[35%_center] scale-[1.02] hover:scale-[1.05] transition-transform duration-[3s]"
              />
              {/* Soft gradient overlay at bottom on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-background)]/70 lg:from-transparent to-transparent pointer-events-none" />
            </div>

            {/* EST 2017 Badge — on the left seam of the arch */}
            <div className="absolute top-4 left-4 lg:top-[35%] lg:left-[8px] xl:left-[-60px] z-[25]">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white/98 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center border border-[var(--color-accent)]/25">
                <div className="absolute inset-1.5 lg:inset-2 rounded-full border border-[var(--color-accent)]/20 pointer-events-none" />
                <span className="text-[0.4rem] lg:text-[0.45rem] xl:text-[0.55rem] tracking-[0.25em] font-bold text-[var(--color-text-muted)] mb-0.5">EST.</span>
                <span className="heading-main text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[2.2rem] leading-none text-[var(--color-primary)] mb-0.5 lg:mb-1 xl:mb-1.5">2017</span>
                <div className="flex flex-col items-center gap-[1px] text-[0.3rem] sm:text-[0.33rem] lg:text-[0.35rem] xl:text-[0.44rem] tracking-[0.18em] text-[var(--color-text-muted)] uppercase text-center leading-tight">
                  <span>EVENTS</span>
                  <span>PEOPLE</span>
                  <span>MEMORIES</span>
                  <span>FOREVER</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hero Statistics Bar ── */}
        <div className="relative z-[20] mt-auto">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[var(--color-accent)]/20 lg:w-[43%] pt-5 pb-6 lg:pt-6 lg:pb-8 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <Users className="w-5 h-5 text-[var(--color-accent)] mb-2 opacity-70" />
                <p className="heading-main text-[1.6rem] lg:text-[1.8rem] text-[var(--color-text-main)] mb-0.5 leading-none">500+</p>
                <p className="eyebrow text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] text-[var(--color-text-muted)]">HAPPY CLIENTS</p>
              </div>
              <div className="flex flex-col items-center text-center md:border-l border-[var(--color-accent)]/20">
                <Calendar className="w-5 h-5 text-[var(--color-accent)] mb-2 opacity-70" />
                <p className="heading-main text-[1.6rem] lg:text-[1.8rem] text-[var(--color-text-main)] mb-0.5 leading-none">7+</p>
                <p className="eyebrow text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] text-[var(--color-text-muted)]">YEARS OF EXPERIENCE</p>
              </div>
              <div className="flex flex-col items-center text-center md:border-l border-[var(--color-accent)]/20">
                <Star className="w-5 h-5 text-[var(--color-accent)] mb-2 opacity-70" />
                <p className="heading-main text-[1.6rem] lg:text-[1.8rem] text-[var(--color-text-main)] mb-0.5 leading-none">1000+</p>
                <p className="eyebrow text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] text-[var(--color-text-muted)]">EVENTS EXECUTED</p>
              </div>
              <div className="flex flex-col items-center text-center md:border-l border-[var(--color-accent)]/20">
                <Heart className="w-5 h-5 text-[var(--color-accent)] mb-2 opacity-70" />
                <p className="heading-main text-[0.9rem] lg:text-[1rem] text-[var(--color-primary)] uppercase tracking-widest mb-0.5 leading-none mt-1">MEMORIES</p>
                <p className="eyebrow text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] text-[var(--color-text-muted)]">THAT LAST FOREVER</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT US SECTION
      ══════════════════════════════════════════════ */}
      <section id="about" className="relative py-32 px-6 max-w-[1400px] mx-auto border-t border-[var(--color-accent)]/10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

          {/* Left text */}
          <div className="pt-4">
            <p className="eyebrow mb-5 tracking-[0.2em] text-[0.8rem] font-semibold text-[var(--color-accent)]">ABOUT US</p>
            <h2 className="heading-main text-[2.8rem] sm:text-[3.8rem] leading-[1.05] mb-2 text-[var(--color-text-main)]">
              We don't just<br/>plan events.
            </h2>
            <h2 className="heading-main text-[2.8rem] sm:text-[3.8rem] leading-[1.05] mb-8 text-[var(--color-primary)]">
              We create experiences<br/><span className="text-[var(--color-text-main)]">that stay with you.</span>
            </h2>

            <div className="space-y-5 text-[0.98rem] text-[var(--color-text-muted)] leading-[1.85] max-w-xl">
              <p>
                Founded in 2017, NithyA EventS has grown into one of the region's trusted and
                sought-after names in wedding planning and event management. What began as a passion
                for beautiful celebrations became a team-driven journey of creativity and unforgettable experiences.
              </p>
              <p>
                For us, an event is never just a date on the calendar — it's a story waiting to be told. A wedding joins two journeys into one. A corporate event is a chance to inspire and connect. A private celebration is a collection of moments worth remembering. That's why we put our heart into every detail.
              </p>
            </div>

            {/* Script watermark */}
            <div className="mt-12 pt-8 border-t border-[var(--color-accent)]/20">
              <p className="script-text text-[3rem] leading-[0.85] text-[var(--color-accent)] opacity-75 -rotate-3 ml-3">
                Moments<br/>
                <span className="ml-8">People</span><br/>
                <span className="ml-16">Memories Forever</span>
              </p>
              <div className="w-14 h-px bg-[var(--color-accent)] mt-5 ml-4 opacity-50" />
            </div>
          </div>

          {/* Right arched image */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full mt-10 lg:mt-0 order-last lg:order-none z-0">
            {/* Arch image */}
            <div className="absolute right-0 lg:right-[-40px] top-0 bottom-0 w-full lg:w-[110%] overflow-hidden rounded-t-[40%] lg:rounded-t-none lg:rounded-l-[50%] z-0">
              <img
                src={expTeam}
                alt="NithyA Events Team - Event Planners in Karimnagar"
                loading="lazy"
                width="800"
                height="1000"
                className="w-full h-full object-cover object-[center_35%] lg:object-[40%_center]"
              />
            </div>
            {/* Decorative leaf by arch */}
            <div className="absolute top-12 left-16 w-16 h-28 pointer-events-none opacity-70 hidden lg:block z-10">
              <LeafDecor className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mt-28 max-w-3xl mx-auto border border-[var(--color-accent)]/20 rounded-2xl py-12 px-8 bg-white/60 backdrop-blur-sm relative z-10">
          <div className="flex flex-col items-center text-center">
            <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-4 opacity-80" />
            <p className="heading-main text-[2.2rem] text-[var(--color-primary)] mb-1 leading-none">1000+</p>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold">EVENTS</p>
          </div>
          <div className="flex flex-col items-center text-center sm:border-l sm:border-r border-[var(--color-accent)]/20">
            <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-4 opacity-80" />
            <p className="heading-main text-[2.2rem] text-[var(--color-primary)] mb-1 leading-none">50+</p>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold">LOCATIONS</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Heart className="w-8 h-8 text-[var(--color-accent)] mb-4 opacity-80" />
            <p className="heading-main text-[2.2rem] text-[var(--color-primary)] mb-1 leading-none">100%</p>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold">SATISFACTION</p>
          </div>
          {/* Decorative leaf in stats box corner */}
          <div className="absolute top-4 right-6 w-10 h-16 pointer-events-none hidden sm:block">
            <LeafDecor className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY NITHYA EVENTS / PROCESS
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20">
          
          {/* Left: Why us */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <p className="eyebrow tracking-[0.2em] text-[0.75rem] font-semibold text-[var(--color-accent)]">WHY NITHYA EVENTS?</p>
              <span className="w-12 h-px bg-[var(--color-accent)]/30" />
            </div>
            <h2 className="heading-main text-[2.4rem] leading-[1.2] mb-10 text-[var(--color-text-main)]">
              Your event deserves more<br/>than a checklist. It deserves a <span className="text-[var(--color-accent)]">vision.</span>
            </h2>
            <ul className="space-y-5">
              {[
                "We listen before we create.",
                "We plan before we execute.",
                "We focus on details others overlook.",
                "We anticipate problems before they arrive.",
                "We stay committed until the very last moment.",
              ].map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[0.95rem] text-[var(--color-text-main)]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-[var(--color-accent)]/20">
              <p className="text-[0.9rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg">
                Our greatest achievement isn't the number of events we've completed — 
                it's the trust our clients place in us to be part of their most important moments.
              </p>
            </div>
          </div>

          {/* Right: Process */}
          <div className="bg-white/40 border border-[var(--color-accent)]/20 rounded-xl p-10 backdrop-blur-sm relative overflow-hidden">
            <p className="eyebrow mb-10 text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--color-accent)]">EVENT MANAGEMENT PROCESS</p>
            <div className="space-y-8">
              {[
                { num: "01", title: "DISCOVER", text: "Understand the client's vision." },
                { num: "02", title: "DESIGN",   text: "Develop the event concept and experience." },
                { num: "03", title: "EXECUTE",  text: "Coordinate venue, vendors, production and technical requirements." },
                { num: "04", title: "DELIVER",  text: "Execute the event professionally and create a memorable experience." },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-accent)]/50 text-[var(--color-primary)] flex items-center justify-center shrink-0 heading-main text-[1.3rem] bg-white/60">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="heading-main text-[1rem] mb-1 tracking-widest text-[var(--color-primary)]">{step.title}</h4>
                    <p className="text-[var(--color-text-muted)] text-[0.88rem] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-6 border-t border-[var(--color-accent)]/20 text-center">
              <p className="text-[0.82rem] text-[var(--color-accent)] font-medium italic">Your vision. Our creativity. One unforgettable experience.</p>
            </div>
            {/* decorative leaf in process box */}
            <div className="absolute bottom-8 right-6 w-10 h-18 pointer-events-none opacity-60">
              <LeafDecor className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════════════════════ */}
      <section id="services" className="relative py-32 px-6 max-w-[1400px] mx-auto border-t border-[var(--color-accent)]/10">
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-[var(--color-accent)]/40" />
            <p className="eyebrow tracking-[0.22em] text-[0.78rem] font-semibold text-[var(--color-accent)]">WHAT WE HANDLE</p>
            <span className="w-8 h-px bg-[var(--color-accent)]/40" />
          </div>
          <h2 className="heading-main text-[3rem] sm:text-[4rem] mb-5">
            Our <span className="text-[var(--color-primary)]">Events</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-[0.95rem] leading-relaxed">
            From intimate gatherings to grand celebrations, we bring your vision to life<br/>with creativity, precision and care.
          </p>
          {/* "Every Occasion Matters" script — top right */}
          <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
            <p className="script-text text-[2.8rem] text-[var(--color-accent)] opacity-70 -rotate-6 leading-[0.9]">
              Every<br/><span className="ml-10">Occasion</span><br/><span className="ml-20">Matters</span>
            </p>
            <div className="w-12 h-px bg-[var(--color-accent)] mt-2 ml-auto opacity-40" />
          </div>
        </div>

        {/* 3×2 Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.title} className="bg-white rounded-[20px] overflow-hidden border border-[var(--color-accent)]/20 hover:shadow-[0_15px_40px_rgba(201,154,74,0.15)] transition-all duration-500 group flex flex-col cursor-pointer relative">
              <div className="p-2 relative">
                <img
                  src={item.img}
                  alt={`NithyA EventS - ${item.title} services in Karimnagar`}
                  loading="lazy"
                  width="400"
                  height="220"
                  className="w-full h-[220px] object-cover rounded-t-[16px] rounded-b-[4px]"
                />
                {/* Botanical leaf overlay on image bottom-left */}
                <div className="absolute bottom-2 left-2 w-12 h-20 pointer-events-none opacity-70">
                  <LeafDecor className="w-full h-full" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="heading-main text-[1.5rem] text-[var(--color-primary)] mb-2">{item.title}</h3>
                {/* Thin gold underline below title */}
                <div className="w-10 h-px bg-[var(--color-accent)] mb-4 opacity-60" />
                <p className="text-[var(--color-text-muted)] text-[0.93rem] leading-relaxed mb-6 pr-14">
                  {item.body}
                </p>
                {/* Arrow button */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Services Bottom CTA Banner ── */}
        <div className="relative mt-24 rounded-2xl overflow-hidden min-h-[280px] bg-[var(--color-background)] border border-[var(--color-accent)]/10 flex items-center">
          
          {/* Left: circular badge */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex z-10">
            <div className="relative w-40 h-40 rounded-full border-2 border-[var(--color-accent)]/30 flex flex-col items-center justify-center text-center px-4 bg-white/80 shadow-xl">
              <div className="absolute inset-2 rounded-full border border-[var(--color-accent)]/15 pointer-events-none" />
              <p className="eyebrow text-[0.55rem] tracking-[0.15em] text-[var(--color-text-muted)] mb-1">LET'S<br/>PLAN YOUR</p>
              <p className="script-text text-[2rem] text-[var(--color-accent)] leading-none -rotate-3">Next<br/>Celebration</p>
            </div>
          </div>

          {/* Centre text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-8 py-14 lg:pl-[240px] lg:pr-[32%] relative z-20">
            <div className="w-full max-w-[500px] flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="w-8 h-px bg-[var(--color-accent)]/40 hidden lg:block" />
                <p className="eyebrow tracking-[0.22em] text-[0.65rem] font-semibold text-[var(--color-accent)]">TURNING IDEAS INTO UNFORGETTABLE EXPERIENCES</p>
                <span className="w-8 h-px bg-[var(--color-accent)]/40 hidden lg:block" />
              </div>
              <h2 className="heading-main text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] mb-4 text-[var(--color-text-main)] leading-[1.1]">
                Ready to Create<br />Something <span className="text-[var(--color-primary)]">Beautiful</span>
              </h2>
              <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-8 max-w-[400px]">Get in touch with us today and let's plan an event to remember.</p>
              <a href="#contact" className="btn-primary inline-flex">
                GET IN TOUCH <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right: burgundy swoosh */}
          <div className="absolute right-0 top-0 bottom-0 w-[28%] z-10 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 200 280" preserveAspectRatio="none" className="w-full h-full">
              <path d="M200,0 L200,280 C140,280 60,200 0,0 Z" fill="var(--color-primary)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-end pr-6">
              <p className="script-text text-white text-[2rem] leading-[0.85] -rotate-6 text-right opacity-90">
                Moments<br/>People<br/>Memories<br/>Forever
              </p>
            </div>
          </div>

          {/* Leaf decor */}
          <div className="absolute left-[30%] top-6 w-10 h-18 pointer-events-none opacity-50 hidden lg:block">
            <LeafDecor className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          REVIEWS SECTION
      ══════════════════════════════════════════════ */}
      <section id="reviews" className="relative py-32 px-6 max-w-[1400px] mx-auto border-t border-[var(--color-accent)]/10">
        
        {/* "People Moments Memories Forever" — left side */}
        <div className="absolute left-0 top-24 hidden xl:block pointer-events-none z-0">
          <p className="script-text text-[2.8rem] text-[var(--color-accent)] opacity-60 -rotate-6 leading-[0.85]">
            People<br/>Moments<br/>Memories<br/>Forever
          </p>
          <div className="w-12 h-px bg-[var(--color-accent)] mt-4 ml-4 opacity-40" />
        </div>

        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-10 h-px bg-[var(--color-accent)]/40" />
            <p className="eyebrow tracking-[0.22em] text-[0.72rem] font-semibold text-[var(--color-accent)]">TRUSTED BY CLIENTS. REMEMBERED FOR THE EXPERIENCE.</p>
            <span className="w-10 h-px bg-[var(--color-accent)]/40" />
          </div>
          <h2 className="heading-main text-[3rem] sm:text-[4rem] mb-2">
            What Our <span className="text-[var(--color-primary)]">Clients</span> Say
          </h2>
          <p className="text-[var(--color-text-muted)] text-[0.95rem]">Real stories. Beautiful celebrations. Lasting memories.</p>
          {/* "It's not just an event, it's a feeling" — right side */}
          <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
            <p className="script-text text-[2.2rem] text-[var(--color-accent)] opacity-70 -rotate-6 leading-[0.88]">
              It's not just<br/><span className="ml-4">an event,</span><br/><span className="ml-12">it's a feeling</span>
            </p>
            <div className="w-10 h-px bg-[var(--color-accent)] mt-2 ml-auto opacity-40" />
          </div>
          {/* Leaf decor top right */}
          <div className="absolute right-0 top-[-20px] w-12 h-24 pointer-events-none hidden lg:block" style={{ right: "12rem" }}>
            <LeafDecor className="w-full h-full" />
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Mounika G", initial: "M", revs: "3 reviews", body: "Nithya events did a fantastic job organised the pm vishwakarma awareness program. The arrangements, stage setup and coordination were very professional.", time: "6 months ago" },
            { name: "M Narsimhachary", initial: "M", revs: "1 review", body: "The PM Vishwakarma program organised under MSME was executed excellently by Nithya events.", time: "6 months ago" },
            { name: "Shiva Balusula", initial: "S", revs: "2 reviews", body: "I recently had the pleasure of working with Nithya Events, and I must say, they exceeded all my expectations! The team's attention to detail, creativity, and professionalism are truly unmatched ...", time: "a year ago" },
          ].map((r, i) => (
            <div key={i} className="bg-white rounded-xl border border-[var(--color-accent)]/20 p-8 flex flex-col relative shadow-sm overflow-hidden">
              {/* Large decorative quotation mark */}
              <div className="absolute top-5 right-6 text-[4rem] text-[var(--color-accent)] opacity-30 font-serif leading-none select-none">"</div>
              
              {/* Botanical leaf decoration — bottom right corner */}
              <div className="absolute bottom-2 right-2 w-10 h-18 pointer-events-none opacity-50">
                <LeafDecor className="w-full h-full" />
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center heading-main text-xl shrink-0">
                  {r.initial}
                </div>
                <div>
                  <h3 className="heading-main text-[1rem] font-medium text-[var(--color-text-main)]">{r.name}</h3>
                  <p className="text-[0.72rem] text-[var(--color-text-muted)]">{r.revs}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <p className="text-[var(--color-text-muted)] text-[0.92rem] leading-[1.8] flex-grow italic font-serif">"{r.body}"</p>
              <div className="mt-6 text-[0.72rem] text-[var(--color-text-muted)]">{r.time}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=nithya+events&ie=UTF-8#lrd=0x3bccd8e11e018ce7:0x7aaf762b38516aa7,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-[0.78rem] tracking-widest uppercase hover:bg-[var(--color-primary)] hover:text-white transition-all bg-white"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            VIEW MORE REVIEWS ON GOOGLE <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRE-CONTACT BANNER
          "YOUR CELEBRATION MATTERS — Ready to Plan Your Dream Event?"
      ══════════════════════════════════════════════ */}
      <section className="relative h-[440px] overflow-hidden">
        <img src={expWedding} alt="Dream Event Planning and Execution" loading="lazy" width="1400" height="440" className="absolute inset-0 w-full h-full object-cover object-center brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10 pointer-events-none" />

        {/* Left burgundy swoosh */}
        <div className="absolute bottom-0 left-0 w-[36%] h-full z-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 240" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,240 L0,0 C60,60 110,200 200,240 Z" fill="var(--color-primary)" />
          </svg>
          <div className="absolute bottom-12 left-10">
            <p className="script-text text-white text-[2.2rem] leading-[0.85] -rotate-6 opacity-90">
              Let's Create<br/>Something Beautiful
            </p>
            <div className="w-10 h-px bg-[var(--color-accent)] mt-4 ml-6 opacity-50" />
          </div>
        </div>

        {/* Centre CTA */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-10 h-px bg-[var(--color-accent)]/70" />
              <p className="eyebrow tracking-[0.22em] text-[0.65rem] font-semibold text-white">YOUR CELEBRATION MATTERS</p>
              <span className="w-10 h-px bg-[var(--color-accent)]/70" />
            </div>
            <h2 className="heading-main text-[2.6rem] sm:text-[3.4rem] text-white mb-4 leading-tight drop-shadow-xl">
              Ready to Plan Your <span className="text-white">Dream Event?</span>
            </h2>
            <p className="text-white/75 text-[0.92rem] mb-8">Let's create moments that people will always remember.</p>
            <a href="#contact" className="btn-primary inline-flex">
              PLAN YOUR EVENT <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════════════ */}
      <section id="contact" className="relative pt-24 pb-36 lg:pb-24 bg-botanical overflow-hidden">

        {/* Right edge arched image + badge */}
        <div className="absolute right-[-80px] top-[5%] w-[340px] h-[750px] z-0 hidden xl:block pointer-events-none">
          <div className="w-full h-full overflow-hidden rounded-l-full">
            <img src={expWedding} alt="Beautiful Wedding Celebration Decor" loading="lazy" width="400" height="750" className="w-full h-full object-cover opacity-85" />
          </div>
          {/* "Let's CREATE SOMETHING Beautiful" badge */}
          <div className="absolute top-[18%] left-[-90px] w-52 h-52 bg-white/95 rounded-full shadow-xl flex flex-col items-center justify-center text-center border border-[var(--color-accent)]/25">
            <div className="absolute inset-2 rounded-full border border-[var(--color-accent)]/15 pointer-events-none" />
            <p className="eyebrow text-[0.55rem] tracking-[0.12em] text-[var(--color-text-muted)] mb-0.5">LET'S</p>
            <p className="eyebrow text-[0.55rem] tracking-[0.12em] text-[var(--color-text-muted)] mb-0.5">CREATE</p>
            <p className="eyebrow text-[0.55rem] tracking-[0.12em] text-[var(--color-text-muted)] mb-1.5">SOMETHING</p>
            <p className="script-text text-[2.4rem] leading-[0.7] text-[var(--color-accent)] -rotate-3">Beautiful</p>
          </div>
          {/* Leaf on arch seam */}
          <div className="absolute top-8 left-10 w-12 h-20 pointer-events-none opacity-60">
            <LeafDecor className="w-full h-full" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid xl:grid-cols-[1fr_1.1fr] gap-16 relative z-10">

          {/* ── Left: Contact Info ── */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <p className="eyebrow tracking-[0.2em] text-[0.75rem] font-semibold text-[var(--color-accent)]">GET IN TOUCH</p>
              <span className="w-14 h-px bg-[var(--color-accent)]/30" />
            </div>
            <h2 className="heading-main text-[3rem] sm:text-[4rem] leading-[1.05] mb-2 text-[var(--color-text-main)]">
              Let's plan your<br/><span className="text-[var(--color-primary)]">celebration</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-[0.97rem] leading-relaxed max-w-md mb-10">
              We would love to hear from you. Share your ideas, and let's create an unforgettable experience together.
            </p>

            {/* Office + Phone row */}
            <div className="flex flex-col sm:flex-row gap-10 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="eyebrow text-[0.65rem] font-bold text-[var(--color-text-muted)] mb-1 tracking-widest">OFFICE</p>
                  <p className="text-[0.83rem] text-[var(--color-text-muted)] leading-relaxed">
                    MJS Business Centre<br/>
                    2nd floor, Gandhi Rd, Islampura, Sai Nagar,<br/>
                    Karimnagar, Telangana 505001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:border-l sm:border-[var(--color-accent)]/25 sm:pl-10">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="eyebrow text-[0.65rem] font-bold text-[var(--color-text-muted)] mb-1 tracking-widest">PHONE</p>
                  <p className="text-[0.83rem] text-[var(--color-text-muted)] leading-relaxed">
                    9030119257<br/>9030102663<br/>9030119256
                  </p>
                </div>
              </div>
            </div>

            {/* Email cards */}
            <div className="space-y-4 max-w-lg relative">
              {/* "People Moments Memories Forever" — far left */}
              <div className="absolute left-[-60px] top-[10%] hidden 2xl:block z-0 pointer-events-none">
                <p className="script-text text-[2.6rem] text-[var(--color-accent)] opacity-35 -rotate-12 leading-[0.85]">
                  People<br/><span className="ml-6">Moments</span><br/><span className="ml-12">Memories</span><br/><span className="ml-20">Forever</span>
                </p>
              </div>

              {/* Card 1 — All events */}
              <div className="bg-white/65 backdrop-blur-sm border border-[var(--color-accent)]/30 rounded-xl p-6 shadow-sm hover:border-[var(--color-accent)] transition-colors relative overflow-hidden">
                <div className="absolute bottom-2 right-2 w-8 h-14 pointer-events-none opacity-40">
                  <LeafDecor className="w-full h-full" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">FOR ALL EVENTS</p>
                    <h4 className="heading-main text-[1.05rem] text-[var(--color-primary)] mb-2">Need an event planned for your special occasion?</h4>
                    <p className="text-[0.78rem] text-[var(--color-text-muted)] leading-relaxed mb-3">Reach out to our event planning team for weddings, family celebrations, private parties, cultural programmes, and other special occasions.</p>
                    <p className="eyebrow text-[0.62rem] tracking-widest text-[var(--color-accent)] mb-1">EMAIL</p>
                    <p className="text-[0.82rem] font-medium text-[var(--color-text-main)] mb-4">nithyaevents2017@gmail.com</p>
                    <a href="mailto:nithyaevents2017@gmail.com" className="inline-flex items-center gap-2 px-5 py-2 rounded border border-[var(--color-primary)] text-[var(--color-primary)] text-[0.68rem] font-semibold tracking-widest uppercase hover:bg-[var(--color-primary)] hover:text-white transition-all">
                      <Mail className="w-3.5 h-3.5" /> EMAIL US FOR EVENTS <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 — Corporate */}
              <div className="bg-white/65 backdrop-blur-sm border border-[var(--color-accent)]/30 rounded-xl p-6 shadow-sm hover:border-[var(--color-accent)] transition-colors relative overflow-hidden">
                <div className="absolute bottom-2 right-2 w-8 h-14 pointer-events-none opacity-40">
                  <LeafDecor className="w-full h-full" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
                  </div>
                  <div>
                    <p className="eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">FOR CORPORATE EVENTS</p>
                    <h4 className="heading-main text-[1.05rem] text-[var(--color-primary)] mb-2">Need a professional event planned for your team?</h4>
                    <p className="text-[0.78rem] text-[var(--color-text-muted)] leading-relaxed mb-3">Reach out to our specialized corporate planning team for conferences, brand activations, and annual days.</p>
                    <p className="eyebrow text-[0.62rem] tracking-widest text-[var(--color-accent)] mb-1">CORPORATE EMAIL</p>
                    <p className="text-[0.82rem] font-medium text-[var(--color-text-main)] mb-4">Team.nithyaevents@gmail.com</p>
                    <a href="mailto:Team.nithyaevents@gmail.com" className="inline-flex items-center gap-2 px-5 py-2 rounded border border-[var(--color-primary)] text-[var(--color-primary)] text-[0.68rem] font-semibold tracking-widest uppercase hover:bg-[var(--color-primary)] hover:text-white transition-all">
                      <Mail className="w-3.5 h-3.5" /> EMAIL US FOR CORPORATE EVENTS <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-[var(--color-accent)]/25 p-8 shadow-xl xl:mr-12">
            <h3 className="heading-main text-[1.8rem] text-[var(--color-text-main)] mb-6">
              Enter Your <span className="text-[var(--color-primary)]">Details</span>
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">FULL NAME</label>
                <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">PHONE NUMBER</label>
                <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">EMAIL ADDRESS</label>
                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-event-type" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">EVENT TYPE</label>
                  <select id="contact-event-type" name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full bg-white border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none">
                    <option>Select event type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Cultural Event</option>
                    <option>Private Party</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-event-date" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">EVENT DATE</label>
                  <input id="contact-event-date" type="date" name="eventDate" value={formData.eventDate} onChange={handleInputChange} className="w-full bg-white border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-location" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">EVENT LOCATION</label>
                <input id="contact-location" type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter event location" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div>
                <label htmlFor="contact-budget" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">BUDGET</label>
                <select id="contact-budget" name="budget" value={formData.budget} onChange={handleInputChange} className="w-full bg-white border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none">
                  <option>Select your estimated budget</option>
                  <option>Less than ₹1,00,000</option>
                  <option>₹1,00,000 - ₹5,00,000</option>
                  <option>₹5,00,000 - ₹10,00,000</option>
                  <option>₹10,00,000+</option>
                  <option>Custom Budget</option>
                </select>
              </div>
              
              {formData.budget === 'Custom Budget' && (
                <div>
                  <label htmlFor="contact-custom-budget" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">CUSTOM BUDGET</label>
                  <input id="contact-custom-budget" type="text" name="customBudget" value={formData.customBudget} onChange={handleInputChange} placeholder="Enter your custom budget" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                  {errors.customBudget && <p className="text-red-500 text-xs mt-1">{errors.customBudget}</p>}
                </div>
              )}

              <div>
                <label htmlFor="contact-message" className="block eyebrow tracking-widest text-[0.62rem] font-bold text-[var(--color-accent)] mb-1.5">MESSAGE</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Tell us about your event" className="w-full bg-transparent border border-[var(--color-accent)]/30 rounded-md px-4 py-3 text-[0.85rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"></textarea>
              </div>
              <button type="button" onClick={handleWhatsAppSubmit} className="btn-primary w-full py-4 text-[0.8rem] mt-2 group">
                <svg className="w-4 h-4 fill-white mr-2" viewBox="0 0 24 24"><path d="M12.031 0C5.38 0 0 5.381 0 12.032c0 2.12.548 4.186 1.59 6.002L.007 24l6.113-1.603A11.968 11.968 0 0 0 12.031 24c6.649 0 12.03-5.38 12.03-12.032C24.062 5.38 18.681 0 12.031 0Zm6.602 17.378c-.28.788-1.637 1.488-2.317 1.547-.648.058-1.464.246-4.664-1.074-3.844-1.586-6.273-5.46-6.467-5.719-.193-.26-1.547-2.05-1.547-3.914 0-1.865.976-2.775 1.32-3.146.335-.359.73-.448.971-.448.24 0 .48.002.695.01.233.01.546-.088.855.65.328.784 1.053 2.569 1.144 2.753.091.185.152.4.03.606-.12.206-.182.336-.364.545-.181.208-.382.45-.544.622-.182.193-.377.406-.164.767.213.359.945 1.554 2.034 2.525 1.403 1.25 2.57 1.637 2.934 1.815.364.179.576.152.793-.09.217-.243.93-1.084 1.18-1.455.25-.371.498-.31.834-.185.337.126 2.128 1.002 2.49 1.18.363.18.607.27.695.422.088.152.088.887-.193 1.674Z"/></svg>
                SEND ENQUIRY ON WHATSAPP <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Feature Highlights Row */}
        <div className="max-w-3xl mx-auto mt-16 px-6 grid grid-cols-3 gap-4 text-center border-t border-[var(--color-accent)]/20 pt-12 relative z-10">
          <div className="flex flex-col items-center">
            <Calendar className="w-6 h-6 text-[var(--color-accent)] mb-3" />
            <p className="eyebrow tracking-[0.2em] text-[0.68rem] font-bold text-[var(--color-text-main)] mb-1">PLAN</p>
            <p className="eyebrow tracking-[0.2em] text-[0.58rem] text-[var(--color-text-muted)]">YOUR VISION</p>
          </div>
          <div className="flex flex-col items-center border-l border-[var(--color-accent)]/20">
            <Star className="w-6 h-6 text-[var(--color-accent)] mb-3" />
            <p className="eyebrow tracking-[0.2em] text-[0.68rem] font-bold text-[var(--color-text-main)] mb-1">CREATE</p>
            <p className="eyebrow tracking-[0.2em] text-[0.58rem] text-[var(--color-text-muted)]">WITH PASSION</p>
          </div>
          <div className="flex flex-col items-center border-l border-[var(--color-accent)]/20">
            <Heart className="w-6 h-6 text-[var(--color-accent)] mb-3" />
            <p className="eyebrow tracking-[0.2em] text-[0.68rem] font-bold text-[var(--color-text-main)] mb-1">CELEBRATE</p>
            <p className="eyebrow tracking-[0.2em] text-[0.58rem] text-[var(--color-text-muted)]">BEAUTIFUL MOMENTS</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAP & CONNECT SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-24 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid xl:grid-cols-[1fr_1fr] gap-16">
          <div className="w-full rounded-2xl overflow-hidden border border-[var(--color-accent)]/25 shadow-xl h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7410313264426!2d79.1278!3d18.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd8e11e018ce7%3A0x7aaf762b38516aa7!2sNithyA%20EventS!5e0!3m2!1sen!2sin!4v1714490000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center xl:pr-24">
            <h3 className="heading-main text-[2.4rem] mb-4 text-[var(--color-text-main)]">
              Connect <span className="text-[var(--color-primary)]">With Us</span>
            </h3>
            <p className="text-[0.97rem] text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-md">
              Follow our journey, see our latest events, and stay connected with NithyA Events on social media.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/nithyaevents.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit NithyA EventS on Instagram" className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-accent)]/20 rounded-xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all group">
                <Instagram className="w-8 h-8 text-[var(--color-primary)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-[0.8rem] font-medium text-[var(--color-text-main)]">Instagram</span>
              </a>
              <a href="https://www.facebook.com/nithyaevents.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit NithyA EventS on Facebook" className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-accent)]/20 rounded-xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all group">
                <Facebook className="w-8 h-8 text-[var(--color-primary)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-[0.8rem] font-medium text-[var(--color-text-main)]">Facebook</span>
              </a>
              <a href="https://www.youtube.com/@nithyaevents8695" target="_blank" rel="noopener noreferrer" aria-label="Visit NithyA EventS on YouTube" className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-accent)]/20 rounded-xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all group">
                <Youtube className="w-8 h-8 text-[var(--color-primary)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-[0.8rem] font-medium text-[var(--color-text-main)]">YouTube</span>
              </a>
              <a href="mailto:nithyaevents2017@gmail.com" aria-label="Email NithyA EventS" className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-accent)]/20 rounded-xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all group">
                <Mail className="w-8 h-8 text-[var(--color-primary)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-[0.8rem] font-medium text-[var(--color-text-main)]">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
