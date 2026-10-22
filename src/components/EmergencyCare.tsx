import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertCircle } from 'lucide-react';

export const EmergencyCare: React.FC = () => {
  return (
    <section id="emergency" className="relative py-20 overflow-hidden bg-[#00142e]">
      {/* Background Tech Medical Grid & Heartbeat SVG */}
      <div className="absolute inset-0 z-0 select-none opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="medical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#708ab5" strokeWidth="0.7" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid)" />
        </svg>
      </div>

      {/* Radiant Glow Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-error/15 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center relative z-20">
        {/* Urgent Care Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 px-4 py-1.5 bg-[#002147]/50 rounded-full border border-gold/20"
        >
          <AlertCircle className="w-4 h-4 text-gold animate-bounce" />
          <span>Urgent Care / Emergency</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight max-w-3xl mx-auto"
        >
          24/7 Neonatal &amp; Pediatric Emergency Care
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#708ab5] font-body text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          In medical crises, every second counts. Dr. Dogra is available for emergency interventions and critical consultations around the clock.
        </motion.p>

        {/* Emergency Badge & Call button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="tel:+919877125925"
            className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-full font-display font-bold text-base hover:bg-secondary-container hover:text-on-secondary-container transition-all hover:scale-105 active:scale-95 luxury-shadow duration-300 border border-secondary/20"
            id="emergency-call-btn"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Call Now: +91 98771 25925</span>
          </a>

          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
            <span className="font-body text-xs font-semibold text-[#ffe088] uppercase tracking-widest">
              Emergency Services Open 24 Hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
