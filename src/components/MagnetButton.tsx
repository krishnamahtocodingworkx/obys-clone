// MagnetButton.tsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MagnetButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 1.4,
        y: y * 1.4,
        // duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        // duration: 0.4,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="magnet-button px-6 py-3 bg-black text-white rounded-lg font-semibold transition-transform"
    >
      Hover me
    </button>
  );
};

export default MagnetButton;
