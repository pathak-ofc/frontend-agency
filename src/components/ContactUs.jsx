import React, { useState } from "react";
import { Title } from "./Title";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <motion.div
      id="contact-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center px-4 py-20 text-gray-700 gap-7 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
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
          title="Reach out to us"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      {/* Animated Form */}
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onSubmit={handleSubmit}
        className="grid w-full max-w-3xl gap-5 sm:gap-6 md:grid-cols-2"
      >
        {/* Name Field */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1"
        >
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your name <span className="text-red-500">*</span>
          </label>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center pl-4 overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent dark:bg-gray-900"
          >
            <img src={assets.person_icon} className="w-5 h-5 opacity-50" alt="person" />
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </motion.div>
        </motion.div>

        {/* Email Field */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1"
        >
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address <span className="text-red-500">*</span>
          </label>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center pl-4 overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent dark:bg-gray-900"
          >
            <img src={assets.email_icon} className="w-5 h-5 opacity-50" alt="email" />
            <input
              type="email"
              name="email"
              placeholder="hello@example.com"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </motion.div>
        </motion.div>

        {/* Message Field */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2"
        >
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your message <span className="text-red-500">*</span>
          </label>
          <motion.textarea
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full p-4 text-sm transition-all duration-300 bg-white border border-gray-300 outline-none resize-none rounded-xl dark:bg-gray-900 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </motion.div>

        {/* Success Message */}
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:col-span-2"
          >
            <div className="p-4 text-sm text-green-700 bg-green-100 rounded-xl dark:bg-green-900/30 dark:text-green-400">
              ✅ Thank you! We'll get back to you soon.
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center md:col-span-2 md:justify-start"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: isSubmitting ? "0 0 0px rgba(59,130,246,0)" : "0 0 20px rgba(59,130,246,0.3)"
            }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-2 px-8 py-3 overflow-hidden text-sm font-medium text-white transition-all rounded-full cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Sending..." : "Submit"}</span>
            {!isSubmitting && (
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
            )}
            {isSubmitting && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;