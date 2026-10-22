import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What are the OPD clinic timings?',
      answer: 'General pediatric consultations are available Monday to Saturday from 10:00 AM to 4:00 PM at Mediways Hospital, Ferozepur Road, Ludhiana. For emergency cases, the NICU and pediatric casualty are active 24 hours a day, 7 days a week.',
    },
    {
      id: 2,
      question: 'What is the consultation fee?',
      answer: 'The consultation fee is transparently set at ₹300 per visit. You can choose to pay in cash at the hospital counter or pay online via UPI (Google Pay, PhonePe, Paytm).',
    },
    {
      id: 3,
      question: 'Is Ayushman Bharat (₹10 Lakh Card) accepted?',
      answer: 'Yes! Eligible children and newborns under the Ayushman Bharat PM-JAY scheme can receive cashless medical and hospital treatment at Mediways Hospital. Please bring your valid card during visit.',
    },
    {
      id: 4,
      question: 'How do I book an appointment?',
      answer: 'You can easily book using our 1-click appointment form below, which sends your child details straight to our clinic WhatsApp concierge, or directly call our clinic helpline at +91 98771 25925.',
    },
    {
      id: 5,
      question: 'Do you offer painless child vaccinations?',
      answer: 'Yes, Dr. Dogra uses gentle, comfort-focused distraction techniques and high-grade cold-chain vaccines to ensure minimum discomfort and pain for your child.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="text-left space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 font-body text-xs font-bold px-3 py-1 rounded-full border border-teal-200 mb-2">
          <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
          <span>Got Questions?</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-primary leading-tight">
          Frequently Asked <br />
          <span className="text-teal-700">Questions</span>
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                isOpen 
                  ? 'bg-white border-teal-300 shadow-sm ring-1 ring-teal-500/10' 
                  : 'bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none select-none cursor-pointer"
                aria-expanded={isOpen}
                id={`faq-btn-${faq.id}`}
              >
                <span className="font-display font-bold text-xs sm:text-sm text-primary pr-3">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-teal-600' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-600 font-body text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
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
