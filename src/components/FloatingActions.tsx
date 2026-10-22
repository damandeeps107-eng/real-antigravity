import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Action Buttons (Hidden on mobile) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 select-none">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919877125925?text=Hello%20Dr.%20Aamir%20Dogra%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-all duration-200 group relative border-2 border-white ring-2 ring-emerald-500/20"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Care Line"
          id="floating-whatsapp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          {/* Tooltip */}
          <span className="absolute right-15 bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919877125925"
          className="w-13 h-13 bg-teal-700 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-all duration-200 group relative border-2 border-white ring-2 ring-teal-500/20"
          title="Call Emergency Line"
          aria-label="Emergency Call Line"
          id="floating-call"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          {/* Tooltip */}
          <span className="absolute right-15 bg-slate-900 text-white text-[11px] font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            Emergency Helpline
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Quick-Bar (Visible only on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-2.5 shadow-2xl flex items-center gap-3">
        <a
          href="tel:+919877125925"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 text-slate-900 font-display font-extrabold text-xs active:scale-95 transition-all border border-slate-300"
          id="mobile-bar-call"
        >
          <Phone className="w-4 h-4 text-teal-700 animate-bounce" />
          <span>Call Doctor</span>
        </a>

        <a
          href="#booking"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-display font-extrabold text-xs shadow-md shadow-teal-700/20 active:scale-95 transition-all"
          id="mobile-bar-book"
        >
          <Calendar className="w-4 h-4 text-amber-200" />
          <span>Book (₹300)</span>
        </a>

        <a
          href="https://wa.me/919877125925?text=Hello%20Dr.%20Aamir%20Dogra%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#25D366] text-white flex-shrink-0 active:scale-95 transition-all shadow-md"
          aria-label="WhatsApp"
          id="mobile-bar-wa"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>
    </>
  );
};
