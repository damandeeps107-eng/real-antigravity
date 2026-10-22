import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Smile, Award, Sparkles } from 'lucide-react';
import clinicPlayroom from '../assets/clinic-playroom.jpg';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Warm, Fear-Free Environment',
      desc: 'Our colorful playroom, sensory toys, and calm examination spaces make doctor visits joyful, comforting, and anxiety-free for children.',
      icon: <Smile className="w-6 h-6 text-amber-600" />,
      bg: 'bg-amber-100/70',
      border: 'border-amber-200',
    },
    {
      title: 'AIIMS & PGI Specialized Pedigree',
      desc: 'Super-specialist neonatal intensive care (NICU) expertise from India’s top medical institutions, trusted by thousands of Ludhiana parents.',
      icon: <Award className="w-6 h-6 text-teal-700" />,
      bg: 'bg-teal-100/70',
      border: 'border-teal-200',
    },
    {
      title: 'Painless Gentle Vaccination',
      desc: 'Comfort-focused immunization techniques minimizing pain and tears, following strict IAP (Indian Academy of Pediatrics) safety guidelines.',
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      bg: 'bg-rose-100/70',
      border: 'border-rose-200',
    },
    {
      title: '24/7 Newborn & Pediatric Emergency',
      desc: 'Round-the-clock availability for high fever spikes, breathing distress, and acute neonatal life support at Mediways Hospital.',
      icon: <Clock className="w-6 h-6 text-sky-700" />,
      bg: 'bg-sky-100/70',
      border: 'border-sky-200',
    },
  ];

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Points list (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-teal-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Why Ludhiana Parents Trust Dr. Dogra</span>
            </div>
            
            <h2 className="font-display font-black text-2xl sm:text-4xl text-primary mb-4 leading-tight">
              A Loving, Gentle Touch for <br className="hidden sm:inline" />
              <span className="text-teal-700">Every Single Milestone</span>
            </h2>
            <p className="text-slate-600 font-body text-sm sm:text-base leading-relaxed mb-8">
              We understand that seeing your child unwell is difficult. Our clinic is thoughtfully engineered to eliminate fear, ensure transparent diagnosis, and deliver compassionate treatment.
            </p>

            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-4 sm:gap-5 items-start p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${point.bg} border ${point.border} flex items-center justify-center shadow-xs`}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-primary mb-1">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 font-body text-xs sm:text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Picture Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Soft Ambient Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/20 to-teal-300/20 rounded-3xl blur-xl -z-10"></div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] group bg-slate-100">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={clinicPlayroom}
                alt="Dr. Aamir Dogra Pediatric Outpatient Play & Waiting Lounge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-left p-2">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                  Mediways Hospital, Ludhiana
                </span>
                <span className="font-display font-black text-base sm:text-lg">
                  Child-Friendly Waiting &amp; Play Zone
                </span>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-3 -right-3 bg-white py-2 px-3.5 rounded-full shadow-lg border border-amber-200 flex items-center gap-1.5 text-xs font-bold text-amber-800">
              <span>🧸</span>
              <span>100% Fear-Free Clinic</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
