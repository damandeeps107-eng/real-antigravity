import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Share2, Clock, Sparkles } from 'lucide-react';
import clinicPlayroom from '../assets/clinic-playroom.jpg';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: 'Clinic & Hospital Location',
      value: 'Dr. Aamir Dogra Paediatrician, Mediways Hospital, Ferozepur Road, Preet Nagar, Ludhiana, Punjab 142027, India',
      icon: <MapPin className="w-5 h-5 text-amber-300" />,
      link: 'https://maps.google.com/?q=Dr+Aamir+Dogra+Paediatrician,+Mediways+Hospital,+Ludhiana',
    },
    {
      title: 'OPD Consultation Hours',
      value: 'Monday – Saturday: 10:00 AM – 4:00 PM (24/7 NICU Emergency)',
      icon: <Clock className="w-5 h-5 text-teal-300" />,
      link: '#booking',
    },
    {
      title: '24/7 Emergency Helpline',
      value: '+91 98771 25925 (Immediate Doctor Attention)',
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      link: 'tel:+919877125925',
    },
    {
      title: 'Official Email Support',
      value: 'aamirdogra964737@gmail.com',
      icon: <Mail className="w-5 h-5 text-sky-300" />,
      link: 'mailto:aamirdogra964737@gmail.com',
    },
    {
      title: 'Instagram Handle',
      value: '@draamirdograpaeds',
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      link: 'https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr',
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dr. Aamir Dogra Paediatrics',
        text: 'Consultant Paediatrician & Newborn Specialist at Mediways Hospital, Ludhiana',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Clinic website link copied to clipboard!');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden bg-[#07192f] text-white">
      {/* Background Image: Visible Warm Playroom with Rich Ambient Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={clinicPlayroom}
          alt="Mediways Hospital Pediatric Outpatient Care"
          className="w-full h-full object-cover object-center filter brightness-[0.52] saturate-[1.3] scale-105"
        />
        {/* Soft, warm ambient gradients so the playroom is clearly visible while keeping text ultra-readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192f]/96 via-[#07192f]/88 to-[#07192f]/78 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192f] via-transparent to-[#07192f]/85 z-10"></div>
        {/* Atmospheric Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Details Column (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 font-body text-xs font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Our Clinic</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-3 leading-tight">
                Mediways Hospital, Ludhiana
              </h2>
              <p className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed max-w-lg">
                Centrally located on Ferozepur Road with full hospital infrastructure, dedicated neonatal ICU (NICU), child diagnostics, and round-the-clock emergency support.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-3">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-3.5 items-start p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-teal-400/50 transition-all duration-200 group select-none backdrop-blur-md"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 border border-white/20">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-amber-300 mb-0.5">
                      {detail.title}
                    </h4>
                    <p className="text-slate-100 font-body text-xs sm:text-sm group-hover:text-white transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials & Share */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-body text-xs font-bold transition-all"
                aria-label="Instagram Link"
                id="contact-instagram"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Follow @draamirdograpaeds</span>
              </a>
              <button
                onClick={handleShare}
                className="w-10 h-10 border border-white/20 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Share Website"
                id="contact-share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Interactive Map Column (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 h-[380px] sm:h-[420px] relative group bg-[#06182d]"
          >
            <iframe
              title="Dr. Aamir Dogra Pediatric Clinic Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8340476059965!2d75.79513077555364!3d30.8974950796328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830af608144b%3A0x678b87d159049a18!2sMediways%20Hospital!5e0!3m2!1sen!2sin!4v1719900000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-105"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
