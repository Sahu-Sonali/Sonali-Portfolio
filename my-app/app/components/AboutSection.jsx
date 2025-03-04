"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>MySQL</li>
        <li>django</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Machine Learning</li>
        <li>git</li>
        <li>Angular.js</li>
        <li>flask</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Bachelor of Engineering in Computer Science       (2021-2025)</b><br></br> 
        Cambridge Institute Of Technology, Bangalore<br></br>
        Specialization in Computer Science. </li>
        <li><b>12th Standard       (2021)</b><br></br>
          Kendriya Vidyalaya Asc Center, Bangalore<br></br>
          Mathmatics and Computer Science </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Science and ML certificate from Nasscom foundation</li>
        <li>Infosys Citizen Data Science using Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="computer image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            🌱  A learner , a coder , loves to know about science and emerging technologies. 
            Technology is my 1st love, than next is space . In my free time I love to listen 
            music and read books.working fast is my way of doing things. Also keep thinking
            about design of machines keep me busy.Many times I just work and sometimes I 
            just enjoy to keep myself in connect with my family and friends  😉
            <br />
            <br />
            Let's connect and innovate together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;