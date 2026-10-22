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
      name: 'Shweta S.',
      location: 'Civil Lines, Ludhiana',
      rating: 5,
      text: `"Dr. Aamir Dogra's expertise saved our newborn when he was in critical condition in the NICU. His calm demeanor, AIIMS-trained precision, and round-the-clock reassurance gave us immense confidence during our toughest time."`,
    },
    {
      id: 2,
      name: 'Rajat V.',
      location: 'BRS Nagar, Ludhiana',
      rating: 5,
      text: `"Best pediatrician in Ludhiana! He never over-prescribes unnecessary medicines or antibiotics. My 3-year-old daughter actually smiles when visiting him because the clinic has wonderful toys."`,
    },
    {
      id: 3,
      name: 'Gurpreet K.',
      location: 'Model Town, Ludhiana',
      rating: 5,
      text: `"Painless vaccination for my 6-month-old baby! Dr. Dogra was so gentle and distracts the baby with fun sounds. The staff at Mediways Hospital is super helpful and cooperative."`,
    },
  ];

  return (
    <div className="text-left">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-2 block">
            Parent Stories
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight">
            Loved by Parents &amp; Kids
          </h2>
        </div>
        <a
          href="https://maps.google.com/?q=Dr+Aamir+Dogra+Paediatrician,+Mediways+Hospital,+Ludhiana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white border border-outline-variant/40 px-4 py-2 rounded-full font-body text-xs font-bold text-primary hover:border-secondary hover:text-secondary shadow-sm transition-all"
        >
          <span className="text-gold font-bold">★ 4.9/5</span>
          <span>Review on Google</span>
        </a>
      </div>

      <div className="space-y-5">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className={`p-6 sm:p-7 rounded-2xl relative border border-outline-variant/20 luxury-shadow ${
              index === 0 ? 'bg-[#f0f9f9]/60 border-secondary/20' : 'bg-white'
            }`}
          >
            {/* Quote icon background decorator */}
            <Quote className="absolute top-6 right-6 text-secondary/10 w-12 h-12 pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 text-gold mb-3">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-on-surface font-body text-sm sm:text-base italic leading-relaxed mb-4 relative z-10 select-none">
              {item.text}
            </p>

            {/* Parent Info */}
            <div>
              <div className="font-display font-bold text-sm text-primary">{item.name}</div>
              <div className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">
                {item.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
