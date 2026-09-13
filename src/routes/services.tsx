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

  return (
    <div id="top" className="min-h-screen bg-background pt-24">
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
