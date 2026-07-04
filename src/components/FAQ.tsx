import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What are the clinic timings?',
      answer: 'The clinic is open for general consultations from 10:00 AM to 4:00 PM, Monday to Saturday. Pediatric emergency care is available 24/7, 7 days a week.',
    },
    {
      id: 2,
      question: 'Do you offer home visits for newborns?',
      answer: 'Yes, specialized home newborn screenings and consultations can be arranged for parents who prefer the comfort of their home during the early weeks.',
    },
    {
      id: 3,
      question: 'Are tele-consultations available?',
      answer: 'We offer video consultations for follow-ups and non-emergency parenting guidance. Please book via the appointment form above.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(1); // default open first item

  return (
    <div className="text-left">
      <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block">
        FAQ
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-10 leading-tight">
        Common Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow transition-shadow"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none select-none"
                aria-expanded={isOpen}
                id={`faq-btn-${faq.id}`}
              >
                <span className="font-display font-bold text-sm text-primary">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-secondary' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10 pt-4 bg-[#f2f4f6]/40">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
