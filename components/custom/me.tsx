"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Me = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const originalText = "Software Developer";
  const textRef = useRef<HTMLHeadingElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const scrambleText = () => {
    if (!textRef.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    let startTime = performance.now();
    const duration = 2000;
    const totalIterations = originalText.length;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const iteration = progress * totalIterations;

      const scrambled = originalText
        .split("")
        .map((letter, index) => {
          if (index < Math.floor(iteration)) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (textRef.current) {
        textRef.current.textContent = scrambled;
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    scrambleText();
    const intervalId = setInterval(scrambleText, 5000);
    return () => {
      clearInterval(intervalId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    },
  };

  return (
    <div className="w-screen h-screen text-center box-border bg-background text-foreground">
      <motion.div
        className="flex flex-col justify-center items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-7xl md:text-8xl m-8 font-black"
          variants={itemVariants}
        >
          Suraj Kumal
        </motion.h1>
        <motion.h3
          ref={textRef}
          className="text-2xl md:text-3xl m-2 p-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:cursor-pointer will-change-contents rounded-md"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrambleText}
        >
          {originalText}
        </motion.h3>
      </motion.div>
    </div>
  );
};

export default Me;
