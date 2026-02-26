"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

// Import your centralized data
import portfolioData from "@/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

export default function CareerSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isCareerPage = pathname.includes("/career");

  const { career } = portfolioData; // Destructure the career data

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
    <main id="career" ref={container} className="w-full max-w-7xl mx-auto px-4 pt-16  bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Responsive Grid - Perfect 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Status Indicator (Spans 1 Column) */}
        <div className="career-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col justify-center items-center text-center hover:border-neutral-600 transition-all">
          <div className="relative flex h-5 w-5 mb-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500"></span>
          </div>
          <h3 className="text-white font-bold font-sans text-xl leading-tight">{career.status.line1}<br/>{career.status.line2}</h3>
          <p className="text-neutral-500 text-[10px] mt-3 uppercase tracking-widest font-bold">{career.status.subtitle}</p>
        </div>

        {/* 2. Dynamic Experience Loop */}
        {career.experience.map((job, index) => (
          <div 
            key={index} 
            // The first job spans 2 columns to sit next to the status. Future jobs span all 3 columns!
            className={`career-card p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all flex flex-col justify-between ${
              index === 0 ? "md:col-span-2" : "md:col-span-3"
            }`}
          >
            <div>
              <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-5">
                <h2 className="text-white text-xl font-bold font-sans">{job.badge}</h2>
                <p className="text-neutral-400 font-bold text-xs uppercase tracking-wider">{job.dateRange}</p>
              </div>
              <h3 className="text-white text-xl font-bold font-sans">
                {job.role} <span className="text-neutral-500 font-normal">{job.company}</span>
              </h3>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                {job.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {job.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-xs text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* 3. Certifications (Spans 3 Columns) */}
        <div className="career-card md:col-span-3 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all">
          <h2 className="text-white text-xl font-bold font-sans mb-6 border-b border-neutral-800 pb-4">{career.certificationsTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {career.certifications.map((cert, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-neutral-700">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-neutral-800"></span>
                <div className="flex flex-col">
                  <p className="text-white font-bold text-sm font-sans">{cert.title}</p>
                  <p className="text-neutral-500 text-xs mt-1">{cert.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Minimal Timeline (Spans 3 Columns) */}
        <div className="career-card md:col-span-3 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all">
           <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              
              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-white pl-5 md:pl-0 md:pt-6 flex flex-col">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">{career.timeline[0].title}</p>
                 <p className="text-neutral-400 text-xs mt-1 font-sans">{career.timeline[0].subtitle}</p>
              </div>
              
              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-neutral-800 pl-5 md:pl-0 md:pt-6 flex flex-col">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-neutral-800"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">{career.timeline[1].title}</p>
                 <p className="text-neutral-500 text-xs mt-1 font-sans">{career.timeline[1].subtitle}</p>
              </div>

              <div className="flex-1 relative border-l-2 md:border-l-0 md:border-t-2 border-neutral-800 pl-5 md:pl-0 md:pt-6 flex flex-col border-transparent md:border-neutral-800">
                 <span className="absolute -left-[9px] md:left-0 top-0 md:-top-[9px] h-4 w-4 rounded-full bg-neutral-800"></span>
                 <p className="text-white font-bold text-sm font-sans mt-1 md:mt-0">{career.timeline[2].title}</p>
                 <p className="text-neutral-500 text-xs mt-1 font-sans">{career.timeline[2].subtitle}</p>
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