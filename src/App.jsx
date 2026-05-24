import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWor.jsx";
import Team from "./components/Team.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;