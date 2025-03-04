"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gemini AI Chatbot Using API",
    description: "End-To-End-Gemini-Project using Gemini API",
    image: "/images/Projects/Gemmni chatbot image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sahu-Sonali/ChatBot-using-Gemmni-API.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Book Recommendation System using Machine Learning",
    description: "A recommendation system to suggest books based on user interests.",
    image: "/images/Projects/book recommdation image.png",
    tag: ["All", "ML and AI"],
    gitUrl: "https://github.com/Sahu-Sonali/-Book-Recommendation-System.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Sonali Sahu Portfolio ",
    description: "Sonali Sahu Portfolio Website",
    image: "/images/Projects/portfolio images.png",
    tag: ["All", "ML and AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Project Tags */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="ML and AI" isSelected={tag === "ML and AI"} />
      </div>

      {/* Project Cards */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
