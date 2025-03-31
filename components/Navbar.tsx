'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            PixelCraft Studios
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 