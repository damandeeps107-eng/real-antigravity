import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, Award, CheckCircle2 } from 'lucide-react';
import doctorPortrait from '../assets/doctor-portrait.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative max-w-[320px] sm:max-w-sm mx-auto"
          >
            {/* Glowing Pediatric Accent Rings */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-teal-400/20 via-amber-300/20 to-teal-500/20 rounded-full blur-lg"></div>
            
            {/* Round Portrait Frame */}
            <div className="relative rounded-full aspect-square overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-b from-teal-50 to-white">
              <img
                className="w-full h-full object-cover scale-[1.04] hover:scale-108 transition-transform duration-700 ease-out"
                src={doctorPortrait}
                alt="Dr. Aamir Dogra - Consultant Paediatrician"
              />
            </div>

            {/* Experience Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="absolute -bottom-4 right-2 sm:-bottom-5 sm:right-4 bg-primary text-white py-3 px-5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
            >
              <div className="p-2 bg-amber-400 text-primary rounded-xl font-bold">
                <Award className="w-5 h-5 text-slate-900" />
              </div>
              <div className="text-left">
                <div className="text-xl font-display font-black leading-none text-white">5+ Years</div>
                <div className="text-[10px] text-teal-200 font-bold uppercase tracking-wider mt-0.5">
                  Clinical Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio & Credentials Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 text-left space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-teal-200">
              <span>🩺</span>
              <span>Meet Your Child Specialist</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-primary leading-tight">
              World-Class Pediatric Care with a <span className="text-teal-700">Gentle &amp; Caring Touch</span>
            </h2>

            <p className="text-slate-600 font-body text-base leading-relaxed">
              <strong className="text-primary font-bold">Dr. Aamir Dogra (MBChB, MRCPCH)</strong> is a leading <span className="text-teal-800 font-bold">Consultant Paediatrician</span> and <span className="text-teal-800 font-bold">Newborn Specialist Care Intensivist</span> at Mediways Hospital, Ludhiana. He brings prestigious clinical training from India's foremost medical institutions — <strong className="text-primary font-bold">AIIMS Delhi and PGI Chandigarh</strong>.
            </p>

            <p className="text-slate-600 font-body text-sm leading-relaxed">
              His approach combines elite evidence-based medicine with a loving, fear-free clinic atmosphere. From critical newborn NICU management to developmental milestone checkups, Dr. Dogra is dedicated to giving every child the healthiest, happiest start in life.
            </p>

            {/* Credential Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/70 flex items-start gap-3.5 hover:border-teal-300 transition-colors">
                <div className="p-2.5 bg-teal-100/70 text-teal-800 rounded-xl flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-primary">AIIMS &amp; PGI Trained</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Top-tier clinical pediatric &amp; neonatal training.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/70 flex items-start gap-3.5 hover:border-teal-300 transition-colors">
                <div className="p-2.5 bg-amber-100/70 text-amber-800 rounded-xl flex-shrink-0">
                  <Activity className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-primary">Newborn Intensivist</h4>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 NICU, preterm baby &amp; emergency care.</p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-xs text-slate-700 font-semibold">
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Zero-Fear Clinic Environment
              </span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Transparent ₹300 Consultation Fee
              </span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Ayushman Bharat ₹10 Lakh Accepted
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
