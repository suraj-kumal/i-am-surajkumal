"use client";

import { useState, useEffect, useRef } from "react";
import { ModeToggle } from "@/components/ui/modetoggle";
import Me from "@/components/custom/me";
import UnderTheHood from "@/components/custom/underthehood";
import SocialContact from "@/components/custom/socialcontact";
import ProjectsShowcase from "@/components/custom/projectshowcase";
import MyButton from "@/components/custom/MyButton";

export default function Page() {
  const [hideButton, setHideButton] = useState(false);
  const meRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const socialContactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight;
      if (
        socialContactRef.current &&
        currentPosition >= socialContactRef.current.offsetTop
      ) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const currentPosition = window.scrollY + window.innerHeight / 2;

    if (
      techStackRef.current &&
      currentPosition < techStackRef.current.offsetTop
    ) {
      // Currently in Me section, go to TechStack
      techStackRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (
      projectsRef.current &&
      currentPosition < projectsRef.current.offsetTop
    ) {
      // Currently in TechStack section, go to Projects
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (
      socialContactRef.current &&
      currentPosition < socialContactRef.current.offsetTop
    ) {
      // Currently in Projects section, go to SocialContact
      socialContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {!hideButton && (
        <div className="fixed bottom-8 right-8 z-40">
          <MyButton onClick={scrollToNextSection} />
        </div>
      )}

      <div ref={meRef}>
        <Me />
      </div>

      <div className="bg-foreground h-[0.5px] mx-16"></div>

      <div ref={techStackRef}>
        <UnderTheHood />
      </div>

      <div className="bg-foreground h-[0.5px] mx-16"></div>

      <div ref={projectsRef}>
        <ProjectsShowcase />
      </div>

      <div className="bg-foreground h-[0.5px] mx-16"></div>

      <div ref={socialContactRef}>
        <SocialContact />
      </div>
    </main>
  );
}
