"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function About() {
  const pathname = usePathname();
  const isAboutPage = pathname.includes('/about');

  return (
    <div className="about">

      <div className="content-1">
      <h1 className="text-5xl font-bold mb-8">Who am I?</h1>
      <p className="text-lg">Hello, my name is Shreyash Bhosale, a passionate Full-Stack Developer and Web Designer based in Thane, Maharashtra.
      </p>
      <p className="text-lg ">I specialize in creating dynamic and beautiful web applications using the latest technologies. 
      </p>
      <p className="text-lg ">Currently, I am pursuing a Bachelor of Science in Computer Science from Mumbai University and working as a Full-stack Web Developer Intern at Xzect LAB.</p>
    
      </div>
      
      <h2 className="text-3xl font-semibold mt-6 mb-2">Technical Skills</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Programming Languages: JavaScript/TypeScript, Python, Java, C</li>
        <li>Front-End: HTML/CSS, Sass, React.js, GSAP, Tailwind CSS, Shadcn UI, Next.js</li>
        <li>Back-End: Node.js, Express.js, MongoDB, Mongoose, Prisma, MySQL, SQLite, Docker</li>
        <li>Version Control: Git, GitHub</li>
        <li>Languages: Fluent in English, Conversational Proficiency in Hindi and Marathi</li>
        <li>Art Technology: Adobe Photoshop, Adobe Premiere Pro, Illustrator, Figma</li>
      </ul>
     
     
    
      {isAboutPage && <TransitionLink href="/" label="Home ->" />}
    </div>

  );
}
