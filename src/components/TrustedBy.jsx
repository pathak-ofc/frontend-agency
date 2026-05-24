import React from 'react';
import { company_logos } from '../assets/assets.js';
import { motion } from "motion/react";

const TrustedBy = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...company_logos, ...company_logos, ...company_logos];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-10 px-4 mt-16 overflow-hidden sm:px-12 lg:px-24 xl:px-40'
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-sm font-semibold tracking-wider text-gray-500 uppercase sm:text-base'
      >
        Trusted by 1,000+ Leading Companies
      </motion.h3>
      
      {/* Auto-scrolling logo strip */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-16 sm:gap-20 md:gap-24"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt={`Company logo`}
              className='transition-all duration-300 max-h-6 sm:max-h-7 grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
            />
          ))}
        </motion.div>
        
        {/* Gradient fade effects on edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900" />
      </div>
    </motion.div>
  );
};

export default TrustedBy;