import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Smart Temple Android App",
      desc: "Automated temple activities like ringing bells and offering flowers using an Android application."
    },
    {
      title: "Game Using Arduino",
      desc: "Developed two games — Tic Tac Toe and Whack-a-LED — using Arduino Uno, LEDs, and switches."
    },
    {
      title: "Your Personal Nutritionist",
      desc: "Calculated BMI from person image using GrabCut and pixel analysis; recommended diet plans accordingly."
    }
  ];

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 py-24 z-10 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-slate-800 mb-12"
      >
        Projects
      </motion.h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 border border-white/50 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
          >
            <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-pink-500">{project.title.charAt(0)}</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h4>
            <p className="text-slate-600 leading-relaxed flex-grow">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
