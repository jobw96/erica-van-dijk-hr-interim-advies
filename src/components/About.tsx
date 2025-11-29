import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const decorY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} id="about" className={`py-20 md:py-32 bg-white overflow-hidden relative ${className || ''}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div style={{ y: decorY }} className="absolute top-1/4 -left-64 w-96 h-96 bg-[#8E170B]/5 rounded-full blur-3xl" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - LEFT aligned */}
        <div className="text-left mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.96, y: 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="section-label inline-flex items-center h-[29px] px-6 bg-[#fff5f8] text-[#8E170B] rounded-[50px] mb-4 font-satoshi-medium tracking-[0.1em] uppercase text-xs"
          >
            Over Mij
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-satoshi-black text-gray-900 tracking-tight"
          >
            Persoonlijke Kennismaking
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: imageY }}
            className="w-full md:w-1/2 relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/lovable-uploads/41e526fc-1f51-4c6d-a670-41b8434d6d1d.png"
                alt="Erica van Dijk"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Decorative backdrop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute -top-6 -left-6 w-full h-full border border-[#8E170B]/20 rounded-2xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 w-full h-full bg-[#8E170B]/5 rounded-2xl -z-10"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: contentY }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-satoshi-black text-gray-900 mb-2 tracking-tight">
              Erica van Dijk
            </h3>
            <p className="text-xl text-[#8E170B] font-satoshi-medium mb-8">
              HR Interim Manager & Adviseur
            </p>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-satoshi-regular tracking-wide">
              <p>
                "Ik ben een ervaren allround interim HR Manager met een pragmatische en betrouwbare aanpak.
                Als no-nonsense teamspeler en kritische sparringpartner combineer ik creatieve probleemoplossing met een ondernemende geest."
              </p>
              <p>
                Met mijn verbindende poldermentaliteit en sterke onderhandelingsvaardigheden houd ik oog voor diverse belangen en arbeidsverhoudingen, om zo duurzame oplossingen te realiseren.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="https://nl.linkedin.com/in/erica-van-dijk-a713506"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#8E170B] text-white rounded-xl font-satoshi-medium shadow-lg shadow-red-900/20 transition-colors hover:bg-[#701209] tracking-wide"
              >
                <Linkedin size={20} />
                Connect op LinkedIn
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-satoshi-medium hover:border-[#8E170B] hover:text-[#8E170B] transition-colors tracking-wide"
              >
                <Mail size={20} />
                Stuur een bericht
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
