"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import "./navbar.scss"
import TransitionLink from "@/components/TransitionLink";
import { Opacity } from '@tsparticles/engine';
const Navbar = () => {
  const lineRef =useRef<HTMLDivElement>(null)
  const fadeIn =useRef<HTMLDivElement>(null)
  useEffect(()=>{
    gsap.fromTo(fadeIn.current,
      {opacity:0},
      {opacity:1, duration:5, ease:"power2.out"}
    )
  },[])

  useEffect(() => {
    gsap.fromTo(lineRef.current, 
      { height: 0 }, 
      { height: "380px", duration: 2, opacity:1, ease: "power2.out" }
    );
   
  }, []);


  return (
  
    <div className='nav'>
      {/* <div className="logo"><img src="/spiderman-7810368_1920.png" alt="" /></div> */}
   <div className="left" ref={fadeIn}>
   <div className="verticalLine" ref={lineRef}></div>
    <TransitionLink href="/about" label="About" />
     <TransitionLink href="/career" label="Career" />
     <TransitionLink href="/projects" label="Projects" />      
     <TransitionLink href="/contact" label="Contact" />
      </div>
      <div className="right" ref={fadeIn}>
        <img src="/image.svg" alt="" />
     </div> 
    </div>

  )
}

export default Navbar
