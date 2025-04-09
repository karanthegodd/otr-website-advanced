'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAudio } from '@/context/AudioContext';

interface CarTransitionProps {
  isVisible: boolean;
}

export default function CarTransition({ isVisible }: CarTransitionProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);
  const { hasUserInteracted } = useAudio();

  // Initialize audio
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/sounds/formula-e.mp3');
    audioRef.current.volume = 0.3;
    
    // Add event listeners
    audioRef.current.addEventListener('canplaythrough', () => {
      console.log('Transition audio is ready to play');
      setAudioReady(true);
    });
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {});
        audioRef.current = null;
      }
    };
  }, []);

  // Play sound when transition starts
  useEffect(() => {
    console.log('Transition effect triggered:', { isVisible, audioReady, hasUserInteracted });
    
    if (isVisible && audioRef.current && audioReady && hasUserInteracted) {
      console.log('Attempting to play transition audio');
      // Reset audio to beginning
      audioRef.current.currentTime = 0;
      
      // Play audio with user interaction
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Transition audio played successfully');
          })
          .catch(error => {
            console.error('Error playing transition audio:', error);
          });
      }
    }
  }, [isVisible, audioReady, hasUserInteracted]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? '100vw' : -100,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="fixed top-1/2 left-0 z-50 pointer-events-none"
    >
      <div className="relative w-32 h-16">
        <Image
          src="/images/car/car-top.png"
          alt="Transition Car"
          fill
          style={{ objectFit: 'contain' }}
          className="transform -scale-x-100"
        />
      </div>
    </motion.div>
  );
} 