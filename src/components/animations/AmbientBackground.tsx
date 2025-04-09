'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ambientBackgroundVariants } from '@/utils/animations';

interface AmbientBackgroundProps {
  className?: string;
}

export default function AmbientBackground({ className = '' }: AmbientBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Fluid gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#003C71] via-black to-black"
        variants={ambientBackgroundVariants}
        animate="animate"
      />

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
} 