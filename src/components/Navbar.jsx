import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["Home", "Experience", "About", "Skills", "Projects", "Contact"];

const Navbar = ({ active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="pointer-events-auto flex justify-between items-center px-6 py-3 w-full max-w-4xl bg-white/70 backdrop-blur-md shadow-sm border border-white/40 rounded-full"
        >
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Harmy.dev</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-2">
            {sections.map((sec) => (
              <li key={sec}>
                <Link
                  to={sec.toLowerCase()}
                  smooth={true}
                  duration={700}
                  spy={true}
                  offset={-100}
                  onSetActive={() => setActive(sec)}
                  className="relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors text-slate-600 hover:text-slate-900"
                >
                  {active === sec && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-100/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {sec}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700 p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden bg-white/90 backdrop-blur-xl shadow-xl border border-white/50 rounded-3xl overflow-hidden p-4"
          >
            <ul className="flex flex-col space-y-2">
              {sections.map((sec) => (
                <li key={sec}>
                  <Link
                    to={sec.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`block w-full text-center py-3 rounded-2xl font-medium transition ${
                      active === sec ? "bg-blue-100 text-blue-900" : "text-slate-600 hover:bg-slate-50"
                    }`}
                    onClick={() => {
                      setActive(sec);
                      setMenuOpen(false);
                    }}
                  >
                    {sec}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
