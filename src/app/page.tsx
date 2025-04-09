'use client';

import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/animations/AnimatedSection';
import KineticText from '@/components/animations/KineticText';
import SmokeAnimation from '@/components/animations/SmokeAnimation';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <AnimatedSection 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        withSpeedStreak
      >
        <SmokeAnimation />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/homepage.png"
            alt="OTR Racing Car"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
          <KineticText
            text="ONTARIO TECH RACING"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF6B00] to-white"
          />
          <KineticText
            text="Engineering Excellence in Motion"
            className="text-xl md:text-2xl text-[#97999B]"
            delay={1}
          />
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection 
        className="py-20"
        withTrackLine
        withParallax
      >
        <div className="max-w-7xl mx-auto px-4">
          <KineticText
            text="PUSHING BOUNDARIES"
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-lg"
                withSpeedStreak
              >
                <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}

const features = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of automotive engineering with cutting-edge technology and design."
  },
  {
    title: "Performance",
    description: "Optimizing every component for maximum speed, efficiency, and reliability."
  },
  {
    title: "Teamwork",
    description: "Bringing together the brightest minds to achieve engineering excellence."
  }
];
