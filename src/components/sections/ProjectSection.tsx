"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaJava, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss, SiDocker, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import WebsitePreview from "@/components/smallComponents/websitePreview";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("/projects");

  useGSAP(() => {
    setTimeout(() => ScrollTrigger.refresh(), 100);

    gsap.fromTo(
      ".project-card",
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
    <main id="projects" ref={container} className="w-full max-w-7xl mx-auto px-4 pt-16 pb-20 bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Section Title / Intro (Spans 1 Column) */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col justify-between hover:border-neutral-600 transition-all">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight leading-tight">
              Featured<br />Work.
            </h1>
            <p className="text-neutral-500 mt-4 text-sm leading-relaxed">
              A collection of scalable web applications, algorithms, and full-stack solutions.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <a href="https://github.com/dev-shreyash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors group">
              <FaGithub className="text-xl" />
              <span className="text-sm font-sans font-medium">View all on GitHub</span>
              <span className="ml-auto transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* 2. VisualizeX (Spans 2 Columns) */}
        <div className="project-card md:col-span-2 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-2xl font-bold font-sans">VisualizeX</h2>
              <div className="flex gap-4">
                <a href="https://github.com/dev-shreyash/visualizex" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
                <a href="https://visualize-x.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaExternalLinkAlt className="text-lg" /></a>
              </div>
            </div>
            <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-4">Algorithm Visualizer & IDE</p>
            
            {/* Website Preview Wrapper */}
            <div className="w-full rounded-xl overflow-hidden border border-neutral-800 mb-6 bg-neutral-900">
               <WebsitePreview url="https://visualize-x.vercel.app" />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Real-time interactive tool to visualize sorting and graph algorithms with a custom code execution sandbox. Engineered a high-performance backend using <span className="text-white">Elysia.js (Bun)</span>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <SiReact className="w-5 h-5 text-neutral-500" title="React" />
            <SiNextdotjs className="w-5 h-5 text-neutral-500" title="Next.js" />
            <SiTypescript className="w-5 h-5 text-neutral-500" title="TypeScript" />
            <div className="w-px h-5 bg-neutral-800 mx-1"></div>
            <span className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">Bun</span>
          </div>
        </div>

        {/* 3. FYH Crowdfunding (Spans 2 Columns) */}
        <div className="project-card md:col-span-2 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-2xl font-bold font-sans">FYH - Fund Your Homie</h2>
              <div className="flex gap-4">
                <a href="https://github.com/dev-shreyash/nextjs-ai-app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
                <a href="https://nextjs-fund-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaExternalLinkAlt className="text-lg" /></a>
              </div>
            </div>
            <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-4">Donation Platform</p>
            
            <div className="w-full rounded-xl overflow-hidden border border-neutral-800 mb-6 bg-neutral-900">
               <WebsitePreview url="https://nextjs-fund-app.vercel.app" />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Online fundraising platform with seamless donation integration. Integrated <span className="text-white">Razorpay</span> for secure, real-time donations and automated receipt generation using Next.js SSR.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <SiNextdotjs className="w-5 h-5 text-neutral-500" title="Next.js" />
            <SiTailwindcss className="w-5 h-5 text-neutral-500" title="Tailwind CSS" />
            <SiMongodb className="w-5 h-5 text-neutral-500" title="MongoDB" />
            <div className="w-px h-5 bg-neutral-800 mx-1"></div>
            <span className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">Razorpay API</span>
          </div>
        </div>

        {/* 4. Real Estate Platform (Spans 1 Column) */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-xl font-bold font-sans">Real Estate App</h2>
              <div className="flex gap-3">
                <a href="https://github.com/dev-shreyash/real-estate-react-app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
                <a href="https://real-estate-react-app-shreyash.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaExternalLinkAlt className="text-sm" /></a>
              </div>
            </div>
            
            <div className="w-full h-32 rounded-xl overflow-hidden border border-neutral-800 mb-4 bg-neutral-900">
               <WebsitePreview url="https://real-estate-react-app-shreyash.netlify.app/" />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed">
              MERN stack application for managing real estate listings with real-time chat, profile management, and advanced search filters.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
            <SiReact className="w-5 h-5 text-neutral-500" title="React" />
            <SiNodedotjs className="w-5 h-5 text-neutral-500" title="Node.js" />
            <SiMongodb className="w-5 h-5 text-neutral-500" title="MongoDB" />
          </div>
        </div>

        {/* 5. Smart City Metro Navigator (Spans 1 Column) */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-xl font-bold font-sans">Metro Navigator</h2>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
            </div>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider mb-4">Desktop App (DSA)</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Route optimization engine using <span className="text-white">Dijkstra&apos;s Algorithm</span> to calculate optimal paths across 50+ stations, modeling complex interchange penalties.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
            <FaJava className="w-6 h-6 text-neutral-500" title="Java" />
            <span className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">Swing</span>
            <span className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">Graphs</span>
          </div>
        </div>

        {/* 6. MovieLand (Spans 1 Column) */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-xl font-bold font-sans">MovieLand</h2>
              <div className="flex gap-3">
                <a href="https://github.com/dev-shreyash/react-webapp" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
                <a href="https://reactapp-e6d31.web.app/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaExternalLinkAlt className="text-sm" /></a>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Web app to search and explore movies using the <span className="text-white">IMDb API</span>. Built dynamically to fetch and display movie details with a clean UI.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
            <SiReact className="w-5 h-5 text-neutral-500" title="React" />
            <span className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">IMDb API</span>
          </div>
        </div>

        {/* 7. CSNotes (Spans 1 Column) */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-xl font-bold font-sans">CSNotes</h2>
              <div className="flex gap-3">
                <a href="https://github.com/dev-shreyash/csnotes" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub className="text-xl" /></a>
                <a href="https://codenetz.web.app/csnotes" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaExternalLinkAlt className="text-sm" /></a>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Platform to easily share and categorize code snippets. Built with a focus on fast loading times and a simple interface.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
            <SiHtml5 className="w-5 h-5 text-neutral-500" title="HTML5" />
            <SiCss3 className="w-5 h-5 text-neutral-500" title="CSS3" />
            <SiJavascript className="w-5 h-5 text-neutral-500" title="JavaScript" />
          </div>
        </div>

      </div>

      {/* Navigation */}
      {isProjectsPage && (
        <div className="mt-12 flex justify-center project-card">
          <TransitionLink href="/" label="Back to Home" />
        </div>
      )}
    </main>
  );
}