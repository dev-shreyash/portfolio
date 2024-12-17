"use client";
import React, { useEffect, useRef, useState } from "react";
import "./main.scss";
import { gsap } from "gsap";
import SplitType from "split-type";
import { TsParticles } from "@/components/particles";
import Link from "next/link";
import TransitionLink from "@/components/TransitionLink";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

const Main = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const aniText = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
   const router = useRouter();
  
    const handleClickContact = () => {
      animatePageOut("/contact", router);
    };
  const handleDownload = () => {
    // Delay the popup display by 2 seconds
    setTimeout(() => {
      setShowPopup(true);
  
      // Hide the popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }, 1000);
  };
  
  useEffect(() => {
    const ourText = new SplitType("span.dev-shreyash", { types: "chars" });
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
        ease: "elastic(1.2, 0.5)",
      }
    );
  }, []);

  useEffect(() => {
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: "power4.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: "power4.out" }
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
          ease: "elastic(1.2, 0.5)",
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
          <span className="left">Full-Stack Developer</span> |{" "}
          <span className="right">Web Designer</span>
        </div>
        <div className="links" ref={iconRef}>
          <Link
            href="https://github.com/dev-shreyash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons8-github.svg"
              alt="GitHub"
              style={{ cursor: "pointer" }}
            />{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/bhosaleshreyash2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons8-linkedin.svg"
              alt="LinkedIn"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons8-stack-overflow.svg"
              alt="Stack Overflow"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href=" " target="_blank" rel="noopener noreferrer">
            <img
              src="/icons8-twitterx.svg"
              alt="Twitter"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="buttons" ref={buttonsRef}>
          <div>
            <a
              href="https://drive.google.com/uc?export=download&id=1tJkg9ehtCODKzYJNmL4FAXn18rQQafSQ"
              onClick={handleDownload}
              download
            >
              <button className="resume">
                Resume <img src="/download-svgrepo-com.svg" alt="Download" />
              </button>
            </a>

           
          </div>
 
          <button className="contact" onClick={handleClickContact} >Contact</button>
        </div>
        {showPopup && (
              <div className="popup">
                <p> <b>Resume is downloading... </b></p>
              </div>
            )}
      </div>
      <ScrollButton />
    </main>
  );
};

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 1000, // Scroll down by 500 pixels
      behavior: "smooth",
    });
  };
  const fadeIn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      fadeIn.current,
      { opacity: 0 },
      { opacity: 1, duration: 5, delay: 4, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="scrollBtn" onClick={handleScroll} ref={fadeIn}>
      <img src="/scroll-down-svgrepo-com.svg" alt="Scroll Down" />
    </div>
  );
};

export default Main;
