import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
export const About: React.FC = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.96, y: 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(142, 23, 11, 0.12)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center h-[42px] px-9 bg-[#fff5f8] text-[#8E170B] font-medium tracking-[0.1em] uppercase text-sm rounded-[50px]"
              style={{ boxShadow: '0 4px 20px rgba(142, 23, 11, 0.08)' }}
            >
              Over Mij
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#333333] mt-3"
            >
              Kennismaking
            </motion.h2>
         </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/3 flex-shrink-0"
            >
                <motion.img whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.5
          }} alt="Erica van Dijk" className="rounded-2xl w-full aspect-square object-cover shadow-lg" src="/lovable-uploads/41e526fc-1f51-4c6d-a670-41b8434d6d1d.png" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full md:w-2/3"
            >
                 <motion.h3 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.6 }}
                   className="text-2xl md:text-3xl font-bold text-[#333333] mb-2"
                 >
                   Erica van Dijk
                 </motion.h3>
                 <motion.span 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.7 }}
                   className="text-[#8E170B] font-medium block mb-6 text-base md:text-lg"
                 >
                   HR Interim Manager & Adviseur
                 </motion.span>
                 
                 <motion.p 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.8 }}
                   className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg"
                 >
                    "Ik ben Erica van Dijk, een ervaren allround interim HR Manager met een pragmatische en betrouwbare aanpak. Als no-nonsense teamspeler en kritische huisvriend/coach voor managers, combineer ik creatieve probleemoplossing met een ondernemende geest. Met mijn verbindende poldermentaliteit en onderhandelingsvaardigheden houd ik oog voor diverse belangen en arbeidsverhoudingen, om zo duurzame oplossingen te realiseren."
                 </motion.p>
                 
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.9 }}
                   className="flex gap-4 justify-center md:justify-start"
                 >
                    <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#8E170B] text-white p-3 rounded-lg" whileHover={{
              backgroundColor: '#701209',
              scale: 1.05
            }}>
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a href="mailto:info@ericavandijk.nl" className="bg-gray-100 text-[#8E170B] p-3 rounded-lg" whileHover={{
              backgroundColor: '#8E170B',
              color: 'white',
              scale: 1.05
            }}>
                      <Mail size={20} />
                    </motion.a>
                 </motion.div>
            </motion.div>
        </motion.div>

      </div>
    </section>;
};