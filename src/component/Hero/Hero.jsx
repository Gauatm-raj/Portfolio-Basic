import React from 'react'
import "./hero.css"
import profile from "../../assets/creation3.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img className='profile-pic' src={profile} alt="" />
        <h1>I'm <span>Gautam Raj</span>, Java Developer based in INDIA</h1>
        <p>I am a fullstack web debveloper from Patna Bihar</p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero