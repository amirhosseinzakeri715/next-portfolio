"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Admin Dashboard",
    description: "A comprehensive admin dashboard with real-time analytics, user management, and customizable widgets.",
    image: "/assets/dash.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    year: 2025,
    title: "Family Tracker",
    description: "A family location tracking app with real-time updates, geofencing, and emergency alerts.",
    image: "/assets/project2.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 3,
    year: 2024,
    title: "Note Keeper",
    description: "A modern note-taking application with markdown support, cloud sync, and collaborative features.",
    image: "/assets/project3.png",
    technologies: ["React", "Firebase", "Markdown", "Tailwind CSS"],
  },
  {
    id: 4,
    year: 2024,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with secure payments, inventory management, and analytics.",
    image: "/assets/ecommercial.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="portfolio" className="py-16 md:py-20 text-white bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Featured <span className="text-purple-400">Projects</span>
            </h2>

            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer group"
                >
                  <p className="text-purple-400 text-base md:text-lg mb-1">{project.year}</p>
                  <h3
                    className={`text-xl md:text-2xl font-semibold group-hover:text-purple-400 transition-colors
                        ${
                          selectedProject.id === project.id ? "text-purple-200" : ""
                        } duration-300`}
                  >
                    {project.title}
                  </h3>
                  {selectedProject.id === project.id && (
                    <div className="border-b border-white/10 my-4"></div>
                  )}
                  {selectedProject.id === project.id && (
                    <>
                      <p className="text-gray-400 text-base md:text-lg transition-all duration-500 ease-in-out mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowModal(true);
                        }}
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        View Details
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain rounded-2xl border border-white/10 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {showModal && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
