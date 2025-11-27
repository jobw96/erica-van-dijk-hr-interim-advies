import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { experiences } from '../data/experiences';
import { Contact } from './Contact';
const arrowVariants = {
  rest: {
    x: 0
  },
  hover: {
    x: -4
  }
};
export const ExperienceDetail: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const experience = experiences.find(e => e.id === id);
  const MotionLink = motion(Link);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!experience) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ervaring niet gevonden</h2>
          <MotionLink to="/experience" className="inline-flex items-center gap-2 bg-[#8E170B] text-white px-6 py-3 rounded-lg font-bold" whileHover={{
          backgroundColor: '#701209'
        }}>
            <ArrowLeft size={20} /> Terug naar overzicht
          </MotionLink>
        </div>
      </div>;
  }
  return <div className="bg-white min-h-screen">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] mb-16">
         <div className="absolute inset-0">
            <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
         </div>
         
         <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16 w-full">
               <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
                  <motion.span initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className="inline-block bg-[#8E170B] text-white text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                    {experience.period}
                  </motion.span>
                  <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="text-4xl md:text-6xl font-bold text-white mb-3">
                    {experience.title}
                  </motion.h1>
                  <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="text-xl md:text-2xl text-gray-200 font-medium">
                    {experience.role}
                  </motion.p>
              </motion.div>
           </div>
      </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="space-y-8">

          {/* Main Content with Clear Sections */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-200">
              Over deze opdracht
            </h2>
            
            <div className="space-y-6">
              {experience.fullDescription.map((paragraph, index) => {
              // Check if paragraph starts with ** (bold heading)
              const isBoldHeading = paragraph.startsWith('**') && paragraph.includes('**', 2);
              if (isBoldHeading) {
                // Extract heading text between ** **
                const headingMatch = paragraph.match(/\*\*(.*?)\*\*/);
                const heading = headingMatch ? headingMatch[1] : '';
                const content = paragraph.replace(/\*\*.*?\*\*/, '').trim();
                return <div key={index} className="space-y-3">
                      <h3 className="text-lg font-bold text-[#8E170B]">
                        {heading}
                      </h3>
                      {content && <p className="text-gray-700 leading-relaxed">
                          {content}
                        </p>}
                    </div>;
              }

              // Empty paragraph acts as spacer
              if (paragraph.trim() === '') {
                return <div key={index} className="h-2"></div>;
              }

              // Regular paragraph
              return <p key={index} className="text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>;
            })}
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Andere projecten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.filter(e => e.id !== id).map(exp => <Link key={exp.id} to={`/experience/${exp.id}`}>
                    <motion.div whileHover={{
                y: -4
              }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-bold text-[#8E170B] uppercase tracking-wide">{exp.period}</span>
                        <h4 className="font-bold text-lg text-gray-900 mb-2 mt-2">{exp.title}</h4>
                        <p className="text-sm text-gray-600">{exp.role}</p>
                      </div>
                    </motion.div>
                  </Link>)}
            </div>
          </div>
        </motion.div>
      </div>

      <Contact />
    </div>;
};