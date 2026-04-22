import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingShapes3D from "./components/FloatingShapes3D";

const App = () => {
  const [active, setActive] = useState("Home");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "Experience", "About", "Skills", "Projects", "Contact"];
      let current = "Home";
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f4f7fc] text-slate-800 font-sans hide-scrollbar selection:bg-pink-200 selection:text-pink-900">
      <FloatingShapes3D />
      <Navbar active={active} setActive={setActive} />

      <main className="flex flex-col gap-24 pb-24 overflow-hidden relative">
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="text-center text-sm font-medium text-slate-500 py-8 z-10 relative bg-white/30 backdrop-blur-sm border-t border-white/40">
        &copy; {new Date().getFullYear()} Harmy Adroja. Crafted with React, Tailwind & Three.js.
      </footer>
    </div>
  );
};

export default App;