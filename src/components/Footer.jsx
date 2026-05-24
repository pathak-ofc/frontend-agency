import React from "react";
import assets from "../assets/assets.js";
import { useTheme } from "../lib/utils.js";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pt-16 pb-8 mt-20 bg-slate-50 dark:bg-gray-900 sm:mt-32 sm:px-10 lg:px-24 xl:px-40">
      {/* Main Footer Content */}
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
        {/* Left Section - Logo & Description */}
        <div className="max-w-md">
          <img src={theme === "light" ? assets.logo : assets.logo_dark} className="w-32 mb-4 sm:w-40" alt="Logo" />
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-blue-500 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-blue-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.78-.2-7.14-2-9.38-4.74-.4.67-.6 1.45-.6 2.28 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.38.1-.78.16-1.2.16-.3 0-.58-.03-.87-.08.59 1.83 2.27 3.16 4.27 3.2-1.56 1.22-3.53 1.95-5.66 1.95-.37 0-.73-.02-1.1-.06 2.04 1.3 4.46 2.06 7.06 2.06 8.48 0 13.12-7 13.12-13.07 0-.2 0-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-pink-600 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 3C7.81 3 4 6.81 4 11.5c0 1.84.56 3.54 1.51 4.94L4 22l5.56-1.51c1.4.95 3.1 1.51 4.94 1.51 4.69 0 8.5-3.81 8.5-8.5S17.19 3 12.5 3zm3.11 12.19c-.2.56-1.16 1.08-1.69 1.11-.45.02-.94.03-2.67-.58-2.23-.79-3.68-2.69-3.78-2.81-.11-.12-1.01-1.34-.99-2.54.02-1.06.6-1.63.86-1.92.2-.22.53-.33.85-.33h.57c.19 0 .45.03.66.52.24.58.81 2.01.88 2.16.07.15.11.33.02.52-.1.19-.15.29-.3.48-.14.18-.31.41-.44.55-.15.18-.3.37-.13.71.17.34.77 1.27 1.65 2.05 1.14 1.01 2.1 1.33 2.4 1.47.3.14.67.12.91-.06.24-.18 1.05-1.22 1.2-1.68.15-.46.15-.84.11-.94-.05-.1-.18-.18-.37-.3-.19-.13-.87-.43-1-.48-.14-.05-.28-.02-.39.13-.11.15-.42.54-.53.66-.11.12-.22.13-.41.05-.19-.08-.81-.3-1.55-.96-.58-.52-.98-1.17-1.09-1.37-.11-.2-.01-.3.08-.4s.24-.28.36-.42c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.44-.06-.14-.54-1.3-.74-1.78-.2-.48-.4-.4-.51-.41-.1-.01-.21-.01-.32-.01-.11 0-.29.04-.44.19-.15.15-.58.56-.58 1.38 0 .82.6 1.62.68 1.73.09.11 1.17 1.79 2.84 2.51 1.67.72 1.67.48 1.97.45.3-.03.97-.4 1.11-.79.14-.39.14-.73.1-.8-.04-.07-.16-.11-.35-.19z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-blue-700 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25 2.99 2.99 0 0 1 3.77 4.25zM21 9h-4v13h4V9zm-14 0H3v13h4V9zm2-5H5v13h4V4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap gap-8 md:gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Content Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Content Writing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@agency.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-8 my-8 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get the latest updates and insights.
            </p>
          </div>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm border rounded-l-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-600 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-center text-gray-500 dark:text-gray-400 sm:flex-row sm:text-left">
        <p>© {currentYear} Agency. All rights reserved.</p>
        <div className="flex justify-center gap-6 sm:justify-start">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
