import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Smile, Sparkles, Award } from 'lucide-react';
import clinicPlayroom from '../assets/clinic-playroom.jpg';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Warm, Fear-Free Environment',
      desc: 'Our colorful playroom, sensory toys, and calm examination rooms make clinic visits fun and anxiety-free for children.',
      icon: <Smile className="w-7 h-7 text-secondary" />,
    },
    {
      title: 'AIIMS & PGI Specialized Expertise',
      desc: 'Super-specialist neonatal intensive care (NICU) expertise from India’s top medical institutions, trusted by thousands of parents.',
      icon: <Award className="w-7 h-7 text-secondary" />,
    },
    {
      title: 'Painless Gentle Vaccination',
      desc: 'Comfort-focused immunization techniques minimizing pain and tears, following strict IAP and international safety guidelines.',
      icon: <Heart className="w-7 h-7 text-secondary" />,
    },
    {
      title: '24/7 Newborn & Pediatric Emergency',
      desc: "Round-the-clock availability for critical pediatric emergencies, fever spikes, and urgent newborn care at Mediways Hospital.",
      icon: <Clock className="w-7 h-7 text-secondary" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Points list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block">
              Why Parents Trust Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8 leading-tight">
              A Gentle Touch for Every Milestone
            </h2>

            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-5 items-start p-3 rounded-2xl hover:bg-[#f7f9fb] transition-colors"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-13 h-13 bg-secondary-container/20 rounded-2xl flex items-center justify-center border border-secondary/10">
                    {point.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-display font-bold text-base md:text-lg text-primary mb-1">
                      {point.title}
                    </h4>
                    <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Picture Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden luxury-shadow border-2 border-white relative group aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={clinicPlayroom}
                alt="Dr. Aamir Dogra Pediatric Outpatient Play & Waiting Lounge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-left p-2">
                <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider block">Mediways Hospital, Ludhiana</span>
                <span className="font-display font-bold text-base">Child-Friendly Waiting &amp; Play Zone</span>
              </div>
            </div>

            {/* Float badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-white text-primary font-body text-xs font-bold px-4 py-2.5 rounded-2xl luxury-shadow border border-secondary/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Zero Tears Clinic Policy</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
