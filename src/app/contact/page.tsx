"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';
import './contact.scss';

export default function Contact() {
  const pathname = usePathname();
  const isContactPage = pathname.includes('/contact');

  return (
    <main
    className={isContactPage
      ? "bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] rounded-t-3xl"
      : "bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] "
    }
  >

      {/* Connect with Me Section */}
      <section className="connect-with-me mt-5">
        <h3>Connect with Me</h3>
        <p>
          Lets stay connected! Follow me on my social media profiles and feel free to send me a message.
        </p>
      </section>
      <section className="contact-form">
        
        <img src="contact-animated.svg" alt="Contact Animation" />
        
        <div>
          
          <h2>Contact Me</h2>
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

      {/* Thank You Section */}
    

      {/* Footer */}
      <footer>
        <p>Website Created by Shreyash Bhosale, 2024</p>
      </footer>

      {/* Conditional Transition Link */}
      <div className="mb-3">
      {isContactPage && <TransitionLink href="/" label="Home >" />}
      </div>
    </main>
  );
}
