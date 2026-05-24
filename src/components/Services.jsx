import React from "react";
import assets from "../assets/assets.js";
import { Title } from "./Title.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center px-4 text-gray-700 gap-7 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white"
    >
      {/* Background image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-[100px] -left-[100px] lg:-top-[500px] lg:-left-[250px] -z-10 dark:hidden"
      />

      {/* Title - centered */}
      <div className="w-full text-center">
        <Title
          title="How can we help?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </div>

      {/* Services Grid */}
      <div className="grid w-full grid-cols-1 gap-6 md:justify-self-center md:grid-cols-2 md:gap-10 md:ml-52">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;