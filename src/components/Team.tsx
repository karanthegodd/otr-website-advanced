'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Team Lead",
    role: "Project Manager",
    description: "Oversees all aspects of the racing team and vehicle development."
  },
  {
    name: "Chief Engineer",
    role: "Technical Lead",
    description: "Leads the technical design and implementation of the vehicle."
  },
  {
    name: "Mechanical Lead",
    role: "Mechanical Engineer",
    description: "Manages mechanical systems design and integration."
  },
  {
    name: "Electrical Lead",
    role: "Electrical Engineer",
    description: "Oversees electrical systems and power management."
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Smoky background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-white/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-[pulse_4s_ease-in-out_infinite_2s]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-blue-500 to-white bg-clip-text text-transparent">Our Team</h2>
          <p className="text-xl text-gray-400">Meet the dedicated members behind Ontario Tech Racing</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[300px] mb-16 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/team/team.png"
            alt="Ontario Tech Racing Team"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >
              <div className="aspect-square relative bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-400 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 