'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    // Only start a new transition if one isn't already in progress
    if (!isTransitioning) {
      setIsTransitioning(true);
      
      // Reset the transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  }, [isTransitioning]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
} 