import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#E8EDEA] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-[#1F2937]" />
          <span className="text-sm font-satoshi-medium uppercase tracking-wider text-[#1F2937]">
            Over Mij
          </span>
        </motion.div>

        {/* Two Column Grid - Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Brief intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-[#52525B] leading-relaxed font-satoshi-regular">
              Met meer dan 20 jaar ervaring in HR-management help ik organisaties met strategische en operationele HR-vraagstukken.
            </p>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl lg:text-5xl leading-tight text-[#1F2937] mb-6 font-satoshi-black tracking-tight">
              Persoonlijke Kennismaking met Erica van Dijk
            </h2>
            <p className="text-xl text-[#52525B] leading-relaxed font-satoshi-regular">
              Als ervaren allround interim HR Manager combineer ik een pragmatische en betrouwbare aanpak met creatieve probleemoplossing. Met mijn verbindende poldermentaliteit en sterke onderhandelingsvaardigheden realiseer ik duurzame oplossingen.
            </p>
          </motion.div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 relative group"
          >
            <img 
              src="/lovable-uploads/41e526fc-1f51-4c6d-a670-41b8434d6d1d.png" 
              alt="Erica van Dijk" 
              className="w-full h-80 object-cover object-top rounded-[2rem] shadow-xl"
            />
          </motion.div>

          {/* Secondary Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 relative group"
          >
            <img 
              src="/lovable-uploads/92bfa061-6c2f-4f53-8912-70e23a268c70.png" 
              alt="HR Consulting" 
              className="w-full h-80 object-cover rounded-[2rem] shadow-xl"
            />
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex items-stretch"
          >
            <Link 
              to="/contact" 
              className="w-full h-full min-h-[200px] md:min-h-0 bg-[#1F2937] text-white rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-[#374151] transition-colors p-6 text-center shadow-xl group"
            >
              <span className="text-lg font-satoshi-medium text-white">Neem Contact</span>
              <ArrowRight className="text-[#8E170B] group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Contact Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-md font-satoshi-medium text-sm shadow-lg shadow-blue-900/20 transition-colors hover:bg-[#006396] tracking-wide"
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>

          <motion.a
            href="mailto:info@ericavandijk.nl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-md font-satoshi-medium text-sm hover:border-[#8E170B] hover:text-[#8E170B] transition-colors tracking-wide"
          >
            <Mail size={18} />
            Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
