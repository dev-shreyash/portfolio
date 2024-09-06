"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaLinkedin,
  FaTwitter,
  FaLightbulb,
  FaFire,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiSass,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import "./about.scss";
import { FaAnchor } from "react-icons/fa6";
import { Yellowtail } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");
  const aniText = useRef<HTMLDivElement>(null);
  const typingEffectRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLUListElement>(null);

  return (
    <div className="about">
      <div className="left">
        <div className="avatar">
          <img src="/spiderman-7810368_1920.png" alt="avatar" />
        </div>
        <div className="details">
          <div className="main-details">
          <span className="dev-shreyash">Shreyash Bhosale</span>
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
        
          <hr />
          <div className="bio">
            <h2>Bio</h2>
            <p>I am Shreyash Bhosale. I am a full stack developer.</p>
          </div>
          <hr />
          <div className="achievements">
            <h2>Achievements</h2>
            <p>No Achievements yet.</p>
          </div>
          <hr />
          <div className="socials">
            <h2>Socials</h2>
            <a href="https://github.com/dev-shreyash">
              <FaGitAlt />
            </a>
            <a href="https://www.linkedin.com/in/bhosaleshreyash2/">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/dev-shreyash">
             <FaTwitter /> 
             </a>
          </div>
          <div className="refering">
            put some refreing button here
          </div>
        </div>
      </div>
      <div className="right">
        <div className="main-headings">
          <div className="boxes">
            <div className="project-made">
              <div className="icon">
              <FaLightbulb  />
              </div>
              <div className="content">
              <h2>Projects Made</h2>
              <span>10</span>
              </div>
            </div>
            {/* write for experience and streak here */}
            

            <div className="experience">
              <div className="icon">
              <FaAnchor/>
              </div>
              <div className="content">
              <h2>Experience</h2>
              <span>less than 1 year</span>
              </div>
            </div>
            <div className="streak">
              <div className="icon">
              <FaFire/>
              </div>
              <div className="content">
              <h2>Streak</h2>
              <span>10 Days 🔥</span>
              </div>
            </div>
          </div>
        </div>
        <div className="code-commits">
          <h2>Code Commits</h2>
          <p>No code commits yet.</p>
        </div>
        <div className="tech-chart">
          <h2>Tech Chart</h2>
          <div className="box">

          </div>
        </div>
        <div className="top-coding-languages">
          <h2>Top Coding Languages</h2>
          <div className="box">
            
          </div>
        </div>
        <div className="Top-frameworks-and-libraries">
          <h2>Top Frameworks and Libraries</h2>
          <div className="box">
            
          </div>
        </div>
      </div>

      {isAboutPage && <TransitionLink href="/" label="Home ->" />}
    </div>
  );
};

export default About;
