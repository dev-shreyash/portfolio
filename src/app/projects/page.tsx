"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';

export default function Projects() {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes('/projects');

  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">Projects PAGE</h1>
      {isProjectsPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
