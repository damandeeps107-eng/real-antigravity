import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EmergencyCare } from './components/EmergencyCare';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AyushmanBharat } from './components/AyushmanBharat';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence for a premium experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-body selection:bg-secondary-container/40 selection:text-[#002020] relative flex flex-col justify-between">
      {/* Loader */}
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          {/* Header & Navigation */}
          <Navbar />

          <main className="flex-grow">
            {/* Hero Section */}
            <Hero />

            {/* About Doctor */}
            <About />

            {/* Services (Grid of specialties) */}
            <Services />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Ayushman Bharat Support */}
            <AyushmanBharat />

            {/* Emergency Care (High contrast) */}
            <EmergencyCare />

            {/* Testimonials & FAQ Section */}
            <section className="py-12 md:py-20 bg-white" id="testimonials">
              <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <Testimonials />
                  <FAQ />
                </div>
              </div>
            </section>

            {/* Appointment Booking Form */}
            <BookingForm />

            {/* Contact & Google Maps */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingActions />
        </>
      )}
    </div>
  );
};

export default App;
