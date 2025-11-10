"use client";

import React, { useRef } from "react";
import SkillData from "@/app/data/skilldata";
import { motion, useInView } from "framer-motion";

const UnderTheHood = () => {
  const techStack = SkillData();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    "Programming Language",
    "Frontend Technology",
    "Backend Framework",
    "Database",
    "Cloud / DevOps Tool",
    "Version Control",
  ];

  const groupedSkills = categories.map((category) => ({
    category,
    skills: techStack.filter((tech) => tech.skill === category),
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen text-center flex justify-center items-center py-8 md:py-16 px-4"
    >
      <div className="max-w-7xl w-full">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-24 font-black text-foreground underline decoration-2 underline-offset-4"
        >
          What I Work With
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {groupedSkills.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="bg-background rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
            >
              <motion.h4
                variants={categoryVariants}
                className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-5 pb-2 border-b-2 border-border"
              >
                {category}
              </motion.h4>
              <div className="flex flex-wrap gap-4 sm:gap-5 justify-center">
                {skills.map((tech) => (
                  <motion.div
                    key={tech.id}
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 group"
                    title={tech.tsname}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-background group-hover:bg-background/80 transition-colors duration-300">
                      <i
                        className={`${tech.classname} text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 ease-in-out text-muted-foreground group-hover:text-foreground`}
                      ></i>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                      {tech.tsname}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UnderTheHood;
