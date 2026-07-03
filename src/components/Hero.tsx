import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fb] via-[#f7f9fb]/90 to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/80 to-transparent z-10 md:hidden"></div>
        <img
          className="w-full h-full object-cover object-[center_right] md:object-right"
          src="https://lh3.googleusercontent.com/aida/AP1WRLup_4KC-AmYdgF7S5UZYk1VC1p5Xf2lKoA16wwP3dxl6wTmib1QNJoQ--2ZcrDQavbnE4MVMgHAIISzjxel7HPPx5Zslvyz-9XgtWuJk_6TQugXhpKS2Vg6QM670sR3gkybHGQwVr9GEXGM77x-DN8IRua7nKIpVhZq9h5N7Ne4ku4v08urB6qtF1kVmEv6phbWGOAQ2OXtB3B7nHmOFYp5T00V8UEbodgkwMJHkCkyAG_FB9fMCSZqCUub"
          alt="Dr. Aamir Dogra Pediatric Clinic Interior"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full py-16 md:py-24">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-secondary-container/40 text-on-secondary-container font-body text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              Expert Pediatric Care
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-extrabold text-[44px] sm:text-5xl md:text-6xl text-primary leading-tight tracking-tight mb-4"
          >
            Dr. Aamir Dogra
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-semibold text-lg md:text-2xl text-on-surface-variant mb-8 leading-relaxed"
          >
            Child and Newborn Specialist <br className="hidden md:block" />
            <span className="text-secondary font-bold">PGI Chandigarh | AIIMS Delhi Alumni</span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 bg-primary-container text-white px-8 py-4 rounded-full font-body text-sm font-bold shadow-md hover:bg-[#003166] hover:shadow-lg transition-all active:scale-[0.98] duration-200"
              id="hero-book-btn"
            >
              <Calendar className="w-5 h-5 text-gold-light" />
              <span>Book Appointment</span>
            </a>
            <a
              href="tel:+919877125925"
              className="flex items-center justify-center gap-2 bg-white text-primary border border-outline/30 px-8 py-4 rounded-full font-body text-sm font-bold shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all active:scale-[0.98] duration-200"
              id="hero-call-btn"
            >
              <Phone className="w-5 h-5 text-secondary animate-bounce" />
              <span>Call +91 98771 25925</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
