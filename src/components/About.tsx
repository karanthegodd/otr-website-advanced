'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Team Members' },
  { value: '15+', label: 'Awards' },
  { value: '100+', label: 'Sponsors' }
];

export default function About() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Ontario Tech Racing</h2>
            <p className="text-gray-400 mb-6">
              Ontario Tech Racing is a dynamic team of engineering students passionate about motorsport
              and automotive innovation. We design, build, and race Formula-style vehicles in
              international competitions.
            </p>
            <p className="text-gray-400 mb-6">
              Our team combines cutting-edge technology with hands-on engineering experience,
              preparing the next generation of automotive engineers and innovators.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-white text-center">
                Ontario Tech<br />Racing
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 