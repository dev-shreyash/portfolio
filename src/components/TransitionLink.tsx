"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button 
    className="rounded-[65px] px-5 py-2 border-2 border-white text-black font-bold shadow-slate-400 cursor-pointer transition-all duration-300 ease-linear hover:text-black hover:bg-white "     
     onClick={handleClick}>
      {label}
    </button>
  );
}