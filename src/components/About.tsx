import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
export const About: React.FC = () => {
  return <section id="about" className="bg-[#E8EDEA] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#333333]" />
          <span className="text-sm font-ginto-regular uppercase tracking-wider text-[#333333]">
            Over Mij
          </span>
        </motion.div>

        {/* Two Column Grid - Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Brief intro */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            <h2 className="text-4xl lg:text-5xl leading-tight text-[#333333] mb-6 font-ginto-bold tracking-wide">
              Persoonlijke Kennismaking met Erica van Dijk
            </h2>
            <p className="text-xl text-[#666666] leading-relaxed font-ginto-regular">Als ervaren allround interim HR Manager combineer ik een pragmatische en betrouwbare aanpak met creatieve probleemoplossing. Met mijn verbindende poldermentaliteit en sterke onderhandelingsvaardigheden realiseer ik duurzame oplossingen. Met meer dan 20 jaar ervaring in HR-management help ik organisaties met strategische en operationele HR-vraagstukken.</p>
          </motion.div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Image */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="md:col-span-5 relative group">
            <img src="/lovable-uploads/41e526fc-1f51-4c6d-a670-41b8434d6d1d.png" alt="Erica van Dijk" className="w-full h-80 object-cover object-top rounded-[2rem] shadow-xl" />
          </motion.div>

          {/* Secondary Image */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="md:col-span-5 relative group">
            <img src="/lovable-uploads/92bfa061-6c2f-4f53-8912-70e23a268c70.png" alt="HR Consulting" className="w-full h-80 object-cover rounded-[2rem] shadow-xl" />
          </motion.div>

          {/* CTA Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="md:col-span-2 flex items-stretch">
            <Link to="/contact" className="w-full h-full min-h-[200px] md:min-h-0 bg-[#333333] text-white rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-[#444444] transition-colors p-6 text-center shadow-xl group">
              <span className="text-lg font-ginto-regular text-white">Neem Contact</span>
              <ArrowRight className="text-[#8B1E2E] group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Contact Links */}
        
      </div>
    </section>;
};
