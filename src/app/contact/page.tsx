"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';

export default function Contact() {
  const pathname = usePathname();
  const isContactPage = pathname.includes('/contact');

  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">Contact PAGE</h1>
      {isContactPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
