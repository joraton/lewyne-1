'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationProps {
  previousPage?: {
    href: string;
    title: string;
  };
  nextPage?: {
    href: string;
    title: string;
  };
  currentProgress: number; // Percentage (0-100)
  currentStep: string; // e.g., "2/6"
}

export default function Navigation({ previousPage, nextPage, currentProgress, currentStep }: NavigationProps) {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au plan</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{currentStep}</span>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-between items-center mt-12"
      >
        {previousPage ? (
          <Link 
            href={previousPage.href} 
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{previousPage.title}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextPage && (
          <Link 
            href={nextPage.href} 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>{nextPage.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </motion.div>
    </>
  );
}