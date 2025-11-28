import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const review = {
  text: "Als feedback op jouw inzet voor Airframe kreeg ik te horen 'a perfect cast'. Vliegtuigonderhoud is een complexe wereld, je hebt je die snel eigen gemaakt. Met de ervaring die je meebracht op vlak van medezeggenschap en bonden wist je heel snel en heel natuurlijk vertrouwen te winnen en heb je een paar stevige dossiers opgelost. Je bent een vakvrouw, professional en heel fijn om mee samen te werken. Vanaf dag 1 paste je naadloos in ons team, je hebt je weg gezocht in onze organisatie en op een hele fijne manier contacten gelegd. Je bent een teamplayer en sparringpartner. Het was top om met jou in een team te zitten.",
  author: "Astrid Elzinga",
  role: "LinkedIn"
};
export const Reviews: React.FC = () => {
  return <section id="reviews" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section - LEFT aligned */}
        <div className="text-left mb-12 md:mb-16">
            <motion.span initial={{
          opacity: 0,
          scale: 0.96,
          y: 6
        }} whileInView={{
          opacity: 1,
          scale: 1,
          y: 0
        }} whileHover={{
          scale: 1.02,
          boxShadow: '0 6px 24px rgba(142, 23, 11, 0.12)'
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.45,
          ease: "easeOut"
        }} className="section-label inline-flex items-center h-[34px] px-7 bg-[#fff5f8] text-[#8E170B] rounded-[50px] mb-4 font-satoshi-medium tracking-[0.1em] uppercase text-xs" style={{
          boxShadow: '0 4px 20px rgba(142, 23, 11, 0.08)'
        }}>
                Reviews
            </motion.span>
            <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-satoshi-black text-[#1F2937] tracking-tight">
                Wat klanten zeggen
            </motion.h2>
        </div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="bg-[#F8F9FA] p-8 md:p-16 rounded-3xl text-center shadow-lg border border-white">
            <div className="flex justify-center mb-6 md:mb-8">
                 <div className="bg-[#8E170B] p-3 rounded-full">
                    <Quote className="text-white w-6 h-6 md:w-8 md:h-8 fill-current" />
                 </div>
            </div>
            <div className="flex gap-1 justify-center mb-6 md:mb-8 text-[#92400E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
            </div>
            <p className="text-lg md:text-2xl text-gray-800 font-satoshi-medium leading-relaxed mb-8 md:mb-10 tracking-wide">
                "{review.text}"
            </p>
            <div>
                <p className="font-satoshi-bold text-lg text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500 mt-1 font-satoshi-regular tracking-wide">{review.role}</p>
            </div>
        </motion.div>

      </div>
    </section>;
};