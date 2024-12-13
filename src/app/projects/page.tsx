"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';

export default function Projects() {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes('/projects');

  return (
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-screen flex flex-col items-center justify-center gap-[50px] " >
      <h1 className="text-5xl">Projects PAGE</h1>
      {isProjectsPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
