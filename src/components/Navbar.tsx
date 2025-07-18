// "use client";
// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// const Navbar = () => {
//   const navRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const navItems = navRef.current?.querySelectorAll(".nav-item");
//     if (!navItems) return;

//     navItems.forEach((item) => {
//       const el = item as HTMLElement;
//       const handleMouseMove = (e: MouseEvent) => {
//         const rect = el.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;

//         gsap.to(el, {
//           x: x * 1.5,
//           y: y * 1.5,
//           // scale: 1.1,
//           // duration: 0.3,
//           // ease: "power2.out",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(el, {
//           x: 0,
//           y: 0,
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       };

//       el.addEventListener("mousemove", handleMouseMove);
//       el.addEventListener("mouseleave", handleMouseLeave);
//       return () => {
//         navItems.forEach((item) => {
//           const el = item as HTMLElement;
//           el.removeEventListener("mousemove", handleMouseMove);
//           el.removeEventListener("mouseleave", handleMouseLeave);
//         });
//       };
//     });
//   }, []);
//   return (
//     <nav
//       ref={navRef}
//       className="flex items-center justify-between py-[50px] px-[80px]"
//     >
// <div className="flex items-center gap-10">
//   <svg
//     className="menu-opener__square nav-item inline-block transition-transform"
//     width="12"
//     height="12"
//     viewBox="0 0 12 12"
//     fill="none"
//   >
//     <rect y="10" width="2" height="2" fill="currentColor"></rect>
//     <rect y="5" width="2" height="2" fill="currentColor"></rect>
//     <rect width="2" height="2" fill="currentColor"></rect>
//     <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
//     <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
//     <rect x="5" width="2" height="2" fill="currentColor"></rect>
//     <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
//     <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
//     <rect x="10" width="2" height="2" fill="currentColor"></rect>
//   </svg>
//   <svg className="brand__svg" width="71" height="27" viewBox="0 0 71 27">
//     <path
//       d="M40.7622 24.5917C40.7622 23.6724 41.4511 22.9829 42.3697 22.9829C43.2883 22.9829 43.9773 23.6724 43.9773 24.5917C43.9773 25.511 43.2883 26.2005 42.3697 26.2005C41.566 26.2005 40.7622 25.3961 40.7622 24.5917Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M65.7937 8.96329C65.7937 8.04398 66.4826 7.35449 67.4012 7.35449C68.3198 7.35449 69.0087 8.04398 69.0087 8.96329C69.0087 9.88261 68.3198 10.5721 67.4012 10.5721C66.4826 10.5721 65.7937 9.88261 65.7937 8.96329Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M59.019 18.3861C59.019 17.4668 59.708 16.7773 60.6266 16.7773C61.5451 16.7773 62.2341 17.4668 62.2341 18.3861C62.2341 19.3055 61.5451 19.9949 60.6266 19.9949C59.8228 19.9949 59.019 19.3055 59.019 18.3861Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M41.3365 9.88276C40.5327 8.27396 39.6142 7.8143 39.04 7.58447H46.3887C45.9294 7.8143 45.0108 8.04413 45.0108 8.96344C45.0108 9.19327 45.1257 9.65293 45.3553 10.1126L48.3407 16.6627L46.5035 20.225L41.3365 9.88276Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M51.8998 9.30819C51.8998 8.04413 50.9812 7.69939 50.2922 7.58447H54.6555C53.8517 7.8143 52.8183 8.27396 51.7849 10.1126C51.8998 9.88276 51.8998 9.65293 51.8998 9.30819Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M66.7122 17.9266C66.7122 16.2029 65.2195 15.6283 63.0378 14.5941C60.8562 13.5599 59.019 12.7555 59.019 10.8019C59.019 8.73348 60.971 7.12468 64.1861 7.00977C63.1527 7.23959 62.3489 8.15891 62.3489 9.42296C62.3489 10.9168 63.612 11.4914 65.9084 12.5256C68.2049 13.5599 70.2717 14.4792 70.2717 16.6626C70.2717 19.1907 67.4011 20.3398 64.6454 20.4547C65.9084 20.2249 66.7122 19.1907 66.7122 17.9266Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M21.0129 2.64303C21.0129 1.6088 20.3239 0.919313 19.2905 0.689485L24.4576 0V20.3398C24.4576 20.3398 22.6204 20.4547 20.8981 21.8337V2.64303H21.0129Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M34.6764 14.0195C34.6764 10.4572 31.691 7.58432 27.9019 7.35449C30.1983 7.69923 30.8873 11.4914 30.8873 14.0195C30.8873 16.5476 30.1983 20.2249 27.9019 20.6845C31.8058 20.4547 34.6764 17.5819 34.6764 14.0195Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M14.9269 14.0195C14.9269 10.4572 11.9415 7.58432 8.15234 7.35449C10.4488 7.69923 11.1377 11.4914 11.1377 14.0195C11.1377 16.5476 10.4488 20.2249 8.15234 20.6845C11.9415 20.4547 14.9269 17.5819 14.9269 14.0195Z"
//       fill="currentColor"
//     ></path>
//     <path
//       d="M0 14.0195C0 10.4572 2.9854 7.58432 6.77456 7.35449C4.4781 7.69923 3.78916 11.4914 3.78916 14.0195C3.78916 16.5476 4.4781 20.2249 6.77456 20.6845C2.9854 20.4547 0 17.5819 0 14.0195Z"
//       fill="currentColor"
//     ></path>
//   </svg>
// </div>
//       <div className="flex relative items-center justify-end w-full">
//         <pre className="absolute left-25 leading-4 -top-3 tracking-tight">
//           {`
//             Obys-
//             Creative
//             Design
//             Agency`}
//         </pre>
//         <div className="flex items-center gap-10">
//           <span className="nav-item inline-block transition-transform">
//             Works
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             About
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             Contacts
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navItems = navRef.current?.querySelectorAll(".nav-item");
    if (!navItems) return;

    const listeners: {
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }[] = [];

    navItems.forEach((item) => {
      const el = item as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 2.5,
          y: y * 2.5,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to("#cursor", {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseover", () => {
        gsap.to("#cursor", {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Store for cleanup
      listeners.push({ el, move: handleMouseMove, leave: handleMouseLeave });
    });

    return () => {
      listeners.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between py-[50px] px-[80px]"
    >
      <div className="flex items-center gap-10">
        <svg
          className="menu-opener__square nav-item inline-block transition-transform"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <rect y="10" width="2" height="2" fill="currentColor"></rect>
          <rect y="5" width="2" height="2" fill="currentColor"></rect>
          <rect width="2" height="2" fill="currentColor"></rect>
          <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
          <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
          <rect x="5" width="2" height="2" fill="currentColor"></rect>
          <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
          <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
          <rect x="10" width="2" height="2" fill="currentColor"></rect>
        </svg>
        <svg className="brand__svg" width="71" height="27" viewBox="0 0 71 27">
          <path
            d="M40.7622 24.5917C40.7622 23.6724 41.4511 22.9829 42.3697 22.9829C43.2883 22.9829 43.9773 23.6724 43.9773 24.5917C43.9773 25.511 43.2883 26.2005 42.3697 26.2005C41.566 26.2005 40.7622 25.3961 40.7622 24.5917Z"
            fill="currentColor"
          ></path>
          <path
            d="M65.7937 8.96329C65.7937 8.04398 66.4826 7.35449 67.4012 7.35449C68.3198 7.35449 69.0087 8.04398 69.0087 8.96329C69.0087 9.88261 68.3198 10.5721 67.4012 10.5721C66.4826 10.5721 65.7937 9.88261 65.7937 8.96329Z"
            fill="currentColor"
          ></path>
          <path
            d="M59.019 18.3861C59.019 17.4668 59.708 16.7773 60.6266 16.7773C61.5451 16.7773 62.2341 17.4668 62.2341 18.3861C62.2341 19.3055 61.5451 19.9949 60.6266 19.9949C59.8228 19.9949 59.019 19.3055 59.019 18.3861Z"
            fill="currentColor"
          ></path>
          <path
            d="M41.3365 9.88276C40.5327 8.27396 39.6142 7.8143 39.04 7.58447H46.3887C45.9294 7.8143 45.0108 8.04413 45.0108 8.96344C45.0108 9.19327 45.1257 9.65293 45.3553 10.1126L48.3407 16.6627L46.5035 20.225L41.3365 9.88276Z"
            fill="currentColor"
          ></path>
          <path
            d="M51.8998 9.30819C51.8998 8.04413 50.9812 7.69939 50.2922 7.58447H54.6555C53.8517 7.8143 52.8183 8.27396 51.7849 10.1126C51.8998 9.88276 51.8998 9.65293 51.8998 9.30819Z"
            fill="currentColor"
          ></path>
          <path
            d="M66.7122 17.9266C66.7122 16.2029 65.2195 15.6283 63.0378 14.5941C60.8562 13.5599 59.019 12.7555 59.019 10.8019C59.019 8.73348 60.971 7.12468 64.1861 7.00977C63.1527 7.23959 62.3489 8.15891 62.3489 9.42296C62.3489 10.9168 63.612 11.4914 65.9084 12.5256C68.2049 13.5599 70.2717 14.4792 70.2717 16.6626C70.2717 19.1907 67.4011 20.3398 64.6454 20.4547C65.9084 20.2249 66.7122 19.1907 66.7122 17.9266Z"
            fill="currentColor"
          ></path>
          <path
            d="M21.0129 2.64303C21.0129 1.6088 20.3239 0.919313 19.2905 0.689485L24.4576 0V20.3398C24.4576 20.3398 22.6204 20.4547 20.8981 21.8337V2.64303H21.0129Z"
            fill="currentColor"
          ></path>
          <path
            d="M34.6764 14.0195C34.6764 10.4572 31.691 7.58432 27.9019 7.35449C30.1983 7.69923 30.8873 11.4914 30.8873 14.0195C30.8873 16.5476 30.1983 20.2249 27.9019 20.6845C31.8058 20.4547 34.6764 17.5819 34.6764 14.0195Z"
            fill="currentColor"
          ></path>
          <path
            d="M14.9269 14.0195C14.9269 10.4572 11.9415 7.58432 8.15234 7.35449C10.4488 7.69923 11.1377 11.4914 11.1377 14.0195C11.1377 16.5476 10.4488 20.2249 8.15234 20.6845C11.9415 20.4547 14.9269 17.5819 14.9269 14.0195Z"
            fill="currentColor"
          ></path>
          <path
            d="M0 14.0195C0 10.4572 2.9854 7.58432 6.77456 7.35449C4.4781 7.69923 3.78916 11.4914 3.78916 14.0195C3.78916 16.5476 4.4781 20.2249 6.77456 20.6845C2.9854 20.4547 0 17.5819 0 14.0195Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex relative items-center justify-end w-full">
        <pre className="absolute left-25 leading-4 -top-3 tracking-tight">
          {`
            Obys-
            Creative
            Design
            Agency`}
        </pre>
        <div className="flex items-center gap-10">
          <span className="nav-item inline-block transition-transform">
            Works
          </span>
          <span className="nav-item inline-block transition-transform">
            About
          </span>
          <span className="nav-item inline-block transition-transform">
            Contacts
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// "use client";

// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const navItems = navRef.current?.querySelectorAll(".nav-item");
//     if (!navItems) return;

//     const cleanupFns = [];

//     navItems.forEach((item) => {
//       const el = item;

//       const onMove = (e) => {
//         const rect = el.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;

//         gsap.to(el, {
//           x: x * 1.5,
//           y: y * 1.5,
//           scale: 1.1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       };

//       const onLeave = () => {
//         gsap.to(el, {
//           x: 0,
//           y: 0,
//           scale: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       };

//       el.addEventListener("mousemove", onMove);
//       el.addEventListener("mouseleave", onLeave);

//       cleanupFns.push(() => {
//         el.removeEventListener("mousemove", onMove);
//         el.removeEventListener("mouseleave", onLeave);
//       });
//     });

//     return () => {
//       cleanupFns.forEach((fn) => fn());
//     };
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="flex items-center justify-between py-[50px] px-[80px]"
//     >
//       <div className="flex items-center gap-10">
//         <svg
//           className="menu-opener__square nav-item inline-block transition-transform"
//           width="12"
//           height="12"
//           viewBox="0 0 12 12"
//           fill="none"
//         >
//           <rect y="10" width="2" height="2" fill="currentColor" />
//           <rect y="5" width="2" height="2" fill="currentColor" />
//           <rect width="2" height="2" fill="currentColor" />
//           <rect x="5" y="10" width="2" height="2" fill="currentColor" />
//           <rect x="5" y="5" width="2" height="2" fill="currentColor" />
//           <rect x="5" width="2" height="2" fill="currentColor" />
//           <rect x="10" y="10" width="2" height="2" fill="currentColor" />
//           <rect x="10" y="5" width="2" height="2" fill="currentColor" />
//           <rect x="10" width="2" height="2" fill="currentColor" />
//         </svg>
//         <svg className="brand__svg" width="71" height="27" viewBox="0 0 71 27">
//           <path
//             d="M40.7622 24.5917C40.7622 23.6724 41.4511 22.9829 42.3697 22.9829C43.2883 22.9829 43.9773 23.6724 43.9773 24.5917C43.9773 25.511 43.2883 26.2005 42.3697 26.2005C41.566 26.2005 40.7622 25.3961 40.7622 24.5917Z"
//             fill="currentColor"
//           />
//           {/* ... other paths unchanged */}
//         </svg>
//       </div>

//       <div className="flex relative items-center justify-end w-full">
//         <pre className="absolute left-25 leading-4 -top-3 tracking-tight">
//           {`
//             Obys-
//             Creative
//             Design
//             Agency`}
//         </pre>
//         <div className="flex items-center gap-10">
//           <span className="nav-item inline-block transition-transform">
//             Works
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             About
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             Contacts
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// const MagnetNav = () => {
//   const navRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const navItems = navRef.current?.querySelectorAll(".magnet-item");
//     if (!navItems) return;

//     const handleMouseMove = (e: MouseEvent, el: HTMLElement) => {
//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width;
//       const y = e.clientY - rect.top - rect.height;

//       gsap.to(el, {
//         x: x * 5.8,
//         y: y * 5.8,
//         // duration: 0.3,
//         ease: "power3.out",
//       });
//     };

//     const resetPosition = (el: HTMLElement) => {
//       gsap.to(el, {
//         x: 0,
//         y: 0,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     navItems.forEach((item) => {
//       const el = item as HTMLElement;

//       const move = (e: MouseEvent) => handleMouseMove(e, el);
//       const leave = () => resetPosition(el);

//       el.addEventListener("mousemove", move);
//       el.addEventListener("mouseleave", leave);

//       // Store references for cleanup
//       (el as any)._move = move;
//       (el as any)._leave = leave;
//     });

//     return () => {
//       navItems.forEach((item) => {
//         const el = item as HTMLElement;
//         el.removeEventListener("mousemove", (el as any)._move);
//         el.removeEventListener("mouseleave", (el as any)._leave);
//       });
//     };
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="flex gap-10 px-16 py-8 text-lg font-medium uppercase"
//     >
//       <span className="magnet-item inline-block transition-transform">
//         Home
//       </span>
//       <span className="magnet-item inline-block transition-transform">
//         About
//       </span>
//       <span className="magnet-item inline-block transition-transform">
//         Services
//       </span>
//       <span className="magnet-item inline-block transition-transform">
//         Contact
//       </span>
//     </nav>
//   );
// };

// export default MagnetNav;

// "use client";
// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// const Navbar = () => {
//   const navRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const navItems = navRef.current?.querySelectorAll(".nav-item");
//     if (!navItems) return;

//     const handleMouseMove = (e: MouseEvent, el: HTMLElement) => {
//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;

//       gsap.to(el, {
//         x: x * 0.6, // increased movement
//         y: y * 0.6,
//         scale: 1.1, // also increase scale slightly
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const handleMouseLeave = (el: HTMLElement) => {
//       gsap.to(el, {
//         x: 0,
//         y: 0,
//         scale: 1,
//         duration: 0.4,
//         ease: "power2.out",
//       });
//     };

//     navItems.forEach((item) => {
//       const el = item as HTMLElement;

//       const move = (e: MouseEvent) => handleMouseMove(e, el);
//       const leave = () => handleMouseLeave(el);

//       el.addEventListener("mousemove", move);
//       el.addEventListener("mouseleave", leave);

//       // Store on element for cleanup
//       // (el as any)._move = move;
//       // (el as any)._leave = leave;
//     });

//     // return () => {
//     //   navItems.forEach((item) => {
//     //     const el = item as HTMLElement;
//     //     el.removeEventListener("mousemove", el.);
//     //     el.removeEventListener("mouseleave", el._leave);
//     //   });
//     // };
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="flex items-center justify-between py-[50px] px-[80px]"
//     >
//       <div className="flex items-center gap-10">
//         <svg
//           className="menu-opener__square nav-item inline-block transition-transform"
//           width="12"
//           height="12"
//           viewBox="0 0 12 12"
//           fill="none"
//         >
//           {/* ... svg rects */}
//         </svg>
//         <svg className="brand__svg" width="71" height="27" viewBox="0 0 71 27">
//           {/* ... brand paths */}
//         </svg>
//       </div>

//       <div className="flex relative items-center justify-end w-full">
//         <pre className="absolute left-25 leading-4 -top-3 tracking-tight">
//           {`
//             Obys-
//             Creative
//             Design
//             Agency`}
//         </pre>
//         <div className="flex items-center gap-10">
//           <span className="nav-item inline-block transition-transform">
//             Works
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             About
//           </span>
//           <span className="nav-item inline-block transition-transform">
//             Contacts
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
