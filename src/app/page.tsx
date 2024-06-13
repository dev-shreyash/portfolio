import Main from "@/app/main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import About from "./about/page";
import Career from "./career/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { TsParticles } from "@/components/particles";

export default function Home() {
  return (
    <div className="flex flex-col">
       <TsParticles/>
       <Navbar/>
       <Main/>
       <About/>
       <Career/>
       <Projects/>
       <Contact/>
    </div>
  );
}
