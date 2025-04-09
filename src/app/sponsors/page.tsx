import React from 'react';
import Navbar from '../../components/Navbar';
import Sponsors from '../../components/Sponsors';
import Footer from '../../components/Footer';

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Sponsors />
      <Footer />
    </main>
  );
} 