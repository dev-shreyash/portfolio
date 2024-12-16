"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import ZigZagLine from "@/components/smallComponents/zigZag";
import "./projects.scss";
import WebsitePreview from "@/components/smallComponents/websitePreview";

export default function Projects() {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("/projects");

  return (
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px]">
      <div className="project">
        <div className="left">
          <img src="coding-svgrepo-com.svg" alt="Coding illustration" />
          <h1><b>Projects Showcase</b></h1>
          <p>Here are some of the projects I’ve built using various technologies:</p>
          <hr />

          <div className="project-l">
            {/* FYH Fundraising Platform */}
            <div className="project-item">
              <h3><strong>FYH - Fund Your Homie</strong></h3>
              <p><em>Online fundraising platform with seamless donation integration.</em></p>
              <ul>
                <li>Razorpay integration for secure payments.</li>
                <li>Built with Next.js and Tailwind CSS.</li>
                <li>Easy sharing with unique donation links.</li>
              </ul>
              <WebsitePreview url="https://nextjs-fund-app.vercel.app" />
              <p>
                <a href="https://github.com/dev-shreyash/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* VisualizeX Algorithm Visualizer */}
            <div className="project-item">
              <h3><strong>VisualizeX - Algorithm Visualizer</strong></h3>
              <p><em>Interactive tool to visualize sorting and graph algorithms.</em></p>
              <ul>
                <li>Real-time algorithm visualization.</li>
                <li>Developed with React, Next.js, and TypeScript.</li>
                <li>Educational tool for algorithm learning.</li>
              </ul>
              <WebsitePreview url="https://your-visualizex-link.com" />
              <p>
                <a href="https://github.com/dev-shreyash/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* Portfolio Website */}
            <div className="project-item">
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
            <div className="project-item">
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
            <div className="project-item">
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
            <div className="project-item">
              <h3><strong>MovieLand</strong></h3>
              <p><em>Web app to search and explore movies using the IMDb API.</em></p>
              <ul>
                <li>Fetches movie data from IMDb API.</li>
                <li>Displays movie details with a clean UI.</li>
                <li>Built using React.js for dynamic web experience.</li>
              </ul>
              <WebsitePreview url="https://reactapp-e6d31.web.app/" />
              <p>
                <a href="https://github.com/dev-shreyash/movieland" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </p>
            </div>
            <hr />

            {/* CSNotes (Code Snippets Sharing) */}
            <div className="project-item">
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
