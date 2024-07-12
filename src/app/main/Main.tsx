"use client"
import React, { useEffect, useRef } from 'react';
import './main.scss';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Main = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const aniText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ourText = new SplitType('span.dev-shreyash', { types: 'chars' });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 5,
        stagger: 0.03,
        ease: 'elastic(1.2, 0.5)',
      }
    );
  }, []);

  useEffect(() => {
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: 'power4.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: 'power4.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (aniText.current) {
      gsap.fromTo(
        aniText.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 5,
          ease: 'elastic(1.2, 0.5)',
        }
      );
    }
  }, []);

  return (
    <main className="bg-black-100 text-white w-screen h-screen flex flex-col items-center justify-center">
      <div className="name">
        <span className="dev-shreyash">dev-Shreyash</span>
      </div>
      <div className="bottom">
        <div className="ani-text" ref={aniText}>
          <span className="left">Full-Stack Developer</span> | <span className="right">Web Designer</span>
        </div>
        <div className="links" ref={iconRef}>
          <a href=""><img src="/icons8-github.svg" alt="GitHub" /></a>
          <a href=""><img src="/icons8-linkedin.svg" alt="LinkedIn" /></a>
          <a href=""><img src="/icons8-stack-overflow.svg" alt="Stack Overflow" /></a>
          <a href=""><img src="/icons8-twitterx.svg" alt="Twitter" /></a>
        </div>
        <div className="buttons" ref={buttonsRef}>
          <button className="resume">Resume <img src="/download-svgrepo-com.svg" alt="Download" /></button>
          <button className="contact">Contact</button>
        </div>
      </div>
      <ScrollButton />
    </main>
  );
};


const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 1000, // Scroll down by 500 pixels
      behavior: 'smooth',
    });
  };
  const fadeIn =useRef<HTMLDivElement>(null)

  useEffect(()=>{
    gsap.fromTo(fadeIn.current,
      {opacity:0},
      {opacity:1, duration:5, delay:4, ease:"power2.out"}
    )
  },[])

  return (
    <div className="scrollBtn" onClick={handleScroll} ref={fadeIn}>
      <img src="/scroll-down-svgrepo-com.svg" alt="Scroll Down" />
    </div>
  );
};

export default Main;
