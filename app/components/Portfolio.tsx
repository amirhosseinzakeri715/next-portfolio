"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/public/assets/project1.png";
import project2 from "@/public/assets/project2.png";
import project3 from "@/public/assets/project3.png";
import project4 from "@/public/assets/project4.png";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Admin Dashboard",
    description: "bhjkvgfjyjcvlubibiluytfyk",
    image: project1,
  },
  {
    id: 2,
    year: 2025,
    title: "Family Tracker",
    description: "bhjkvgfjyjcvlubibiluytfyk",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Note Keeper",
    description: "bhjkvgfjyjcvlubibiluytfyk",
    image: project3,
  },
  {
    id: 4,
    year: 2024,
    title: "E-commercial",
    description: "bhjkvgfjyjcvlubibiluytfyk",
    image: project4,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <section id="portfolio" className=" py-20 text-white bg-black ">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div className="">
          <h2 className="text-5xl font-bold ">
            Selected <span className="text-purple-400">Project</span>
          </h2>
          
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-4 group"
            >
              <p className="text-purple-400 text-lg mb-1">{project.year}</p>
              <h3
                className={`text-2xl font-semibold group-hover:text-purple-400 transition-colors
                    ${
                      selectedProject.id === project.id ? "text-purple-200" : ""
                    } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-1 border-gray-100 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
            <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-lg border-gray-500/90 shadow-xl brightness-70 shadow-purple-400/60 hover:brightness-90 hover:shadow-purple-400/30 transition-all duration-600 ease-in-out"
            width={600}
            height={500}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
