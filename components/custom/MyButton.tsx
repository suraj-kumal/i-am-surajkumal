"use client";

import React, { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Button = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [showMessage, setShowMessage] = useState(false);

  const handleHover = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (err) {
        // // Autoplay blocked
        // setShowMessage(true);
        // // Optional: hide message after a few seconds
        // setTimeout(() => setShowMessage(false), 3000);
      }
    }
  };

  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div className="flex flex-col items-center gap-2">
        <div
          onClick={onClick}
          onMouseEnter={handleHover}
          className="group relative inline-flex items-center justify-center cursor-pointer"
        >
          <div
            className="
              w-40 aspect-square rounded-full border-2
              border-[hsl(var(--foreground))]
              flex items-center justify-center
              transition-transform duration-700 ease-in-out
              overflow-hidden
              group-hover:bg-[hsl(var(--foreground))]
              group-hover:scale-50
              max-md:w-20
            "
          >
            <div className="inline-grid place-items-center">
              <FaArrowDown
                className="
                  text-[hsl(var(--foreground))]
                  transition-all duration-700 ease-in-out
                  -translate-y-[500%]
                  group-hover:text-[hsl(var(--background))]
                  group-hover:translate-y-1/2
                "
              />
              <FaArrowDown
                className="
                  text-[hsl(var(--foreground))]
                  transition-all duration-700 ease-in-out
                  -translate-y-1/2
                  group-hover:text-[hsl(var(--background))]
                  group-hover:translate-y-[500%]
                "
              />
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/drop.mp3" preload="auto" />
    </IconContext.Provider>
  );
};

export default Button;
