import React from 'react';
import Navbar from '@/components/Navbar';
import Car from '@/components/Car';
import Footer from '@/components/Footer';

export default function CarPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Car />
      <Footer />
    </main>
  );
} 