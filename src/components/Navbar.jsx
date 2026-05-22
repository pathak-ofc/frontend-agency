import React, { useState } from "react";
import assets from "../assets/assets.js";
import { useTheme } from "./lib/utils.js";
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 font-medium sm:px-12 lg:px-24 xl:px-40 backdrop-blur-xl bg-white/50 dark:bg-black">
      <img
        src={theme === "light" ? assets.logo : assets.logo_dark}
        alt="logo"
        className="w-32 sm:w-40"
      />

      <div
        className={`top-0 bottom-0 right-0 flex gap-5 text-gray-700 transition-all dark:text-white sm:text-sm ${sideBar ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"} max-sm:fixed max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[var(--color-primary)] max-sm:text-white max-sm:pt-20 sm:items-center sm:backdrop-blur-xl`}
      >
        <img
          src={assets.close_icon}
          className="absolute w-5 right-4 top-4 sm:hidden max-sm:w-100"
          alt=""
          onClick={() => setSideBar(false)}
        />
        <a
          onClick={() => setSideBar(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSideBar(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSideBar(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSideBar(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        
        <img
          src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
          onClick={toggleTheme}
          className="size-8 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt=""
        />

        
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSideBar(true)}
          className="w-8 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
