"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  // FIX: This stops Next.js from breaking the desktop view during hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 1. DESKTOP FADE IN
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(desktopNavRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    });
    return () => mm.revert();
  }, []);

  // 2. SCROLL LOGIC (Applies to BOTH Mobile and Desktop now)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let scrollUpCount = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll;

      if (scrollingDown) {
        scrollUpCount = 0;
        // Scroll down -> Hide BOTH
        if (desktopNavRef.current) gsap.to(desktopNavRef.current, { y: -100, opacity: 0, duration: 0.5, ease: "power2.out" });
        if (mobileNavRef.current) gsap.to(mobileNavRef.current, { y: -100, opacity: 0, duration: 0.5, ease: "power2.out" });
        setIsOpen(false);
      } else {
        scrollUpCount++;
        if (scrollUpCount >= 2) {
          // Scroll up -> Show BOTH
          if (desktopNavRef.current) gsap.to(desktopNavRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
          if (mobileNavRef.current) gsap.to(mobileNavRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
          scrollUpCount = 0;
        }
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // 3. SMOOTH SCROLL FUNCTION
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close mobile menu when clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = ['about', 'career', 'projects', 'contact'];

  // Ensure nothing renders until the browser is ready (Fixes the blank desktop issue)
  if (!isMounted) return null;

  const classCondition = window.innerWidth < 768 
    ? "hidden "
    : "md:flex fixed top-8 left-0 w-full justify-center z-[100]";

  return (
    <>
      {/* =========================================
          DESKTOP VIEW
      ============================================= */}
      <div className={classCondition}>
        <div  
          ref={desktopNavRef} 
          className="flex items-center justify-around w-[500px] p-4 bg-black/50 backdrop-blur-sm border border-white/90 rounded-[50px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white/50 bg-transparent border-none text-base font-bold capitalize transition-all duration-300 hover:text-white hover:tracking-[1.2px] hover:drop-shadow-[0_0_10px_white] cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW
      ============================================= */}
      <div 
        ref={mobileNavRef} 
        className="md:hidden fixed top-0 left-0 w-full z-[100] bg-black/50 backdrop-blur-sm border-b border-neutral-800 pointer-events-auto"
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-bold text-white font-sans tracking-tight text-xl">dev-Shreyash</span>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-6 h-5 flex flex-col justify-between z-50 focus:outline-none"
          >
            <span className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`h-[2px] w-full bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`w-full bg-black/50 backdrop-blur-sm overflow-hidden transition-all duration-300 flex flex-col ${isOpen ? 'max-h-[300px] border-b border-neutral-800' : 'max-h-0'}`}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-neutral-400 text-lg font-mono py-4 w-full text-center transition-colors hover:text-white hover:bg-neutral-800/50 capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;