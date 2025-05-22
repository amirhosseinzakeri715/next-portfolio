"use client";

import React from "react";
import { motion, spring, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "years of experience",
    description: "Dedicated in honing my skills in full stack development . ",
  },
  {
    id: 2,
    value: "10+",
    label: "projects completed",
    description: "from small apps to complex web platforms . ",
  },
  {
    id: 3,
    value: "6+",
    label: "technologies mastered",
    description: "Dedicated in honing my skills in full stack development . ",
  },
  {
    id: 4,
    value: "99%",
    label: "code quality",
    description: "committed to writing clean. ",
  },
  {
    id: 5,
    value: "500+",
    label: "commits on github",
    description: "active contributing to open source. ",
  },
];

const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-black">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-32 text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl font-bold mb-12"
        >
          Key Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  type: spring,
                }}
                className="text-4xl font-bold text-purple-400 mb-2"
              >
                {metric.value}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-xl font-bold  text-white mb-2"
              >
                {metric.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className=" text-gray-300/50 mb-2"
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
