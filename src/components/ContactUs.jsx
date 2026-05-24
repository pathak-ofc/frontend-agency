import React, { useState } from "react";
import { Title } from "./Title";
import assets from "../assets/assets.js";

const ContactUs = () => {


  return (
    <div
      id="contact-us"
      className="flex flex-col items-center px-4 py-20 text-gray-700 gap-7 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        className="grid w-full max-w-3xl gap-5 sm:gap-6 md:grid-cols-2"
      >
        {/* Name Field - takes full width on mobile, half on desktop */}
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center pl-4 overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent dark:bg-gray-900">
            <img src={assets.person_icon} className="w-5 h-5 opacity-50" alt="person" />
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center pl-4 overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent dark:bg-gray-900">
            <img src={assets.email_icon} className="w-5 h-5 opacity-50" alt="email" />
            <input
              type="email"
              name="email"
              placeholder="hello@example.com"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </div>
        </div>

        {/* Message Field - Full width */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full p-4 text-sm transition-all duration-300 bg-white border border-gray-300 outline-none resize-none rounded-xl dark:bg-gray-900 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>


        {/* Submit Button */}
        <div className="flex justify-center md:col-span-2 md:justify-start">
          <button
            type="submit"
            className="relative flex items-center gap-2 px-8 py-3 overflow-hidden text-sm font-medium text-white transition-all rounded-full cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactUs;