'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio('/sounds/formula-e.mp3'));
  }, []);

  useEffect(() => {
    if (audio && pathname === '/car') {
      audio.currentTime = 0;
      audio.volume = 0.3;
      audio.play().catch((error) => console.log('Audio playback failed:', error));
    }
  }, [pathname, audio]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 