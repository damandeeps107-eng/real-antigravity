import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CalendarDays, Sparkles, X } from 'lucide-react';
import upiQr from '../assets/upi-qr.jpg';

export const BookingForm: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10 AM - 1 PM)');
  const [reason, setReason] = useState('');
  const [paymentMode, setPaymentMode] = useState<'clinic' | 'upi'>('clinic');
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

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
- *Reason for Visit:* ${reason.trim() || 'General Consultation'}
- *Payment Preference:* ${paymentMode === 'clinic' ? 'Pay at Clinic (₹300)' : 'Online UPI Advance (₹300)'}`;

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
    <section id="booking" className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-12 border border-slate-100"
        >
          {/* Side Info Banner (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b2545] via-[#0f3460] to-[#0b2545] p-8 sm:p-10 text-white text-left relative flex flex-col justify-between overflow-hidden">
            {/* Visual background lights */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-teal-400/20 text-teal-300 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-teal-400/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct OPD Booking</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 leading-tight">
                Schedule a Clinic Consultation
              </h2>
              <p className="text-slate-300 font-body text-xs sm:text-sm mb-6 leading-relaxed">
                Choose a convenient date &amp; time. Your appointment details will be formatted directly for our clinic WhatsApp concierge for fast confirmation.
              </p>

              {/* Consultation Fee Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 mb-6 text-left">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-display font-extrabold text-xs text-amber-300 uppercase tracking-wider">
                    OPD Consultation Fee
                  </h4>
                  <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                    ₹300
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <div 
                    className="w-16 h-16 rounded-xl overflow-hidden border border-white/30 bg-white p-1 flex-shrink-0 cursor-zoom-in group relative shadow-md" 
                    onClick={() => setIsPayModalOpen(true)}
                  >
                    <img src={upiQr} alt="UPI QR Code" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[9px] text-white font-bold">
                      ZOOM
                    </div>
                  </div>
                  <div className="flex-grow space-y-1">
                    <p className="text-white text-xs font-bold">Pay ₹300 via UPI or Cash</p>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">UPI ID (Tap to Pay)</p>
                    <a 
                      href="upi://pay?pa=9877125925@ptsbi&pn=Dr%20Aamir%20Dogra&cu=INR&am=300"
                      className="flex items-center justify-between gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 hover:border-teal-400 transition-colors group/link cursor-pointer"
                    >
                      <span className="text-white font-mono text-[11px] font-bold">9877125925@ptsbi</span>
                      <span className="text-[9px] text-teal-300 font-bold uppercase group-hover/link:underline">Pay</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust highlights */}
              <ul className="space-y-3">
                {[
                  'Priority Scheduling for Infants & Newborns',
                  'Zero Waiting with Pre-Booked Slot',
                  'Warm, Fear-Free Examination',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 relative z-10 text-[11px] text-slate-400">
              *Mediways Hospital, Ferozepur Road, Ludhiana.
            </div>
          </div>

          {/* Form Content (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 text-left">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Parent Name */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Parent Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  placeholder="e.g. Gurpreet Singh"
                  id="parent-name"
                />
              </div>

              {/* Child Name */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Child Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  placeholder="Child's Full Name"
                  id="child-name"
                />
              </div>

              {/* Child Age */}
              <div>
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Child Age
                </label>
                <input
                  type="text"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  placeholder="e.g. 2 Years / 4 Months"
                  id="child-age"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  placeholder="+91 98771 25925"
                  id="phone-number"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={getTodayDate()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  id="preferred-date"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot <span className="text-rose-500">*</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800"
                  id="preferred-time"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                </select>
              </div>

              {/* Reason for Visit */}
              <div className="col-span-2">
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Reason for Visit
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm text-slate-800 resize-none"
                  placeholder="e.g. Vaccination, fever, growth checkup, newborn screening..."
                  id="reason-for-visit"
                />
              </div>

              {/* Payment Mode Toggle */}
              <div className="col-span-2 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Payment Option (Fee: ₹300)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMode === 'clinic' 
                      ? 'border-teal-500 bg-white shadow-xs ring-2 ring-teal-500/10' 
                      : 'border-slate-200 hover:bg-white'
                  }`}>
                    <input 
                      type="radio" 
                      name="paymentMode" 
                      checked={paymentMode === 'clinic'} 
                      onChange={() => setPaymentMode('clinic')}
                      className="accent-teal-600"
                    />
                    <div className="text-left">
                      <div className="font-body text-xs font-bold text-primary">Pay at Clinic (₹300)</div>
                      <div className="text-[10px] text-slate-500">Pay in Cash or UPI at hospital counter</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMode === 'upi' 
                      ? 'border-teal-500 bg-white shadow-xs ring-2 ring-teal-500/10' 
                      : 'border-slate-200 hover:bg-white'
                  }`}>
                    <input 
                      type="radio" 
                      name="paymentMode" 
                      checked={paymentMode === 'upi'} 
                      onChange={() => setPaymentMode('upi')}
                      className="accent-teal-600"
                    />
                    <div className="text-left">
                      <div className="font-body text-xs font-bold text-primary">Pay Online via UPI</div>
                      <div className="text-[10px] text-slate-500">Fast QR / 9877125925@ptsbi</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-4 rounded-full font-display font-black text-sm sm:text-base hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-emerald-700/20 cursor-pointer"
                  id="booking-submit-btn"
                >
                  <CalendarDays className="w-5 h-5 text-amber-200" />
                  <span>Confirm on WhatsApp (Instant Slot)</span>
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                  Direct WhatsApp redirection &bull; Quick confirmation by clinic team
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* QR Code Lightbox Modal */}
      {isPayModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4" onClick={() => setIsPayModalOpen(false)}>
          <div className="relative max-w-sm w-full bg-white rounded-3xl p-6 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsPayModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display font-extrabold text-lg text-primary mb-1">Dr. Aamir Dogra</h3>
            <p className="text-xs font-bold text-teal-700 font-body mb-3">Consultation Fee: ₹300</p>
            <div className="max-w-[240px] mx-auto rounded-2xl border border-slate-200 overflow-hidden p-2 bg-slate-50 mb-4 shadow-inner">
              <img src={upiQr} alt="UPI QR Code Full" className="w-full h-auto" />
            </div>
            <a 
              href="upi://pay?pa=9877125925@ptsbi&pn=Dr%20Aamir%20Dogra&cu=INR&am=300"
              className="block text-xs font-mono font-bold text-slate-900 bg-amber-50 hover:bg-amber-100 py-2.5 rounded-xl border border-amber-200 transition-colors cursor-pointer"
            >
              9877125925@ptsbi (Pay ₹300)
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
