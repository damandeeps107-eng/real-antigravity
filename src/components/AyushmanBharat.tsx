import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react';

export const AyushmanBharat: React.FC = () => {
  return (
    <section
      id="ayushman-bharat"
      className="py-12 md:py-20 bg-[#f7f9fb] relative overflow-hidden border-t border-b border-outline-variant/15"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#d6e3ff]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="bg-white rounded-2xl border border-outline-variant/35 p-8 md:p-12 luxury-shadow grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Badge & Text column (8 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 text-left space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-[#93f2f2]/30 text-[#004f4f] font-body text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              Government Health Scheme Support
            </span>
            
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary leading-tight">
              Ayushman Bharat (₹10 Lakh Health Card) <br />
              <span className="text-secondary">Treatment Available</span>
            </h2>
            
            <p className="text-on-surface-variant font-body text-base sm:text-lg leading-relaxed">
              Patients eligible under the Ayushman Bharat Scheme can receive treatment here. If you know any child or newborn in need of medical care under the Ayushman Bharat (₹10 Lakh Health Card) scheme, please contact us. We are committed to providing quality pediatric and neonatal healthcare to eligible families.
            </p>
            
            <div className="pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-body text-sm font-bold shadow-md hover:bg-[#004f4f] hover:shadow-lg transition-all active:scale-[0.98] duration-200"
                id="ayushman-contact-btn"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Visual Emblem column (4 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 flex justify-center items-center"
          >
            <div className="relative p-10 bg-[#f7f9fb] rounded-2xl border border-outline-variant/30 flex flex-col items-center text-center max-w-[280px] w-full luxury-shadow">
              {/* Outer decorative ring */}
              <div className="absolute inset-2 border-2 border-dashed border-[#aec7f6]/40 rounded-xl pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-[#d6e3ff] rounded-full flex items-center justify-center mb-4 text-[#002147] shadow-sm">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h4 className="font-display font-extrabold text-sm text-primary uppercase tracking-wider mb-2">
                Eligible Families
              </h4>
              <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                Cashless pediatric &amp; neonatal treatment under the PM-JAY scheme guidelines.
              </p>
              <div className="mt-4 text-[10px] font-bold text-secondary uppercase tracking-widest bg-[#93f2f2]/30 px-3 py-1 rounded-full">
                ₹10 Lakh Card
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
