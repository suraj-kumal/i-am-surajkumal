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
  const visitorsLoveThisPage = process.env.NEXT_PUBLIC_VISITORS_LOVE_THIS_PAGE;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

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

  useEffect(() => {
    if (sessionStorage.getItem("chine")) return;
    const trackVisit = async () => {
      try {
        await fetch(`${visitorsLoveThisPage}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
            apikey: key!,
          },
        });

        sessionStorage.setItem("chine", "true");
      } catch (err) {
        console.error("something wrong", err);
      }
    };
    trackVisit();
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
