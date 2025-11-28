import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { SectionBadge } from './ui/SectionBadge';
const reviews = [{
  text: "Als feedback op jouw inzet voor Airframe kreeg ik te horen 'a perfect cast'. Vliegtuigonderhoud is een complexe wereld, je hebt je die snel eigen gemaakt. Met de ervaring die je meebracht op vlak van medezeggenschap en bonden wist je heel snel en heel natuurlijk vertrouwen te winnen en heb je een paar stevige dossiers opgelost. Je bent een vakvrouw, professional en heel fijn om mee samen te werken. Vanaf dag 1 paste je naadloos in ons team, je hebt je weg gezocht in onze organisatie en op een hele fijne manier contacten gelegd. Je bent een teamplayer en sparringpartner. Het was top om met jou in een team te zitten.",
  author: "Astrid Elzinga",
  role: "via LinkedIn"
}];
export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextReview = () => {
    setCurrentIndex(prev => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };
  return <section id="reviews" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Text & Nav */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-xs font-satoshi-bold text-gray-500 uppercase tracking-widest mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl md:text-5xl font-satoshi-black text-gray-900 mb-6 leading-tight tracking-tight">
                Feedback van onze partners
              </h2>
              <p className="text-gray-500 font-satoshi-regular text-sm leading-relaxed mb-8 max-w-xs">
                Lees hoe de samenwerking met mij tot succesvolle HR-oplossingen leidde.
              </p>

              {/* Accent Button */}
              <motion.a href="https://nl.linkedin.com/in/erica-van-dijk-a713506" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-block bg-[#8E170B] text-white font-satoshi-bold text-xs uppercase px-8 py-4 rounded-lg tracking-wider mb-12 hover:bg-[#701209] transition-colors shadow-sm">
                Bekijk
              </motion.a>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <motion.button whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={prevReview} disabled={reviews.length <= 1} className="w-12 h-12 rounded-xl bg-[#F9F9F9] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={nextReview} disabled={reviews.length <= 1} className="w-12 h-12 rounded-xl bg-[#F9F9F9] flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Middle Column: Photo - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-3 h-full min-h-[400px] lg:min-h-[500px]">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="h-full w-full rounded-2xl overflow-hidden relative">
              <img src="/review-photo-new.jpg" alt="Client working" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Right Column: Review Card */}
          <div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-[500px]">
            <motion.div key={currentIndex} initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="h-full bg-[#E0E7FF] rounded-2xl p-8 md:p-12 flex flex-col justify-between relative">
              <p className="text-gray-800 font-satoshi-regular text-lg leading-relaxed mb-8">
                "{reviews[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* LinkedIn Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#0077b5] flex items-center justify-center flex-shrink-0 text-white">
                  <Linkedin size={24} fill="currentColor" strokeWidth={0} />
                </div>

                <div>
                  <p className="font-satoshi-bold text-gray-900 text-base">
                    {reviews[currentIndex].author}
                  </p>
                  <p className="text-sm text-gray-500 font-satoshi-regular">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>;
};