import React from 'react';
import { motion } from 'framer-motion';

const ColumbiaCareLogo = () => {
  return (
    <motion.div 
      className="flex items-center gap-3" // Aligns icon and text side-by-side
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated House Icon */}
      <motion.div
        animate={{
          y: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="relative flex-shrink-0">
          <svg
            width="44" // Adjusted size for horizontal layout
            height="44"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-emerald-300"
          >
            <path 
              d="M3 9.5l9-7 9 7V21H3V9.5z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="currentColor" 
              fillOpacity="0.1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M9 21V12h6v9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-lg opacity-20 -z-10" />
        </div>
      </motion.div>

      {/* Animated Site Name */}
      <div className="text-left">
        <h1 className="text-xl font-bold text-white tracking-wide">
          <span
            className="bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundSize: '300% auto',
            }}
          >
            Columbia Care Home
          </span>
        </h1>
      </div>
    </motion.div>
  );
};

export default ColumbiaCareLogo;