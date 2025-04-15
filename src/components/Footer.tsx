'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ontario Tech Racing</h3>
            <p className="text-gray-400">Building the future of electric racing</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/ontariotechracing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B00] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/ontariotechracing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B00] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            
            <nav className="flex space-x-4">
              <Link href="/project" className="hover:text-[#FF6B00] transition-colors">
                Project
              </Link>
              <Link href="/team" className="hover:text-[#FF6B00] transition-colors">
                Team
              </Link>
              <Link href="/sponsors" className="hover:text-[#FF6B00] transition-colors">
                Sponsors
              </Link>
              <Link href="/join-us" className="hover:text-[#FF6B00] transition-colors">
                Join Us
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ontario Tech Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 