import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroDesktop from '@/assets/hero-desktop.jpg';
import heroMobile from '@/assets/hero-mobile.jpg';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return <section ref={heroRef} id="home" className="relative w-full h-screen min-h-[100dvh] flex items-center overflow-hidden bg-white">
    {/* Background Image with Parallax - NO OVERLAY, FULLY CLEAR */}
    <motion.div style={{
      y: imageY,
      scale: imageScale
    }} className="absolute inset-0 z-0 will-change-transform">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img src={heroMobile} alt="Erica van Dijk - HR Professional" className="w-full h-full object-cover object-center" />
      </picture>
    </motion.div>

    {/* Subtle Diagonal Red Accent - Top LEFT to Bottom RIGHT */}
    <motion.div initial={{
      clipPath: "polygon(0 0, 0 0, 0 100%)"
    }} animate={{
      clipPath: "polygon(0 0, 35% 0, 0 100%)"
    }} transition={{
      duration: 0.9,
      ease: "easeOut"
    }} className="absolute top-0 left-0 w-full h-full z-[1] bg-gradient-to-br from-[#8E170B] via-[#a91d0e] to-[#8E170B] opacity-50" />

    {/* Main Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full h-full flex flex-col justify-center items-start">
      <div className="space-y-6 md:space-y-8 max-w-3xl">

        {/* Headline - Staggered Fast Animation */}
        <div className="space-y-1 md:space-y-2">
          <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeOut"
          }} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-satoshi-black text-white leading-[1.1] tracking-tighter">
            HR Interim
          </motion.h1>
          <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut"
          }} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-satoshi-black text-white leading-[1.1] tracking-tighter">
            & Advies
          </motion.h1>

        </div>

        {/* Subline - Fast Fade In */}


        {/* CTA Buttons - Spring Animation */}
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.4,
          delay: 0.5,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-flex">
            <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} transition={{
              duration: 0.2
            }} className="bg-white text-[#8E170B] px-5 py-2.5 rounded-md font-satoshi-medium text-sm shadow-md w-full sm:w-auto whitespace-nowrap tracking-wide">
              Neem contact
            </motion.button>
          </Link>
          <Link to="/experience" className="inline-flex">
            <motion.button whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }} whileTap={{
              scale: 0.98
            }} transition={{
              duration: 0.2
            }} className="border border-white/80 text-white px-5 py-2.5 rounded-md font-satoshi-medium text-sm w-full sm:w-auto backdrop-blur-sm whitespace-nowrap tracking-wide">
              Ervaringen
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>;
};