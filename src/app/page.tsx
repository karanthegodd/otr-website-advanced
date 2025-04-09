'use client';

import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/animations/AnimatedSection';
import KineticText from '@/components/animations/KineticText';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <AnimatedSection 
        className="min-h-screen flex items-center justify-center relative"
        withSpeedStreak
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/homepage.png"
            alt="OTR Racing Car"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
          <KineticText
            text="ONTARIO TECH RACING"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#009CDE]"
          />
          <KineticText
            text="Engineering Excellence in Motion"
            className="text-xl md:text-2xl text-[#0077CA]"
            delay={1}
          />
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection 
        className="py-20 bg-black"
        withTrackLine
        withParallax
      >
        <div className="max-w-7xl mx-auto px-4">
          <KineticText
            text="PUSHING BOUNDARIES"
            className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#009CDE]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-[#009CDE]/20"
                withSpeedStreak
              >
                <h3 className="text-xl font-bold mb-4 text-[#009CDE]">{feature.title}</h3>
                <p className="text-[#0077CA]">{feature.description}</p>
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
