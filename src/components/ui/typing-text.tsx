import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  cursor?: boolean;
  cursorClassName?: string;
  onComplete?: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  className,
  delay = 0.05,
  cursor = false,
  cursorClassName,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <span>{displayedText}</span>
      {cursor && (
        <AnimatePresence>
          {!isComplete && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, repeat: Infinity, repeatType: 'reverse' }}
              className={cn('inline-block w-[3px] h-[0.9em] bg-current ml-1 rounded-full', cursorClassName)}
            />
          )}
        </AnimatePresence>
      )}
    </span>
  );
};

export const TypingTextCursor: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      className={cn('inline-block w-[3px] h-[0.9em] bg-current ml-1 rounded-full', className)}
    />
  );
};
