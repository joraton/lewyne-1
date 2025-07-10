'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  LucideIcon
} from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

const colorMap = {
  blue: {
    bg: 'bg-blue-100',
    icon: 'bg-blue-500',
    hover: 'hover:bg-blue-50',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-100',
    icon: 'bg-green-500',
    hover: 'hover:bg-green-50',
    border: 'border-green-200'
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'bg-purple-500',
    hover: 'hover:bg-purple-50',
    border: 'border-purple-200'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'bg-orange-500',
    hover: 'hover:bg-orange-50',
    border: 'border-orange-200'
  },
  red: {
    bg: 'bg-red-100',
    icon: 'bg-red-500',
    hover: 'hover:bg-red-50',
    border: 'border-red-200'
  },
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'bg-indigo-500',
    hover: 'hover:bg-indigo-50',
    border: 'border-indigo-200'
  },
  pink: {
    bg: 'bg-pink-100',
    icon: 'bg-pink-500',
    hover: 'hover:bg-pink-50',
    border: 'border-pink-200'
  },
  cyan: {
    bg: 'bg-cyan-100',
    icon: 'bg-cyan-500',
    hover: 'hover:bg-cyan-50',
    border: 'border-cyan-200'
  }
};

export default function SectionBlock({ 
  title, 
  description, 
  icon: IconComponent, 
  color, 
  href
}: SectionBlockProps) {
  const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue;

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          group relative overflow-hidden rounded-lg sm:rounded-xl border-2 ${colors.border} ${colors.bg} 
          ${colors.hover} transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md
        `}
      >
        <div className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 5 }}
            className={`
              flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 ${colors.icon} rounded-full 
              flex items-center justify-center shadow-lg
            `}
          >
            <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Button */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex-shrink-0"
          >
            <div className="bg-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
              <div className="flex items-center gap-1 sm:gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                <span className="hidden sm:inline">Commencer</span>
                <span className="sm:hidden">Voir</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      </motion.div>
    </Link>
  );
}