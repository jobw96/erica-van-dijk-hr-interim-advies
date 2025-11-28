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
          <h2 className="text-3xl font-ginto-bold text-[#333333] mb-4 tracking-wide">Ervaring niet gevonden</h2>
          <MotionLink to="/experience" className="inline-flex items-center gap-2 bg-[#8B1E2E] text-white px-6 py-3 rounded-lg font-ginto-bold tracking-wide" whileHover={{
          backgroundColor: '#701209'
        }}>
            <ArrowLeft size={20} /> Terug naar overzicht
          </MotionLink>
        </div>
      </div>;
  }
  return <div className="bg-white min-h-screen">
      {/* Hero Section - connects directly to header */}
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
            }} className="section-label inline-block bg-[#8B1E2E] text-white px-4 py-2 rounded-full mb-4">
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
            }} className="text-4xl md:text-6xl font-ginto-bold text-white mb-3 tracking-wide">
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
            }} className="text-xl md:text-2xl text-gray-200 font-ginto-italic tracking-wide">
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
            <h2 className="text-2xl md:text-3xl font-ginto-bold text-[#333333] mb-8 pb-4 border-b-2 border-gray-200 tracking-wide">
              Over deze opdracht
            </h2>
            
            <div className="space-y-6">
              {experience.fullDescription.map((paragraph, index) => {
              const isBoldHeading = paragraph.startsWith('**') && paragraph.includes('**', 2);
              if (isBoldHeading) {
                const headingMatch = paragraph.match(/\*\*(.*?)\*\*/);
                const heading = headingMatch ? headingMatch[1] : '';
                const content = paragraph.replace(/\*\*.*?\*\*/, '').trim();
                return <div key={index} className="space-y-3">
                      <h3 className="text-lg font-ginto-bold text-[#8B1E2E] tracking-wide">
                        {heading}
                      </h3>
                      {content && <p className="text-[#333333] leading-relaxed font-ginto-regular tracking-wide">
                          {content}
                        </p>}
                    </div>;
              }

              if (paragraph.trim() === '') {
                return <div key={index} className="h-2"></div>;
              }

              return <p key={index} className="text-[#333333] leading-relaxed text-lg font-ginto-regular tracking-wide">
                    {paragraph}
                  </p>;
            })}
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <h3 className="text-2xl font-ginto-bold text-[#333333] mb-8 tracking-wide">Andere projecten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.filter(e => e.id !== id).map(exp => <Link key={exp.id} to={`/experience/${exp.id}`}>
                    <motion.div whileHover={{
                y: -4
              }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <span className="section-label text-[#8B1E2E]">{exp.period}</span>
                        <h4 className="font-ginto-bold text-lg text-[#333333] mb-2 mt-2 tracking-wide">{exp.title}</h4>
                        <p className="text-sm text-[#666666] font-ginto-regular tracking-wide">{exp.role}</p>
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
