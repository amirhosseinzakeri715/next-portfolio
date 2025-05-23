"use client";

import React from "react";

const services = [
    {
      id: "01",
      title: "Full-Stack Development",
      description: "Building end-to-end web applications using Next.js, TypeScript, and modern frameworks. Specializing in scalable solutions with clean architecture and best practices.",
    },
    {
      id: "02",
      title: "Frontend Development",
      description: "Creating responsive and performant user interfaces with Next.js, TypeScript, and Tailwind CSS. Implementing modern design patterns and optimizing for user experience.",
    },
    {
      id: "03",
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces with a focus on accessibility and user experience. Creating beautiful, responsive layouts that work seamlessly across all devices.",
    },
    {
      id: "04",
      title: "Technical Consulting",
      description: "Providing expert guidance on technology stack selection, architecture decisions, and best practices. Helping teams implement modern web development solutions effectively.",
    },
  ];

const Services = () => {
  return (
    <section id="services" className="text-white py-16 md:py-32 w-full bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-0">
              My <span className="text-purple-400">Services</span>
            </h2>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
              {services.map((service) => (
                <div key={service.id} className="flex flex-col">
                  <div className="text-purple-400 font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                    {service.id}
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 flex flex-col items-start">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white/90">{service.title}</h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
