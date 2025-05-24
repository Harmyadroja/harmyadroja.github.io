import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react"; // <-- Added Menu, X
import profileImg from './assets/profile2.jpg';

const sections = ["Home", "Experience", "About", "Skills", "Projects", "Contact"];

const App = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // <-- Menu toggle state

  return (
    <div className="container-main bg-white font-sans scroll-smooth">
      {/* Navbar */}

      <header className="fixed top-0 w-full bg-pink-100 shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-slate-700">Harmy.dev</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm">
            {sections.map((sec) => (
              <li key={sec}>
                <Link
                  to={sec.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-96} // offset for fixed header height
                  className={`cursor-pointer hover:text-cyan-800 transition ${active === sec ? "text-slate-500" : "text-slate-700"}`}
                  onSetActive={() => setActive(sec)}
                >
                  {sec}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-pink-50 px-6 py-4 space-y-4 text-sm">
            {sections.map((sec) => (
              <li key={sec}>
                <Link
                  to={sec.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`block cursor-pointer hover:text-cyan-800 transition ${active === sec ? "text-slate-500" : "text-slate-700"}`}
                  onClick={() => {
                    setActive(sec);
                    setMenuOpen(false); // close menu on click
                  }}
                >
                  {sec}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className="pt-24 space-y-24">
        <section id="home" className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h2 className="text-4xl text-slate-700 md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Hi, I'm Harmy Adroja
          </motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Crafting UI with Code
          </motion.p>
          <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <a href="https://github.com/Harmyadroja" target="_blank" className="hover:text-cyan-800"><Github /></a>
            <a href="https://www.linkedin.com/in/harmy-adroja-03073b19b" target="_blank" className="hover:text-cyan-800"><Linkedin /></a>
            <a href="#contact" className="hover:text-cyan-800"><Mail /></a>
          </motion.div>
        </section>

        <section id="experience" className="scroll-mt-24 max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-slate-700 mb-8">Experience</h3>
          <div className="space-y-6">
            <div className="bg-pink-100 p-4 rounded-xl">
              <h4 className="text-lg font-semibold">Complitech</h4>
              <p className="text-sm text-gray-600">Software Engineer • Jan 2024 - Nov 2024</p>
              <ul className="list-disc pl-5 text-gray-600 leading-relaxed text-justify">
                <li className="text-gray-600 mt-2">Completed 6-month internship followed by 5-month full-time role in web development projects.</li>
                <li className="text-gray-600">Gained hands-on experience with frontend technologies and backend integration.</li>
              </ul>
            </div>
            <div className="bg-pink-100 p-4 rounded-xl">
              <h4 className="text-lg font-semibold">4ColorDesign.com</h4>
              <p className="text-sm text-gray-600">Software Engineer Intern • June 2023 - July 2023</p>

              <ul className="list-disc pl-5 text-gray-600 leading-relaxed text-justify">
                <li>
                  Gained foundational experience in PHP programming and Linux server environments. Learned to work with command-line tools,
                  troubleshoot application errors, and assist in daily IT operations and support tasks within a fast-paced development team.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-slate-700 mb-8">About Me</h3>
          <p className="text-slate-700">
            Self‑motivated B.Tech graduate in ICT with a strong foundation in web development and embedded systems. 11 months of hands‑on experience
            at Complitech, including real‑world software development as an intern and full‑time employee. Passionate about building impactful
            applications with clean and scalable code.
          </p>
        </section>

        <section id="skills" className="scroll-mt-24 max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-slate-700 mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
            {[
              "PHP", "Laravel", "C", "HTML/CSS", "Python", "PCB Designing", "Arduino"
            ].map(skill => (
              <div key={skill} className="bg-pink-100 text-slate-700 rounded-xl p-4 transition">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-slate-700 mb-8">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-pink-100 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="text-xl text-slate-700 font-semibold mb-2">Smart Temple Android App</h4>
              <p className="text-gray-600 mb-2">Automated temple activities like ringing bells and offering flowers using an Android application.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
            <div className="bg-pink-100 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="text-xl text-slate-700 font-semibold mb-2">Game Using Arduino</h4>
              <p className="text-gray-600 mb-2">Developed two games — Tic Tac Toe and Whack-a-LED — using Arduino Uno, LEDs, and switches.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
            <div className="bg-pink-100 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="text-xl text-slate-700 font-semibold mb-2">Your Personal Nutritionist (Python)</h4>
              <p className="text-gray-600 mb-2">Calculated BMI from person image using GrabCut and pixel analysis; recommended diet plans accordingly.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-slate-700 mb-4">Contact</h3>
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-12 shadow-lg rounded-xl overflow-hidden">
            <div className="bg-pink-100 text-slate-700 p-8 md:w-1/3 flex flex-col items-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold">Harmy</h2>
              <p className="text-sm mb-4">Software Engineer</p>
              <a
                href="https://drive.google.com/file/d/1nJuWvrRG9WBp-YTbcYkY2iWDmC38cYwG/view?usp=drive_link"
                download
                className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
              >
                Download CV
              </a>
            </div>

            <div className="bg-pink-100  p-8 md:w-2/3 flex flex-col justify-center gap-6">

              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow text-left flex items-start gap-4 max-w-lg w-full">
                  <Mail className="text-slate-700 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-1">Email</h4>
                    <p className="text-gray-600 break-all">harmy.adroja@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow text-left flex items-start gap-4 max-w-lg w-full">
                  <Phone className="text-slate-700 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-1">Contact</h4>
                    <p className="text-gray-600">+91 63526 68908</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-600 py-6">
        &copy; 2025 Harmy Adroja. All rights reserved.
      </footer>
    </div>
  );
}

export default App;