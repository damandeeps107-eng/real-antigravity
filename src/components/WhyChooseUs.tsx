import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: '24/7 Availability',
      desc: "Round-the-clock availability for critical consultations and emergencies because your child's health doesn't follow a schedule.",
      icon: <Clock className="w-7 h-7 text-secondary" />,
    },
    {
      title: 'Specialist Care',
      desc: 'Elite neonatal intensivist expertise gained from India’s top-ranking medical institutions (AIIMS & PGI).',
      icon: <ShieldAlert className="w-7 h-7 text-secondary" />,
    },
    {
      title: 'Child-Friendly Environment',
      desc: 'A warm, luxury clinic setting designed to minimize anxiety for children and provide a calm space for parents.',
      icon: <Heart className="w-7 h-7 text-secondary" />,
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
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8 leading-tight">
              Elevating the Standard of Pediatric Care
            </h2>

            <div className="space-y-8">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-6 items-start"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-14 h-14 bg-[#f7f9fb] rounded-2xl flex items-center justify-center luxury-shadow border border-outline-variant/10">
                    {point.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-display font-bold text-lg text-primary mb-2">
                      {point.title}
                    </h4>
                    <p className="text-on-surface-variant font-body text-base leading-relaxed">
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
            <div className="rounded-2xl overflow-hidden luxury-shadow border border-outline-variant/20 relative group aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfxwFKMP5KuwRUntf_URDL-9-VhNssHbLe-wgFi7xRSHtOl9PelSHkAGQp0FZQVkuYfHlHZ2kkxIzx-S7h7w8VKUulzthF6pkEqbjlik3hbElTQ7-BaXf64QjAd8drWc0Yw9uoc42V5Btxt2VY3oTLlHitMpmn6N67TtPIPIjLVnFyzn6HqXS-fsh1lCGWfg-S4-SPCN_1ZGuHZC0WyCwvBrmh_6mjgOuCAVwN34_jdZgj0K3OTyrdrZAK9B2LVtwcYkjmA-GrM50a"
                alt="Elite Pediatric Clinic Examination Room"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            {/* Float badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 bg-secondary text-white font-body text-xs font-bold px-5 py-3 rounded-xl luxury-shadow border border-secondary-container/20 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
              <span>Premium Child-Centric Facility</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
