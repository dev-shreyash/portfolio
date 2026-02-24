"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaJava, FaAws, FaLinux } from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiMysql, SiPython, SiJavascript,
  SiNextdotjs, SiTailwindcss, SiGit, SiDocker, SiPostgresql, SiMongodb,
  SiTypescript,
  SiSpring
} from "react-icons/si";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");

  useGSAP(() => {
    // 1. Force GSAP to recalculate trigger positions after the DOM fully paints
    // This fixes the bug where anchor links/smooth scrolling breaks the trigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    gsap.fromTo(
      ".about-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Triggers slightly earlier so it catches the scroll
          once: true,       // CRITICAL FIX: Ensures it plays once and stays visible forever
        },
      }
    );
  }, { scope: container });

  return (
    <main id="about" ref={container} className="w-full max-w-6xl mx-auto px-4 pt-10 pb-0 bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Responsive Grid: 1 column on Mobile, 3 columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. About Card (Spans 2 columns on Desktop) */}
        <div className="about-card md:col-span-2 p-6 border border-neutral-800 rounded-2xl bg-black/50 backdrop-blur-sm hover:border-neutral-600 transition-colors flex flex-col justify-center">
          <h2 className="text-white font-bold mb-3 font-sans text-xl">About</h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Tech explorer and full-stack web developer. I specialize in turning complex problems into scalable, user-friendly applications using React, Node.js, Java, and MySQL. Currently building smart solutions and scalable UIs.
            <span className="inline-block bg-neutral-800 text-white px-2 py-0.5 rounded ml-2 text-xs font-sans mt-2 md:mt-0">MCA '27</span>
          </p>
        </div>

        {/* 2. Education Card (Spans 1 column on Desktop) */}
        <div className="about-card md:col-span-1 p-6 border border-neutral-800 rounded-2xl bg-black/50 backdrop-blur-sm hover:border-neutral-600 transition-colors">
          <h2 className="text-white font-bold mb-4 font-sans text-xl">Education</h2>
          <div className="space-y-4">
            <div className="pt-4 border-t border-neutral-700 flex flex-col" >
              <p className="text-white text-sm font-bold font-sans">MCA (Master of Computer Applications) </p>
              <p className="text-xs text-neutral-500">NMITD | 2025 - 2027</p>
            </div>
            <div className="pt-4 border-t border-neutral-700 flex flex-col" >
              <p className="text-white text-sm font-bold font-sans">B.Sc. in Computer Science </p>
              <p className="text-xs text-neutral-500">Mumbai University | 2022 - 2025</p>
            </div>
          </div>
        </div>

        {/* 3. Beyond Coding Card (Spans 2 columns on Desktop) */}
        <div className="about-card md:col-span-2 p-6 border border-neutral-800 rounded-2xl bg-black/50 backdrop-blur-sm hover:border-neutral-600 transition-colors flex flex-col justify-center">
          <h2 className="text-white font-bold mb-3 font-sans text-xl">Beyond the Terminal</h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            I have a strong interest in statistics and data analysis using R. When I'm offline, you can usually find me analyzing discussions on r/Maharashtra, exploring aesthetics in fashion and eyewear, or diving deep into complex sci-fi lore and mind-bending anime power systems. 
          </p>
        </div>

        {/* 4. Tech Stack Card (Spans 1 column on Desktop) */}
        <div className="about-card md:col-span-1 p-6 border border-neutral-800 rounded-2xl bg-black/50 backdrop-blur-sm hover:border-neutral-600 transition-colors flex flex-col justify-center">
          <h2 className="text-white font-bold mb-5 font-sans text-xl text-center md:text-left">Tech Stack</h2>
          <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center text-stone-50 [&>svg]:w-6 [&>svg]:h-6 hover:[&>svg]:text-white [&>svg]:transition-colors">
             <FaJava title="Java" />  <SiJavascript title="JavaScript" /> <SiTypescript title="TypeScript" /><SiReact title="React" /> <SiNodedotjs title="Node.js" />
             
            <SiNextdotjs title="Next.js" />
            <SiSpring title="Spring" />
            
             <SiDocker title="Docker" /> 
            <SiPostgresql title="PostgreSQL" /> <SiMysql title="MySQL" /> <SiMongodb title="MongoDB" />
            <SiPython title="Python" /> <FaLinux title="Linux" /> <FaAws title="AWS" />
            <SiTailwindcss title="Tailwind" /> <SiGit title="Git" /> 
            <span className="font-bold font-sans text-xs border border-neutral-600 rounded-full w-6 h-6 flex items-center justify-center hover:text-white hover:border-white transition-colors cursor-default">R</span>
          </div>
        </div>

      </div>

      {/* Navigation */}
      {isAboutPage && (
        <div className="mt-8 flex justify-center about-card">
          <TransitionLink href="/" label="Back to Home" />
        </div>
      )}
    </main>
  );
}