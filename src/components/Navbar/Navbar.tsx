"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import "./navbar.scss";
import TransitionLink from "@/components/TransitionLink";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const fadeIn = useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = useState(0);

  // Animate on mount (fade in + slide up for mobile)
  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.fromTo(
        navRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    } else {
      gsap.fromTo(fadeIn.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) return;
  
    let scrollUpCount = 0;
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll;
  
      if (scrollingDown) {
        scrollUpCount = 0; // reset if scrolling down
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: 200,
            opacity: 0,
            display: "none",
            duration: 0.5,
            ease: "power2.out"
          });
        }
      } else {
        scrollUpCount++;
  
        if (scrollUpCount >= 2 && navRef.current) {
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            display: "block",
            duration: 0.5,
            ease: "power2.out"
          });
          scrollUpCount = 0; // reset after showing
        }
      }
  
      setLastScroll(currentScroll);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  
  return (
    <div className='nav' ref={navRef}>
      <div className="left" ref={fadeIn}>
        <TransitionLink href="/about" label="About" />
        <TransitionLink href="/career" label="Career" />
        <TransitionLink href="/projects" label="Projects" />
        <TransitionLink href="mailto:bhosaleshreyash2@gmail.com" target="_blank" label="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
