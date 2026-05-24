import React from "react";
import { Title } from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center px-4 text-gray-800 gap-7 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white"
    >
      {/* Animated Title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <Title
          title="Meet the team"
          desc="A passionate team of digital experts dedicated to your brands success."
        />
      </motion.div>
      
      {/* Team Grid with staggered animations */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4"
      >
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="flex items-center gap-5 p-5 transition-all duration-300 bg-white border border-gray-100 shadow-xl cursor-pointer max-sm:flex-col rounded-xl dark:border-gray-700 dark:bg-gray-900 shadow-gray-100 dark:shadow-white/5 hover:shadow-2xl"
          >
            <motion.img 
              src={team.image} 
              className="rounded-full w-14 h-14" 
              alt={team.name}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-sm font-bold"
              >
                {team.name}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-xs opacity-60"
              >
                {team.title}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;