'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isLoading]);
  
  if (!isLoading) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="relative w-48 h-24 mb-8">
        <motion.div
          animate={{
            x: [0, 10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/car/car-top.png"
            alt="Loading Car"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent max-w-xs"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white text-lg font-medium"
      >
        Loading... {progress}%
      </motion.p>
    </motion.div>
  );
}