'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2023',
    title: 'Latest Achievement',
    description: 'Secured first place in the Formula SAE competition, showcasing our team\'s dedication and innovation.',
    image: '/images/history/2023.jpg',
  },
  {
    year: '2022',
    title: 'Technical Innovation',
    description: 'Implemented advanced aerodynamics and improved vehicle dynamics, resulting in better performance.',
    image: '/images/history/2022.jpg',
  },
  {
    year: '2021',
    title: 'Team Growth',
    description: 'Expanded our team to include more diverse engineering disciplines and business roles.',
    image: '/images/history/2021.jpg',
  },
  {
    year: '2020',
    title: 'Foundation',
    description: 'Established the Ontario Tech Racing team with a vision to excel in Formula SAE racing.',
    image: '/images/history/2020.jpg',
  },
];

export default function History() {
  return (
    <section id="history" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our History</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow our journey from inception to becoming a leading Formula SAE team, 
            marked by significant achievements and continuous growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ot-blue" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-ot-blue font-bold mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ot-blue rounded-full" />

                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={`${event.year} - ${event.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 