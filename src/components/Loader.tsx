// "use client";

// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";

// const stringArr = ["Your", "Web Experiences", "is loading right"];

// const Loader = () => {
//   const linesRef = useRef<HTMLHeadingElement[]>([]);
//   const countRef = useRef<HTMLParagraphElement[]>([]);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const [count, setCount] = useState<number | string>("00");

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(linesRef.current, {
//         y: 100,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         stagger: 0.2,
//       });
//     });

//     return () => ctx.revert(); // Clean up on unmount
//   }, []);

//   useEffect(() => {
//     if (+count >= 100) return;

//     timeoutRef.current = setTimeout(() => {
//       if (+count < 10) {
//         setCount((prev) => `0${+prev + 1}`);
//       } else setCount(+count + 1);
//     }, 10);
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [count]);

//   return (
//     <div className="loader fixed inset-0 z-10 bg-[#0B0B0B] py-[25vh] px-[10vw]">
//       {stringArr.map((str, index) => (
//         <div key={index} className="overflow-hidden w-fit h-fit flex ">
//           {index === 0 && (
//             <div className="flex items-start justify-start gap-2 px-5 pt-0">
//               <p
//                 ref={(el) => {
//                   if (el) countRef.current[0] = el;
//                 }}
//                 className="title w-[6vw]"
//               >
//                 {count}
//               </p>
//               <p
//                 ref={(el) => {
//                   if (el) countRef.current[1] = el;
//                 }}
//                 className="title"
//               >
//                 - 100
//               </p>
//             </div>
//           )}
//           <h1
//             ref={(el) => {
//               if (el) linesRef.current[index] = el;
//             }}
//             className="text-[6vw] leading-[6.5vw] uppercase font-medium"
//           >
//             {str}
//           </h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Loader;
// "use client";

// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";

// const stringArr = ["Your", "Web Experiences", "is loading right"];

// const Loader = () => {
//   const linesRef = useRef<HTMLHeadingElement[]>([]);
//   const countRef = useRef<HTMLParagraphElement[]>([]);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const [count, setCount] = useState(0);

//   // Animate lines and start counter
//   useEffect(() => {
//     const t1 = gsap.timeline();

//     t1.from(linesRef.current, {
//       y: 100,
//       opacity: 0,
//       duration: 0.6,
//       ease: "power2.out",
//       stagger: 0.2,
//     });

//     t1.from(countRef.current, {
//       opacity: 0,
//       duration: 0.4,
//       onComplete: () => startCounter(),
//     });

//     t1.to(".loader", {
//       y: -1600,
//       duration: 1.5,
//       delay: 2.5,
//       ease: "power2.inOut",
//       onComplete: () => {
//         gsap.to(".loader", {
//           display: "none",
//         });
//       },
//     });

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   // 🔁 Smooth counter logic
//   const startCounter = () => {
//     const tick = () => {
//       setCount((prev) => {
//         return prev + 1;
//       });
//     };

//     let current = 0;

//     const loop = () => {
//       if (current >= 100) return;
//       current++;
//       tick();
//       timeoutRef.current = setTimeout(loop, 15);
//     };

//     loop();
//   };

//   return (
//     <div className="loader fixed inset-0 z-10 bg-[#988181] py-[25vh] px-[10vw]">
//       {stringArr.map((str, index) => (
//         <div key={index} className="overflow-hidden w-fit h-fit flex">
//           {index === 0 && (
//             <div className="flex items-start justify-start gap-2 px-5 pt-0">
//               <p
//                 ref={(el) => {
//                   if (el) countRef.current[0] = el;
//                 }}
//                 className="title w-[6vw]"
//               >
//                 {count < 10 ? `0${count}` : count}
//               </p>
//               <p
//                 ref={(el) => {
//                   if (el) countRef.current[1] = el;
//                 }}
//                 className="title"
//               >
//                 - 100
//               </p>
//             </div>
//           )}
//           <h1
//             ref={(el) => {
//               if (el) linesRef.current[index] = el;
//             }}
//             className="text-[6vw] leading-[6.5vw] uppercase font-medium"
//           >
//             {str}
//           </h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Loader;
"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const stringArr = ["Your", "Web Experiences", "is loading right"];

const Loader = () => {
  const linesRef = useRef<HTMLHeadingElement[]>([]);
  const countRef = useRef<HTMLParagraphElement[]>([]);
  const frameRef = useRef<number | null>(null); // for requestAnimationFrame
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(true); // hide loader after done

  // Animate lines and start counter
  useEffect(() => {
    const t1 = gsap.timeline();

    // Animate text lines
    t1.from(linesRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });
    // Animate text fade-in (now text)
    t1.to(".text-fade-animation", {
      animation: "text-anime 2s ease-in-out infinite",
      opacity: 1,
    });
    // Animate in the counter, then start count
    t1.from(countRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: startCounter,
    });

    // Animate loader exit after delay
    t1.to(".loader", {
      y: -1600,
      duration: 1.5,
      delay: 3.5,
      ease: "power2.inOut",
      onComplete: () => {
        setShowLoader(false); // remove loader from DOM
      },
    });

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Smooth counter using requestAnimationFrame
  const startCounter = () => {
    let current = 0;

    const update = () => {
      if (current > 100) return;

      setCount(current);
      current++;

      frameRef.current = requestAnimationFrame(() => {
        setTimeout(update, 15); // control speed
      });
    };

    update();
  };

  if (!showLoader) return null;

  return (
    <div className="loader fixed inset-0 z-50 bg-[#000000] py-[25vh] px-[10vw]">
      {stringArr.map((str, index) => (
        <div key={index} className="overflow-hidden w-fit h-fit flex">
          {index === 0 && (
            <div className="flex items-start justify-start pr-5">
              <p
                ref={(el) => {
                  if (el) countRef.current[0] = el;
                }}
                className="title w-[5.5vw]"
              >
                {count < 10 ? `0${count}` : count}
              </p>
              <p
                ref={(el) => {
                  if (el) countRef.current[1] = el;
                }}
                className="title"
              >
                - 100
              </p>
            </div>
          )}
          <h1
            ref={(el) => {
              if (el) linesRef.current[index] = el;
            }}
            className="text-[6vw] leading-[6.5vw] uppercase font-medium"
          >
            {str}
          </h1>
        </div>
      ))}
      <div className="text-fade-animation text-[6vw] leading-[6.5vw] uppercase font-medium opacity-0">
        Now
      </div>
    </div>
  );
};

export default Loader;
