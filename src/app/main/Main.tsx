import React from 'react'

import './main.scss'
const Main = () => {
  return (
    <div>
    <main className="bg-black-100 text-white w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
   <div className="name">
   <span>  dev-Shreyash </span>
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
