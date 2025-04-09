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
  const [isPlaying, setIsPlaying] = useState(false);

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

  // Handle play/pause
  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Car sound played successfully');
            setIsPlaying(true);
            setHasPlayedSound(true);
          })
          .catch(error => {
            console.error('Error playing car sound:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#003C71] text-white py-16 px-4 md:px-8 overflow-hidden">
      {/* Smoke effect background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003C71]/50 to-[#003C71] animate-smoke"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#FF6B00] to-white bg-clip-text text-transparent animate-gradient-x">
            OTR-23 Formula SAE Car
          </h1>
          <p className="text-lg md:text-xl text-[#97999B] mb-4">
            Engineering excellence in motion
          </p>
          {hasUserInteracted && isAudioReady && (
            <button
              onClick={toggleSound}
              className="px-6 py-2 bg-[#FF6B00] text-white rounded-full hover:bg-[#FF6B00]/80 transition-colors flex items-center justify-center mx-auto space-x-2"
            >
              <span>{isPlaying ? 'Pause Engine Sound' : 'Play Engine Sound'}</span>
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          )}
        </motion.div>

        {/* Car Images */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#003C71] to-black group"
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
                // You could set a fallback image here if needed
              }}
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-[#FF6B00]">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#003C71] to-black p-8 rounded-lg mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-[#FF6B00]">Key Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-colors duration-300 border border-[#FF6B00]/20"
              >
                <p className="text-white/70 mb-1">{spec.label}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-white via-[#FF6B00] to-white bg-clip-text text-transparent">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Technical Specifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Drivetrain */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">Drivetrain</h3>
              <div className="space-y-2">
                {technicalSpecs.drivetrain.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* General */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">General</h3>
              <div className="space-y-2">
                {technicalSpecs.general.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">Chassis & Telemetry</h3>
              <div className="space-y-2">
                {technicalSpecs.chassis.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
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
            className="space-y-8"
          >
            {/* Accumulator */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">Accumulator</h3>
              <div className="space-y-2">
                {technicalSpecs.accumulator.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suspension */}
            <div className="bg-gradient-to-br from-[#003C71] to-black p-6 rounded-lg border border-[#FF6B00]/10">
              <h3 className="text-xl font-bold mb-4 text-[#FF6B00]">Suspension</h3>
              <div className="space-y-2">
                {technicalSpecs.suspension.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-white/70">{spec.label}</span>
                    <span className="font-semibold text-white">{spec.value}</span>
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