'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type BoxType = 'definition' | 'example' | 'key' | 'warning' | 'mnemonic';

interface ContentBoxProps {
  type: BoxType;
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
}

export default function ContentBox({ type, title, children, icon: Icon }: ContentBoxProps) {
  const getBoxStyles = () => {
    switch (type) {
      case 'definition':
        return {
          container: 'bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg',
          title: 'text-lg font-semibold text-blue-900 mb-2',
          content: 'text-blue-800',
          iconColor: 'text-blue-500'
        };
      case 'example':
        return {
          container: 'bg-green-50 border border-green-200 rounded-lg p-6',
          title: 'text-lg font-semibold text-green-900 mb-3',
          content: 'text-green-800',
          iconColor: 'text-green-500'
        };
      case 'key':
        return {
          container: 'bg-purple-50 border border-purple-200 rounded-lg p-6',
          title: 'text-lg font-semibold text-purple-900 mb-3',
          content: 'text-purple-800',
          iconColor: 'text-purple-500'
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg',
          title: 'text-lg font-semibold text-yellow-900 mb-2',
          content: 'text-yellow-800',
          iconColor: 'text-yellow-500'
        };
      case 'mnemonic':
        return {
          container: 'bg-orange-50 p-6 rounded-xl border border-orange-200',
          title: 'text-lg font-semibold text-orange-900 mb-3',
          content: 'text-orange-800',
          iconColor: 'text-orange-500'
        };
      default:
        return {
          container: 'bg-gray-50 border border-gray-200 rounded-lg p-6',
          title: 'text-lg font-semibold text-gray-900 mb-3',
          content: 'text-gray-800',
          iconColor: 'text-gray-500'
        };
    }
  };

  const styles = getBoxStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.container}
    >
      <div className="flex items-start gap-3">
        {Icon && <Icon className={`w-6 h-6 ${styles.iconColor} mt-1 flex-shrink-0`} />}
        <div>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
}