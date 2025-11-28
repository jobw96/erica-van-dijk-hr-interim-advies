import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const MotionLink = motion(Link);

  // Don't render on homepage
  if (pathnames.length === 0) {
    return null;
  }

  // Map for custom route names
  const routeNameMap: {
    [key: string]: string;
  } = {
    experience: 'Ervaring',
    contact: 'Contact'
  };
  
  return <div className="bg-white border-b border-gray-100 sticky top-[60px] z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav className="flex items-center gap-2 text-sm flex-wrap">
          <MotionLink to="/" className="flex items-center text-gray-500 hover:text-[#8E170B] transition-colors" whileHover={{
          scale: 1.05
        }}>
            <Home size={18} />
          </MotionLink>

          {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          let displayName = routeNameMap[value] || value;

          // For experience detail pages, get the actual project title
          if (pathnames[index - 1] === 'experience' && index > 0) {
            const experience = experiences.find(e => e.id === value);
            if (experience) {
              displayName = experience.title;
            }
          }

          // Capitalize if not found in map and not an ID (fallback)
          if (!routeNameMap[value] && pathnames[index - 1] !== 'experience') {
            displayName = value.charAt(0).toUpperCase() + value.slice(1);
          }
          return <React.Fragment key={to}>
                <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
                {isLast ? <span className="font-medium text-[#8E170B]">
                    {displayName}
                  </span> : <MotionLink to={to} className="text-gray-600 hover:text-[#8E170B] transition-colors font-normal" whileHover={{
              x: 2
            }}>
                    {displayName}
                  </MotionLink>}
              </React.Fragment>;
        })}
        </nav>
      </div>
    </div>;
};