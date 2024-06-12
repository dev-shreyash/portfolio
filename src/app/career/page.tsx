"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';

export default function Career() {
  const pathname = usePathname();
  const isCareerPage = pathname.includes('/career');

  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">Career PAGE</h1>
      {isCareerPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
