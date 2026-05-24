import React from "react";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.15,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center w-full gap-6 px-4 py-20 mt-16 overflow-hidden text-center text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white sm:mt-20"
    >
      <motion.div variants={item} className="flex items-center gap-2 border border-gray-400 rounded-full p-1.5 pr-4">
        <img src={assets.group_profile} className="w-20" />
        <p className="text-xs font-medium">Trusted by 10K+ people</p>
      </motion.div>

      <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      <motion.p variants={item} className="max-w-lg pb-3 text-sm font-medium text-gray-500 sm:text-lg dark:text-white/75">
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </motion.p>

      <motion.div variants={item} className="relative w-full mt-8">
        <img src={assets.hero_img} className="w-full max-w-6xl mx-auto" />

        <motion.img
          src={assets.bgImage1}
          className="absolute -top-[150px] -right-[100px] xl:-top-[400px] xl:-right-[250px] -z-[1] dark:hidden"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;