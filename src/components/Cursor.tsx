"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        left: e.clientX,
        top: e.clientY,
      });
    });
  }, []);
  return <div id="cursor" />;
};

export default Cursor;
