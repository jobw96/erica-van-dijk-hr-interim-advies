import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "Als feedback op jouw inzet voor Airframe kreeg ik te horen 'a perfect cast'. Vliegtuigonderhoud is een complexe wereld, je hebt je die snel eigen gemaakt. Met de ervaring die je meebracht op vlak van medezeggenschap en bonden wist je heel snel en heel natuurlijk vertrouwen te winnen en heb je een paar stevige dossiers opgelost. Je bent een vakvrouw, professional en heel fijn om mee samen te werken. Vanaf dag 1 paste je naadloos in ons team, je hebt je weg gezocht in onze organisatie en op een hele fijne manier contacten gelegd. Je bent een teamplayer en sparringpartner. Het was top om met jou in een team te zitten.",
    author: "Astrid Elzinga",
    role: "via LinkedIn"
  }
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-satoshi-medium text-gray-500 uppercase tracking-wider mb-4">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl md:text-5xl font-satoshi-black text-gray-900 mb-6 leading-tight tracking-tight">
                Wat ze over mij zeggen
              </h2>
              <p className="text-gray-600 font-satoshi-regular leading-relaxed mb-8">
                Hier is wat ze deelden over hun ervaring met mijn werk.
              </p>

              {/* Yellow Button */}
              <motion.a
                href="/#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-yellow-400 text-black font-satoshi-bold text-sm uppercase px-6 py-3 rounded-md tracking-wide hover:bg-yellow-500 transition-colors"
              >
                OVER MIJ
              </motion.a>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevReview}
                disabled={reviews.length <= 1}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#8E170B] hover:text-[#8E170B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextReview}
                disabled={reviews.length <= 1}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#8E170B] hover:text-[#8E170B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Photo Section */}
              <div className="md:col-span-5 relative h-64 md:h-auto min-h-[400px]">
                <img
                  src="/review-photo.png"
                  alt="Client testimonial"
                  className="w-full h-full object-cover"
                />
                {/* Logo Overlay */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 rounded-lg shadow-lg">
                  <svg className="w-24 h-6" viewBox="0 0 100 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#8E170B" />
                    <text x="28" y="17" className="font-satoshi-bold text-sm" fill="#1F2937">Logoipsum</text>
                  </svg>
                </div>
              </div>

              {/* Review Content */}
              <div className="md:col-span-7 p-8 md:p-12 bg-[#F5F3FF] flex flex-col justify-center">
                <p className="text-gray-800 font-satoshi-regular text-base md:text-lg leading-relaxed mb-8">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  {/* Small Avatar Circle */}
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src="/review-photo.png"
                      alt={reviews[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-satoshi-bold text-gray-900 text-base">
                      {reviews[currentIndex].author}
                    </p>
                    <p className="text-sm text-gray-600 font-satoshi-regular">
                      {reviews[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};