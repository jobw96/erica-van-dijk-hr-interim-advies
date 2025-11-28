import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, FileText, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [{
  title: "Mensgericht beleid voor blijvend succes",
  description: "Ik zet mij in om organisaties te versterken door middel van mensgericht HR-beleid. Met mijn expertise ondersteun ik het aantrekken, behouden en ontwikkelen van talent om duurzame groei en succes te bevorderen.",
  icon: Users
}, {
  title: "Strategische doelen realiseren met expertise",
  description: "Mijn missie is om de strategische ambities van jouw organisatie te verwezenlijken met op maat gemaakte HR-oplossingen. Met mijn kennis en toewijding bied ik resultaatgerichte ondersteuning voor complexe uitdagingen.",
  icon: Target
}, {
  title: "Toekomstbestendige organisaties bouwen",
  description: "Ik streef ernaar om organisaties klaar te maken voor de toekomst. Door mijn innovatieve en praktische HR-aanpak creëer ik een werkomgeving waarin mensen en bedrijfsresultaten floreren.",
  icon: TrendingUp
}, {
  title: "HR-Strategie Optimaliseren",
  description: "Ik ondersteun organisaties bij het optimaliseren van hun HR-strategie met praktische en duurzame oplossingen.",
  icon: FileText
}, {
  title: "Teams Laten Groeien",
  description: "Met mijn expertise help ik teams te groeien en organisaties klaar te maken voor toekomstige uitdagingen.",
  icon: MessageSquare
}, {
  title: "Inspirerende Werkomgeving",
  description: "Ik creëer een inspirerende werkomgeving waarin talent floreert en bedrijfsdoelen worden behaald.",
  icon: ShieldCheck
}];

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
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
  },
  hover: {
    y: -12,
    boxShadow: "0 30px 60px -15px rgba(142, 23, 11, 0.12)"
  }
};

const iconBgVariants = {
  rest: {
    backgroundColor: 'rgba(142, 23, 11, 0.05)'
  },
  hover: {
    backgroundColor: '#8E170B'
  }
};

const iconVariants = {
  rest: {
    color: '#8E170B'
  },
  hover: {
    color: 'white'
  }
};

const arrowContainerVariants = {
  rest: {
    borderColor: 'rgb(243 244 246)'
  },
  hover: {
    borderColor: '#8E170B'
  }
};

const arrowVariants = {
  rest: {
    color: 'rgb(209 213 219)'
  },
  hover: {
    color: '#8E170B'
  }
};

const titleVariants = {
  rest: {
    color: '#1F2937'
  },
  hover: {
    color: '#8E170B'
  }
};

const gradientVariants = {
  rest: {
    opacity: 0
  },
  hover: {
    opacity: 1
  }
};

export const Services: React.FC = () => {
  const MotionLink = motion(Link);
  return <section id="services" className="py-20 md:py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header Section - RIGHT aligned */}
      <div className="text-right mb-16 md:mb-20 max-w-3xl ml-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.96, y: 6 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center h-[29px] px-6 bg-[#fff5f8] text-[#8E170B] font-satoshi-medium tracking-[0.1em] uppercase text-xs rounded-[50px] mb-4"
        >
          Mijn Diensten
        </motion.span>
        <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-satoshi-black text-[#1F2937] mb-6 tracking-tight">
          Expertise waar u op kunt bouwen
        </motion.h2>
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-lg text-gray-600 leading-relaxed font-satoshi-regular tracking-wide">
          Van interim management tot strategisch advies. Ik bied op maat gemaakte HR-oplossingen die aansluiten bij uw organisatie.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <motion.div key={service.title} variants={itemVariants} initial="rest" whileHover="hover" animate="rest" className="relative group h-full">
            <motion.div variants={cardHoverVariants} className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col relative overflow-hidden min-h-[320px]">
              {/* Gradient Overlay on Hover */}
              <motion.div variants={gradientVariants} className="absolute inset-0 bg-gradient-to-br from-[#8E170B]/5 to-transparent pointer-events-none" />

              {/* Icon */}
              <motion.div variants={iconBgVariants} className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <motion.div variants={iconVariants}>
                  <Icon size={28} strokeWidth={2} />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.h3 variants={titleVariants} className="text-xl font-medium mb-3 relative z-10">
                {service.title}
              </motion.h3>
              <p className="text-gray-600 leading-relaxed flex-grow relative z-10">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <motion.div variants={arrowContainerVariants} className="mt-6 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center relative z-10">
                <motion.div variants={arrowVariants}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>;
        })}
      </motion.div>

      {/* CTA */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-16">

      </motion.div>

    </div>
  </section>;
};