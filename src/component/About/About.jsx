import React from 'react'
import "./about.css"
import theme from "../../assets/theme_pattern.svg"
import profile from "../../assets/creation3.jpg"

const About = () => {
  return (
    <>
     <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
            <img className='profile-pic1' src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Currently I'm Fresher Fullstack Developer</p>
                    <p>As a Java Full Stack Developer, I'll master both front-end and back-end development, creating seamless web applications. This role offers freshers a chance to work with Java, HTML, CSS, and JavaScript, gaining versatile skills and experience in building robust, user-friendly software solutions in the dynamic tech industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>JAVA</p> <hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>SPRINGBOOT</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p> <hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="achivements">
            <div className="achivement">
                <h1>Certificate Java Developer</h1>
                <p>Acciojob Full Stack Java Developer</p>
            </div>
            <hr />
            <div className="achivement">
                <h1>20+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="achivement">
                <h1>Dsa Questions</h1>
                <p>200+ DSA Questions Solved </p>
            </div>
        </div>
     </div>
    </>
  )
}

export default About