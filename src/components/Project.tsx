'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Project() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-gray-900" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Building the Future of Racing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Ontario Tech Racing's innovative approach to electric vehicle design and performance
          </motion.p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF6B00]">Project Overview</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our team is dedicated to designing and building high-performance electric race cars
                that compete in Formula SAE competitions worldwide. Each year, we push the boundaries
                of innovation and engineering excellence.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF6B00] rounded-full mr-3"></span>
                  Advanced Electric Powertrain
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF6B00] rounded-full mr-3"></span>
                  Custom Aerodynamic Package
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF6B00] rounded-full mr-3"></span>
                  Carbon Fiber Monocoque
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 h-[400px] rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500">Project Overview Image</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FF6B00]">
            Project Timeline
          </h2>
          <div className="space-y-12">
            {[
              {
                phase: "Design Phase",
                date: "September - December",
                description: "Initial concept development and CAD modeling"
              },
              {
                phase: "Manufacturing",
                date: "January - March",
                description: "Component fabrication and assembly"
              },
              {
                phase: "Testing",
                date: "April - May",
                description: "Vehicle testing and performance optimization"
              },
              {
                phase: "Competition",
                date: "June - July",
                description: "Formula SAE Electric competition"
              }
            ].map((item, index) => (
              <div key={item.phase} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2">{item.phase}</h3>
                  <p className="text-[#FF6B00]">{item.date}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 text-lg">{item.description}</p>
                  <div className="mt-4 bg-gray-800 h-[200px] rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">{item.phase} Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FF6B00]">
            Technical Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Powertrain",
                specs: ["80kW Peak Power", "400V System", "Custom Battery Pack"]
              },
              {
                title: "Aerodynamics",
                specs: ["Full Aero Package", "CFD Optimized", "Active DRS System"]
              },
              {
                title: "Electronics",
                specs: ["Custom ECU", "Telemetry System", "Traction Control"]
              }
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Project</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of our innovative racing team and help shape the future of electric motorsports
          </p>
          <a
            href="/join-us"
            className="inline-block bg-[#FF6B00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B00]/90 transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
} 