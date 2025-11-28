import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40, scale: 0.5, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotate: 0,
          }}
          exit={{ opacity: 0, y: 40, scale: 0.5, rotate: 180 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "#701209",
            boxShadow: "0 20px 40px -10px rgba(142,23,11,0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="fixed bottom-8 right-8 bg-[#8E170B] text-white p-4 rounded-md shadow-xl z-50"
          aria-label="Terug naar boven"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
