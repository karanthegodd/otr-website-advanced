'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { smoothRevealVariants, trackLineVariants } from '@/utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  withTrackLine?: boolean;
  withSpeedStreak?: boolean;
  withParallax?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  withTrackLine = false,
  withSpeedStreak = false,
  withParallax = false
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={smoothRevealVariants}
      style={withParallax ? { y, scale, opacity } : undefined}
    >
      {withTrackLine && (
        <motion.div
          className="absolute left-0 w-1 h-full bg-gradient-to-b from-[#FF6B00] via-white to-transparent"
          variants={trackLineVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        />
      )}
      
      {withSpeedStreak && (
        <motion.div
          className="absolute -z-10 inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { 
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 1.2],
          } : "initial"}
          transition={{
            duration: 1,
            ease: [0.33, 1, 0.68, 1]
          }}
          style={{ transformOrigin: 'left' }}
        />
      )}

      {children}
    </motion.div>
  );
} 