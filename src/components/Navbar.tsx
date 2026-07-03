import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X, Phone, Calendar } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full glass-navbar transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 select-none group">
          <span className="material-symbols-outlined text-secondary text-3xl font-bold animate-pulse">
            baby_changing_station
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl text-primary tracking-tight leading-none">
              Dr. Aamir Dogra
            </span>
            <span className="font-body text-[10px] text-secondary font-semibold uppercase tracking-widest mt-0.5">
              Pediatric &amp; Newborn Care
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
        <div className="lg:hidden fixed inset-0 top-[73px] z-30 bg-[#000a1e]/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed right-0 top-[73px] h-[calc(100vh-73px)] w-72 bg-white z-40 transition-transform duration-300 ease-in-out luxury-shadow transform ${
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
