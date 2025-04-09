import React from 'react';
import Navbar from '../../components/Navbar';
import History from '../../components/History';
import Footer from '../../components/Footer';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <History />
      <Footer />
    </main>
  );
} 