import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X, Phone, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(['about', 'services', 'why-choose-us', 'emergency', 'testimonials', 'booking', 'contact'], 100);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Specialties', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'Emergency', href: '#emergency', id: 'emergency' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Reassuring Ticker - Desktop */}
      <div className="hidden md:flex items-center justify-between bg-primary text-white/90 text-xs py-2 px-6 lg:px-16 border-b border-white/10 font-medium">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold text-white">OPD Open Today (10 AM - 4 PM)</span>
          </span>
          <span className="flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            Mediways Hospital, Ferozepur Road, Ludhiana
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#ffe088] font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AIIMS Delhi &amp; PGI Chandigarh Alumni
          </span>
          <span className="text-white/40">|</span>
          <a href="tel:+919877125925" className="hover:text-emerald-300 font-bold transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-emerald-400" />
            24/7 NICU: +91 98771 25925
          </a>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-3 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <a href="#top" className="flex items-center gap-3 select-none group">
            <div className="relative flex-shrink-0">
              <img 
                src={logo} 
                alt="Dr. Aamir Dogra Logo" 
                className="w-12 h-12 sm:w-13 sm:h-13 object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-105 border-2 border-white ring-2 ring-teal-500/20 bg-white" 
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" title="Active"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-lg sm:text-xl text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
                Dr. Aamir Dogra
              </span>
              <span className="text-[11px] text-teal-700 font-bold uppercase tracking-wider mt-1 flex items-center gap-1">
                <span>Paediatrician</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-600 font-semibold">MBBS, MD, UK-NHS Certified</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-body text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-primary hover:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919877125925"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-teal-600/30 text-teal-700 font-body text-xs font-bold hover:bg-teal-50 transition-all active:scale-95 duration-200"
              id="nav-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Emergency Call</span>
            </a>
            <a
              href="#booking"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-5 py-2.5 rounded-full font-body text-xs font-bold hover:from-teal-700 hover:to-teal-800 transition-all active:scale-95 duration-200 shadow-md shadow-teal-700/20"
              id="nav-book-btn"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-primary hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-full w-[82%] max-w-sm bg-white z-50 transition-transform duration-300 ease-out shadow-2xl flex flex-col justify-between p-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded-full border border-teal-200" />
              <div>
                <h4 className="font-display font-extrabold text-sm text-primary">Dr. Aamir Dogra</h4>
                <p className="text-[10px] text-teal-700 font-bold">Child &amp; Newborn Specialist</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-sm font-bold py-2.5 px-4 rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Info Box in Mobile Menu */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-left">
            <div className="flex items-center gap-2 text-amber-800 text-xs font-bold mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>OPD Timings: 10 AM - 4 PM</span>
            </div>
            <p className="text-[11px] text-amber-900/80 leading-relaxed">
              Mediways Hospital, Ferozepur Road, Ludhiana. 24/7 NICU emergency open.
            </p>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
          <a
            href="tel:+919877125925"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-teal-600 text-teal-700 font-body text-xs font-bold hover:bg-teal-50 transition-all"
            onClick={() => setIsOpen(false)}
            id="drawer-call-btn"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call +91 98771 25925</span>
          </a>
          <a
            href="#booking"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-full font-body text-xs font-bold shadow-md hover:from-teal-700 hover:to-teal-800 transition-all text-center"
            onClick={() => setIsOpen(false)}
            id="drawer-book-btn"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>Book Appointment (₹300)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
