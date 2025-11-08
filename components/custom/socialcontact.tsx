"use client";

import React, { useRef } from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const SocialContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        // ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        // ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <>
      <div
        ref={ref}
        className="w-screen min-h-screen text-center flex justify-center items-center py-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl w-full px-4"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* Socials Section */}
            <motion.div variants={sectionVariants} className="m-8 md:m-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Socials
              </h3>
              <div className="flex justify-center gap-5">
                {[
                  {
                    href: "https://www.linkedin.com/in/suraj-kumal-58881a338/",
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.github.com/suraj-kumal",
                    Icon: IoLogoGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.facebook.com/suraj.kumal.17",
                    Icon: FaFacebook,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/_surajkumal_/",
                    Icon: FaInstagram,
                    label: "Instagram",
                  },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    aria-label={label}
                    variants={iconVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-5xl md:text-6xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="m-8 md:m-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact
              </h3>
              <motion.h4
                variants={textVariants}
                className="text-base md:text-xl mb-2"
              >
                <a
                  href="mailto:surajkumal8773@gmail.com"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  surajkumal8773@gmail.com
                </a>
              </motion.h4>
              <motion.h4
                variants={textVariants}
                className="text-base md:text-xl text-foreground"
              >
                +9779704230781
              </motion.h4>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end mr-3">
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-900">
          <p className="">Note : Deployed on 11/11/2025</p>
        </div>
      </div>
    </>
  );
};

export default SocialContact;
