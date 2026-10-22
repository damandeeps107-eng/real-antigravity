import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Share2, Clock } from 'lucide-react';
import clinicPlayroom from '../assets/clinic-playroom.jpg';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: 'Clinic Address',
      value: 'Dr Aamir Dogra Paediatrician, Mediways Hospital, Ferozepur Road, Preet Nagar, Ludhiana, Punjab 142027, India',
      icon: <MapPin className="w-5 h-5 text-gold-light" />,
      link: 'https://maps.google.com/?q=Dr+Aamir+Dogra+Paediatrician,+Mediways+Hospital,+Ludhiana',
    },
    {
      title: 'Clinic Hours',
      value: 'Mon - Sat: 10:00 AM - 4:00 PM (Emergency: 24/7)',
      icon: <Clock className="w-5 h-5 text-gold-light" />,
      link: '#booking',
    },
    {
      title: 'Emergency Line',
      value: '+91 98771 25925',
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      link: 'tel:+919877125925',
    },
    {
      title: 'Email Support',
      value: 'care@draamirdogra.com',
      icon: <Mail className="w-5 h-5 text-[#90efef]" />,
      link: 'mailto:care@draamirdogra.com',
    },
    {
      title: 'Instagram Handle',
      value: '@draamirdograpaeds',
      icon: <Instagram className="w-5 h-5 text-[#ff80bf]" />,
      link: 'https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr',
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dr. Aamir Dogra Paediatrics',
        text: 'Elite Pediatric & Newborn Care Specialist',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#00142e] text-white">
      {/* Background Image with Rich Visible Pediatric Clinic Playroom & Ambient Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={clinicPlayroom}
          alt="Mediways Hospital Pediatric Outpatient Care"
          className="w-full h-full object-cover object-center filter brightness-[0.55] saturate-[1.25] scale-105"
        />
        {/* Soft, warm ambient gradients so the playroom is clearly visible while keeping text ultra-readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142e]/95 via-[#00142e]/82 to-[#00142e]/75 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00142e] via-transparent to-[#00142e]/80 z-10"></div>
        {/* Soft atmospheric ambient glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-8"
          >
            <div>
              <span className="text-gold-light font-body text-xs font-bold uppercase tracking-widest mb-3 block">
                Contact &amp; Location
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
                Visit Our Pediatric Clinic
              </h2>
              <p className="text-[#a0b5d5] font-body text-base leading-relaxed max-w-lg">
                Conveniently located at Mediways Hospital, Ferozepur Road, Ludhiana. Available for daytime consultations and round-the-clock newborn emergency care.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-4 items-start p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group select-none backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 border border-white/15">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-gold-light mb-0.5">
                      {detail.title}
                    </h4>
                    <p className="text-[#e2e8f0] font-body text-sm group-hover:text-white transition-colors duration-200">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials & Share Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/draamirdograpaeds?igsh=MXNlbGdtdGY0MG4yMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-body text-xs font-bold transition-all duration-300 shadow-sm"
                aria-label="Instagram Link"
                id="contact-instagram"
              >
                <Instagram className="w-4 h-4 text-[#ff80bf]" />
                <span>Follow on Instagram</span>
              </a>
              <button
                onClick={handleShare}
                className="w-10 h-10 border border-white/20 bg-white/5 hover:bg-white/15 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                aria-label="Share Website"
                id="contact-share"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 h-[420px] relative group bg-[#000e21]"
          >
            {/* Real Interactive Google Map */}
            <iframe
              title="Dr. Aamir Dogra Pediatric Clinic Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8340476059965!2d75.79513077555364!3d30.8974950796328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830af608144b%3A0x678b87d159049a18!2sMediways%20Hospital!5e0!3m2!1sen!2sin!4v1719900000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-105 group-hover:scale-102 transition-transform duration-700 ease-out"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
