import React from "react";
import { motion } from "motion/react";

export const Title = ({ title, desc }) => {
  return (
    <div className="w-full mt-40 text-center">
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="text-3xl font-medium text-center text-gray-800 sm:text-5xl dark:text-white"
      >
        {title}
      </motion.h2>
      
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto mt-4 text-center text-gray-500 dark:text-gray-400"
      >
        {desc}
      </motion.p>
    </div>
  );
};