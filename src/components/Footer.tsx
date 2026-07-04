import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6 select-none">
            <span className="material-symbols-outlined text-[#90efef] text-3xl font-bold">
              baby_changing_station
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg text-white leading-none">
                Dr. Aamir Dogra
              </span>
              <span className="font-body text-[10px] text-[#708ab5] font-semibold uppercase tracking-widest mt-1">
                Pediatric Care Specialist
              </span>
            </div>
          </div>
          <p className="text-[#708ab5] font-body text-sm leading-relaxed mb-4">
            Providing elite pediatric and neonatal intensive care with compassion and precision.
          </p>
          <p className="text-xs text-[#90efef] font-body font-semibold">
            Clinic: 10:00 AM - 4:00 PM (Mon - Sat)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm text-white mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a href="#about" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#emergency" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Emergency Care
              </a>
            </li>
            <li>
              <a href="#booking" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-display font-bold text-sm text-white mb-6 uppercase tracking-wider">
            Legal Links
          </h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a href="#" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Medical Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="text-[#708ab5] hover:text-[#90efef] transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-white mb-6 uppercase tracking-wider">
            Follow Us
          </h4>
          <p className="text-[#708ab5] font-body text-sm leading-relaxed">
            Stay updated with child health tips and clinic updates.
          </p>
          <a
            href="https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#90efef] font-body text-sm font-semibold hover:underline"
            id="footer-instagram"
          >
            <Instagram className="w-4 h-4" />
            <span>@draamirdograpaeds</span>
          </a>
        </div>
      </div>

      {/* Copyright footer bar */}
      <div className="border-t border-[#708ab5]/10 py-8 text-center text-xs text-[#708ab5]/60 font-body max-w-7xl mx-auto px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Dr. Aamir Dogra Pediatric Care. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>Developed with care for young smiles</span>
        </div>
      </div>
    </footer>
  );
};
