import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "PHP", "Laravel", "C", "HTML/CSS", "Python", "React", "TailwindCSS", "PCB Designing", "Arduino"
  ];

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 py-24 z-10 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-slate-800 mb-12"
      >
        Skills
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            className="cursor-grab active:cursor-grabbing bg-white/80 backdrop-blur-md text-slate-700 font-semibold text-lg px-6 py-4 rounded-full border border-white/50 shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
