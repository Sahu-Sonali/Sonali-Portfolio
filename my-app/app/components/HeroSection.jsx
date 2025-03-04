"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Content */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sonali Sahu',
        600, // wait 1s before replacing "Mice" with "Hamsters"
        'ML and AI Enthusiast',
        600,
        'Web devlopment Enthusiast',
        600,
        'a Learner',
        600
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            🌱  A learner , a coder , loves to know about science and emerging Technologies.😉
            <br />
            <br />
            Let's connect and innovate together!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className=" col-span-5 flex place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full border-4 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
               src="/images/hero-image.png"
               alt="hero image"
               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
               width={300}
               height={300}
               />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
