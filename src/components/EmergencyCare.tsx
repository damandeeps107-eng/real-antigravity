import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertCircle } from 'lucide-react';

export const EmergencyCare: React.FC = () => {
  return (
    <section id="emergency" className="relative py-20 overflow-hidden bg-primary">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-primary/85 z-10"></div>
        <img
          className="w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida/AP1WRLvZkwQDJDocHVXcJcHU9KxiiOgzE_6Rvzrt9NoQOfqtpj6-zsjRx-OHEEuSOPsF1Q7fVRMMBXtJlXLZT9aAxQ4U3gV8kNcSJY2mwCYH54HzlQI6rUAodNpQ4Lkqw9dXttEdq6Dm7K8J4B-S0YHz0vv_L0OR61qgGz5Qe6QjPEAapXmwyXO7XBbstZmunm-W_BzCSkVVKEmVRx5aZCpr5LrtV0Trc8jYyDDaL8t1p8OlLrE4Nh3YGPTab7o"
          alt="Emergency medical background"
        />
      </div>

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
