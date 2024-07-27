"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiC, SiSass,  SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiSqlite, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator } from 'react-icons/si';
import { DiJava } from 'react-icons/di'; 
import "./about.scss";

export default function About() {
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");
  const aniText = useRef<HTMLDivElement>(null);
  const iconStyle = { fontSize: '5rem' };
  useEffect(() => {
    if (aniText.current) {
      gsap.fromTo(
        aniText.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <div className="about">
      <div className="content-1" ref={aniText}>
        <h1 className="text-5xl font-bold mb-8">Who am I?</h1>
        <p className="text-lg">
          Hello, my name is Shreyash Bhosale, a passionate Full-Stack Developer
          and Web Designer based in Thane, Maharashtra.
        </p>
        <p className="text-lg ">
          I specialize in creating dynamic and beautiful web applications using
          the latest technologies.
        </p>
        <p className="text-lg ">
          Currently, I am pursuing a Bachelor of Science in Computer Science
          from Mumbai University and working as a Full-stack Web Developer
          Intern at Xzect LAB.
        </p>
      </div>

      <div className="content-2">
      <h2 className="text-3xl font-semibold mt-6 mb-2">Technical Skills</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>
          <SiJavascript style={iconStyle} /> <SiTypescript style={iconStyle} /> <SiPython style={iconStyle} /> <DiJava style={iconStyle} /> <SiC style={iconStyle} />
        </li>
        <li>
          <FaHtml5 style={iconStyle} /> <FaCss3Alt style={iconStyle} /> <SiSass style={iconStyle} /> <FaReact style={iconStyle} /> <SiTailwindcss style={iconStyle} /> <FaReact style={iconStyle} /> <SiNextdotjs style={iconStyle} />
        </li>
        <li>
          <FaNodeJs style={iconStyle} /> <SiMongodb style={iconStyle} /> <SiMysql style={iconStyle} /> <SiSqlite style={iconStyle} /> <FaDocker style={iconStyle} />
        </li>
        <li>
          <FaGitAlt style={iconStyle} />
        </li>
        <li>
          {/* Icons for language proficiency are not included as they are not available */}
        </li>
        <li>
          <SiAdobephotoshop style={iconStyle} /> <SiAdobepremierepro style={iconStyle} /> <SiAdobeillustrator style={iconStyle} /> <FaFigma style={iconStyle} />
        </li>
      </ul>
    </div>

      {isAboutPage && <TransitionLink href="/" label="Home ->" />}
    </div>
  );
}
