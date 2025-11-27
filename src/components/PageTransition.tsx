import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
<<<<<<< HEAD
=======
    y: 0,
>>>>>>> fbb65c4a135970236d4346c664bdaeff0bc970b1
  },
  enter: {
    opacity: 1,
    transition: {
<<<<<<< HEAD
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Smooth easing curve
      delay: 0.1, // Small delay to ensure scroll happens while opacity is 0
=======
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1] as const,
>>>>>>> fbb65c4a135970236d4346c664bdaeff0bc970b1
    },
  },
  exit: {
    opacity: 0,
<<<<<<< HEAD
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
=======
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1] as const,
>>>>>>> fbb65c4a135970236d4346c664bdaeff0bc970b1
    },
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
