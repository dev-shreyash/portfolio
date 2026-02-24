"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function CareerSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isCareerPage = pathname.includes("/career");

  useGSAP(() => {
    setTimeout(() => ScrollTrigger.refresh(), 100);

    gsap.fromTo(
      ".career-card",
      { y: 40, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: { 
          trigger: container.current, 
          start: "top 85%", 
          once: true 
        },
      }
    );
  }, { scope: container });

  return (
    <main id="career" ref={container} className="w-full max-w-6xl mx-auto px-4 pt-16 pb-20 bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Responsive Grid - Perfect 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Status Indicator (Spans 1 Column) - THE ONLY GREEN ELEMENT */}
        <div className="career-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col justify-center items-center text-center hover:border-neutral-600 transition-all">
          <div className="relative flex h-5 w-5 mb-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500"></span>
          </div>
          <h3 className="text-white font-bold font-sans text-xl leading-tight">Actively<br/>Interviewing</h3>
          <p className="text-neutral-500 text-[10px] mt-3 uppercase tracking-widest font-bold">Software Engineering</p>
        </div>

        {/* 2. Primary Experience (Spans 2 Columns) - Converted to Grayscale */}
        <div className="career-card md:col-span-2 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-5">
              <h2 className="text-white text-xl font-bold font-sans">Current Role</h2>
              <p className="text-neutral-400 font-bold text-xs uppercase tracking-wider">Nov '25 — Present</p>
            </div>
            <h3 className="text-white text-xl font-bold font-sans">
              Student Software Engineer <span className="text-neutral-500 font-normal">@ Jal Drishti</span>
            </h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              Leading the full-stack architecture for a digital water management system designed for Gram Panchayats. Focused on clean database schemas, secure RBAC, and simulating AI/ML demand predictions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
             <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-xs text-neutral-300">Node.js</span>
             <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-xs text-neutral-300">MySQL</span>
             <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-xs text-neutral-300">AI/ML Integration</span>
          </div>
        </div>

        {/* 3. Certifications (Spans 3 Columns) - Converted to Grayscale */}
        <div className="career-card md:col-span-3 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all">
          <h2 className="text-white text-xl font-bold font-sans mb-6 border-b border-neutral-800 pb-4">Licenses & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative pl-4 border-l-2 border-neutral-700">
               <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-neutral-800"></span>
               <div className="flex flex-col"><p className="text-white font-bold text-sm font-sans">Data Structure & Algorithms (Java)</p>
               <p className="text-neutral-500 text-xs mt-1">NPTEL (Swayam) • Expected Nov 2026</p>
               </div>
               
            </div>

            <div className="relative pl-4 border-l-2 border-neutral-700">
               <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-neutral-800"></span>
               <div className="flex flex-col"> <p className="text-white font-bold text-sm font-sans">Object Oriented System Dev</p>
               <p className="text-neutral-500 text-xs mt-1">NPTEL (Swayam) • Expected May 2026</p>
               </div>
              
            </div>

            <div className="relative pl-4 border-l-2 border-neutral-700 ">
               <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-neutral-800"></span>
               <div className="flex flex-col">
               <p className="text-white font-bold text-sm font-sans">Java, Advanced JS & Node.js</p>
               <p className="text-neutral-500 text-xs mt-1">Scaler Academy</p>
                </div>
            </div>
          </div>
        </div>

        {/* 4. Minimal Timeline (Spans 3 Columns) - Converted to Grayscale */}
        <div className="career-card md:col-span-3 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all">
           <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              
              {/* NEWEST: MCA Journey (Highlighted in White instead of Green) */}
              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-white pl-5 md:pl-0 md:pt-6 flex flex-col">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">MCA Journey & Internships</p>
                 <p className="text-neutral-400 text-xs mt-1 font-sans">Present – 2027</p>
              </div>
              
              {/* MIDDLE: First Degree */}
              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-neutral-800 pl-5 md:pl-0 md:pt-6 flex flex-col">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-neutral-800"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">First Degree</p>
                 <p className="text-neutral-500 text-xs mt-1 font-sans">Graduated • May 2025</p>
              </div>

              {/* OLDEST: Started Coding */}
              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-neutral-800 pl-5 md:pl-0 md:pt-6 flex flex-col border-transparent md:border-neutral-800">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-neutral-800"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">Started Coding</p>
                 <p className="text-neutral-500 text-xs mt-1 font-sans">B.Sc. CS • 2022</p>
              </div>
              
           </div>
        </div>

      </div>

      {isCareerPage && (
        <div className="mt-8 flex justify-center career-card">
          <TransitionLink href="/" label="Back to Home" />
        </div>
      )}
    </main>
  );
}