'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTransition } from '@/context/TransitionContext';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const { startTransition } = useTransition();
  const router = useRouter();

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    // Start the transition
    startTransition();
    
    // Navigate after a short delay to allow the transition to start
    setTimeout(() => {
      router.push('/join-us');
    }, 500);
  }, [startTransition, router]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Smoky background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-75" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-blue-500/20 to-white/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite_2s]" />
        </div>
        <Image
          src="/images/home/homepage.png"
          alt="Ontario Tech Racing Team"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="opacity-50 mix-blend-overlay"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-white bg-clip-text text-transparent"
        >
          Ontario Tech Racing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Pushing the boundaries of student motorsport engineering and innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/join-us"
            onClick={handleClick}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-all duration-300"
          >
            Join Our Team
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 