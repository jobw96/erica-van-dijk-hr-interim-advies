import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const cardVariants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)'
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
  }
};
export const Experience: React.FC = () => {
  const MotionLink = motion(Link);
  return <section id="experience" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-20 gap-4">
            <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, scale: 0.96, y: 6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(139, 30, 46, 0.12)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="section-label inline-flex items-center h-[42px] px-9 bg-[#fff5f8] text-[#8B1E2E] rounded-[50px] mb-4"
                  style={{ boxShadow: '0 4px 20px rgba(139, 30, 46, 0.08)' }}
                >
                    Portfolio
                </motion.span>
                <motion.h2 initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} className="text-3xl md:text-5xl font-ginto-bold text-[#333333] tracking-wide">
                    Recente Ervaring
                </motion.h2>
            </div>
            <MotionLink to="/experience" className="hidden md:flex items-center gap-2 text-[#333333] font-ginto-bold cursor-pointer tracking-wide" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} whileHover={{
          color: '#8B1E2E',
          x: 5
        }}>
                
                
            </MotionLink>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map(item => <MotionLink to={`/experience/${item.id}`} key={item.id} className="block h-full">
                <motion.div variants={{
            ...itemVariants,
            ...cardVariants
          }} whileHover="hover" className="bg-white rounded-2xl p-3 border border-gray-100 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="h-56 md:h-64 overflow-hidden relative shrink-0 rounded-xl">
                    <motion.img whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.6
              }} src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-[#8B1E2E] text-sm font-ginto-regular mb-3 tracking-wide">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-xl font-ginto-bold text-[#333333] mb-2 line-clamp-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-sm mb-3 line-clamp-2 flex-grow font-ginto-regular tracking-wide">
                      {item.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[#8B1E2E] font-ginto-regular text-sm mt-auto tracking-wide">
                      <span>Lees meer</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
            </MotionLink>)}
        </motion.div>

        <MotionLink to="/experience" className="md:hidden flex items-center justify-center gap-2 text-[#8B1E2E] font-ginto-bold cursor-pointer mt-12 tracking-wide" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} whileHover={{
        x: 5
      }}>
            <span>Bekijk alle</span>
            <ArrowRight size={20} />
        </MotionLink>

      </div>
    </section>;
};
