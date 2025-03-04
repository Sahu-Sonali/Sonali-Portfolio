import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl bg-[#181818] overflow-hidden group relative">
      {/* Image */}
      <div className="relative h-52 md:h-72 w-full">
        <Image 
          src={imgUrl} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          unoptimized={true}
        />
      </div>

      {/* Overlay Icons - Fixed */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#181818] opacity-0 group-hover:opacity-80 transition-opacity duration-500">
        <a href={gitUrl} target="_blank" rel="noopener noreferrer">
          <div className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </div>
        </a>
        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
          <div className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </div>
        </a>
      </div>

      {/* Project Details */}
      <div className="text-white p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;



