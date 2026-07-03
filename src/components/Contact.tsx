import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: 'Clinic Address',
      value: 'Premium Health Centre, Sector 15, Chandigarh, India',
      icon: <MapPin className="w-6 h-6" />,
      link: 'https://maps.google.com/?q=Sector+15,+Chandigarh',
    },
    {
      title: 'Emergency Line',
      value: '+91 98771 25925',
      icon: <Phone className="w-6 h-6" />,
      link: 'tel:+919877125925',
    },
    {
      title: 'Email Support',
      value: 'care@draamirdogra.com',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:care@draamirdogra.com',
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
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-10"
          >
            <div>
              <span className="text-secondary font-body text-xs font-bold uppercase tracking-widest mb-3 block">
                Contact Info
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-on-surface-variant font-body text-base leading-relaxed">
                Visit our flagship clinic for a premium pediatric experience or reach out for specialized newborn consultations.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-6 items-start group select-none"
                >
                  <div className="w-12 h-12 bg-primary-container text-white rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-primary mb-1">
                      {detail.title}
                    </h4>
                    <p className="text-on-surface-variant font-body text-base group-hover:text-secondary transition-colors duration-200">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials & Share Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/draamirdograpaeds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-outline/35 rounded-full flex items-center justify-center text-primary hover:bg-[#000a1e] hover:text-white transition-all duration-300"
                aria-label="Instagram Link"
                id="contact-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={handleShare}
                className="w-11 h-11 border border-outline/35 rounded-full flex items-center justify-center text-primary hover:bg-[#000a1e] hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Share Website"
                id="contact-share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden luxury-shadow border border-outline-variant/30 h-[400px] relative group"
          >
            {/* Real Interactive Google Map */}
            <iframe
              title="Dr. Aamir Dogra Pediatric Clinic Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13718.397034731671!2d76.7645167!3d30.757912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed19875c7423%3A0xe54d8961be49386!2sSector%2015%2C%20Chandigarh%2C%20160015!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-110 group-hover:scale-102 transition-transform duration-700 ease-out"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
