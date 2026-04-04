"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/ratchet.mp3");
    audioRef.current.preload = "auto";

    // Unlock audio on first click/tap
    const unlockAudio = () => {
      if (audioRef.current && !unlocked) {
        audioRef.current
          .play()
          .then(() => {
            audioRef.current!.pause();
            audioRef.current!.currentTime = 0;
            setUnlocked(true);
          })
          .catch(() => {
            // still locked
          });
      }
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    const handleWheel = (event: WheelEvent) => {
      if (!audioRef.current || !unlocked) return;

      const speed = Math.min(Math.max(Math.abs(event.deltaY) / 100, 0.5), 3);
      audioRef.current.playbackRate = speed;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, [unlocked]);

  return null;
}
