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

// Import your centralized data
import portfolioData from "@/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

// Dictionary to map JSON string names to actual React Component Icons
const techIconMap: Record<string, JSX.Element> = {
  "React": <SiReact className="w-5 h-5 text-neutral-500" title="React" />,
  "Next.js": <SiNextdotjs className="w-5 h-5 text-neutral-500" title="Next.js" />,
  "TypeScript": <SiTypescript className="w-5 h-5 text-neutral-500" title="TypeScript" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-neutral-500" title="Tailwind CSS" />,
  "MongoDB": <SiMongodb className="w-5 h-5 text-neutral-500" title="MongoDB" />,
  "Node.js": <SiNodedotjs className="w-5 h-5 text-neutral-500" title="Node.js" />,
  "Java": <FaJava className="w-6 h-6 text-neutral-500" title="Java" />,
  "HTML5": <SiHtml5 className="w-5 h-5 text-neutral-500" title="HTML5" />,
  "CSS3": <SiCss3 className="w-5 h-5 text-neutral-500" title="CSS3" />,
  "JavaScript": <SiJavascript className="w-5 h-5 text-neutral-500" title="JavaScript" />
};

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("/projects");

  const { projects } = portfolioData; // Destructure the projects data

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
    <main id="projects" ref={container} className="w-full max-w-7xl mx-auto px-4 pt-16  bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Section Title / Intro */}
        <div className="project-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col justify-between hover:border-neutral-600 transition-all">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight leading-tight">
              {projects.intro.titleLine1}<br />{projects.intro.titleLine2}
            </h1>
            <p className="text-neutral-500 mt-4 text-sm leading-relaxed">
              {projects.intro.description}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <a href={projects.intro.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors group">
              <FaGithub className="text-xl" />
              <span className="text-sm font-sans font-medium">{projects.intro.githubText}</span>
              <span className="ml-auto transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* 2. Dynamic Projects Loop */}
        {projects.items.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-500 transition-all flex flex-col justify-between ${
              project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-white text-2xl font-bold font-sans">{project.title}</h2>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                    <FaGithub className={project.colSpan === 2 ? "text-xl" : "text-lg"} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                      <FaExternalLinkAlt className={project.colSpan === 2 ? "text-lg" : "text-sm"} />
                    </a>
                  )}
                </div>
              </div>
              
              {project.subtitle && (
                <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-4">{project.subtitle}</p>
              )}
              
              {project.hasPreview && project.live && (
                <div className={`w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 ${project.previewStyle}`}>
                   <WebsitePreview url={project.live} />
                </div>
              )}

              {/* Using dangerouslySetInnerHTML to allow span tags inside JSON for text highlighting */}
              <p 
                className="text-neutral-400 text-sm leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>

            {/* Tech Stack Footer */}
            <div className={`flex flex-wrap items-center gap-3 mt-6 ${project.colSpan === 1 ? 'pt-6 border-t border-neutral-800' : ''}`}>
              {/* Render React Icons */}
              {project.tech.icons.map((iconName, i) => (
                <React.Fragment key={i}>
                  {techIconMap[iconName]}
                </React.Fragment>
              ))}
              
              {/* Optional Divider Line */}
              {project.tech.hasDivider && (
                <div className="w-px h-5 bg-neutral-800 mx-1"></div>
              )}

              {/* Render Text Badges */}
              {project.tech.badges.map((badge, i) => (
                <span key={i} className="text-xs text-neutral-500 font-sans border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}

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