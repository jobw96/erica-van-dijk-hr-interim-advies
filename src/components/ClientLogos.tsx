import React from 'react';
import { motion } from 'framer-motion';
import bungelogo from '@/assets/bunge_logo.png';
import dirklogo from '@/assets/dirk_logo.png';
import heinekenlogo from '@/assets/heineken_logo.png';
import klmlogo from '@/assets/klm_logo.png';
const logos = [{
  name: "Bunge",
  image: bungelogo
}, {
  name: "Dirk",
  image: dirklogo
}, {
  name: "Heineken",
  image: heinekenlogo
}, {
  name: "KLM",
  image: klmlogo
}];
export const ClientLogos: React.FC<{ className?: string }> = ({ className = "py-12 md:py-16 bg-white" }) => {
  return <section className={`${className} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-8">
          
        </motion.div>
        
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-12 md:gap-16">
            {/* First set of logos */}
            <motion.div className="flex gap-12 md:gap-16 shrink-0" animate={{
            x: [0, -100 + '%']
          }} transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}>
              {logos.map(logo => <div key={`first-${logo.name}`} className="flex items-center justify-center grayscale-[30%] hover:grayscale-0 transition-all duration-300">
                  <img src={logo.image} alt={logo.name} className="h-12 w-auto object-contain" />
                </div>)}
            </motion.div>
            
            {/* Duplicate set for seamless loop */}
            <motion.div className="flex gap-12 md:gap-16 shrink-0" animate={{
            x: [0, -100 + '%']
          }} transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}>
              {logos.map(logo => <div key={`second-${logo.name}`} className="flex items-center justify-center grayscale-[30%] hover:grayscale-0 transition-all duration-300">
                  <img src={logo.image} alt={logo.name} className="h-12 w-auto object-contain" />
                </div>)}
            </motion.div>
            
            {/* Third set for seamless loop */}
            <motion.div className="flex gap-12 md:gap-16 shrink-0" animate={{
            x: [0, -100 + '%']
          }} transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}>
              {logos.map(logo => <div key={`third-${logo.name}`} className="flex items-center justify-center grayscale-[30%] hover:grayscale-0 transition-all duration-300">
                  <img src={logo.image} alt={logo.name} className="h-12 w-auto object-contain" />
                </div>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};