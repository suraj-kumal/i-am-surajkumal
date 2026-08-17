// app/components/CodeButton.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CodeButtonProps = {
  href: string;
  label: string;
};

export default function CodeButton({ href, label }: CodeButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0; // restart sound
    audioRef.current.play().catch(() => {
      // ignore autoplay errors
    });
  };

  return (
    <>
      {/* Preloaded audio */}
      <audio ref={audioRef} src="/mouseclick.wav" preload="auto" />

      <Button asChild variant="outline" className="mt-1 mb-1">
        <Link href={href} onClick={playSound}>
          {`print(${label})`}
        </Link>
      </Button>
    </>
  );
}
