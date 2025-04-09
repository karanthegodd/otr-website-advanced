'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sponsors = {
  platinum: [
    { name: 'TechCorp', logo: '/images/sponsors/techcorp.png' },
    { name: 'AutoTech', logo: '/images/sponsors/autotech.png' },
  ],
  gold: [
    { name: 'InnovateX', logo: '/images/sponsors/innovatex.png' },
    { name: 'RacingPro', logo: '/images/sponsors/racingpro.png' },
    { name: 'EngineTech', logo: '/images/sponsors/enginetech.png' },
  ],
  silver: [
    { name: 'PartsCo', logo: '/images/sponsors/partco.png' },
    { name: 'DesignLab', logo: '/images/sponsors/designlab.png' },
    { name: 'SpeedTech', logo: '/images/sponsors/speedtech.png' },
    { name: 'AutoParts', logo: '/images/sponsors/autoparts.png' },
  ],
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're grateful for the support of our sponsors who help us push the boundaries 
            of innovation in Formula SAE racing.
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg flex items-center justify-center"
              >
                <div className="relative h-24 w-48">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg flex items-center justify-center"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg flex items-center justify-center"
              >
                <div className="relative h-16 w-32">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Interested in becoming a sponsor? Join us in our journey to excellence.
          </p>
          <a
            href="#contact"
            className="inline-block bg-ot-blue hover:bg-ot-blue-light text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
} 