import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const MotionLink = motion(Link);
const MotionA = motion.a;

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 4, y: -4 }
};

const socialArrowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FA] text-black pt-20 md:pt-32 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: CTA & Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left: CTA */}
          <div className="lg:col-span-6">
             <img src={logo} alt="Erica van Dijk" className="h-16 mb-8" />
             <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
               Klaar voor verandering?
             </h2>
             <p className="text-gray-600 text-lg mb-8 max-w-lg">
               Laten we samenwerken aan duurzame HR-oplossingen voor uw organisatie.
             </p>
             <MotionLink
               to="/contact"
               className="inline-flex items-center gap-2 bg-[#8E170B] text-white px-8 py-4 rounded-lg font-bold text-lg"
               whileHover={{ backgroundColor: '#701209', scale: 1.02 }}
             >
               Plan een gesprek
               <motion.div variants={arrowVariants} initial="rest" whileHover="hover">
                 <ArrowUpRight size={20} />
               </motion.div>
             </MotionLink>
          </div>

          {/* Right: Info Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Contact Info */}
             <div>
                <h3 className="font-bold text-lg text-black mb-4">Contact</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#8E170B] shrink-0" />
                    <span className="text-sm leading-relaxed">
                      Erica van Dijk<br />
                      Hoofdstraat 123<br />
                      1234 AB Amsterdam
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#8E170B] shrink-0" />
                    <MotionA href="mailto:info@ericavandijk.nl" whileHover={{ color: '#8E170B' }}>info@ericavandijk.nl</MotionA>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#8E170B] shrink-0" />
                    <MotionA href="tel:0625317680" whileHover={{ color: '#8E170B' }}>06 253 176 80</MotionA>
                  </div>
               </div>

               <div className="text-sm text-gray-400 mt-2">
                 <p>KVK: 12345678</p>
                 <p>BTW: NL001234567B01</p>
               </div>
            </div>

            {/* Navigation & Socials */}
            <div className="flex flex-col gap-8">
               
               {/* Site Links */}
               <div>
                   <h3 className="font-bold text-lg text-black mb-4">Navigatie</h3>
                   <div className="flex flex-col gap-3">
                      <MotionLink to="/" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-medium">Home</MotionLink>
                      <MotionLink to="/experience" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-medium">Ervaring & Projecten</MotionLink>
                      <MotionLink to="/contact" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-medium">Contact</MotionLink>
                   </div>
               </div>

               {/* Social */}
               <div>
                   <h3 className="font-bold text-lg text-black mb-4">Volg mij</h3>
                   <MotionA 
                     href="https://linkedin.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-gray-600 font-medium"
                     initial="rest"
                     whileHover="hover"
                     animate="rest"
                   >
                     <Linkedin size={20} />
                     <span>LinkedIn</span>
                     <motion.div variants={socialArrowVariants}>
                       <ArrowUpRight size={14} />
                     </motion.div>
                   </MotionA>
               </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Erica van Dijk. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-6">
            <MotionLink to="#" whileHover={{ color: '#8E170B' }} className="flex items-center gap-1.5">
                Privacyverklaring
            </MotionLink>
            <MotionLink to="#" whileHover={{ color: '#8E170B' }} className="flex items-center gap-1.5">
                Algemene Voorwaarden
            </MotionLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
