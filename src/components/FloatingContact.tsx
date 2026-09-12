import { MapPin, Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-10 right-5 md:bottom-[50px] md:right-[28px] z-50 flex flex-col gap-4">
      {/* Location */}
      <a
        href="https://maps.google.com/maps?q=18.451142,79.137245"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Nithya Events location"
        className="group relative flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#B48648] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] active:scale-95"
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/90 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block shadow-md">
          Location
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919030119257"
        aria-label="Call Nithya Events"
        className="group relative flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#2D68F8] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] active:scale-95"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white fill-white/10" />
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/90 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block shadow-md">
          Call Us
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919030119257?text=Hello%20Nithya%20Events%2C%20I%20would%20like%20to%20enquire%20about%20your%20event%20services."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Nithya Events on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-white"
        >
          <path d="M12.031 0C5.38 0 0 5.381 0 12.032c0 2.12.548 4.186 1.59 6.002L.007 24l6.113-1.603A11.968 11.968 0 0 0 12.031 24c6.649 0 12.03-5.38 12.03-12.032C24.062 5.38 18.681 0 12.031 0Zm6.602 17.378c-.28.788-1.637 1.488-2.317 1.547-.648.058-1.464.246-4.664-1.074-3.844-1.586-6.273-5.46-6.467-5.719-.193-.26-1.547-2.05-1.547-3.914 0-1.865.976-2.775 1.32-3.146.335-.359.73-.448.971-.448.24 0 .48.002.695.01.233.01.546-.088.855.65.328.784 1.053 2.569 1.144 2.753.091.185.152.4.03.606-.12.206-.182.336-.364.545-.181.208-.382.45-.544.622-.182.193-.377.406-.164.767.213.359.945 1.554 2.034 2.525 1.403 1.25 2.57 1.637 2.934 1.815.364.179.576.152.793-.09.217-.243.93-1.084 1.18-1.455.25-.371.498-.31.834-.185.337.126 2.128 1.002 2.49 1.18.363.18.607.27.695.422.088.152.088.887-.193 1.674Z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/90 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block shadow-md">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
