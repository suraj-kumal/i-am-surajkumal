"use client";

import React, { useRef } from "react";
import ProjectData from "@/app/data/projectdata";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsShowcase = () => {
  const projects = ProjectData();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center items-center py-12 md:py-20 px-4"
    >
      <div className="max-w-7xl w-full">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-center mb-12 md:mb-16 underline decoration-2 underline-offset-8"
        >
          What I Have Built
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground capitalize flex items-center gap-2">
                    {project.title}
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </motion.div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.desc}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-3 pt-4">
                  <Button
                    asChild
                    variant="default"
                    size="default"
                    className="flex-1 gap-2"
                  >
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="default"
                    className="flex-1 gap-2"
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" />
                      Github
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
