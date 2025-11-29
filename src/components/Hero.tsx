import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/typing-text';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showAdvies, setShowAdvies] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return <section ref={heroRef} id="home" className="relative w-full h-screen min-h-[100dvh] flex items-center overflow-hidden bg-white">
    {/* Background Image with Parallax */}
    <motion.div 
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        y: imageY,
        scale: imageScale
      }} 
      className="absolute inset-0 z-0 will-change-transform"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="/hero-desktop-new.png" />
        <img src="/hero-mobile-new.png" alt="Erica van Dijk - HR Professional" className="w-full h-full object-cover object-center" />
      </picture>
    </motion.div>

    {/* Main Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full h-full flex flex-col justify-center items-start">
      <div className="space-y-6 md:space-y-8 max-w-3xl">

        {/* Headline - Staggered Animation */}
        <div className="space-y-1 md:space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setShowAdvies(true)}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]"
          >
            HR Interim
          </motion.h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] min-h-[1.1em]">
            {showAdvies ? (
              <TypingText 
                text="& Advies" 
                delay={0.04}
                cursor={false}
                onComplete={() => setShowButtons(true)}
              />
            ) : (
              <span className="invisible">& Advies</span>
            )}
          </h1>
        </div>

        {/* CTA Buttons - Spring Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={showButtons ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }} 
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
            <Button asChild className="h-11 px-7 text-base bg-white text-[#8E170B] hover:bg-gray-100 hover:text-[#8E170B] border border-white shadow-lg hover:shadow-xl rounded-xl">
              <Link to="/contact">
                Neem contact
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
            <Button asChild variant="outline" className="h-11 px-7 text-base border border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm bg-transparent rounded-xl">
              <Link to="/experience">
                Ervaringen
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};