import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"; // <-- Added Menu, X


const sections = ["Home", "Experience", "About", "Skills", "Projects", "Contact"];

const App = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // <-- Menu toggle state

  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      {/* Navbar */}

      <header className="fixed top-0 w-full bg-gray-900 shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-cyan-400">Harmy.dev</h1>

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
                  className={`cursor-pointer hover:text-cyan-400 transition ${active === sec ? "text-cyan-400" : ""}`}
                  onSetActive={() => setActive(sec)}
                >

                  {sec}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-gray-800 px-6 py-4 space-y-4 text-sm">
            {sections.map((sec) => (
              <li key={sec}>
                <Link
                  to={sec.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`block cursor-pointer hover:text-cyan-400 transition ${active === sec ? "text-cyan-400" : ""}`}
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
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Hi, I'm Harmy Adroja
          </motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Crafting UI with Code
          </motion.p>
          <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <a href="https://github.com/Harmyadroja" target="_blank" className="hover:text-cyan-400"><Github /></a>
            <a href="https://www.linkedin.com/in/harmy-adroja-03073b19b" target="_blank" className="hover:text-cyan-400"><Linkedin /></a>
            <a href="#contact" className="hover:text-cyan-400"><Mail /></a>
          </motion.div>
        </section>

        <section id="experience" className="scroll-mt-24 max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-cyan-400 mb-8">Experience</h3>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4 className="text-lg font-semibold">Complitech</h4>
              <p className="text-sm text-gray-400">Software Engineer • Jan 2024 - Nov 2024</p>
              <ul className="list-disc pl-5 text-gray-300 leading-relaxed text-justify">
                <li className="text-gray-300 mt-2">Completed 6-month internship followed by 5-month full-time role in web development projects.</li>
                <li className="text-gray-300">Gained hands-on experience with frontend technologies and backend integration.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4 className="text-lg font-semibold">4ColorDesign.com</h4>
              <p className="text-sm text-gray-400">Software Engineer Intern • June 2023 - July 2023</p>

              <ul className="list-disc pl-5 text-gray-300 leading-relaxed text-justify">
                <li>
                  Gained foundational experience in PHP programming and Linux server environments. Learned to work with command-line tools,
                  troubleshoot application errors, and assist in daily IT operations and support tasks within a fast-paced development team.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">About Me</h3>
          <p className="text-gray-300">
            Self‑motivated B.Tech graduate in ICT with a strong foundation in web development and embedded systems. 11 months of hands‑on experience
            at Complitech, including real‑world software development as an intern and full‑time employee. Passionate about building impactful
            applications with clean and scalable code.
          </p>
        </section>

        <section id="skills" className="scroll-mt-24 max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
            {[
              "PHP", "Laravel", "C", "HTML/CSS", "Python", "PCB Designing", "Arduino"
            ].map(skill => (
              <div key={skill} className="bg-gray-800 rounded-xl p-4 hover:bg-cyan-900 transition">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-cyan-400 mb-8">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-700 transition">
              <h4 className="text-xl font-semibold mb-2">Smart Temple Android App</h4>
              <p className="text-gray-400 mb-2">Automated temple activities like ringing bells and offering flowers using an Android application.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-700 transition">
              <h4 className="text-xl font-semibold mb-2">Game Using Arduino</h4>
              <p className="text-gray-400 mb-2">Developed two games — Tic Tac Toe and Whack-a-LED — using Arduino Uno, LEDs, and switches.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-700 transition">
              <h4 className="text-xl font-semibold mb-2">Your Personal Nutritionist (Python)</h4>
              <p className="text-gray-400 mb-2">Calculated BMI from person image using GrabCut and pixel analysis; recommended diet plans accordingly.</p>
              {/* <a href="#" className="text-cyan-400 text-sm underline">View Project</a> */}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-4">Contact</h3>
          <p className="text-gray-400 mb-6">Want to connect? Reach out via email or drop a message below.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-800 p-3 rounded-xl outline-none" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800 p-3 rounded-xl outline-none" />
            <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-800 p-3 rounded-xl outline-none"></textarea>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-xl">Send</button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 Harmy Adroja. All rights reserved.
      </footer>
    </div>
  );
}

export default App;