'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AudioContextType {
  hasUserInteracted: boolean;
  setHasUserInteracted: (value: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      console.log('Global user interaction detected');
      setHasUserInteracted(true);
      
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ hasUserInteracted, setHasUserInteracted }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
} 