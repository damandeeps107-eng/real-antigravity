import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialItem {
  id: number;
  name: string;
  relation: string;
  location: string;
  rating: number;
  text: string;
  avatarBg: string;
  avatarText: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: 'Shweta S.',
      relation: 'Mother of 3-month-old Kabir',
      location: 'Civil Lines, Ludhiana',
      rating: 5,
      text: "Dr. Aamir Dogra's neonatal expertise saved our pre-term baby when he was in critical condition in the NICU. His calm demeanor, AIIMS-trained precision, and 24/7 reassurance gave our family immense strength during our toughest time.",
      avatarBg: 'bg-teal-100 text-teal-800',
      avatarText: 'SS',
    },
    {
      id: 2,
      name: 'Rajat V.',
      relation: 'Father of 3-year-old Ananya',
      location: 'BRS Nagar, Ludhiana',
      rating: 5,
      text: "Hands down the best pediatrician in Ludhiana! He never over-prescribes unnecessary antibiotics or medicines. My daughter actually smiles when visiting because the clinic waiting area has wonderful toys and zero fear.",
      avatarBg: 'bg-amber-100 text-amber-800',
      avatarText: 'RV',
    },
    {
      id: 3,
      name: 'Gurpreet K.',
      relation: 'Mother of 7-month-old Simar',
      location: 'Model Town, Ludhiana',
      rating: 5,
      text: "Painless vaccination for my infant! Dr. Dogra was so gentle and engaged the baby with fun sounds. The consultation was thorough, unhurried, and fee of ₹300 is genuinely affordable for such elite care.",
      avatarBg: 'bg-rose-100 text-rose-800',
      avatarText: 'GK',
    },
  ];

  return (
    <div className="text-left space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 font-body text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>5.0 Star Parent Reviews</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-primary leading-tight">
            Loved by Parents, <br />
            <span className="text-teal-700">Adored by Kids</span>
          </h2>
        </div>
        <a
          href="https://maps.google.com/?q=Dr+Aamir+Dogra+Paediatrician,+Mediways+Hospital,+Ludhiana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 px-4 py-2 rounded-full font-body text-xs font-bold text-primary shadow-xs transition-all self-start sm:self-auto"
        >
          <span className="text-amber-500 font-bold">★ 4.9/5</span>
          <span>Review on Google</span>
        </a>
      </div>

      <div className="space-y-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all duration-300 relative group"
          >
            <Quote className="absolute top-5 right-5 text-teal-600/10 w-10 h-10 pointer-events-none group-hover:scale-110 transition-transform" />

            {/* Stars */}
            <div className="flex gap-1 text-amber-400 mb-3">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-700 font-body text-xs sm:text-sm leading-relaxed mb-4 italic">
              "{item.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
              <div className={`w-9 h-9 rounded-full ${item.avatarBg} font-display font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs`}>
                {item.avatarText}
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xs text-primary leading-tight">
                  {item.name}
                </h4>
                <p className="text-[11px] text-teal-800 font-semibold mt-0.5">
                  {item.relation} &bull; <span className="text-slate-500">{item.location}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
