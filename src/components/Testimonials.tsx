import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: 'Mrs. Shweta Singh',
      location: 'Ludhiana',
      rating: 5,
      text: `"Dr. Dogra's expertise saved our newborn when he was in critical condition. His calm demeanor and AIIMS-trained precision gave us the confidence we needed during a terrifying time."`,
    },
    {
      id: 2,
      name: 'Dr. Rajat Verma',
      location: 'Ludhiana',
      rating: 5,
      text: `"The best pediatrician in the city. He doesn't over-prescribe medicines and explains everything so clearly. The clinic environment is also very high-end and clean."`,
    },
  ];

  return (
    <div className="text-left">
      <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block">
        Testimonials
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-10 leading-tight">
        Parent Testimonials
      </h2>

      <div className="space-y-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className={`p-8 rounded-2xl relative border border-outline-variant/20 luxury-shadow ${
              index === 0 ? 'bg-[#f2f4f6]' : 'bg-white'
            }`}
          >
            {/* Quote icon background decorator */}
            <Quote className="absolute top-8 right-8 text-secondary/10 w-16 h-16 pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 text-gold mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-on-surface font-body text-base italic leading-relaxed mb-6 relative z-10 select-none">
              {item.text}
            </p>

            {/* Parent Info */}
            <div>
              <div className="font-display font-bold text-sm text-primary">{item.name}</div>
              <div className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">
                {item.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
