import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#000a1e] transition-all duration-700 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Heartbeat Animation Container */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1, 1.4, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center w-24 h-24"
        >
          <span className="material-symbols-outlined text-6xl text-[#90efef] fill-current">
            favorite
          </span>
          <div className="absolute inset-0 rounded-full border-2 border-[#90efef] opacity-20 animate-ping"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-display font-bold text-xl text-white tracking-wider"
        >
          Dr. Aamir Dogra
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="mt-2 font-body text-sm text-[#708ab5]"
        >
          Elite Pediatric &amp; Newborn Care
        </motion.p>
      </div>
    </div>
  );
};
