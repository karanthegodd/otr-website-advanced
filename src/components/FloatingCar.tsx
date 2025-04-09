'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingCar() {
  return (
    <motion.div
      className="fixed top-4 left-4 z-50 w-24 h-24"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image
        src="/images/car-object.jpg"
        alt="Racing Car"
        width={96}
        height={96}
        className="object-contain"
        priority
      />
    </motion.div>
  );
} 