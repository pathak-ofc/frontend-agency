import React from "react";
import { Title } from "./Title";
import assets from "../assets/assets.js";

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
    <div
      id="our-work"
      className="flex flex-col items-center gap-10 px-4 pb-20 text-gray-700 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      
      <div className="grid w-full max-w-6xl gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {workData.map((work, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer group rounded-xl dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <img 
                src={work.image} 
                className="w-full transition-transform duration-500 rounded-t-xl group-hover:scale-110" 
                alt={work.title} 
              />
            </div>
            
            <div className="p-5">
              <h3 className="mt-2 mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {work.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70">
                {work.description}
              </p>
              
              <div className="mt-4 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-400">
                  Learn more 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;