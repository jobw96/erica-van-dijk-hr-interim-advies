import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const MotionLink = motion(Link);
const MotionA = motion.a;

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 4, y: -4 }
};

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="bg-[#F8F9FA] text-black pt-16 md:pt-24 pb-10 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA & Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          {/* Left: CTA */}
          <div className="lg:col-span-5">
            <img 
              src={logo} 
              alt="Erica van Dijk - HR Interim & Advies logo" 
              className="h-12 mb-6"
              loading="lazy"
            />
            <h2 className="text-2xl font-satoshi-black text-black mb-4 leading-tight tracking-tight font-medium md:text-5xl">
              Klaar voor verandering?
            </h2>
            <p className="text-gray-600 text-base mb-6 max-w-md font-satoshi-regular tracking-wide font-normal">
              Laten we samenwerken aan duurzame HR-oplossingen voor uw organisatie.
            </p>
            <MotionLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#8E170B] text-white px-6 py-3 rounded-md font-satoshi-bold text-base tracking-wide"
              whileHover={{ backgroundColor: '#701209', scale: 1.02 }}
              aria-label="Plan een gesprek met Erica van Dijk"
            >
              Plan een gesprek
              <motion.div variants={arrowVariants} initial="rest" whileHover="hover" aria-hidden="true">
                <ArrowUpRight size={18} />
              </motion.div>
            </MotionLink>
          </div>

          {/* Right: Info Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Links */}
            <nav aria-label="Footer navigatie">
              <h3 className="font-satoshi-bold text-base text-black mb-4 tracking-wide">Links</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <MotionLink to="/" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide font-normal">
                    Home
                  </MotionLink>
                </li>
                <li>
                  <MotionLink to="/experience" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide font-normal">
                    Ervaring & Projecten
                  </MotionLink>
                </li>
                <li>
                  <MotionLink to="/contact" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide font-normal">
                    Contact
                  </MotionLink>
                </li>
                <li>
                  <MotionLink to="/#reviews" whileHover={{ color: '#8E170B' }} className="text-gray-600 font-satoshi-medium tracking-wide font-normal">
                    Reviews
                  </MotionLink>
                </li>
              </ul>
            </nav>

            {/* Informatie */}
            <div>
              <h3 className="font-satoshi-bold text-base text-black mb-4 tracking-wide">Informatie</h3>
              <address className="flex flex-col gap-3 text-gray-600 font-satoshi-regular text-sm not-italic">
                <span className="tracking-wide">KVK: 83757880</span>
                <MotionA 
                  href="mailto:info@ericavandijk.nl" 
                  whileHover={{ color: '#8E170B' }} 
                  className="tracking-wide"
                  aria-label="Stuur een e-mail naar info@ericavandijk.nl"
                >
                  info@ericavandijk.nl
                </MotionA>
                <MotionA 
                  href="tel:0625317680" 
                  whileHover={{ color: '#8E170B' }} 
                  className="tracking-wide"
                  aria-label="Bel 06 253 176 80"
                >
                  06 253 176 80
                </MotionA>
              </address>
            </div>

            {/* Bereik mij */}
            <div>
              <h3 className="font-satoshi-bold text-base text-black mb-4 tracking-wide">Bereik mij</h3>
              <MotionA
                href="https://nl.linkedin.com/in/erica-van-dijk-a713506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 font-satoshi-medium tracking-wide text-sm"
                initial="rest"
                whileHover="hover"
                animate="rest"
                aria-label="Bekijk Erica van Dijk op LinkedIn (opent in nieuw tabblad)"
              >
                <Linkedin size={18} className="text-[#8E170B]" aria-hidden="true" />
                <span className="font-normal">LinkedIn</span>
              </MotionA>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-gray-200 text-gray-500 text-xs gap-3 text-left font-satoshi-regular tracking-wide">
          <p>© {new Date().getFullYear()} Erica van Dijk. Alle rechten voorbehouden.</p>
          <nav aria-label="Juridische links" className="flex items-center gap-4">
            <MotionLink to="/privacy" whileHover={{ color: '#8E170B' }}>
              Privacyverklaring
            </MotionLink>
            <MotionLink to="/voorwaarden" whileHover={{ color: '#8E170B' }}>
              Algemene Voorwaarden
            </MotionLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};
