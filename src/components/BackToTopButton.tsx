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
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#701209",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
          className="fixed bottom-8 right-8 bg-[#8E170B] text-white p-3 rounded-md shadow-lg z-50 hover:shadow-xl transition-shadow"
          aria-label="Terug naar boven"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
