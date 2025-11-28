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
    <footer className="bg-[#F8F9FA] text-black pt-16 md:pt-24 pb-10 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: CTA & Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          
          {/* Left: CTA */}
          <div className="lg:col-span-5">
             <img src={logo} alt="Erica van Dijk" className="h-12 mb-6" />
             <h2 className="text-2xl md:text-4xl font-satoshi-black text-black mb-4 leading-tight tracking-tight">
               Klaar voor verandering?
             </h2>
             <p className="text-gray-600 text-base mb-6 max-w-md font-satoshi-regular tracking-wide">
               Laten we samenwerken aan duurzame HR-oplossingen voor uw organisatie.
             </p>
             <MotionLink
               to="/contact"
               className="inline-flex items-center gap-2 bg-[#8E170B] text-white px-6 py-3 rounded-md font-satoshi-bold text-base tracking-wide"
               whileHover={{ backgroundColor: '#701209', scale: 1.02 }}
             >
               Plan een gesprek
               <motion.div variants={arrowVariants} initial="rest" whileHover="hover">
                 <ArrowUpRight size={18} />
               </motion.div>
             </MotionLink>
          </div>

          {/* Right: Info Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
             
             {/* Contact Info */}
             <div>
                <h3 className="font-satoshi-bold text-sm uppercase text-gray-500 mb-3 tracking-wider">Contact</h3>
                <div className="space-y-2 text-gray-600 font-satoshi-regular text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#8E170B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed tracking-wide">
                      Erica van Dijk<br />
                      Hoofdstraat 123<br />
                      1234 AB Amsterdam
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-[#8E170B] shrink-0" />
                    <MotionA href="mailto:info@ericavandijk.nl" whileHover={{ color: '#8E170B' }}>info@ericavandijk.nl</MotionA>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#8E170B] shrink-0" />
                    <MotionA href="tel:0625317680" whileHover={{ color: '#8E170B' }}>06 253 176 80</MotionA>
                  </div>
               </div>

               <div className="text-xs text-gray-400 mt-3 font-satoshi-regular tracking-wide">
                 <p>KVK: 12345678</p>
                 <p>BTW: NL001234567B01</p>
               </div>
            </div>

            {/* Navigation */}
            <div>
               <h3 className="font-satoshi-bold text-sm uppercase text-gray-500 mb-3 tracking-wider">Navigatie</h3>
               <div className="flex flex-col gap-2 text-sm">
                  <MotionLink to="/" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide">Home</MotionLink>
                  <MotionLink to="/experience" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide">Ervaring & Projecten</MotionLink>
                  <MotionLink to="/contact" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide">Contact</MotionLink>
               </div>
            </div>

            {/* Social */}
            <div>
               <h3 className="font-satoshi-bold text-sm uppercase text-gray-500 mb-3 tracking-wider">Volg mij</h3>
               <MotionA 
                 href="https://linkedin.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-gray-600 font-satoshi-medium tracking-wide text-sm"
                 initial="rest"
                 whileHover="hover"
                 animate="rest"
               >
                 <Linkedin size={18} />
                 <span>LinkedIn</span>
                 <motion.div variants={socialArrowVariants}>
                   <ArrowUpRight size={12} />
                 </motion.div>
               </MotionA>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 text-gray-500 text-xs gap-3 text-center md:text-left font-satoshi-regular tracking-wide">
          <p>© {new Date().getFullYear()} Erica van Dijk. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <MotionLink to="#" whileHover={{ color: '#8E170B' }}>
                Privacyverklaring
            </MotionLink>
            <MotionLink to="#" whileHover={{ color: '#8E170B' }}>
                Algemene Voorwaarden
            </MotionLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
