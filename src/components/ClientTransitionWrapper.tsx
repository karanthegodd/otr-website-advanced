'use client';

import React from 'react';
import { useTransition } from '@/context/TransitionContext';
import CarTransition from '@/components/CarTransition';

export default function ClientTransitionWrapper({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useTransition();
  
  return (
    <>
      {children}
      <CarTransition isVisible={isTransitioning} />
    </>
  );
} 