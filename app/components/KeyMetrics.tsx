"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "years of experience",
    description: "Dedicated in honing my skills in full stack development.",
  },
  {
    id: 2,
    value: "10+",
    label: "projects completed",
    description: "From small apps to complex web platforms.",
  },
  {
    id: 3,
    value: "6+",
    label: "technologies mastered",
    description: "Expertise in modern web development stack.",
  },
  {
    id: 4,
    value: "99%",
    label: "code quality",
    description: "Committed to writing clean, maintainable code.",
  },
  {
    id: 5,
    value: "500+",
    label: "commits on github",
    description: "Active contributor to open source projects.",
  },
];

const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="bg-black">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="container mx-auto px-4 py-16 md:py-32 text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-16 text-center"
        >
          Key <span className="text-purple-400">Metrics</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col p-6 md:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-4"
              >
                {metric.value}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-xl md:text-2xl font-bold text-white mb-3"
              >
                {metric.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-base md:text-lg text-gray-300"
              >
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default KeyMetrics;
