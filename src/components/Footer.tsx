import React from 'react';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051527] text-white text-left pb-20 md:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-3 select-none">
            <img 
              src={logo} 
              alt="Dr. Aamir Dogra Logo" 
              className="w-14 h-14 object-contain rounded-full shadow-lg border-2 border-white/20 bg-white" 
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-lg text-white leading-tight">
                Dr. Aamir Dogra
              </span>
              <span className="font-body text-[10px] text-amber-300 font-bold uppercase tracking-widest mt-0.5">
                Paediatrics &bull; MBBS, MD, UK-NHS Certified
              </span>
            </div>
          </div>
          <p className="text-slate-400 font-body text-xs sm:text-sm leading-relaxed">
            AIIMS Delhi &amp; PGI Chandigarh alumni providing compassionate pediatric &amp; neonatal intensive care in a fear-free environment.
          </p>
          <div className="text-xs text-teal-300 font-bold flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>OPD: 10:00 AM - 4:00 PM (Mon - Sat)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-extrabold text-xs text-white mb-5 uppercase tracking-wider text-amber-300">
            Specialties
          </h4>
          <ul className="space-y-3 font-body text-xs sm:text-sm">
            <li>
              <a href="#services" className="text-slate-400 hover:text-teal-300 transition-colors">
                Newborn &amp; NICU Care
              </a>
            </li>
            <li>
              <a href="#services" className="text-slate-400 hover:text-teal-300 transition-colors">
                Painless Child Vaccination
              </a>
            </li>
            <li>
              <a href="#services" className="text-slate-400 hover:text-teal-300 transition-colors">
                Child Growth &amp; Development
              </a>
            </li>
            <li>
              <a href="#services" className="text-slate-400 hover:text-teal-300 transition-colors">
                Pediatric Asthma &amp; Allergy
              </a>
            </li>
            <li>
              <a href="#ayushman-bharat" className="text-slate-400 hover:text-teal-300 transition-colors">
                Ayushman Bharat Support
              </a>
            </li>
          </ul>
        </div>

        {/* Location & Emergency */}
        <div>
          <h4 className="font-display font-extrabold text-xs text-white mb-5 uppercase tracking-wider text-amber-300">
            Clinic &amp; Emergency
          </h4>
          <ul className="space-y-3 font-body text-xs sm:text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>Mediways Hospital, Ferozepur Road, Ludhiana, Punjab</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href="tel:+919877125925" className="hover:text-emerald-300 font-bold">
                +91 98771 25925 (24/7)
              </a>
            </li>
            <li>
              <a href="#booking" className="inline-block mt-1 text-xs font-bold text-amber-300 hover:underline">
                Book Consultation (₹300) &rarr;
              </a>
            </li>
          </ul>
        </div>

        {/* Follow & Connect */}
        <div className="space-y-4">
          <h4 className="font-display font-extrabold text-xs text-white mb-5 uppercase tracking-wider text-amber-300">
            Stay Connected
          </h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Follow Dr. Dogra on Instagram for helpful child healthcare, nutrition, and parenting tips.
          </p>
          <a
            href="https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 font-body text-xs font-bold hover:underline"
            id="footer-instagram"
          >
            <Instagram className="w-4 h-4" />
            <span>@draamirdograpaeds</span>
          </a>
        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500 font-body max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          &copy; {new Date().getFullYear()} Dr. Aamir Dogra Paediatric Clinic. All rights reserved.
        </div>
        <div>
          Mediways Hospital &bull; Ludhiana, Punjab
        </div>
      </div>
    </footer>
  );
};
