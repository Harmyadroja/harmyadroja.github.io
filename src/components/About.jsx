import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-4 py-24 z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-purple-50/70 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/50 shadow-sm text-center"
      >
        <h3 className="text-4xl font-bold text-slate-800 mb-6">About Me</h3>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
          Self‑motivated B.Tech graduate in ICT with a strong foundation in web development and embedded systems. 
          11 months of hands‑on experience at Complitech, including real‑world software development as an intern 
          and full‑time employee. Passionate about building impactful applications with clean and scalable code.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
