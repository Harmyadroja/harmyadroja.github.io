import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import profileImg from '../assets/profile2.jpg';

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 py-24 z-10 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-slate-800 mb-12"
      >
        Contact
      </motion.h3>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/50 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Profile */}
        <div className="bg-blue-50/80 p-10 md:w-2/5 flex flex-col items-center justify-center text-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={profileImg}
            alt="Harmy Profile"
            className="w-36 h-36 rounded-[2rem] object-cover mb-6 shadow-md border-4 border-white"
          />
          <h2 className="text-2xl font-bold text-slate-800">Harmy Adroja</h2>
          <p className="text-blue-600 font-medium mb-8">Software Engineer</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1nJuWvrRG9WBp-YTbcYkY2iWDmC38cYwG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-slate-700 transition"
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </div>

        {/* Right Side: Contact Info */}
        <div className="p-10 md:w-3/5 flex flex-col justify-center gap-6">
          <ContactCard icon={<Mail className="text-pink-500" />} title="Email" value="harmy.adroja@gmail.com" />
          <ContactCard icon={<Phone className="text-blue-500" />} title="Phone" value="+91 63526 68908" />
        </div>
      </motion.div>
    </section>
  );
};

const ContactCard = ({ icon, title, value }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="bg-white/80 p-6 rounded-3xl shadow-sm border border-white/50 flex items-center gap-4 transition-all"
  >
    <div className="bg-slate-50 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      <p className="text-slate-600 font-medium">{value}</p>
    </div>
  </motion.div>
);

export default Contact;
