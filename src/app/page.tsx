"use client";

import Main from "@/app/main/Main";
import Navbar from "@/components/Navbar/Navbar";
import { TsParticles } from "@/components/particles";

// Import from components, NOT from /app routes
import AboutSection from "@/components/sections/AboutSection";
 import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      {/* Particles rendered once at the top level. 
        Using absolute/fixed positioning inside the component to keep it behind content 
      */}
      <TsParticles />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        {/* Add IDs to every section for your Navbar to target */}
        <section id="hero">
          <Main />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
         <section id="career">
          <CareerSection />
        </section>
       
        <section id="projects">
          <ProjectsSection />
        </section>
         
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}