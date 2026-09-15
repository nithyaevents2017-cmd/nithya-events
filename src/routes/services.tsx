import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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
      { name: "description", content: "Discover the comprehensive event services offered by NithyA EventS." },
    ],
  }),
  component: ServicesPage,
});

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

const servicesList = [
  { title: "FOOD", description: "Great food is what we provide whatever the occasion. Whether it's a small dinner party, a wedding, a lunch meeting or a banquet, from a min of 20 to 5000 or more people.From Thalis to Biryanis, Dals to Naans, Deserts to Chaats ,we Offer a Wide assortment of Veg and Non-Veg spices.", img: foodImg },
  { title: "CATERING", description: "We offer The Latest and Traditional Catering services like Dining in Decorated Copper vessels and also in Pot vessels which provide Hygienic and Delightful dinning.", img: cateringImg },
  { title: "DECORATION", description: "Decorating for an event goes far beyond the tent and tables. Let our professional design team work with you to pick the perfect decor elements to wow your guests.", img: decorationImg },
  { title: "BRASS BAND", description: "Celebrate your blissful occasion with our band which is a skilled team of brass band that performs both traditional and new age music.The band also presents music, depending upon the moods and theme of occasion.", img: brassBandImg },
  { title: "DJ", description: "What's an event without some entertainment? Be it anything, we can organize them all for you to make the event more memorable.", img: djImg },
  { title: "SOUNDS", description: "Sound is an art form though we admit to infusing the very latest technology,techniques and a no compromise approach to every single event that we undertake.", img: soundsImg },
  { title: "LIGHTING", description: "We arrange all Type of lighting services which include Spot Lighting, Up lighting, Outdoor Lighting and other lighting services desired on perspective Event performed.", img: lightingImg },
  { title: "ORCHESTRA", description: "We provides a wide variety of entertainment choices for various events and celebrations. We have a great team of talented musicians and performers, with experience and energy to transform any event into a fun and remarkable occasion.", img: orchestraImg },
  { title: "ANCHOR/HOSTING", description: "Hosting an event is a great way of Elevating your Event with an impressing gratitude of your beloved guests by our Team and Management.", img: anchorImg },
  { title: "PHOTOGRAPHY", description: "We are a passionate team of Wedding Photographers loving to capture and preserve the beautiful moments of your life time.", img: photographyImg },
  { title: "VIDEOGRAPHY", description: "We comprises a distinct Team of Experienced Videographers who are committed to make sure you have Best-looking Memories. Our Team ensure high quality service and will work with you until your album is in your hands.", img: videographyImg },
  { title: "CINEMATOGRAPHIC WEDDING", description: "A Wedding Picture tells a story When it captures \"Interactions\"! We mainly focus on Client's requirements with the skills of our talented Team in bringing candid photography, wedding videography..", img: cinematographicImg },
  { title: "BUFFET STAGES", description: "Hospitality to Your Guests is shown Exclusively in Perfect Planning and execution of Buffet Arrangement by Our Team of Experts and you know We care for you..", img: buffetStagesImg },
  { title: "MEHENDI DESIGN", description: "In Indian weddings, a lot of emphasis is given on customs and rituals and the same is reflected in the Mehendi ceremony before marriage.Our Designers provide Elegant designs which Enhance their Beauty.", img: mehendiImg },
  { title: "BEAUTICIAN/MAKEUP", description: "Our Beauticians Discover the best wedding hairstyles and makeup through your ideas,visualizations and we perform our work through reaching your expectations and we Present you to the Best Ever look That you have Got..!", img: beauticianImg },
];

function ServicesPage() {
  return (
    <div id="top" className="min-h-screen bg-botanical relative overflow-hidden pt-32 pb-24">

      <main className="mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-[var(--color-accent)]/40" />
            <p className="eyebrow tracking-[0.22em] text-[0.8rem] font-semibold text-[var(--color-accent)]">WHAT WE HANDLE</p>
            <span className="w-8 h-px bg-[var(--color-accent)]/40" />
          </div>
          <h1 className="heading-main text-[3rem] sm:text-[4rem] mb-6 text-[var(--color-text-main)]">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-[0.95rem] leading-relaxed">
            From intimate gatherings to grand celebrations, we bring your vision to life<br/>with creativity, precision and care.
          </p>
          {/* "Every Occasion Matters" script top right */}
          <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
            <p className="script-text text-[2.8rem] text-[var(--color-accent)] opacity-70 -rotate-6 leading-[0.9]">
              Every<br/><span className="ml-10">Occasion</span><br/><span className="ml-20">Matters</span>
            </p>
            <div className="w-12 h-px bg-[var(--color-accent)] mt-2 ml-auto opacity-40" />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item) => (
            <div key={item.title} className="bg-white rounded-[20px] overflow-hidden border border-[var(--color-accent)]/20 hover:shadow-[0_15px_40px_rgba(201,154,74,0.15)] transition-all duration-500 group flex flex-col cursor-pointer relative">
              <div className="p-2 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover rounded-t-[16px] rounded-b-[4px]"
                />
                {/* Leaf on image bottom-left */}
                <div className="absolute bottom-2 left-2 w-12 h-20 pointer-events-none opacity-70">
                  <LeafDecor className="w-full h-full" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="heading-main text-[1.3rem] tracking-wide text-[var(--color-primary)] mb-2">{item.title}</h3>
                <div className="w-10 h-px bg-[var(--color-accent)] mb-4 opacity-50" />
                <p className="text-[var(--color-text-muted)] text-[0.92rem] leading-[1.7] mb-8 pr-12">
                  {item.description}
                </p>
                <div className="absolute bottom-8 right-8">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Services Bottom CTA Banner */}
      <div className="relative mx-auto max-w-[1400px] px-6 mt-24">
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] bg-[var(--color-background)] border border-[var(--color-accent)]/10 flex items-center">

          {/* Left circular badge */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex z-10">
            <div className="relative w-40 h-40 rounded-full border-2 border-[var(--color-accent)]/30 flex flex-col items-center justify-center text-center px-4 bg-white/80 shadow-xl">
              <div className="absolute inset-2 rounded-full border border-[var(--color-accent)]/15 pointer-events-none" />
              <p className="eyebrow text-[0.52rem] tracking-[0.15em] text-[var(--color-text-muted)] mb-1">LET'S<br/>PLAN YOUR</p>
              <p className="script-text text-[2rem] text-[var(--color-accent)] leading-none -rotate-3">Next<br/>Celebration</p>
            </div>
          </div>

          {/* Centre content */}
          <div className="flex-1 text-center py-14 lg:px-48 px-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-10 h-px bg-[var(--color-accent)]/40" />
              <p className="eyebrow tracking-[0.22em] text-[0.65rem] font-semibold text-[var(--color-accent)]">TURNING IDEAS INTO UNFORGETTABLE EXPERIENCES</p>
              <span className="w-10 h-px bg-[var(--color-accent)]/40" />
            </div>
            <h2 className="heading-main text-[2.4rem] sm:text-[3rem] mb-3 text-[var(--color-text-main)]">
              Ready to Create Something <span className="text-[var(--color-primary)]">Beautiful?</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-[0.92rem] mb-8">Get in touch with us today and let's plan an event to remember.</p>
            <a href="/#contact" className="btn-primary inline-flex">
              GET IN TOUCH <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Right burgundy swoosh */}
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
          <div className="absolute left-[30%] top-5 w-10 h-16 pointer-events-none opacity-45 hidden lg:block">
            <LeafDecor className="w-full h-full" />
          </div>
        </div>
      </div>

    </div>
  );
}
