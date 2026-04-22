import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Complitech",
      role: "Software Engineer",
      duration: "Jan 2024 - Nov 2024",
      desc: [
        "Completed 6-month internship followed by 5-month full-time role in web development projects.",
        "Gained hands-on experience with frontend technologies and backend integration."
      ]
    },
    {
      company: "4ColorDesign.com",
      role: "Software Engineer Intern",
      duration: "June 2023 - July 2023",
      desc: [
        "Gained foundational experience in PHP programming and Linux server environments. Learned to work with command-line tools, troubleshoot application errors, and assist in daily IT operations and support tasks within a fast-paced development team."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-4 py-24 z-10 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl font-bold text-center text-slate-800 mb-12"
      >
        Experience
      </motion.h3>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold text-slate-800">{exp.company}</h4>
                <p className="text-lg font-medium text-blue-600">{exp.role}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100/80 px-4 py-1 rounded-full mt-2 md:mt-0 w-fit">
                {exp.duration}
              </span>
            </div>
            <ul className="list-disc pl-5 text-slate-600 space-y-2 leading-relaxed">
              {exp.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
