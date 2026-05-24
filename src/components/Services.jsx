import React from "react";
import assets from "../assets/assets.js";
import { Title } from "./Title.jsx";
import ServiceCard from "./ServiceCard.jsx";

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
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-[100px] -left-[100px] lg:-top-[500px] lg:-left-[250px] -z-10 dark:hidden mt-[-10%]"
      />
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid md:gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
