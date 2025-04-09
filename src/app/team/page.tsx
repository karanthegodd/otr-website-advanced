import React from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Team />
      <Footer />
    </main>
  );
} 