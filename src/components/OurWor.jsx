import React from "react";
import { Title } from "./Title";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];
  
  return (
    <motion.div
      id="our-work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center gap-10 px-4 pb-20 text-gray-700 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white"
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
          title="Our latest work"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>
      
      {/* Work Grid with staggered animations */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid w-full max-w-6xl gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            whileHover={{ y: -8 }}
            className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer group rounded-xl dark:bg-gray-900 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <motion.img 
                src={work.image} 
                className="w-full transition-transform duration-500 rounded-t-xl group-hover:scale-110" 
                alt={work.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
              />
            </div>
            
            <div className="p-5">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
                className="mt-2 mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                {work.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                className="text-sm leading-relaxed opacity-70"
              >
                {work.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
                className="mt-4 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
              >
                <span className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-400">
                  Learn more 
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurWork;