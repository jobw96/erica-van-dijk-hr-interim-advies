import React from 'react';
import { motion } from 'framer-motion';
import bungelogo from '@/assets/bunge_logo.png';
import dirklogo from '@/assets/dirk_logo.png';
import heinekenlogo from '@/assets/heineken_logo.png';
import klmlogo from '@/assets/klm_logo.png';

const logos = [
  { name: "Bunge", image: bungelogo },
  { name: "Dirk", image: dirklogo },
  { name: "Heineken", image: heinekenlogo },
  { name: "KLM", image: klmlogo }
];

export const ClientLogos: React.FC<{ className?: string }> = ({ className = "py-12 md:py-16 bg-white" }) => {
  return (
    <section className={`${className} overflow-hidden relative`} aria-label="Klanten waar ik voor gewerkt heb">
      {/* Full-width fade gradients at screen edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="flex gap-12 md:gap-16">
            {[1, 2, 3].map((set) => (
              <motion.div
                key={set}
                className="flex gap-12 md:gap-16 shrink-0"
                animate={{ x: [0, -100 + '%'] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
                }}
              >
                {logos.map((logo) => (
                  <div
                    key={`${set}-${logo.name}`}
                    className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logo.image}
                      alt={`${logo.name} logo - voormalige klant`}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
