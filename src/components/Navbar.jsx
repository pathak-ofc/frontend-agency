import React, { useState, useEffect } from "react";
import assets from "../assets/assets.js";
import { useTheme } from "../lib/utils.js";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [sideBar, setSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSideBar(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sideBar ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [sideBar]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 z-50 flex items-center justify-between w-full px-4 py-3 font-medium transition-all duration-300 sm:px-12 lg:px-24 xl:px-40 ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-lg"
            : "backdrop-blur-md bg-white/50 dark:bg-black/50"
        }`}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={theme === "light" ? assets.logo : assets.logo_dark}
          alt="logo"
          className="w-32 cursor-pointer sm:w-40"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <div className="items-center hidden gap-1 sm:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              href={link.href}
              className="relative px-4 py-2 text-sm rounded-lg hover:text-blue-600 dark:hover:text-blue-400 dark:text-white group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <motion.img
            whileHover={{ scale: 1.1, rotate: theme === "dark" ? 0 : 180 }}
            whileTap={{ scale: 0.95 }}
            src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
            onClick={toggleTheme}
            className="size-8 p-1.5 border border-gray-400 rounded-full cursor-pointer dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            alt="theme toggle"
          />

          <motion.img
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            onClick={() => setSideBar(true)}
            className="w-8 cursor-pointer sm:hidden"
            alt="menu"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {sideBar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSideBar(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-2xl dark:bg-gray-900 sm:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <img
                  src={theme === "light" ? assets.logo : assets.logo_dark}
                  className="w-28"
                />
                <img
                  src={assets.close_icon}
                  className="w-5 cursor-pointer"
                  onClick={() => setSideBar(false)}
                />
              </div>

              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setSideBar(false)}
                    className="text-lg dark:text-gray-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;