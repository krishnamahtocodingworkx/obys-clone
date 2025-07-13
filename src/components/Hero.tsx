"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.css";

const headingArr = ["We Design", "Unique", "Web / Graphic", "Experience"];
const Hero = () => {
  const linesRef = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    gsap.from(linesRef.current, {
      y: 100,
    //   delay: 6.2,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    });
  });
  return (
    <div className="hero-container">
      <div className="hero-inner-container">
        <div className="flex items-end py-10">
          <div className="overflow-hidden ">
            <p className="scroll-text ">Scroll</p>
          </div>
        </div>
        <div className="">
          <p className="title text-center">01</p>
        </div>
        <div className="">
          {headingArr.map((str, index) => (
            <div key={index} className="overflow-hidden w-full h-fit flex ">
              {index === 2 ? (
                <div
                  ref={(el) => {
                    if (el) linesRef.current[index] = el;
                  }}
                    className="flex gap-3"
                >
                  {str.split(" ").map((word, wordIndex) => (
                    <h1
                      key={wordIndex}
                      className={`heading-text ${
                        wordIndex !== 1 && "stoke-font"
                      }`}
                    >
                      {word}
                    </h1>
                  ))}
                </div>
              ) : (
                <h1
                  ref={(el) => {
                    if (el) linesRef.current[index] = el;
                  }}
                  className={`heading-text`}
                >
                  {str}
                </h1>
              )}
            </div>
          ))}
          {/* <div>
            <h1 className="heading-text">We Design</h1>
          </div>
          <div>
            <h1 className="heading-text">Unique</h1>
          </div>
          <div>
            <h1 className="heading-text">Web/Graphic</h1>
          </div>
          <div>
            <h1 className="heading-text">Experience</h1>
          </div> */}
        </div>
        {/* {headingArr.map((str, index) => (
          <div key={index} className="overflow-hidden w-full h-fit flex ">
            {index === 0 && <p className="title w-[5.5vw]">01</p>}
            <h1
              ref={(el) => {
                if (el) linesRef.current[index] = el;
              }}
              className={`heading-text ${index !== 0 && "pl-[5.5vw]"}`}
            >
              {str}
            </h1>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Hero;
