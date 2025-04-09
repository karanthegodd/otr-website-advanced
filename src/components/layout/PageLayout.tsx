'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeEffect from '@/components/animations/SmokeEffect';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <SmokeEffect />
      
      {/* Lighting effect */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          background: [
            'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(120,119,198,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout; 