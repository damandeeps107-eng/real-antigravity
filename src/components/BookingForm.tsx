import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CalendarDays } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10 AM - 1 PM)');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName || !childName || !phone || !date) {
      alert('Please fill in all the required fields.');
      return;
    }

    const message = `Hello Dr. Aamir Dogra, I would like to book a pediatric appointment.

*Appointment Details:*
- *Parent Name:* ${parentName.trim()}
- *Child Name:* ${childName.trim()}
- *Child Age:* ${childAge.trim()}
- *Phone Number:* ${phone.trim()}
- *Preferred Date:* ${date}
- *Preferred Time:* ${time}
- *Reason for Visit:* ${reason.trim() || 'General Consultation'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919877125925?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <section id="booking" className="py-12 md:py-20 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl luxury-shadow overflow-hidden grid lg:grid-cols-5 border border-outline-variant/20"
        >
          {/* Side Banner (2 columns) */}
          <div className="lg:col-span-2 bg-[#002147] p-12 text-white text-left relative flex flex-col justify-between overflow-hidden">
            {/* Visual background element */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-[#90efef] font-body text-xs font-bold uppercase tracking-widest mb-3 block">
                Direct Booking
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Schedule a Consultation
              </h2>
              <p className="text-[#708ab5] font-body text-base mb-10 leading-relaxed">
                Select a preferred date and time for your visit. Our concierge team will confirm your appointment within 30 minutes.
              </p>

              <ul className="space-y-6">
                {[
                  'Priority Appointments for Newborns',
                  'Premium Concierge Check-in',
                  'Digital Prescription Records',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-body text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 relative z-10 border-t border-[#708ab5]/20 pt-6">
              <p className="text-xs text-[#708ab5] font-body">
                *Note: You will be redirected to WhatsApp to confirm your slot with our care assistant.
              </p>
            </div>
          </div>

          {/* Form Content (3 columns) */}
          <div className="lg:col-span-3 p-8 sm:p-12 text-left">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Parent Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e]"
                  placeholder="Full Name"
                  id="parent-name"
                />
              </div>

              {/* Child Name */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Child Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e]"
                  placeholder="First Name"
                  id="child-name"
                />
              </div>

              {/* Child Age */}
              <div>
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Child Age
                </label>
                <input
                  type="text"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e]"
                  placeholder="e.g. 2 Years / 6 Months"
                  id="child-age"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Phone Number <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e]"
                  placeholder="+91 XXXXX XXXXX"
                  id="phone-number"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Preferred Date <span className="text-error">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={getTodayDate()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e]"
                  id="preferred-date"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Preferred Time <span className="text-error">*</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e] appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2374777f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}
                  id="preferred-time"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              {/* Reason for Visit */}
              <div className="col-span-2">
                <label className="block font-body text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Reason for Visit
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm text-[#191c1e] resize-none"
                  placeholder="Brief description of symptoms, vaccination queries, or checkups..."
                  id="reason-for-visit"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary-container text-white py-4 rounded-full font-display font-bold text-base hover:bg-[#003166] transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
                  id="booking-submit-btn"
                >
                  <CalendarDays className="w-5 h-5 text-gold-light" />
                  <span>Confirm Booking via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
