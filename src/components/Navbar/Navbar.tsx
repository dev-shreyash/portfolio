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

  // Scroll listener for mobile
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll;

      if (navRef.current) {
        gsap.to(navRef.current, {
          y: scrollingDown ? 100 : 0,
          duration: 0.5,
          ease: "power2.out"
        });
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
