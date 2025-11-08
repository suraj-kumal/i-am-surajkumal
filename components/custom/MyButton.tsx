"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Button = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div
        onClick={onClick}
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
            {/* Top Arrow */}
            <FaArrowDown
              className="
                text-[hsl(var(--foreground))] 
                transition-all duration-700 ease-in-out 
                -translate-y-[500%] 
                group-hover:text-[hsl(var(--background))] 
                group-hover:translate-y-1/2
              "
            />
            {/* Center Arrow */}
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
    </IconContext.Provider>
  );
};

export default Button;
