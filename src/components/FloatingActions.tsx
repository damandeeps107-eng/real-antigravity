import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 select-none">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919877125925?text=Hello%20Dr.%20Aamir%20Dogra%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-transform duration-200 group relative border border-white/20"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Care Line"
        id="floating-whatsapp"
      >
        <span className="material-symbols-outlined text-3xl font-bold fill-current">
          chat
        </span>
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#000a1e] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-outline-variant/10 shadow">
          Chat With Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919877125925"
        className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-transform duration-200 group relative border border-white/20"
        title="Call Emergency Line"
        aria-label="Emergency Call Line"
        id="floating-call"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#000a1e] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-outline-variant/10 shadow">
          Emergency Call
        </span>
      </a>
    </div>
  );
};
