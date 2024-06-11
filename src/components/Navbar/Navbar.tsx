import React from 'react'
import "./navbar.scss"
import TransitionLink from "@/components/TransitionLink";
const Navbar = () => {
  return (
    <div className='nav'>
     <TransitionLink href="/about" label="About ->" />
     <TransitionLink href="/career" label="Career ->" />
     <TransitionLink href="/projects" label="Projects ->" />      
     <TransitionLink href="/contact" label="Contact ->" />
    </div>
  )
}

export default Navbar
