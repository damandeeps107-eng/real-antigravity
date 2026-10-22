import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import clinicHero from '../assets/clinic-hero.jpg';
import logo from '../assets/logo.png';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-[#f8fafc] to-white py-10 sm:py-14 md:py-18">
      {/* Clinic Room Background Image with Gentle Natural Fade */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          className="w-full h-full object-cover object-[center_right] md:object-[84%_center] filter saturate-[1.08] brightness-[1.02]"
          src={clinicHero}
          alt="Dr. Aamir Dogra Pediatric Examination Clinic"
        />
        {/* Soft, warm ambient gradients so the room is visible while text stays 100% sharp */}
        <div 
          className="absolute inset-0 z-10 hidden md:block" 
          style={{ 
            background: 'linear-gradient(to right, #f8fafc 0%, #f8fafc 46%, rgba(248, 250, 252, 0.88) 62%, rgba(248, 250, 252, 0.1) 100%)' 
          }}
        />
        <div 
          className="absolute inset-0 z-10 md:hidden" 
          style={{ 
            background: 'linear-gradient(to top, #f8fafc 0%, #f8fafc 60%, rgba(248, 250, 252, 0.75) 80%, rgba(248, 250, 252, 0.2) 100%)' 
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        <div className="max-w-2xl text-left">
          {/* Official Clinic Badge with Original Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-teal-200 shadow-sm mb-4 sm:mb-5 group"
          >
            <img 
              src={logo} 
              alt="Dr. Aamir Dogra Official Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full shadow-sm border border-teal-300 transition-transform group-hover:scale-105 bg-white flex-shrink-0" 
            />
            <div className="flex flex-col text-left pr-2">
              <span className="font-display font-extrabold text-xs sm:text-sm text-primary leading-tight">
                Dr. Aamir Dogra Paediatric Clinic
              </span>
              <span className="text-[10px] sm:text-[11px] text-teal-700 font-bold tracking-wide">
                Mediways Hospital &bull; Ludhiana
              </span>
            </div>
          </motion.div>

          {/* Child Care & Pedigree Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5"
          >
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 font-body text-xs font-bold px-3 py-1 rounded-full border border-teal-200 shadow-sm">
              <span className="text-sm">🧸</span>
              <span>Child &amp; Newborn Care Specialist</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 font-body text-xs font-bold px-3 py-1 rounded-full border border-amber-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>AIIMS Delhi &amp; PGI Trained</span>
            </span>
          </motion.div>

          {/* Friendly Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.14] tracking-tight mb-4 sm:mb-5"
          >
            Gentle Healthcare for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-primary">
              Your Little Miracles
            </span>
          </motion.h1>

          {/* Warm Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl"
          >
            From newborn ICU care to joyful milestone checkups. <span className="font-bold text-primary">Dr. Aamir Dogra (MBBS, MD, UK-NHS Certified)</span> combines premier medical expertise with a warm, fear-free environment for children.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <a
              href="#booking"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-body text-sm font-bold shadow-lg shadow-teal-700/25 hover:shadow-xl hover:scale-[1.02] transition-all active:scale-[0.98] duration-200 group"
              id="hero-book-btn"
            >
              <Calendar className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
              <span>Book Appointment (₹300)</span>
            </a>
            <a
              href="tel:+919877125925"
              className="flex items-center justify-center gap-2.5 bg-white text-primary border-2 border-teal-600/30 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-body text-sm font-bold shadow-sm hover:shadow-md hover:bg-teal-50/60 hover:border-teal-600 transition-all active:scale-[0.98] duration-200"
              id="hero-call-btn"
            >
              <Phone className="w-4 h-4 text-teal-600 animate-bounce" />
              <span>Emergency: +91 98771 25925</span>
            </a>
          </motion.div>

          {/* Trust Highlights Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80 text-left"
          >
            <div className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-xs">
              <div className="font-display font-black text-xl text-primary leading-none">5,000+</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">Smiling Kids</div>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-xs">
              <div className="font-display font-black text-xl text-teal-700 leading-none">24/7</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">NICU Emergency</div>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-xs">
              <div className="font-display font-black text-xl text-amber-600 leading-none">₹300</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">Consultation Fee</div>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-xs">
              <div className="font-display font-black text-xl text-primary leading-none">100%</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">Kid-Friendly Care</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
