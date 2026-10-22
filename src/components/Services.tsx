import React from 'react';
import { motion } from 'framer-motion';
import {
  Baby,
  TrendingUp,
  Syringe,
  Wind,
  Apple,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  features: string[];
  isEmergency?: boolean;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Newborn & NICU Care',
      badge: '0 - 12 Months',
      desc: 'Super-specialist care for newborn babies, premature infants, jaundice management, and early infant screening.',
      icon: <Baby className="w-6 h-6" />,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-700',
      features: ['NICU trained intensivist care', 'Preterm baby follow-up', 'Newborn jaundice treatment'],
    },
    {
      id: 2,
      title: 'Painless Child Vaccination',
      badge: 'All Age Groups',
      desc: 'Comfortable, minimally painful immunization following strict IAP (Indian Academy of Pediatrics) and WHO schedules.',
      icon: <Syringe className="w-6 h-6" />,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
      features: ['100% genuine cold-chain vaccines', 'Pain-relief techniques', 'Vaccination record tracking'],
    },
    {
      id: 3,
      title: 'Growth & Milestones',
      badge: '0 - 18 Years',
      desc: 'Detailed assessment of height, weight, motor skills, speech development, and cognitive milestones for your growing child.',
      icon: <TrendingUp className="w-6 h-6" />,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700',
      features: ['Developmental milestone checks', 'Puberty & adolescent tracking', 'Physical growth charting'],
    },
    {
      id: 4,
      title: 'Asthma & Allergy Relief',
      badge: 'Specialized Care',
      desc: 'Advanced pediatric nebulization, childhood asthma plans, wheezing management, and seasonal allergy treatments.',
      icon: <Wind className="w-6 h-6" />,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-700',
      features: ['Child asthma control plan', 'Inhaler / nebulizer guidance', 'Chronic cough & allergies'],
    },
    {
      id: 5,
      title: 'Nutrition & Diet Planning',
      badge: 'Healthy Habits',
      desc: 'Expert guidance on infant weaning, overcoming picky eating, tackling underweight/obesity, and boosting natural immunity.',
      icon: <Apple className="w-6 h-6" />,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-700',
      features: ['Baby weaning food roadmap', 'Picky eater strategies', 'Vitamin & iron optimization'],
    },
    {
      id: 6,
      title: '24/7 Pediatric Emergency',
      badge: 'Always Available',
      desc: 'Round-the-clock rapid response for high fever spikes, breathing distress, severe dehydration, and trauma at Mediways Hospital.',
      icon: <AlertCircle className="w-6 h-6" />,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-700',
      features: ['Immediate doctor attention', 'Equipped emergency ward', 'Direct hotline: +91 98771 25925'],
      isEmergency: true,
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-teal-200 mb-3">
            <span>🧸</span>
            <span>Comprehensive Pediatric Specialties</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-primary leading-tight mb-4">
            Specialized Medical Care for Every <span className="text-teal-700">Childhood Stage</span>
          </h2>
          <p className="text-slate-600 font-body text-sm sm:text-base leading-relaxed">
            From infancy to teenage years, Dr. Aamir Dogra offers empathetic, evidence-based pediatric treatments designed to keep your child smiling and healthy.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`rounded-3xl p-6 sm:p-7 text-left bg-white border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                service.isEmergency
                  ? 'border-rose-200 shadow-md shadow-rose-600/10 hover:shadow-xl hover:shadow-rose-600/15 ring-2 ring-rose-500/10'
                  : 'border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-200'
              }`}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-13 h-13 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center shadow-xs`}>
                    {service.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                    service.isEmergency 
                      ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                      : 'bg-slate-50 text-slate-600 border border-slate-200'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-primary mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-body text-xs sm:text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-teal-800">
                  {service.isEmergency ? '24/7 Immediate Care' : 'Consultation Fee: ₹300'}
                </span>
                <a
                  href={service.isEmergency ? 'tel:+919877125925' : '#booking'}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    service.isEmergency 
                      ? 'text-rose-600 hover:text-rose-700' 
                      : 'text-teal-700 hover:text-teal-900'
                  }`}
                >
                  <span>{service.isEmergency ? 'Call Helpline' : 'Book Visit'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
