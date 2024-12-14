"use client"
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';
import './career.scss';
import ZigZagLine from '@/components/smallComponents/zigZag';
export default function Career() {
  const pathname = usePathname();
  const isCareerPage = pathname.includes('/career');

  return (
    <main className="bg-neutral-100 w-[90%] opacity-98 text-black mx-auto h-[100%] flex flex-col items-center justify-center gap-[50px] " >
     
     <div className="career">
      <div className="left">
    <img src="work-svgrepo-com.svg" alt="" />
    <h1><b>Work Experience</b></h1>
    <hr />
    <div className="exp-l">
      <div className="exp-1">
      <h3><strong>Freelance Web Developer</strong></h3>
  <p><em>Self-Employed | Jan 2022 – 2023</em></p>
  <ul>
    <li>Developed and deployed responsive web applications using React, Next.js, and Tailwind CSS.</li>
    <li>Created custom APIs and backend services using Node.js and MongoDB.</li>
    <li>Collaborated with clients to gather requirements and deliver tailored solutions, improving customer satisfaction by 20%.</li>
    <li>Designed UI/UX mockups in Figma, ensuring modern and user-friendly designs.</li>
  </ul>

      </div>
      <hr />
      <div className="exp-2">
      
  <h3><strong>Frontend Developer Intern</strong></h3>
  <p><em>Synexoo Tech | May 2024 – july 2024</em></p>
  <ul>
    <li>Developed responsive web interfaces using HTML, CSS, and JavaScript, improving website load times by 15%.</li>
    <li>Implemented React components for dynamic UI features, enhancing user interactivity.</li>
    <li>Collaborated with the design team to translate Figma mockups into functional web pages.</li>
    <li>Optimized website performance by refactoring code and using best practices in frontend development.</li>
  </ul>

      </div>
    </div>
   
      </div>
      <ZigZagLine/>
      
      <div className="right">
        <h1><b>Personal Projects building experience</b></h1>
        <hr />
        <div className="proj-l">
        <div className='proj-1'>
  <h3><strong>FYH - Fundraising Platform</strong></h3>
  <p><em>Next.js, Tailwind CSS, React, MongoDB</em></p>
  <ul>
    <li>Integrated Razorpay for secure and seamless online donations.</li>
    <li>Intuitive dashboard with detailed analytics and easy fund management.</li>
    <li>Unique profile links for quick and convenient donation sharing.</li>
  </ul>
</div>
<hr />

<div className='proj-2'>
  <h3><strong>VisualizeX - Algorithm Visualizer</strong></h3>
  <p><em>React, Next.js, TypeScript</em></p>
  <ul>
    <li>Interactive visualizations for sorting and graph algorithms.</li>
    <li>User-friendly interface for understanding algorithm flow.</li>
    <li>Built with Next.js and TypeScript for scalability and performance.</li>
  </ul>
</div>
<hr />
<p>scroll to see more...</p>

        </div>
      </div>
     </div>
      {isCareerPage && <TransitionLink href="/" label="Home ->" />}
    </main>
  );
}
