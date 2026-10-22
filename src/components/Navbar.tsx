import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(['about', 'services', 'why-choose-us', 'emergency', 'testimonials', 'booking', 'contact'], 120);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'Emergency', href: '#emergency', id: 'emergency' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 shadow-sm border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 select-none group">
          <div className="relative flex-shrink-0">
            <img 
              src={logo} 
              alt="Dr. Aamir Dogra Logo" 
              className="w-13 h-13 object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-105 border-2 border-white ring-2 ring-secondary/20 bg-white" 
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-500/30" title="Clinic Open Today"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-black text-lg md:text-xl text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
              Dr. Aamir Dogra
            </span>
            <span className="font-body text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">
              Paediatrics &bull; MBChB, MRCPCH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-body text-sm font-semibold transition-all duration-300 relative py-1 ${
                activeSection === link.id
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919877125925"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-secondary text-secondary font-body text-sm font-semibold hover:bg-secondary/5 transition-all active:scale-95 duration-200"
            id="nav-call-btn"
          >
            <Phone className="w-4 h-4" />
            <span>Emergency Call</span>
          </a>
          <a
            href="#booking"
            className="flex items-center gap-2 bg-primary-container text-white px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:bg-[#003166] transition-all active:scale-95 duration-200 shadow-sm"
            id="nav-book-btn"
          >
            <Calendar className="w-4 h-4 text-gold-light" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] z-40 bg-[#000a1e]/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed right-0 top-[68px] h-[calc(100vh-68px)] w-72 bg-white z-50 transition-transform duration-300 ease-in-out shadow-2xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 h-full justify-between">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'bg-secondary-container/20 text-secondary'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-auto mb-8 border-t border-outline-variant/20 pt-6">
            <a
              href="tel:+919877125925"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-secondary text-secondary font-body text-sm font-semibold hover:bg-secondary/5 transition-all"
              onClick={() => setIsOpen(false)}
              id="mobile-nav-call"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 w-full bg-primary-container text-white py-3 rounded-full font-body text-sm font-semibold hover:bg-[#003166] transition-all text-center"
              onClick={() => setIsOpen(false)}
              id="mobile-nav-book"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
