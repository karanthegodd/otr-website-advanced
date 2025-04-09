'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { kineticTextVariants } from '@/utils/animations';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function KineticText({ text, className = '', delay = 0 }: KineticTextProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={kineticTextVariants}
              custom={delay + (wordIndex * 0.2) + (charIndex * 0.05)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
} 