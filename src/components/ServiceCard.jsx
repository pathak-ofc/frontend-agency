import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative max-w-lg m-2 overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-2xl group sm:m-4 rounded-xl dark:border-gray-700 shadow-gray-100 dark:shadow-white/10 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-xl">
      {/* Card content */}
      <div className="relative z-10 flex items-center gap-5 p-6">
        <div className="p-1 bg-gray-100 rounded-full dark:bg-gray-700">
          <img
            src={service.icon}
            alt={service.title}
            className="object-contain w-16 h-16 p-2 transition-transform duration-300 bg-white rounded-full dark:bg-gray-900 group-hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;