import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import clinicHero from '../assets/clinic-hero.jpg';
import logo from '../assets/logo.png';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-[#f7f9fb] py-12 md:py-16">
      {/* Background Image - Clean & Clearly Visible with Natural Left Fade */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          className="w-full h-full object-cover object-[center_right] md:object-[82%_center] filter saturate-[1.05]"
          src={clinicHero}
          alt="Dr. Aamir Dogra Pediatric Clinic Examination Room"
        />
        {/* Seamless gradient fade for text readability - Completely unboxed and natural */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fb] via-[#f7f9fb]/90 to-transparent z-10 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, #f7f9fb 0%, #f7f9fb 45%, rgba(247, 249, 251, 0.85) 60%, rgba(247, 249, 251, 0) 100%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/90 to-transparent z-10 md:hidden" style={{ backgroundImage: 'linear-gradient(to top, #f7f9fb 0%, #f7f9fb 50%, rgba(247, 249, 251, 0.7) 70%, rgba(247, 249, 251, 0) 100%)' }}></div>
      </div>

      {/* Main Content Area - Natural & Open Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="max-w-2xl text-left">
          {/* Official Clinic Badge with Original Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-secondary/20 shadow-sm mb-5 group"
          >
            <img 
              src={logo} 
              alt="Dr. Aamir Dogra Official Logo" 
              className="w-10 h-10 object-contain rounded-full shadow-sm border border-secondary/15 transition-transform group-hover:scale-105 bg-white flex-shrink-0" 
            />
            <div className="flex flex-col text-left pr-2">
              <span className="font-display font-black text-xs text-primary leading-tight">
                Dr. Aamir Dogra Pediatric Care
              </span>
              <span className="text-[10.5px] text-secondary font-bold tracking-wider">
                Mediways Hospital &bull; Ludhiana
              </span>
            </div>
          </motion.div>

          {/* Pediatric Care Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-[#e0f7f7] text-[#005757] font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-secondary/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>🧸 Child &amp; Newborn Care Specialist</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#fff8e7] text-[#976a00] font-body text-xs font-bold px-3 py-1.5 rounded-full border border-[#ffe088] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>AIIMS &amp; PGI Trained</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-[40px] sm:text-5xl md:text-6xl text-primary leading-[1.12] tracking-tight mb-5"
          >
            Gentle Healthcare for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#008080] to-primary">
              Your Little Miracles
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl"
          >
            From newborn ICU care to joyful milestone checkups. <span className="font-bold text-primary">Dr. Aamir Dogra</span> offers compassionate, evidence-based pediatric medicine in a warm, fear-free environment for kids.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#booking"
              className="flex items-center justify-center gap-2.5 bg-primary-container text-white px-8 py-4 rounded-full font-body text-sm font-bold shadow-lg hover:bg-[#003166] hover:shadow-xl transition-all active:scale-[0.98] duration-200 group"
              id="hero-book-btn"
            >
              <Calendar className="w-5 h-5 text-gold-light group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </a>
            <a
              href="tel:+919877125925"
              className="flex items-center justify-center gap-2.5 bg-white text-primary border-2 border-secondary/30 px-8 py-4 rounded-full font-body text-sm font-bold shadow-md hover:shadow-lg hover:bg-[#f0f9f9] hover:border-secondary transition-all active:scale-[0.98] duration-200"
              id="hero-call-btn"
            >
              <Phone className="w-5 h-5 text-secondary animate-bounce" />
              <span>Call +91 98771 25925</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30 text-left"
          >
            <div>
              <div className="font-display font-black text-xl md:text-2xl text-primary leading-none">5,000+</div>
              <div className="text-[11px] text-on-surface-variant font-semibold mt-1">Smiling Kids</div>
            </div>
            <div>
              <div className="font-display font-black text-xl md:text-2xl text-secondary leading-none">24/7</div>
              <div className="text-[11px] text-on-surface-variant font-semibold mt-1">NICU &amp; Emergency</div>
            </div>
            <div>
              <div className="font-display font-black text-xl md:text-2xl text-primary leading-none">100%</div>
              <div className="text-[11px] text-on-surface-variant font-semibold mt-1">Kid-Friendly Care</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
