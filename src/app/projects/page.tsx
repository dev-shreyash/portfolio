"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import ZigZagLine from "@/components/smallComponents/zigZag";
import "./projects.scss";
import WebsitePreview from "@/components/smallComponents/websitePreview";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "split-type"; // Import SplitText for character splitting
import Lenis from "@studio-freight/lenis";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  const pathname = usePathname();
  const isProjectsPage = pathname.includes("/projects");

  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness of scrolling
      smoothWheel: true, // Make wheel scroll smooth
    });

    // Smooth scrolling animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Split and animate text on scroll
    const splitTypes = document.querySelectorAll(".reveal-type-mid");

    splitTypes.forEach((char: any) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      // Check if the element is found
      if (!char) {
        console.warn('Element not found');
        return;
      }

      // Split the text into individual words
      const text = new SplitText(char, { types: "words", wordClass: "split-word" });

      // Check if SplitText split the words
      //console.log(text.words); // Log words for debugging

      // Animate each word
      gsap.fromTo(
        text.words,
        {
          color: bg, // Start color
          opacity: 0, // Ensure opacity starts at 0
        },
        {
          color: fg, // End color
          opacity: 1, // Fade in the words
          duration: .1, // Duration of the animation
          stagger: 0.2, // Stagger the animation between words
          scrollTrigger: {
            trigger: char,
            start: "top 97%",
            end: "top 60%",
            scrub: true,
            markers: false, // Optional: Set to true to view scroll markers for debugging
            toggleActions: "play play reverse reverse", // Control animation playback actions
          },
        }
      );
    });
  }, []);
  

  return (
    <main
    className={isProjectsPage
      ? "bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] rounded-t-3xl"
      : "bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] "
    }
  >      <div className="project">
        <div className="left">
          <img src="coding-svgrepo-com.svg" alt="Coding illustration" />
          <h1><b>Projects Showcase</b></h1>
          <p className="reveal-type-mid">Here are some of the projects I’ve built using various technologies:</p>
          <hr />

          <div className="project-l">
            {/* FYH Fundraising Platform */}
            <div className="project-item reveal-type-mid">
              <h3><strong>FYH - Fund Your Homie</strong></h3>
              <p><em>Online fundraising platform with seamless donation integration.</em></p>
              <ul>
                <li>Razorpay integration for secure payments.</li>
                <li>Built with Next.js and Tailwind CSS.</li>
                <li>Easy sharing with unique donation links.</li>
              </ul>
              <WebsitePreview url="https://nextjs-fund-app.vercel.app" />
              <p>
                <a href="https://github.com/dev-shreyash/nextjs-ai-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* VisualizeX Algorithm Visualizer */}
            <div className="project-item reveal-type-mid">
              <h3><strong>VisualizeX - Algorithm Visualizer</strong></h3>
              <p><em>Interactive tool to visualize sorting and graph algorithms.</em></p>
              <ul>
                <li>Real-time algorithm visualization.</li>
                <li>Developed with React, Next.js, and TypeScript.</li>
                <li>Educational tool for algorithm learning.</li>
              </ul>
              <WebsitePreview url="https://visualizex.vercel.app" />
              <p>
                <a href="https://github.com/dev-shreyash/visualizex" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* Portfolio Website */}
            <div className="project-item reveal-type-mid">
              <h3><strong>Portfolio Website</strong></h3>
              <p><em>Interactive portfolio to showcase projects and skills.</em></p>
              <ul>
                <li>Built with React, Next.js, and GSAP animations.</li>
                <li>TypeScript for type safety, SCSS for styling.</li>
                <li>Responsive and dynamic UI.</li>
              </ul>
              <WebsitePreview url="https://dev-shreyash.vercel.app" />
              <p>
                <a href="https://github.com/dev-shreyash/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
          </div>
        </div>

        <ZigZagLine />
        
        <div className="right">
          <h1><b>User Experience and Interface Designs</b></h1>
          <div className="project-l2">
            {/* Real Estate Platform */}
            <div className="project-item reveal-type-mid">
              <h3><strong>Real Estate Platform</strong></h3>
              <p><em>MERN stack application for managing real estate listings.</em></p>
              <ul>
                <li>Real-time chat and profile management.</li>
                <li>Advanced search with filters.</li>
                <li>Built with Node.js, React, MongoDB, and Prisma.</li>
              </ul>
              <WebsitePreview url="https://real-estate-react-app-shreyash.netlify.app/" />
              <p>
                <a href="https://github.com/dev-shreyash/real-estate-react-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* Brand Landing Page */}
            <div className="project-item reveal-type-mid">
              <h3><strong>Brand Landing Page</strong></h3>
              <p><em>Modern and responsive landing page for branding.</em></p>
              <ul>
                <li>Built with React and SCSS.</li>
                <li>Mobile-first design with optimized performance.</li>
                <li>Clear call-to-action for better user engagement.</li>
              </ul>
              <WebsitePreview url="https://react-frontend-shreyash.netlify.app/" />
              <p>
                <a href="https://github.com/dev-shreyash/brand-landing-page" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* MovieLand */}
            <div className="project-item reveal-type-mid">
              <h3><strong>MovieLand</strong></h3>
              <p><em>Web app to search and explore movies using the IMDb API.</em></p>
              <ul>
                <li>Fetches movie data from IMDb API.</li>
                <li>Displays movie details with a clean UI.</li>
                <li>Built using React.js for dynamic web experience.</li>
              </ul>
              <WebsitePreview url="https://reactapp-e6d31.web.app/" />
              <p>
                <a href="https://github.com/dev-shreyash/react-webapp" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* CSNotes (Code Snippets Sharing) */}
            <div className="project-item reveal-type-mid">
              <h3><strong>CSNotes</strong></h3>
              <p><em>Platform to share code snippets using HTML, CSS, and JavaScript.</em></p>
              <ul>
                <li>Easy sharing and categorization of code snippets.</li>
                <li>Built with HTML, CSS, and vanilla JavaScript.</li>
                <li>Fast loading and simple interface.</li>
              </ul>
              <WebsitePreview url="https://codenetz.web.app/csnotes" />
              <p>
                <a href="https://github.com/dev-shreyash/csnotes" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>

      {isProjectsPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
