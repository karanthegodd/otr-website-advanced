'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FloatingCar from '@/components/FloatingCar';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <FloatingCar />
      <Navbar />
      <Hero />
    </main>
  );
}
