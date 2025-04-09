'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAudio } from '@/context/AudioContext';

const features = [
  {
    title: "Performance",
    description: "Cutting-edge engineering for maximum speed and handling"
  },
  {
    title: "Innovation",
    description: "Advanced aerodynamics and lightweight materials"
  },
  {
    title: "Reliability",
    description: "Robust design for consistent race performance"
  }
];

const specs = [
  { label: "Engine Power", value: "80+ HP" },
  { label: "Top Speed", value: "120+ km/h" },
  { label: "0-100 km/h", value: "4.5s" },
  { label: "Weight", value: "230 kg" }
];

const technicalSpecs = {
  general: [
    { label: "Curb Weight", value: "256 kg" },
    { label: "COG", value: "(819.38, 0, 318.74)mm" },
    { label: "Wheelbase", value: "1651mm" },
    { label: "Trackwidth", value: "1219.2mm" },
  ],
  drivetrain: [
    { label: "Motor", value: "Emrax 208 HV" },
    { label: "Controller", value: "Rinehart PM100DX" },
    { label: "Peak Power", value: "86kW" },
    { label: "Continuous Power", value: "56kW" },
    { label: "Peak Torque", value: "140Nm" },
    { label: "Final Drive Ratio", value: "3.66" },
    { label: "Differential", value: "Drexler FS2010 LSD" },
  ],
  accumulator: [
    { label: "Batteries", value: "384 x Samsung 40T Li-Ion 21700" },
    { label: "Configuration", value: "96s4p (4 modules of 24s4p)" },
    { label: "Max Voltage", value: "402.3V" },
    { label: "Max Current", value: "180A" },
    { label: "Continuous Current", value: "140A" },
    { label: "Capacity", value: "5.76 kWh" },
    { label: "BMS", value: "Energus TinyBMS s516 v2.1" },
  ],
  chassis: [
    { label: "Frame Type", value: "4130 Steel Tubular Spaced Frame" },
    { label: "ECU", value: "Dana TM4 Neuro 200 (white casing)" },
  ],
  suspension: [
    { label: "Type", value: "Front & Rear Pushrod Suspension" },
    { label: "Tires", value: "18 x 6.0-10 Hoosier R25B (Dry tires)" },
    { label: "Dampers", value: "Ohlins TTX25 MkII" },
  ],
};

export default function Car() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const { hasUserInteracted } = useAudio();
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/sounds/formula-e.mp3');
    audioRef.current.volume = 0.3;
    audioRef.current.preload = 'auto';
    
    const handleCanPlayThrough = () => {
      console.log('Audio is ready to play');
      setIsAudioReady(true);
    };
    
    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        audioRef.current = null;
      }
    };
  }, []);

  // Play sound when component mounts and user has interacted
  useEffect(() => {
    if (isAudioReady && hasUserInteracted && !hasPlayedSound && audioRef.current) {
      console.log('Playing car sound on page load');
      audioRef.current.currentTime = 0;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Car sound played successfully');
            setHasPlayedSound(true);
          })
          .catch(error => {
            console.error('Error playing car sound:', error);
          });
      }
    }
  }, [isAudioReady, hasUserInteracted, hasPlayedSound]);

  return (
    <section className="relative min-h-screen bg-[#003C71] text-white py-8 px-4 overflow-hidden">
      {/* Smoke effect background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003C71]/50 to-[#003C71] animate-smoke"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FF6B00] to-white bg-clip-text text-transparent animate-gradient-x px-2">
            OTR-23 Formula SAE Car
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#97999B] px-2">
            Engineering excellence in motion
          </p>
        </motion.div>

        {/* Car Images */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#003C71] to-black group"
          >
            <Image
              src="/images/car/car-top.png"
              alt="Car Top View"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{ objectFit: 'contain' }}
              className="p-4 transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 px-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#FF6B00]">{feature.title}</h3>
              <p className="text-sm md:text-base text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-8 rounded-lg mb-8 mx-2"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-[#FF6B00]">Key Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-3 md:p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-colors duration-300 border border-[#FF6B00]/20"
              >
                <p className="text-sm md:text-base text-white/70 mb-1">{spec.label}</p>
                <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-[#FF6B00] to-white bg-clip-text text-transparent">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Technical Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Drivetrain */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FF6B00]">Drivetrain</h3>
              <div className="space-y-2">
                {technicalSpecs.drivetrain.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* General */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FF6B00]">General</h3>
              <div className="space-y-2">
                {technicalSpecs.general.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FF6B00]">Chassis & Telemetry</h3>
              <div className="space-y-2">
                {technicalSpecs.chassis.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Accumulator */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FF6B00]">Accumulator</h3>
              <div className="space-y-2">
                {technicalSpecs.accumulator.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suspension */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-4 md:p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#FF6B00]">Suspension</h3>
              <div className="space-y-2">
                {technicalSpecs.suspension.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 