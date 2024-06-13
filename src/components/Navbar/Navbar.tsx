"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import "./navbar.scss"
import TransitionLink from "@/components/TransitionLink";
const Navbar = () => {
  const lineRef =useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(lineRef.current, 
      { height: 0 }, 
      { height: "100%", duration: 2, opacity:1, ease: "power2.out" }
    );
   
  }, []);
  return (
  
    <div className='nav'>
      {/* <div className="logo"><img src="/spiderman-7810368_1920.png" alt="" /></div> */}
   <div className="left">
   <div className="verticalLine" ref={lineRef}></div>
    <TransitionLink href="/about" label="About" />
     <TransitionLink href="/career" label="Career" />
     <TransitionLink href="/projects" label="Projects" />      
     <TransitionLink href="/contact" label="Contact" />
      </div>
      <div className="right">
        <img src="/image.svg" alt="" />
     </div> 
    </div>

  )
}

export default Navbar
