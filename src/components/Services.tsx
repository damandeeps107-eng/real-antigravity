import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Baby,
  HeartHandshake,
  TrendingUp,
  Syringe,
  Thermometer,
  Wind,
  Apple,
  Stethoscope,
  AlertOctagon,
  HeartPulse,
  Users,
  MessageSquareHeart,
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  isEmergency?: boolean;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Newborn Care',
      desc: "Expert care for your infant's first critical months.",
      icon: <Baby className="w-6 h-6 text-secondary" />,
    },
    {
      id: 2,
      title: 'Premature Follow-up',
      desc: 'Specialized tracking for pre-term baby milestones.',
      icon: <HeartHandshake className="w-6 h-6 text-secondary" />,
    },
    {
      id: 3,
      title: 'Growth Monitoring',
      desc: 'Precision tracking of physical and mental growth.',
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    },
    {
      id: 4,
      title: 'Vaccination',
      desc: 'Complete immunization as per global standards.',
      icon: <Syringe className="w-6 h-6 text-secondary" />,
    },
    {
      id: 5,
      title: 'Fever Management',
      desc: 'Rapid diagnosis and treatment of pediatric infections.',
      icon: <Thermometer className="w-6 h-6 text-secondary" />,
    },
    {
      id: 6,
      title: 'Asthma Care',
      desc: 'Comprehensive respiratory health and allergy plans.',
      icon: <Wind className="w-6 h-6 text-secondary" />,
    },
    {
      id: 7,
      title: 'Nutrition Advice',
      desc: 'Scientifically backed dietary planning for kids.',
      icon: <Apple className="w-6 h-6 text-secondary" />,
    },
    {
      id: 8,
      title: 'GI Disorders',
      desc: 'Managing digestive health and metabolism issues.',
      icon: <Stethoscope className="w-6 h-6 text-secondary" />,
    },
    {
      id: 9,
      title: 'Emergencies',
      desc: 'Priority care for acute medical situations.',
      icon: <AlertOctagon className="w-6 h-6 text-error" />,
      isEmergency: true,
    },
    {
      id: 10,
      title: 'Critical Care',
      desc: 'Intensive monitoring and life-support systems.',
      icon: <HeartPulse className="w-6 h-6 text-secondary" />,
    },
    {
      id: 11,
      title: 'Adolescent Health',
      desc: 'Health guidance for the transitional teenage years.',
      icon: <Users className="w-6 h-6 text-secondary" />,
    },
    {
      id: 12,
      title: 'Parenting Counseling',
      desc: 'Support for modern parenting challenges.',
      icon: <MessageSquareHeart className="w-6 h-6 text-secondary" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block"
          >
            Specialties
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl text-primary mb-4"
          >
            Comprehensive Pediatric Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant font-body text-base max-w-2xl mx-auto leading-relaxed"
          >
            From neonatal intensive care to adolescent health counseling, we provide a full spectrum of specialized medical services for your child's growth and wellbeing.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`p-8 rounded-2xl bg-white border luxury-shadow hover:border-secondary/30 luxury-shadow-hover flex flex-col items-start text-left ${
                service.isEmergency
                  ? 'border-error/20 ring-1 ring-error/5 bg-gradient-to-br from-white to-error/[0.01]'
                  : 'border-outline-variant/30'
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.isEmergency
                    ? 'bg-error-container/40'
                    : 'bg-secondary-container/20 group-hover:bg-secondary-container/35'
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-primary mb-2 select-none">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant font-body text-sm leading-relaxed select-none">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
