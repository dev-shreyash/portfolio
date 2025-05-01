"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect } from "react";

import TransitionLink from '@/components/TransitionLink';
import './career.scss';
import ZigZagLine from '@/components/smallComponents/zigZag';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "split-type"; // Import SplitText for character splitting
import Lenis from "@studio-freight/lenis";
export default function Career() {
  const pathname = usePathname();
  const isCareerPage = pathname.includes('/career');
 console.log(isCareerPage)

  gsap.registerPlugin(ScrollTrigger);
  
 
  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness of scrolling
      smoothWheel: true, // Make wheel scroll smooth
    });

    // Smooth scrolling animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Split and animate text on scroll
    const splitTypes = document.querySelectorAll(".reveal-type-mid");

    splitTypes.forEach((char: any) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      // Check if the element is found
      if (!char) {
        console.warn('Element not found');
        return;
      }

      // Split the text into individual words
      const text = new SplitText(char, { types: "words", wordClass: "split-word" });

      // Check if SplitText split the words
      //console.log(text.words); // Log words for debugging

      // Animate each word
      if(isCareerPage===false){
      gsap.fromTo(
        text.words,
        {
          color: bg, // Start color
          opacity: 0, // Ensure opacity starts at 0
        },
        {
          color: fg, // End color
          opacity: 1, // Fade in the words
          duration: .1, // Duration of the animation
          stagger: 0.2, // Stagger the animation between words
          scrollTrigger: {
            trigger: char,
            start: "top 97%",
            end: "top 60%",
            scrub: true,
            markers: false, // Optional: Set to true to view scroll markers for debugging
            toggleActions: "play play reverse reverse", // Control animation playback actions
          },
        }
      );
    }
    });
  }, []);
  

    useEffect(() => {
      // Targeting the sub-divs inside the left div
      const left = document.querySelector(".left");

      const heading = document.querySelector(".heading");
  
  
     
  
      
   
  
      // Animate avatar section (fade in from left)
      gsap.fromTo(
        heading,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          x: 0,
          duration: .5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: left,
            start: "top 47%",
            end: "top 0%",
            scrub: true,
            markers: false,
            toggleActions: "play none none none",
          },
        }
      );
    
  
      // gsap.fromTo(
      //   details,
      //   { opacity: 0, x: -100 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: details,
      //       start: "top 97%",
      //       end: "top 20%",
      //       scrub: true,
      //       markers: false,
      //       toggleActions: "play none none none",
      //     },
      //   }
      // );
  
      // // Animate bio text fade-in from left
      // gsap.fromTo(
      //   bioText,
      //   { opacity: 0, x: -100 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: bioText,
      //       start: "top 80%",
      //       end: "top 20%",
      //       scrub: true,
      //       markers: false,
      //       toggleActions: "play none none none",
      //     },
      //   }
      // );
  
      // // Animate tech icons fade-in from left
      // gsap.fromTo(
      //   techIcons,
      //   { opacity: 0, x: -100 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: techIcons,
      //       start: "top 80%",
      //       end: "top 20%",
      //       scrub: true,
      //       markers: false,
      //       toggleActions: "play none none none",
      //     },
      //   }
      // );
  
      // // Animate education section fade-in from left
      // gsap.fromTo(
      //   eduData,
      //   { opacity: 0, x: -100 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: eduData,
      //       start: "top 80%",
      //       end: "top 20%",
      //       scrub: true,
      //       markers: false,
      //       toggleActions: "play none none none",
      //     },
      //   }
      // );
    }, []);
  

  return (
    <main
    className={isCareerPage
      ? "bg-neutral-100 w-[100%] md:w-[90%] lg:w-[90%]opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] rounded-t-3xl"
      : "bg-neutral-100 w-[100%] md:w-[90%] lg:w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] "
    }
  >
     <div className="career">
      <div className="left">
        <div className="heading">
        <img src="work-svgrepo-com.svg" alt="" />
        <h1><b>Work Experience</b></h1>
        </div>

    <hr />
    <div className="exp-l">
      <div className="exp-1 reveal-type-mid">
      <h3><strong>Freelance Web Developer</strong></h3>
  <p><em>Self-Employed | Jan 2022 – 2023</em></p>
  <ul>
    <li>Developed and deployed responsive web applications using React, Next.js, and Tailwind CSS.</li>
    <li>Created custom APIs and backend services using Node.js and MongoDB.</li>
    <li>Collaborated with clients to gather requirements and deliver tailored solutions, improving customer satisfaction by 20%.</li>
    <li>Designed UI/UX mockups in Figma, ensuring modern and user-friendly designs.</li>
  </ul>

      </div>
      <hr />
      <div className="exp-2 reveal-type-mid">
      
  <h3><strong>Frontend Developer Intern</strong></h3>
  <p><em>Synexoo Tech | May 2024 – july 2024</em></p>
  <ul>
    <li>Developed responsive web interfaces using HTML, CSS, and JavaScript, improving website load times by 15%.</li>
    <li>Implemented React components for dynamic UI features, enhancing user interactivity.</li>
    <li>Collaborated with the design team to translate Figma mockups into functional web pages.</li>
    <li>Optimized website performance by refactoring code and using best practices in frontend development.</li>
  </ul>

      </div>
    </div>
   
      </div>
      {/* <ZigZagLine/> */}
      
      <div className="right">
        <h1><b>Personal Projects building experience</b></h1>
        <hr />
        <div className="proj-l">
        <div className='proj-1 reveal-type-mid'>
  <h3><strong>FYH - Fundraising Platform</strong></h3>
  <p><em>Next.js, Tailwind CSS, React, MongoDB</em></p>
  <ul>
    <li>Integrated Razorpay for secure and seamless online donations.</li>
    <li>Intuitive dashboard with detailed analytics and easy fund management.</li>
    <li>Unique profile links for quick and convenient donation sharing.</li>
  </ul>
</div>
<hr />

<div className='proj-2 reveal-type-mid'>
  <h3><strong>VisualizeX - Algorithm Visualizer</strong></h3>
  <p><em>React, Next.js, TypeScript</em></p>
  <ul>
    <li>Interactive visualizations for sorting and graph algorithms.</li>
    <li>User-friendly interface for understanding algorithm flow.</li>
    <li>Built with Next.js and TypeScript for scalability and performance.</li>
  </ul>
</div>
<hr />
{!isCareerPage && <p className='reveal-type-mid'>scroll to see more...</p>}


        </div>
      </div>
     </div>
      {isCareerPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
