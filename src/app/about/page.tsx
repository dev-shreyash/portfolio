"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "split-type"; // Import SplitText for character splitting
import Lenis from "@studio-freight/lenis"; // Import Lenis for smooth scrolling
import { FaGitAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiFigma,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython, // Python Icon
  SiNextdotjs, // Next.js Icon
  SiTypescript,
} from "react-icons/si";
import "./about.scss";
import ZigZagLine from "../../components/smallComponents/zigZag";
import { usePathname } from 'next/navigation';
import TransitionLink from "@/components/TransitionLink";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const pathname = usePathname();
    const isAboutPage = pathname.includes('/about');
  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness of scrolling
      smoothWheel: true, // Make wheel scroll smooth
    });

    // Smooth scrolling animation loop
    if(isAboutPage===false){
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Split and animate text on scroll
    const splitTypes = document.querySelectorAll(".reveal-type");

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
          stagger: 0.8, // Stagger the animation between words
          scrollTrigger: {
            trigger: char,
            start: "top 100%",
            end: "top -50%",
            scrub: true,
            markers: false, // Optional: Set to true to view scroll markers for debugging
            toggleActions: "play play reverse reverse", // Control animation playback actions
          },
        }
      );
    
    });
  }
  }, []);
  
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
    const splitTypes = document.querySelectorAll(".reveal-type-small");

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
      console.log(text.words); // Log words for debugging

      // Animate each word
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
            end: "top 80%",
            scrub: true,
            markers: false, // Optional: Set to true to view scroll markers for debugging
            toggleActions: "play play reverse reverse", // Control animation playback actions
          },
        }
      );
    });
  }, []);
  
  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness of scrolling
      smoothWheel: true, // Make wheel scroll smooth
    });

    // Smooth scrolling animation loop
    if(isAboutPage===false){
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
      console.log(text.words); // Log words for debugging

      // Animate each word
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
    });
  }
  }, []);
  


  useEffect(() => {
    // Targeting the sub-divs inside the left div
    const avatar = document.querySelector(".dev-shreyash2");
    const bioImage = document.querySelector(".bio-image");

    const details = document.querySelector(".details");
    const bioText = document.querySelector(".bio");
    const techIcons = document.querySelector(".tech-stack");
    const eduData = document.querySelector(".education");
    const head = document.querySelector(".heading");
    const headMid = document.querySelector(".heading-mid");
    const right = document.querySelector(".right");



    gsap.fromTo(
      head,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: right,
          start: "top 40%",
          end: "top 0%",
          scrub: true,
          markers: false,
          toggleActions: "play none none none",
        },
      }
    );

    
    gsap.fromTo(
      headMid,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: avatar,
          start: "top 40%",
          end: "top 0%",
          scrub: true,
          markers: false,
          toggleActions: "play none none none",
        },
      }
    );


    // Animate avatar section (fade in from left)
    gsap.fromTo(
      avatar,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: avatar,
          start: "top 97%",
          end: "top 60%",
          scrub: true,
          markers: false,
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
     bioImage,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: avatar,
          start: "top 97%",
          end: "top 80%",
          scrub: true,
          markers: false,
          toggleActions: "play none none none",
        },
      }
    );

    // // Animate details section (fade in from left)
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
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] rounded-t-3xl">
      <div className="about">
        <div className="left">
          <div className="avatar">{/* Avatar image */}</div>
          <div
            className="details "
            data-bg-color="rgba(0, 0, 0, 0.2)"
            data-fg-color="black"
          >
            <div className="main-details">
              <div className="bio-image">
                <img
                  src="portfolio-my-profile-browser-svgrepo-com.svg"
                  alt="Profile Picture"
                />
              </div>
              <div className="text-name  ">
                <span className="dev-shreyash2">
                  <b>Shreyash Bhosale</b>
                </span>
                <br />
                <div className="reveal-type-small">
                <div className="profession">
                  <span>Full Stack Developer</span>
                </div>
                <div className="dob">
                  <span>Member of the team Earthlings since June 9, 2003</span>
                </div>
                <div className="other">
                  <a href="mailto:bhosaleshreyash2@gmail.com">
                    bhosaleshreyash2@gmail.com
                  </a>
                </div>
                </div>
                
              </div>
            </div>

            <hr />
            <div className="bio">
              <h2 className="heading"><b>Bio </b></h2>
              <p className="bio-text reveal-type-mid">
                Tech explorer, full-stack web developer, and forever curious.
                <br />
                I build sleek UIs with React, power up backends with Node.js,
                <br />
                and add a touch of magic with GSAP. Always learning, always
                creating.
              </p>
            </div>
            <hr />
            <div className="heading-mid">
              <div className="tech-stack ">
                <h2 className="heading"> <b>Technologies I Work With</b></h2>
                <div className="tech-icons">
                  <SiPython />
                  <SiJavascript />
                  <SiTypescript />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiReact />
                  <SiNextdotjs />
                  <SiNodedotjs />
                  <SiMongodb />
                  <SiMysql />
                  <SiPostgresql />
                  <SiTailwindcss />
                  <SiFigma />
                </div>
              </div>
            </div>
            <hr />
            <div className="education">
              <h2> <b>Education</b></h2>
              <br />
              <div className="edu-data reveal-type-mid" > <p>Mumbai University</p> <p>Aug 2022 – May 2025 </p>
     <p>Bachelor of Science in Computer Science Mumbai, Maharashtra  </p>
     <br />
      <p>◦ Current SGPI: 8.90+ </p>
      </div>
              {/* <div className="links">
                <a
                  href="https://github.com/dev-shreyash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGitAlt />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhosaleshreyash2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/dev-shreyash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div> */}
            </div>
            {/* <div className="refering">put some referring button here</div> */}
          </div>
        </div>

        <ZigZagLine />

        <div className="right">
          <h1 className="heading"> <b>About Me</b></h1>
          <div
            className="reveal-type"

          >
            <p  className="text-block">
              Hey there! I am Shreyash Bhosale, a passionate tech explorer who
              transformed a lifelong curiosity into a career as a full-stack web
              developer.
            </p>
            <br /> <br />
            <p  className="text-block">
              Growing up, I was the kid who always wanted to know how gadgets
              worked. I would spend hours tinkering, taking things apart, and
              (sometimes) putting them back together. But it was during college
              that I stumbled upon coding — and boom — that curiosity ignited
              into a full-blown passion.
            </p>
            <br /> <br />
            <p  className="text-block">
              The world of web development fascinated me. The idea of crafting
              something from scratch, bringing ideas to life through lines of
              code, felt like magic. I dove headfirst into HTML, CSS,
              JavaScript, React, and Node.js, building projects that challenged
              my creativity and logic.
            </p>
            <br /> <br />
            <p  className="text-block">
              Whether it is sculpting sleek, responsive UIs or diving deep into
              backend architecture with PostgresSQL/MongoDB, Prisma, and
              Express, I thrive on solving problems and turning concepts into
              reality.
            </p>
            <br /> <br />
            <p  className="text-block">
              I love adding flair to my projects with animations using{" "}
              <b>GSAP</b> and styling with <b>Tailwind CSS</b>. For me, tech is
              not just a career — it is a playground of endless possibilities. I
              am always eager to learn, push boundaries, and create experiences
              that are both functional and delightful.
            </p>
            <br /> <br />
            <p  className="text-block">
              When I am not coding, you will probably find me exploring design
              tools like <b>Figma</b> or sharpening my creativity with{" "}
              <b>Adobe Photoshop</b> and <b>Illustrator</b>. I believe in the
              power of collaboration, creativity, and continuous learning.
            </p>
            <br /> <br />
            <p  className="text-block">
              Let us connect, collaborate, and build something awesome together!
            </p>
          </div>

          {/* Tech Stack Icons */}
        </div>
      </div>
        {isAboutPage && <TransitionLink href="/" label="Home >" />}
      
    </main>
  );
};

export default About;
