"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/ratchet.mp3");
    audioRef.current.preload = "auto";

    const unlockAudio = () => {
      if (audioRef.current && !unlocked) {
        audioRef.current
          .play()
          .then(() => {
            audioRef.current!.pause();
            audioRef.current!.currentTime = 0;
            setUnlocked(true);
          })
          .catch(() => {});
      }
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    const handleWheel = (event: WheelEvent) => {
      if (!audioRef.current || !unlocked) return;

      const delta = Math.abs(event.deltaY);

      // 🔑 MUCH bigger range → makes normal scroll small
      const normalized = Math.min(delta / 800, 1);

      // Gentle curve
      const eased = Math.pow(normalized, 1.3);

      // 🎯 Bias toward slow speeds
      let speed = 0.4 + eased * 2.6;

      // 🧠 Force normal scroll into 0.4–0.5 zone
      if (delta < 80) {
        speed = 0.45;
      }

      audioRef.current.playbackRate = speed;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, [unlocked]);

  return null;
}
