'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SmokeEffect = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,107,0,0.1))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,107,0,0.1),rgba(120,119,198,0.3),rgba(255,107,0,0.1))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,107,0,0.1))]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SmokeEffect; 