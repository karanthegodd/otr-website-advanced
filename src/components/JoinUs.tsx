'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const roles = {
  engineering: [
    'Mechanical Design',
    'Electrical Systems',
    'Aerodynamics',
    'Manufacturing',
    'Vehicle Dynamics',
    'Data Acquisition',
  ],
  business: [
    'Project Management',
    'Sponsorship',
    'Marketing',
    'Finance',
    'Event Planning',
    'Social Media',
  ],
};

export default function JoinUs() {
  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of something extraordinary. We're looking for passionate students 
            who want to make an impact in Formula SAE racing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Engineering Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="text-ot-blue mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Engineering Roles</h3>
            </div>
            <ul className="space-y-3">
              {roles.engineering.map((role, index) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <svg className="w-5 h-5 text-ot-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {role}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Roles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="text-ot-blue mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Business Roles</h3>
            </div>
            <ul className="space-y-3">
              {roles.business.map((role, index) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <svg className="w-5 h-5 text-ot-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {role}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to join our team? Fill out the application form below.
          </p>
          <a
            href="#contact"
            className="inline-block bg-ot-blue hover:bg-ot-blue-light text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
} 