"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-[60px] z-[1000] h-[2px] origin-left bg-gradient-to-r from-[#8E170B] via-[#a91d0e] to-[#8E170B]",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
