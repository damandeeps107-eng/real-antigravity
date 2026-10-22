import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, Award } from 'lucide-react';
import doctorPortrait from '../assets/doctor-portrait.jpg';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative max-w-[280px] sm:max-w-sm md:max-w-none mx-auto mb-10 md:mb-0"
          >
            {/* Design accents */}
            <div className="absolute -top-3 -left-3 w-32 h-32 bg-secondary/15 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-3 -right-3 w-36 h-36 bg-[#ffe088]/30 rounded-full blur-xl -z-10"></div>
            
            <div className="rounded-full overflow-hidden luxury-shadow aspect-square relative group border-4 border-white shadow-2xl max-w-[340px] sm:max-w-[380px] mx-auto bg-white">
              <img
                className="w-full h-full object-cover scale-[1.03] group-hover:scale-108 transition-transform duration-700 ease-out"
                src={doctorPortrait}
                alt="Dr. Aamir Dogra portrait"
              />
              <div className="absolute inset-0 bg-primary-container/5 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            {/* Float Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl luxury-shadow hidden sm:block border border-[#2d476f]/30"
            >
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <div className="text-left">
                  <div className="text-2xl font-display font-extrabold text-white leading-none">5+</div>
                  <div className="font-body text-[10px] text-on-primary-container/80 font-bold uppercase tracking-widest mt-1">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Description Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block">
              Meet The Doctor
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
              World-Class Expertise in Child Healthcare
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">
              Dr. Aamir Dogra <span className="text-secondary font-bold text-sm">(MBChB, MRCPCH)</span> is a distinguished <span className="text-primary font-semibold">Consultant Paediatrician</span> and <span className="text-primary font-semibold">Newborn Specialist Care Intensivist</span>, bringing elite clinical training from India's premier medical institutions — <span className="text-secondary font-bold">AIIMS Delhi and PGI Chandigarh</span>.
            </p>
            <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8">
              His approach combines international clinical excellence with a warm, child-centric philosophy. He specializes in neonatal intensive care (NICU), premature infant tracking, and routine pediatric illnesses, ensuring every child receives comforting, zero-fear medical attention.
            </p>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-outline-variant/30 luxury-shadow flex items-start gap-3.5 hover:border-secondary/40 transition-colors duration-300">
                <div className="p-2 bg-secondary-container/20 rounded-lg text-secondary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm text-primary">AIIMS &amp; PGI Alumni</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Top-tier clinical training in child health.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-outline-variant/30 luxury-shadow flex items-start gap-3.5 hover:border-secondary/40 transition-colors duration-300">
                <div className="p-2 bg-secondary-container/20 rounded-lg text-secondary">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm text-primary">Newborn Intensivist</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">NICU &amp; critical neonatal life support.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
