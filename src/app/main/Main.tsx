"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Link from "next/link";

export default function Main() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // 1. Safely check screen size ONLY after hydration to prevent Next.js errors
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on load
    window.addEventListener("resize", checkMobile); // Update on window resize
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownload = () => {
    setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, 1000);
  };

  // Render a blank placeholder for a split second to prevent hydration mismatch
  if (!isMounted) return <div className="min-h-screen w-full bg-transparent"></div>;

  return (
    <>
      {/* 2. Conditionally render the exact layout needed */}
      {isMobile ? (
        <MobileBentoHero handleDownload={handleDownload} />
      ) : (
        <DesktopHero handleDownload={handleDownload} />
      )}

      {/* Shared Popup */}
      {showPopup && (
        <div className="fixed top-[90%] left-1/2 -translate-x-1/2 px-5 py-4 bg-[#333] text-white text-sm md:text-base rounded-lg z-[1000] shadow-[0px_5px_15px_rgba(0,0,0,0.3)] text-center whitespace-nowrap">
          <p><b>Resume is downloading...</b></p>
        </div>
      )}
    </>
  );
}

// =========================================
// DESKTOP HERO COMPONENT (GSAP Optimized)
// =========================================
const DesktopHero = ({ handleDownload }: { handleDownload: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We don't need matchMedia anymore because this component ONLY exists on Desktop!
    const ourText = new SplitType(".desktop-title", { types: "chars" });
    const tl = gsap.timeline();

    // Animate Text Characters safely
    if (ourText.chars) {
      tl.from(ourText.chars, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.03,
        ease: "elastic(1.2, 0.5)",
      });
    }

    // Animate the rest of the elements as a sequence
    tl.from(".fade-up-element", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    }, "<0.5"); // Starts half a second after the text animation begins

    // Scroll button animation
    gsap.from(".scroll-btn", { opacity: 0, duration: 2, delay: 2.5, ease: "power2.out" });

    return () => {
      if (ourText) ourText.revert(); // Critical cleanup for SplitType
    };
  }, { scope: containerRef });

  const handleScroll = () => window.scrollBy({ top: 1000, behavior: "smooth" });

  return (
    <main ref={containerRef} className="relative flex flex-col items-center justify-center w-full min-h-[400px] h-screen text-white bg-transparent z-10">
      <div className="flex flex-col items-center">
        <div className="mb-0 pb-0 text-[12vw] leading-none whitespace-nowrap tracking-tight">
          {/* Target class for SplitType */}
          <span className="desktop-title leading-relaxed">dev-Shreyash</span>
        </div>

        <div className="flex flex-col items-center justify-between gap-[2vw]">
          <div className="text-[3vw] fade-up-element">
            <span>Full-Stack Developer</span> | <span>Web Designer</span>
          </div>

          <div className="flex gap-[1vw] fade-up-element">
            <Link href="https://github.com/dev-shreyash" target="_blank" className="transition-all duration-300 hover:scale-125">
              <img src="/icons8-github.svg" alt="GitHub" className="w-10 h-10 invert cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/bhosaleshreyash2/" target="_blank" className="transition-all duration-300 hover:scale-125">
              <img src="/icons8-linkedin.svg" alt="LinkedIn" className="w-10 h-10 invert cursor-pointer" />
            </Link>
            <Link href="" target="_blank" className="transition-all duration-300 hover:scale-125">
              <img src="/icons8-stack-overflow.svg" alt="Stack Overflow" className="w-10 h-10 invert cursor-pointer" />
            </Link>
            <Link href=" " target="_blank" className="transition-all duration-300 hover:scale-125">
              <img src="/icons8-twitterx.svg" alt="Twitter" className="w-10 h-10 invert cursor-pointer" />
            </Link>
          </div>

          <div className="flex justify-between gap-[1vw] mt-4 fade-up-element">
            <a href="https://drive.google.com/uc?export=download&id=18uzEa7MtKk5KzB_F8_TB_pgMsl9AX7zQ" onClick={handleDownload} download>
              <button className="group flex items-center justify-between gap-2 px-[1.5vw] py-[0.5vw] border-2 border-white rounded-[65px] text-white transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
                Resume <img src="/download-svgrepo-com.svg" alt="Download" className="w-[25px] invert transition-all duration-300 group-hover:invert-0" />
              </button>
            </a>
            <a href="mailto:bhosaleshreyash2@gmail.com" target="_blank">
              <button className="px-[1.5vw] py-[0.5vw] border-2 border-white rounded-[65px] text-black bg-white transition-all duration-300 hover:bg-[#333] hover:text-white hover:border-[#333] cursor-pointer">
                Contact
              </button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1000] cursor-pointer scroll-btn" onClick={handleScroll}>
          <img src="/scroll-down-svgrepo-com.svg" alt="Scroll Down" className="w-[50px] h-auto" />
        </div>
      </div>
    </main>
  );
};

// =========================================
// MOBILE BENTO COMPONENT
// =========================================
const MobileBentoHero = ({ handleDownload }: { handleDownload: () => void }) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto p-4 gap-4 mt-24 font-mono text-sm text-gray-300 relative z-10 ">
      <div className="flex items-center gap-4 p-5 border border-neutral-800 rounded-xl bg-black/50 backdrop-blur-sm">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-neutral-700 shrink-0">
          <img src="/portfolio-my-profile-browser-svgrepo-com.svg" alt="Shreyash" className="w-full h-full object-cover bg-neutral-900" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs text-neutral-500 mb-1">Thane, India</p>
          <h1 className="text-2xl font-bold text-white font-sans leading-tight">Shreyash<br />Bhosale</h1>
          <p className="text-neutral-400 mt-1 font-sans text-sm">Full-Stack Developer</p>
        </div>
      </div>

      {/* <div className="flex flex-col p-5 border border-neutral-800 rounded-xl bg-black/50 backdrop-blur-sm">
        <h2 className="text-white font-bold mb-3 font-sans text-lg">About</h2>
        <p className="leading-relaxed">
          Tech explorer and full-stack web developer. Currently building smart solutions and scalable UIs. 
          <span className="inline-block bg-neutral-800 text-white px-2 py-0.5 rounded ml-2 text-xs">MCA `27</span>
        </p>
      </div> */}

      <div className="flex flex-col p-5 border border-neutral-800 rounded-xl bg-black/50 backdrop-blur-sm gap-4">
        <Link href="https://github.com/dev-shreyash" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors">
          <img src="/icons8-github.svg" alt="GitHub" className="w-5 h-5 invert opacity-70" />
          <span>github.com/dev-shreyash</span>
        </Link>
        <Link href="https://www.linkedin.com/in/bhosaleshreyash2/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors">
          <img src="/icons8-linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert opacity-70" />
          <span>in/bhosaleshreyash2</span>
        </Link>
        <a href="mailto:bhosaleshreyash2@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
          <span className="w-5 h-5 flex items-center justify-center border border-neutral-600 rounded-full text-xs">@</span>
          <span>bhosaleshreyash2@gmail.com</span>
        </a>
      </div>

      <div className="flex gap-3 mt-2 font-sans font-medium">
        <a href="https://drive.google.com/uc?export=download&id=18uzEa7MtKk5KzB_F8_TB_pgMsl9AX7zQ" onClick={handleDownload} download className="flex flex-1 justify-center items-center gap-2 py-3 text-center border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
          Resume <img src="/download-svgrepo-com.svg" alt="Download" className="w-[18px] invert transition-all duration-300 group-hover:invert-0" />
        </a>
        <a href="#about" className="flex-1 py-3 text-center bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors">
          Explore
        </a>
      </div>
    </div>
  );
};