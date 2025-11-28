import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
export const About: React.FC = () => {
  return <section id="about" className="py-20 md:py-32 bg-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#8E170B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="section-label inline-block py-2 px-6 bg-white border border-[#8E170B]/10 rounded-full text-[#8E170B] shadow-sm mb-4">
            Over Mij
          </motion.span>
<<<<<<< HEAD
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-gray-900"
          >
=======
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-4xl md:text-5xl font-satoshi-black text-gray-900 tracking-tight font-normal">
>>>>>>> 27051426fe53e17bb26b2ac0ee2acda1c0834c09
            Persoonlijke Kennismaking
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Section - Larger & Animated */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="w-full md:w-1/2 relative">
            <motion.div whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.4
          }} className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/41e526fc-1f51-4c6d-a670-41b8434d6d1d.png" alt="Erica van Dijk" className="w-full h-auto object-cover" />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Decorative backdrop behind image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="absolute -top-6 -left-6 w-full h-full border-2 border-[#8E170B]/20 rounded-3xl -z-10" />
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="absolute -bottom-6 -right-6 w-full h-full bg-[#8E170B]/5 rounded-3xl -z-10" />
          </motion.div>

          {/* Content Section */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
              Erica van Dijk
            </h3>
            <p className="text-xl text-[#8E170B] font-normal mb-8">
              HR Interim Manager & Adviseur
            </p>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                "Ik ben een ervaren allround interim HR Manager met een <span className="font-medium text-gray-900">pragmatische en betrouwbare aanpak</span>. Als no-nonsense teamspeler en kritische sparringpartner combineer ik creatieve probleemoplossing met een ondernemende geest."
              </p>
              <p>
                Met mijn verbindende poldermentaliteit en sterke onderhandelingsvaardigheden houd ik oog voor diverse belangen en arbeidsverhoudingen, om zo <span className="font-medium text-gray-900">duurzame oplossingen</span> te realiseren.
=======
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }} className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-satoshi-black text-gray-900 mb-2 tracking-tight font-normal">
              Erica van Dijk
            </h3>
            <p className="text-xl text-[#8E170B] font-satoshi-medium mb-8 font-normal">
              HR Interim Manager & Adviseur
            </p>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-satoshi-regular tracking-wide">
              <p className="font-light">"Ik ben een ervaren allround interim HR Manager met een pragmatische en betrouwbare aanpak. Als no-nonsense teamspeler en kritische sparringpartner combineer ik creatieve probleemoplossing met een ondernemende geest." Met mijn verbindende poldermentaliteit en sterke onderhandelingsvaardigheden houd ik oog voor diverse belangen en arbeidsverhoudingen, om zo duurzame oplossingen te realiseren.<span className="font-satoshi-medium text-gray-900">pragmatische en betrouwbare aanpak</span>. Als no-nonsense teamspeler en kritische sparringpartner combineer ik creatieve probleemoplossing met een ondernemende geest."
>>>>>>> 27051426fe53e17bb26b2ac0ee2acda1c0834c09
              </p>
              
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl font-satoshi-medium shadow-lg shadow-blue-900/20 transition-colors hover:bg-[#006396] tracking-wide">
                <Linkedin size={20} />
                Connect op LinkedIn
              </motion.a>

              <motion.a href="mailto:info@ericavandijk.nl" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-satoshi-medium hover:border-[#8E170B] hover:text-[#8E170B] transition-colors tracking-wide">
                <Mail size={20} />
                Stuur een bericht
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};