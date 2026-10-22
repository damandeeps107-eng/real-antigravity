import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';

export const EmergencyCare: React.FC = () => {
  return (
    <section id="emergency" className="relative py-16 sm:py-20 overflow-hidden bg-[#06182d] text-white">
      {/* Background Tech Medical Grid & Glowing Radar */}
      <div className="absolute inset-0 z-0 select-none opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="medical-grid-dark" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.25"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid-dark)" />
        </svg>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-20">
        {/* Urgent Care Beacon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-xs mb-6 px-4 py-1.5 bg-rose-500/10 rounded-full border border-rose-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          <span>24/7 Critical Emergency Helpline</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
        >
          Round-the-Clock Emergency &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-teal-300">
            Neonatal ICU Life Support
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-slate-300 font-body text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          In a pediatric emergency, immediate expert care matters. Dr. Aamir Dogra is on call 24 hours a day at Mediways Hospital for acute respiratory distress, severe seizures, dehydration, and neonatal critical care.
        </motion.p>

        {/* Emergency Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="tel:+919877125925"
            className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-700 text-white px-8 sm:px-10 py-4 rounded-full font-display font-black text-base shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-rose-400/40"
            id="emergency-call-btn"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Call Now: +91 98771 25925</span>
          </a>
        </motion.div>

        {/* Reassuring Emergency Features */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Mediways Hospital, Ferozepur Road
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Level-3 Advanced NICU Setup
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Dedicated Pediatric Emergency Ward
          </span>
        </div>
      </div>
    </section>
  );
};
