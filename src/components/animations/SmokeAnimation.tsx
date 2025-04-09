'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SmokeAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Blue smoke layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [-20, 0, -20]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(59,130,246,0.1),transparent_60%)]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
          x: [-20, 0, -20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Orange smoke layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(255,107,0,0.15),transparent_70%)]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.1),transparent_60%)]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [20, 0, 20]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* White smoke layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.1),transparent_70%)]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
          y: [-10, -40, -10]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Swirling effect */}
      <motion.div
        className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1),rgba(255,107,0,0.1),rgba(255,255,255,0.1),rgba(59,130,246,0.1))]"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default SmokeAnimation; 