import Main from "@/app/main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import About from "./about/page";

export default function Home() {
  return (
    <div className="flex flex-col">
       <Navbar/>
       <Main/>
       <About/>
    </div>
  );
}
