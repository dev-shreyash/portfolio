"use client";

import { useMediaQuery } from "react-responsive";
import Main from "@/app/main/Main";
import Navbar from "@/components/Navbar/Navbar";
import About from "./about/page";
import Career from "./career/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { TsParticles } from "@/components/particles";

export default function Home() {
  // Check if the screen width is greater than or equal to 1024px (desktop)
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      {isDesktop ? (
        <div className="flex flex-col bg-black text-white">
          <TsParticles />
          <Navbar />
          <Main />
          <About />
          <Career />
          <Projects />
          <Contact />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen p-4 text-center bg-black text-white">
          <p className="text-xl font-semibold">
            This website is best viewed on a desktop device. Please switch to a larger screen for the full experience.
          </p>
        </div>
      )}
    </div>
  );
}
