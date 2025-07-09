'use client';

import { motion } from 'framer-motion';

interface FormulaProps {
  formula: string;
  description?: string;
}

export default function Formula({ formula, description }: FormulaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 rounded border text-center my-4"
    >
      <strong className="text-xl">{formula}</strong>
      {description && (
        <span className="text-sm text-gray-600 mt-2 block">
          {description}
        </span>
      )}
    </motion.div>
  );
}