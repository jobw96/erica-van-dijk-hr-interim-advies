import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
const faqs = [{
  question: "Wat is interim HR?",
  answer: "Interim HR is de tijdelijke inzet van een HR-professional om capaciteitsproblemen op te lossen, specifieke projecten te leiden of veranderingen door te voeren binnen een organisatie. Dit biedt flexibiliteit en directe expertise."
}, {
  question: "Hoe lang duurt een project gemiddeld?",
  answer: "De duur van een project varieert sterk afhankelijk van de opdracht. Dit kan variëren van enkele maanden voor zwangerschapsvervanging tot een jaar of langer voor complexe reorganisaties en cultuurtrajecten."
}, {
  question: "Werkt u ook op afstand?",
  answer: "Ja, ik werk hybride. De combinatie van aanwezigheid op kantoor voor verbinding en thuiswerken voor focus blijkt in de praktijk zeer effectief. Ik ben flexibel inzetbaar door heel Nederland."
}, {
  question: "Wat zijn uw tarieven?",
  answer: "Mijn tarieven zijn marktconform en afhankelijk van de zwaarte, duur en complexiteit van de opdracht. Neem gerust contact op voor een vrijblijvend kennismakingsgesprek en een offerte op maat."
}];
const faqItemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const plusIconVariants = {
  closed: {
    rotate: 0
  },
  open: {
    rotate: 45
  }
};
const FAQItem: React.FC<{
  faq: typeof faqs[0];
  index: number;
}> = ({
  faq,
  index
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div variants={faqItemVariants} initial="hidden" whileInView="visible" viewport={{
    once: true
  }} transition={{
    delay: index * 0.1
  }} className="border-b border-gray-200 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left group">
        <motion.span className="text-lg font-satoshi-bold text-gray-900 pr-8 group-hover:text-[#8E170B] transition-colors tracking-tight font-normal">
            {faq.question}
        </motion.span>
        <motion.div variants={plusIconVariants} animate={isOpen ? "open" : "closed"} transition={{
        duration: 0.3
      }} className="p-2 rounded-full">
            <Plus size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}>
            <p className="pb-6 text-gray-600 leading-relaxed pr-12 font-satoshi-regular tracking-wide">
              {faq.answer}
            </p>
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};
interface FAQProps {
  className?: string;
}
export const FAQ: React.FC<FAQProps> = ({
  className
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return <section ref={sectionRef} id="faq" className={`py-20 md:py-32 ${className || 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - LEFT aligned */}
        <motion.div style={{ y: headerY }} className="text-left mb-12 md:mb-16">
            <motion.span initial={{
          opacity: 0,
          scale: 0.96,
          y: 6
        }} whileInView={{
          opacity: 1,
          scale: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.45,
          ease: "easeOut"
        }} className="section-label inline-flex items-center h-[29px] px-6 bg-[#fff5f8] text-[#8E170B] rounded-[50px] mb-4 font-satoshi-medium tracking-[0.1em] uppercase text-xs">
                Veelgestelde Vragen
            </motion.span>
            <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-satoshi-black text-[#1F2937] tracking-tight">
                Heeft u vragen?
            </motion.h2>
        </motion.div>

        <motion.div style={{ y: contentY }} className="max-w-4xl">
          {faqs.map((faq, index) => <FAQItem key={index} faq={faq} index={index} />)}
        </motion.div>

      </div>
    </section>;
};