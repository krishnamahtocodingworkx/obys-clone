"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const VideoSection = () => {
  const [play, setPlay] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const button = btnRef.current;
    if (!container || !button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - button.offsetWidth / 2;
      const y = e.clientY - rect.top - button.offsetHeight / 2;

      gsap.to(button, {
        x,
        y,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      // Optional: Hide or reset button when mouse leaves
      gsap.to(button, {
        x: "50%",
        y: "50%",
        duration: 0.5,
        ease: "power3.out",
        transform: "translate(-50%, -50%)", // maintain center position
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-end">
      <div
        ref={containerRef}
        className="w-[72vw] h-[62vh] relative overflow-hidden"
      >
        {/* Floating Button that follows cursor */}
        <div
          ref={btnRef}
          onClick={() => setPlay((prev) => !prev)}
          className="h-[10vw] w-[10vw] bg-[#FEA63C] rounded-full absolute top-0 left-0 flex items-center justify-center pointer-events-none cursor-none"
        >
          <img
            src={play ? "/pause.png" : "/image.png"}
            alt="Toggle Icon"
            className="w-[30px] h-[30px]"
          />
        </div>

        {/* Video or Thumbnail */}
        {play ? (
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://obys.agency/wp-content/uploads/2024/12/Obys-Showreel-2024.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
            alt="Showreel Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default VideoSection;
