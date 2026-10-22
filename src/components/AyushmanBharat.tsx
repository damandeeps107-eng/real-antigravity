import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Phone, CheckCircle2 } from 'lucide-react';

export const AyushmanBharat: React.FC = () => {
  return (
    <section id="ayushman-bharat" className="py-12 sm:py-16 bg-gradient-to-r from-teal-900 via-primary to-slate-900 text-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-10 lg:p-12 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 text-left space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Government Healthcare Support at Mediways</span>
            </div>
            
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Ayushman Bharat (₹10 Lakh Card) <br />
              <span className="text-teal-300">Treatment Available for Children</span>
            </h2>
            
            <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-2xl">
              Patients eligible under the Ayushman Bharat (PM-JAY) Scheme can receive cashless pediatric and newborn medical treatment at Mediways Hospital, Ludhiana. If you know any family or child in need of treatment under the ₹10 Lakh Health Card, please contact us for immediate hospital assistance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+919877125925"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-7 py-3 rounded-full font-body text-xs font-black shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all active:scale-[0.98] duration-200"
                id="ayushman-contact-btn"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call Helpline: +91 98771 25925</span>
              </a>
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Zero Cost for Eligible Patients
              </span>
            </div>
          </motion.div>

          {/* Badge Showcase Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="p-7 sm:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center text-center max-w-xs w-full shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-amber-300 rounded-2xl flex items-center justify-center mb-4 text-slate-950 shadow-md">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h4 className="font-display font-extrabold text-base text-white mb-1">
                Ayushman PM-JAY
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Cashless pediatric, surgery &amp; neonatal treatment support as per official hospital guidelines.
              </p>
              <div className="text-[11px] font-black text-slate-900 bg-amber-300 px-4 py-1.5 rounded-full shadow-xs">
                UP TO ₹10 LAKH COVERAGE
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
