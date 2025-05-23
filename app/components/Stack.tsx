'use client';

import React, { useEffect } from "react";
import {
  SiReact,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Next.js",
    icon: <SiNextdotjs size={100} />,
    color: "text-purple-400",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript size={100} />,
    color: "text-purple-400",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-purple-400",
  },
  {
    id: 4,
    name: "Tailwindcss",
    icon: <SiTailwindcss size={100} />,
    color: "text-purple-400",
  },
  {
    id: 5,
    name: "Postgres",
    icon: <SiPostgresql size={100} />,
    color: "text-purple-400",
  },
  {
    id: 6,
    name: "docker",
    icon: <SiDocker size={100} />,
    color: "text-purple-400",
  },
];

const itemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="relative">
      <section id="stack" className="min-h-screen bg-black">
        <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 font-bold text-center">
              My <span className="text-purple-400">Stack</span>
            </h2>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8">
          <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
            <div className="grid gap-8" ref={ref}>
              {stackItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={itemVariants}
                  className="bg-white/10 flex justify-center items-center flex-row rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`flex items-center ${item.color}`}>{item.icon}</div>
                  <p className="text-white/20 text-xl sm:text-2xl ml-4">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
