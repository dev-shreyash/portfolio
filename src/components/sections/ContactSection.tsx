"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isContactPage = pathname.includes("/contact");

  useGSAP(() => {
    setTimeout(() => ScrollTrigger.refresh(), 100);

    gsap.fromTo(
      ".contact-card",
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = `Portfolio Contact from ${formData.get("name")}`;
    const body = `${formData.get("message")}%0D%0A%0D%0AReply to: ${formData.get("email")}`;
    window.location.href = `mailto:bhosaleshreyash2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main id="contact" ref={container} className="w-full max-w-6xl mx-auto px-4 pt-16 pb-20 bg-transparent text-gray-300 font-mono relative z-10">
      
      {/* Section Header */}
      <div className="mb-10 text-left contact-card">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight">Let's Connect.</h1>
        <p className="text-neutral-500 mt-3 text-sm md:text-base max-w-2xl">
          Whether you have a question, an opportunity, or just want to say hi, my inbox is always open.
        </p>
      </div>

      {/* Responsive Grid - Perfectly balanced asymmetrical layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Contact Form (Spans 2 Columns and 2 Rows) */}
        <div className="contact-card md:col-span-2 md:row-span-2 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all flex flex-col justify-between">
          <div>
            <h2 className="text-white text-xl font-bold font-sans mb-6">Send a Message</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Name</label>
                  <input required type="text" id="name" name="name" placeholder="John Doe" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Email</label>
                  <input required type="email" id="email" name="email" placeholder="john@example.com" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="message" className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Message</label>
                <textarea required id="message" name="message" rows={6} placeholder="Hello Shreyash, I'd like to talk about..." className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700"></textarea>
              </div>

              <button type="submit" className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto md:self-end bg-white text-black px-8 py-3 rounded-lg font-bold font-sans hover:bg-neutral-300 transition-colors">
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>

        {/* 2. Direct Reach (Spans 1 Column, 1 Row) */}
        <div className="contact-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all flex flex-col justify-center">
          <h2 className="text-white text-xl font-bold font-sans mb-6 border-b border-neutral-800 pb-4">Direct</h2>
          <div className="flex flex-col gap-6">
            <a href="mailto:bhosaleshreyash2@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shrink-0">
                <FaEnvelope className="text-neutral-500 group-hover:text-black transition-colors" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-neutral-300 group-hover:text-white transition-colors truncate">bhosaleshreyash2<br/>@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+917039201586" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shrink-0">
                <FaPhoneAlt className="text-neutral-500 group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm text-neutral-300 group-hover:text-white transition-colors">+91 7039201586</p>
              </div>
            </a>
          </div>
        </div>

        {/* 3. Social Links (Spans 1 Column, 1 Row) */}
        <div className="contact-card md:col-span-1 p-8 border border-neutral-800 rounded-2xl bg-black/40 backdrop-blur-md hover:border-neutral-600 transition-all flex flex-col justify-center">
          <h2 className="text-white text-xl font-bold font-sans mb-6 border-b border-neutral-800 pb-4">Socials</h2>
          <div className="flex gap-4">
            <a href="https://github.com/dev-shreyash" target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-white hover:border-white transition-all group">
              <FaGithub className="text-2xl text-neutral-500 group-hover:text-black transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/bhosaleshreyash2/" target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-white hover:border-white transition-all group">
              <FaLinkedin className="text-2xl text-neutral-500 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>

      </div>

      {/* Navigation */}
      {isContactPage && (
        <div className="mt-12 flex justify-center contact-card">
          <TransitionLink href="/" label="Back to Home" />
        </div>
      )}
    </main>
  );
}