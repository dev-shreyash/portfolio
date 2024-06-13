
"use client"
import React,{useEffect} from 'react'

import './main.scss'
import { gsap } from 'gsap'
import SplitType from 'split-type'
const Main = () => {
  
useEffect(() => {
const ourText = new SplitType('span.dev-shreyash', { types: 'chars' })
const chars = ourText.chars

gsap.fromTo(
  chars,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 5,
    ease: 'power4.out',
  }
)
}, [])

  return (
    <div>
    <main className="bg-black-100 text-white w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
   <div className="name">
   <span className='dev-shreyash'>  dev-Shreyash </span>
   </div>
   <div className="links">
      <a href=""><img src="/icons8-github.svg" alt="" /></a>
      <a href=""><img src="/icons8-linkedin.svg" alt="" /></a>
      <a href=""><img src="/icons8-stack-overflow.svg" alt="" /></a>
      <a href=""><img src="/icons8-twitterx.svg" alt="" /></a>
    </div>
    <div className="buttons">
      <button className="resume">Resume <img src="/download-svgrepo-com.svg" alt="" /></button>
      <button className="contact">Contact</button>
    </div>
        </main>
 
      
    </div>
  )
}

export default Main
