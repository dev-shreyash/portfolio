"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';
import './contact.scss';

export default function Contact() {
  const pathname = usePathname();
  const isContactPage = pathname.includes('/contact');

  return (
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-screen flex flex-col items-center justify-center gap-[50px]" >
  
      <section className="contact-form">
        <img src="contact-animated.svg" alt="" />
       
      <div>
        <h2>Contact Us</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Name*")}
            maxLength={50}
            tabIndex={1}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "E-mail*")}
            maxLength={50}
            tabIndex={2}
            required
          />
          <select name="subject" id="subject" tabIndex={3} required>
            <option value="" selected>
              Projects
            </option>
            <option value="">Feedback</option>
            <option value="">Say hi</option>
          </select>
          <textarea
            name="message"
            placeholder="Message*"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Message*")}
            maxLength={1560}
            tabIndex={4}
            required
          ></textarea>
          <input type="submit" value="Send" tabIndex={5} />
        </form>
      </div>
    </section>
      {isContactPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
