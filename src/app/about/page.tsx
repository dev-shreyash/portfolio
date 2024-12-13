"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "split-type"; // Import SplitText for character splitting
import Lenis from "@studio-freight/lenis"; // Import Lenis for smooth scrolling
import { FaGitAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFigma, SiTailwindcss, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import './about.scss';
import ZigZagLine from "./smallComponents/zigZag";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness of scrolling (lower value for smoother, higher for more inertia)
      smoothWheel: true, // Make wheel scroll smooth
    });

    // Smooth scrolling animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf); // Keep requesting the animation frame
    }
    requestAnimationFrame(raf);

    // Split and animate text on scroll
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char: any) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      // Split the text into individual characters
      const text = new SplitText(char, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          color: bg, // Start color
        },
        {
          color: fg, // End color
          duration: 3,
          stagger: 0.06,
          scrollTrigger: {
            trigger: char,
            start: 'top 65%',
            end: 'top 20%',
            scrub: true,
            markers: false, // Optional: Set to true to view scroll markers for debugging
            toggleActions: 'play play reverse reverse', // Control animation playback actions
          }
        }
      );
    });
  }, []);

  return (
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] rounded-t-3xl">
      <div className="about">
        <div className="left">
          <div className="avatar">
            {/* Avatar image */}
          </div>
          <div className="details reveal-type" data-bg-color="rgba(0, 0, 0, 0.2)" data-fg-color="black" >
            <div className="main-details">
              <div className="bio-image">
                <img
                  src="portfolio-my-profile-browser-svgrepo-com.svg"
                  alt="Profile Picture"
                />
              </div>
              <div className="text-name ">
                <span className="dev-shreyash2">
                  <b>Shreyash Bhosale</b>
                </span>
                <br />
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

            <hr />
            <div className="bio">
              <h2>Bio</h2>
              <p className="bio-text">
                Tech explorer, full-stack web developer, and forever curious.
                <br />
               I build sleek UIs with React, power up backends with Node.js, 
               <br />
               and
                add a touch of magic with GSAP. Always learning, always creating.
              </p>
            </div>
            <hr />
            <div className="achievements">
              <h2>Achievements</h2>
              <br />
              <p>No Achievements yet.</p>
            </div>
            <hr />
            <div className="socials">
              <h2>Socials</h2><br />
              <div className="links">
                <a href="https://github.com/dev-shreyash" target="_blank" rel="noopener noreferrer">
                  <FaGitAlt />
                </a>
                <a href="https://www.linkedin.com/in/bhosaleshreyash2/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/dev-shreyash" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="refering">
              put some referring button here
            </div>
          </div>
        </div>

        <ZigZagLine />

        <div className="right">
          <h1 >
            About Me
          </h1>
          <div className="text-block reveal-type" data-bg-color="rgba(0, 0, 0, 0.1)" data-fg-color="black">
            <p>
              Hey there!  I am Shreyash Bhosale, a passionate tech explorer  who
              transformed a lifelong curiosity into a career as a full-stack web
              developer.
            </p>
            <br /> <br />
            <p>
              Growing up, I was the kid who always wanted to know how gadgets
              worked. I would spend hours tinkering, taking things apart, and
              (sometimes) putting them back together. But it was during college
              that I stumbled upon coding — and boom — that curiosity ignited into
              a full-blown passion.
            </p>
            <br /> <br />
            <p>
              The world of web development fascinated me. The idea of crafting
              something from scratch, bringing ideas to life through lines of code,
              felt like magic. I dove headfirst into HTML, CSS, JavaScript, React, and Node.js,
              building projects that challenged my creativity and logic.
            </p>
            <br /> <br />
            <p>
              Whether it is sculpting sleek, responsive UIs or diving deep into backend
              architecture with PostgresSQL/MongoDB, Prisma, and Express, I thrive
              on solving problems and turning concepts into reality.
            </p>
            <br /> <br />
            <p>
              I love adding flair to my projects with animations using <b>GSAP</b> and styling with <b>Tailwind CSS</b>. 
              For me, tech is not just a career — it is a playground of endless possibilities. I am always eager to learn, 
              push boundaries, and create experiences that are both functional and delightful.
            </p>
            <br /> <br />
            <p>
              When I am not coding, you will probably find me exploring design tools like <b>Figma</b> or sharpening my creativity 
              with <b>Adobe Photoshop</b> and <b>Illustrator</b>. I believe in the power of collaboration, creativity, 
              and continuous learning.
            </p>
            <br /> <br />
            <p>
              Let us connect, collaborate, and build something awesome together! 
            </p>
          </div>

          {/* Tech Stack Icons */}
          {/* <div className="tech-stack">
            <h2>Technologies I Work With</h2>
            <div className="tech-icons">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiReact />
              <SiNodedotjs />
              <SiMongodb />
              <SiMysql />
              <SiPostgresql />
              <SiTailwindcss />
              <SiFigma />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default About;
