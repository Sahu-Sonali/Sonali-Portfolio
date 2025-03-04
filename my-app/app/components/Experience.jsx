"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Nasscom Foundation",
    role: "Data Science and ML Intern",
    duration: "Dec/2024-Feb/2025",
    description:
      "Learned about Data Science and ML",
  },
  {
    id: 2,
    company: "Indian TechKeys",
    role: "Web Devlopment Intern",
    duration: "May/2022-June/2022",
    description:
      "Learned Web Devlopment as New Learner.",
  },
 
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Work Experience
      </h2>

      <div className="relative border-l-4 border-gray-600 ml-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 ml-6"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-10px]"></div>
            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
            <p className="text-white text-lg">{exp.company}</p>
            <p className="text-white italic">{exp.duration}</p>
            <p className="text-white mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
