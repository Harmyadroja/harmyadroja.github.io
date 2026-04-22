import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 z-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-sm border border-white/50 max-w-2xl w-full relative overflow-hidden"
      >
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.5, 1], y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Harmy Adroja</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting UI with code
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SocialLink href="https://github.com/Harmyadroja" icon={<Github size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/harmy-adroja-03073b19b" icon={<Linkedin size={24} />} />
          <SocialLink href="#contact" icon={<Mail size={24} />} isScroll={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon, isScroll }) => {
  const Component = isScroll ? "a" : "a";
  return (
    <Component
      href={href}
      target={isScroll ? "_self" : "_blank"}
      rel={isScroll ? "" : "noopener noreferrer"}
      className="p-4 bg-white/60 hover:bg-white text-slate-700 hover:text-blue-600 rounded-full shadow-sm hover:shadow-md transition-all border border-white/60 hover:scale-110 active:scale-95"
    >
      {icon}
    </Component>
  );
}

export default Hero;
